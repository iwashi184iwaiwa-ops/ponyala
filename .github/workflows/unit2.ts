import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 2: Sets 21-40 (20 sets × 5 words = 100 authentic words, A1 level)
const rawUnit2Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 21
  {
    title: '都市と道路',
    theme: '街の景観',
    words: [
      { ru: 'го́род', kana: 'ゴーラト', jp: '街、都市', pos: '名詞', gender: '男', pluralForm: 'города́', category: '都市', exampleRu: 'Москва́ – краси́вый го́род.', exampleJp: 'モスクワは美しい街です。', accentTip: '語末дは無声化[т]。複数形города́。', level: 'A1' },
      { ru: 'у́лица', kana: 'ウーリツァ', jp: '通り、街路', pos: '名詞', gender: '女', pluralForm: 'у́лицы', category: '都市', exampleRu: 'На э́той у́лице мно́го магази́нов.', exampleJp: 'この通りには店が多い。', accentTip: '前置詞наを使う(на у́лице)。', level: 'A1' },
      { ru: 'пло́щадь', kana: 'プローシャチ', jp: '広場', pos: '名詞', gender: '女', pluralForm: 'пло́щади', category: '都市', exampleRu: 'Кра́сная пло́щадь.', exampleJp: '赤の広場。', accentTip: '前置格はна пло́щади。女性名詞。', level: 'A1' },
      { ru: 'проспе́кт', kana: 'プラスピェークト', jp: '大通り', pos: '名詞', gender: '男', pluralForm: 'проспе́кты', category: '都市', exampleRu: 'Невский проспе́кт в Петербу́рге.', exampleJp: 'ペテルブルクのネフスキー大通り。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'мост', kana: 'モースト', jp: '橋', pos: '名詞', gender: '男', pluralForm: 'мосты́', category: '都市', exampleRu: 'По́езд идёт по мосту́.', exampleJp: '列車は橋の上を通っている。', accentTip: '第2前置格на мосту́。', level: 'A1' }
    ]
  },
  // Set 22
  {
    title: '交通機関と駅',
    theme: '移動手段',
    words: [
      { ru: 'по́езд', kana: 'ポーイズト', jp: '列車、電車', pos: '名詞', gender: '男', pluralForm: 'поезда́', category: '交通', exampleRu: 'По́езд отправля́ется в пять.', exampleJp: '列車は5時に出発します。', accentTip: '複数形はпоезда́。', level: 'A1' },
      { ru: 'вокза́л', kana: 'ヴァグザール', jp: 'ターミナル駅', pos: '名詞', gender: '男', pluralForm: 'вокза́лы', category: '交通', exampleRu: 'Мы встре́тились на вокза́ле.', exampleJp: '私たちは駅で会いました。', accentTip: 'кはзの前で有声化[г]。', level: 'A1' },
      { ru: 'ста́нция', kana: 'スターンツィヤ', jp: '駅(地下鉄や中間駅)', pos: '名詞', gender: '女', pluralForm: 'ста́нции', category: '交通', exampleRu: 'Ста́нция метро́.', exampleJp: '地下鉄の駅。', accentTip: '前置格はна ста́нции。', level: 'A1' },
      { ru: 'авто́бус', kana: 'アフツォーブス', jp: 'バス', pos: '名詞', gender: '男', pluralForm: 'авто́бусы', category: '交通', exampleRu: 'Я е́ду на авто́бусе.', exampleJp: '私はバスに乗って行きます。', accentTip: 'вは無声化[ф]。', level: 'A1' },
      { ru: 'трамва́й', kana: 'トラムヴァーイ', jp: '路面電車', pos: '名詞', gender: '男', pluralForm: 'трамва́и', category: '交通', exampleRu: 'Трамва́й остана́вливается здесь.', exampleJp: '路面電車はここに止まります。', accentTip: '-йで終わる男性名詞。', level: 'A1' }
    ]
  },
  // Set 23
  {
    title: '車両と乗客',
    theme: '乗り物',
    words: [
      { ru: 'метро́', kana: 'ミトロー', jp: '地下鉄', pos: '名詞', gender: '中', category: '交通', exampleRu: 'Вход в метро́.', exampleJp: '地下鉄の入口。', accentTip: '不変化名詞。格変化しない。', level: 'A1' },
      { ru: 'такси́', kana: 'タクシー', jp: 'タクシー', pos: '名詞', gender: '中', category: '交通', exampleRu: 'Мы взя́ли такси́.', exampleJp: '私たちはタクシーを拾った。', accentTip: '不変化名詞。', level: 'A1' },
      { ru: 'маши́на', kana: 'マシーナ', jp: '自動車、車', pos: '名詞', gender: '女', pluralForm: 'маши́ны', category: '交通', exampleRu: 'У него́ но́вая маши́на.', exampleJp: '彼は新しい車を持っています。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'пассажи́р', kana: 'パサジール', jp: '乗客', pos: '名詞', gender: '男', pluralForm: 'пассажи́ры', category: '交通', exampleRu: 'Пассажи́р покупа́ет биле́т.', exampleJp: '乗客が切符を買っている。', accentTip: '活動体名詞。', level: 'A1' },
      { ru: 'биле́т', kana: 'ビリエート', jp: '切符、チケット', pos: '名詞', gender: '男', pluralForm: 'биле́ты', category: '交通', exampleRu: 'Покажи́те биле́т, пожа́луйста.', exampleJp: '切符を見せてください。', accentTip: 'е́にアクセント。', level: 'A1' }
    ]
  },
  // Set 24
  {
    title: '店舗と買い物',
    theme: '商業施設',
    words: [
      { ru: 'магази́н', kana: 'マガズィーン', jp: '店、商店', pos: '名詞', gender: '男', pluralForm: 'магази́ны', category: '商業', exampleRu: 'Кни́жный магази́н.', exampleJp: '書店。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'ры́нок', kana: 'ルィーナク', jp: '市場、マーケット', pos: '名詞', gender: '男', pluralForm: 'ры́нки', category: '商業', exampleRu: 'Она́ покупа́ет мя́со на ры́нке.', exampleJp: '彼女は市場で肉を買う。', accentTip: '出没母音о(ры́нка, на ры́нке)。', level: 'A1' },
      { ru: 'ка́сса', kana: 'カースサ', jp: 'レジ、切符売り場', pos: '名詞', gender: '女', pluralForm: 'ка́ссы', category: '商業', exampleRu: 'Где ка́сса?', exampleJp: 'レジはどこですか？', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'рубль', kana: 'ルーブリ', jp: 'ルーブル(ロシア通貨)', pos: '名詞', gender: '男', pluralForm: 'рубли́', category: '経済', exampleRu: 'Ско́лько сто́ит? – Сто рубле́й.', exampleJp: 'いくらですか？– 100ルーブルです。', accentTip: '2-4 рубля́, 5以上рубле́й。', level: 'A1' },
      { ru: 'це́на', kana: 'ツィナー', jp: '値段、価格', pos: '名詞', gender: '女', pluralForm: 'це́ны', category: '経済', exampleRu: 'Высо́кая цена́.', exampleJp: '高い値段。複数はце́ны。', accentTip: '単数は語尾、複数は語幹。', level: 'A1' }
    ]
  },
  // Set 25
  {
    title: '公共・文化施設',
    theme: '都市施設',
    words: [
      { ru: 'апте́ка', kana: 'アプチェーカ', jp: '薬局', pos: '名詞', gender: '女', pluralForm: 'апте́ки', category: '医療', exampleRu: 'Где ближа́йшая апте́ка?', exampleJp: '一番近い薬局はどこですか？', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'больни́ца', kana: 'バリニーツァ', jp: '病院', pos: '名詞', gender: '女', pluralForm: 'больни́цы', category: '医療', exampleRu: 'Врач рабо́тает в больни́це.', exampleJp: '医師は病院で働いている。', accentTip: 'оは弱化[а]。', level: 'A1' },
      { ru: 'по́чта', kana: 'ポーチタ', jp: '郵便局', pos: '名詞', gender: '女', pluralForm: 'по́чты', category: '公共', exampleRu: 'Ма́ма рабо́тает на по́чте.', exampleJp: '母は郵便局で働いています。', accentTip: '前置詞наを使う(на по́чте)。', level: 'A1' },
      { ru: 'банк', kana: 'バーンク', jp: '銀行', pos: '名詞', gender: '男', pluralForm: 'ба́нки', category: '金融', exampleRu: 'Банк открыва́ется в де́вять.', exampleJp: '銀行は9時に開きます。', accentTip: '前置詞вを使う(в ба́нке)。', level: 'A1' },
      { ru: 'библиоте́ка', kana: 'ビブリオチェーカ', jp: '図書館', pos: '名詞', gender: '女', pluralForm: 'библиоте́ки', category: '文化', exampleRu: 'Студе́нты чита́ют в библиоте́ке.', exampleJp: '学生たちは図書館で読書する。', accentTip: 'е́にアクセント。', level: 'A1' }
    ]
  },
  // Set 26
  {
    title: '娯楽と芸術施設',
    theme: 'レジャー・芸術',
    words: [
      { ru: 'теа́тр', kana: 'チアートル', jp: '劇場', pos: '名詞', gender: '男', pluralForm: 'теа́тры', category: '文化', exampleRu: 'Большо́й теа́тр в Москве́.', exampleJp: 'モスクワのボリショイ劇場。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'музе́й', kana: 'ムゼーイ', jp: '博物館、美術館', pos: '名詞', gender: '男', pluralForm: 'музе́и', category: '文化', exampleRu: 'Эрмита́ж – прекра́сный музе́й.', exampleJp: 'エルミタージュは素晴らしい美術館です。', accentTip: '-й男性名詞。', level: 'A1' },
      { ru: 'кино́', kana: 'キノー', jp: '映画、映画館', pos: '名詞', gender: '中', category: '娯楽', exampleRu: 'Мы идём в кино́.', exampleJp: '私たちは映画に行きます。', accentTip: '不変化名詞。', level: 'A1' },
      { ru: 'конце́рт', kana: 'カンツェールト', jp: 'コンサート、演奏会', pos: '名詞', gender: '男', pluralForm: 'конце́рты', category: '音楽', exampleRu: 'Быть на конце́рте.', exampleJp: 'コンサートにいる(на+前置格)。', accentTip: '催し物なので前置詞на。', level: 'A1' },
      { ru: 'парк', kana: 'パールク', jp: '公園', pos: '名詞', gender: '男', pluralForm: 'па́рки', category: '自然', exampleRu: 'Мы гуля́ем в па́рке.', exampleJp: '私たちは公園を散歩している。', accentTip: '複数形па́рки。', level: 'A1' }
    ]
  },
  // Set 27
  {
    title: '飲食店と宿泊',
    theme: '食と滞在',
    words: [
      { ru: 'кафе́', kana: 'カフェー', jp: 'カフェ、喫茶店', pos: '名詞', gender: '中', category: '飲食', exampleRu: 'Встре́тимся в кафе́.', exampleJp: 'カフェで会おう。', accentTip: '不変化名詞。фは硬音[フェ]。', level: 'A1' },
      { ru: 'рестора́н', kana: 'リスタラーン', jp: 'レストラン', pos: '名詞', gender: '男', pluralForm: 'рестора́ны', category: '飲食', exampleRu: 'Мы у́жинаем в рестора́не.', exampleJp: '私たちはレストランで夕食をとる。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'столо́вая', kana: 'スタローヴァヤ', jp: '食堂', pos: '名詞', gender: '女', pluralForm: 'столо́вые', category: '飲食', exampleRu: 'Студе́нческая столо́вая.', exampleJp: '学生食堂。形容詞型名詞。', accentTip: '形容詞と同じ格変化。', level: 'A1' },
      { ru: 'гости́ница', kana: 'ガスチーニツァ', jp: 'ホテル', pos: '名詞', gender: '女', pluralForm: 'гости́ницы', category: '宿泊', exampleRu: 'Но́мер в гости́нице.', exampleJp: 'ホテルの部屋。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'общежи́тие', kana: 'アプシシェジィーチイェ', jp: '寮、学生寮', pos: '名詞', gender: '中', pluralForm: 'общежи́тия', category: '住居', exampleRu: 'Они́ живу́т в общежи́тии.', exampleJp: '彼らは寮に住んでいます。', accentTip: '前置格語尾-ии。', level: 'A1' }
    ]
  },
  // Set 28
  {
    title: '一日の時間帯',
    theme: '時間の区切り',
    words: [
      { ru: 'у́тро', kana: 'ウートラ', jp: '朝', pos: '名詞', gender: '中', pluralForm: 'утра́', category: '時間', exampleRu: 'До́брое у́тро!', exampleJp: 'おはようございます！', accentTip: '副詞はу́тром (朝に)。', level: 'A1' },
      { ru: 'день', kana: 'ジェーニ', jp: '昼、日', pos: '名詞', gender: '男', pluralForm: 'дни', category: '時間', exampleRu: 'До́брый день!', exampleJp: 'こんにちは！', accentTip: '副詞はднём (昼間に)。生格дня。', level: 'A1' },
      { ru: 'ве́чер', kana: 'ヴェーチェル', jp: '夕方、晩', pos: '名詞', gender: '男', pluralForm: 'вечера́', category: '時間', exampleRu: 'До́брый ве́чер!', exampleJp: 'こんばんは！', accentTip: '副詞はве́чером (夕方に)。', level: 'A1' },
      { ru: 'ночь', kana: 'ノーチ', jp: '夜、夜中', pos: '名詞', gender: '女', pluralForm: 'но́чи', category: '時間', exampleRu: 'Споко́йной но́чи!', exampleJp: 'おやすみなさい！', accentTip: '副詞はно́чью (夜中に)。', level: 'A1' },
      { ru: 'вре́мя', kana: 'ヴリェーミャ', jp: '時間', pos: '名詞', gender: '中', pluralForm: 'времена́', category: '時間', exampleRu: 'Ско́лько вре́мени?', exampleJp: '今何時ですか？', accentTip: '-мя中性名詞。生格вре́мени。', level: 'A1' }
    ]
  },
  // Set 29
  {
    title: '時・分・秒・単位',
    theme: '時間の計測',
    words: [
      { ru: 'час', kana: 'チャース', jp: '時間、1時間、〜時', pos: '名詞', gender: '男', pluralForm: 'часы́', category: '時間', exampleRu: 'Семь часо́в вечера.', exampleJp: '午後7時。', accentTip: '2-4 часа́, 5以上часо́в。', level: 'A1' },
      { ru: 'мину́та', kana: 'ミヌータ', jp: '分 (minute)', pos: '名詞', gender: '女', pluralForm: 'мину́ты', category: '時間', exampleRu: 'Де́сять мину́т.', exampleJp: '10分。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'секу́нда', kana: 'スィクーンダ', jp: '秒 (second)', pos: '名詞', gender: '女', pluralForm: 'секу́нды', category: '時間', exampleRu: 'Одну́ секу́нду!', exampleJp: 'ちょっと待ってください(1秒)！', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'неде́ля', kana: 'ニジェーリャ', jp: '週、1週間', pos: '名詞', gender: '女', pluralForm: 'неде́ли', category: '時間', exampleRu: 'На э́той неде́ле.', exampleJp: '今週(на + 前置格)。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'ме́сяц', kana: 'ミェースャツ', jp: '月、1ヶ月', pos: '名詞', gender: '男', pluralForm: 'ме́сяцы', category: '時間', exampleRu: 'Оди́н ме́сяц.', exampleJp: '1ヶ月。', accentTip: 'е́にアクセント。', level: 'A1' }
    ]
  },
  // Set 30
  {
    title: '年・食事の区切り',
    theme: '生活リズム',
    words: [
      { ru: 'год', kana: 'ゴート', jp: '年、1年', pos: '名詞', gender: '男', pluralForm: 'го́ды', category: '時間', exampleRu: 'В э́том году́.', exampleJp: '今年(第2前置格-у́)。', accentTip: '複数生格は例外でлет。', level: 'A1' },
      { ru: 'за́втрак', kana: 'ザーフトラク', jp: '朝食', pos: '名詞', gender: '男', pluralForm: 'за́втраки', category: '飲食', exampleRu: 'Вку́сный за́втрак.', exampleJp: 'おいしい朝食。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'обе́д', kana: 'アビェート', jp: '昼食', pos: '名詞', gender: '男', pluralForm: 'обе́ды', category: '飲食', exampleRu: 'Переры́в на обе́д.', exampleJp: '昼食休憩。語末дは[т]。', level: 'A1' },
      { ru: 'у́жин', kana: 'ウージン', jp: '夕食', pos: '名詞', gender: '男', pluralForm: 'у́жины', category: '飲食', exampleRu: 'Семе́йный у́жин.', exampleJp: '家族の夕食。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'посу́да', kana: 'パスーダ', jp: '食器', pos: '名詞', gender: '女', category: '家事', exampleRu: 'Мыть посу́ду.', exampleJp: '食器を洗う。集合名詞。', accentTip: 'у́にアクセント。', level: 'A1' }
    ]
  },
  // Set 31
  {
    title: '曜日 (月・火・水・木・金)',
    theme: '週間スケジュール',
    words: [
      { ru: 'понеде́льник', kana: 'パニジェーリニク', jp: '月曜日', pos: '名詞', gender: '男', category: '曜日', exampleRu: 'В понеде́льник я рабо́таю.', exampleJp: '月曜日に私は働きます(в+対格)。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'вто́рник', kana: 'フストールニク', jp: '火曜日', pos: '名詞', gender: '男', category: '曜日', exampleRu: 'Во вто́рник бу́дет уро́к.', exampleJp: '火曜日に授業があります(во+対格)。', accentTip: '前置詞はвоになる。', level: 'A1' },
      { ru: 'среда́', kana: 'スリダー', jp: '水曜日', pos: '名詞', gender: '女', category: '曜日', exampleRu: 'В сре́ду мы отдыха́ем.', exampleJp: '水曜日に私たちは休みます(в сре́ду)。', accentTip: '対格はв сре́ду(頭移動)。', level: 'A1' },
      { ru: 'четве́рг', kana: 'チトヴェールク', jp: '木曜日', pos: '名詞', gender: '男', category: '曜日', exampleRu: 'В четве́рг.', exampleJp: '木曜日に。語末гは[к]。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'пя́тница', kana: 'ピャートニツァ', jp: '金曜日', pos: '名詞', gender: '女', category: '曜日', exampleRu: 'В пя́тницу ве́чером.', exampleJp: '金曜日の夜に(в пя́тницу)。', accentTip: 'я́にアクセント。', level: 'A1' }
    ]
  },
  // Set 32
  {
    title: '週末と季節',
    theme: '週末と四季',
    words: [
      { ru: 'суббо́та', kana: 'スボータ', jp: '土曜日', pos: '名詞', gender: '女', category: '曜日', exampleRu: 'В суббо́ту мы е́дем на да́чу.', exampleJp: '土曜日に私たちは別荘へ行きます。', accentTip: '対格в суббо́ту。', level: 'A1' },
      { ru: 'воскресе́нье', kana: 'ヴァスクリスィエーニイェ', jp: '日曜日', pos: '名詞', gender: '中', category: '曜日', exampleRu: 'В воскресе́нье.', exampleJp: '日曜日に(в воскресе́нье)。', accentTip: '「復活」を語源とする。', level: 'A1' },
      { ru: 'весна́', kana: 'ヴィスナー', jp: '春', pos: '名詞', gender: '女', category: '季節', exampleRu: 'Весно́й цвету́т цветы́.', exampleJp: '春に花が咲く(造格副詞 весно́й)。', accentTip: '副詞はвесно́й。', level: 'A1' },
      { ru: 'ле́то', kana: 'リェータ', jp: '夏', pos: '名詞', gender: '中', category: '季節', exampleRu: 'Ле́том о́чень те́пло.', exampleJp: '夏はとても暖かい(造格副詞 ле́том)。', accentTip: '副詞はле́том。', level: 'A1' },
      { ru: 'о́сень', kana: 'オースィニ', jp: '秋', pos: '名詞', gender: '女', category: '季節', exampleRu: 'О́сенью мы собира́ем грибы́.', exampleJp: '秋に私たちはキノコを採る(о́сенью)。', accentTip: '女性名詞。副詞о́сенью。', level: 'A1' }
    ]
  },
  // Set 33
  {
    title: '冬・自然現象',
    theme: '気候と天候',
    words: [
      { ru: 'зима́', kana: 'ズィマー', jp: '冬', pos: '名詞', gender: '女', category: '季節', exampleRu: 'Зимо́й идёт снег.', exampleJp: '冬には雪が降る(造格副詞 зимо́й)。', accentTip: '副詞はзимо́й。', level: 'A1' },
      { ru: 'снег', kana: 'スニェーク', jp: '雪', pos: '名詞', gender: '男', category: '天候', exampleRu: 'Идёт бе́лый снег.', exampleJp: '白い雪が降っている。語末гは[к]。', accentTip: '第2前置格 на снегу́。', level: 'A1' },
      { ru: 'дождь', kana: 'ドージチ', jp: '雨', pos: '名詞', gender: '男', category: '天候', exampleRu: 'Идёт си́льный дождь.', exampleJp: '激しい雨が降っている。語末ьは[チ]。', accentTip: 'アクセント語尾移動(дождя́)。', level: 'A1' },
      { ru: 'ве́тер', kana: 'ヴェーチェル', jp: '風', pos: '名詞', gender: '男', category: '天候', exampleRu: 'Ду́ет холо́дный ве́тер.', exampleJp: '冷たい風が吹いている。', accentTip: '出没母音(ве́тра)。', level: 'A1' },
      { ru: 'со́лнце', kana: 'ソーンツェ', jp: '太陽、日射し', pos: '名詞', gender: '中', category: '自然', exampleRu: 'Со́лнце све́тит я́рко.', exampleJp: '太陽が明るく輝いている。', accentTip: 'лは発音しない[ソーンツェ]。', level: 'A1' }
    ]
  },
  // Set 34
  {
    title: '第2変化動詞 (発話・思考)',
    theme: '対話と認識',
    words: [
      { ru: 'говори́ть', kana: 'ガヴァリーチ', jp: '話す、言う', pos: '動詞', aspect: '不完了', pairedWord: 'сказа́ть', conjugationNote: '第2変化 (говорю́, говори́шь...)', category: '対話', exampleRu: 'Вы говори́те по-ру́сски?', exampleJp: 'ロシア語を話しますか？', accentTip: 'говорю́, говори́шь, говоря́т。', level: 'A1' },
      { ru: 'смотре́ть', kana: 'スマトリェーチ', jp: '見る、観る', pos: '動詞', aspect: '不完了', pairedWord: 'посмотре́ть', conjugationNote: '第2変化 (смотрю́, смо́тришь...)', category: '知覚', exampleRu: 'Я смотрю́ телеви́зор.', exampleJp: '私はテレビを見ています。', accentTip: 'アクセント移動: смотрю́, смо́тришь。', level: 'A1' },
      { ru: 'ви́деть', kana: 'ヴィージェチ', jp: '見える、目撃する', pos: '動詞', aspect: '不完了', pairedWord: 'уви́деть', conjugationNote: '第2変化・子音交替 (ви́жу, ви́дишь...)', category: '知覚', exampleRu: 'Я ви́жу го́ры.', exampleJp: '山が見えます。', accentTip: '1単数で子音交替д→ж(ви́жу)。', level: 'A1' },
      { ru: 'слы́шать', kana: 'スルィーシャチ', jp: '聞こえる、耳に入る', pos: '動詞', aspect: '不完了', pairedWord: 'услы́шать', conjugationNote: '第2変化 (слы́шу, слы́шишь...)', category: '知覚', exampleRu: 'Я пло́хо слы́шу.', exampleJp: 'よく聞こえません。', accentTip: '正書法: слы́шат (×слы́шят)。', level: 'A1' },
      { ru: 'по́мнить', kana: 'ポームニチ', jp: '覚えている、記憶している', pos: '動詞', aspect: '不完了', pairedWord: 'вспо́мнить', conjugationNote: '第2変化 (по́мню, по́мнишь...)', category: '認識', exampleRu: 'Я по́мню э́то сло́во.', exampleJp: '私はその単語を覚えている。', accentTip: 'о́にアクセント固定。', level: 'A1' }
    ]
  },
  // Set 35
  {
    title: '第2変化動詞 (感情・生活)',
    theme: '感情と日常',
    words: [
      { ru: 'люби́ть', kana: 'リュビーチ', jp: '愛する、好む', pos: '動詞', aspect: '不完了', pairedWord: 'полюби́ть', conjugationNote: '第2変化・唇音交替 (люблю́, лю́бишь...)', category: '感情', exampleRu: 'Я люблю́ му́зыку.', exampleJp: '私は音楽が好きです。', accentTip: '1単数で-л-挿入 (люблю́)。', level: 'A1' },
      { ru: 'кури́ть', kana: 'クリーチ', jp: 'タバコを吸う', pos: '動詞', aspect: '不完了', conjugationNote: '第2変化 (курю́, ку́ришь...)', category: '習慣', exampleRu: 'Здесь нельзя́ кури́ть.', exampleJp: 'ここでは喫煙できません。', accentTip: 'アクセント移動: курю́, ку́ришь。', level: 'A1' },
      { ru: 'звони́ть', kana: 'ズヴァニーチ', jp: '電話をかける', pos: '動詞', aspect: '不完了', pairedWord: 'позвони́ть', conjugationNote: '第2変化 (звоню́, звони́шь...)', category: '通信', exampleRu: 'Он звони́т ма́ме.', exampleJp: '彼は母に電話している(与格)。', accentTip: '相手は与格をとる。', level: 'A1' },
      { ru: 'стоя́ть', kana: 'スタヤ―チ', jp: '立っている、位置する', pos: '動詞', aspect: '不完了', conjugationNote: '第2変化 (стою́, стои́шь...)', category: '状態', exampleRu: 'Авто́бус стои́т здесь.', exampleJp: 'バスはここに停まっています。', accentTip: '語尾にアクセント(стою́, стои́т)。', level: 'A1' },
      { ru: 'лежа́ть', kana: 'リジャーチ', jp: '横たわっている、置いてある', pos: '動詞', aspect: '不完了', conjugationNote: '第2変化 (лежу́, лежи́шь...)', category: '状態', exampleRu: 'Кни́га лежи́т на столе́.', exampleJp: '本は机の上に置いてあります。', accentTip: '語尾アクセント(лежу́, лежи́т)。', level: 'A1' }
    ]
  },
  // Set 36
  {
    title: '第2変化動詞 (学習・料理)',
    theme: '動作と習慣',
    words: [
      { ru: 'учи́ть', kana: 'ウチーチ', jp: '覚える、教える', pos: '動詞', aspect: '不完了', pairedWord: 'вы́учить', conjugationNote: '第2変化 (учу́, у́чишь...)', category: '教育', exampleRu: 'Я учу́ ру́сские слова́.', exampleJp: '私はロシア語の単語を覚えている。', accentTip: '正書法: учу́, у́чат。', level: 'A1' },
      { ru: 'вари́ть', kana: 'ヴァリーチ', jp: '煮る、ゆでる', pos: '動詞', aspect: '不完了', pairedWord: 'свари́ть', conjugationNote: '第2変化 (варю́, ва́ришь...)', category: '料理', exampleRu: 'Ма́ма ва́рит суп.', exampleJp: '母はスープを煮ている。', accentTip: 'アクセント移動: варю́, ва́ришь。', level: 'A1' },
      { ru: 'стро́ить', kana: 'ストローイチ', jp: '建てる、建設する', pos: '動詞', aspect: '不完了', pairedWord: 'постро́ить', conjugationNote: '第2変化 (стро́ю, стро́ишь...)', category: '労働', exampleRu: 'Они́ стро́ят но́вый дом.', exampleJp: '彼らは新しい家を建てている。', accentTip: 'о́にアクセント固定。', level: 'A1' },
      { ru: 'спеши́ть', kana: 'スピシ―チ', jp: '急ぐ', pos: '動詞', aspect: '不完了', pairedWord: 'поспеши́ть', conjugationNote: '第2変化 (спешу́, спеши́шь...)', category: '動作', exampleRu: 'Я спешу́ на рабо́ту.', exampleJp: '私は仕事に急いでいます。', accentTip: '正書法: спеша́т。', level: 'A1' },
      { ru: 'спать', kana: 'スパート', jp: '眠る、寝ている', pos: '動詞', aspect: '不完了', pairedWord: 'поспа́ть', conjugationNote: '第2変化・唇音交替 (сплю, спишь...)', category: '生理', exampleRu: 'Ребёнок спит.', exampleJp: '子どもが眠っている。', accentTip: '1単数で-л-挿入(сплю)。', level: 'A1' }
    ]
  },
  // Set 37
  {
    title: '形容詞 (温度・味・天候)',
    theme: '感覚の描写',
    words: [
      { ru: 'горя́чий', kana: 'ガリャーチィ', jp: '熱い', pos: '形容詞', category: '温度', exampleRu: 'Горя́чий чай.', exampleJp: '熱いお茶。', accentTip: '混合変化Ⅲ (語幹ч)。', level: 'A1' },
      { ru: 'холо́дный', kana: 'ハロードヌィ', jp: '冷たい、寒い', pos: '形容詞', category: '温度', exampleRu: 'Холо́дная вода́.', exampleJp: '冷たい水。', accentTip: '対義語はгоря́чий / тёплый。', level: 'A1' },
      { ru: 'тёплый', kana: 'チョープルィ', jp: '暖かい、温かい', pos: '形容詞', category: '温度', exampleRu: 'Тёплое пальто́.', exampleJp: '暖かいコート。', accentTip: 'ёにアクセント。', level: 'A1' },
      { ru: 'вку́сный', kana: 'フクースヌィ', jp: 'おいしい、美味な', pos: '形容詞', category: '味覚', exampleRu: 'О́чень вку́сный пиро́г.', exampleJp: 'とてもおいしいピローグ。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'дорого́й', kana: 'ダラゴーイ', jp: '高価な、親愛なる', pos: '形容詞', category: '評価', exampleRu: 'Дорого́й друг!', exampleJp: '親愛なる友よ！', accentTip: '硬変化Ⅱ(語尾アクセント)。', level: 'A1' }
    ]
  },
  // Set 38
  {
    title: '形容詞 (価格・難易・速度)',
    theme: '状態の描写',
    words: [
      { ru: 'дешёвый', kana: 'ジショ―ヴィ', jp: '安い、安価な', pos: '形容詞', category: '経済', exampleRu: 'Дешёвые биле́ты.', exampleJp: '安いチケット。', accentTip: 'ёにアクセント。比較級деше́вле。', level: 'A1' },
      { ru: 'тру́дный', kana: 'トルードヌィ', jp: '難しい、困難な', pos: '形容詞', category: '難易', exampleRu: 'Тру́дный экза́мен.', exampleJp: '難しい試験。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'лёгкий', kana: 'リョーフキィ', jp: '簡単な、軽い', pos: '形容詞', category: '難易', exampleRu: 'Лёгкий вопро́с.', exampleJp: '簡単な質問。гは[х]に無声化。', accentTip: '発音は[リョーフキィ]。', level: 'A1' },
      { ru: 'бы́стрый', kana: 'ブィーストラィ', jp: '素早い、速い', pos: '形容詞', category: '速度', exampleRu: 'Бы́стрый по́езд.', exampleJp: '高速列車。', accentTip: '副詞はбы́стро (早く)。', level: 'A1' },
      { ru: 'ме́дленный', kana: 'ミェードリェンヌィ', jp: '遅い、ゆっくりした', pos: '形容詞', category: '速度', exampleRu: 'Ме́дленная му́зыка.', exampleJp: 'ゆったりした音楽。', accentTip: '副詞はме́дленно。', level: 'A1' }
    ]
  },
  // Set 39
  {
    title: '位置関係の前置詞',
    theme: '空間の把握',
    words: [
      { ru: 'в', kana: 'ヴ', jp: '〜の中に、〜へ (in/to)', pos: '前置詞', caseGovernance: '+ 前置格 (中) / + 対格 (へ)', category: '空間', exampleRu: 'В ко́мнате.', exampleJp: '部屋の中で(前置格)。', accentTip: '無声音の前で[ф]に無声化。', level: 'A1' },
      { ru: 'на', kana: 'ナ', jp: '〜の上に、〜へ (on/to)', pos: '前置詞', caseGovernance: '+ 前置格 (上) / + 対格 (へ)', category: '空間', exampleRu: 'На столе́.', exampleJp: '机の上に(前置格)。', accentTip: '平らな場所・催し物にも用いる。', level: 'A1' },
      { ru: 'о', kana: 'ア', jp: '〜について (about)', pos: '前置詞', caseGovernance: '+ 前置格', category: '話題', exampleRu: 'Кни́га о Росси́и.', exampleJp: 'ロシアについての本。', accentTip: '母音の前でоб、мнеの前でобо。', level: 'A1' },
      { ru: 'с', kana: 'ス', jp: '〜と一緒に (with)', pos: '前置詞', caseGovernance: '+ 造格', category: '同伴', exampleRu: 'Чай с са́харом.', exampleJp: '砂糖入りの紅茶。', accentTip: '特定子音の前でсо。', level: 'A1' },
      { ru: 'для', kana: 'ドリャー', jp: '〜のために (for)', pos: '前置詞', caseGovernance: '+ 生格', category: '目的', exampleRu: 'Пода́рок для ма́мы.', exampleJp: '母のためのプレゼント。', accentTip: '必ず生格を支配。', level: 'A1' }
    ]
  },
  // Set 40
  {
    title: 'Unit 2 総合確認語彙',
    theme: 'A1の重要接続詞・副詞',
    words: [
      { ru: 'то́же', kana: 'トージジェ', jp: '〜もまた (also)', pos: '副詞', category: '並列', exampleRu: 'Я то́же студе́нт.', exampleJp: '私も学生です。', accentTip: '主語の同一並列。', level: 'A1' },
      { ru: 'о́чень', kana: 'オーチニ', jp: 'とても、たいへん (very)', pos: '副詞', category: '程度', exampleRu: 'О́чень прия́тно.', exampleJp: 'はじめまして(大変心地よい)。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'мно́го', kana: 'ムノーガ', jp: 'たくさん、多くの (many/much)', pos: '数量詞', caseGovernance: '+ 生格', category: '数量', exampleRu: 'Мно́го книг.', exampleJp: 'たくさんの本(複数生格)。', accentTip: '可算名詞は複数生格と結合。', level: 'A1' },
      { ru: 'ма́ло', kana: 'マーラ', jp: '少ししか〜ない、わずかの (few/little)', pos: '数量詞', caseGovernance: '+ 生格', category: '数量', exampleRu: 'Ма́ло вре́мени.', exampleJp: '時間がわずかしかない。', accentTip: '否定的ニュアンス。', level: 'A1' },
      { ru: 'ско́лько', kana: 'スコーリカ', jp: 'どれほど、いくら (how many/much)', pos: '数量詞', caseGovernance: '+ 生格', category: '疑問詞', exampleRu: 'Ско́лько э́то сто́ит?', exampleJp: 'これはいくらですか？', accentTip: '不可算は単数生格、可算は複数生格。', level: 'A1' }
    ]
  }
];

export const unit2Sets: WordSet[] = rawUnit2Sets.map((raw, idx) =>
  buildWordSet(idx + 21, 2, idx + 1, raw.title, raw.theme, raw.words)
);
