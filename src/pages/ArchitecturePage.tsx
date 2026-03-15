import {
  pageMeta,
  problems,
  antiPatterns,
  strategies,
  caseStudies,
  results,
  tierLayers,
} from '../data/aiArchitecture'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ArchitecturePage.css'

export function ArchitecturePage() {
  const containerRef = useScrollReveal()

  return (
    <div className="arch page-enter" ref={containerRef}>
      {/* 히어로 */}
      <header className="arch__hero">
        <h1>{pageMeta.title}</h1>
        <p className="arch__subtitle">{pageMeta.subtitle}</p>
        <p className="arch__role">{pageMeta.role}</p>
        <div className="arch__tech">
          {pageMeta.techStack.map((t) => (
            <span key={t} className="arch__tech-pill">{t}</span>
          ))}
        </div>
      </header>

      {/* 문제 정의 */}
      <section className="arch__section scroll-reveal">
        <h2>문제 정의 — AI 코딩 도구의 Unity 한계</h2>
        <p className="arch__section-desc">
          AI 코딩 도구를 Unity 개발에 적용하면서 반복적으로 마주친 5가지 문제.
          공통 원인: AI 도구가 프로젝트의 아키텍처 규칙을 모른다.
        </p>
        <div className="arch__problem-grid">
          {problems.map((p) => (
            <article key={p.num} className="arch__problem-card">
              <span className="arch__problem-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.symptom}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 해결 전략 */}
      <section className="arch__section scroll-reveal">
        <h2>해결 — 4가지 AI 최적화 전략</h2>

        {strategies.map((s) => (
          <div key={s.id} className="arch__strategy scroll-reveal">
            <h3>{s.title}</h3>
            <p className="arch__strategy-desc">{s.description}</p>
            <pre className="arch__code">
              <code>{s.code.join('\n')}</code>
            </pre>
            <div className="arch__metrics">
              {s.metrics.map((m) => (
                <div key={m.label} className="arch__metric">
                  <span className="arch__metric-value">{m.value}</span>
                  <span className="arch__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Anti-Pattern 규칙 */}
      <section className="arch__section scroll-reveal">
        <h2>Anti-Pattern 규칙 10개</h2>
        <p className="arch__section-desc">AI hallucination 차단을 위한 "DO NOT" 규칙</p>
        <ul className="arch__rules">
          {antiPatterns.map((rule) => (
            <li key={rule} className="arch__rule">{rule}</li>
          ))}
        </ul>
      </section>

      {/* 4-tier 다이어그램 */}
      <section className="arch__section scroll-reveal">
        <h2>Assembly Definition 4-tier 구조</h2>
        <div className="arch__tier-diagram">
          {tierLayers.map((layer, i) => (
            <div key={layer.tag} className="arch__tier-row">
              <div className="arch__tier-card">
                <span className="arch__tier-tag">{layer.tag}</span>
                <strong>{layer.name}</strong>
                <span className="arch__tier-desc">{layer.desc}</span>
              </div>
              {i < tierLayers.length - 1 && (
                <div className="arch__tier-arrow">↓ 참조</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 적용 사례 */}
      <section className="arch__section scroll-reveal">
        <h2>실제 적용 — 2개 프로젝트</h2>
        <div className="arch__case-grid">
          {caseStudies.map((cs) => (
            <article key={cs.name} className="arch__case-card">
              <span className="arch__case-genre">{cs.genre}</span>
              <h3>{cs.name}</h3>
              <ul>
                {cs.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 결과 */}
      <section className="arch__section scroll-reveal">
        <h2>결과 — 정량적 효과</h2>
        <div className="arch__result-list">
          {results.map((r) => (
            <div key={r.effect} className="arch__result-item">
              <strong>{r.effect}</strong>
              <p>{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 인사이트 */}
      <section className="arch__section arch__insight scroll-reveal">
        <h2>핵심 인사이트</h2>
        <blockquote className="arch__quote">
          이 작업의 본질은 "좋은 코드를 짜는 것"이 아니라,
          AI가 좋은 코드를 짜도록 환경을 설계하는 것이었다.
        </blockquote>
        <div className="arch__insight-grid">
          <div className="arch__insight-item">
            <strong>CLAUDE.md</strong>
            <p>AI에게 "무엇을 하지 말 것"을 알려주는 가드레일</p>
          </div>
          <div className="arch__insight-item">
            <strong>Assembly Definition</strong>
            <p>AI가 규칙을 어겼을 때 컴파일러가 즉시 알려주는 자동 피드백 루프</p>
          </div>
          <div className="arch__insight-item">
            <strong>ScriptableObject</strong>
            <p>AI가 하드코딩 대신 선택할 수 있는 구조화된 대안</p>
          </div>
          <div className="arch__insight-item">
            <strong>ServiceLocator</strong>
            <p>AI가 서비스를 찾을 때 항상 동일한 패턴을 따르게 하는 단일 접근점</p>
          </div>
        </div>
      </section>
    </div>
  )
}
