import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      {/* Background image — replace src with your own as needed */}
      <div className="cta-bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=75"
          alt=""
        />
        <div className="cta-overlay" />
      </div>

      <div className="container cta-content">
        <p className="eyebrow cta-eyebrow">資料請求・無料体験</p>
        <h2 className="h-xl cta-title">未来を生き抜く「力」を、今から育てませんか？</h2>
        <p className="cta-body">料金・カリキュラム詳細は資料にまとめています。まずはお気軽にご請求ください。実際の授業を体験したい方には、60分の無料体験レッスン（座学・実践どちらかお選びいただけます）もご用意しています。</p>
        <div className="cta-actions">
          <button className="btn btn-amber cta-btn">資料を請求する（無料）</button>
          <button className="btn btn-outline-white cta-btn-sub">無料体験レッスンを予約する</button>
        </div>
        <p className="cta-note">完全オンライン（Zoom）· 全国どこからでも受講可能</p>
      </div>
    </section>
  );
}
