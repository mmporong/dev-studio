import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import './NavBar.css'

const navItems = [
  { to: '/', key: 'home' as const },
  { to: '/work', key: 'work' as const },
  { to: '/log', key: 'log' as const },
  { to: '/insights', key: 'insights' as const },
  { to: '/playground', key: 'playground' as const },
]

export function NavBar() {
  const { locale, t, toggleLocale } = useLanguage()

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-text">LIM Studio</span>
        </NavLink>
        <div className="navbar__links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
        </div>
        <button className="navbar__lang" onClick={toggleLocale} aria-label="Toggle language">
          {locale === 'ko' ? 'EN' : 'KO'}
        </button>
        <a
          className="navbar__github"
          href="https://github.com/mmporong"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}
