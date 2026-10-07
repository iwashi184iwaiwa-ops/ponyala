import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 6: Sets 101-120 (20 sets × 5 words = 100 authentic words, A1 level)
const rawUnit6Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 101
  {
    title: '頭部と顔の構造',
    theme: '身体部位 (顔面)',
    words: [
      { ru: 'голова́', kana: 'ガラヴァー', jp: '頭', pos: '名詞', gender: '女', pluralForm: 'го́ловы', category: '身体', exampleRu: 'У меня́ боли́т голова́.', exampleJp: '私は頭が痛い。', accentTip: '対格はго́лову (頭移動)、複数形го́ловы。', level: 'A1' },
      { ru: 'лицо́', kana: 'リツォー', jp: '顔', pos: '名詞', gender: '中', pluralForm: 'ли́ца', category: '身体', exampleRu: 'У неё краси́вое лицо́.', exampleJp: '彼女は美しい顔をしている。', accentTip: '複数形は語幹に移動(ли́ца)。', level: 'A1' },
      { ru: 'во́лосы', kana: 'ヴォーラスィ', jp: '髪、頭髪', pos: '名詞', gender: '複数', pluralForm: 'во́лосы', category: '身体', exampleRu: 'У него́ тёмные во́лосы.', exampleJp: '彼は黒い髪をしている。', accentTip: '単数形во́лос、通常複数形で用いる。', level: 'A1' },
      { ru: 'глаз', kana: 'グラース', jp: '目', pos: '名詞', gender: '男', pluralForm: 'глаза́', category: '身体', exampleRu: 'У неё голубы́е глаза́.', exampleJp: '彼女は青い目をしている。', accentTip: '複数形は主格-а́(глаза́)。語末зは[с]。', level: 'A1' },
      { ru: 'нос', kana: 'ノース', jp: '鼻', pos: '名詞', gender: '男', pluralForm: 'носы́', category: '身体', exampleRu: 'На моро́зе нос покрасне́л.', exampleJp: '寒さで鼻が赤くなった。', accentTip: '単音節名詞。前置格はна носу́。', level: 'A1' },
    ]
  },
  // Set 102
  {
    title: '口・歯・首の部位',
    theme: '身体部位 (口元・首)',
    words: [
      { ru: 'рот', kana: 'ロート', jp: '口', pos: '名詞', gender: '男', pluralForm: 'рты', category: '身体', exampleRu: 'Откро́йте рот, пожа́луйста.', exampleJp: '口を開けてください。', accentTip: '出没母音о(рта, во рту)。', level: 'A1' },
      { ru: 'зуб', kana: 'ズープ', jp: '歯', pos: '名詞', gender: '男', pluralForm: 'зу́бы', category: '身体', exampleRu: 'Я чи́щу зу́бы ка́ждое у́тро.', exampleJp: '私は毎朝歯を磨きます。', accentTip: '語末бは無声化[п]。', level: 'A1' },
      { ru: 'губа́', kana: 'グバー', jp: '唇', pos: '名詞', gender: '女', pluralForm: 'гу́бы', category: '身体', exampleRu: 'Кра́сные гу́бы.', exampleJp: '赤い唇。', accentTip: '複数形はгу́бы (語幹アクセント)。', level: 'A1' },
      { ru: 'у́хо', kana: 'ウーハ', jp: '耳', pos: '名詞', gender: '中', pluralForm: 'у́ши', category: '身体', exampleRu: 'У меня́ боли́т пра́вое у́хо.', exampleJp: '右耳が痛いです。', accentTip: '複数形は不規則у́ши(生格уше́й)。', level: 'A1' },
      { ru: 'ше́я', kana: 'シェーヤ', jp: '首', pos: '名詞', gender: '女', pluralForm: 'ше́и', category: '身体', exampleRu: 'Она́ на́дела шарф на ше́ю.', exampleJp: '彼女は首にマフラーを巻いた。', accentTip: 'е́にアクセント。', level: 'A1' },
    ]
  },
  // Set 103
  {
    title: '手足と体幹の部位',
    theme: '身体部位 (手足・背中)',
    words: [
      { ru: 'нога́', kana: 'ナガー', jp: '足、脚', pos: '名詞', gender: '女', pluralForm: 'но́ги', category: '身体', exampleRu: 'Я уста́л, но́ги боля́т.', exampleJp: '疲れて足が痛みます。', accentTip: '対格но́гу、複数形но́ги (語幹アクセント)。', level: 'A1' },
      { ru: 'спина́', kana: 'スピナー', jp: '背中', pos: '名詞', gender: '女', pluralForm: 'спи́ны', category: '身体', exampleRu: 'Пряма́я спина́.', exampleJp: 'まっすぐな背中。', accentTip: '対格спи́ну、複数形спи́ны。', level: 'A1' },
      { ru: 'плечо́', kana: 'プリチョー', jp: '肩', pos: '名詞', gender: '中', pluralForm: 'пле́чи', category: '身体', exampleRu: 'Сумка виси́т на плече́.', exampleJp: 'バッグが肩にかかっている。', accentTip: '複数形пле́чи。', level: 'A1' },
      { ru: 'па́лец', kana: 'パーリェツ', jp: '指', pos: '名詞', gender: '男', pluralForm: 'па́льцы', category: '身体', exampleRu: 'Па́льцы рук.', exampleJp: '手の指。', accentTip: '出没母音е(па́льца, па́льцы)。', level: 'A1' },
      { ru: 'коле́но', kana: 'カリェーナ', jp: '膝', pos: '名詞', gender: '中', pluralForm: 'коле́ни', category: '身体', exampleRu: 'Он упа́л на коле́но.', exampleJp: '彼は膝をついて倒れた。', accentTip: '複数形коле́ни。', level: 'A1' },
    ]
  },
  // Set 104
  {
    title: '内臓と生命組織',
    theme: '身体内部 (器官・循環)',
    words: [
      { ru: 'се́рдце', kana: 'スィエルツェ', jp: '心臓、心', pos: '名詞', gender: '中', pluralForm: 'сердца́', category: '身体', exampleRu: 'Се́рдце бьётся ча́сто.', exampleJp: '心臓が速く鼓動している。', accentTip: 'дは発音されない[s’értse]。複数сердца́。', level: 'A1' },
      { ru: 'кровь', kana: 'クローフィ', jp: '血、血液', pos: '名詞', gender: '女', category: '身体', exampleRu: 'Анализ кро́ви.', exampleJp: '血液検査。', accentTip: '女性名詞。生格・与格・前置格はкро́ви。', level: 'A1' },
      { ru: 'желу́док', kana: 'ジルーダク', jp: '胃', pos: '名詞', gender: '男', pluralForm: 'желу́дки', category: '身体', exampleRu: 'У меня́ боли́т желу́док.', exampleJp: '胃が痛いです。', accentTip: '出没母音о(желу́дка)。', level: 'A1' },
      { ru: 'лёгкие', kana: 'リョーフキイェ', jp: '肺', pos: '名詞', gender: '複数', pluralForm: 'лёгкие', category: '身体', exampleRu: 'Врач слу́шает лёгкие.', exampleJp: '医師が肺の音を聴く。', accentTip: 'гは無声化[х]。通常複数形。', level: 'A1' },
      { ru: 'мозг', kana: 'モーズク', jp: '脳', pos: '名詞', gender: '男', pluralForm: 'мозги́', category: '身体', exampleRu: 'Челове́ческий мозг.', exampleJp: '人間の脳。', accentTip: '語末згは無声化[ск]。', level: 'A1' },
    ]
  },
  // Set 105
  {
    title: '骨格・関節・筋肉',
    theme: '運動器官と全身',
    words: [
      { ru: 'кость', kana: 'コースチ', jp: '骨', pos: '名詞', gender: '女', pluralForm: 'ко́сти', category: '身体', exampleRu: 'Слома́ть кость.', exampleJp: '骨を折る。', accentTip: 'ьで終わる女性名詞。', level: 'A1' },
      { ru: 'ло́коть', kana: 'ローカチ', jp: '肘', pos: '名詞', gender: '男', pluralForm: 'ло́кти', category: '身体', exampleRu: 'Он уда́рил ло́коть.', exampleJp: '彼は肘をぶつけた。', accentTip: '出没母音о(ло́ктя, ло́кти)。', level: 'A1' },
      { ru: 'мы́шца', kana: 'ムィーシュツァ', jp: '筋肉', pos: '名詞', gender: '女', pluralForm: 'мы́шцы', category: '身体', exampleRu: 'Тренирова́ть мы́шцы.', exampleJp: '筋肉を鍛える。', accentTip: 'ы́にアクセント。', level: 'A1' },
      { ru: 'те́ло', kana: 'チェーラ', jp: '体、肉体', pos: '名詞', gender: '中', pluralForm: 'тела́', category: '身体', exampleRu: 'Здоро́вое те́ло.', exampleJp: '健康な体。', accentTip: '複数形は語尾移動(тела́)。', level: 'A1' },
      { ru: 'грудь', kana: 'グルーチ', jp: '胸', pos: '名詞', gender: '女', pluralForm: 'гру́ди', category: '身体', exampleRu: 'Вздохну́ть глубоко́ полно́й гру́дью.', exampleJp: '胸いっぱいに深呼吸する。', accentTip: '女性名詞。語末дьは無声化[т’]。', level: 'A1' },
    ]
  },
  // Set 106
  {
    title: '大人と子供の呼称',
    theme: '人間と家族の呼称',
    words: [
      { ru: 'же́нщина', kana: 'ジェーンシナ', jp: '女性', pos: '名詞', gender: '女', pluralForm: 'же́нщины', category: '人間', exampleRu: 'Э́та же́нщина – наш учи́тель.', exampleJp: 'この女性は私たちの先生です。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'мужчи́на', kana: 'ムシシーナ', jp: '男性', pos: '名詞', gender: '男', pluralForm: 'мужчи́ны', category: '人間', exampleRu: 'Молодо́й мужчи́на.', exampleJp: '若い男性。', accentTip: '-аで終わるが文法上の性は男性。', level: 'A1' },
      { ru: 'подро́сток', kana: 'パドローストク', jp: '思春期の少年少女、若者、ティーンエイジャー', pos: '名詞', gender: '男', pluralForm: 'подро́стки', category: '人間', exampleRu: 'Подро́сток увлека́ется спо́ртом.', exampleJp: '十代の若者がスポーツに熱中している。', accentTip: '出没母音о(подро́стка, подро́стки)。', level: 'A1' },
      { ru: 'дочь', kana: 'ドーチ', jp: '娘', pos: '名詞', gender: '女', pluralForm: 'до́чери', category: '家族', exampleRu: 'У них родила́сь дочь.', exampleJp: '彼らに娘が生まれた。', accentTip: '格変化で-ер-が挿入される(до́чери)。', level: 'A1' },
      { ru: 'сын', kana: 'スィン', jp: '息子', pos: '名詞', gender: '男', pluralForm: 'сыновья́', category: '家族', exampleRu: 'Их сын учи́тся в шко́ле.', exampleJp: '彼らの息子は学校で学んでいる。', accentTip: '複数形сыновья́。', level: 'A1' },
    ]
  },
  // Set 107
  {
    title: '祖父母・叔父叔母・孫',
    theme: '親族の呼称',
    words: [
      { ru: 'ро́дственник', kana: 'ロードストヴェンニク', jp: '親戚、親類', pos: '名詞', gender: '男', pluralForm: 'ро́дственники', category: '家族', exampleRu: 'У нас мно́го ро́дственников.', exampleJp: '私たちには親戚が多い。', accentTip: 'о́にアクセント。女性形はро́дственница。', level: 'A1' },
      { ru: 'неве́ста', kana: 'ニヴィエースタ', jp: '婚約者(女性)、花嫁', pos: '名詞', gender: '女', pluralForm: 'неве́сты', category: '家族', exampleRu: 'Краси́вая неве́ста в бе́лом пла́тье.', exampleJp: '白いドレスを着た美しい花嫁。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'малы́ш', kana: 'マルィーシュ', jp: '赤ん坊、幼子', pos: '名詞', gender: '男', pluralForm: 'малыши́', category: '家族', exampleRu: 'Малы́ш сла́дко спит.', exampleJp: '赤ちゃんがすやすや眠っている。', accentTip: '語末ы́にアクセント。複数малыши́。', level: 'A1' },
      { ru: 'ю́ноша', kana: 'ユーナシャ', jp: '青年、若者', pos: '名詞', gender: '男', pluralForm: 'ю́ноши', category: '人間', exampleRu: 'Спорти́вный ю́ноша.', exampleJp: 'スポーツマンの青年。', accentTip: '-аで終わるが男性名詞。ю́にアクセント。', level: 'A1' },
      { ru: 'вну́чка', kana: 'ヴヌーチカ', jp: '孫娘', pos: '名詞', gender: '女', pluralForm: 'вну́чки', category: '家族', exampleRu: 'Ба́бушка лю́бит вну́чку.', exampleJp: '祖母は孫娘を可愛がっている。', accentTip: 'у́にアクセント。', level: 'A1' },
    ]
  },
  // Set 108
  {
    title: '配偶者・甥姪・青年',
    theme: '親族と若者',
    words: [
      { ru: 'племя́нник', kana: 'プリミャーンニク', jp: '甥(おい)', pos: '名詞', gender: '男', pluralForm: 'племя́нники', category: '家族', exampleRu: 'Мой племя́нник пошёл в шко́лу.', exampleJp: '私の甥が入学した。', accentTip: 'я́にアクセント。', level: 'A1' },
      { ru: 'племя́нница', kana: 'プリミャーンニツァ', jp: '姪(めい)', pos: '名詞', gender: '女', pluralForm: 'племя́нницы', category: '家族', exampleRu: 'Краси́вая племя́нница.', exampleJp: '可愛い姪。', accentTip: 'я́にアクセント。', level: 'A1' },
      { ru: 'жена́', kana: 'ジナール', jp: '妻', pos: '名詞', gender: '女', pluralForm: 'жёны', category: '家族', exampleRu: 'Его́ жена́ – худо́жница.', exampleJp: '彼の妻は画家です。', accentTip: '複数形はжёны (語幹ёにアクセント移動)。', level: 'A1' },
      { ru: 'муж', kana: 'ムーシュ', jp: '夫', pos: '名詞', gender: '男', pluralForm: 'мужья́', category: '家族', exampleRu: 'Её муж рабо́тает в ба́нке.', exampleJp: '彼女の夫は銀行で働いている。', accentTip: '語末жは[ш]。複数形мужья́。', level: 'A1' },
      { ru: 'па́рень', kana: 'パーリニ', jp: '青年、ボーイフレンド', pos: '名詞', gender: '男', pluralForm: 'па́рни', category: '人間', exampleRu: 'Хоро́ший па́рень.', exampleJp: 'いい青年。', accentTip: '出没母音е(па́рня, па́рни)。', level: 'A1' },
    ]
  },
  // Set 109
  {
    title: '同僚・来客・宿主',
    theme: '社会的対人関係',
    words: [
      { ru: 'колле́га', kana: 'カッリェーガ', jp: '同僚', pos: '名詞', gender: '男', pluralForm: 'колле́ги', category: '仕事', exampleRu: 'Мы с колле́гой написа́ли отчёт.', exampleJp: '私と同僚は報告書を書いた。', accentTip: '男女両用名詞(共性)。', level: 'A1' },
      { ru: 'гость', kana: 'ゴースチ', jp: '客、ゲスト', pos: '名詞', gender: '男', pluralForm: 'го́сти', category: '日常', exampleRu: 'К нам пришли́ го́сти.', exampleJp: '私たちの家にお客さんが来た。', accentTip: '活動体男性名詞。生格го́стя。', level: 'A1' },
      { ru: 'хозя́йка', kana: 'ハジャーイカ', jp: '女主人', pos: '名詞', gender: '女', pluralForm: 'хозя́йки', category: '日常', exampleRu: 'Хозя́йка кварти́ры.', exampleJp: 'アパートの家主（女性）。', accentTip: 'я́にアクセント。', level: 'A1' },
      { ru: 'прия́тель', kana: 'プリヤチェリ', jp: '親しい友人、仲間', pos: '名詞', gender: '男', pluralForm: 'прия́тели', category: '人間', exampleRu: 'Мой ста́рый прия́тель.', exampleJp: '私の旧友（親しい仲間）。', accentTip: 'я́にアクセント。女性形прия́тельница。', level: 'A1' },
      { ru: 'молодёжь', kana: 'マラジョーシュ', jp: '若者たち、青年層', pos: '名詞', gender: '女', category: '人間', exampleRu: 'Совреме́нная молодёжь.', exampleJp: '現代の若者たち。', accentTip: '集合名詞(女性単数扱い)。ёにアクセント。', level: 'A1' },
    ]
  },
  // Set 110
  {
    title: '浴室と水回り設備',
    theme: '住まいと衛生',
    words: [
      { ru: 'ва́нна', kana: 'ヴァーンナ', jp: '浴槽、お風呂', pos: '名詞', gender: '女', pluralForm: 'ва́нны', category: '住居', exampleRu: 'Принима́ть ва́нну.', exampleJp: '湯船に浸かる。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'душ', kana: 'ドゥーシュ', jp: 'シャワー', pos: '名詞', gender: '男', pluralForm: 'ду́ши', category: '住居', exampleRu: 'У́тром я принима́ю душ.', exampleJp: '朝、私はシャワーを浴びます。', accentTip: '造格ду́шем。', level: 'A1' },
      { ru: 'мы́ло', kana: 'ムィーラ', jp: '石鹸', pos: '名詞', gender: '中', pluralForm: 'мы́ла', category: '日用品', exampleRu: 'Мыть ру́ки с мы́лом.', exampleJp: '石鹸で手を洗う。', accentTip: 'ы́にアクセント。', level: 'A1' },
      { ru: 'полоте́нце', kana: 'パラチェーンツェ', jp: 'タオル', pos: '名詞', gender: '中', pluralForm: 'полоте́нца', category: '日用品', exampleRu: 'Чи́стое полоте́нце.', exampleJp: '清潔なタオル。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'умыва́льник', kana: 'ウミヴァーリニク', jp: '洗面台', pos: '名詞', gender: '男', pluralForm: 'умыва́льники', category: '住居', exampleRu: 'Умы́ться в умыва́льнике.', exampleJp: '洗面台で顔を洗う。', accentTip: 'а́にアクセント。', level: 'A1' },
    ]
  },
  // Set 111
  {
    title: '身だしなみと整髪',
    theme: '洗面用具',
    words: [
      { ru: 'па́ста', kana: 'パースタ', jp: 'ペースト、練り粉 (歯磨き粉)', pos: '名詞', gender: '女', category: '日用品', exampleRu: 'Зубна́я па́ста.', exampleJp: '歯磨き粉。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'щётка', kana: 'ショードカ', jp: 'ブラシ', pos: '名詞', gender: '女', pluralForm: 'щётки', category: '日用品', exampleRu: 'Зубна́я щётка.', exampleJp: '歯ブラシ。', accentTip: 'ёに常にアクセント。', level: 'A1' },
      { ru: 'расчёска', kana: 'ラスチョースカ', jp: 'くし、ヘアブラシ', pos: '名詞', gender: '女', pluralForm: 'расчёски', category: '日用品', exampleRu: 'Где моя́ расчёска?', exampleJp: '私のくしはどこ？', accentTip: 'ёにアクセント。', level: 'A1' },
      { ru: 'бри́тва', kana: 'ブリートヴァ', jp: '剃刀 (かみそり)', pos: '名詞', gender: '女', pluralForm: 'бри́твы', category: '日用品', exampleRu: 'О́страя бри́тва.', exampleJp: 'よく切れる剃刀。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'шампу́нь', kana: 'シャンプーン', jp: 'シャンプー', pos: '名詞', gender: '男', pluralForm: 'шампу́ни', category: '日用品', exampleRu: 'Купи́ть шампу́нь для воло́с.', exampleJp: '洗髪用シャンプーを買う。', accentTip: '男性名詞(生格шампу́ня)。', level: 'A1' },
    ]
  },
  // Set 112
  {
    title: '居間の家具と装飾',
    theme: '室内家具',
    words: [
      { ru: 'дива́н', kana: 'ジヴァーン', jp: 'ソファ、長椅子', pos: '名詞', gender: '男', pluralForm: 'дива́ны', category: '家具', exampleRu: 'Он сиди́т на дива́не.', exampleJp: '彼はソファに座っている。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'шкаф', kana: 'シュカーフ', jp: '戸棚、本棚、タンス', pos: '名詞', gender: '男', pluralForm: 'шкафы́', category: '家具', exampleRu: 'Оде́жда виси́т в шкафу́.', exampleJp: '服がタンスの中にかかっている。', accentTip: '第2前置格в шкафу́(アクセント移動)。', level: 'A1' },
      { ru: 'комо́д', kana: 'カモート', jp: 'タンス、引き出し箪笥', pos: '名詞', gender: '男', pluralForm: 'комо́ды', category: '家具', exampleRu: 'Положи́ть бельё в комо́д.', exampleJp: '下着をタンスにしまう。', accentTip: '語末дは[т]。', level: 'A1' },
      { ru: 'ковёр', kana: 'カヴョール', jp: '絨毯、カーペット', pos: '名詞', gender: '男', pluralForm: 'ковры́', category: '家具', exampleRu: 'Краси́вый ковёр на полу́.', exampleJp: '床の上の美しい絨毯。', accentTip: '出没母音ё(ковра́, ковры́)。', level: 'A1' },
      { ru: 'занаве́ски', kana: 'ザナヴェースキ', jp: 'カーテン', pos: '名詞', gender: '複数', pluralForm: 'занаве́ски', category: '家具', exampleRu: 'Закры́ть занаве́ски.', exampleJp: 'カーテンを閉める。', accentTip: '通常複数形(単数занаве́ска)。', level: 'A1' },
    ]
  },
  // Set 113
  {
    title: '寝室と就寝具',
    theme: '寝具・生活リズム',
    words: [
      { ru: 'поду́шка', kana: 'パドゥーシュカ', jp: '枕 (まくら)', pos: '名詞', gender: '女', pluralForm: 'поду́шки', category: '家具', exampleRu: 'Мя́гкая поду́шка.', exampleJp: '柔らかい枕。', accentTip: 'у́にアクセント。', level: 'A1' },
      { ru: 'одея́ло', kana: 'アデヤール', jp: '毛布、掛け布団', pos: '名詞', gender: '中', pluralForm: 'одея́ла', category: '家具', exampleRu: 'Тёплое одея́ло.', exampleJp: '温かい毛布。', accentTip: 'я́にアクセント。', level: 'A1' },
      { ru: 'простыня́', kana: 'プラスティニャー', jp: 'シーツ', pos: '名詞', gender: '女', pluralForm: 'про́стыни', category: '家具', exampleRu: 'Бе́лая простыня́.', exampleJp: '白いシーツ。', accentTip: '複数形про́стыни。', level: 'A1' },
      { ru: 'буди́льник', kana: 'ブディールニク', jp: '目覚まし時計', pos: '名詞', gender: '男', pluralForm: 'буди́льники', category: '日用品', exampleRu: 'Буди́льник звони́т в семь.', exampleJp: '目覚まし時計が7時に鳴る。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'сон', kana: 'ソーン', jp: '睡眠、夢', pos: '名詞', gender: '男', pluralForm: 'сны', category: '日常', exampleRu: 'Приятных снов!', exampleJp: 'おやすみなさい！（良い夢を）', accentTip: '出没母音о(сна, сны)。', level: 'A1' },
    ]
  },
  // Set 114
  {
    title: '住居の構造と部位',
    theme: '建築構造',
    words: [
      { ru: 'стена́', kana: 'スチナール', jp: '壁', pos: '名詞', gender: '女', pluralForm: 'сте́ны', category: '住居', exampleRu: 'Карти́на виси́т на стене́.', exampleJp: '絵が壁にかかっている。', accentTip: '対格сте́ну、複数сте́ны。', level: 'A1' },
      { ru: 'пол', kana: 'ポール', jp: '床', pos: '名詞', gender: '男', pluralForm: 'полы́', category: '住居', exampleRu: 'На полу́ лежи́т ковёр.', exampleJp: '床の上に絨毯が敷いてある。', accentTip: '第2前置格на полу́。', level: 'A1' },
      { ru: 'потоло́к', kana: 'パタローク', jp: '天井', pos: '名詞', gender: '男', pluralForm: 'потолки́', category: '住居', exampleRu: 'Высо́кий потоло́к.', exampleJp: '高い天井。', accentTip: '出没母音о(потолка́, потолки́)。', level: 'A1' },
      { ru: 'кры́ша', kana: 'クルィーシャ', jp: '屋根', pos: '名詞', gender: '女', pluralForm: 'кры́ши', category: '住居', exampleRu: 'Кот сиди́т на кры́ше.', exampleJp: '猫が屋根の上に座っている。', accentTip: 'ы́にアクセント。', level: 'A1' },
      { ru: 'за́мок', kana: 'ザーマク', jp: '城', pos: '名詞', gender: '男', pluralForm: 'за́мки', category: '住居', exampleRu: 'Стари́нный за́мок.', exampleJp: '古城。', accentTip: '最初のа́にアクセント(錠前はзамо́к)。', level: 'A1' },
    ]
  },
  // Set 115
  {
    title: '鍵・スイッチ・配線',
    theme: '住まいの設備部品',
    words: [
      { ru: 'ключ', kana: 'クリューチ', jp: '鍵、キー', pos: '名詞', gender: '男', pluralForm: 'ключи́', category: '日用品', exampleRu: 'Ключ от кварти́ры.', exampleJp: 'アパートの鍵。', accentTip: '格変化でアクセントが語尾へ移動(ключа́, ключи́)。', level: 'A1' },
      { ru: 'выключа́тель', kana: 'ヴィクリュチャーチェリ', jp: 'スイッチ', pos: '名詞', gender: '男', pluralForm: 'выключа́тели', category: '住居', exampleRu: 'Где выключа́тель све́та?', exampleJp: '明かりのスイッチはどこですか？', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'розе́тка', kana: 'ラゼートカ', jp: 'コンセント', pos: '名詞', gender: '女', pluralForm: 'розе́тки', category: '住居', exampleRu: 'Вста́вить ште́псель в розе́тку.', exampleJp: 'プラグをコンセントに差し込む。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'батаре́я', kana: 'バタリエーヤ', jp: '暖房器具 (ラジエーター)、電池', pos: '名詞', gender: '女', pluralForm: 'батаре́и', category: '住居', exampleRu: 'Батаре́я о́чень горя́чая.', exampleJp: 'ラジエーターがとても熱い。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'звоно́к', kana: 'ズヴァノーク', jp: '呼び鈴、ベル', pos: '名詞', gender: '男', pluralForm: 'звонки́', category: '住居', exampleRu: 'Разда́лся звоно́к в дверь.', exampleJp: 'ドアの呼び鈴が鳴った。', accentTip: '出没母音о(звонка́, звонки́)。', level: 'A1' },
    ]
  },
  // Set 116
  {
    title: '空調と室内の心地よさ',
    theme: '環境と秩序',
    words: [
      { ru: 'вентиля́тор', kana: 'ヴェンチリャータる', jp: '扇風機', pos: '名詞', gender: '男', pluralForm: 'вентиля́торы', category: '家具', exampleRu: 'Включи́ть вентиля́тор.', exampleJp: '扇風機をつける。', accentTip: 'я́にアクセント。', level: 'A1' },
      { ru: 'кондиционе́р', kana: 'カンジツィアニェール', jp: 'エアコン', pos: '名詞', gender: '男', pluralForm: 'кондиционе́ры', category: '家具', exampleRu: 'Ле́том рабо́тает кондиционе́р.', exampleJp: '夏はエアコンが動いている。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'ую́т', kana: 'ウユート', jp: '居心地の良さ、くつろぎ', pos: '名詞', gender: '男', category: '住居', exampleRu: 'В ко́мнате цари́т ую́т.', exampleJp: '部屋には居心地の良い空気が満ちている。', accentTip: '単数のみ。', level: 'A1' },
      { ru: 'поря́док', kana: 'パリャーダク', jp: '秩序、整頓', pos: '名詞', gender: '男', pluralForm: 'поря́дки', category: '日常', exampleRu: 'Всё в поря́дке.', exampleJp: 'すべて順調です（大丈夫です）。', accentTip: '出没母音о(поря́дка)。', level: 'A1' },
      { ru: 'чистота́', kana: 'チスタター', jp: '清潔さ、綺麗さ', pos: '名詞', gender: '女', category: '日常', exampleRu: 'Люби́ть чистоту́.', exampleJp: '綺麗好きである。', accentTip: '語末а́にアクセント。', level: 'A1' },
    ]
  },
  // Set 117
  {
    title: '清掃とごみ処理',
    theme: '家事・掃除',
    words: [
      { ru: 'пылесо́с', kana: 'プィリソース', jp: '掃除機', pos: '名詞', gender: '男', pluralForm: 'пылесо́сы', category: '日用品', exampleRu: 'Убира́ть кварти́ру пылесо́сом.', exampleJp: '掃除機でアパートを掃除する。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'ведро́', kana: 'ヴィドロー', jp: 'バケツ', pos: '名詞', gender: '中', pluralForm: 'вёдра', category: '日用品', exampleRu: 'Ведро́ с водо́й.', exampleJp: '水の入ったバケツ。', accentTip: '複数形はвёдра (ёに移動)。', level: 'A1' },
      { ru: 'тря́пка', kana: 'トリャープカ', jp: '雑巾、ふきん', pos: '名詞', gender: '女', pluralForm: 'тря́пки', category: '日用品', exampleRu: 'Вы́тереть стол тря́пкой.', exampleJp: '机を雑巾で拭く。', accentTip: 'я́にアクセント。', level: 'A1' },
      { ru: 'му́сор', kana: 'ムーサル', jp: 'ごみ、くず', pos: '名詞', gender: '男', category: '日用品', exampleRu: 'Вы́бросить му́сор.', exampleJp: 'ごみを捨てる。', accentTip: 'у́にアクセント。集合的。', level: 'A1' },
      { ru: 'убо́рка', kana: 'ウボールカ', jp: '掃除、片付け', pos: '名詞', gender: '女', category: '日常', exampleRu: 'Генера́льная убо́рка.', exampleJp: '大掃除。', accentTip: 'о́にアクセント。', level: 'A1' },
    ]
  },
  // Set 118
  {
    title: '収納と持ち運び容器',
    theme: '容器・収納',
    words: [
      { ru: 'коро́бка', kana: 'カラープカ', jp: '箱', pos: '名詞', gender: '女', pluralForm: 'коро́бки', category: '日用品', exampleRu: 'Коро́бка конфет.', exampleJp: 'キャンディの箱。', accentTip: 'бは無声化[п]。', level: 'A1' },
      { ru: 'корзи́на', kana: 'カルズィーナ', jp: '籠 (かご)、バスケット', pos: '名詞', gender: '女', pluralForm: 'корзи́ны', category: '日用品', exampleRu: 'Корзи́на с фрукта́ми.', exampleJp: '果物のかご。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'ве́шалка', kana: 'ヴィエーシャルカ', jp: 'ハンガー、洋服掛け', pos: '名詞', gender: '女', pluralForm: 'ве́шалки', category: '家具', exampleRu: 'Пове́сить пальто́ на ве́шалку.', exampleJp: 'コートをハンガーに掛ける。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'паке́т', kana: 'パキエート', jp: '袋、ポリ袋、小包', pos: '名詞', gender: '男', pluralForm: 'паке́ты', category: '日用品', exampleRu: 'Пласти́ковый паке́т.', exampleJp: 'ビニール袋。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'портфе́ль', kana: 'パルトフェーリ', jp: '書類かばん、ブリーフケース', pos: '名詞', gender: '男', pluralForm: 'портфе́ли', category: '日用品', exampleRu: 'Ко́жаный портфе́ль.', exampleJp: '革の書類かばん。', accentTip: 'е́にアクセント。男性名詞。', level: 'A1' },
    ]
  },
  // Set 119
  {
    title: '医療・薬・身体の不調',
    theme: '健康と症状',
    words: [
      { ru: 'боль', kana: 'ボーリ', jp: '痛み', pos: '名詞', gender: '女', pluralForm: 'бо́ли', category: '医療', exampleRu: 'Острая боль.', exampleJp: '激しい痛み。', accentTip: '女性名詞(生格бо́ли)。', level: 'A1' },
      { ru: 'лека́рство', kana: 'リカールストヴァ', jp: '薬 (くすり)', pos: '名詞', gender: '中', pluralForm: 'лека́рства', category: '医療', exampleRu: 'Приня́ть лека́рство.', exampleJp: '薬を飲む。', accentTip: 'а́にアクセント。', level: 'A1' },
      { ru: 'табле́тка', kana: 'タブリェートカ', jp: '錠剤、薬の粒', pos: '名詞', gender: '女', pluralForm: 'табле́тки', category: '医療', exampleRu: 'Табле́тка от головно́й бо́ли.', exampleJp: '頭痛薬の錠剤。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'уко́л', kana: 'ウコール', jp: '注射', pos: '名詞', gender: '男', pluralForm: 'уко́лы', category: '医療', exampleRu: 'Сде́лать уко́л.', exampleJp: '注射をする。', accentTip: 'о́にアクセント。', level: 'A1' },
      { ru: 'гра́дусник', kana: 'グラードゥスニク', jp: '体温計', pos: '名詞', gender: '男', pluralForm: 'гра́дусники', category: '医療', exampleRu: 'Поста́вить гра́дусник.', exampleJp: '体温計で熱を測る。', accentTip: 'а́にアクセント。', level: 'A1' },
    ]
  },
  // Set 120
  {
    title: '病院と救護体制',
    theme: '医療機関',
    words: [
      { ru: 'поликли́ника', kana: 'パリクリーニカ', jp: '診療所、総合クリニック', pos: '名詞', gender: '女', pluralForm: 'поликли́ники', category: '医療', exampleRu: 'Пойти́ в поликли́нику.', exampleJp: 'クリニックへ行く。', accentTip: 'и́にアクセント。', level: 'A1' },
      { ru: 'реце́пт', kana: 'リツェープト', jp: '処方箋、料理のレシピ', pos: '名詞', gender: '男', pluralForm: 'реце́пты', category: '医療', exampleRu: 'Лека́рство по реце́пту.', exampleJp: '処方薬。', accentTip: 'е́にアクセント。', level: 'A1' },
      { ru: 'бинт', kana: 'ビーント', jp: '包帯', pos: '名詞', gender: '男', pluralForm: 'бинты́', category: '医療', exampleRu: 'Перевяза́ть ру́ку бинто́м.', exampleJp: '手を包帯で巻く。', accentTip: '格変化で語尾に移動(бинта́)。', level: 'A1' },
      { ru: 'пацие́нт', kana: 'パツィイェーント', jp: '患者', pos: '名詞', gender: '男', pluralForm: 'пацие́нты', category: '医療', exampleRu: 'Врач при́нял пацие́нта.', exampleJp: '医師が患者を診察した。', accentTip: '活動体男性名詞。', level: 'A1' },
      { ru: 'опера́ция', kana: 'アピラーツィヤ', jp: '手術、軍事・経済作戦', pos: '名詞', gender: '女', pluralForm: 'опера́ции', category: '医療', exampleRu: 'Сло́жная опера́ция.', exampleJp: '難しい手術。', accentTip: '前置格はоб опера́ции。', level: 'A1' },
    ]
  }
];

export const unit6Sets: WordSet[] = rawUnit6Sets.map((s, idx) =>
  buildWordSet(101 + idx, 6, idx + 1, s.title, s.theme, s.words)
);
