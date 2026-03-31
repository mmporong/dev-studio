export type InsightCategory = 'game' | 'ai' | 'frontend' | 'backend' | 'infra' | 'data' | 'general'

export interface InsightArticle {
  id: string
  title: string
  url: string
  company: string
  category: InsightCategory
  summary: string
  publishedAt: string
  collectedAt: string
}

export interface WeeklyInsight {
  weekOf: string
  articles: InsightArticle[]
}

export interface InsightsData {
  lastUpdated: string
  weeks: WeeklyInsight[]
}
