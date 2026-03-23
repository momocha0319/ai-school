import './Courses.css';

const tracks = [
  {
    id: 'literacy',
    heading: '守る・考える',
    sub: '座学コース — スマホ・タブレット可',
    courses: [
      {
        step: '01',
        badge: '入門編',
        title: '「身の回りのIT」探検コース',
        body: 'Nintendo Switchなどが遠くの友達と繋がる通信の仕組みや、「Wi-Fiって何？」「なぜラグが起きるの？」の疑問を解消。単なる消費者から抜け出し、身近なインフラへの興味を育てます。',
      },
      {
        step: '02',
        badge: '体験編',
        title: 'AIとお絵かき・物語づくり',
        body: '「困った顔のネコ」など簡単な言葉でAIに画像を生成させ、デジタル絵本や図鑑を作成。遊びながら創造力を養い、AIを「使わされる」のではなく「使う」側の視点を育てます。',
      },
      {
        step: '03',
        badge: '実践編',
        title: '「ググる」力と情報の見極め',
        body: '知りたいことを素早く正確に検索するワードセンス競技、嘘の情報を見抜き複数のソースから事実を確認するクセづけ。フェイクニュースや誘導広告に騙されない自衛力が身につきます。',
      },
      {
        step: '04',
        badge: '思考編',
        title: '順番に考えるゲーム',
        body: '画面を使わず日常の手順をカードで論理的に並べ替え。プログラミングで必要な「アルゴリズム思考」の基礎を、遊びを通じて体得します。',
      },
    ],
  },
  {
    id: 'practice',
    heading: '使う・創る',
    sub: '実践コース — PC必須（RAM 4GB以上・Chrome/Edge最新版）',
    courses: [
      {
        step: '05',
        badge: 'LLM編',
        title: 'LLMを使いこなそう',
        body: 'ChatGPT・Claudeなど主要な大規模言語モデルを実際に操作。「良い問いを立てる力」を軸に、AIへの指示の仕方・出力の検証方法・活用の限界を体験から学びます。',
      },
      {
        step: '06',
        badge: '創造編',
        title: 'バイブコーディング入門',
        body: 'AIとの対話だけで自分だけのゲームやツールを作る「バイブコーディング」を体験。コードを「書く」より「読む力・修正する力」を養い、AIとの協働の感覚を身につけます。',
      },
      {
        step: '07',
        badge: '探索編',
        title: '多彩なAIサービスを探検',
        body: '画像生成・音楽生成・動画編集・翻訳・要約など、日常に溶け込む多様なAIサービスを横断的に体験・比較。それぞれの得意・不得意を理解し、目的に合わせて選ぶ判断力を養います。',
      },
      {
        step: '08',
        badge: '研究編',
        title: '世界のAI活用事例を研究',
        body: '医療・教育・農業・芸術など様々な分野でAIがどう使われているかを調査し、発表。「AIは何でもできる」という思い込みを崩し、社会課題と技術の関係を考える力を育てます。',
      },
    ],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <div className="courses-header">
          <h2 className="h-xl">子どもの「問う力」を育む8つのカリキュラム</h2>
        </div>

        <div className="tracks">
          {tracks.map((track) => (
            <div key={track.id} className="track">
              <div className="track-label">
                <span className="track-sub">{track.sub}</span>
                <span className="track-heading">{track.heading}</span>
              </div>
              <ol className="courses-list">
                {track.courses.map((course) => (
                  <li key={course.step} className="course-row">
                    <span className="course-num">{course.step}</span>
                    <div className="course-body">
                      <span className="course-badge">{course.badge}</span>
                      <h3 className="course-title h-md">{course.title}</h3>
                      <p className="course-desc">{course.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="courses-cta">
          <p>どのコースから始めるか迷ったら、まず無料体験へ。お子さんの興味に合わせてご提案します。</p>
          <a href="#contact" className="btn btn-navy">無料体験レッスンを申し込む →</a>
        </div>
      </div>
    </section>
  );
}
