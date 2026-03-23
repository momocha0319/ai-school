import './WhyUs.css';

const reasons = [
  {
    num: '1',
    title: '「問う力」こそ、AI時代の最強の武器',
    body: 'AIは質問した内容にしか答えません。どんなに高度なAIが登場しても、「何を聞くべきか」を考える力がなければ宝の持ち腐れです。当スクールでは、ツールの使い方より先に、考える力・問いを立てる力を育てます。',
  },
  {
    num: '2',
    title: '「また来たい」を生む体験型の授業設計',
    body: '子どもは「やりたい」という気持ちがあるときに一番吸収します。ゲーム・AI絵かき・自分のプログラムを作る体験など、好奇心に火をつけるカリキュラムを設計。難しい概念も、楽しい文脈の中で自然に身につきます。',
  },
  {
    num: '3',
    title: '全国どこからでも、自宅から本格的に学べる',
    body: '完全オンライン（Zoom）だから通塾の負担ゼロ。北海道から沖縄まで、同じ志を持つ仲間とグループレッスンで学べます。座学コースはスマホ・タブレットでも参加でき、実践コースもすべてブラウザ完結で特別なソフトのインストールは不要です。',
  },
];

export default function WhyUs() {
  return (
    <section className="section whyus-section">
      <div className="container">
        <div className="whyus-header">
          <h2 className="h-xl">なぜ、このスクールなのか</h2>
        </div>

        <dl className="whyus-list">
          {reasons.map((r) => (
            <div key={r.num} className="whyus-item">
              <dt>
                <span className="whyus-num">{r.num}</span>
                <span className="whyus-title h-md">{r.title}</span>
              </dt>
              <dd className="whyus-body">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
