import { readFileSync, writeFileSync } from 'fs'
import { createHash } from 'crypto'
import { join } from 'path'
import RssParser from 'rss-parser'
import * as cheerio from 'cheerio'
import Anthropic from '@anthropic-ai/sdk'

// ---------------------------------------------------------------------------
// Types (mirrored from src/types/insight.ts — no cross-import to keep script
// self-contained when run via tsx)
// ---------------------------------------------------------------------------
type InsightCategory = 'game' | 'ai' | 'frontend' | 'backend' | 'infra' | 'data' | 'general'

interface InsightArticle {
  id: string
  title: string
  url: string
  company: string
  category: InsightCategory
  summary: string
  publishedAt: string
  collectedAt: string
}

interface WeeklyInsight {
  weekOf: string
  articles: InsightArticle[]
}

interface InsightsData {
  lastUpdated: string
  weeks: WeeklyInsight[]
}

interface BlogSource {
  name: string
  url: string
  rssUrl?: string | null
  type: 'rss' | 'scrape'
  category: InsightCategory
  selector?: string
  enabled?: boolean
  lastError?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Stable article ID: first 16 hex chars of SHA-256(url) */
function makeId(url: string): string {
  return createHash('sha256').update(url).digest('hex').slice(0, 16)
}

/** Strip HTML tags, collapse whitespace, trim */
function sanitiseTitle(raw: string): string {
  return raw.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

/** Filter out non-article links (nav, tags, categories) */
function isLikelyArticle(title: string, url: string): boolean {
  if (title.length < 8) return false
  if (/\/(tags?|categor|#section-)/.test(url)) return false
  if (/^(see more|use cases|view all|more)$/i.test(title)) return false
  return true
}

/** ISO week string: YYYY-Wnn */
function isoWeek(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
}

/** Max title length passed to LLM */
const MAX_TITLE_LENGTH = 200

/** Patterns that indicate prompt injection attempts in scraped titles */
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /disregard\s+(all\s+)?prior/i,
  /forget\s+(all\s+)?previous/i,
  /you\s+are\s+now\s+(a\s+)?/i,
  /<\/?system>/i,
  /\[INST\]/i,
  /\bprompt\s*injection\b/i,
]

/**
 * Sanitises a title before passing to LLM.
 * Returns null if the title looks like a prompt injection attempt.
 */
function sanitiseForLLM(title: string): string | null {
  const truncated = title.length > MAX_TITLE_LENGTH ? title.slice(0, MAX_TITLE_LENGTH) : title
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(truncated)) return null
  }
  return truncated
}

/** Returns true if date is within the last 30 days */
function isWithinLastWeek(dateStr: string): boolean {
  if (!dateStr) return false
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return false
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000
  return d.getTime() >= cutoff
}

// ---------------------------------------------------------------------------
// Fetchers
// ---------------------------------------------------------------------------

interface RawArticle {
  title: string
  url: string
  publishedAt: string
}

async function fetchRss(source: BlogSource): Promise<RawArticle[]> {
  const parser = new RssParser({ timeout: 10000 })
  const feed = await parser.parseURL(source.rssUrl!)
  const results: RawArticle[] = []
  for (const item of feed.items ?? []) {
    const url = item.link ?? ''
    const title = item.title ?? ''
    const publishedAt = item.isoDate ?? item.pubDate ?? ''
    if (!url || !title) continue
    if (publishedAt && !isWithinLastWeek(publishedAt)) continue
    results.push({ title: title.trim(), url, publishedAt })
  }
  return results
}

async function fetchScrape(source: BlogSource): Promise<RawArticle[]> {
  const res = await fetch(source.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; InsightBot/1.0)',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
    },
    signal: AbortSignal.timeout(15000),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  // Use arrayBuffer + TextDecoder to handle non-UTF-8 pages (e.g. EUC-KR)
  const buf = await res.arrayBuffer()
  const contentType = res.headers.get('content-type') ?? ''
  const charsetMatch = contentType.match(/charset=([^\s;]+)/i)
  const charset = charsetMatch ? charsetMatch[1].toLowerCase() : 'utf-8'
  let html: string
  try {
    html = new TextDecoder(charset).decode(buf)
  } catch {
    html = new TextDecoder('utf-8').decode(buf)
  }
  const $ = cheerio.load(html)
  const seen = new Set<string>()
  const results: RawArticle[] = []

