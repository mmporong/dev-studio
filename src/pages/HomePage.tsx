import { useNavigate, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useOffice } from '../contexts/OfficeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { OfficeMap } from '../components/office/OfficeMap'
import { withBasePath } from '../utils/publicPath'
import './HomePage.css'

export function HomePage() {
  const navigate = useNavigate()
  const {
    journalEntries,
    officeAgents,
    selectedAgentId,
    setSelectedAgentId,
  } = useOffice()
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
          <div className="home__stack">
            <span className="home__stack-badge">Unity</span>
            <span className="home__stack-badge">C#</span>
            <span className="home__stack-badge">React</span>
            <span className="home__stack-badge">TypeScript</span>
            <span className="home__stack-badge">Python</span>
            <span className="home__stack-badge">AI Pipeline</span>
          </div>
          <div className="home__hero-links">
            <a
              className="home__hero-btn home__hero-btn--github"
              href="https://github.com/mmporong"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="home__hero-btn home__hero-btn--contact"
              href="mailto:mmporong@gmail.com"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="home__hero-mascot">
          <img
            src={withBasePath('catrush-cats/Cat/01.png')}
            alt="고양이 마스코트"
            className="home__cat-sprite"
          />
        </div>
      </section>

      {/* 에이전트 오피스 */}
      <section className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>에이전트 오피스</h2>
          <Link to="/playground" className="home__link-btn">
            Playground 전체보기 →
          </Link>
        </div>
        <div className="home__office-map-wrap">
          <OfficeMap
            agents={officeAgents}
            selectedAgentId={selectedAgentId}
            onSelectAgent={setSelectedAgentId}
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
        <div className="home__project-list">
          {projects.map((project) => (
            <Link key={project.id} to="/work" className="home__project-card">
              <div className="home__project-top">
                <div>
                  <h3>{project.name}</h3>
                  <p className="home__project-tagline">{project.tagline}</p>
                </div>
                <div className="home__project-meta">
                  <span>{project.platform}</span>
                  <span>{project.phase}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
