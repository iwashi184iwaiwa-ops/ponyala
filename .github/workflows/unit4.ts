import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 4: Sets 61-80 (20 sets × 5 words = 100 authentic words, A2 level)
const rawUnit4Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 61
  {
    title: '歩行の移動動詞 (定向 vs 不定向)',
    theme: '移動動詞・徒歩',
    words: [
      { ru: 'идти́', kana: 'イチー', jp: '歩いて行く (定向・向かう途中)', pos: '動詞', aspect: '不完了', pairedWord: 'пойти́', conjugationNote: 'иду́, идёшь... идёт; шёл, шла, шли', category: '移動動詞', exampleRu: 'Я иду́ в библиоте́ку.', exampleJp: '私は図書館へ向かっているところです。', accentTip: '過去形шёл, шла, шло, шли。', level: 'A2' },
      { ru: 'ходи́ть', kana: 'ハジーチ', jp: '歩いて行く、通う (不定向・反復/往復)', pos: '動詞', aspect: '不完了', conjugationNote: 'хожу́, хо́дишь... хо́дят; ходи́л', category: '移動動詞', exampleRu: 'Он ка́ждый день хо́дит в шко́лу.', exampleJp: '彼は毎日学校に通っている。', accentTip: '1単数は子音交替(хожу́)。', level: 'A2' },
      { ru: 'пойти́', kana: 'パイチー', jp: '歩き出す、歩いて出かける (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'идти́', conjugationNote: 'пойду́, пойдёшь... пошёл, пошла́', category: '移動動詞', exampleRu: 'Пойдёмте в кафе́!', exampleJp: 'カフェに行きましょう！(勧誘)', accentTip: 'по- + 定向動詞で出発の完了体。', level: 'A2' },
      { ru: 'пешко́м', kana: 'ピシュコーム', jp: '徒歩で、歩いて', pos: '副詞', category: '交通', exampleRu: 'Я иду́ пешко́м.', exampleJp: '私は歩いて行きます。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'доро́га', kana: 'ダローガ', jp: '道、道路、道中', pos: '名詞', gender: '女', pluralForm: 'доро́ги', category: '交通', exampleRu: 'Счастли́вой доро́ги!', exampleJp: '道中ご無事で！(良い旅を)', accentTip: 'о́にアクセント。', level: 'A2' }
    ]
  },
  // Set 62
  {
    title: '乗り物の移動動詞 (定向 vs 不定向)',
    theme: '移動動詞・乗車',
    words: [
      { ru: 'е́хать', kana: 'イェーハチ', jp: '乗り物で行く (定向・向かう途中)', pos: '動詞', aspect: '不完了', pairedWord: 'пое́хать', conjugationNote: 'е́ду, е́дешь... е́дут; е́хал', category: '移動動詞', exampleRu: 'Мы е́дем в Москву́ на по́езде.', exampleJp: '私たちは列車でモスクワに向かっている。', accentTip: 'е́ду, е́дешь...', level: 'A2' },
      { ru: 'е́здить', kana: 'イェーズジチ', jp: '乗り物で行く (不定向・反復/往復)', pos: '動詞', aspect: '不完了', conjugationNote: 'е́зжу, е́здишь... е́здят; е́здил', category: '移動動詞', exampleRu: 'Ле́том мы е́здили на мо́ре.', exampleJp: '夏に私たちは海に行ってきました(往復)。', accentTip: '1単数е́зжу。', level: 'A2' },
      { ru: 'пое́хать', kana: 'パイェーハチ', jp: '乗り物で出かける、出発する (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'е́хать', conjugationNote: 'пое́ду, пое́дешь... пое́хал', category: '移動動詞', exampleRu: 'За́втра я пое́ду на да́чу.', exampleJp: '明日私は別荘に出かけます。', accentTip: '完了未来。', level: 'A2' },
      { ru: 'путь', kana: 'プーチ', jp: '道、旅路、進路', pos: '名詞', gender: '男', pluralForm: 'пути́', category: '交通', exampleRu: 'Счастли́вого пути́!', exampleJp: '良い旅を！道中ご無事で！', accentTip: '男性名詞だが女性3変化に準ずる。', level: 'A2' },
      { ru: 'поездка', kana: 'パイェーストカ', jp: '旅行、小旅行', pos: '名詞', gender: '女', pluralForm: 'пое́здки', category: '旅行', exampleRu: 'Интере́сная пое́здка.', exampleJp: 'おもしろい旅行。', accentTip: 'е́にアクセント。', level: 'A2' }
    ]
  },
  // Set 63
  {
    title: '走る移動動詞 (定向 vs 不定向)',
    theme: '移動動詞・走行',
    words: [
      { ru: 'бежа́ть', kana: 'ビジャーチ', jp: '走って行く (定向)', pos: '動詞', aspect: '不完了', pairedWord: 'побежа́ть', conjugationNote: 'бегу́, бежи́шь, бежи́т, бежи́м, бежи́те, бегу́т', category: '移動動詞', exampleRu: 'Ма́льчик бежи́т в шко́лу.', exampleJp: '男の子が学校へ走って行く。', accentTip: '混合変化動詞。1単数と3複数がг、他はж。', level: 'A2' },
      { ru: 'бе́гать', kana: 'ベーガチ', jp: '走る、ジョギングする (不定向)', pos: '動詞', aspect: '不完了', conjugationNote: '第1変化 (бе́гаю, бе́гаешь...)', category: '移動動詞', exampleRu: 'Я бе́гаю по у́трам.', exampleJp: '私は毎朝走っています。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'побежа́ть', kana: 'パビジャーチ', jp: '走り出す (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'бежа́ть', category: '移動動詞', exampleRu: 'Соба́ка побежа́ла за мячо́м.', exampleJp: '犬がボールを追って走り出した。', accentTip: '完了体。', level: 'A2' },
      { ru: 'быстрота́', kana: 'ブィストラター', jp: '速さ、迅速さ', pos: '名詞', gender: '女', category: '性質', exampleRu: 'Быстрота́ движе́ния.', exampleJp: '動きの速さ。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'ско́рость', kana: 'スコアラシチ', jp: '速度、スピード', pos: '名詞', gender: '女', pluralForm: 'ско́рости', category: '物理', exampleRu: 'Высо́кая ско́рость.', exampleJp: 'ハイスピード。女性名詞。', accentTip: 'о́にアクセント。', level: 'A2' }
    ]
  },
  // Set 64
  {
    title: '泳ぐ・飛ぶ移動動詞',
    theme: '移動動詞・水空',
    words: [
      { ru: 'плыть', kana: 'プルィーチ', jp: '泳いで行く、船が進む (定向)', pos: '動詞', aspect: '不完了', pairedWord: 'поплы́ть', conjugationNote: 'плыву́, плывёшь... плыл, плыла́', category: '移動動詞', exampleRu: 'Кора́бль плывёт на юг.', exampleJp: '船が南へ進んでいる。', accentTip: 'плыву́, плывёшь。過去女性плыла́。', level: 'A2' },
      { ru: 'пла́вать', kana: 'プラーヴァチ', jp: '泳ぐ、航行する (不定向)', pos: '動詞', aspect: '不完了', conjugationNote: '第1変化 (пла́ваю, пла́ваешь...)', category: '移動動詞', exampleRu: 'Он уме́ет пла́вать.', exampleJp: '彼は泳ぐことができる。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'лете́ть', kana: 'リチェーチ', jp: '飛んで行く (定向)', pos: '動詞', aspect: '不完了', pairedWord: 'полете́ть', conjugationNote: 'лечу́, лети́шь... летя́т', category: '移動動詞', exampleRu: 'Самолёт лети́т в Пари́ж.', exampleJp: '飛行機がパリへ飛んでいる。', accentTip: '1単数т→ч (лечу́)。', level: 'A2' },
      { ru: 'лета́ть', kana: 'リターチ', jp: '飛ぶ、飛行機で行く (不定向)', pos: '動詞', aspect: '不完了', conjugationNote: '第1変化 (лета́ю, лета́ешь...)', category: '移動動詞', exampleRu: 'Пти́цы лета́ют.', exampleJp: '鳥が飛んでいる。', accentTip: 'лета́ю, лета́ешь。', level: 'A2' },
      { ru: 'самолёт', kana: 'サマリョート', jp: '飛行機', pos: '名詞', gender: '男', pluralForm: 'самолёты', category: '交通', exampleRu: 'Ле́том лете́ть на самолёте.', exampleJp: '夏に飛行機で飛ぶ。', accentTip: 'ёにアクセント。', level: 'A2' }
    ]
  },
  // Set 65
  {
    title: '運ぶ・連れる移動動詞',
    theme: '移動動詞・他動詞',
    words: [
      { ru: 'нести́', kana: 'ニスチー', jp: '手で運んで行く (定向)', pos: '動詞', aspect: '不完了', pairedWord: 'понести́', conjugationNote: 'несу́, несёшь... нёс, несла́, несли́', category: '移動動詞', exampleRu: 'Он несёт чемода́н.', exampleJp: '彼はスーツケースを持って行っている。', accentTip: '過去形нёс, несла́。', level: 'A2' },
      { ru: 'носи́ть', kana: 'ナシーチ', jp: '持ち歩く、身につけている (不定向)', pos: '動詞', aspect: '不完了', conjugationNote: '第2変化 (ношу́, но́сишь...)', category: '移動動詞', exampleRu: 'Она́ но́сит очки́.', exampleJp: '彼女は眼鏡をかけている。', accentTip: '「服を着ている」の意味もある。', level: 'A2' },
      { ru: 'везти́', kana: 'ヴィズチー', jp: '車・乗り物で運ぶ (定向)', pos: '動詞', aspect: '不完了', pairedWord: 'повезти́', conjugationNote: 'везу́, везёшь... вёз, везла́', category: '移動動詞', exampleRu: 'Ско́рая по́мощь везёт больно́го.', exampleJp: '救急車が病人を運んでいる。', accentTip: '過去形вёз, везла́。', level: 'A2' },
      { ru: 'вози́ть', kana: 'ヴァズィーチ', jp: '乗り物で運ぶ (不定向)', pos: '動詞', aspect: '不完了', conjugationNote: '第2変化 (вожу́, во́зишь...)', category: '移動動詞', exampleRu: 'Оте́ц во́зит дете́й в шко́лу.', exampleJp: '父は車で子どもたちを学校へ送る。', accentTip: '1単数з→ж (вожу́)。', level: 'A2' },
      { ru: 'вести́', kana: 'ヴィスチー', jp: '手を取って連れて行く、導く (定向)', pos: '動詞', aspect: '不完了', pairedWord: 'повести́', conjugationNote: 'веду́, ведёшь... вёл, вела́', category: '移動動詞', exampleRu: 'Мать ведёт ребёнка за́ руку.', exampleJp: '母は子の手を取って連れて行く。', accentTip: '過去形вёл, вела́。', level: 'A2' }
    ]
  },
  // Set 66
  {
    title: '引率・運転・荷物',
    theme: '移動動詞と関連名詞',
    words: [
      { ru: 'води́ть', kana: 'ヴァジーチ', jp: '連れて行く、運転する (不定向)', pos: '動詞', aspect: '不完了', conjugationNote: '第2変化 (вожу́, во́дишь...)', category: '移動動詞', exampleRu: 'Он хорошо́ во́дит маши́ну.', exampleJp: '彼は上手に車を運転する。', accentTip: '1単数д→ж (вожу́)。', level: 'A2' },
      { ru: 'бага́ж', kana: 'バガージュ', jp: '荷物、手荷物', pos: '名詞', gender: '男', category: '旅行', exampleRu: 'Сдать бага́ж.', exampleJp: '荷物を預ける。語末жは[ш]。', level: 'A2' },
      { ru: 'чемода́н', kana: 'チマダーン', jp: 'スーツケース、旅行鞄', pos: '名詞', gender: '男', pluralForm: 'чемода́ны', category: '旅行', exampleRu: 'Тяжёлый чемода́н.', exampleJp: '重いスーツケース。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'су́мка', kana: 'スームカ', jp: 'カバン、ハンドバッグ', pos: '名詞', gender: '女', pluralForm: 'су́мки', category: '生活', exampleRu: 'Ко́жаная су́мка.', exampleJp: '革のカバン。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'рюкза́к', kana: 'リュクザーク', jp: 'リュックサック、バックパック', pos: '名詞', gender: '男', pluralForm: 'рюкзаки́', category: '旅行', exampleRu: 'Тури́ст с рюкзако́м.', exampleJp: 'リュックを背負った旅行者。', accentTip: '語尾移動(рюкзака́)。', level: 'A2' }
    ]
  },
  // Set 67
  {
    title: '接頭辞付き移動動詞 (到着・去り)',
    theme: '接頭辞 при- / у-',
    words: [
      { ru: 'прийти́', kana: 'プリイチー', jp: '歩いて到着する、来る', pos: '動詞', aspect: '完了', pairedWord: 'приходи́ть', conjugationNote: 'приду́, придёшь... пришёл, пришла́', category: '移動動詞', exampleRu: 'Он пришёл домо́й во́время.', exampleJp: '彼は時間通りに帰宅した。', accentTip: 'при- は「到達・到着」。', level: 'A2' },
      { ru: 'приходи́ть', kana: 'プリハジーチ', jp: '歩いて来る、到着する (反復・習慣)', pos: '動詞', aspect: '不完了', pairedWord: 'прийти́', conjugationNote: 'прихожу́, прихо́дишь...', category: '移動動詞', exampleRu: 'По́езд прихо́дит в де́сять.', exampleJp: '列車は10時に到着する。', accentTip: '不完了体。', level: 'A2' },
      { ru: 'уйти́', kana: 'ウイチー', jp: '歩いて立ち去る、帰る', pos: '動詞', aspect: '完了', pairedWord: 'уходи́ть', conjugationNote: 'уйду́, уйдёшь... ушёл, ушла́', category: '移動動詞', exampleRu: 'Он уже́ ушёл.', exampleJp: '彼はもう立ち去りました(ここにはいない)。', accentTip: 'у- は「離脱・不在」。', level: 'A2' },
      { ru: 'уходи́ть', kana: 'ウハジーチ', jp: '立ち去る、去っていく (進行・習慣)', pos: '動詞', aspect: '不完了', pairedWord: 'уйти́', category: '移動動詞', exampleRu: 'Не уходи́те, пожа́луйста!', exampleJp: '帰らないでください！', accentTip: '不完了体。', level: 'A2' },
      { ru: 'прие́хать', kana: 'プリイェーハチ', jp: '乗り物で到着する、来る', pos: '動詞', aspect: '完了', pairedWord: 'приезжа́ть', conjugationNote: 'прие́ду, прие́дешь... прие́хал', category: '移動動詞', exampleRu: 'С прие́здом!', exampleJp: '無事のお着きをお祝いします！', accentTip: '乗り物の到着。', level: 'A2' }
    ]
  },
  // Set 68
  {
    title: '接頭辞付き移動動詞 (出入り・通過)',
    theme: '接頭辞 в- / вы- / про-',
    words: [
      { ru: 'войти́', kana: 'ヴァイチー', jp: '歩いて入る (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'входи́ть', conjugationNote: 'войду́, войдёшь... вошёл, вошла́', category: '移動動詞', exampleRu: 'Он вошёл в ко́мнату.', exampleJp: '彼は部屋に入った(в + 対格)。', accentTip: 'в- は「内部へ進入」。', level: 'A2' },
      { ru: 'входи́ть', kana: 'フハジーチ', jp: '入る (不完了体)', pos: '動詞', aspect: '不完了', pairedWord: 'войти́', category: '移動動詞', exampleRu: 'Входи́те, пожа́луйста!', exampleJp: 'どうぞお入りください！', accentTip: '命令形входи́те。', level: 'A2' },
      { ru: 'вы́йти', kana: 'ヴィーイチ', jp: '歩いて出る (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'выходи́ть', conjugationNote: 'вы́йду, вы́йдешь... вы́шел, вы́шла', category: '移動動詞', exampleRu: 'Она́ вы́шла из ко́мнаты.', exampleJp: '彼女は部屋から出た(из + 生格)。', accentTip: '完了体接頭辞вы́-はアクセント固定。', level: 'A2' },
      { ru: 'выходи́ть', kana: 'ヴィハジーチ', jp: '外へ出る (不完了体)', pos: '動詞', aspect: '不完了', pairedWord: 'вы́йти', category: '移動動詞', exampleRu: 'Вы выхо́дите на сле́дующей?', exampleJp: '次でお降りになりますか？(バス・地下鉄)', accentTip: '交通機関の定番表現。', level: 'A2' },
      { ru: 'пройти́', kana: 'プライチー', jp: '通り過ぎる、通り抜ける (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'проходи́ть', category: '移動動詞', exampleRu: 'Пройди́те вперёд, пожа́луйста.', exampleJp: '前へお進みください。', accentTip: 'про- は通過。', level: 'A2' }
    ]
  },
  // Set 69
  {
    title: '自然環境 (海・川・森)',
    theme: '大自然',
    words: [
      { ru: 'мо́ре', kana: 'モーリェ', jp: '海', pos: '名詞', gender: '中', pluralForm: 'моря́', category: '自然', exampleRu: 'Чёрное мо́ре.', exampleJp: '黒海。複数形моря́。', accentTip: '複数形アクセント語尾移動(моря́)。', level: 'A2' },
      { ru: 'река́', kana: 'リカ', jp: '川', pos: '名詞', gender: '女', pluralForm: 'ре́ки', category: '自然', exampleRu: 'Во́лга – вели́кая ру́сская река́.', exampleJp: 'ヴォルガはロシアの母なる大河です。', accentTip: '対格ре́ку。', level: 'A2' },
      { ru: 'о́зеро', kana: 'オージラ', jp: '湖', pos: '名詞', gender: '中', pluralForm: 'озёра', category: '自然', exampleRu: 'Байка́л – глубо́кое о́зеро.', exampleJp: 'バイカルは深い湖です。', accentTip: '複数形озёра。', level: 'A2' },
      { ru: 'лес', kana: 'リェース', jp: '森、森林', pos: '名詞', gender: '男', pluralForm: 'леса́', category: '自然', exampleRu: 'В лесу́ мно́го птиц.', exampleJp: '森にはたくさんの鳥がいる。', accentTip: '第2前置格в лесу́。', level: 'A2' },
      { ru: 'гора́', kana: 'ガラ', jp: '山', pos: '名詞', gender: '女', pluralForm: 'го́ры', category: '自然', exampleRu: 'Ура́льские го́ры.', exampleJp: 'ウラル山脈。', accentTip: '対格го́ру。複数形го́ры。', level: 'A2' }
    ]
  },
  // Set 70
  {
    title: '地形と植物',
    theme: '風景と自然界',
    words: [
      { ru: 'бе́рег', kana: 'ビェーリェク', jp: '岸、河岸、海岸', pos: '名詞', gender: '男', pluralForm: 'берега́', category: '自然', exampleRu: 'На берегу́ ре́ки.', exampleJp: '川岸で(第2前置格на берегу́)。', accentTip: '第2前置格на берегу́。語末гは[к]。', level: 'A2' },
      { ru: 'о́стров', kana: 'オーストロフ', jp: '島', pos: '名詞', gender: '男', pluralForm: 'острова́', category: '自然', exampleRu: 'О́стров Сахали́н.', exampleJp: 'サハリン島。前置詞на(на о́строве)。', accentTip: '複数形острова́。語末вは[ф]。', level: 'A2' },
      { ru: 'де́рево', kana: 'ジェーリェヴァ', jp: '木、樹木', pos: '名詞', gender: '中', pluralForm: 'дере́вья', category: '植物', exampleRu: 'Высо́кое де́рево.', exampleJp: '高い木。複数形дере́вья。', accentTip: '複数形不規則дере́вья。', level: 'A2' },
      { ru: 'берёза', kana: 'ビりョーザ', jp: '白樺 (ロシアを象徴する樹)', pos: '名詞', gender: '女', pluralForm: 'берёзы', category: '植物', exampleRu: 'Ру́сская берёза.', exampleJp: 'ロシアの白樺。', accentTip: 'ёにアクセント。', level: 'A2' },
      { ru: 'цвето́к', kana: 'ツヴィトーク', jp: '花', pos: '名詞', gender: '男', pluralForm: 'цветы́', category: '植物', exampleRu: 'Краси́вые цветы́.', exampleJp: '美しい花々。複数形цветы́。', accentTip: '複数形はцветы́(出没母音)。', level: 'A2' }
    ]
  },
  // Set 71
  {
    title: '動物とペット',
    theme: '動物界',
    words: [
      { ru: 'соба́ка', kana: 'サバーカ', jp: '犬', pos: '名詞', gender: '女', pluralForm: 'соба́ки', category: '動物', exampleRu: 'Моя́ соба́ка гуля́ет.', exampleJp: '私の犬が散歩している。', accentTip: '活動体名詞。複数対格соба́к。', level: 'A2' },
      { ru: 'кот', kana: 'コート', jp: '雄ネコ、ネコ', pos: '名詞', gender: '男', pluralForm: 'коты́', category: '動物', exampleRu: 'Чёрный кот.', exampleJp: '黒猫。', accentTip: '活動体。', level: 'A2' },
      { ru: 'ко́шка', kana: 'コーシュカ', jp: '雌ネコ、ネコ一般', pos: '名詞', gender: '女', pluralForm: 'ко́шки', category: '動物', exampleRu: 'Ко́шка спит на дива́не.', exampleJp: '猫がソファーで寝ている。', accentTip: '複数生格ко́шек(出没母音)。', level: 'A2' },
      { ru: 'пти́ца', kana: 'プチーツァ', jp: '鳥', pos: '名詞', gender: '女', pluralForm: 'пти́цы', category: '動物', exampleRu: 'Пти́цы летя́т на юг.', exampleJp: '鳥たちが南へ飛んでいる。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'ры́ба', kana: 'ルィーバ', jp: '魚', pos: '名詞', gender: '女', pluralForm: 'ры́бы', category: '動物', exampleRu: 'Лови́ть ры́бу.', exampleJp: '魚を釣る。', accentTip: '生きている魚は活動体。', level: 'A2' }
    ]
  },
  // Set 72
  {
    title: '天候・気象・状態',
    theme: '天候',
    words: [
      { ru: 'пого́да', kana: 'パゴーダ', jp: '天気、天候', pos: '名詞', gender: '女', category: '天候', exampleRu: 'Кака́я сего́дня пого́да?', exampleJp: '今日の天気はどうですか？', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'не́бо', kana: 'ニェーバ', jp: '空', pos: '名詞', gender: '中', category: '自然', exampleRu: 'Голубо́е не́бо.', exampleJp: '青い空。複数形небеса́。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'о́блако', kana: 'オーブラカ', jp: '雲', pos: '名詞', gender: '中', pluralForm: 'облака́', category: '天候', exampleRu: 'Бе́лое о́блако.', exampleJp: '白い雲。複数形облака́。', accentTip: '複数形は語尾移動(облака́)。', level: 'A2' },
      { ru: 'моро́з', kana: 'マローズ', jp: '厳しい寒さ、霜、氷点下の寒気', pos: '名詞', gender: '男', category: '天候', exampleRu: 'Моро́з и со́лнце.', exampleJp: '寒気と太陽(プーシキンの詩)。', accentTip: '語末зは[с]に無声化。', level: 'A2' },
      { ru: 'теплота́', kana: 'チプラター', jp: '暖かさ、温もり', pos: '名詞', gender: '女', category: '性質', exampleRu: 'Душе́вная теплота́.', exampleJp: '心の温もり。', accentTip: 'а́にアクセント。', level: 'A2' }
    ]
  },
  // Set 73
  {
    title: '無人称述語 (気温・気候)',
    theme: '無人称構文・環境',
    words: [
      { ru: 'хо́лодно', kana: 'ホーラドナ', jp: '寒い (無人称述語)', pos: '副詞', caseGovernance: '〔与格〕にとって', category: '無人称', exampleRu: 'Мне хо́лодно.', exampleJp: '私は寒いです(与格主語)。', accentTip: '過去形бы́ло хо́лодно。', level: 'A2' },
      { ru: 'тепло́', kana: 'チプロー', jp: '暖かい (無人称述語)', pos: '副詞', category: '無人称', exampleRu: 'Сего́дня о́чень тепло́.', exampleJp: '今日はとても暖かい。', accentTip: '語尾о́にアクセント。', level: 'A2' },
      { ru: 'жа́рко', kana: 'ジャールカ', jp: '暑い (無人称述語)', pos: '副詞', category: '無人称', exampleRu: 'Ле́том здесь жа́рко.', exampleJp: '夏はここが暑い。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'прохла́дно', kana: 'プラフラーロナ', jp: '涼しい (無人称述語)', pos: '副詞', category: '無人称', exampleRu: 'О́сенью прохла́дно.', exampleJp: '秋は涼しい。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'ду́шно', kana: 'ドゥーシナ', jp: '息苦しい、蒸し暑い (無人称述語)', pos: '副詞', category: '無人称', exampleRu: 'В ко́мнате ду́шно, откро́йте окно́.', exampleJp: '部屋が息苦しいので窓を開けてください。', accentTip: 'у́にアクセント。', level: 'A2' }
    ]
  },
  // Set 74
  {
    title: '無人称述語 (心理・感情)',
    theme: '無人称構文・心理',
    words: [
      { ru: 'интере́сно', kana: 'インチェリェースナ', jp: 'おもしろい、興味深い (無人称)', pos: '副詞', category: '無人称', exampleRu: 'Мне о́чень интере́сно учи́ться.', exampleJp: '勉強するのがとてもおもしろいです。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'ве́село', kana: 'ヴェースィラ', jp: '楽しい、陽気だ (無人称)', pos: '副詞', category: '無人称', exampleRu: 'Нам бы́ло ве́село.', exampleJp: '私たちは楽しかった(過去形)。', accentTip: '最初のе́にアクセント。', level: 'A2' },
      { ru: 'ску́чно', kana: 'スクーシナ', jp: '退屈だ (無人称)', pos: '副詞', category: '無人称', exampleRu: 'Ему́ ску́чно до́ма.', exampleJp: '彼は家で退屈している。', accentTip: 'чнは[шн]と発音[スクーシナ]。', level: 'A2' },
      { ru: 'гру́стно', kana: 'グルーストナ', jp: '悲しい、物悲しい (無人称)', pos: '副詞', category: '無人称', exampleRu: 'Мне гру́стно без тебя́.', exampleJp: '君がいなくて寂しい。тは脱落。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'жаль', kana: 'ジャーリ', jp: '残念だ、気の毒だ (無人称述語)', pos: '述語', category: '無人称', exampleRu: 'О́чень жаль!', exampleJp: 'とても残念です！', accentTip: '不変化述語。', level: 'A2' }
    ]
  },
  // Set 75
  {
    title: '助動詞的無人称述語 (必要・可能・禁止)',
    theme: 'モダリティ表現',
    words: [
      { ru: 'на́до', kana: 'ナーダ', jp: '〜しなければならない、必要がある', pos: '副詞', caseGovernance: '〔与格〕+ 不定形', category: 'モダリティ', exampleRu: 'Мне на́до идти́.', exampleJp: '私はもう行かなければなりません。', accentTip: '過去はна́до бы́ло。', level: 'A2' },
      { ru: 'ну́жно', kana: 'ヌージュナ', jp: '〜する必要がある、必須だ', pos: '副詞', caseGovernance: '〔与格〕+ 不定形', category: 'モダリティ', exampleRu: 'Вам ну́жно отдохну́ть.', exampleJp: 'あなたは休む必要があります。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'мо́жно', kana: 'モージナ', jp: '〜してもよい (許可)、〜できる (可能)', pos: '副詞', caseGovernance: '+ 不定形', category: 'モダリティ', exampleRu: 'Мо́жно войти́?', exampleJp: '入ってもよろしいですか？', accentTip: '許可を求める定番表現。', level: 'A2' },
      { ru: 'нельзя́', kana: 'ニリズィヤー', jp: '〜してはならない (禁止)、〜できない (不可能)', pos: '副詞', caseGovernance: '+ 不定形', category: 'モダリティ', exampleRu: 'Здесь нельзя́ кури́ть.', exampleJp: 'ここでは喫煙してはいけません。', accentTip: '不完了体と結合で禁止、完了体で不可能。', level: 'A2' },
      { ru: 'пора́', kana: 'パラー', jp: '〜する時間だ、潮時だ', pos: '述語', caseGovernance: '+ 不定形', category: 'モダリティ', exampleRu: 'Пора́ домо́й!', exampleJp: '家に帰る時間だ！', accentTip: 'а́にアクセント。', level: 'A2' }
    ]
  },
  // Set 76
  {
    title: '東西南北と方角',
    theme: '地理と方位',
    words: [
      { ru: 'се́вер', kana: 'スィエーヴィル', jp: '北', pos: '名詞', gender: '男', category: '方位', exampleRu: 'На се́вере Росси́и.', exampleJp: 'ロシアの北部で(на се́вере)。', accentTip: '前置詞наを使う。', level: 'A2' },
      { ru: 'юг', kana: 'ユーク', jp: '南', pos: '名詞', gender: '男', category: '方位', exampleRu: 'Мы е́дем на юг.', exampleJp: '私たちは南へ行く(на юг)。', accentTip: '語末гは[к]に無声化。', level: 'A2' },
      { ru: 'восто́к', kana: 'ヴァストーク', jp: '東', pos: '名詞', gender: '男', category: '方位', exampleRu: 'Да́льний Восто́к.', exampleJp: '極東。', accentTip: '前置格на восто́ке。', level: 'A2' },
      { ru: 'за́пад', kana: 'ザーパト', jp: '西', pos: '名詞', gender: '男', category: '方位', exampleRu: 'На за́паде.', exampleJp: '西部で。語末дは[т]。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'страна́', kana: 'ストラナー', jp: '国、国家', pos: '名詞', gender: '女', pluralForm: 'стра́ны', category: '地理', exampleRu: 'Больша́я страна́.', exampleJp: '大きな国。複数形стра́ны。', accentTip: '複数形は頭移動(стра́ны)。', level: 'A2' }
    ]
  },
  // Set 77
  {
    title: '地域と行政区分',
    theme: '地域社会',
    words: [
      { ru: 'райо́н', kana: 'ライオーン', jp: '地区、地域、行政区', pos: '名詞', gender: '男', pluralForm: 'райо́ны', category: '地理', exampleRu: 'Спа́льный райо́н.', exampleJp: 'ベッドタウン(住宅地区)。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'дере́вня', kana: 'ヂリェーヴニャ', jp: '村、農村、田舎', pos: '名詞', gender: '女', pluralForm: 'дере́вни', category: '地理', exampleRu: 'Жить в дере́вне.', exampleJp: '田舎で暮らす。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'о́бласть', kana: 'オブラスチ', jp: '州、地方、領域', pos: '名詞', gender: '女', pluralForm: 'о́бласти', category: '行政', exampleRu: 'Моско́вская о́бласть.', exampleJp: 'モスクワ州。女性名詞。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'грани́ца', kana: 'グラニーツァ', jp: '国境、境界', pos: '名詞', gender: '女', pluralForm: 'грани́цы', category: '地理', exampleRu: 'Перейти́ грани́цу.', exampleJp: '国境を越える。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'за грани́цей', kana: 'ザ グラニーツェイ', jp: '外国で、海外で', pos: '成句', category: '地理', exampleRu: 'Он рабо́тает за грани́цей.', exampleJp: '彼は海外で働いている(за+造格)。', accentTip: '海外へ向かうときはза грани́цу(対格)。', level: 'A2' }
    ]
  },
  // Set 78
  {
    title: '衣類と身の回り品',
    theme: '服装',
    words: [
      { ru: 'пальто́', kana: 'パリトー', jp: 'コート、外套', pos: '名詞', gender: '中', category: '衣類', exampleRu: 'Зи́мнее пальто́.', exampleJp: '冬のコート。不変化名詞。', accentTip: '中性不変化名詞。', level: 'A2' },
      { ru: 'костю́м', kana: 'カスチューム', jp: 'スーツ、衣装', pos: '名詞', gender: '男', pluralForm: 'костю́мы', category: '衣類', exampleRu: 'Мужско́й костю́м.', exampleJp: '紳士服スーツ。', accentTip: 'ю́にアクセント。', level: 'A2' },
      { ru: 'ша́пка', kana: 'シャープカ', jp: '帽子(ロシア風の毛皮帽など)', pos: '名詞', gender: '女', pluralForm: 'ша́пки', category: '衣類', exampleRu: 'Тёплая ша́пка.', exampleJp: '暖かい帽子。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'пла́тье', kana: 'プラーチイェ', jp: 'ワンピース、ドレス', pos: '名詞', gender: '中', pluralForm: 'пла́тья', category: '衣類', exampleRu: 'Краси́вое пла́тье.', exampleJp: '美しいワンピース。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'руба́шка', kana: 'ルバーシュカ', jp: 'ワイシャツ、シャツ', pos: '名詞', gender: '女', pluralForm: 'руба́шки', category: '衣類', exampleRu: 'Бе́лая руба́шка.', exampleJp: '白いワイシャツ。', accentTip: 'а́にアクセント。', level: 'A2' }
    ]
  },
  // Set 79
  {
    title: '下肢・履物・アクセサリ',
    theme: '装飾と履物',
    words: [
      { ru: 'брю́ки', kana: 'ブリューキ', jp: 'ズボン、パンツ (複数専用)', pos: '名詞', gender: '複数', category: '衣類', exampleRu: 'Чёрные брю́ки.', exampleJp: '黒のズボン。複数形のみ。', accentTip: 'ю́にアクセント。', level: 'A2' },
      { ru: 'джи́нсы', kana: 'ジーンスィ', jp: 'ジーンズ (複数専用)', pos: '名詞', gender: '複数', category: '衣類', exampleRu: 'Си́ние джи́нсы.', exampleJp: 'ブルージーンズ。複数形のみ。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'очки́', kana: 'アチキー', jp: '眼鏡 (複数専用)', pos: '名詞', gender: '複数', category: '装飾', exampleRu: 'Солнцезащи́тные очки́.', exampleJp: 'サングラス。複数形のみ。', accentTip: '複数生格はочко́в。', level: 'A2' },
      { ru: 'часы́', kana: 'チャスィー', jp: '時計 (複数専用)', pos: '名詞', gender: '複数', category: '装飾', exampleRu: 'Нару́чные часы́.', exampleJp: '腕時計。複数形のみ。', accentTip: '「時間」の単数часと区別。', level: 'A2' },
      { ru: 'зонт', kana: 'ゾーント', jp: '傘', pos: '名詞', gender: '男', pluralForm: 'зонты́', category: '日用品', exampleRu: 'Взять зонт.', exampleJp: '傘を持っていく。', accentTip: '指小形зо́нтик。', level: 'A2' }
    ]
  },
  // Set 80
  {
    title: 'Unit 4 総合確認語彙',
    theme: 'A2中核マスター語彙',
    words: [
      { ru: 'отку́да', kana: 'アトクーダ', jp: 'どこから (from where)', pos: '副詞', category: '疑問詞', exampleRu: 'Отку́да вы прие́хали?', exampleJp: 'どちらからいらっしゃいましたか？', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'отсю́да', kana: 'アッスューダ', jp: 'ここから (from here)', pos: '副詞', category: '指示詞', exampleRu: 'Отсю́да до вокза́ла два киломе́тра.', exampleJp: 'ここから駅まで2キロです。', accentTip: 'ю́にアクセント。', level: 'A2' },
      { ru: 'отту́да', kana: 'アットゥーダ', jp: 'あそこから (from there)', pos: '副詞', category: '指示詞', exampleRu: 'Он пришёл отту́да.', exampleJp: '彼はあそこから歩いて来た。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'наконе́ц', kana: 'ナカニェーツ', jp: 'ついに、とうとう (finally)', pos: '副詞', category: '時間', exampleRu: 'Наконе́ц пришёл по́езд!', exampleJp: 'ついに列車が到着した！', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'вдруг', kana: 'フドルーク', jp: '突然、いきなり (suddenly)', pos: '副詞', category: '様態', exampleRu: 'Вдруг пошёл дождь.', exampleJp: '突然雨が降り出した。', accentTip: '語末гは[к]。', level: 'A2' }
    ]
  }
];

export const unit4Sets: WordSet[] = rawUnit4Sets.map((raw, idx) =>
  buildWordSet(idx + 61, 4, idx + 1, raw.title, raw.theme, raw.words)
);
