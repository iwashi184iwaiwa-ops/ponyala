import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 7: Sets 121-140 (20 sets × 5 words = 100 authentic words, A1 level)
const rawUnit7Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 121
  {
    title: '牧場の動物と家畜',
    theme: '身近な家畜',
    words: [
      { ru: 'овца́', kana: 'アフツァー', jp: '羊 (ひつじ)', pos: '名詞', gender: '女', pluralForm: 'о́вцы', category: '動物', exampleRu: 'Бе́лая овца́ пасётсь на лугу́.', exampleJp: '白い羊が草原で草を食んでいる。', accentTip: '複数形о́вцы (語幹アクセント)。', level: 'A1' },
      { ru: 'бык', kana: 'ブィーク', jp: '雄牛', pos: '名詞', gender: '男', pluralForm: 'быки́', category: '動物', exampleRu: 'Си́льный бык.', exampleJp: '力強い雄牛。', accentTip: '格変化でアクセント語尾移動(быка́)。', level: 'A1' },
      { ru: 'коза́', kana: 'カザー', jp: 'ヤギ', pos: '名詞', gender: '女', pluralForm: 'ко́зы', category: '動物', exampleRu: 'Коза́ даёт молоко́.', exampleJp: 'ヤギは乳を出す。', accentTip: '複数形ко́зы。', level: 'A1' },
      { ru: 'пету́х', kana: 'ピトゥーフ', jp: '雄鶏 (おんどり)', pos: '名詞', gender: '男', pluralForm: 'петухи́', category: '動物', exampleRu: 'Пету́х поёт на рассве́те.', exampleJp: '雄鶏が夜明けに鳴く。', accentTip: '格変化でアクセント語尾移動(петуха́)。', level: 'A1' },
      { ru: 'гусь', kana: 'グースィ', jp: 'ガチョウ', pos: '名詞', gender: '男', pluralForm: 'гу́си', category: '動物', exampleRu: 'Бе́лый гусь плывёт.', exampleJp: '白いガチョウが泳いでいる。', accentTip: '男性名詞(生格гу́ся, 複数гу́си)。', level: 'A1' },
    ]
  },
  // Set 122
  {
    title: 'ロシアの森の野生動物',
    theme: '森林の哺乳類',
    words: [
      { ru: 'волк', kana: 'ヴォールク', jp: 'オオカミ', pos: '名詞', gender: '男', pluralForm: 'во́лки', category: '動物', exampleRu: 'Се́рый волк живёт в лесу́.', exampleJp: '灰色のオオカミが森に住んでいる。', accentTip: '単音節名詞(複数во́лки)。', level: 'A1' },
      { ru: 'лиса́', kana: 'リサー', jp: 'キツネ', pos: '名詞', gender: '女', pluralForm: 'ли́сы', category: '動物', exampleRu: 'Хи́трая лиса́.', exampleJp: 'ずる賢いキツネ。', accentTip: '複数形ли́сы (語幹移動)。', level: 'A1' },
      { ru: 'медве́дь', kana: 'ミドヴェーチ', jp: 'クマ', pos: '名詞', gender: '男', pluralForm: 'медве́ди', category: '動物', exampleRu: 'Бу́рый медве́дь спит зимо́й.', exampleJp: 'ヒグマは冬眠する。', accentTip: '男性名詞。語末дьは[т’]。', level: 'A1' },
      { ru: 'за́яц', kana: 'ザーヤツ', jp: 'ウサギ', pos: '名詞', gender: '男', pluralForm: 'за́йцы', category: '動物', exampleRu: 'Трусли́вый за́яц бежи́т.', exampleJp: '臆病なウサギが走る。', accentTip: '出没母音я(за́йца, за́йцы)。', level: 'A1' },
      { ru: 'бе́лка', kana: 'ビエールカ', jp: 'リス', pos: '名詞', gender: '女', pluralForm: 'бе́лки', category: '動物', exampleRu: 'Бе́лка пры́гает по деревьям.', exampleJp: 'リスが木々を飛び跳ねている。', accentTip: 'е́にアクセント。', level: 'A1' },
    ]
  },
  // Set 123
  {
    title: '大型動物と草原の猛獣',
    theme: '大型哺乳類',
    words: [
      { ru: 'оле́нь', kana: 'アリエーニ', jp: 'シカ', pos: '名詞', gender: '男', pluralForm: 'оле́ни', category: '動物', exampleRu: 'Се́верный оле́нь.', exampleJp: 'トナカイ（北のシカ）。', accentTip: '男性名詞(生格оле́ня)。', level: 'A1' },
      { ru: 'слон', kana: 'スローン', jp: 'ゾウ', pos: '名詞', gender: '男', pluralForm: 'слоны́', category: '動物', exampleRu: 'Большо́й инди́йский слон.', exampleJp: '大きなインドゾウ。', accentTip: '格変化でアクセント語尾移動(слона́)。', level: 'A1' },
      { ru: 'лев', kana: 'リェーフ', jp: 'ライオン', pos: '名詞', gender: '男', pluralForm: 'львы', category: '動物', exampleRu: 'Лев – царь звере́й.', exampleJp: 'ライオンは百獣の王だ。', accentTip: '出没母音е(льва, львы)。語末вは[ф]。', level: 'A1' },
      { ru: 'тигр', kana: 'チーグル', jp: 'トラ', pos: '名詞', gender: '男', pluralForm: 'ти́гры', category: '動物', exampleRu: 'Аму́рский тигр.', exampleJp: 'アムールトラ。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'верблю́д', kana: 'ヴィルブリュート', jp: 'ラクダ', pos: '名詞', gender: '男', pluralForm: 'верблю́ды', category: '動物', exampleRu: 'Верблю́д идёт по пусты́не.', exampleJp: 'ラクダが砂漠を進む。', accentTip: '語末дは[т]。', level: 'A1' },
    ]
  },
  // Set 124
  {
    title: '海洋生物と海辺の生き物',
    theme: '水生動物',
    words: [
      { ru: 'кит', kana: 'キート', jp: 'クジラ', pos: '名詞', gender: '男', pluralForm: 'киты́', category: '動物', exampleRu: 'Си́ний кит – огро́мное живо́тное.', exampleJp: 'シロナガスクジラは巨大な動物だ。', accentTip: '格変化でアクセント語尾移動(кита́)。', level: 'A1' },
      { ru: 'дельфи́н', kana: 'ジリフィーン', jp: 'イルカ', pos: '名詞', gender: '男', pluralForm: 'дельфи́ны', category: '動物', exampleRu: 'Дельфи́н вы́прыгнул из воды́.', exampleJp: 'イルカが水から飛び跳ねた。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'аку́ла', kana: 'アクーラ', jp: 'サメ', pos: '名詞', gender: '女', pluralForm: 'аку́лы', category: '動物', exampleRu: 'Опа́сная аку́ла.', exampleJp: '危険なサメ。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'тюле́нь', kana: 'チュリエーニ', jp: 'アザラシ', pos: '名詞', gender: '男', pluralForm: 'тюле́ни', category: '動物', exampleRu: 'Байка́льский тюле́нь (не́рпа).', exampleJp: 'バイカルアザラシ。', accentTip: '男性名詞(生格тюле́ня)。', level: 'A1' },
      { ru: 'краб', kana: 'クラープ', jp: 'カニ', pos: '名詞', gender: '男', pluralForm: 'кра́бы', category: '動物', exampleRu: 'Камча́тский краб.', exampleJp: 'タラバガニ（カムチャツカガニ）。', accentTip: '語末бは[п]。', level: 'A1' },
    ]
  },
  // Set 125
  {
    title: '身近な鳥たち',
    theme: '鳥類 (都市と里山)',
    words: [
      { ru: 'го́лубь', kana: 'ゴールビ', jp: 'ハト', pos: '名詞', gender: '男', pluralForm: 'го́луби', category: '動物', exampleRu: 'Го́лубь мира.', exampleJp: '平和の鳩。', accentTip: '男性名詞(生格го́лубя)。', level: 'A1' },
      { ru: 'воро́на', kana: 'ヴァローナ', jp: 'カラス', pos: '名詞', gender: '女', pluralForm: 'воро́ны', category: '動物', exampleRu: 'Чёрная воро́на сиди́т на де́реве.', exampleJp: '黒いカラスが木に止まっている。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'воробе́й', kana: 'ヴァラビエイ', jp: 'スズメ', pos: '名詞', gender: '男', pluralForm: 'воробьи́', category: '動物', exampleRu: 'Ма́ленький воробе́й.', exampleJp: '小さなスズメ。', accentTip: '複数形воробьи́ (ь+и)。', level: 'A1' },
      { ru: 'сова́', kana: 'サヴァー', jp: 'フクロウ', pos: '名詞', gender: '女', pluralForm: 'со́вы', category: '動物', exampleRu: 'Ночна́я пти́ца сова́.', exampleJp: '夜行性の鳥フクロウ。', accentTip: '複数形со́вы (語幹移動)。', level: 'A1' },
      { ru: 'жура́вль', kana: 'ジュラーヴリ', jp: '鶴 (ツル)', pos: '名詞', gender: '男', pluralForm: 'журавли́', category: '動物', exampleRu: 'Бе́лый жура́вль лети́т на юг.', exampleJp: '白鶴が南へ飛んでいく。', accentTip: '男性名詞(複数журавли́)。', level: 'A1' },
    ]
  },
  // Set 126
  {
    title: '渡り鳥・水鳥・猛禽',
    theme: '野鳥の生態',
    words: [
      { ru: 'ла́сточка', kana: 'ラーストチカ', jp: 'ツバメ', pos: '名詞', gender: '女', pluralForm: 'ла́сточки', category: '動物', exampleRu: 'Ла́сточка принесла́ весну́.', exampleJp: 'ツバメが春を連れてきた。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'ле́бедь', kana: 'リェービチ', jp: '白鳥', pos: '名詞', gender: '男', pluralForm: 'ле́беди', category: '動物', exampleRu: 'Бе́лый ле́бедь пла́вает в пруду́.', exampleJp: '白鳥が池を泳いでいる。', accentTip: '男性名詞(生格ле́бедя)。', level: 'A1' },
      { ru: 'орёл', kana: 'アリョール', jp: 'ワシ (鷲)', pos: '名詞', gender: '男', pluralForm: 'орлы́', category: '動物', exampleRu: 'Горный орёл кружи́т в не́бе.', exampleJp: '山のワシが空を旋回している。', accentTip: '出没母音ё(орла́, орлы́)。', level: 'A1' },
      { ru: 'у́тка', kana: 'ウートカ', jp: 'カモ、アヒル', pos: '名詞', gender: '女', pluralForm: 'у́тки', category: '動物', exampleRu: 'Ди́кая у́тка.', exampleJp: '野生のカモ。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'ча́йка', kana: 'チャーイカ', jp: 'カモメ', pos: '名詞', gender: '女', pluralForm: 'ча́йки', category: '動物', exampleRu: 'Ча́йки лета́ют над мо́рем.', exampleJp: 'カモメたちが海の上を飛んでいる。', accentTip: 'а́にアクセント。チェーホフの戯曲名でもある。', level: 'A1' },
    ]
  },
  // Set 127
  {
    title: '昆虫の世界',
    theme: '小さな生き物',
    words: [
      { ru: 'ба́бочка', kana: 'バーバチカ', jp: '蝶 (チョウ)', pos: '名詞', gender: '女', pluralForm: 'ба́бочки', category: '動物', exampleRu: 'Краси́вая ба́бочка села на цвето́к.', exampleJp: '美しい蝶が花に止まった。', accentTip: '最初のа́にアクセント。', level: 'A1' },
      { ru: 'пчела́', kana: 'プチラー', jp: 'ミツバチ', pos: '名詞', gender: '女', pluralForm: 'пчёлы', category: '動物', exampleRu: 'Пчела́ собира́ет мёд.', exampleJp: 'ミツバチが蜂蜜を集める。', accentTip: '複数形пчёлы (ёに移動)。', level: 'A1' },
      { ru: 'му́ха', kana: 'ムーハ', jp: 'ハエ', pos: '名詞', gender: '女', pluralForm: 'му́хи', category: '動物', exampleRu: 'Му́ха лета́ет по ко́мнате.', exampleJp: 'ハエが部屋を飛び回っている。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'кома́р', kana: 'カマール', jp: '蚊 (カ)', pos: '名詞', gender: '男', pluralForm: 'комары́', category: '動物', exampleRu: 'Кома́р укуси́л за ру́ку.', exampleJp: '蚊に腕を刺された。', accentTip: '格変化でアクセント語尾移動(комара́)。', level: 'A1' },
      { ru: 'мураве́й', kana: 'ムラヴィエイ', jp: 'アリ', pos: '名詞', gender: '男', pluralForm: 'муравьи́', category: '動物', exampleRu: 'Трудолюби́вый мураве́й.', exampleJp: '働き者のアリ。', accentTip: '複数形муравьи́。', level: 'A1' },
    ]
  },
  // Set 128
  {
    title: '爬虫類・両生類・小生物',
    theme: '水辺と地面の生き物',
    words: [
      { ru: 'змея́', kana: 'ズミヤー', jp: 'ヘビ', pos: '名詞', gender: '女', pluralForm: 'зме́и', category: '動物', exampleRu: 'Ядови́тая змея́.', exampleJp: '毒ヘビ。', accentTip: '複数形зме́и (語幹移動)。', level: 'A1' },
      { ru: 'лягу́шка', kana: 'リャグーシュカ', jp: 'カエル', pos: '名詞', gender: '女', pluralForm: 'лягу́шки', category: '動物', exampleRu: 'Зелёная лягу́шка ква́кает.', exampleJp: '緑のカエルが鳴いている。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'черепа́ха', kana: 'チリパーハ', jp: 'カメ', pos: '名詞', gender: '女', pluralForm: 'черепа́хи', category: '動物', exampleRu: 'Черепа́ха по́лзает ме́дленно.', exampleJp: 'カメはゆっくり這う。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'пау́к', kana: 'パウーク', jp: 'クモ', pos: '名詞', gender: '男', pluralForm: 'пауки́', category: '動物', exampleRu: 'Пау́к плетёт паути́ну.', exampleJp: 'クモが巣を張っている。', accentTip: '格変化で語尾移動(паука́)。', level: 'A1' },
      { ru: 'ули́тка', kana: 'ウリートカ', jp: 'カタツムリ', pos: '名詞', gender: '女', pluralForm: 'ули́тки', category: '動物', exampleRu: 'Ули́тка по́сле дождя́.', exampleJp: '雨上がりのカタツムリ。', accentTip: 'и́にアクセント。', level: 'A1' },
    ]
  },
  // Set 129
  {
    title: 'ロシアの森の代表的樹木',
    theme: '樹木',
    words: [
      { ru: 'то́поль', kana: 'トーパリ', jp: 'ポプラの木', pos: '名詞', gender: '男', pluralForm: 'тополя́', category: '植物', exampleRu: 'Высо́кий то́поль растёт вдоль доро́ги.', exampleJp: '高いポプラの木が道沿いに生えている。', accentTip: '複数形тополя́ (語尾移動)。男性名詞。', level: 'A1' },
      { ru: 'дуб', kana: 'ドゥープ', jp: 'カシ、ナラ (オーク)', pos: '名詞', gender: '男', pluralForm: 'дубы́', category: '植物', exampleRu: 'Могу́чий дуб стои́т в по́ле.', exampleJp: '雄大な樫の木が野原に立っている。', accentTip: '語末бは[п]。複数дубы́。', level: 'A1' },
      { ru: 'сосна́', kana: 'サスナー', jp: 'マツ (松)', pos: '名詞', gender: '女', pluralForm: 'со́сны', category: '植物', exampleRu: 'Высо́кая сосна́.', exampleJp: '高い松の木。', accentTip: '複数形со́сны (語幹移動)。', level: 'A1' },
      { ru: 'ёлка', kana: 'ヨールカ', jp: 'モミの木、クリスマスツリー', pos: '名詞', gender: '女', pluralForm: 'ёлки', category: '植物', exampleRu: 'Наряжа́ть но́вогоднюю ёлку.', exampleJp: '新年のモミの木を飾る。', accentTip: 'ёにアクセント。', level: 'A1' },
      { ru: 'клён', kana: 'クリョーン', jp: 'カエデ、モミジ', pos: '名詞', gender: '男', pluralForm: 'клёны', category: '植物', exampleRu: 'Осе́нний клён с жёлтыми ли́стьями.', exampleJp: '黄色い葉をつけた秋のカエデ。', accentTip: 'ёにアクセント。', level: 'A1' },
    ]
  },
  // Set 130
  {
    title: '植物と樹木の部位構造',
    theme: '植物器官',
    words: [
      { ru: 'ко́рень', kana: 'コーリニ', jp: '根、根源', pos: '名詞', gender: '男', pluralForm: 'ко́рни', category: '植物', exampleRu: 'Глубо́кие ко́рни.', exampleJp: '深い根。', accentTip: '出没母音е(ко́рня, ко́рни)。', level: 'A1' },
      { ru: 'ветвь', kana: 'ヴィエートフィ', jp: '枝 (えだ)', pos: '名詞', gender: '女', pluralForm: 'ве́тви', category: '植物', exampleRu: 'Зелёная ветвь.', exampleJp: '緑の枝。', accentTip: '女性名詞(生格ве́тви)。', level: 'A1' },
      { ru: 'ствол', kana: 'ストヴォール', jp: '幹 (みき)', pos: '名詞', gender: '男', pluralForm: 'стволы́', category: '植物', exampleRu: 'То́лстый ствол ду́ба.', exampleJp: '太い樫の幹。', accentTip: '格変化でアクセント語尾移動(ствола́)。', level: 'A1' },
      { ru: 'се́мя', kana: 'スィエーミャ', jp: '種 (たね)', pos: '名詞', gender: '中', pluralForm: 'семена́', category: '植物', exampleRu: 'Посади́ть се́мя в зе́млю.', exampleJp: '種を土に植える。', accentTip: '-мя異変化中性名詞(複数семена́)。', level: 'A1' },
      { ru: 'кора́', kana: 'カラー', jp: '樹皮、皮', pos: '名詞', gender: '女', category: '植物', exampleRu: 'Берёзовая кора́ (берёста).', exampleJp: '白樺の樹皮。', accentTip: '語末а́にアクセント。', level: 'A1' },
    ]
  },
  // Set 131
  {
    title: '庭園と公園の草花',
    theme: '観賞花卉',
    words: [
      { ru: 'трава́', kana: 'トラヴァー', jp: '草、芝生', pos: '名詞', gender: '女', pluralForm: 'тра́вы', category: '植物', exampleRu: 'Зелёная трава́ в саду́.', exampleJp: '庭の青い草。', accentTip: '複数形тра́вы (語幹移動)。', level: 'A1' },
      { ru: 'ро́за', kana: 'ローザ', jp: 'バラ (薔薇)', pos: '名詞', gender: '女', pluralForm: 'ро́зы', category: '植物', exampleRu: 'Кра́сная ро́за па́хнет прия́тно.', exampleJp: '赤いバラが良い香りを放っている。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'тюльпа́н', kana: 'チュリパーン', jp: 'チューリップ', pos: '名詞', gender: '男', pluralForm: 'тюльпа́ны', category: '植物', exampleRu: 'Жёлтый тюльпа́н.', exampleJp: '黄色いチューリップ。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'рома́шка', kana: 'ラマーシュカ', jp: 'カモミール、デイジー', pos: '名詞', gender: '女', pluralForm: 'рома́шки', category: '植物', exampleRu: 'Рома́шковый чай.', exampleJp: 'カモミールティー。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'гвозди́ка', kana: 'グヴァズジーカー', jp: 'カーネーション', pos: '名詞', gender: '女', pluralForm: 'гвозди́ки', category: '植物', exampleRu: 'Кра́сные гвозди́ки на пра́здник.', exampleJp: '祝日の赤いカーネーション。', accentTip: 'и́にアクセント。', level: 'A1' },
    ]
  },
  // Set 132
  {
    title: '野草と花壇の花々',
    theme: '季節の植物',
    words: [
      { ru: 'ла́ндыш', kana: 'ラーンドゥィシュ', jp: 'スズラン', pos: '名詞', gender: '男', pluralForm: 'ла́ндыши', category: '植物', exampleRu: 'Весенний ла́ндыш в лесу́.', exampleJp: '森の春のスズラン。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'подсо́лнечник', kana: 'パトソールニチュニク', jp: 'ヒマワリ', pos: '名詞', gender: '男', pluralForm: 'подсо́лнечники', category: '植物', exampleRu: 'По́ле подсо́лнечников.', exampleJp: 'ヒマワリ畑。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'одува́нчик', kana: 'アデュヴァーンチク', jp: 'タンポポ', pos: '名詞', gender: '男', pluralForm: 'одува́нчики', category: '植物', exampleRu: 'Жёлтый одува́нчик на полян́е.', exampleJp: '野原の黄色いタンポポ。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'сире́нь', kana: 'スィリエーニ', jp: 'ライラック', pos: '名詞', gender: '女', category: '植物', exampleRu: 'Ма́йская сире́нь цветёт.', exampleJp: '5月のライラックが咲いている。', accentTip: '女性名詞(生格сире́ни)。', level: 'A1' },
      { ru: 'клу́мба', kana: 'クルームバ', jp: '花壇', pos: '名詞', gender: '女', pluralForm: 'клу́мбы', category: '植物', exampleRu: 'Цветы́ на клу́мбе.', exampleJp: '花壇の花々。', accentTip: 'у́にアクセント。', level: 'A1' },
    ]
  },
  // Set 133
  {
    title: '大気と天候現象',
    theme: '気象と体感',
    words: [
      { ru: 'тума́н', kana: 'トゥマーン', jp: '霧 (きり)', pos: '名詞', gender: '男', pluralForm: 'тума́ны', category: '自然', exampleRu: 'У́тренний тума́н над реко́й.', exampleJp: '川面を覆う朝霧。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'гроза́', kana: 'グラザー', jp: '雷雨、雷嵐', pos: '名詞', gender: '女', pluralForm: 'гро́зы', category: '自然', exampleRu: 'Перед грозо́й ста́ло ду́шно.', exampleJp: '雷雨の前に蒸し暑くなった。', accentTip: '複数形гро́зы (語幹移動)。', level: 'A1' },
      { ru: 'ту́ча', kana: 'トゥーチャ', jp: '雨雲、黒雲', pos: '名詞', gender: '女', pluralForm: 'ту́чи', category: '自然', exampleRu: 'Грозова́я ту́ча закры́ла со́лнце.', exampleJp: '雷雲が太陽を遮った。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'прохла́да', kana: 'プラフローダ', jp: '涼しさ、ひんやりした空気', pos: '名詞', gender: '女', category: '自然', exampleRu: 'Вече́рняя прохла́да.', exampleJp: '夕方の涼しさ。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'смерч', kana: 'スミエールチ', jp: '竜巻、大つむじ風', pos: '名詞', gender: '男', pluralForm: 'сме́рчи', category: '自然', exampleRu: 'Опа́сный смерч над мо́рем.', exampleJp: '洋上の危険な竜巻。', accentTip: '単音節名詞。', level: 'A1' },
    ]
  },
  // Set 134
  {
    title: '激しい気象と荒天',
    theme: '厳しい自然現象',
    words: [
      { ru: 'бу́ря', kana: 'ブーリャ', jp: '嵐、暴風雨', pos: '名詞', gender: '女', pluralForm: 'бу́ри', category: '自然', exampleRu: 'Сне́жная бу́ря (мете́ль).', exampleJp: '吹雪（雪嵐）。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'ли́вень', kana: 'リーヴェニ', jp: '豪雨、どしゃ降り', pos: '名詞', gender: '男', pluralForm: 'ли́вни', category: '自然', exampleRu: 'Начался́ си́льный ли́вень.', exampleJp: '激しい土砂降りが始まった。', accentTip: '出没母音е(ли́вня, ли́вни)。', level: 'A1' },
      { ru: 'град', kana: 'グラート', jp: '雹 (ひょう)、霰', pos: '名詞', gender: '男', category: '自然', exampleRu: 'Пошёл кру́пный град.', exampleJp: '大粒の雹が降ってきた。', accentTip: '単数名詞。', level: 'A1' },
      { ru: 'мо́лния', kana: 'モールニヤ', jp: '稲妻、雷光', pos: '名詞', gender: '女', pluralForm: 'мо́лнии', category: '自然', exampleRu: 'Све́ркнула я́ркая мо́лния.', exampleJp: 'まばゆい稲妻が光った。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'жара́', kana: 'ジャラー', jp: '猛暑、強い暑さ', pos: '名詞', gender: '女', category: '自然', exampleRu: 'Ле́тняя жара́.', exampleJp: '夏の猛暑。', accentTip: '語末а́にアクセント。', level: 'A1' },
    ]
  },
  // Set 135
  {
    title: '天体・夜空・宇宙',
    theme: '星空と天体',
    words: [
      { ru: 'луна́', kana: 'ルナー', jp: '月', pos: '名詞', gender: '女', pluralForm: 'лу́ны', category: '自然', exampleRu: 'По́лная луна́ све́тит я́рко.', exampleJp: '満月が明るく輝いている。', accentTip: '複数形лу́ны (語幹移動)。', level: 'A1' },
      { ru: 'звезда́', kana: 'ズヴィズダー', jp: '星', pos: '名詞', gender: '女', pluralForm: 'звёзды', category: '自然', exampleRu: 'На не́бе мно́го звёзд.', exampleJp: '空にはたくさんの星がある。', accentTip: '複数形звёзды (ёに移動)。', level: 'A1' },
      { ru: 'плане́та', kana: 'プラニエータ', jp: '惑星', pos: '名詞', gender: '女', pluralForm: 'плане́ты', category: '自然', exampleRu: 'Плане́та Земля́.', exampleJp: '地球という惑星。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'коме́та', kana: 'カミエータ', jp: '彗星 (ほうき星)', pos: '名詞', gender: '女', pluralForm: 'коме́ты', category: '自然', exampleRu: 'Я́ркая коме́та пролете́ла.', exampleJp: '明るい彗星が通り過ぎた。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'гала́ктика', kana: 'ガラークチカ', jp: '銀河', pos: '名詞', gender: '女', pluralForm: 'гала́ктики', category: '自然', exampleRu: 'Наша гала́ктика.', exampleJp: '私たちの銀河。', accentTip: 'а́にアクセント。', level: 'A1' },
    ]
  },
  // Set 136
  {
    title: '大地と起伏の景観',
    theme: '地形と陸地',
    words: [
      { ru: 'холм', kana: 'ホールム', jp: '丘 (おおか)', pos: '名詞', gender: '男', pluralForm: 'холмы́', category: '自然', exampleRu: 'Зелёный холм.', exampleJp: '緑の丘。', accentTip: '格変化で語尾移動(холма́, холмы́)。', level: 'A1' },
      { ru: 'доли́на', kana: 'ダリーナ', jp: '谷、渓谷', pos: '名詞', gender: '女', pluralForm: 'доли́ны', category: '自然', exampleRu: 'Живопи́сная доли́на реки́.', exampleJp: '川の絵のような谷間。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'скала́', kana: 'スカラー', jp: '岩、崖 (がけ)', pos: '名詞', gender: '女', pluralForm: 'ска́лы', category: '自然', exampleRu: 'Высо́кая скала́ над мо́рем.', exampleJp: '海の上にそびえる高い岩壁。', accentTip: '複数形ска́лы (語幹移動)。', level: 'A1' },
      { ru: 'пеще́ра', kana: 'ピシェーラ', jp: '洞窟、洞穴', pos: '名詞', gender: '女', pluralForm: 'пеще́ры', category: '自然', exampleRu: 'Тёмная пеще́ра.', exampleJp: '暗い洞窟。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'пляж', kana: 'プリャーシュ', jp: '砂浜、ビーチ', pos: '名詞', gender: '男', pluralForm: 'пля́жи', category: '自然', exampleRu: 'Отдыха́ть на пля́же.', exampleJp: '砂浜で休暇を過ごす。', accentTip: '語末жは[ш]。', level: 'A1' },
    ]
  },
  // Set 137
  {
    title: '海域と沿岸の自然',
    theme: '水域と海洋',
    words: [
      { ru: 'океа́н', kana: 'アキアーン', jp: '大洋、大洋州', pos: '名詞', gender: '男', pluralForm: 'океа́ны', category: '自然', exampleRu: 'Ти́хий океа́н.', exampleJp: '太平洋。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'полуо́стров', kana: 'パルオーストロフ', jp: '半島', pos: '名詞', gender: '男', pluralForm: 'полуострова́', category: '自然', exampleRu: 'Полуо́стров Камча́тка.', exampleJp: 'カムチャツカ半島。', accentTip: '複数形полуострова́ (語尾移動)。', level: 'A1' },
      { ru: 'зали́в', kana: 'ザリーフ', jp: '湾 (わん)', pos: '名詞', gender: '男', pluralForm: 'зали́вы', category: '自然', exampleRu: 'Финский зали́в в Петербу́рге.', exampleJp: 'ペテルブルクのフィンランド湾。', accentTip: 'и́にアクセント。語末вは[ф]。', level: 'A1' },
      { ru: 'водопа́д', kana: 'ヴァダパート', jp: '滝 (たき)', pos: '名詞', gender: '男', pluralForm: 'водопа́ды', category: '自然', exampleRu: 'Краси́вый водопа́д в гора́х.', exampleJp: '山の美しい滝。', accentTip: '語末дは[т]。', level: 'A1' },
      { ru: 'волна́', kana: 'ヴァルナー', jp: '波 (なみ)', pos: '名詞', gender: '女', pluralForm: 'во́лны', category: '自然', exampleRu: 'Морски́е во́лны.', exampleJp: '海の波。', accentTip: '複数形во́лны (語幹移動)。', level: 'A1' },
    ]
  },
  // Set 138
  {
    title: '宇宙空間と探査',
    theme: '宇宙と軌道',
    words: [
      { ru: 'ко́смос', kana: 'コースマス', jp: '宇宙', pos: '名詞', gender: '男', category: '自然', exampleRu: 'Поле́т в ко́смос.', exampleJp: '宇宙飛行。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'Марс', kana: 'マールス', jp: '火星', pos: '名詞', gender: '男', category: '自然', exampleRu: 'Кра́сная плане́та Марс.', exampleJp: '赤い惑星火星。', accentTip: '単音節名詞。', level: 'A1' },
      { ru: 'орби́та', kana: 'アルビータ', jp: '軌道', pos: '名詞', gender: '女', pluralForm: 'орби́ты', category: '自然', exampleRu: 'Косми́ческий кора́бль на орби́те.', exampleJp: '軌道上の宇宙船。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'раке́та', kana: 'ラキエータ', jp: 'ロケット', pos: '名詞', gender: '女', pluralForm: 'раке́ты', category: '科学', exampleRu: 'Запуск раке́ты.', exampleJp: 'ロケットの打ち上げ。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'спу́тник', kana: 'スプートニク', jp: '人工衛星、旅の連れ', pos: '名詞', gender: '男', pluralForm: 'спу́тники', category: '科学', exampleRu: 'Пе́рвый иску́сственный спу́тник Земли́.', exampleJp: '世界初の人工衛星（スプートニク）。', accentTip: 'у́にアクセント。', level: 'A1' },
    ]
  },
  // Set 139
  {
    title: '自然の光景と気配',
    theme: '光と気配',
    words: [
      { ru: 'приро́да', kana: 'プリローダ', jp: '自然', pos: '名詞', gender: '女', category: '自然', exampleRu: 'Бере́чь приро́ду.', exampleJp: '自然を保護する。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'луч', kana: 'ルーチ', jp: '光線、光の筋', pos: '名詞', gender: '男', pluralForm: 'лучи́', category: '自然', exampleRu: 'Луч со́лнца.', exampleJp: '太陽の光線。', accentTip: '格変化で語尾移動(луча́, лучи́)。', level: 'A1' },
      { ru: 'тень', kana: 'チェーニ', jp: '影、日陰', pos: '名詞', gender: '女', pluralForm: 'те́ни', category: '自然', exampleRu: 'Отдыха́ть в тени́ де́рева.', exampleJp: '木陰で休む(в тени́)。', accentTip: '女性名詞。第2前置格в тени́。', level: 'A1' },
      { ru: 'ра́дуга', kana: 'ラードゥガ', jp: '虹 (にじ)', pos: '名詞', gender: '女', pluralForm: 'ра́дуги', category: '自然', exampleRu: 'По́сле дождя́ появи́лась ра́дуга.', exampleJp: '雨のあとに虹が現れた。', accentTip: '最初のа́にアクセント。', level: 'A1' },
      { ru: 'э́хо', kana: 'エーハ', jp: '木霊 (こだま)、山彦、反響', pos: '名詞', gender: '中', category: '自然', exampleRu: 'В гора́х раздаётся э́хо.', exampleJp: '山に木霊が響く。', accentTip: 'э́にアクセント。', level: 'A1' },
    ]
  },
  // Set 140
  {
    title: '気候風土と環境変化',
    theme: '気候と季節感',
    words: [
      { ru: 'кли́мат', kana: 'クリーマト', jp: '気候', pos: '名詞', gender: '男', category: '自然', exampleRu: 'Континента́льный кли́мат.', exampleJp: '大陸性気候。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'сезо́н', kana: 'スィゾーン', jp: 'シーズン、季節', pos: '名詞', gender: '男', pluralForm: 'сезо́ны', category: '自然', exampleRu: 'Куро́ртный сезо́н.', exampleJp: 'リゾートシーズン。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'за́суха', kana: 'ザースハ', jp: '干ばつ、日照り', pos: '名詞', gender: '女', category: '自然', exampleRu: 'Жа́ркая за́суха.', exampleJp: '猛暑の干ばつ。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'о́тепель', kana: 'オーチピリ', jp: '雪解け、雪解けの時節', pos: '名詞', gender: '女', category: '自然', exampleRu: 'Весе́нняя о́тепель.', exampleJp: '春の雪解け時節。', accentTip: 'о́にアクセント。女性名詞。', level: 'A1' },
      { ru: 'све́жесть', kana: 'スヴィエージェスチ', jp: 'すがすがしさ、新鮮さ', pos: '名詞', gender: '女', category: '自然', exampleRu: 'У́тренняя све́жесть.', exampleJp: '朝のすがすがしさ。', accentTip: 'е́にアクセント。女性名詞。', level: 'A1' },
    ]
  }
];

export const unit7Sets: WordSet[] = rawUnit7Sets.map((s, idx) =>
  buildWordSet(121 + idx, 7, idx + 1, s.title, s.theme, s.words)
);
