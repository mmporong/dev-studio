import { useLanguage } from '../../contexts/LanguageContext'
import './Footer.css'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">Hardboiled Studio</div>
          <div className="footer__links">
            <a
              href="https://github.com/mmporong"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">{t.footer.copy}</p>
          <img
            src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fmmporong.github.io%2Fdev-studio&label=visitors&countColor=%233182f6&style=flat"
            alt="visitors"
          />
        </div>
      </div>
    </footer>
  )
}
