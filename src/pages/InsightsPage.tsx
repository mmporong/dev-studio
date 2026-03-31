import { useMemo } from 'react'
import { useInsights } from '../hooks/useInsights'
import { useLanguage } from '../contexts/LanguageContext'
import type { InsightCategory } from '../types/insight'
import './InsightsPage.css'

const CATEGORY_LABELS: Record<InsightCategory | 'all', { ko: string; en: string }> = {
  all: { ko: '전체', en: 'All' },
  game: { ko: '게임', en: 'Game' },
  ai: { ko: 'AI', en: 'AI' },
  frontend: { ko: '프론트엔드', en: 'Frontend' },
  backend: { ko: '백엔드', en: 'Backend' },
  infra: { ko: '인프라', en: 'Infra' },
  data: { ko: '데이터', en: 'Data' },
  general: { ko: '종합', en: 'General' },
}

const CATEGORIES = Object.keys(CATEGORY_LABELS) as (InsightCategory | 'all')[]

function formatWeekLabel(weekOf: string): string {
  const match = weekOf.match(/^(\d{4})-W(\d{2})$/)
  if (!match) return weekOf
  return `${match[1]}년 ${parseInt(match[2], 10)}주차`
}

export function InsightsPage() {
  const { locale } = useLanguage()
  const {
    data,
    loading,
    error,
    weekFilter,
    setWeekFilter,
    categoryFilter,
    setCategoryFilter,
    availableWeeks,
  } = useInsights()

  const filteredWeeks = useMemo(() => {
    if (!data) return []
    let weeks = data.weeks
    if (weekFilter !== 'all') {
      weeks = weeks.filter((w) => w.weekOf === weekFilter)
    }
    if (categoryFilter !== 'all') {
      weeks = weeks
        .map((w) => ({
          ...w,
          articles: w.articles.filter((a) => a.category === categoryFilter),
        }))
        .filter((w) => w.articles.length > 0)
    }
    return weeks
  }, [data, weekFilter, categoryFilter])

  const totalArticles = filteredWeeks.reduce((sum, w) => sum + w.articles.length, 0)

  if (loading) {
    return (
      <div className="insights page-enter">
        <header className="insights__header">
          <h1>Insights</h1>
        </header>
        <div className="insights__loading">
          {locale === 'ko' ? '인사이트를 불러오는 중...' : 'Loading insights...'}
        </div>
      </div>
    )
  }

  return (
    <div className="insights page-enter">
      <header className="insights__header">
        <h1>Insights</h1>
        <p className="insights__subtitle">
          {locale === 'ko'
            ? '국내 기술 블로그 주간 인사이트'
            : 'Weekly insights from Korean tech blogs'}
        </p>
        {data?.lastUpdated && (
          <p className="insights__meta">
            {locale === 'ko' ? '마지막 업데이트: ' : 'Last updated: '}
            {new Date(data.lastUpdated).toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US')}
          </p>
        )}
      </header>

      {error && <p className="insights__loading">{error}</p>}

      <div className="insights__filters">
        <select
          className="insights__select"
          value={weekFilter}
          onChange={(e) => setWeekFilter(e.target.value)}
          aria-label={locale === 'ko' ? '주차 필터' : 'Week filter'}
        >
          <option value="all">{locale === 'ko' ? '전체 기간' : 'All weeks'}</option>
          {availableWeeks.map((w) => (
            <option key={w} value={w}>{formatWeekLabel(w)}</option>
          ))}
        </select>
        <div className="insights__tags">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`insights__tag ${categoryFilter === cat ? 'insights__tag--active' : ''}`}
              onClick={() => setCategoryFilter(cat)}
            >
              {CATEGORY_LABELS[cat][locale]}
            </button>
          ))}
        </div>
      </div>

      {totalArticles > 0 && (
        <p className="insights__count">
          {locale === 'ko' ? `${totalArticles}개의 글` : `${totalArticles} articles`}
        </p>
      )}

      <section className="insights__section">
        {filteredWeeks.length === 0 ? (
          <div className="insights__empty">
            <p>{'📡'}</p>
            <p>
              {locale === 'ko'
                ? '아직 수집된 인사이트가 없습니다'
                : 'No insights collected yet'}
            </p>
          </div>
        ) : (
          filteredWeeks.map((week) => (
            <div key={week.weekOf} className="insights__week-group">
              <h2 className="insights__week-label">{formatWeekLabel(week.weekOf)}</h2>
              <div className="insights__card-list">
                {week.articles.map((article) => (
                  <a
                    key={article.id}
                    className="insights__card"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="insights__card-body">
                      <div className="insights__card-top">
                        <span className={`insights__badge insights__badge--${article.category}`}>
                          {CATEGORY_LABELS[article.category][locale]}
                        </span>
                        <span className="insights__company">{article.company}</span>
                      </div>
                      <h3 className="insights__card-title">{article.title}</h3>
                      {article.summary && (
                        <p className="insights__card-summary">{article.summary}</p>
                      )}
                    </div>
                    {article.publishedAt && (
                      <span className="insights__card-date">
                        {new Date(article.publishedAt).toLocaleDateString(
                          locale === 'ko' ? 'ko-KR' : 'en-US',
                          { month: 'short', day: 'numeric' }
                        )}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  )
}
