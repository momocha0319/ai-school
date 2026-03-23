import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background photo — replace src with your own image as needed */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=75"
          alt=""
        />
        <div className="hero-overlay" />
      </div>

      {/* Main content */}
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">小学1年生〜中学3年生対象 · 完全オンライン（Zoom）· AI &amp; ITリテラシースクール</p>
        <h1 className="h-display hero-title">
          AIに使われる子ではなく、<em>AIを使いこなす子</em>に。
        </h1>
        <p className="hero-desc">生成AI・情報リテラシー・バイブコーディングまで。Zoomグループレッスンで全国どこからでも受講できる8つのカリキュラムで、お子さんの「問う力」を育てます。</p>
        <div className="hero-tags">
          <span>完全オンライン・全国対応</span>
          <span>LLM・AI活用</span>
          <span>バイブコーディング</span>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-amber">資料を請求する →</a>
          <a href="#courses" className="btn btn-outline-white">コースを見る</a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
}
