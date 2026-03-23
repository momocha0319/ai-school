import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        {/* Photo column — replace src with your own image as needed */}
        <div className="about-photo-wrap">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
            alt="子どもが集中して学習している様子"
            className="about-photo"
          />
        </div>

        {/* Text column */}
        <div className="about-content">
          <h2 className="h-xl about-heading">便利なツールに「使われない」ために。</h2>

          <p className="about-body">生成AIやスマートフォンは、子どもたちの可能性を無限に広げる道具です。しかし同時に、<strong>「考えなくなるリスク」</strong>や<strong>「真偽が分からない情報を信じ込むリスク」</strong>と隣り合わせでもあります。</p>

          <p className="about-pull">今の時代に必要なのは「ツールの使い方」ではなく、「何を問いかけるか」を考え、出てきた答えを<em>自ら見極める力</em>です。</p>

          <div className="about-topics">
            <div className="about-topic">
              <span className="topic-label">01</span>
              <span>フェイク画像の見極め</span>
            </div>
            <div className="about-topic">
              <span className="topic-label">02</span>
              <span>情報漏洩の防止</span>
            </div>
            <div className="about-topic">
              <span className="topic-label">03</span>
              <span>思考停止への抵抗力</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