  $(source.selector ?? 'article a').each((_i, el) => {
    if (results.length >= 5) return false // cheerio returns false to break
    const href = $(el).attr('href') ?? ''
    const rawTitle = sanitiseTitle($(el).text())
    if (!rawTitle || rawTitle.length < 5) return
    // Resolve relative URLs
    let url = href
    try {
      url = new URL(href, source.url).toString()
    } catch {
      return
    }
    if (!isLikelyArticle(rawTitle, url)) return
    if (seen.has(url)) return
    seen.add(url)
    results.push({ title: rawTitle, url, publishedAt: '' })
  })

  if (results.length === 0) {
    console.warn(`  [degraded] selector matched 0 items: ${source.name}`)
    source.lastError = `selector 0-match @${new Date().toISOString()}`
  }

  return results
}

// ---------------------------------------------------------------------------
// Claude summarisation
// ---------------------------------------------------------------------------

interface ArticleToSummarise {
  title: string
  url: string
  defaultCategory: InsightCategory
}

interface SummaryResult {
  summary: string
  category: InsightCategory
}

const VALID_CATEGORIES: InsightCategory[] = ['game', 'ai', 'frontend', 'backend', 'infra', 'data', 'general']

async function summariseBatch(
  client: Anthropic,
  articles: ArticleToSummarise[],
): Promise<SummaryResult[]> {
  const articleList = articles
    .map((a, i) => `[${i + 1}] 제목: "${a.title}"\n    URL: ${a.url}`)
    .join('\n')

  const prompt = `아래 기술 블로그 게시글들 각각에 대해 한국어 한 줄 요약과 카테고리를 분류해 주세요.

카테고리 선택지: game, ai, frontend, backend, infra, data, general

응답 형식 (JSON 배열만, 다른 텍스트 없이):
[{"summary":"한국어 한 줄 요약","category":"카테고리"},...]

게시글 목록:
${articleList}`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : '[]'

  // Extract JSON array from response (may have markdown fences)
  const jsonMatch = text.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error('No JSON array in Claude response')

  const parsed: { summary: string; category: string }[] = JSON.parse(jsonMatch[0])

  return articles.map((a, i) => {
    const item = parsed[i]
    const category: InsightCategory =
      item && VALID_CATEGORIES.includes(item.category as InsightCategory)
        ? (item.category as InsightCategory)
        : a.defaultCategory
    const summary = item?.summary ?? a.title
    return { summary, category }
  })
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Resolve paths relative to the project root (cwd when run via `npx tsx scripts/fetch-insights.ts`)
  const projectRoot = process.cwd()
  const sourcesPath = join(projectRoot, 'scripts', 'blog-sources.json')
  const outputPath = join(projectRoot, 'public', 'insights.json')

  const sources: BlogSource[] = JSON.parse(readFileSync(sourcesPath, 'utf-8'))
  const existing: InsightsData = JSON.parse(readFileSync(outputPath, 'utf-8'))

  // Build a set of existing URLs for deduplication
  const existingUrls = new Set<string>()
  for (const week of existing.weeks) {
    for (const article of week.articles) {
      existingUrls.add(article.url)
    }
  }

  // Optionally initialise Claude client
  const apiKey = process.env.ANTHROPIC_API_KEY
  const anthropic = apiKey ? new Anthropic({ apiKey }) : null
  if (!anthropic) {
    console.log('[warn] ANTHROPIC_API_KEY not set — skipping summarisation, using titles as summaries')
  }

  // Collect new raw articles per source
  const newRaw: { raw: RawArticle; source: BlogSource }[] = []
  const companyStat: Record<string, number> = {}

  for (const source of sources) {
    if (source.enabled === false) {
      console.log(`[skip] ${source.name} (enabled:false, lastError: ${source.lastError ?? 'n/a'})`)
      continue
    }
    console.log(`[fetch] ${source.name} (${source.type})...`)
    try {
      let articles: RawArticle[]
      if (source.type === 'rss') {
        articles = await fetchRss(source)
      } else {
        articles = await fetchScrape(source)
      }

      let added = 0
      for (const raw of articles) {
        if (existingUrls.has(raw.url)) continue
        const cleanTitle = sanitiseForLLM(raw.title)
        if (!cleanTitle) {
          console.log(`  [filter] 의심 패턴 감지, 제외: "${raw.title.slice(0, 60)}..."`)
          continue
        }
        raw.title = cleanTitle
        existingUrls.add(raw.url) // prevent duplicates within this run
        newRaw.push({ raw, source })
        added++
      }
      console.log(`  -> ${added} new article(s)`)
    } catch (err) {
      console.error(`  [error] ${source.name}: ${(err as Error).message}`)
    }
  }

  // Summarise in batches of 10
  const BATCH_SIZE = 10
  const summarised: InsightArticle[] = []
  const now = new Date().toISOString()

  for (let i = 0; i < newRaw.length; i += BATCH_SIZE) {
    const batch = newRaw.slice(i, i + BATCH_SIZE)
    let summaries: SummaryResult[]

    if (anthropic) {
      try {
        console.log(`[ai] Summarising batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} articles)...`)
        summaries = await summariseBatch(
          anthropic,
          batch.map(b => ({ title: b.raw.title, url: b.raw.url, defaultCategory: b.source.category })),
        )
      } catch (err) {
        console.error(`[ai] Batch summarisation failed: ${(err as Error).message} — using titles`)
        summaries = batch.map(b => ({ summary: b.raw.title, category: b.source.category }))
      }
    } else {
      summaries = batch.map(b => ({ summary: b.raw.title, category: b.source.category }))
    }

    for (let j = 0; j < batch.length; j++) {
      const { raw, source } = batch[j]
      const { summary, category } = summaries[j]
      summarised.push({
        id: makeId(raw.url),
        title: raw.title,
        url: raw.url,
        company: source.name,
        category,
        summary,
        publishedAt: raw.publishedAt,
        collectedAt: now,
      })
      companyStat[source.name] = (companyStat[source.name] ?? 0) + 1
    }
  }

  // Group new articles by ISO week and merge into existing weeks map
  const weeksMap: Map<string, InsightArticle[]> = new Map()
  for (const week of existing.weeks) {
    weeksMap.set(week.weekOf, [...week.articles])
  }

  for (const article of summarised) {
    const weekKey = article.publishedAt
      ? isoWeek(new Date(article.publishedAt))
      : isoWeek(new Date())
    const list = weeksMap.get(weekKey) ?? []
    list.push(article)
    weeksMap.set(weekKey, list)
  }

  // Sort weeks descending and keep max 12
  const sortedWeeks: WeeklyInsight[] = [...weeksMap.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 12)
    .map(([weekOf, articles]) => ({ weekOf, articles }))

  const output: InsightsData = {
    lastUpdated: now,
    weeks: sortedWeeks,
  }

  writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8')

  // Summary report
  const totalNew = summarised.length
  console.log(`\n=== 완료 ===`)
  console.log(`신규 아티클: ${totalNew}개`)
  if (totalNew > 0) {
    console.log('회사별 수집:')
    for (const [company, count] of Object.entries(companyStat)) {
      console.log(`  ${company}: ${count}개`)
    }
  }
  console.log(`저장 위치: ${outputPath}`)
}

main().then(() => {
  process.exit(0)
}).catch(err => {
  console.error('[fatal]', err)
  process.exit(1)
})
