import './Testimonials.css';

const voices = [
  {
    id: 1,
    quote: 'タブレットでゲームばかりしていた息子が、自分からAIを使った工作をするようになりました。「ただ遊ぶ」から「ものを作る」への変化に驚いています。',
    name: '保護者（小3・男子）',
  },
  {
    id: 2,
    quote: 'ニュースを見て「これ本当かな？」と言うようになりました。自分で調べて確認するクセがついてきたと実感しています。',
    name: '保護者（小5・女子）',
  },
  {
    id: 3,
    quote: 'バイブコーディングで自分だけのゲームを作ったと聞いて本当に驚きました。「プログラミングは難しい」という先入観がなくなったようです。',
    name: '保護者（小6・男子）',
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="h-xl testimonials-heading">保護者の方からの声</h2>

        <div className="voices-grid">
          {voices.map((v) => (
            <figure key={v.id} className="voice-item">
              <blockquote className="voice-quote">
                <p>{v.quote}</p>
              </blockquote>
              <figcaption className="voice-name">— {v.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
