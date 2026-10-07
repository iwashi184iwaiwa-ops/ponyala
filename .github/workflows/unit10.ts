import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 10: Sets 181-200 (20 sets × 5 words = 100 authentic words, B1 level)
const rawUnit10Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 181
  {
    title: '富貴と貧困・深度の対比',
    theme: '状態と深度の形容詞',
    words: [
      { ru: 'бога́тый', kana: 'バガーティ', jp: '裕福な、豊かな、富んだ', pos: '形容詞', exampleRu: 'Бога́тая культу́ра.', exampleJp: '豊かな文化。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'бе́дный', kana: 'ビエードヌィ', jp: '貧しい、かわいそうな、哀れな', pos: '形容詞', exampleRu: 'Бе́дный ребёнок.', exampleJp: 'かわいそうな子供。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'чужо́й', kana: 'チュジョーイ', jp: '他人の、見知らぬ、異国の', pos: '形容詞', exampleRu: 'Чужо́й го́род.', exampleJp: '見知らぬ街（他人の街）。', accentTip: '語尾アクセント。', level: 'B1' },
      { ru: 'глубо́кий', kana: 'グルボーキー', jp: '深い', pos: '形容詞', exampleRu: 'Глубо́кое о́зеро Байка́л.', exampleJp: '深いバイカル湖。', accentTip: 'о́にアクセント。比較級глу́бже。', level: 'B1' },
      { ru: 'ме́лкий', kana: 'ミエールキー', jp: '浅い、細かい、小規模な', pos: '形容詞', exampleRu: 'Ме́лкая река́.', exampleJp: '浅い川。', accentTip: 'е́にアクセント。比較級ме́льче。', level: 'B1' },
    ]
  },
  // Set 182
  {
    title: '速度・寸法・幅の対照',
    theme: '寸法・速度の形容詞',
    words: [
      { ru: 'ско́рый', kana: 'スコーるィ', jp: '急ぎの、速やかな、急行の', pos: '形容詞', exampleRu: 'Ско́рый по́езд в Петербу́рг.', exampleJp: 'ペテルブルク行きの急行列車。', accentTip: 'о́にアクセント。Ско́рая по́мощь(救急車)。', level: 'B1' },
      { ru: 'пла́вный', kana: 'プラーヴヌィ', jp: '滑らかな、ゆったりとした、淀みのない', pos: '形容詞', exampleRu: 'Пла́вное движе́ние танцо́ра.', exampleJp: 'ダンサーの滑らかな動き。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'ни́зкий', kana: 'ニースキー', jp: '低い', pos: '形容詞', exampleRu: 'Ни́зкая цена́.', exampleJp: '安い価格（低い値段）。', accentTip: 'и́にアクセント。比較級ни́же。', level: 'B1' },
      { ru: 'у́зкий', kana: 'ウースキー', jp: '狭い、細い', pos: '形容詞', exampleRu: 'У́зкая у́лица.', exampleJp: '狭い通り。', accentTip: 'у́にアクセント。比較級у́же。', level: 'B1' },
      { ru: 'широ́кий', kana: 'シローキー', jp: '広い、幅の広い', pos: '形容詞', exampleRu: 'Широ́кая река́ Во́лга.', exampleJp: '川幅の広いボルガ川。', accentTip: 'о́にアクセント。比較級ши́ре。', level: 'B1' },
    ]
  },
  // Set 183
  {
    title: '温度・重量・手触り',
    theme: '物理的感触の形容詞',
    words: [
      { ru: 'ледяно́й', kana: 'リジノーイ', jp: '氷のような、極寒の、冷え切った', pos: '形容詞', exampleRu: 'Ледяно́й ве́тер с се́вера.', exampleJp: '北からの氷のような風。', accentTip: '語尾アクセント(ледяна́я, ледяно́е)。', level: 'B1' },
      { ru: 'тяжёлый', kana: 'チジョールィ', jp: '重い、辛い、厳しい', pos: '形容詞', exampleRu: 'Тяжёлый чемода́н.', exampleJp: '重いスーツケース。', accentTip: 'ёにアクセント。比較級тяжеле́е。', level: 'B1' },
      { ru: 'хру́пкий', kana: 'フループキー', jp: '脆い、壊れやすい、きゃしゃな', pos: '形容詞', exampleRu: 'Хру́пкое стекло́.', exampleJp: '割れやすいガラス。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'твёрдый', kana: 'トヴョールドゥィ', jp: '硬い、断固たる', pos: '形容詞', exampleRu: 'Твёрдый сыр.', exampleJp: 'ハード系チーズ（硬いチーズ）。', accentTip: 'ёにアクセント。比較級твёрже。', level: 'B1' },
      { ru: 'мя́гкий', kana: 'ミヤーフキー', jp: '柔らかい、穏やかな', pos: '形容詞', exampleRu: 'Мя́гкий хлеб.', exampleJp: 'ふんわりと柔らかいパン。', accentTip: 'гは無声化[х]。比較級мя́гче。', level: 'B1' },
    ]
  },
  // Set 184
  {
    title: '人柄・感情・気質',
    theme: '性格と気質',
    words: [
      { ru: 'злой', kana: 'ズローイ', jp: '意地悪な、怒った、凶暴な', pos: '形容詞', exampleRu: 'Злая соба́ка.', exampleJp: '凶暴な犬（猛犬）。', accentTip: '語尾アクセント。', level: 'B1' },
      { ru: 'весёлый', kana: 'ヴィスョールィ', jp: '陽気な、愉快な、楽しい', pos: '形容詞', exampleRu: 'Весёлая кома́нда.', exampleJp: '陽気な仲間たち。', accentTip: 'ёにアクセント。短語尾ве́сел, весела́。', level: 'B1' },
      { ru: 'гру́стный', kana: 'グルーストヌィ', jp: '悲しい、物憂げな', pos: '形容詞', exampleRu: 'Гру́стный взгля́д.', exampleJp: '悲しげなまなざし。', accentTip: 'тは発音されない[grúsnyj]。', level: 'B1' },
      { ru: 'споко́йный', kana: 'スパコーイヌィ', jp: '落ち着いた、穏やかな、静かな', pos: '形容詞', exampleRu: 'Споко́йной но́чи!', exampleJp: 'おやすみなさい！（安らかな夜を）', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'жесто́кий', kana: 'ジストーキー', jp: '残酷な、無慈悲な、手厳しい', pos: '形容詞', exampleRu: 'Жесто́кий моро́з.', exampleJp: '身を切るような厳しい寒さ。', accentTip: 'о́にアクセント。', level: 'B1' },
    ]
  },
  // Set 185
  {
    title: '知性・明晰さ・的確さ',
    theme: '理解力と正確さ',
    words: [
      { ru: 'у́мный', kana: 'ウームヌィ', jp: '賢い、利口な、頭のよい', pos: '形容詞', exampleRu: 'У́мный студе́нт бы́стро понима́ет.', exampleJp: '賢い学生はすぐに理解する。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'глу́пый', kana: 'グループィ', jp: '愚かな、馬鹿げた', pos: '形容詞', exampleRu: 'Глу́пый посту́пок.', exampleJp: '愚かな行動。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'я́сный', kana: 'ヤースヌィ', jp: '明瞭な、晴れた、澄んだ', pos: '形容詞', exampleRu: 'Я́сная пого́да.', exampleJp: '晴れ渡った天気（ヤースナヤ）。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'поня́тный', kana: 'パニャートヌィ', jp: '分かりやすい、明快な', pos: '形容詞', exampleRu: 'Всё ста́ло поня́тно.', exampleJp: 'すべてが理解できた（明確になった）。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'то́чный', kana: 'トーチュヌィ', jp: '正確な、的確な、精密な', pos: '形容詞', exampleRu: 'То́чное вре́мя.', exampleJp: '正確な時間。', accentTip: 'о́にアクセント。', level: 'B1' },
    ]
  },
  // Set 186
  {
    title: '色彩の基礎語彙',
    theme: '色の表現',
    words: [
      { ru: 'голубо́й', kana: 'ガルボーイ', jp: '水色の、青空色の、淡い青の', pos: '形容詞', exampleRu: 'Голубо́е я́сное не́бо.', exampleJp: '澄み渡った水色の空。', accentTip: '語尾アクセント(голуба́я, голубо́е)。', level: 'B1' },
      { ru: 'кори́чневый', kana: 'カリーチニヴュィ', jp: '茶色の、褐色の', pos: '形容詞', exampleRu: 'Кори́чневый ко́жаный реме́нь.', exampleJp: '茶色の革ベルト。', accentTip: 'и́にアクセント。чнは[шн]または[чн]。', level: 'B1' },
      { ru: 'жёлтый', kana: 'ジョールトゥィ', jp: '黄色い', pos: '形容詞', exampleRu: 'Жёлтые осе́нние ли́стья.', exampleJp: '黄色い秋の落ち葉。', accentTip: 'ёにアクセント。', level: 'B1' },
      { ru: 'зелёный', kana: 'ズィリョーヌィ', jp: '緑の、青々とした', pos: '形容詞', exampleRu: 'Зелёный чай.', exampleJp: '緑茶。', accentTip: 'ёにアクセント。', level: 'B1' },
      { ru: 'се́рый', kana: 'スィエールィ', jp: '灰色の、くすんだ', pos: '形容詞', exampleRu: 'Се́рое не́бо.', exampleJp: '曇り空（灰色の空）。', accentTip: 'е́にアクセント。', level: 'B1' },
    ]
  },
  // Set 187
  {
    title: '構造と新鮮さの性状',
    theme: '性質・性状の形容詞',
    words: [
      { ru: 'скро́мный', kana: 'スクロームヌィ', jp: '控えめな、素朴な、慎み深い', pos: '形容詞', exampleRu: 'Скро́мный челове́к.', exampleJp: '謙虚な人。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'запу́танный', kana: 'ザプータンヌィ', jp: '入り組んだ、複雑な、もつれた', pos: '形容詞', exampleRu: 'Запу́танная исто́рия.', exampleJp: '入り組んだ経緯（複雑な話）。', accentTip: 'у́にアクセント。', level: 'B1' },
      { ru: 'чи́стый', kana: 'チースティ', jp: '清潔な、綺麗な、澄んだ', pos: '形容詞', exampleRu: 'Чи́стый во́здух.', exampleJp: '澄んだ空気。', accentTip: 'и́にアクセント。比較級чи́ще。', level: 'B1' },
      { ru: 'гря́зный', kana: 'グリャーズヌィ', jp: '汚れた、不潔な', pos: '形容詞', exampleRu: 'Гря́зная доро́га.', exampleJp: '泥で汚れた道。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'све́жий', kana: 'スヴィエージ', jp: '新鮮な、清々しい、できたての', pos: '形容詞', exampleRu: 'Све́жий хлеб.', exampleJp: '焼き立ての新鮮なパン。', accentTip: 'е́にアクセント。', level: 'B1' },
    ]
  },
  // Set 188
  {
    title: '生活の基本動作動詞',
    theme: '日常の活動',
    words: [
      { ru: 'броса́ть', kana: 'ブラサーチ', jp: '投げる、やめる、断つ', pos: '動詞', aspect: '不完了', pairedWord: 'бро́сить', exampleRu: 'Броса́ть мяч.', exampleJp: 'ボールを投げる（禁煙する: бро́сить кури́ть）。', accentTip: '第1変化(броса́ю, броса́ешь)。完了体бро́сить。', level: 'B1' },
      { ru: 'теря́ть', kana: 'チリャーチ', jp: '失う、紛失する、なくす', pos: '動詞', aspect: '不完了', pairedWord: 'потеря́ть', exampleRu: 'Не теря́й вре́мя!', exampleJp: '時間を無駄にするな！', accentTip: '第1変化(теря́ю, теря́ешь)。完了体потеря́ть。', level: 'B1' },
      { ru: 'ку́шать', kana: 'クーシャチ', jp: '召し上がる、食べる (口語・親愛)', pos: '動詞', aspect: '不完了', pairedWord: 'поку́шать', exampleRu: 'Сади́сь ку́шать!', exampleJp: 'ご飯を食べにお座り！', accentTip: '第1変化(ку́шаю)。通常はестьを用いる。', level: 'B1' },
      { ru: 'плати́ть', kana: 'プラチーチ', jp: '支払う、払う', pos: '動詞', aspect: '不完了', pairedWord: 'заплати́ть', exampleRu: 'Плати́ть кар́той.', exampleJp: 'カードで支払う。', accentTip: '第2変化(плачу́, пла́тишь: 子音交替т→ч)。', level: 'B1' },
      { ru: 'повторя́ть', kana: 'パフタリャーチ', jp: '繰り返す、復習する', pos: '動詞', aspect: '不完了', pairedWord: 'повтори́ть', exampleRu: 'Повторя́ть но́вые слова́.', exampleJp: '新しい単語を復習する。', accentTip: '第1変化(повторя́ю)。完了体повтори́ть(第2変化)。', level: 'B1' },
    ]
  },
  // Set 189
  {
    title: '感情・情緒の表出動詞',
    theme: '喜怒哀楽と希望',
    words: [
      { ru: 'ра́доваться', kana: 'ラードヴァッツァ', jp: '喜ぶ、嬉しがる (+与格)', pos: '動詞', aspect: '不完了', pairedWord: 'обра́доваться', exampleRu: 'Мы ра́дуемся успе́ху.', exampleJp: '私たちは成功を喜んでいる。', accentTip: '第1変化-ова-→-у- (ра́дуюсь, ра́дуешься)。', level: 'B1' },
      { ru: 'смея́ться', kana: 'スミヤーッツァ', jp: '笑う、微笑む', pos: '動詞', aspect: '不完了', pairedWord: 'посмея́ться', exampleRu: 'Де́ти ве́село смею́тся.', exampleJp: '子供たちが楽しそうに笑っている。', accentTip: '第1変化(смею́сь, смеёшься)。', level: 'B1' },
      { ru: 'пла́кать', kana: 'プラーカチ', jp: '泣く', pos: '動詞', aspect: '不完了', pairedWord: 'запла́кать', exampleRu: 'Не плачь, всё бу́дет хорошо́.', exampleJp: '泣かないで、すべてうまくいくから。', accentTip: '第1変化子音交替(пла́чу, пла́чешь: к→ч)。', level: 'B1' },
      { ru: 'наде́яться', kana: 'ナジェーヤッツァ', jp: '希望する、望みをかける、期待する', pos: '動詞', aspect: '不完了', exampleRu: 'Я наде́юсь на лу́чшее.', exampleJp: '私は最善を期待している。', accentTip: '第1変化(наде́юсь, наде́ешься)。', level: 'B1' },
      { ru: 'жа́ловаться', kana: 'ジャーラヴァッツァ', jp: '不平・苦情を言う、訴える', pos: '動詞', aspect: '不完了', pairedWord: 'пожа́ловаться', exampleRu: 'Пацие́нт жа́луется на боль.', exampleJp: '患者が痛みを訴えている。', accentTip: '第1変化-ова-→-у-(жа́луюсь, жа́луешься)。', level: 'B1' },
    ]
  },
  // Set 190
  {
    title: '依頼・議論・感謝の動詞',
    theme: '対人コミュニケーション動詞',
    words: [
      { ru: 'проси́ть', kana: 'プラシーツィ', jp: '頼む、求める、請う', pos: '動詞', aspect: '不完了', pairedWord: 'попроси́ть', exampleRu: 'Проси́ть о по́мощи.', exampleJp: '助けを求める。', accentTip: '第2変化(прошу́, про́сишь: с→ш交替)。', level: 'B1' },
      { ru: 'согласи́ться', kana: 'サグラシーツァ', jp: '同意する、承諾する (完了体)', pos: '動詞', aspect: '完了', pairedWord: 'соглаша́ться', exampleRu: 'Я согла́сен с ва́ми.', exampleJp: '私はあなたに同意します（短語尾согла́сен）。', accentTip: '第2変化(соглашу́сь, согласи́шься)。', level: 'B1' },
      { ru: 'спо́рить', kana: 'スポーリチ', jp: '議論する、言い争う、賭ける', pos: '動詞', aspect: '不完了', pairedWord: 'поспо́рить', exampleRu: 'Не сто́ит спо́рить.', exampleJp: '口論する必要はない。', accentTip: '第2変化(спо́рю, спо́ришь)。', level: 'B1' },
      { ru: 'обеща́ть', kana: 'アビシャーチ', jp: '約束する', pos: '動詞', aspect: '不完了', exampleRu: 'Он обеща́л прийти́.', exampleJp: '彼は来ると約束した。', accentTip: '第1変化(обеща́ю)。完了・不完了両用。', level: 'B1' },
      { ru: 'благодари́ть', kana: 'ブラガダリーチ', jp: '感謝する、お礼を言う', pos: '動詞', aspect: '不完了', pairedWord: 'поблагодари́ть', exampleRu: 'Благодарю́ вас от все́й души́.', exampleJp: '心からあなたに感謝します。', accentTip: '第2変化(благодарю́, благодари́шь)。', level: 'B1' },
    ]
  },
  // Set 191
  {
    title: '点検・撮影・余暇の動作',
    theme: '検査・感覚・休暇',
    words: [
      { ru: 'проверя́ть', kana: 'プラヴィリャーチ', jp: '確かめる、検査する、点検する', pos: '動詞', aspect: '不完了', pairedWord: 'прове́рить', exampleRu: 'Учи́тель проверя́ет тетра́ди.', exampleJp: '先生がノートを点検・添削している。', accentTip: '第1変化(проверя́ю)。完了体прове́рить(第2変化)。', level: 'B1' },
      { ru: 'чу́вствовать', kana: 'チューストヴァヴァチ', jp: '感じる、気分が〜である', pos: '動詞', aspect: '不完了', pairedWord: 'почу́вствовать', exampleRu: 'Как вы себя́ чу́вствуете?', exampleJp: 'ご気分はいかがですか？', accentTip: '最初のвは脱落[tʃ’ústvəvət’]。-ова-→-у-変化。', level: 'B1' },
      { ru: 'фотографи́ровать', kana: 'ファタグラフィーラヴァチ', jp: '写真を撮る', pos: '動詞', aspect: '不完了', pairedWord: 'сфотографи́ровать', exampleRu: 'Фотографи́ровать па́мятник.', exampleJp: '記念碑の写真を撮る。', accentTip: '-ова-→-у-変化(фотографи́рую)。', level: 'B1' },
      { ru: 'купа́ться', kana: 'クパーッツァ', jp: '水浴びする、入浴する、海水浴する', pos: '動詞', aspect: '不完了', pairedWord: 'искупа́ться', exampleRu: 'Ле́том купа́ться в реке́.', exampleJp: '夏に川で泳ぐ（水浴びする）。', accentTip: '第1変化(купа́юсь)。', level: 'B1' },
      { ru: 'загора́ть', kana: 'ザガラールチ', jp: '日光浴をする、日焼けする', pos: '動詞', aspect: '不完了', pairedWord: 'загоре́ть', exampleRu: 'Загора́ть на со́лнце на пля́же.', exampleJp: 'ビーチで日光浴をする。', accentTip: '第1変化(загора́ю)。完了体загоре́ть。', level: 'B1' },
    ]
  },
  // Set 192
  {
    title: '偶発・生起・謝罪の動詞',
    theme: '生起と人間的所作',
    words: [
      { ru: 'случа́ться', kana: 'スルチャーッツァ', jp: '起こる、生じる (不完了体)', pos: '動詞', aspect: '不完了', pairedWord: 'случи́ться', exampleRu: 'Что случи́лось?', exampleJp: '何があったの？（どうしたの？）', accentTip: '第1変化(случа́ется)。', level: 'B1' },
      { ru: 'исчеза́ть', kana: 'イスチェザーチ', jp: '消える、見えなくなる', pos: '動詞', aspect: '不完了', pairedWord: 'исче́знуть', exampleRu: 'Тума́н исчеза́ет на со́лнце.', exampleJp: '霧が日光で消え去る。', accentTip: '第1変化(исчеза́ю)。', level: 'B1' },
      { ru: 'появля́ться', kana: 'パヤヴリャーッツァ', jp: '現れる、出現する', pos: '動詞', aspect: '不完了', pairedWord: 'появи́ться', exampleRu: 'На не́бе появи́лась звезда́.', exampleJp: '空に星が現れた。', accentTip: '第1変化(появля́юсь)。', level: 'B1' },
      { ru: 'меня́ться', kana: 'ミニャーッツァ', jp: '変わる、変化する、交換する', pos: '動詞', aspect: '不完了', pairedWord: 'измени́ться', exampleRu: 'Всё меня́ется к лу́чшему.', exampleJp: 'すべてが良い方向へ変わっている。', accentTip: '第1変化(меня́юсь)。', level: 'B1' },
      { ru: 'извиня́ться', kana: 'イズヴィニャーッツァ', jp: '謝る、お詫びする', pos: '動詞', aspect: '不完了', pairedWord: 'извини́ться', exampleRu: 'Извини́те за опозда́ние!', exampleJp: '遅れてすみません！', accentTip: '第1変化(извиня́юсь)。命令形Извини́те!', level: 'B1' },
    ]
  },
  // Set 193
  {
    title: '時間・前後の副詞',
    theme: '時間の副詞',
    words: [
      { ru: 'позавчера́', kana: 'パザフチラール', jp: '一昨日 (おととい)', pos: '副詞', exampleRu: 'Позавчера́ был дождь.', exampleJp: '一昨日は雨だった。', accentTip: '語末а́にアクセント。', level: 'B1' },
      { ru: 'послеза́втра', kana: 'パスリザーフツラ', jp: '明後日 (あさって)', pos: '副詞', exampleRu: 'Уро́к бу́дет послеза́втра.', exampleJp: '授業は明後日行われます。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'зара́нее', kana: 'ザラーニイェ', jp: '前もって、事前に、あらかじめ', pos: '副詞', exampleRu: 'Купи́ть биле́т зара́нее.', exampleJp: '前もって切符を買っておく。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'неда́вно', kana: 'ニダーヴナ', jp: '最近、少し前に、近頃', pos: '副詞', exampleRu: 'Я неда́вно прие́хал в Москву́.', exampleJp: '私は最近モスクワに着いたばかりです。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'накану́не', kana: 'ナカヌーニェ', jp: '前日に、前夜に', pos: '副詞', exampleRu: 'Накану́не пра́здника.', exampleJp: '祝日の前夜に。', accentTip: 'у́にアクセント。', level: 'B1' },
    ]
  },
  // Set 194
  {
    title: '頻度と継続の副詞',
    theme: '頻度・永続の副詞',
    words: [
      { ru: 'постоя́нно', kana: 'パスタヤーンナ', jp: '絶えず、常に、しょっちゅう', pos: '副詞', exampleRu: 'Он постоя́нно чита́ет.', exampleJp: '彼は絶えず読書している。', accentTip: 'я́にアクセント。', level: 'B1' },
      { ru: 'навсегда́', kana: 'ナフスィグダー', jp: '永遠に、永久に', pos: '副詞', exampleRu: 'Оста́ться навсегда́ в па́мяти.', exampleJp: '記憶に永遠に残る。', accentTip: '語末а́にアクセント。', level: 'B1' },
      { ru: 'сно́ва', kana: 'スノーヴァ', jp: '再び、もう一度、また', pos: '副詞', exampleRu: 'Сно́ва пошёл снег.', exampleJp: '再び雪が降り出した。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'ежедне́вно', kana: 'イジジニエーブナ', jp: '毎日、日々', pos: '副詞', exampleRu: 'Занима́ться спо́ртом ежедне́вно.', exampleJp: '毎日スポーツをする。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'регуля́рно', kana: 'リグリャールナ', jp: '定期的に、規則正しく', pos: '副詞', exampleRu: 'Регуля́рно повторя́ть грамма́тику.', exampleJp: '定期的に文法を復習する。', accentTip: 'я́にアクセント。', level: 'B1' },
    ]
  },
  // Set 195
  {
    title: '空間と配置の副詞',
    theme: '位置・方角の副詞',
    words: [
      { ru: 'сле́ва', kana: 'スリェーヴァ', jp: '左に、左側から', pos: '副詞', exampleRu: 'Сле́ва стои́т дива́н.', exampleJp: '左側にソファがある。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'спра́ва', kana: 'スプラーヴァ', jp: '右に、右側から', pos: '副詞', exampleRu: 'Спра́ва от окна́.', exampleJp: '窓の右手に。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'нале́во', kana: 'ナリェーヴァ', jp: '左へ、左折して', pos: '副詞', exampleRu: 'Поверни́те нале́во.', exampleJp: '左へ曲がってください。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'напра́во', kana: 'ナプラーヴァ', jp: '右へ、右折して', pos: '副詞', exampleRu: 'Иди́те напра́во.', exampleJp: '右へ進んでください。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'впереди́', kana: 'フピリジー', jp: '前方に、前の方で', pos: '副詞', exampleRu: 'Впереди́ ви́ден свет.', exampleJp: '前方に光が見える。', accentTip: 'и́にアクセント。', level: 'B1' },
    ]
  },
  // Set 196
  {
    title: '方向と上下のベクトル副詞',
    theme: '移動方向の副詞',
    words: [
      { ru: 'вперёд', kana: 'フピリョート', jp: '前へ、前進して', pos: '副詞', exampleRu: 'Шаг вперёд.', exampleJp: '前への一歩。', accentTip: 'ёにアクセント。語末дは[т]。', level: 'B1' },
      { ru: 'наза́д', kana: 'ナザート', jp: '後ろへ、戻って、〜前 (время тому назад)', pos: '副詞', exampleRu: 'Два дня наза́д.', exampleJp: '2日前（後ろへ）。', accentTip: '語末дは[т]。', level: 'B1' },
      { ru: 'вверх', kana: 'ヴヴィエールフ', jp: '上へ (方向)', pos: '副詞', exampleRu: 'Смотре́ть вверх на не́бо.', exampleJp: '空を上に見上げる。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'вниз', kana: 'ヴニース', jp: '下へ (方向)', pos: '副詞', exampleRu: 'Идти́ вниз по ле́стнице.', exampleJp: '階段を下りて行く。', accentTip: '語末зは[с]。', level: 'B1' },
      { ru: 'наве́рх', kana: 'ナヴィエールフ', jp: '上方へ、2階へ、デッキへ', pos: '副詞', exampleRu: 'Подня́ться наве́рх.', exampleJp: '上へ登る。', accentTip: 'е́にアクセント。', level: 'B1' },
    ]
  },
  // Set 197
  {
    title: '程度と論理関係の副詞',
    theme: '修飾・確信度',
    words: [
      { ru: 'совсе́м', kana: 'サフスィエーム', jp: '全く、すっかり (совсем не: 全然〜ない)', pos: '副詞', exampleRu: 'Я совсе́м забы́л об э́том.', exampleJp: '私はそのことをすっかり忘れていた。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'сли́шком', kana: 'スリーシュカム', jp: 'あまりに〜すぎる、過度に', pos: '副詞', exampleRu: 'Э́то сли́шком до́рого.', exampleJp: 'これは高価すぎます。', accentTip: 'и́にアクセント。', level: 'B1' },
      { ru: 'наве́рное', kana: 'ナヴィエールナイェ', jp: 'たぶん、恐らく、きっと', pos: '副詞', exampleRu: 'Он, наве́рное, уже́ до́ма.', exampleJp: '彼は恐らくもう家にいるだろう。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'осо́бенно', kana: 'アソーベンナ', jp: '特に、とりわけ、格別に', pos: '副詞', exampleRu: 'Осо́бенно краси́во о́сенью.', exampleJp: '秋は格別に美しい。', accentTip: 'о́にアクセント。', level: 'B1' },
      { ru: 'заче́м', kana: 'ザチェーム', jp: '何のために、何の目的で (疑問詞)', pos: '副詞', exampleRu: 'Заче́м ты туда́ идёшь?', exampleJp: '何のためにそこへ行くの？', accentTip: 'е́にアクセント。почему́(理由)と対比。', level: 'B1' },
    ]
  },
  // Set 198
  {
    title: '中欧・西欧の国と人々',
    theme: '国名と国民 (ヨーロッパ)',
    words: [
      { ru: 'Герма́ния', kana: 'ギルマーニヤ', jp: 'ドイツ', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Берли́н – столи́ца Герма́нии.', exampleJp: 'ベルリンはドイツの首都です。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'не́мец', kana: 'ニエーミェツ', jp: 'ドイツ人 (男性)', pos: '名詞', gender: '男', pluralForm: 'не́мцы', category: '人間', exampleRu: 'Он по национа́льности не́мец.', exampleJp: '彼は国籍上ドイツ人です。', accentTip: '女性形не́мка、複数не́мцы。', level: 'B1' },
      { ru: 'Ита́лия', kana: 'イターリヤ', jp: 'イタリア', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Ри́м – столи́ца Ита́лии.', exampleJp: 'ローマはイタリアの首都です。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'италья́нец', kana: 'イタリヤーンニェツ', jp: 'イタリア人 (男性)', pos: '名詞', gender: '男', pluralForm: 'италья́нцы', category: '人間', exampleRu: 'Темпера́ментный италья́нец.', exampleJp: '情熱的なイタリア人。', accentTip: '女性形италья́нка、複数италья́нцы。', level: 'B1' },
      { ru: 'Испа́ния', kana: 'イスパーニヤ', jp: 'スペイン', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Со́лнечная Испа́ния.', exampleJp: '太陽の国スペイン。', accentTip: 'а́にアクセント。', level: 'B1' },
    ]
  },
  // Set 199
  {
    title: '英仏と大西洋の諸国民',
    theme: '国名と国民 (英仏)',
    words: [
      { ru: 'испа́нец', kana: 'イスパーニェツ', jp: 'スペイン人 (男性)', pos: '名詞', gender: '男', pluralForm: 'испа́нцы', category: '人間', exampleRu: 'Гостеприи́мный испа́нец.', exampleJp: '客をもてなすスペイン人。', accentTip: '女性形испа́нка、複数испа́нцы。', level: 'B1' },
      { ru: 'Фра́нция', kana: 'フラーンツィヤ', jp: 'フランス', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Пари́ж – столи́ца Фра́нции.', exampleJp: 'パリはフランスの首都です。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'францу́з', kana: 'フランツース', jp: 'フランス人 (男性)', pos: '名詞', gender: '男', pluralForm: 'францу́зы', category: '人間', exampleRu: 'Ве́жливый францу́з.', exampleJp: '礼儀正しいフランス人。', accentTip: '女性形францу́женка、複数францу́зы。', level: 'B1' },
      { ru: 'А́нглия', kana: 'アーングリヤ', jp: 'イングランド、イギリス', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Ло́ндон нахо́дится в А́нглии.', exampleJp: 'ロンドンはイギリスにある。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'англича́нин', kana: 'アングリチャーニン', jp: 'イギリス人 (男性)', pos: '名詞', gender: '男', pluralForm: 'англича́не', category: '人間', exampleRu: 'Типи́чный англича́нин пьёт чай.', exampleJp: '典型的なイギリス人が紅茶を飲む。', accentTip: '複数形англича́не(-ин脱落)。女性形англича́нка。', level: 'B1' },
    ]
  },
  // Set 200
  {
    title: 'アジアとユーラシアの諸国',
    theme: 'アジアの国と人々',
    words: [
      { ru: 'Кита́й', kana: 'キターイ', jp: '中国', pos: '名詞', gender: '男', category: '地理', exampleRu: 'Пеки́н – столи́ца Кита́я.', exampleJp: '北京は中国の首都です。', accentTip: 'а́にアクセント。', level: 'B1' },
      { ru: 'кита́ец', kana: 'キターイェツ', jp: '中国人 (男性)', pos: '名詞', gender: '男', pluralForm: 'кита́йцы', category: '人間', exampleRu: 'Кита́ец пи́шет иеро́глифы.', exampleJp: '中国人が漢字を書いている。', accentTip: '女性形китая́нка、複数кита́йцы。', level: 'B1' },
      { ru: 'Коре́я', kana: 'カリエーヤ', jp: '韓国、朝鮮半島', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Сеу́л – столи́ца Ю́жной Коре́и.', exampleJp: 'ソウルは韓国の首都です。', accentTip: 'е́にアクセント。', level: 'B1' },
      { ru: 'коре́ец', kana: 'カリエーイェツ', jp: '韓国・朝鮮人 (男性)', pos: '名詞', gender: '男', pluralForm: 'коре́йцы', category: '人間', exampleRu: 'Студе́нт – коре́ец из Сеу́ла.', exampleJp: '学生はソウル出身の韓国人です。', accentTip: '女性形корея́нка、複数коре́йцы。', level: 'B1' },
      { ru: 'И́ндия', kana: 'イーンジヤ', jp: 'インド', pos: '名詞', gender: '女', category: '地理', exampleRu: 'Дре́вняя культу́ра И́ндии.', exampleJp: 'インドの古代文化。', accentTip: 'и́にアクセント。', level: 'B1' },
    ]
  }
];

export const unit10Sets: WordSet[] = rawUnit10Sets.map((s, idx) =>
  buildWordSet(181 + idx, 10, idx + 1, s.title, s.theme, s.words)
);
