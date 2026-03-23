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
        <p className="eyebrow cta-eyebrow">Free Trial Lesson</p>
        <h2 className="h-xl cta-title">未来を生き抜く「力」を、今から育てませんか？</h2>
        <p className="cta-body">
          まずは無料体験レッスンで、AIやテクノロジーに触れる第一歩を踏み出してみましょう。
        </p>
        <div className="cta-actions">
          <button className="btn btn-amber cta-btn">
            無料体験レッスンのご予約
          </button>
          <p className="cta-note">オンライン・対面どちらも対応可能です</p>
        </div>
      </div>
    </section>
  );
}
