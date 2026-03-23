import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">AI</span>
              <span className="logo-text">Literacy School</span>
            </div>
            <p className="brand-desc">AI時代に正しいリテラシーを。未来を生き抜く力を育むスクール。</p>
          </div>

          <div className="footer-nav">
            <p className="footer-col-title">Navigation</p>
            <ul>
              <li><a href="#">Topページ</a></li>
              <li><a href="#about">スクールについて</a></li>
              <li><a href="#courses">カリキュラム</a></li>
              <li><a href="#contact">資料請求・無料体験</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <p className="footer-col-title">Contact</p>
            <p>info@ailiteracy-school.example.com</p>
            <p>00-0000-0000</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 AI &amp; IT Literacy School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
