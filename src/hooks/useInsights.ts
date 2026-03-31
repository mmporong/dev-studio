import { useCallback, useEffect, useState } from 'react'
import type { InsightsData, InsightCategory } from '../types/insight'
import { withBasePath } from '../utils/publicPath'

export interface UseInsightsResult {
  data: InsightsData | null
  loading: boolean
  error: string | null
  weekFilter: string
  setWeekFilter: (week: string) => void
  categoryFilter: InsightCategory | 'all'
  setCategoryFilter: (cat: InsightCategory | 'all') => void
  availableWeeks: string[]
}

export function useInsights(): UseInsightsResult {
  const [data, setData] = useState<InsightsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [weekFilter, setWeekFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<InsightCategory | 'all'>('all')

  const fetchInsights = useCallback(async () => {
    try {
      const url = `${withBasePath('insights.json')}?t=${Date.now()}`
      const res = await fetch(url)
      if (!res.ok) {
        setError('인사이트 데이터를 불러올 수 없습니다')
        return
      }
      const json: unknown = await res.json()
      if (typeof json === 'object' && json !== null && 'weeks' in json) {
        setData(json as InsightsData)
        setError(null)
      } else {
        setError('insights.json 형식이 올바르지 않음')
      }
    } catch {
      setError(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchInsights()
  }, [fetchInsights])

  const availableWeeks = data?.weeks.map((w) => w.weekOf) ?? []

  return {
    data,
    loading,
    error,
    weekFilter,
    setWeekFilter,
    categoryFilter,
    setCategoryFilter,
    availableWeeks,
  }
}
