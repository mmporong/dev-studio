import { useNavigate, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { publishedGames } from '../data/publishedGames'
import { useOffice } from '../contexts/OfficeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { withBasePath } from '../utils/publicPath'
import './HomePage.css'

export function HomePage() {
  const navigate = useNavigate()
  const { journalEntries } = useOffice()
  const { t } = useLanguage()
  const containerRef = useScrollReveal()
  const recentEntries = journalEntries.slice(0, 3)

  return (
    <div className="home page-enter" ref={containerRef}>
      {/* Hero */}
      <section
        className="home__hero"
        style={
          {
            '--hero-bg': `url(${withBasePath('GraphicImage.jpg')})`,
          } as React.CSSProperties
        }
      >
        <div className="home__hero-text">
          <p className="home__label">{t.hero.label}</p>
          <h1>{t.hero.title}</h1>
          <p className="home__tagline">{t.hero.tagline}</p>
          <div className="home__hero-section-label">{t.hero.techStack}</div>
          <div className="home__stack">
            <img src="https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white" alt="Unity" />
            <img src="https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white" alt="C#" />
            <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" />
            <img src="https://img.shields.io/badge/Cursor-000000?style=flat&logo=cursor&logoColor=white" alt="Cursor" />
            <img src="https://img.shields.io/badge/Claude-D97757?style=flat&logo=anthropic&logoColor=white" alt="Claude" />
            <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white" alt="Notion" />
            <img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=slack&logoColor=white" alt="Slack" />
            <img src="https://img.shields.io/badge/Adobe_Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white" alt="Adobe Photoshop" />
            <img src="https://img.shields.io/badge/SolidWorks-CC1F35?style=flat&logo=solidworks&logoColor=white" alt="SolidWorks" />
            <img src="https://img.shields.io/badge/AutoCAD-0696D7?style=flat&logo=autocad&logoColor=white" alt="AutoCAD" />
          </div>
          <div className="home__hero-section-label">{t.hero.contact}</div>
          <div className="home__hero-links">
            <a href="mailto:mmporong@gmail.com">
              <img src="https://img.shields.io/badge/Email-mmporong%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
            </a>
            <a
              href="https://github.com/mmporong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/mmporong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin-white&logoColor=fff" alt="LinkedIn" />
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=7488802924019572290"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.shields.io/badge/Google_Play-4FC3F7?style=flat-square&logo=googleplay&logoColor=white" alt="Google Play" />
            </a>
            <a
              href="https://www.youtube.com/@hardboiledexpress940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.shields.io/badge/YouTube-FF0000?style=flat-square&logo=youtube&logoColor=white" alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="home__hero-mascot">
          <img
            src={withBasePath('Profile_Icon_Orange.png')}
            alt="하드보일드 개발자 프로필"
            className="home__profile-icon"
          />
        </div>
      </section>

      {/* 출시한 게임들 */}
      <section id="games" className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>{t.games.title}</h2>
          <a
            className="home__link-btn"
            href="https://play.google.com/store/apps/developer?id=%ED%95%98%EB%93%9C%EB%B3%B4%EC%9D%BC%EB%93%9C"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.games.viewAll}
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
                  {game.downloads} {t.games.downloads}
                </span>
              </div>
              <span className="home__game-store-link">{t.games.storeLink}</span>
            </a>
          ))}
        </div>
      </section>

      {/* 현재 프로젝트 */}
      <section className="home__section scroll-reveal">
        <div className="home__section-header">
          <h2>{t.projects.title}</h2>
          <Link to="/work" className="home__link-btn">
            {t.projects.viewAll}
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
          <h2>{t.log.title}</h2>
          <Link to="/log" className="home__link-btn">
            {t.log.viewAll}
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
