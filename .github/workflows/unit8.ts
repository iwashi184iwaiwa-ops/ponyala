import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 8: Sets 141-160 (20 sets × 5 words = 100 authentic words, A2 level)
const rawUnit8Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 141
  {
    title: '食肉の種類とひき肉',
    theme: '精肉と主食肉',
    words: [
      { ru: 'говя́дина', kana: 'ガヴャージナ', jp: '牛肉', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Тушёная говя́дина.', exampleJp: '牛肉の煮込み。', accentTip: 'я́にアクセント。', level: 'A2' },
      { ru: 'свини́на', kana: 'スヴィニーナ', jp: '豚肉', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Жа́реная свини́на.', exampleJp: '豚肉のソテー。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'бара́нина', kana: 'バラニーナ', jp: '羊肉、マトン', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Шашлы́к из бара́нины.', exampleJp: '羊肉のシャシリク。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'инде́йка', kana: 'インジェーイカ', jp: '七面鳥 (ターキー)', pos: '名詞', gender: '女', pluralForm: 'инде́йки', category: '飲食', exampleRu: 'Мя́со инде́йки диети́ческое.', exampleJp: '七面鳥の肉はヘルシーだ。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'фарш', kana: 'ファールシュ', jp: 'ひき肉 (ミンチ)', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Мясно́й фарш для пельме́ней.', exampleJp: 'ペリメニ用のひき肉。', accentTip: '単音節名詞。', level: 'A2' },
    ]
  },
  // Set 142
  {
    title: 'ロシアの伝統料理とスープ',
    theme: '伝統家庭料理',
    words: [
      { ru: 'борщ', kana: 'ボールシチ', jp: 'ボルシチ (ビートのスープ)', pos: '名詞', gender: '男', pluralForm: 'борщи́', category: '飲食', exampleRu: 'Горя́чий борщ со смета́ной.', exampleJp: 'サワークリームを添えた熱々のボルシチ。', accentTip: '格変化で語尾移動(борща́)。', level: 'A2' },
      { ru: 'щи', kana: 'シー', jp: 'シチー (キャベツのスープ)', pos: '名詞', gender: '複数', category: '飲食', exampleRu: 'Ру́сские ки́слые щи.', exampleJp: 'ロシアの発酵キャベツスープ（酸っぱいシチー）。', accentTip: '複数専用名詞(生格щей)。', level: 'A2' },
      { ru: 'пельме́ни', kana: 'ピリミエーニ', jp: 'ペリメニ (ロシア風水餃子)', pos: '名詞', gender: '複数', category: '飲食', exampleRu: 'Вари́ть сиби́рские пельме́ни.', exampleJp: 'シベリア風ペリメニを茹でる。', accentTip: '通常複数形(単数пельме́нь, 男)。', level: 'A2' },
      { ru: 'блин', kana: 'ブリーン', jp: 'ブリヌイ (ロシア風クレープ・パンケーキ)', pos: '名詞', gender: '男', pluralForm: 'блины́', category: '飲食', exampleRu: 'Печь блины́ на Ма́сленицу.', exampleJp: 'マースレニツァ（春祭り）にブリヌイを焼く。', accentTip: '格変化で語尾移動(блина́, блины́)。', level: 'A2' },
      { ru: 'соля́нка', kana: 'サリャーンカ', jp: 'ソリャンカ (濃厚な酸味スープ)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Мясна́я сборная соля́нка.', exampleJp: '具だくさんの肉のソリャンカ。', accentTip: 'я́にアクセント。', level: 'A2' },
    ]
  },
  // Set 143
  {
    title: '魚介類と海の幸',
    theme: '水産食材',
    words: [
      { ru: 'лосо́сь', kana: 'ラソースィ', jp: 'サケ (鮭)、サーモン', pos: '名詞', gender: '男', pluralForm: 'лосо́си', category: '飲食', exampleRu: 'Копчёный лосо́сь.', exampleJp: 'スモークサーモン。', accentTip: '男性名詞(生格лосо́ся)。', level: 'A2' },
      { ru: 'сельдь', kana: 'スィエーリチ', jp: 'ニシン (鰊)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Сельдь под шу́бой.', exampleJp: '毛皮を着たニシン（伝統サラダ）。', accentTip: '女性名詞(生格се́льди)。口語селёдка。', level: 'A2' },
      { ru: 'икра́', kana: 'イクラー', jp: '魚卵、イクラ、キャビア', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Кра́сная икра́ на бутербро́де.', exampleJp: 'オープンサンドの上の赤イクラ。', accentTip: '語末а́にアクセント。', level: 'A2' },
      { ru: 'креве́тка', kana: 'クリヴィエートカ', jp: 'エビ (小エビ)', pos: '名詞', gender: '女', pluralForm: 'креве́тки', category: '飲食', exampleRu: 'Варёные креве́тки.', exampleJp: '茹でエビ。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'треска́', kana: 'トリスカール', jp: 'タラ (鱈)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Филе́ трески́.', exampleJp: 'タラの切り身。', accentTip: '語末а́にアクセント。', level: 'A2' },
    ]
  },
  // Set 144
  {
    title: '定番野菜と香味野菜',
    theme: '生鮮野菜',
    words: [
      { ru: 'огуре́ц', kana: 'アグリェーツ', jp: 'キュウリ', pos: '名詞', gender: '男', pluralForm: 'огурцы́', category: '飲食', exampleRu: 'Све́жий огуре́ц.', exampleJp: '新鮮なキュウリ。', accentTip: '出没母音е(огурца́, огурцы́)。', level: 'A2' },
      { ru: 'морко́вь', kana: 'マルコーフィ', jp: 'ニンジン (人参)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Тёртая морко́вь.', exampleJp: 'すりおろしたニンジン。', accentTip: '女性名詞(生格морко́ви)。口語морко́вка。', level: 'A2' },
      { ru: 'капу́ста', kana: 'カプースタ', jp: 'キャベツ', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Ква́шеная капу́ста.', exampleJp: 'ザワークラウト（発酵キャベツ）。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'свёкла', kana: 'スヴョークラ', jp: 'ビート (甜菜・赤カブ)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Варёная свёкла для борща́.', exampleJp: 'ボルシチ用の茹でビート。', accentTip: 'ёにアクセント。', level: 'A2' },
      { ru: 'чесно́к', kana: 'チスノーク', jp: 'ニンニク', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Зу́бчик чеснока́.', exampleJp: 'ニンニクひとかけ。', accentTip: '出没母音о(чеснока́)。', level: 'A2' },
    ]
  },
  // Set 145
  {
    title: '豆類・穀物・粉',
    theme: '穀類と主原料',
    words: [
      { ru: 'фасо́ль', kana: 'ファソーリ', jp: 'インゲン豆', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Бе́лая фасо́ль в су́пе.', exampleJp: 'スープの中の白いインゲン豆。', accentTip: '女性名詞(生格фасо́ли)。', level: 'A2' },
      { ru: 'кукуру́за', kana: 'ククルーザ', jp: 'トウモロコシ', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Сла́дкая кукуру́за.', exampleJp: '甘いトウモロコシ。', accentTip: '2番目のу́にアクセント。', level: 'A2' },
      { ru: 'горо́х', kana: 'ガローホ', jp: 'エンドウ豆', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Горо́ховый суп.', exampleJp: '豆のスープ。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'гре́чка', kana: 'グリェーチカ', jp: 'ソバの実 (カーシャの主原料)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Гре́чневая ка́ша с ма́слом.', exampleJp: 'バターを添えたソバ粥（カーシャ）。', accentTip: 'е́にアクセント。ロシアの国民食。', level: 'A2' },
      { ru: 'мука́', kana: 'ムカー', jp: '小麦粉、粉', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Пшени́чная мука́ для пирога́.', exampleJp: 'パイ用の小麦粉。', accentTip: '語末а́にアクセント(му́каは苦痛)。', level: 'A2' },
    ]
  },
  // Set 146
  {
    title: '果物・フルーツ',
    theme: '果実',
    words: [
      { ru: 'бана́н', kana: 'バナーン', jp: 'バナナ', pos: '名詞', gender: '男', pluralForm: 'бана́ны', category: '飲食', exampleRu: 'Спе́лый бана́н.', exampleJp: '熟したバナナ。', accentTip: '2番目のа́にアクセント。', level: 'A2' },
      { ru: 'апельси́н', kana: 'アピリシーン', jp: 'オレンジ', pos: '名詞', gender: '男', pluralForm: 'апельси́ны', category: '飲食', exampleRu: 'Апельси́новый сок.', exampleJp: 'オレンジジュース。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'лимо́н', kana: 'リモーン', jp: 'レモン', pos: '名詞', gender: '男', pluralForm: 'лимо́ны', category: '飲食', exampleRu: 'Чай с лимо́ном.', exampleJp: 'レモンティー。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'гру́ша', kana: 'グルーシャ', jp: '洋ナシ (西洋梨)', pos: '名詞', gender: '女', pluralForm: 'гру́ши', category: '飲食', exampleRu: 'Со́чная гру́ша.', exampleJp: 'みずみずしい洋ナシ。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'пе́рсик', kana: 'ピエールスィク', jp: 'モモ (桃)', pos: '名詞', gender: '男', pluralForm: 'пе́рсики', category: '飲食', exampleRu: 'Сла́дкий пе́рсик.', exampleJp: '甘い桃。', accentTip: 'е́にアクセント。', level: 'A2' },
    ]
  },
  // Set 147
  {
    title: 'ベリー類と甘味果実',
    theme: '夏の果物・ウリ類',
    words: [
      { ru: 'ви́шня', kana: 'ヴィーシュニャ', jp: 'サクランボ、チェリー', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Варе́нье из ви́шни.', exampleJp: 'サクランボのジャム。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'клубни́ка', kana: 'クルブニーカ', jp: 'イチゴ', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Све́жая клубни́ка со сли́вками.', exampleJp: 'クリームをかけた生のイチゴ。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'виногра́д', kana: 'ヴィナグラート', jp: 'ブドウ', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Гроздь виногра́да.', exampleJp: 'ブドウの房。', accentTip: '集合名詞。語末дは[т]。', level: 'A2' },
      { ru: 'арбу́з', kana: 'アルブース', jp: 'スイカ', pos: '名詞', gender: '男', pluralForm: 'арбу́зы', category: '飲食', exampleRu: 'Большо́й спе́лый арбу́з.', exampleJp: '大きくて熟したスイカ。', accentTip: '語末зは[с]。', level: 'A2' },
      { ru: 'ды́ня', kana: 'ドゥィーニャ', jp: 'メロン', pos: '名詞', gender: '女', pluralForm: 'ды́ни', category: '飲食', exampleRu: 'Арома́тная ды́ня.', exampleJp: '香りのよいメロン。', accentTip: 'ы́にアクセント。', level: 'A2' },
    ]
  },
  // Set 148
  {
    title: '乳製品と朝食食材',
    theme: '発酵乳・卵',
    words: [
      { ru: 'творо́г', kana: 'トヴァローク', jp: 'カッテージチーズ、トヴォロク', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Творо́г со смета́ной на за́втрак.', exampleJp: '朝食にサワークリーム添えのトヴォロク。', accentTip: 'творо́г または тво́рог。', level: 'A2' },
      { ru: 'смета́на', kana: 'スミターナ', jp: 'サワークリーム (スメタナ)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Ло́жка смета́ны в борщ.', exampleJp: 'ボルシチにサワークリームひとさじ。', accentTip: 'а́にアクセント。ロシア料理の必需品。', level: 'A2' },
      { ru: 'йо́гурт', kana: 'ヨーグルト', jp: 'ヨーグルト', pos: '名詞', gender: '男', pluralForm: 'йо́гурты', category: '飲食', exampleRu: 'Фрукто́вый йо́гурт.', exampleJp: 'フルーツヨーグルト。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'кефи́р', kana: 'キフィール', jp: 'ケフィール (発酵乳飲料)', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Пить кефи́р пе́ред сном.', exampleJp: '寝る前にケフィールを飲む。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'яйцо́', kana: 'ヤイツォー', jp: '卵 (たまご)', pos: '名詞', gender: '中', pluralForm: 'я́йца', category: '飲食', exampleRu: 'Варёное яйцо́.', exampleJp: 'ゆで卵。', accentTip: '複数形я́йца (語幹移動)。', level: 'A2' },
    ]
  },
  // Set 149
  {
    title: '調味料と基礎味覚',
    theme: '調味料・オイル',
    words: [
      { ru: 'са́хар', kana: 'サーハル', jp: '砂糖', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Чай без са́хара.', exampleJp: '砂糖抜きの紅茶。', accentTip: 'а́にアクセント。第2生格са́хару。', level: 'A2' },
      { ru: 'соль', kana: 'ソーリ', jp: '塩 (しお)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Переда́йте соль, пожа́луйста.', exampleJp: 'お塩を取ってください。', accentTip: '女性名詞(生格со́ли)。', level: 'A2' },
      { ru: 'пе́рец', kana: 'ピエールリェツ', jp: 'コショウ、唐辛子、ピーマン', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Чёрный пе́рец.', exampleJp: '黒コショウ。', accentTip: '出没母音е(пе́рца)。', level: 'A2' },
      { ru: 'у́ксус', kana: 'ウークスス', jp: '酢 (おす)', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Я́блочный у́ксус.', exampleJp: 'リンゴ酢。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'со́ус', kana: 'ソーウス', jp: 'ソース、タレ', pos: '名詞', gender: '男', pluralForm: 'со́усы', category: '飲食', exampleRu: 'Тома́тный со́ус.', exampleJp: 'トマトソース。', accentTip: 'о́にアクセント。', level: 'A2' },
    ]
  },
  // Set 150
  {
    title: '菓子・スイーツ・おやつ',
    theme: 'デザート・甘味',
    words: [
      { ru: 'торт', kana: 'トールト', jp: 'ケーキ、タルト (ホールケーキ)', pos: '名詞', gender: '男', pluralForm: 'то́рты', category: '飲食', exampleRu: 'Имени́нный торт со све́чами.', exampleJp: 'ろうそくを立てた誕生日のケーキ。', accentTip: '複数形は語幹アクセント(то́рты)。', level: 'A2' },
      { ru: 'пиро́г', kana: 'ピローク', jp: 'パイ、大ピロシキ', pos: '名詞', gender: '男', pluralForm: 'пироги́', category: '飲食', exampleRu: 'Пиро́г с я́блоками.', exampleJp: 'アップルパイ。', accentTip: '格変化で語尾移動(пирога́)。語末гは[к]。', level: 'A2' },
      { ru: 'пече́нье', kana: 'ピチェーンイェ', jp: 'クッキー、ビスケット', pos: '名詞', gender: '中', category: '飲食', exampleRu: 'Овся́ное пече́нье к ча́ю.', exampleJp: 'お茶請けのオートミールクッキー。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'конфе́та', kana: 'カンフィエータ', jp: 'キャンディ、一口菓子、チョコ', pos: '名詞', gender: '女', pluralForm: 'конфе́ты', category: '飲食', exampleRu: 'Шокола́дная конфе́та.', exampleJp: '一口チョコレート菓子。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'шокола́д', kana: 'シャカラート', jp: 'チョコレート', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Пли́тка тёмного шокола́да.', exampleJp: '板チョコ（ビター）。', accentTip: '語末дは[т]。', level: 'A2' },
    ]
  },
  // Set 151
  {
    title: 'ロシアのソフトドリンク',
    theme: '清涼飲料・伝統ドリンク',
    words: [
      { ru: 'квас', kana: 'クヴァース', jp: 'クワス (ライ麦発酵微炭酸飲料)', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Холо́дный хле́бный квас.', exampleJp: '冷たいパンのクワス。', accentTip: 'ロシア特有の伝統清涼飲料。', level: 'A2' },
      { ru: 'минера́лка', kana: 'ミニラールカ', jp: 'ミネラルウォーター (口語)', pos: '名詞', gender: '女', category: '飲食', exampleRu: 'Газиро́ванная минера́лка.', exampleJp: '炭酸入りミネラルウォーター。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'морс', kana: 'モールス', jp: 'モルス (ベリー果汁飲料)', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Клю́квенный морс.', exampleJp: 'クランベリーのモルス。', accentTip: 'ロシアの伝統的なベリージュース。', level: 'A2' },
      { ru: 'компо́т', kana: 'カンポート', jp: 'コンポート (煮出し果汁飲料)', pos: '名詞', gender: '男', category: '飲食', exampleRu: 'Компо́т из сухофру́ктов.', exampleJp: 'ドライフルーツのコンポート。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'напи́ток', kana: 'ナピータク', jp: '飲み物、ドリンク', pos: '名詞', gender: '男', pluralForm: 'напи́тки', category: '飲食', exampleRu: 'Безалкого́льный напи́ток.', exampleJp: 'ノンアルコール飲料。', accentTip: '出没母音о(напи́тка, напи́тки)。', level: 'A2' },
    ]
  },
  // Set 152
  {
    title: '酒器・器・乾杯の席',
    theme: '宴席用具',
    words: [
      { ru: 'бока́л', kana: 'バカール', jp: 'ワイングラス、脚付き杯', pos: '名詞', gender: '男', pluralForm: 'бока́лы', category: '飲食', exampleRu: 'Бока́л кра́сного вина́.', exampleJp: '赤ワインのグラス。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'рю́мка', kana: 'リュームカ', jp: 'ショットグラス、小杯 (ウォッカ用)', pos: '名詞', gender: '女', pluralForm: 'рю́мки', category: '飲食', exampleRu: 'Рю́мка во́дки.', exampleJp: 'ウォッカのショットグラス。', accentTip: 'ю́にアクセント。', level: 'A2' },
      { ru: 'кувши́н', kana: 'クフシーン', jp: '水差し、ピッチャー', pos: '名詞', gender: '男', pluralForm: 'кувши́ны', category: '飲食', exampleRu: 'Кувши́н с молоко́м.', exampleJp: 'ミルクのピッチャー。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'блю́до', kana: 'ブリューダ', jp: '大皿、一皿の料理', pos: '名詞', gender: '中', pluralForm: 'блю́да', category: '飲食', exampleRu: 'Фи́рменное блю́до рестора́на.', exampleJp: 'レストランの名物料理。', accentTip: 'ю́にアクセント。', level: 'A2' },
      { ru: 'серви́з', kana: 'スィルヴィース', jp: '食器セット (一揃い)', pos: '名詞', gender: '男', pluralForm: 'серви́зы', category: '飲食', exampleRu: 'Ча́йный серви́з.', exampleJp: 'ティーセット。', accentTip: 'и́にアクセント。語末зは[с]。', level: 'A2' },
    ]
  },
  // Set 153
  {
    title: '食卓の食器と小物',
    theme: 'テーブルウェア',
    words: [
      { ru: 'таре́лка', kana: 'タリエールカ', jp: '皿 (平皿・深皿)', pos: '名詞', gender: '女', pluralForm: 'таре́лки', category: '飲食', exampleRu: 'Глубо́кая таре́лка для су́па.', exampleJp: 'スープ用の深皿。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'блю́дце', kana: 'ブリュードツェ', jp: 'ソーサー、受け皿、小皿', pos: '名詞', gender: '中', pluralForm: 'блю́дца', category: '飲食', exampleRu: 'Ча́шка на блю́дце.', exampleJp: '受け皿の上のカップ。', accentTip: 'дは発音されない[bl’útsə]。', level: 'A2' },
      { ru: 'стака́н', kana: 'スタカーン', jp: 'コップ、グラス (ガラス製)', pos: '名詞', gender: '男', pluralForm: 'стака́ны', category: '飲食', exampleRu: 'Стака́н воды́.', exampleJp: '一杯の水。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'кру́жка', kana: 'クルージュカ', jp: 'マグカップ、ジョッキ', pos: '名詞', gender: '女', pluralForm: 'кру́жки', category: '飲食', exampleRu: 'Больша́я кру́жка пи́ва.', exampleJp: '大きなビールジョッキ。', accentTip: 'жは無声化[ш]。', level: 'A2' },
      { ru: 'са́харница', kana: 'サーハルニツァ', jp: '砂糖入れ、シュガーポット', pos: '名詞', gender: '女', pluralForm: 'са́харницы', category: '飲食', exampleRu: 'Фарфо́ровая са́харница.', exampleJp: '陶器の砂糖入れ。', accentTip: 'а́にアクセント。', level: 'A2' },
    ]
  },
  // Set 154
  {
    title: '調理器具とカトラリー',
    theme: 'キッチンツール',
    words: [
      { ru: 'ви́лка', kana: 'ヴィールカ', jp: 'フォーク', pos: '名詞', gender: '女', pluralForm: 'ви́лки', category: '飲食', exampleRu: 'Нож и ви́лка.', exampleJp: 'ナイフとフォーク。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'ло́жка', kana: 'ロージュカ', jp: 'スプーン', pos: '名詞', gender: '女', pluralForm: 'ло́жки', category: '飲食', exampleRu: 'Столо́вая ло́жка.', exampleJp: 'テーブルスプーン（大さじ）。', accentTip: 'жは無声化[ш]。', level: 'A2' },
      { ru: 'нож', kana: 'ノージ', jp: 'ナイフ、包丁', pos: '名詞', gender: '男', pluralForm: 'ножи́', category: '飲食', exampleRu: 'О́стрый нож ре́жет мя́со.', exampleJp: 'よく切れるナイフが肉を切る。', accentTip: '格変化で語尾移動(ножа́, ножи́)。', level: 'A2' },
      { ru: 'кастрю́ля', kana: 'カストリューリャ', jp: '鍋 (深鍋・両手鍋)', pos: '名詞', gender: '女', pluralForm: 'кастрю́ли', category: '飲食', exampleRu: 'Вари́ть суп в кастрю́ле.', exampleJp: '鍋でスープを煮る。', accentTip: 'ю́にアクセント。', level: 'A2' },
      { ru: 'сковорода́', kana: 'スカヴァラダー', jp: 'フライパン', pos: '名詞', gender: '女', pluralForm: 'ско́вороды', category: '飲食', exampleRu: 'Жа́рить на сковороде́.', exampleJp: 'フライパンで炒める。', accentTip: '対格ско́вороду (頭移動)。', level: 'A2' },
    ]
  },
  // Set 155
  {
    title: '外食とレストランでのやり取り',
    theme: '飲食店での対話',
    words: [
      { ru: 'меню́', kana: 'ミニュー', jp: 'メニュー、献立表', pos: '名詞', gender: '中', category: '飲食', exampleRu: 'Покажи́те меню́, пожа́луйста.', exampleJp: 'メニューを見せてください。', accentTip: '不変化名詞。', level: 'A2' },
      { ru: 'официа́нт', kana: 'アフィツィアーント', jp: 'ウェイター、給仕', pos: '名詞', gender: '男', pluralForm: 'официа́нты', category: '飲食', exampleRu: 'Официа́нт принёс счёт.', exampleJp: 'ウェイターがお会計を持ってきた。', accentTip: '女性形официа́нтка。', level: 'A2' },
      { ru: 'зака́з', kana: 'ザカース', jp: '注文、オーダー', pos: '名詞', gender: '男', pluralForm: 'зака́зы', category: '飲食', exampleRu: 'Приня́ть зака́з.', exampleJp: '注文を取る。', accentTip: '語末зは[с]。', level: 'A2' },
      { ru: 'счёт', kana: 'ショード', jp: 'お勘定、請求書、計算', pos: '名詞', gender: '男', pluralForm: 'счета́', category: '飲食', exampleRu: 'Счёт, пожа́луйста!', exampleJp: 'お会計をお願いします！', accentTip: '複数形счета́ (語尾移動)。', level: 'A2' },
      { ru: 'чаевы́е', kana: 'チャイヴィーイェ', jp: 'チップ (お茶代)', pos: '名詞', gender: '複数', category: '飲食', exampleRu: 'Оста́вить чаевы́е.', exampleJp: 'チップを置く。', accentTip: '複数形容詞変化名詞(на чайから)。', level: 'A2' },
    ]
  },
  // Set 156
  {
    title: '防寒着とアウター',
    theme: '外出着・コート',
    words: [
      { ru: 'плащ', kana: 'プラーシシ', jp: 'レインコート、薄手の上着', pos: '名詞', gender: '男', pluralForm: 'плащи́', category: '服飾', exampleRu: 'Наде́ть плащ от дождя́.', exampleJp: '雨除けにレインコートを着る。', accentTip: '格変化で語尾移動(плаща́, плащи́)。', level: 'A2' },
      { ru: 'пиджа́к', kana: 'ピジャーク', jp: 'ジャケット、背広の上着', pos: '名詞', gender: '男', pluralForm: 'пиджаки́', category: '服飾', exampleRu: 'Чёрный пиджа́к.', exampleJp: '黒いジャケット。', accentTip: '格変化で語尾移動(пиджака́)。', level: 'A2' },
      { ru: 'ку́ртка', kana: 'クールトカ', jp: 'ジャンパー、ショート丈ジャケット', pos: '名詞', gender: '女', pluralForm: 'ку́ртки', category: '服飾', exampleRu: 'Зи́мняя ку́ртка с капюшо́ном.', exampleJp: 'フード付きの冬用ジャンパー。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'шу́ба', kana: 'シューバ', jp: '毛皮のコート', pos: '名詞', gender: '女', pluralForm: 'шу́бы', category: '服飾', exampleRu: 'Тёплая но́рковая шу́ба.', exampleJp: '温かいミンクの毛皮コート。', accentTip: 'у́にアクセント。ロシアの冬の定番。', level: 'A2' },
      { ru: 'хала́т', kana: 'ハラート', jp: 'ガウン、バスローブ、白衣', pos: '名詞', gender: '男', pluralForm: 'хала́ты', category: '服飾', exampleRu: 'Махро́вый хала́т.', exampleJp: 'タオル地のバスローブ。', accentTip: 'а́にアクセント。', level: 'A2' },
    ]
  },
  // Set 157
  {
    title: '日常の衣料とスカート',
    theme: '日常服',
    words: [
      { ru: 'ю́бка', kana: 'ユーブカ', jp: 'スカート', pos: '名詞', gender: '女', pluralForm: 'ю́бки', category: '服飾', exampleRu: 'Дли́нная ю́бка.', exampleJp: '長いスカート。', accentTip: 'ю́にアクセント。бは無声化[п]。', level: 'A2' },
      { ru: 'блу́зка', kana: 'ブルーズカ', jp: 'ブラウス', pos: '名詞', gender: '女', pluralForm: 'блу́зки', category: '服飾', exampleRu: 'Бе́лая шёлковая блу́зка.', exampleJp: '白い絹のブラウス。', accentTip: 'у́にアクセント。зは無声化[с]。', level: 'A2' },
      { ru: 'сви́тер', kana: 'スヴィーチェル', jp: 'セーター', pos: '名詞', gender: '男', pluralForm: 'свитера́', category: '服飾', exampleRu: 'Шерстяно́й тёплый сви́тер.', exampleJp: '毛糸の温かいセーター。', accentTip: '複数形свитера́ (語尾移動)。', level: 'A2' },
      { ru: 'футбо́лка', kana: 'フドボールカ', jp: 'Tシャツ', pos: '名詞', gender: '女', pluralForm: 'футбо́лки', category: '服飾', exampleRu: 'Хло́пковая футбо́лка.', exampleJp: 'コットンのTシャツ。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'бельё', kana: 'ビリエー', jp: '下着、リネン類', pos: '名詞', gender: '中', category: '服飾', exampleRu: 'Ни́жнее бельё.', exampleJp: 'アンダーウェア（肌着）。', accentTip: 'ёにアクセント。', level: 'A2' },
    ]
  },
  // Set 158
  {
    title: '防寒具・手袋・マフラー',
    theme: '防寒アクセサリー',
    words: [
      { ru: 'шарф', kana: 'シャールフ', jp: 'マフラー、スカーフ', pos: '名詞', gender: '男', pluralForm: 'шарфы́', category: '服飾', exampleRu: 'Тёплый шарф вокру́г ше́и.', exampleJp: '首のまわりの温かいマフラー。', accentTip: '複数形шарфы́ (またはша́рфы)。', level: 'A2' },
      { ru: 'перча́тки', kana: 'ピルチャートキ', jp: '手袋 (5本指)', pos: '名詞', gender: '複数', pluralForm: 'перча́тки', category: '服飾', exampleRu: 'Ко́жаные перча́тки.', exampleJp: '革の手袋。', accentTip: '通常複数形(単数перча́тка)。', level: 'A2' },
      { ru: 'ва́режки', kana: 'ヴァーリシュキ', jp: 'ミトン、二股手袋', pos: '名詞', gender: '複数', pluralForm: 'ва́режки', category: '服飾', exampleRu: 'Вя́заные ва́режки гре́ют ру́ки.', exampleJp: '手編みのミトンが手を温める。', accentTip: '通常複数形(単数ва́режка)。', level: 'A2' },
      { ru: 'плато́к', kana: 'プラトーク', jp: 'スカーフ、ショール、ハンカチ', pos: '名詞', gender: '男', pluralForm: 'платки́', category: '服飾', exampleRu: 'Павловопоса́дский плато́к.', exampleJp: 'パブロボポサドのロシア伝統ショール。', accentTip: '出没母音о(платка́, платки́)。', level: 'A2' },
      { ru: 'ке́пка', kana: 'キエープカ', jp: 'キャップ帽、鳥打帽子', pos: '名詞', gender: '女', pluralForm: 'ке́пки', category: '服飾', exampleRu: 'Спорти́вная ке́пка.', exampleJp: 'スポーツキャップ。', accentTip: 'е́にアクセント。', level: 'A2' },
    ]
  },
  // Set 159
  {
    title: '履物・ブーツ・室内履き',
    theme: '靴・フットウェア',
    words: [
      { ru: 'сапоги́', kana: 'サパギー', jp: '長靴、ブーツ', pos: '名詞', gender: '複数', pluralForm: 'сапоги́', category: '服飾', exampleRu: 'Зи́мние сапоги́ на меху́.', exampleJp: '毛皮裏地の冬用ブーツ。', accentTip: '単数сапо́г(生格сапога́)。', level: 'A2' },
      { ru: 'боти́нки', kana: 'バチェーンキ', jp: '編み上げ靴、ショートブーツ', pos: '名詞', gender: '複数', pluralForm: 'боти́нки', category: '服飾', exampleRu: 'Осе́нние боти́нки.', exampleJp: '秋用のショートブーツ。', accentTip: '単数боти́нок(男)。', level: 'A2' },
      { ru: 'кроссо́вки', kana: 'クラッソーフキ', jp: 'スニーカー、運動靴', pos: '名詞', gender: '複数', pluralForm: 'кроссо́вки', category: '服飾', exampleRu: 'Бе́лые кроссо́вки для бе́га.', exampleJp: 'ランニング用の白いスニーカー。', accentTip: '通常複数形(単数кроссо́вок, 男)。', level: 'A2' },
      { ru: 'та́почки', kana: 'ターパチキ', jp: 'スリッパ、室内履き', pos: '名詞', gender: '複数', pluralForm: 'та́почки', category: '服飾', exampleRu: 'Дома́шние та́почки.', exampleJp: 'ルームスリッパ。', accentTip: 'ロシア家庭では玄関で履き替える習慣。', level: 'A2' },
      { ru: 'носки́', kana: 'ナスキー', jp: '靴下 (くつした)', pos: '名詞', gender: '複数', pluralForm: 'носки́', category: '服飾', exampleRu: 'Па́ра тёплых носко́в.', exampleJp: '温かい靴下1足。', accentTip: '単数носо́к(男, 生格носка́)。複数生格носко́в。', level: 'A2' },
    ]
  },
  // Set 160
  {
    title: '装飾品と持ち歩き小物',
    theme: 'アクセサリー',
    words: [
      { ru: 'га́лстук', kana: 'ガールストゥク', jp: 'ネクタイ', pos: '名詞', gender: '男', pluralForm: 'га́лстуки', category: '服飾', exampleRu: 'Завяза́ть га́лстук.', exampleJp: 'ネクタイを結ぶ。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'кольцо́', kana: 'カリツォー', jp: '指輪、リング', pos: '名詞', gender: '中', pluralForm: 'ко́льца', category: '服飾', exampleRu: 'Золото́е кольцо́.', exampleJp: '金の指輪。', accentTip: '複数形ко́льца (語幹移動)。', level: 'A2' },
      { ru: 'се́рьги', kana: 'スィエルギー', jp: 'イヤリング、ピアス', pos: '名詞', gender: '複数', pluralForm: 'се́рьги', category: '服飾', exampleRu: 'Сере́бряные се́рьги.', exampleJp: '銀のイヤリング。', accentTip: '単数серьга́ (複数се́рьги)。', level: 'A2' },
      { ru: 'бума́жник', kana: 'ブマージニク', jp: '札入れ、財布', pos: '名詞', gender: '男', pluralForm: 'бума́жники', category: '日用品', exampleRu: 'Ко́жаный бума́жник.', exampleJp: '革の札入れ。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'брасле́т', kana: 'ブラスリェート', jp: 'ブレスレット、腕輪', pos: '名詞', gender: '男', pluralForm: 'брасле́ты', category: '服飾', exampleRu: 'Краси́вый брасле́т на руке́.', exampleJp: '腕の美しいブレスレット。', accentTip: 'е́にアクセント。', level: 'A2' },
    ]
  }
];

export const unit8Sets: WordSet[] = rawUnit8Sets.map((s, idx) =>
  buildWordSet(141 + idx, 8, idx + 1, s.title, s.theme, s.words)
);
