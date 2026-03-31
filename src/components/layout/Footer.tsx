import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">LIM Studio</div>
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
          <p className="footer__copy">&copy; 2025 하드보일드 · 임주영</p>
          <a href="https://hits.seeyoufarm.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmmporong.github.io%2Fagent-office&count_bg=%233182F6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitors&edge_flat=true"
              alt="방문자 수"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
