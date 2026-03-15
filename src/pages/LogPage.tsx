import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { chroniclePhases } from '../data/chronicle'
import { useOffice } from '../contexts/OfficeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './LogPage.css'

type CategoryFilter = 'all' | 'research' | 'meeting' | 'decision'

export function LogPage() {
  const { journalEntries } = useOffice()
  const [searchParams] = useSearchParams()
  const entryParam = searchParams.get('entry')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
  const [expandedId, setExpandedId] = useState<string | null>(entryParam)
  const containerRef = useScrollReveal()
  const entryRefs = useRef<Record<string, HTMLElement | null>>({})

  const uniqueMonths = useMemo(() => {
    const months = new Set(journalEntries.map((e) => e.date.slice(0, 7)))
    return [...months]
  }, [journalEntries])
  const [monthFilter, setMonthFilter] = useState<string>('all')

  const filtered = useMemo(() => {
    let entries = journalEntries
    if (monthFilter !== 'all') {
      entries = entries.filter((e) => e.date.startsWith(monthFilter))
    }
    return entries
  }, [journalEntries, monthFilter])

  useEffect(() => {
    if (entryParam) {
      setExpandedId(entryParam)
      requestAnimationFrame(() => {
        const el = entryRefs.current[entryParam]
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    }
  }, [entryParam])

  return (
    <div className="log page-enter" ref={containerRef}>
      {/* 헤더 */}
      <header className="log__header">
        <h1>Log</h1>
        <p className="log__subtitle">개발 과정 기록</p>
      </header>

      {/* 타임라인 스트립 */}
      <div className="log__timeline-strip scroll-reveal">
        {chroniclePhases.map((phase, i) => (
          <div key={phase.title} className="log__timeline-item">
            <span className="log__timeline-num">{i + 1}</span>
            <div>
              <strong>{phase.title}</strong>
              <p>{phase.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 필터 */}
      <div className="log__filters">
        <select
          className="log__select"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          aria-label="월 필터"
        >
          <option value="all">전체 기간</option>
          {uniqueMonths.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <div className="log__tags">
          {(['all', 'research', 'meeting', 'decision'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              className={`log__tag ${categoryFilter === cat ? 'log__tag--active' : ''}`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat === 'all' ? '전체' : cat === 'research' ? '리서치' : cat === 'meeting' ? '회의' : '결정'}
            </button>
          ))}
        </div>
      </div>

      {/* 저널 엔트리 리스트 */}
      <section className="log__section">
        <h2>개발 일지</h2>
        {filtered.map((entry) => (
          <article
            key={entry.id}
            ref={(el) => { entryRefs.current[entry.id] = el }}
            className={`log__entry ${expandedId === entry.id ? 'log__entry--expanded' : ''}`}
          >
            <button
              type="button"
              className="log__entry-header"
              onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
              aria-expanded={expandedId === entry.id}
            >
              <div>
                <time className="log__date">{entry.date}</time>
                <h3 className="log__entry-title">{entry.researchTitle}</h3>
              </div>
              <div className="log__entry-actions">
                <span className="log__badge">{entry.meetingItems.length}개 회의 노트</span>
                <span className={`log__expand-icon ${expandedId === entry.id ? 'log__expand-icon--open' : ''}`}>
                  ▼
                </span>
              </div>
            </button>

            {expandedId === entry.id && (
              <div className="log__entry-body">
                {(categoryFilter === 'all' || categoryFilter === 'research') && (
                  <div className="log__detail">
                    <p>{entry.researchSummary}</p>
                    <ul className="log__items">
                      {entry.researchItems.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}</strong>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(categoryFilter === 'all' || categoryFilter === 'meeting') && (
                  <div className="log__detail">
                    <h3>{entry.meetingTitle}</h3>
                    <p>{entry.meetingSummary}</p>
                    <ul className="log__items">
                      {entry.meetingItems.map((item) => (
                        <li key={`${entry.date}-${item.speaker}`}>
                          <strong>{item.speaker}</strong>
                          <p>{item.note}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(categoryFilter === 'all' || categoryFilter === 'decision') && (
                  <div className="log__detail">
                    <h3>회의 결정</h3>
                    <ul className="log__items">
                      {entry.decisions.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}</strong>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}
