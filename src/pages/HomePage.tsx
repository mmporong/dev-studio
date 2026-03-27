import { useNavigate, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { publishedGames } from '../data/publishedGames'
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
          <p className="home__label">cat game studio</p>
          <h1>하드보일드</h1>
          <p className="home__tagline">
            고양이를 사랑하는 1인 개발자가 만드는 작고 따뜻한 게임들
          </p>
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
              href="#games"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('games')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              게임 보러가기
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

      {/* 출시한 게임들 */}
      <section id="games" className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>출시한 게임들</h2>
          <a
            className="home__link-btn"
            href="https://play.google.com/store/apps/developer?id=%ED%95%98%EB%93%9C%EB%B3%B4%EC%9D%BC%EB%93%9C"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play에서 전체 보기 →
          </a>
        </div>
        <div className="home__game-grid">
          {publishedGames.map((game) => (
            <a
              key={game.id}
              className="home__game-card"
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="home__game-header">
                <img
                  src={withBasePath(game.icon)}
                  alt={game.name}
                  className="home__game-icon"
                />
                <div>
                  <h3 className="home__game-name">{game.name}</h3>
                  <span
                    className="home__game-badge"
                    style={{
                      background: `${game.accent}14`,
                      color: game.accent,
                    }}
                  >
                    {game.genre}
                  </span>
                </div>
              </div>
              <p className="home__game-desc">{game.description}</p>
              <div className="home__game-screenshots">
                {game.screenshots.map((ss, i) => (
                  <img
                    key={i}
                    src={withBasePath(ss)}
                    alt={`${game.name} 스크린샷 ${i + 1}`}
                    className="home__game-ss"
                  />
                ))}
              </div>
              <div className="home__game-footer">
                {game.rating && (
                  <span className="home__game-rating">
                    ★ {game.rating}
                    {game.reviewCount && (
                      <span className="home__game-reviews">
                        ({game.reviewCount})
                      </span>
                    )}
                  </span>
                )}
                <span className="home__game-downloads">
                  {game.downloads} 다운로드
                </span>
              </div>
              <span className="home__game-store-link">Google Play →</span>
            </a>
          ))}
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
          <h2>만들고 있는 게임</h2>
          <Link to="/work" className="home__link-btn">
            개발 과정 보기 →
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
          <h2>개발 일지</h2>
          <Link to="/log" className="home__link-btn">
            일지 전체 보기 →
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
