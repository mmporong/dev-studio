import { useNavigate, Link } from 'react-router-dom'
import { projectSummary } from '../data/meowbeat'
import { useOffice } from '../contexts/OfficeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { withBasePath } from '../utils/publicPath'
import './HomePage.css'

export function HomePage() {
  const navigate = useNavigate()
  const { journalEntries } = useOffice()
  const containerRef = useScrollReveal()
  const recentEntries = journalEntries.slice(0, 3)

  return (
    <div className="home page-enter" ref={containerRef}>
      {/* Hero */}
      <section className="home__hero">
        <div className="home__hero-text">
          <p className="home__label">indie game studio</p>
          <h1>LIM Studio</h1>
          <p className="home__tagline">고양이와 리듬과 코드를 엮는 1인 개발 스튜디오</p>
          <p className="home__stack">Unity · Python · AI Pipeline</p>
        </div>
        <div className="home__hero-mascot">
          <img
            src={withBasePath('catrush-cats/Cat/01.png')}
            alt="고양이 마스코트"
            className="home__cat-sprite"
          />
        </div>
      </section>

      {/* 현재 프로젝트 */}
      <section className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>현재 프로젝트</h2>
          <Link to="/work" className="home__link-btn">
            프로젝트 상세 →
          </Link>
        </div>
        <Link to="/work" className="home__project-card">
          <div className="home__project-top">
            <div>
              <h3>{projectSummary.name}</h3>
              <p className="home__project-tagline">{projectSummary.tagline}</p>
            </div>
            <div className="home__project-meta">
              <span>{projectSummary.platform}</span>
              <span>{projectSummary.build}</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Playground 미리보기 */}
      <section className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>에이전트 오피스</h2>
          <Link to="/playground" className="home__link-btn">
            Playground에서 체험 →
          </Link>
        </div>
        <Link to="/playground" className="home__playground-preview">
          <div className="home__playground-inner">
            <p className="home__playground-desc">7명의 AI 에이전트가 일하는 픽셀 사무실을 체험해보세요</p>
            <span className="home__playground-cta">Playground 열기 →</span>
          </div>
        </Link>
      </section>

      {/* 최근 업데이트 */}
      <section className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>최근 업데이트</h2>
          <Link to="/log" className="home__link-btn">
            전체 로그 →
          </Link>
        </div>
        <div className="home__update-grid">
          {recentEntries.map((entry) => (
            <article
              key={entry.id}
              className="home__update-card"
              onClick={() => navigate(`/log?entry=${entry.id}`)}
            >
              <time>{entry.date}</time>
              <h3>{entry.researchTitle}</h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
