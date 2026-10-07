import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 1: 20 sets × 5 words = 100 authentic foundational words (A0 level)
// Based on Tokyo University of Foreign Studies & Doshin Russian Course
const rawUnit1Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 1 (Global Set 1)
  {
    title: '身の回りの筆記用具・日用品',
    theme: '日常の物と学習用具',
    words: [
      { ru: 'кни́га', kana: 'クニーガ', jp: '本', pos: '名詞', gender: '女', pluralForm: 'кни́ги', category: '文具・読書', exampleRu: 'Э́то моя́ кни́га.', exampleJp: 'これは私の本です。', accentTip: 'и́にアクセント。女性名詞。', level: 'A0' },
      { ru: 'журна́л', kana: 'ジュルナール', jp: '雑誌', pos: '名詞', gender: '男', pluralForm: 'журна́лы', category: '文具・読書', exampleRu: 'Э́то ру́сский журна́л.', exampleJp: 'これはロシアの雑誌です。', accentTip: 'а́にアクセント。男性名詞。', level: 'A0' },
      { ru: 'ру́чка', kana: 'ルーチカ', jp: 'ペン、ボールペン', pos: '名詞', gender: '女', pluralForm: 'ру́чки', category: '文具', exampleRu: 'Где си́няя ру́чка?', exampleJp: '青いペンはどこですか？', accentTip: 'у́にアクセント。', level: 'A0' },
      { ru: 'стол', kana: 'ストール', jp: '机、テーブル', pos: '名詞', gender: '男', pluralForm: 'столы́', category: '家具', exampleRu: 'Кни́га лежи́т на столе́.', exampleJp: '本は机の上にあります。', accentTip: '格変化で語尾にアクセント移動(стола́, столе́)。', level: 'A0' },
      { ru: 'стул', kana: 'ストゥール', jp: 'いす', pos: '名詞', gender: '男', pluralForm: 'сту́лья', category: '家具', exampleRu: 'Стул стои́т здесь.', exampleJp: 'いすはここにあります。', accentTip: '複数形は不規則(сту́лья)。', level: 'A0' }
    ]
  },
  // Set 2 (Global Set 2)
  {
    title: '家族と基本の人間関係',
    theme: '家族の呼称',
    words: [
      { ru: 'ма́ма', kana: 'マーマ', jp: 'お母さん、ママ', pos: '名詞', gender: '女', pluralForm: 'ма́мы', category: '家族', exampleRu: 'Ма́ма рабо́тает в шко́ле.', exampleJp: '母は学校で働いています。', accentTip: '最初のа́にアクセント。', level: 'A0' },
      { ru: 'па́па', kana: 'パーパ', jp: 'お父さん、パパ', pos: '名詞', gender: '男', pluralForm: 'па́пы', category: '家族', exampleRu: 'Па́па чита́ет газе́ту.', exampleJp: '父は新聞を読んでいます。', accentTip: '男性を指すため文法上は男性名詞。', level: 'A0' },
      { ru: 'брат', kana: 'ブラート', jp: '兄弟、兄、弟', pos: '名詞', gender: '男', pluralForm: 'бра́тья', category: '家族', exampleRu: 'Мой брат – студе́нт.', exampleJp: '私の兄弟は学生です。', accentTip: '複数形は不規則ブラ́тья。', level: 'A0' },
      { ru: 'сестра́', kana: 'シストラー', jp: '姉妹、姉、妹', pos: '名詞', gender: '女', pluralForm: 'сёстры', category: '家族', exampleRu: 'Э́то его́ сестра́.', exampleJp: 'これは彼の姉妹です。', accentTip: '無アクセントのеは[и]に弱化。複数形сёстры。', level: 'A0' },
      { ru: 'семья́', kana: 'スィミヤー', jp: '家族', pos: '名詞', gender: '女', pluralForm: 'се́мьи', category: '家族', exampleRu: 'У нас больша́я семья́.', exampleJp: '私たちは大家族です。', accentTip: 'ьの後のя́がアクセント。', level: 'A0' }
    ]
  },
  // Set 3 (Global Set 3)
  {
    title: '肯定・否定・感謝の基本表現',
    theme: '日常の基本応答',
    words: [
      { ru: 'э́то', kana: 'エータ', jp: 'これ、それ(指示代名詞)', pos: '代名詞', gender: '中', category: '指示詞', exampleRu: 'Э́то на́ша шко́ла.', exampleJp: 'これは私たちの学校です。', accentTip: '無アクセントのоは[а]に弱化。', level: 'A0' },
      { ru: 'тот', kana: 'トート', jp: 'あの、その(指示代名詞)', pos: '代名詞', gender: '男', category: '指示詞', exampleRu: 'Тот дом о́чень краси́вый.', exampleJp: 'あの家はとても美しい。', accentTip: '女性形はта、中性形はто。', level: 'A0' },
      { ru: 'да', kana: 'ダー', jp: 'はい、そうです', pos: '間投詞', category: '応答', exampleRu: 'Да, я студе́нт.', exampleJp: 'はい、私は学生です。', accentTip: '肯定の応答。', level: 'A0' },
      { ru: 'нет', kana: 'ニェート', jp: 'いいえ、ない', pos: '間投詞', category: '応答', exampleRu: 'Нет, э́то не соба́ка.', exampleJp: 'いいえ、これは犬ではありません。', accentTip: '否定文や存在否定(нет + 生格)に用いる。', level: 'A0' },
      { ru: 'спаси́бо', kana: 'スパシーバ', jp: 'ありがとう', pos: '間投詞', category: '挨拶', exampleRu: 'Большо́е спаси́бо!', exampleJp: 'どうもありがとうございます！', accentTip: '語末のоは弱化して[а]。', level: 'A0' }
    ]
  },
  // Set 4 (Global Set 4)
  {
    title: '家と部屋の構造',
    theme: '住まいと空間',
    words: [
      { ru: 'дом', kana: 'ドーム', jp: '家、建物', pos: '名詞', gender: '男', pluralForm: 'дома́', category: '住居', exampleRu: 'Э́то наш дом.', exampleJp: 'これは私たちの家です。', accentTip: '複数形は語尾にアクセント(дома́)。', level: 'A0' },
      { ru: 'окно́', kana: 'アクノー', jp: '窓', pos: '名詞', gender: '中', pluralForm: 'о́кна', category: '住居', exampleRu: 'Окно́ откры́то.', exampleJp: '窓が開いています。', accentTip: '最初のоは無アクセントで[а]と発音。複数形о́кна。', level: 'A0' },
      { ru: 'дверь', kana: 'ドヴェーリ', jp: 'ドア、扉', pos: '名詞', gender: '女', pluralForm: 'две́ри', category: '住居', exampleRu: 'Закро́йте дверь, пожа́луйста.', exampleJp: 'ドアを閉めてください。', accentTip: 'ьで終わる女性名詞。', level: 'A0' },
      { ru: 'ла́мпа', kana: 'ラムパ', jp: 'ランプ、電灯', pos: '名詞', gender: '女', pluralForm: 'ла́мпы', category: '家具', exampleRu: 'Ла́мпа стои́т на столе́.', exampleJp: 'ランプは机の上にあります。', accentTip: '硬音のл[エル]。', level: 'A0' },
      { ru: 'ко́мната', kana: 'コムナタ', jp: '部屋', pos: '名詞', gender: '女', pluralForm: 'ко́мнаты', category: '住居', exampleRu: 'В ко́мнате тепло́.', exampleJp: '部屋の中は暖かい。', accentTip: 'о́にアクセント。後半のаは弱化。', level: 'A0' }
    ]
  },
  // Set 5 (Global Set 5)
  {
    title: '飲み物と主食',
    theme: '食事と飲み物',
    words: [
      { ru: 'чай', kana: 'チャーイ', jp: 'お茶、紅茶', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Я люблю́ чёрный чай.', exampleJp: '私は紅茶が好きです。', accentTip: '第2生格ча́ю(お茶を少し)。', level: 'A0' },
      { ru: 'ко́фе', kana: 'コーフィ', jp: 'コーヒー', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Э́то горя́чий ко́фе.', exampleJp: 'これは熱いコーヒーです。', accentTip: '不変化名詞。文法上は男性。', level: 'A0' },
      { ru: 'хлеб', kana: 'フリェープ', jp: 'パン', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Све́жий хлеб о́чень вку́сный.', exampleJp: '焼き立てのパンはとてもおいしい。', accentTip: '語末бは[п]に無声化。', level: 'A0' },
      { ru: 'вода́', kana: 'ヴァダー', jp: '水', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Да́йте, пожа́луйста, воды́.', exampleJp: 'お水をください(部分生格)。', accentTip: '対格はво́ду(頭移動)。', level: 'A0' },
      { ru: 'молоко́', kana: 'マラコー', jp: '牛乳、ミルク', pos: '名詞', gender: '中', category: '飲食', exampleRu: 'Кот пьёт молоко́.', exampleJp: '猫がミルクを飲んでいる。', accentTip: '前の2つのоは弱化[マラコー]。', level: 'A0' }
    ]
  },
  // Set 6 (Global Set 6)
  {
    title: '学校と教育',
    theme: '学びの場',
    words: [
      { ru: 'студе́нт', kana: 'ストゥジェーント', jp: '男子学生、大学生', pos: '名詞', gender: '男', pluralForm: 'студе́нты', category: '教育', exampleRu: 'Ива́н – студе́нт МГУ.', exampleJp: 'イワンはモスクワ大学の学生です。', accentTip: '活動体名詞。対格はстуде́нта。', level: 'A0' },
      { ru: 'студе́нтка', kana: 'ストゥジェーントカ', jp: '女子学生', pos: '名詞', gender: '女', pluralForm: 'студе́нтки', category: '教育', exampleRu: 'А́нна – хоро́шая студе́нтка.', exampleJp: 'アンナは優秀な女子学生です。', accentTip: '女性語尾-ка。', level: 'A0' },
      { ru: 'учи́тель', kana: 'ウチーチェリ', jp: '教師、先生(男)', pos: '名詞', gender: '男', pluralForm: 'учителя́', category: '教育', exampleRu: 'Наш учи́тель о́чень до́брый.', exampleJp: '私たちの先生はとても親切です。', accentTip: '複数主格はучителя́と語尾移動。', level: 'A0' },
      { ru: 'учи́тельница', kana: 'ウチーチェリニツァ', jp: '女性教師', pos: '名詞', gender: '女', pluralForm: 'учи́тельницы', category: '教育', exampleRu: 'Она́ – учи́тельница му́зыки.', exampleJp: '彼女は音楽の先生です。', accentTip: '女性形接尾辞-ница。', level: 'A0' },
      { ru: 'шко́ла', kana: 'シュコーラ', jp: '学校', pos: '名詞', gender: '女', pluralForm: 'шко́лы', category: '教育', exampleRu: 'Де́ти иду́т в шко́лу.', exampleJp: '子どもたちは学校に行きます。', accentTip: '前置格はв шко́ле。', level: 'A0' }
    ]
  },
  // Set 7 (Global Set 7)
  {
    title: '文字とメディア',
    theme: '文書と情報',
    words: [
      { ru: 'газе́та', kana: 'ガゼータ', jp: '新聞', pos: '名詞', gender: '女', pluralForm: 'газе́ты', category: '出版', exampleRu: 'Я чита́ю сего́дняшнюю газе́ту.', exampleJp: '私は今日の新聞を読んでいます。', accentTip: 'е́にアクセント。', level: 'A0' },
      { ru: 'письмо́', kana: 'ピシモー', jp: '手紙', pos: '名詞', gender: '中', pluralForm: 'пи́сьма', category: '通信', exampleRu: 'Я получи́л письмо́ от дру́га.', exampleJp: '私は友人から手紙を受け取りました。', accentTip: '複数主格はпи́сьма(アクセント移動)。', level: 'A0' },
      { ru: 'слова́рь', kana: 'スラヴァーリ', jp: '辞書', pos: '名詞', gender: '男', pluralForm: 'словари́', category: '出版', exampleRu: 'Где мой ру́сско-япо́нский слова́рь?', exampleJp: '私の露和辞典はどこ？', accentTip: '語尾移動(словаря́, словари́)。', level: 'A0' },
      { ru: 'тетра́дь', kana: 'チトラーチ', jp: 'ノート', pos: '名詞', gender: '女', pluralForm: 'тетра́ди', category: '文具', exampleRu: 'Э́то си́няя тетра́дь.', exampleJp: 'これは青いノートです。', accentTip: '語末дは無声化[チ]。', level: 'A0' },
      { ru: 'уче́бник', kana: 'ウチェーブニク', jp: '教科書', pos: '名詞', gender: '男', pluralForm: 'уче́бники', category: '教育', exampleRu: 'Уче́бник ру́сского языка́.', exampleJp: 'ロシア語の教科書。', accentTip: 'е́にアクセント。', level: 'A0' }
    ]
  },
  // Set 8 (Global Set 8)
  {
    title: '人称代名詞 (単数)',
    theme: '主語代名詞',
    words: [
      { ru: 'я', kana: 'ヤー', jp: '私 (1人称単数)', pos: '代名詞', category: '代名詞', exampleRu: 'Я говорю́ по-ру́сски.', exampleJp: '私はロシア語を話します。', accentTip: '英語の I に相当。小文字表記。', level: 'A0' },
      { ru: 'ты', kana: 'トゥイ', jp: '君、お前 (親称単数)', pos: '代名詞', category: '代名詞', exampleRu: 'Что ты де́лаешь?', exampleJp: '君は何をしているの？', accentTip: '親しい友人や子供に使う。', level: 'A0' },
      { ru: 'он', kana: 'オーン', jp: '彼、それ (男性単数)', pos: '代名詞', gender: '男', category: '代名詞', exampleRu: 'Он рабо́тает инжене́ром.', exampleJp: '彼はエンジニアとして働いています。', accentTip: '男性名詞を受ける。', level: 'A0' },
      { ru: 'она́', kana: 'アナー', jp: '彼女、それ (女性単数)', pos: '代名詞', gender: '女', category: '代名詞', exampleRu: 'Она́ о́чень краси́вая.', exampleJp: '彼女はとても美しい。', accentTip: 'оは弱化[а]。', level: 'A0' },
      { ru: 'оно́', kana: 'アノー', jp: 'それ (中性単数)', pos: '代名詞', gender: '中', category: '代名詞', exampleRu: 'Оно́ стои́т на столе́.', exampleJp: 'それは机の上にあります。', accentTip: '中性名詞を受ける。', level: 'A0' }
    ]
  },
  // Set 9 (Global Set 9)
  {
    title: '人称代名詞 (複数)',
    theme: '主語代名詞・複数',
    words: [
      { ru: 'мы', kana: 'ムィ', jp: '私たち (1人称複数)', pos: '代名詞', category: '代名詞', exampleRu: 'Мы и́зучаем ру́сский язы́к.', exampleJp: '私たちはロシア語を学んでいます。', accentTip: '母音ыの発音。', level: 'A0' },
      { ru: 'вы', kana: 'ヴィ', jp: 'あなた(敬称)、あなた方(複数)', pos: '代名詞', category: '代名詞', exampleRu: 'Как вас зову́т?', exampleJp: 'お名前は何ですか？', accentTip: '敬意を表す単数にも複数にも用いる。', level: 'A0' },
      { ru: 'они́', kana: 'アニー', jp: '彼ら、彼女ら、それら', pos: '代名詞', category: '代名詞', exampleRu: 'Они́ живу́т в То́киオ.', exampleJp: '彼らは東京に住んでいます。', accentTip: 'оは弱化[а]。', level: 'A0' },
      { ru: 'мой', kana: 'モーイ', jp: '私の (男性修飾)', pos: '代名詞', gender: '男', category: '所有代名詞', exampleRu: 'Э́то мой каранда́ш.', exampleJp: 'これは私の鉛筆です。', accentTip: '中性моё, 女性моя́, 複数мои́。', level: 'A0' },
      { ru: 'твой', kana: 'トヴォーイ', jp: '君の (男性修飾)', pos: '代名詞', gender: '男', category: '所有代名詞', exampleRu: 'Где твой дом?', exampleJp: '君の家はどこ？', accentTip: '中性твоё, 女性твоя́, 複数твои́。', level: 'A0' }
    ]
  },
  // Set 10 (Global Set 10)
  {
    title: '疑問詞の基礎',
    theme: '疑問表現',
    words: [
      { ru: 'кто', kana: 'クトー', jp: '誰', pos: '代名詞', category: '疑問詞', exampleRu: 'Кто э́то?', exampleJp: 'これは誰ですか？', accentTip: '人・動物（活動体）を尋ねる。', level: 'A0' },
      { ru: 'что', kana: 'シトー', jp: '何、〜ということ', pos: '代名詞', category: '疑問詞', exampleRu: 'Что вы де́лаете?', exampleJp: 'あなたは何をしていますか？', accentTip: 'чは[ш]と発音(シトー)。', level: 'A0' },
      { ru: 'где', kana: 'グジェー', jp: 'どこに、どこで', pos: '副詞', category: '疑問詞', exampleRu: 'Где нахо́дится метро́?', exampleJp: '地下鉄はどこにありますか？', accentTip: '所在・場所を尋ねる。', level: 'A0' },
      { ru: 'куда́', kana: 'クダー', jp: 'どこへ', pos: '副詞', category: '疑問詞', exampleRu: 'Куда́ вы идёте?', exampleJp: 'どこへ行くところですか？', accentTip: '移動の目的地を尋ねる。', level: 'A0' },
      { ru: 'когда́', kana: 'カグダー', jp: 'いつ', pos: '副詞', category: '疑問詞', exampleRu: 'Когда́ бу́дет конце́рт?', exampleJp: 'コンサートはいつですか？', accentTip: '無アクセントоは[а]。', level: 'A0' }
    ]
  },
  // Set 11 (Global Set 11)
  {
    title: '基本の接続詞・指示語',
    theme: '文をつなぐ言葉',
    words: [
      { ru: 'и', kana: 'イー', jp: 'そして、〜と (and)', pos: '接続詞', category: '接続詞', exampleRu: 'Чай и ко́фе.', exampleJp: '紅茶とコーヒー。', accentTip: '等位並列接続詞。', level: 'A0' },
      { ru: 'а', kana: 'アー', jp: '一方、ところで、では (but/while)', pos: '接続詞', category: '接続詞', exampleRu: 'Я япо́нец, а он ру́сский.', exampleJp: '私は日本人で、一方彼はロシア人です。', accentTip: '対照・対比を表す。', level: 'A0' },
      { ru: 'но', kana: 'ノー', jp: 'しかし、だが (but)', pos: '接続詞', category: '接続詞', exampleRu: 'Я хочу́ спать, но на́до учи́ться.', exampleJp: '眠りたい、だが勉強せねばならない。', accentTip: '逆接の接続詞。', level: 'A0' },
      { ru: 'здесь', kana: 'ズジェーシ', jp: 'ここに、ここで', pos: '副詞', category: '指示詞', exampleRu: 'Мой друг живёт здесь.', exampleJp: '私の友人はここに住んでいます。', accentTip: '近称の場所副詞。', level: 'A0' },
      { ru: 'там', kana: 'ターム', jp: 'あそこに、あそこで', pos: '副詞', category: '指示詞', exampleRu: 'Авто́бус стои́т там.', exampleJp: 'バスはあそこに停まっています。', accentTip: '遠称の場所副詞。', level: 'A0' }
    ]
  },
  // Set 12 (Global Set 12)
  {
    title: '第1変化基本動詞 (1)',
    theme: '日常動作',
    words: [
      { ru: 'чита́ть', kana: 'チターチ', jp: '読む、読書する', pos: '動詞', aspect: '不完了', pairedWord: 'прочита́ть', conjugationNote: '第1変化 (чита́ю, чита́ешь...)', category: '動作', exampleRu: 'Я чита́ю рома́н.', exampleJp: '私は小説を読んでいます。', accentTip: 'чита́ю, чита́ешь, чита́ет...', level: 'A0' },
      { ru: 'знать', kana: 'ズナーチ', jp: '知っている', pos: '動詞', aspect: '不完了', pairedWord: 'узна́ть', conjugationNote: '第1変化 (зна́ю, зна́ешь...)', category: '動作', exampleRu: 'Вы зна́ете э́тот го́род?', exampleJp: 'この街をご存知ですか？', accentTip: 'зна́ю, зна́ешь, зна́ет...', level: 'A0' },
      { ru: 'де́лать', kana: 'ジェーラチ', jp: 'する、行う', pos: '動詞', aspect: '不完了', pairedWord: 'сде́лать', conjugationNote: '第1変化 (де́лаю, де́лаешь...)', category: '動作', exampleRu: 'Что ты де́лаешь?', exampleJp: '何をしているの？', accentTip: 'де́лаю, де́лаешь...', level: 'A0' },
      { ru: 'рабо́тать', kana: 'ラボータチ', jp: '働く、仕事をする', pos: '動詞', aspect: '不完了', pairedWord: 'порабо́тать', conjugationNote: '第1変化 (рабо́таю, рабо́таешь...)', category: '動作', exampleRu: 'Оте́ц рабо́тает в ба́нке.', exampleJp: '父は銀行で働いています。', accentTip: 'рабо́таю, рабо́таешь...', level: 'A0' },
      { ru: 'ду́мать', kana: 'ドゥーマチ', jp: '考える、思う', pos: '動詞', aspect: '不完了', pairedWord: 'поду́мать', conjugationNote: '第1変化 (ду́маю, ду́маешь...)', category: '動作', exampleRu: 'Как ты ду́маешь?', exampleJp: '君はどう思う？', accentTip: 'ду́маю, ду́маешь...', level: 'A0' }
    ]
  },
  // Set 13 (Global Set 13)
  {
    title: '第1変化基本動詞 (2)',
    theme: '日常の活動',
    words: [
      { ru: 'слу́шать', kana: 'スルーシャチ', jp: '聴く、耳を傾ける', pos: '動詞', aspect: '不完了', pairedWord: 'послу́шать', conjugationNote: '第1変化 (слу́шаю, слу́шаешь...)', category: '動作', exampleRu: 'Она́ слу́шает му́зыку.', exampleJp: '彼女は音楽を聴いている。', accentTip: '直接目的語に対格をとる。', level: 'A0' },
      { ru: 'понима́ть', kana: 'パニマーチ', jp: '理解する、わかる', pos: '動詞', aspect: '不完了', pairedWord: 'поня́ть', conjugationNote: '第1変化 (понима́ю, понима́ешь...)', category: '動作', exampleRu: 'Вы понима́ете меня́?', exampleJp: '私の言うことがわかりますか？', accentTip: 'понима́ю, понима́ешь...', level: 'A0' },
      { ru: 'отдыха́ть', kana: 'アッディハ―チ', jp: '休む、休息する', pos: '動詞', aspect: '不完了', pairedWord: 'отдохну́ть', conjugationNote: '第1変化 (отдыха́ю, отдыха́ешь...)', category: '動作', exampleRu: 'В суббо́ту мы отдыха́ем.', exampleJp: '土曜日に私たちは休みます。', accentTip: 'отдыха́ю, отдыха́ешь...', level: 'A0' },
      { ru: 'гуля́ть', kana: 'グリャーチ', jp: '散歩する、遊ぶ', pos: '動詞', aspect: '不完了', pairedWord: 'погуля́ть', conjugationNote: '第1変化 (гуля́ю, гуля́ешь...)', category: '動作', exampleRu: 'Де́ти гуля́ют в па́рке.', exampleJp: '子どもたちは公園で散歩している。', accentTip: 'гуля́ю, гуля́ешь...', level: 'A0' },
      { ru: 'игра́ть', kana: 'イグラーチ', jp: '遊ぶ、演奏する、スポーツをする', pos: '動詞', aspect: '不完了', pairedWord: 'сыгра́ть', conjugationNote: '第1変化 (игра́ю, игра́ешь...)', category: '動作', exampleRu: 'Он игра́ет в футбо́л.', exampleJp: '彼はサッカーをします。', accentTip: '球技: в + 対格、楽器: на + 前置格。', level: 'A0' }
    ]
  },
  // Set 14 (Global Set 14)
  {
    title: '出会いと別れの挨拶',
    theme: '社交表現',
    words: [
      { ru: 'Здра́вствуйте', kana: 'ズドラーストヴィチェ', jp: 'こんにちは (丁寧な挨拶)', pos: '表現', category: '挨拶', exampleRu: 'Здра́вствуйте, Ива́н Петро́вич!', exampleJp: 'こんにちは、イワン・ペトローヴィチ！', accentTip: '最初のвは発音しない[ズドラーストヴィチェ]。', level: 'A0' },
      { ru: 'Приве́т', kana: 'プリヴェート', jp: 'やあ、こんにちは (親称)', pos: '表現', category: '挨拶', exampleRu: 'Приве́т, Са́ша!', exampleJp: 'やあ、サーシャ！', accentTip: '親しい間柄の挨拶。', level: 'A0' },
      { ru: 'пока́', kana: 'パカー', jp: 'じゃあね、バイバイ', pos: '表現', category: '挨拶', exampleRu: 'Ну, пока́!', exampleJp: 'それじゃ、またね！', accentTip: '親しい別れの挨拶。', level: 'A0' },
      { ru: 'до свида́ния', kana: 'ダスヴィダーニヤ', jp: 'さようなら', pos: '表現', category: '挨拶', exampleRu: 'До свида́ния, до за́втра!', exampleJp: 'さようなら、また明日！', accentTip: '丁寧な別れの挨拶。', level: 'A0' },
      { ru: 'пожа́луйста', kana: 'パジャールスタ', jp: 'どうぞ、どういたしまして', pos: '間投詞', category: '挨拶', exampleRu: 'Скажи́テ、пожа́луйста...', exampleJp: 'すみませんが教えてください…', accentTip: 'йは発音しない[パジャールスタ]。', level: 'A0' }
    ]
  },
  // Set 15 (Global Set 15)
  {
    title: '謝罪・状態評価・応答',
    theme: '日常の受け答え',
    words: [
      { ru: 'извини́те', kana: 'イズヴィニーチェ', jp: 'すみません、ごめんなさい', pos: '表現', category: '挨拶', exampleRu: 'Извини́те, я опозда́л.', exampleJp: 'すみません、遅刻しました。', accentTip: '呼びかけにも謝罪にも使う。', level: 'A0' },
      { ru: 'прости́те', kana: 'プラスチーチェ', jp: '許してください、すみません', pos: '表現', category: '挨拶', exampleRu: 'Прости́те, где здесь апте́ка?', exampleJp: 'すみません、この辺に薬局はありますか？', accentTip: 'оは弱化[プラスチーチェ]。', level: 'A0' },
      { ru: 'хорошо́', kana: 'ハラショー', jp: '良い、上手に、わかりました', pos: '副詞', category: '評価', exampleRu: 'Всё хорошо́!', exampleJp: '万事順調です！', accentTip: 'アクセントのないоは[а]に弱化。', level: 'A0' },
      { ru: 'пло́хо', kana: 'プローハ', jp: '悪い、下手に、具合が悪い', pos: '副詞', category: '評価', exampleRu: 'Я пло́хо говорю́ по-ру́сски.', exampleJp: '私はロシア語がほとんど話せません。', accentTip: '最初のо́にアクセント。', level: 'A0' },
      { ru: 'норма́льно', kana: 'ナルマーリナ', jp: '普通です、まあまあ順調', pos: '副詞', category: '評価', exampleRu: '– Как дела́? – Норма́льно.', exampleJp: '「調子はどう？」「まあ普通だよ」', accentTip: '日常的で自然な返答。', level: 'A0' }
    ]
  },
  // Set 16 (Global Set 16)
  {
    title: '数詞 1 から 5',
    theme: '数字の基礎',
    words: [
      { ru: 'оди́н', kana: 'アディーン', jp: '1 (one)', pos: '数詞', category: '数詞', exampleRu: 'Оди́н журна́л и одна́ кни́га.', exampleJp: '1冊の雑誌と1冊の本。', accentTip: '性により変化: оди́н, одна́, одно́, одни́。', level: 'A0' },
      { ru: 'два', kana: 'ドヴァー', jp: '2 (two)', pos: '数詞', category: '数詞', exampleRu: 'Два часа́.', exampleJp: '2時間 / 2時。', accentTip: '女性形はдве。名詞は単数生格。', level: 'A0' },
      { ru: 'три', kana: 'トリー', jp: '3 (three)', pos: '数詞', category: '数詞', exampleRu: 'Три рубля́.', exampleJp: '3ルーブル。', accentTip: '名詞は単数生格を取る。', level: 'A0' },
      { ru: 'четы́ре', kana: 'チトィーリェ', jp: '4 (four)', pos: '数詞', category: '数詞', exampleRu: 'Четы́ре студе́нта.', exampleJp: '4人の学生。', accentTip: '2-4は単数生格と結合。', level: 'A0' },
      { ru: 'пять', kana: 'ピャーチ', jp: '5 (five)', pos: '数詞', category: '数詞', exampleRu: 'Пять рубле́й.', exampleJp: '5ルーブル。', accentTip: '5以上は複数生格と結合。', level: 'A0' }
    ]
  },
  // Set 17 (Global Set 17)
  {
    title: '数詞 6 から 10',
    theme: '数字の基礎',
    words: [
      { ru: 'шесть', kana: 'シェースチ', jp: '6 (six)', pos: '数詞', category: '数詞', exampleRu: 'Шесть часо́в.', exampleJp: '6時 / 6時間。', accentTip: '語末ьの軟音。', level: 'A0' },
      { ru: 'семь', kana: 'スェーミ', jp: '7 (seven)', pos: '数詞', category: '数詞', exampleRu: 'Семь дней.', exampleJp: '7日間。', accentTip: '軟音мь。', level: 'A0' },
      { ru: 'во́семь', kana: 'ヴォースィミ', jp: '8 (eight)', pos: '数詞', category: '数詞', exampleRu: 'Во́семь уро́ков.', exampleJp: '8つの課。', accentTip: 'о́にアクセント。', level: 'A0' },
      { ru: 'де́вять', kana: 'ジェーヴャチ', jp: '9 (nine)', pos: '数詞', category: '数詞', exampleRu: 'Де́вять часо́в утра́.', exampleJp: '午前9時。', accentTip: 'е́にアクセント。', level: 'A0' },
      { ru: 'де́сять', kana: 'ジェースャチ', jp: '10 (ten)', pos: '数詞', category: '数詞', exampleRu: 'Де́сять мину́т.', exampleJp: '10分。', accentTip: 'е́にアクセント。', level: 'A0' }
    ]
  },
  // Set 18 (Global Set 18)
  {
    title: '基本形容詞 (性質・評価)',
    theme: '描写と状態',
    words: [
      { ru: 'но́вый', kana: 'ノーヴィ', jp: '新しい', pos: '形容詞', category: '描写', exampleRu: 'Э́то но́вый фильм.', exampleJp: 'これは新しい映画です。', accentTip: '硬変化: но́вый, но́вое, но́вая, но́вые。', level: 'A0' },
      { ru: 'ста́рый', kana: 'スターリィ', jp: '古い、年老いた', pos: '形容詞', category: '描写', exampleRu: 'Ста́рый дом.', exampleJp: '古い家。', accentTip: '対義語はно́вый。', level: 'A0' },
      { ru: 'хоро́ший', kana: 'ハローシィ', jp: '良い、すばらしい', pos: '形容詞', category: '評価', exampleRu: 'Хоро́ший день!', exampleJp: '良い一日！', accentTip: '正書法: шの後はи。', level: 'A0' },
      { ru: 'плохо́й', kana: 'プラホーイ', jp: '悪い', pos: '形容詞', category: '評価', exampleRu: 'Плоха́я пого́да.', exampleJp: '悪天候。', accentTip: '硬変化Ⅱ(語尾アクセント)。', level: 'A0' },
      { ru: 'большо́й', kana: 'バリショーイ', jp: '大きい', pos: '形容詞', category: '性質', exampleRu: 'Большо́й теа́тр.', exampleJp: 'ボリショイ劇場。', accentTip: '正書法により複数はбольши́е。', level: 'A0' }
    ]
  },
  // Set 19 (Global Set 19)
  {
    title: '色彩と対比形容詞',
    theme: '色と外観',
    words: [
      { ru: 'ма́ленький', kana: 'マーリェンキィ', jp: '小さい', pos: '形容詞', category: '性質', exampleRu: 'Ма́ленькая де́вочка.', exampleJp: '幼い少女。', accentTip: '対義語はбольшо́й。', level: 'A0' },
      { ru: 'кра́сный', kana: 'クラースヌィ', jp: '赤い、美しい(古語)', pos: '形容詞', category: '色彩', exampleRu: 'Кра́сная пло́щадь.', exampleJp: '赤の広場。', accentTip: 'かつては「美しい」も意味した。', level: 'A0' },
      { ru: 'бе́лый', kana: 'ビェールィ', jp: '白い', pos: '形容詞', category: '色彩', exampleRu: 'Бе́лые но́чи.', exampleJp: '白夜。', accentTip: 'е́にアクセント。', level: 'A0' },
      { ru: 'чёрный', kana: 'チョールヌィ', jp: '黒い', pos: '形容詞', category: '色彩', exampleRu: 'Чёрный хлеб.', exampleJp: '黒パン。', accentTip: 'ёには常にアクセント。', level: 'A0' },
      { ru: 'си́ний', kana: 'シーニィ', jp: '青い、紺色の', pos: '形容詞', category: '色彩', exampleRu: 'Си́нее не́бо.', exampleJp: '青い空。', accentTip: '代表的な軟変化形容詞。', level: 'A0' }
    ]
  },
  // Set 20 (Global Set 20)
  {
    title: '存在動詞бытьと時間副詞',
    theme: '時制と存在',
    words: [
      { ru: 'быть', kana: 'ブィーチ', jp: 'ある、いる、〜である(be)', pos: '動詞', aspect: '不完了', conjugationNote: '現在есть, 過去был/была́/бы́ло/бы́ли, 未来бу́ду...', category: '存在', exampleRu: 'Вчера́ он был до́ма.', exampleJp: '昨日彼は家にいました。', accentTip: '過去否定アクセント: не́ был, не была́。', level: 'A0' },
      { ru: 'сего́дня', kana: 'シヴォードニャ', jp: '今日', pos: '副詞', category: '時', exampleRu: 'Сего́дня прекра́сный день.', exampleJp: '今日は素晴らしい日です。', accentTip: '-го-は[во]と発音(シヴォードニャ)。', level: 'A0' },
      { ru: 'вчера́', kana: 'フチェラー', jp: '昨日', pos: '副詞', category: '時', exampleRu: 'Вчера́ шёл дождь.', exampleJp: '昨日は雨が降っていました。', accentTip: 'вは無声化して[ф]。', level: 'A0' },
      { ru: 'за́втра', kana: 'ザーフトラ', jp: '明日', pos: '副詞', category: '時', exampleRu: 'За́втра бу́дет экза́мен.', exampleJp: '明日は試験があります。', accentTip: 'вは無声化して[ф]。', level: 'A0' },
      { ru: 'сейча́с', kana: 'スィチャース', jp: '今、現在、ただいま', pos: '副詞', category: '時', exampleRu: 'Ско́лько сейча́с вре́мени?', exampleJp: '今何時ですか？', accentTip: '口語では「すぐ行きます」の意味も。', level: 'A0' }
    ]
  }
];

export const unit1Sets: WordSet[] = rawUnit1Sets.map((raw, idx) =>
  buildWordSet(idx + 1, 1, idx + 1, raw.title, raw.theme, raw.words)
);
