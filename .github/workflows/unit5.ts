import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 5: Sets 81-100 (20 sets × 5 words = 100 authentic words, B1 level)
const rawUnit5Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 81
  {
    title: '知識・思考・思想',
    theme: '精神と知性',
    words: [
      { ru: 'зна́ние', kana: 'ズナーニイェ', jp: '知識、学識', pos: '名詞', gender: '中', pluralForm: 'зна́ния', category: '知性', exampleRu: 'Зна́ние – си́ла.', exampleJp: '知識は力なり(格言)。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'мысль', kana: 'ムィースリ', jp: '考え、思考、思想', pos: '名詞', gender: '女', pluralForm: 'мы́сли', category: '知性', exampleRu: 'Интере́сная мысль.', exampleJp: '興味深い考えだ。女性名詞。', accentTip: 'ы́にアクセント。', level: 'B1' },
      { ru: 'па́мять', kana: 'パーミャチ', jp: '記憶、思い出、記念', pos: '名詞', gender: '女', category: '知性', exampleRu: 'В па́мять о поэ́те.', exampleJp: '詩人を偲んで(記念して)。女性名詞。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'ум', kana: 'ウーム', jp: '知性、知力、頭脳', pos: '名詞', gender: '男', category: '知性', exampleRu: 'Го́ре от ума́.', exampleJp: '知恵の悲しみ(グリボエードフの名作)。', accentTip: '単音節。生格ума́。', level: 'B1' },
      { ru: 'о́пыт', kana: 'オーピト', jp: '経験、実験', pos: '名詞', gender: '男', pluralForm: 'о́пыты', category: '学術', exampleRu: 'Большо́й о́пыт рабо́ты.', exampleJp: '豊富な実務経験。', accentTip: 'о́にアクセント。', level: 'B1' }
    ]
  },
  // Set 82
  {
    title: '意思決定と目標',
    theme: '行動と判断',
    words: [
      { ru: 'реше́ние', kana: 'リシェーニイェ', jp: '決定、解決、判断', pos: '名詞', gender: '中', pluralForm: 'реше́ния', category: '意思', exampleRu: 'Приня́ть ва́жное реше́ние.', exampleJp: '重要な決定を下す。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'цель', kana: 'ツェーリ', jp: '目的、標的、ゴール', pos: '名詞', gender: '女', pluralForm: 'це́ли', category: '意思', exampleRu: 'Главная цель на́шей рабо́ты.', exampleJp: '私たちの仕事の主要な目的。女性名詞。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'план', kana: 'プラーン', jp: '計画、プラン', pos: '名詞', gender: '男', pluralForm: 'пла́ны', category: '意思', exampleRu: 'Соста́вить план.', exampleJp: '計画を立てる。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'вы́бор', kana: 'ヴィーバル', jp: '選択、選定 (複数は選挙)', pos: '名詞', gender: '男', pluralForm: 'вы́боры', category: '意思', exampleRu: 'Тру́дный вы́бор.', exampleJp: '苦渋の決断。複数形вы́борыは「選挙」。', accentTip: 'ы́にアクセント。', level: 'B1' },
      { ru: 'результа́т', kana: 'リズリタート', jp: '結果、成果', pos: '名詞', gender: '男', pluralForm: 'результа́ты', category: '成果', exampleRu: 'Отли́чный результа́т.', exampleJp: '素晴らしい成果。', accentTip: 'а́にアクセント。', level: 'B1' }
    ]
  },
  // Set 83
  {
    title: '国家と社会制度',
    theme: '政治と国家',
    words: [
      { ru: 'госуда́рство', kana: 'ガスダールストヴァ', jp: '国家', pos: '名詞', gender: '中', pluralForm: 'госуда́рства', category: '社会', exampleRu: 'Росси́йское госуда́рство.', exampleJp: 'ロシア国家。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'прави́тельство', kana: 'プラヴィーチェリストヴァ', jp: '政府、内閣', pos: '名詞', gender: '中', category: '社会', exampleRu: 'Реше́ние прави́тельства.', exampleJp: '政府の決定。', accentTip: 'и́にアクセント。', level: 'B1' },
      { ru: 'президе́нт', kana: 'プリズィジェーント', jp: '大統領', pos: '名詞', gender: '男', pluralForm: 'президе́нты', category: '政治', exampleRu: 'Президе́нт страны́.', exampleJp: '国の大統領。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'зако́н', kana: 'ザコーン', jp: '法律、法則', pos: '名詞', gender: '男', pluralForm: 'зако́ны', category: '法学', exampleRu: 'Соблюда́ть зако́н.', exampleJp: '法を守る。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'пра́во', kana: 'プラーヴァ', jp: '権利、法 (法律学)', pos: '名詞', gender: '中', pluralForm: 'права́', category: '法学', exampleRu: 'Права́ челове́ка.', exampleJp: '人権(人間の権利)。複数形права́。', accentTip: '複数形はправа́。', level: 'B1' }
    ]
  },
  // Set 84
  {
    title: '経済と発展',
    theme: '社会経済',
    words: [
      { ru: 'эконо́мика', kana: 'イカナミカ', jp: '経済、経済学', pos: '名詞', gender: '女', category: '経済', exampleRu: 'Мирова́я эконо́мика.', exampleJp: '世界経済。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'разви́тие', kana: 'ラズヴィーチイェ', jp: '発展、開発、進化', pos: '名詞', gender: '中', category: '社会', exampleRu: 'Разви́тие техноло́гий.', exampleJp: '技術の発展。', accentTip: 'и́にアクセント。', level: 'B1' },
      { ru: 'пробле́ма', kana: 'プラブリェーマ', jp: '問題、難題', pos: '名詞', gender: '女', pluralForm: 'пробле́мы', category: '社会', exampleRu: 'Сло́жная пробле́ма.', exampleJp: '複雑な問題。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'ситуа́ция', kana: 'スィトゥアーツィヤ', jp: '情勢、状況', pos: '名詞', gender: '女', pluralForm: 'ситуа́ции', category: '社会', exampleRu: 'Экономи́ческая ситуа́ция.', exampleJp: '経済情勢。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'свобо́да', kana: 'スヴァボーダ', jp: '自由', pos: '名詞', gender: '女', category: '社会', exampleRu: 'Свобо́да сло́ва.', exampleJp: '言論の自由。', accentTip: 'о́にアクセント。', level: 'B1' }
    ]
  },
  // Set 85
  {
    title: '歴史・文化・科学',
    theme: '学術と伝統',
    words: [
      { ru: 'исто́рия', kana: 'イストーリヤ', jp: '歴史、物語', pos: '名詞', gender: '女', pluralForm: 'исто́рии', category: '歴史', exampleRu: 'Исто́рия культу́ры.', exampleJp: '文化史。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'культу́ра', kana: 'クリトゥーラ', jp: '文化、教養', pos: '名詞', gender: '女', pluralForm: 'культу́ры', category: '文化', exampleRu: 'Бога́тая культу́ра.', exampleJp: '豊かな文化。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'нау́ка', kana: 'ナウーカ', jp: '科学、学問', pos: '名詞', gender: '女', pluralForm: 'нау́ки', category: '学術', exampleRu: 'Акаде́мия нау́к.', exampleJp: '科学アカデミー。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'иску́сство', kana: 'イスクーストヴァ', jp: '芸術、美術', pos: '名詞', gender: '中', category: '芸術', exampleRu: 'Совреме́нное иску́сство.', exampleJp: '現代芸術。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'литерату́ра', kana: 'リチラトゥーラ', jp: '文学、文献', pos: '名詞', gender: '女', category: '文学', exampleRu: 'Класси́ческая ру́сская литерату́ра.', exampleJp: '古典ロシア文学。', accentTip: 'у́にアクセント。', level: 'B1' }
    ]
  },
  // Set 86
  {
    title: '関係詞と複文の骨格',
    theme: '複文構造',
    words: [
      { ru: 'кото́рый', kana: 'カトーリィ', jp: '〜であるところの (関係代名詞)', pos: '代名詞', category: '関係代名詞', exampleRu: 'Кни́га, кото́рую я чита́ю.', exampleJp: '私が読んでいる本(女性対格)。', accentTip: '性と数は先行詞、格は節内での役割で決まる。', level: 'B1' },
      { ru: 'что́бы', kana: 'シトービ', jp: '〜するために、〜するように', pos: '接続詞', category: '目的接続詞', exampleRu: 'Мы рабо́таем, что́бы жить.', exampleJp: '私たちは生きるために働く。', accentTip: '主語が異なれば過去形と結合。', level: 'B1' },
      { ru: 'хотя́', kana: 'ハチャー', jp: '〜だけれども、〜とはいえ (譲歩)', pos: '接続詞', category: '譲歩接続詞', exampleRu: 'Хотя́ он уста́л, он рабо́тает.', exampleJp: '疲れているけれども彼は働いている。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'поэ́тому', kana: 'パエータム', jp: 'だから、それゆえ (therefore)', pos: '接続詞', category: '結果接続詞', exampleRu: 'Пошёл дождь, поэ́тому мы оста́лись до́ма.', exampleJp: '雨が降った、だから家に残った。', accentTip: 'э́にアクセント。', level: 'B1' },
      { ru: 'потому́ что', kana: 'パタムーシタ', jp: 'なぜなら〜だから (because)', pos: '接続詞', category: '理由接続詞', exampleRu: 'Он не пришёл, потому́ что заболе́л.', exampleJp: '彼は病気になったので来なかった。', accentTip: '理由節を導く。', level: 'B1' }
    ]
  },
  // Set 87
  {
    title: '条件・仮定・不定代名詞',
    theme: '推量と仮定',
    words: [
      { ru: 'е́сли', kana: 'イェースリ', jp: 'もし〜なら (if)', pos: '接続詞', category: '条件接続詞', exampleRu: 'Е́сли бу́дет вре́мя, позвони́ мне.', exampleJp: 'もし時間があれば電話してね。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'бы', kana: 'ブィ', jp: '〜だろうに (仮定法の助詞)', pos: '助詞', category: '仮定法', exampleRu: 'Я хоте́л бы с ва́ми поговори́ть.', exampleJp: 'あなたとお話ししたいのですが(丁寧な願望)。', accentTip: '過去形と結合して反実仮想・願望を表す。', level: 'B1' },
      { ru: 'что́-то', kana: 'シートタ', jp: '何か (確実だが不明)', pos: '代名詞', category: '不定代名詞', exampleRu: 'Он что́-то сказа́л.', exampleJp: '彼は何か言った。', accentTip: '話し手が特定しない何か。', level: 'B1' },
      { ru: 'что́-нибудь', kana: 'シートニブイチ', jp: '何かしら、何でもいいから何か', pos: '代名詞', category: '不定代名詞', exampleRu: 'Да́йте мне что́-нибудь вы́пить.', exampleJp: '何か飲むものをください。', accentTip: '疑問文・依頼文で多用。', level: 'B1' },
      { ru: 'кто́-то', kana: 'クトータ', jp: '誰か (実在するが不明)', pos: '代名詞', category: '不定代名詞', exampleRu: 'Кто́-то постуча́л в дверь.', exampleJp: '誰かがドアをノックした。', accentTip: '活動体不定代名詞。', level: 'B1' }
    ]
  },
  // Set 88
  {
    title: '全称・指示代名詞の活用',
    theme: '包括代名詞',
    words: [
      { ru: 'весь', kana: 'ヴィエスィ', jp: 'すべての、全体の (全称代名詞)', pos: '代名詞', gender: '男', category: '包括代名詞', exampleRu: 'Весь мир.', exampleJp: '全世界。中性всё, 女性вся, 複数все。', accentTip: '格変化: всего́, всему́, всем...', level: 'B1' },
      { ru: 'всё', kana: 'フショー', jp: 'すべてのもの、万事 (中性)', pos: '代名詞', gender: '中', category: '包括代名詞', exampleRu: 'Всё в поря́дке.', exampleJp: '万事順調です。', accentTip: 'ёにアクセント。', level: 'B1' },
      { ru: 'вся́кий', kana: 'フシャキイ', jp: 'あらゆる、どんな〜でも (代名名詞的形容詞)', pos: '形容詞', category: '包括代名詞', exampleRu: 'Вся́кий челове́к э́то зна́ет.', exampleJp: '誰でもそのことを知っている。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'сам', kana: 'サーム', jp: '自分自身で、自身 (強意)', pos: '代名詞', gender: '男', category: '代名詞', exampleRu: 'Он сам э́то сде́лал.', exampleJp: '彼は自分自身でそれをやった。', accentTip: 'са́мый(最上級)と区別。女性 сама́。', level: 'B1' },
      { ru: 'ка́ждый', kana: 'カージュドィ', jp: '各自の、それぞれの、毎〜', pos: '形容詞', category: '包括代名詞', exampleRu: 'Ка́ждый день.', exampleJp: '毎日。', accentTip: 'а́にアクセント。', level: 'B1' }
    ]
  },
  // Set 89
  {
    title: 'モダリティと短語尾形容詞',
    theme: '義務と評価',
    words: [
      { ru: 'до́лжен', kana: 'ドールジェン', jp: '〜しなければならない、〜のはずだ', pos: '形容詞', category: 'モダリティ', exampleRu: 'Я до́лжен идти́.', exampleJp: '私は行かねばならない。女性должна́, 複数должны́。', accentTip: '短語尾専用。女性形должна́。', level: 'B1' },
      { ru: 'прав', kana: 'プラーフ', jp: '正しい、言い分が当たっている', pos: '形容詞', category: 'モダリティ', exampleRu: 'Вы пра́вы.', exampleJp: 'あなたのおっしゃる通りです。女性права́。', accentTip: '短語尾。女性形права́。', level: 'B1' },
      { ru: 'рад', kana: 'ラート', jp: 'うれしい、喜んでいる', pos: '形容詞', category: '感情', exampleRu: 'О́чень рад вас ви́деть!', exampleJp: 'お目にかかれて光栄です！女性ラ́да。', accentTip: '短語尾のみ。女性ра́да, 複数ра́ды。', level: 'B1' },
      { ru: 'го́рд', kana: 'ゴールト', jp: '誇りに思っている', pos: '形容詞', caseGovernance: '+ 造格', category: '感情', exampleRu: 'Оте́ц горд свои́м сы́ном.', exampleJp: '父は息子を誇りに思っている(造格)。', accentTip: '女性形горда́。', level: 'B1' },
      { ru: 'гото́в', kana: 'ガトーフ', jp: '準備ができている、用意完了だ', pos: '形容詞', category: '状態', exampleRu: 'Я гото́в к уро́ку.', exampleJp: '私は授業の準備ができています。', accentTip: '女性гото́ва, 複数гото́вы。', level: 'B1' }
    ]
  },
  // Set 90
  {
    title: '比較級 (単一形・不規則形)',
    theme: '比較表現',
    words: [
      { ru: 'лу́чше', kana: 'ルーチシェ', jp: 'より良い、より上手に (better)', pos: '副詞', category: '比較級', exampleRu: 'Он говори́т по-ру́сски лу́чше меня́.', exampleJp: '彼は私よりロシア語が上手だ(хорошоの比較級)。', accentTip: 'хорошо́ / хоро́шийの不規則比較級。', level: 'B1' },
      { ru: 'ху́же', kana: 'フージェ', jp: 'より悪い、より下手に (worse)', pos: '副詞', category: '比較級', exampleRu: 'Сего́дня пого́да ху́же.', exampleJp: '今日の天気はより悪い(плохоの比較級)。', accentTip: 'пло́хо / плохо́йの不規則比較級。', level: 'B1' },
      { ru: 'бо́льше', kana: 'ボーリシェ', jp: 'より大きい、より多い、もっと (more)', pos: '数量詞', category: '比較級', exampleRu: 'Бо́льше де́нег.', exampleJp: 'より多くのお金。', accentTip: 'большо́й / мно́гоの比較級。', level: 'B1' },
      { ru: 'ме́ньше', kana: 'ミェーニシェ', jp: 'より小さい、より少ない (less)', pos: '数量詞', category: '比較級', exampleRu: 'Ме́ньше оши́бок.', exampleJp: 'より少ないミス。', accentTip: 'ма́ленький / ма́лоの比較級。', level: 'B1' },
      { ru: 'са́мый', kana: 'サームィ', jp: '最も〜 (最上級の助詞的形容詞)', pos: '形容詞', category: '最上級', exampleRu: 'Са́мый лу́чший друг.', exampleJp: '一番最高の友人。', accentTip: '長語尾形容詞と結合して最上級を形成。', level: 'B1' }
    ]
  },
  // Set 91
  {
    title: '能動形動詞 (分詞・現在)',
    theme: '形動詞 (能動現在)',
    words: [
      { ru: 'чита́ющий', kana: 'チターユシシー', jp: '読書している、読んでいる', pos: '形容詞', category: '形動詞', exampleRu: 'Студе́нт, чита́ющий кни́гу.', exampleJp: '本を読んでいる学生。', accentTip: '現在3複語幹 + -щий。', level: 'B1' },
      { ru: 'говоря́щий', kana: 'ガヴァリャーシシー', jp: '話している、話す', pos: '形容詞', category: '形動詞', exampleRu: 'Челове́к, говоря́щий по-ру́сски.', exampleJp: 'ロシア語を話す人。', accentTip: '第2変化動詞から派生。', level: 'B1' },
      { ru: 'рабо́тающий', kana: 'ラボータユシシー', jp: '働いている、勤務している', pos: '形容詞', category: '形動詞', exampleRu: 'Лю́ди, рабо́тающие на заво́де.', exampleJp: '工場で働いている人々。', accentTip: '軟変化形容詞と同じ格変化。', level: 'B1' },
      { ru: 'живу́щий', kana: 'ジヴーシシー', jp: '暮らしている、住んでいる', pos: '形容詞', category: '形動詞', exampleRu: 'Семья́, живу́щая в Москве́.', exampleJp: 'モスクワに暮らしている家族。', accentTip: 'житьの現在語幹живутから派生。', level: 'B1' },
      { ru: 'сле́дующий', kana: 'スリェードゥユシシー', jp: '次の、後続の (following/next)', pos: '形容詞', category: '形動詞', exampleRu: 'На сле́дующей неде́ле.', exampleJp: '来週に。', accentTip: '日常でも頻出の能動形動詞。', level: 'B1' }
    ]
  },
  // Set 92
  {
    title: '能動形動詞 (分詞・過去)',
    theme: '形動詞 (能動過去)',
    words: [
      { ru: 'написа́вший', kana: 'ナピサーフシィ', jp: '書いた、執筆した', pos: '形容詞', category: '形動詞', exampleRu: 'Писа́тель, написа́вший э́тот рома́н.', exampleJp: 'この小説を執筆した作家。', accentTip: '過去語幹 + -вший。', level: 'B1' },
      { ru: 'прочита́вший', kana: 'プラチターフシィ', jp: '読み終えた', pos: '形容詞', category: '形動詞', exampleRu: 'Студе́нт, прочита́вший всю кни́гу.', exampleJp: '本を丸ごと読み終えた学生。', accentTip: '完了体過去から派生。', level: 'B1' },
      { ru: 'прише́дший', kana: 'プリシェートシィ', jp: 'やって来た、到着した', pos: '形容詞', category: '形動詞', exampleRu: 'Гость, прише́дший вчера́.', exampleJp: '昨日やって来た客。', accentTip: 'прийтиの過去形пришёлから-ше́дший。', level: 'B1' },
      { ru: 'око́нчивший', kana: 'アコーンチフシィ', jp: '卒業した、終えた', pos: '形容詞', category: '形動詞', exampleRu: 'Вы́пускник, око́нчивший вуз.', exampleJp: '大学を卒業した卒業生。', accentTip: 'окончитьから派生。', level: 'B1' },
      { ru: 'бы́вший', kana: 'ブィーフシィ', jp: 'かつての、以前の (former/ex-)', pos: '形容詞', category: '形動詞', exampleRu: 'Бы́вший президе́нт.', exampleJp: '前大統領。', accentTip: 'бытьの過去能動形動詞。', level: 'B1' }
    ]
  },
  // Set 93
  {
    title: '受動形動詞 (分詞・過去被動)',
    theme: '形動詞 (受動過去)',
    words: [
      { ru: 'напи́санный', kana: 'ナピーサンヌィ', jp: '書かれた、執筆された', pos: '形容詞', category: '形動詞', exampleRu: 'Письмо́, напи́санное отцо́м.', exampleJp: '父によって書かれた手紙(動作主は造格)。', accentTip: '短語尾はнапи́сан, напи́сана, напи́сано。', level: 'B1' },
      { ru: 'прочи́танный', kana: 'プラチータンヌィ', jp: '読まれた、通読された', pos: '形容詞', category: '形動詞', exampleRu: 'Кни́га, прочи́танная мно́ю.', exampleJp: '私によって読まれた本。', accentTip: '完了体他動詞から形成。', level: 'B1' },
      { ru: 'постро́енный', kana: 'パストローエンヌィ', jp: '建てられた、建設された', pos: '形容詞', category: '形動詞', exampleRu: 'Дом, постро́енный в про́шлом году́.', exampleJp: '去年建てられた家。', accentTip: '短語尾はпостро́ен。', level: 'B1' },
      { ru: 'откры́тый', kana: 'アトクルィートゥィ', jp: '開かれた、オープンされた', pos: '形容詞', category: '形動詞', exampleRu: 'Откры́тая дверь.', exampleJp: '開け放たれたドア。', accentTip: '-тый語尾の受動過去。', level: 'B1' },
      { ru: 'закры́тый', kana: 'ザクルィートゥィ', jp: '閉じられた、閉まった', pos: '形容詞', category: '形動詞', exampleRu: 'Магази́н закры́т.', exampleJp: '店は閉まっている(短語尾)。', accentTip: '対義語はоткры́тый。', level: 'B1' }
    ]
  },
  // Set 94
  {
    title: '副動詞 (同時動作・先行動作)',
    theme: '副動詞 (分詞構文)',
    words: [
      { ru: 'чита́я', kana: 'チターヤ', jp: '読みながら (不完了体副動詞)', pos: '副詞', category: '副動詞', exampleRu: 'Он пил чай, чита́я кни́гу.', exampleJp: '彼は本を読みながらお茶を飲んでいた。', accentTip: '主文と同時進行の動作を表す。', level: 'B1' },
      { ru: 'говоря́', kana: 'ガヴァリャー', jp: '話しながら、〜と言えば', pos: '副詞', category: '副動詞', exampleRu: 'Че́стно говоря́, я не зна́ю.', exampleJp: '正直に言って、私は知りません(慣用句)。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'прочита́в', kana: 'プラチターフ', jp: '読み終えてから (完了体副動詞)', pos: '副詞', category: '副動詞', exampleRu: 'Прочита́в письмо́, он улыбну́лся.', exampleJp: '手紙を読み終えて、彼は微笑んだ。', accentTip: '主文より前の先行完了動作。', level: 'B1' },
      { ru: 'верну́вшись', kana: 'ヴィルヌーフシシ', jp: '戻ってから、帰宅してから', pos: '副詞', category: '副動詞', exampleRu: 'Верну́вшись домо́й, я лёг спать.', exampleJp: '帰宅してから、私は寝床についた。', accentTip: '-ся動詞の完了副動詞語尾は-вшись。', level: 'B1' },
      { ru: 'узна́в', kana: 'ウズナーフ', jp: '知ってから、知るや否や', pos: '副詞', category: '副動詞', exampleRu: 'Узна́в э́ту но́вость, она́ запла́кала.', exampleJp: 'そのニュースを知って、彼女は泣き出した。', accentTip: '完了体先行動作。', level: 'B1' }
    ]
  },
  // Set 95
  {
    title: '学術・論文・討論語彙',
    theme: '学術研究',
    words: [
      { ru: 'статья́', kana: 'スタチヤー', jp: '論文、記事', pos: '名詞', gender: '女', pluralForm: 'статьи́', category: '学術', exampleRu: 'Нау́чная статья́.', exampleJp: '学術論文。', accentTip: '複数生格стате́й。', level: 'B1' },
      { ru: 'докла́д', kana: 'ダクラート', jp: '口頭発表、報告、レポート', pos: '名詞', gender: '男', pluralForm: 'докла́ды', category: '学術', exampleRu: 'Сде́лать докла́д на конфере́нции.', exampleJp: '学会で口頭発表を行う。', accentTip: '語末дは[т]。', level: 'B1' },
      { ru: 'конфере́нция', kana: 'カンフィリェーンツィヤ', jp: '学会、会議、シンポジウム', pos: '名詞', gender: '女', pluralForm: 'конфере́нции', category: '学術', exampleRu: 'Междунаро́дная конфере́нция.', exampleJp: '国際学会。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'иссле́дование', kana: 'イススリェードヴァニイェ', jp: '調査、研究、リサーチ', pos: '名詞', gender: '中', pluralForm: 'иссле́дования', category: '学術', exampleRu: 'Нау́чное иссле́дование.', exampleJp: '科学的研究。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'те́ма', kana: 'チェーマ', jp: 'テーマ、主題、論題', pos: '名詞', gender: '女', pluralForm: 'те́мы', category: '学術', exampleRu: 'Те́ма на́шего иссле́дования.', exampleJp: '私たちの研究テーマ。', accentTip: 'е́にアクセント。', level: 'B1' }
    ]
  },
  // Set 96
  {
    title: '思考と表現の動詞 (B1)',
    theme: '高次認識動詞',
    words: [
      { ru: 'счита́ть', kana: 'シチターチ', jp: '〜とみなす、数える', pos: '動詞', aspect: '不完了', pairedWord: 'посчита́ть', caseGovernance: '〔対格〕を〔造格〕とみなす', category: '思考', exampleRu: 'Я считаю́ его́ свои́м дру́гом.', exampleJp: '私は彼を自分の友人とみなしている。', accentTip: 'счは[щ]。', level: 'B1' },
      { ru: 'счита́ться', kana: 'シチターッツァ', jp: '〜と考えられている、評価される', pos: '動詞', aspect: '不完了', caseGovernance: '+ 造格', category: '社会', exampleRu: 'Он счита́ется лу́чшим специали́стом.', exampleJp: '彼は最高の専門家と目されている(造格)。', accentTip: '受動的評価構文。', level: 'B1' },
      { ru: 'явля́ться', kana: 'ヤヴリャーッツァ', jp: '〜である (フォーマルなbe動詞)', pos: '動詞', aspect: '不完了', caseGovernance: '+ 造格', category: '論述', exampleRu: 'Москва́ явля́ется столи́цей Росси́и.', exampleJp: 'モスクワはロシアの首都である(造格)。', accentTip: '書き言葉の断定述語。', level: 'B1' },
      { ru: 'объясня́ть', kana: 'アブヤスニャーチ', jp: '説明する、解明する', pos: '動詞', aspect: '不完了', pairedWord: 'объясни́ть', category: '対話', exampleRu: 'Учи́тель объясня́ет пра́вило.', exampleJp: '先生は規則を説明している。', accentTip: 'ъで硬音分離。', level: 'B1' },
      { ru: 'объясни́ть', kana: 'アブヤスニーチ', jp: '説明し終える、納得させる', pos: '動詞', aspect: '完了', pairedWord: 'объясня́ть', category: '対話', exampleRu: 'Я могу́ объясни́ть э́то.', exampleJp: '私はそれを説明できます。', accentTip: '完了体。', level: 'B1' }
    ]
  },
  // Set 97
  {
    title: '社会活動と組織',
    theme: '組織と連帯',
    words: [
      { ru: 'о́бщество', kana: 'オープシシェストヴァ', jp: '社会、協会、世間', pos: '名詞', gender: '中', pluralForm: 'о́бщества', category: '社会', exampleRu: 'Гражда́нское о́бщество.', exampleJp: '市民社会。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'организа́ция', kana: 'アルガニザーツィヤ', jp: '組織、団体、企画', pos: '名詞', gender: '女', pluralForm: 'организа́ции', category: '社会', exampleRu: 'Междунаро́дная организа́ция.', exampleJp: '国際組織。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'фи́рма', kana: 'フィールマ', jp: '会社、企業', pos: '名詞', gender: '女', pluralForm: 'фи́рмы', category: '経済', exampleRu: 'Торго́вая фи́рма.', exampleJp: '貿易商社。', accentTip: 'и́にアクセント。', level: 'B1' },
      { ru: 'сотруднича́ть', kana: 'サトルードニチャチ', jp: '協力する、提携する', pos: '動詞', aspect: '不完了', caseGovernance: 'с + 造格', category: '社会', exampleRu: 'Фи́рмы сотру́дничают друг с дру́гом.', exampleJp: '企業同士が互いに提携している。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'собра́ние', kana: 'サブラールニイェ', jp: '会合、集会、総会', pos: '名詞', gender: '中', pluralForm: 'собра́ния', category: '社会', exampleRu: 'Прису́тствовать на собра́нии.', exampleJp: '会合に出席する。', accentTip: 'а́にアクセント。', level: 'B1' }
    ]
  },
  // Set 98
  {
    title: '抽象的修飾語 (B1形容詞)',
    theme: '抽象評価',
    words: [
      { ru: 'ва́жный', kana: 'ヴァージュヌィ', jp: '重要な、重大な', pos: '形容詞', category: '評価', exampleRu: 'Ва́жный вопро́с.', exampleJp: '重大な問題。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'сло́жный', kana: 'スロージュヌィ', jp: '複雑な、入り組んだ', pos: '形容詞', category: '評価', exampleRu: 'Сло́жная ситуа́ция.', exampleJp: '複雑な情勢。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'просто́й', kana: 'プラストーイ', jp: '単純な、素朴な', pos: '形容詞', category: '評価', exampleRu: 'Просто́й отве́т.', exampleJp: '単純な答え。比較級про́ще。', accentTip: '硬変化Ⅱ(語尾アクセント)。', level: 'B1' },
      { ru: 'необходи́мый', kana: 'ニアプハジームィ', jp: '不可欠な、必要な', pos: '形容詞', category: '評価', exampleRu: 'Необходи́мые усло́вия.', exampleJp: '不可欠な条件。', accentTip: 'и́にアクセント。', level: 'B1' },
      { ru: 'возмо́жный', kana: 'ヴァズモージュヌィ', jp: '可能な、あり得る', pos: '形容詞', category: '可能', exampleRu: 'Возмо́жный вариа́нт.', exampleJp: 'あり得る選択肢。', accentTip: '副詞はвозмо́жно (おそらく、可能だ)。', level: 'B1' }
    ]
  },
  // Set 99
  {
    title: '変化・移行・成長の動詞',
    theme: '生成と推移',
    words: [
      { ru: 'станови́ться', kana: 'スタナヴィーッツァ', jp: '〜になる (不完了体)', pos: '動詞', aspect: '不完了', pairedWord: 'стать', caseGovernance: '+ 造格', category: '推移', exampleRu: 'Тепле́ет, стано́вится тепло́.', exampleJp: '気候が緩み、暖かくなっていく。', accentTip: '補語は造格をとる。', level: 'B1' },
      { ru: 'стать', kana: 'スタート', jp: '〜になった、〜し始める (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'станови́ться', caseGovernance: '+ 造格 / + 不定形', conjugationNote: 'ста́ну, ста́нешь... стал', category: '推移', exampleRu: 'Он стал учёным.', exampleJp: '彼は学者になった(述語造格)。', accentTip: '完了体。', level: 'B1' },
      { ru: 'расти́', kana: 'ラスチー', jp: '育つ、成長する', pos: '動詞', aspect: '不完了', pairedWord: 'вы́расти', conjugationNote: 'расту́, растёшь... рос, росла́, росли́', category: '成長', exampleRu: 'Де́ти расту́т бы́стро.', exampleJp: '子どもたちは急速に成長する。', accentTip: '過去形рос, росла́。', level: 'B1' },
      { ru: 'изменя́ть', kana: 'イズミニャーチ', jp: '変える、改める', pos: '動詞', aspect: '不完了', pairedWord: 'измени́ть', category: '推移', exampleRu: 'Изменя́ть мир.', exampleJp: '世界を変える。', accentTip: '不完了体。', level: 'B1' },
      { ru: 'измени́ться', kana: 'イズミニーッツァ', jp: '変わる、一変する', pos: '動詞', aspect: '完了', pairedWord: 'изменя́ться', category: '推移', exampleRu: 'Всё измени́лось.', exampleJp: 'すべてが変わってしまった。', accentTip: '完了体。', level: 'B1' }
    ]
  },
  // Set 100
  {
    title: 'Unit 5 総合・B1修了マスター語彙',
    theme: '中級総合表現',
    words: [
      { ru: 'вели́кий', kana: 'ヴィリーキィ', jp: '偉大な、極めて大きな', pos: '形容詞', category: '評価', exampleRu: 'Вели́кий ру́сский писа́тель.', exampleJp: '偉大なロシアの作家。', accentTip: 'и́にアクセント。', level: 'B1' },
      { ru: 'поля́на', kana: 'パリャーナ', jp: '森の中の野原、草原 (ヤースナヤ・ポリャーナ)', pos: '名詞', gender: '女', pluralForm: 'поля́ны', category: '自然', exampleRu: 'Я́сная Поля́на – ро́дина Толсто́го.', exampleJp: 'ヤースナヤ・ポリャーナはトルストイの生家。', accentTip: 'アプリの名称Polyanaの由来！', level: 'B1' },
      { ru: 'век', kana: 'ヴィエーク', jp: '世紀、100年、一生', pos: '名詞', gender: '男', pluralForm: 'века́', category: '歴史', exampleRu: 'В двадца́том ве́ке.', exampleJp: '20世紀に。', accentTip: '格言: Век живи́, век учи́сь。', level: 'B1' },
      { ru: 'мир', kana: 'ミール', jp: '世界、平和', pos: '名詞', gender: '男', category: '社会', exampleRu: 'Война́ и мир.', exampleJp: '『戦争と平和』(トルストイ)。', accentTip: '世界(мир 1)と平和(мир 2)の両義。', level: 'B1' },
      { ru: 'бу́дущее', kana: 'ブードゥシシェイェ', jp: '未来、将来', pos: '名詞', gender: '中', category: '時間', exampleRu: 'Ве́рить в прекра́сное бу́дущее.', exampleJp: '素晴らしい未来を信じる。形容詞型中性名詞。', accentTip: 'у́にアクセント。', level: 'B1' }
    ]
  }
];

export const unit5Sets: WordSet[] = rawUnit5Sets.map((raw, idx) =>
  buildWordSet(idx + 81, 5, idx + 1, raw.title, raw.theme, raw.words)
);
