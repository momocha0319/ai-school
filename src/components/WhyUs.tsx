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
    title: '「守る」と「使う」、両方を学ぶのはここだけ',
    body: 'フェイク情報・個人情報漏洩への対処（守る）と、LLM・バイブコーディング・AIサービス活用（使う）の両方を扱うスクールは多くありません。テクノロジーを正しく恐れ、かつ積極的に使える子どもを育てます。',
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
