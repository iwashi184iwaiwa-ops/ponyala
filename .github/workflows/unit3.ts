import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 3: Sets 41-60 (20 sets × 5 words = 100 authentic words, A2 level)
const rawUnit3Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 41
  {
    title: '友人・仲間・呼称',
    theme: '親交関係',
    words: [
      { ru: 'друг', kana: 'ドゥルーク', jp: '友人、友達(男)', pos: '名詞', gender: '男', pluralForm: 'друзья́', category: '人間関係', exampleRu: 'Э́то мой лу́чший друг.', exampleJp: 'これは私の無二の親友です。', accentTip: '語末гは[к]。複数形друзья́。', level: 'A2' },
      { ru: 'подру́га', kana: 'パドルーガ', jp: '女友だち', pos: '名詞', gender: '女', pluralForm: 'подру́ги', category: '人間関係', exampleRu: 'Она́ моя́ подру́га.', exampleJp: '彼女は私の友人です。', accentTip: 'у́にアクセント。', level: 'A2' },
      { ru: 'това́рищ', kana: 'タヴァーリシシ', jp: '同僚、仲間、同志', pos: '名詞', gender: '男', pluralForm: 'това́рищи', category: '人間関係', exampleRu: 'Шко́льный това́рищ.', exampleJp: '学校の同級生。', accentTip: '造格това́рищем。', level: 'A2' },
      { ru: 'знако́мый', kana: 'ズナコームィ', jp: '知人、知り合い', pos: '名詞', gender: '男', pluralForm: 'знако́мые', category: '人間関係', exampleRu: 'Мой ста́рый знако́мый.', exampleJp: '私の旧知の知り合い。形容詞型名詞。', accentTip: '形容詞と同じ格変化。', level: 'A2' },
      { ru: 'сосе́д', kana: 'サスィエート', jp: '隣人、お隣さん', pos: '名詞', gender: '男', pluralForm: 'сосе́ди', category: '人間関係', exampleRu: 'Наш сосе́д по да́че.', exampleJp: '別荘のお隣さん。複数形сосе́ди。', accentTip: '複数形は軟音-и。', level: 'A2' }
    ]
  },
  // Set 42
  {
    title: '家族と親族の深化',
    theme: '家族の成員',
    words: [
      { ru: 'де́душка', kana: 'ジェードゥシカ', jp: 'おじいさん、祖父', pos: '名詞', gender: '男', pluralForm: 'де́душки', category: '家族', exampleRu: 'Де́душка чита́ет ска́зку.', exampleJp: '祖父はおとぎ話を読んでいる。', accentTip: '男性を指すため男性名詞。', level: 'A2' },
      { ru: 'ба́бушка', kana: 'バーブシカ', jp: 'おばあさん、祖母', pos: '名詞', gender: '女', pluralForm: 'ба́бушки', category: '家族', exampleRu: 'Ба́бушка печёт пирожки́.', exampleJp: '祖母はピロシキを焼いている。', accentTip: '最初のа́にアクセント。', level: 'A2' },
      { ru: 'дя́дя', kana: 'ジャーヂャ', jp: 'おじ、伯父、叔父', pos: '名詞', gender: '男', pluralForm: 'дя́ди', category: '家族', exampleRu: 'Мой дя́дя – инжене́р.', exampleJp: '私の叔父はエンジニアです。', accentTip: '男性名詞。', level: 'A2' },
      { ru: 'тётя', kana: 'チョーチャ', jp: 'おば、伯母、叔母', pos: '名詞', gender: '女', pluralForm: 'тёти', category: '家族', exampleRu: 'Тётя живёт в дере́вне.', exampleJp: '叔母は田舎に住んでいます。', accentTip: 'ёにアクセント。', level: 'A2' },
      { ru: 'внук', kana: 'ヴヌーク', jp: '孫(男子)', pos: '名詞', gender: '男', pluralForm: 'вну́ки', category: '家族', exampleRu: 'Де́душка лю́бит вну́ка.', exampleJp: '祖父は孫息子を愛している。', accentTip: '女子の孫はвну́чка。', level: 'A2' }
    ]
  },
  // Set 43
  {
    title: '年齢と世代',
    theme: '人の発達',
    words: [
      { ru: 'ребёнок', kana: 'リビョーナク', jp: '子ども、幼児', pos: '名詞', gender: '男', pluralForm: 'де́ти', category: '人間', exampleRu: 'Ма́ленький ребёнок спит.', exampleJp: '幼い子どもが眠っている。', accentTip: '複数形は補充形де́ти。', level: 'A2' },
      { ru: 'де́ти', kana: 'ジェーチ', jp: '子どもたち(複数)', pos: '名詞', gender: '複数', category: '人間', exampleRu: 'Де́ти игра́ют во дворе́.', exampleJp: '子どもたちが庭で遊んでいる。', accentTip: '生格де́тей, 与格де́тям, 造格детьми́。', level: 'A2' },
      { ru: 'ма́льчик', kana: 'マールチク', jp: '男の子、少年', pos: '名詞', gender: '男', pluralForm: 'ма́льчики', category: '人間', exampleRu: 'Ма́льчик идёт в шко́лу.', exampleJp: '少年が学校に行く。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'де́вочка', kana: 'ジェーヴァチカ', jp: '女の子、少女', pos: '名詞', gender: '女', pluralForm: 'де́вочки', category: '人間', exampleRu: 'Де́вочка рису́ет цветы́.', exampleJp: '少女が花の絵を描いている。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'де́вушка', kana: 'ジェーヴシカ', jp: '若い女性、娘さん', pos: '名詞', gender: '女', pluralForm: 'де́вушки', category: '人間', exampleRu: 'Краси́вая де́вушка.', exampleJp: '美しい娘さん。未婚女性。', accentTip: 'е́にアクセント。', level: 'A2' }
    ]
  },
  // Set 44
  {
    title: '職業 (医療・技術・学問)',
    theme: '専門職',
    words: [
      { ru: 'врач', kana: 'ヴラーチ', jp: '医師、医者', pos: '名詞', gender: '男', pluralForm: 'врачи́', category: '職業', exampleRu: 'Он рабо́тает врачо́м.', exampleJp: '彼は医師として働いている(述語造格)。', accentTip: '女性医師にもврачを用いる。', level: 'A2' },
      { ru: 'инжене́р', kana: 'インジニェール', jp: 'エンジニア、技師', pos: '名詞', gender: '男', pluralForm: 'инжене́ры', category: '職業', exampleRu: 'Гла́вный инжене́р.', exampleJp: 'チーフエンジニア。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'профе́ссор', kana: 'プラフェースサル', jp: '教授', pos: '名詞', gender: '男', pluralForm: 'профессора́', category: '職業', exampleRu: 'Профе́ссор чита́ет ле́кцию.', exampleJp: '教授が講義を行っている。', accentTip: '複数形はпрофессора́(語尾移動)。', level: 'A2' },
      { ru: 'учёный', kana: 'ウチョーヌィ', jp: '学者、科学者', pos: '名詞', gender: '男', pluralForm: 'учёные', category: '職業', exampleRu: 'Вели́кий ру́сский учёный.', exampleJp: '偉大なロシアの科学者。', accentTip: '形容詞型名詞。', level: 'A2' },
      { ru: 'шофёр', kana: 'シャフョール', jp: '運転手、ドライバー', pos: '名詞', gender: '男', pluralForm: 'шофёры', category: '職業', exampleRu: 'Опытный шофёр.', exampleJp: '経験豊富な運転手。', accentTip: 'ёにアクセント。', level: 'A2' }
    ]
  },
  // Set 45
  {
    title: '文化・芸術の専門家',
    theme: '芸術家',
    words: [
      { ru: 'писа́тель', kana: 'ピサーチェリ', jp: '作家', pos: '名詞', gender: '男', pluralForm: 'писа́тели', category: '芸術', exampleRu: 'Лев Толсто́й – вели́кий писа́тель.', exampleJp: 'レフ・トルストイは偉大な作家です。', accentTip: '女性形はписа́тельница。', level: 'A2' },
      { ru: 'поэ́т', kana: 'パエート', jp: '詩人', pos: '名詞', gender: '男', pluralForm: 'поэ́ты', category: '芸術', exampleRu: 'Алекса́ндр Пу́шкин – люби́мый поэ́т.', exampleJp: 'プーシキンは敬愛される詩人です。', accentTip: 'э́にアクセント。', level: 'A2' },
      { ru: 'худо́жник', kana: 'フドージニク', jp: '画家、美術家', pos: '名詞', gender: '男', pluralForm: 'худо́жники', category: '芸術', exampleRu: 'Худо́жник пи́шет карти́ну.', exampleJp: '画家が絵を描いている。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'музыка́нт', kana: 'ムズィカーント', jp: '音楽家', pos: '名詞', gender: '男', pluralForm: 'музыка́нты', category: '芸術', exampleRu: 'Тала́нтливый музыка́нт.', exampleJp: '才能ある音楽家。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'арти́ст', kana: 'アルチースト', jp: '俳優、芸能人', pos: '名詞', gender: '男', pluralForm: 'арти́сты', category: '芸術', exampleRu: 'Арти́ст Большо́го теа́тра.', exampleJp: 'ボリショイ劇場の俳優。', accentTip: '女性形はарти́стка。', level: 'A2' }
    ]
  },
  // Set 46
  {
    title: '感情・精神・人間性',
    theme: '心と情緒',
    words: [
      { ru: 'любо́вь', kana: 'リュボーフィ', jp: '愛、愛情', pos: '名詞', gender: '女', category: '感情', exampleRu: 'Любо́вь к му́зыке.', exampleJp: '音楽への愛。', accentTip: '出没母音: 生格любви́, 前置格о любви́。', level: 'A2' },
      { ru: 'ра́дость', kana: 'ラードスチ', jp: '喜び', pos: '名詞', gender: '女', pluralForm: 'ра́дости', category: '感情', exampleRu: 'Слёзы ра́дости.', exampleJp: 'うれし涙。女性名詞。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'сча́стье', kana: 'シャーシチェ', jp: '幸福、幸せ、幸運', pos: '名詞', gender: '中', category: '感情', exampleRu: 'Жела́ю вам сча́стья!', exampleJp: 'ご多幸をお祈りします(生格)！', accentTip: 'счは[щ]と発音[シャーシチェ]。', level: 'A2' },
      { ru: 'душа́', kana: 'ドゥシャー', jp: '魂、心', pos: '名詞', gender: '女', pluralForm: 'ду́ши', category: '精神', exampleRu: 'Ру́сская душа́.', exampleJp: 'ロシアの心（魂）。', accentTip: '対格はду́шу(頭移動)。', level: 'A2' },
      { ru: 'жизнь', kana: 'ジーズニ', jp: '人生、生命、生活', pos: '名詞', gender: '女', pluralForm: 'жи́зни', category: '人生', exampleRu: 'Жизнь прекра́сна!', exampleJp: '人生は素晴らしい！', accentTip: 'ьで終わる女性名詞。', level: 'A2' }
    ]
  },
  // Set 47
  {
    title: '金銭と社会生活',
    theme: '経済と取引',
    words: [
      { ru: 'де́ньги', kana: 'ジェーニギ', jp: 'お金 (複数専用)', pos: '名詞', gender: '複数', category: '経済', exampleRu: 'У меня́ нет де́нег.', exampleJp: '私にはお金がありません(否定生格)。', accentTip: '複数生格はде́нег。', level: 'A2' },
      { ru: 'долг', kana: 'ドールク', jp: '義務、借金', pos: '名詞', gender: '男', pluralForm: 'долги́', category: '社会', exampleRu: 'Гражда́нский долг.', exampleJp: '市民の義務。語末гは[к]。', level: 'A2' },
      { ru: 'пода́рок', kana: 'パダーラク', jp: '贈り物、プレゼント', pos: '名詞', gender: '男', pluralForm: 'пода́рки', category: '生活', exampleRu: 'Спаси́бо за пода́рок!', exampleJp: 'プレゼントをありがとう(за+対格)！', accentTip: '出没母音о(пода́рка)。', level: 'A2' },
      { ru: 'по́мощь', kana: 'ポーマシシ', jp: '助け、手伝い、援助', pos: '名詞', gender: '女', category: '社会', exampleRu: 'Ско́рая по́мощь.', exampleJp: '救急車(迅速な助け)。', accentTip: 'ьで終わる女性名詞。', level: 'A2' },
      { ru: 'успе́х', kana: 'ウスピェーハ', jp: '成功、成果', pos: '名詞', gender: '男', pluralForm: 'успе́хи', category: '社会', exampleRu: 'Жела́ю успе́ха!', exampleJp: '成功を祈ります！(生格支配)', level: 'A2' }
    ]
  },
  // Set 48
  {
    title: '思考・課題・情報',
    theme: '知的活動',
    words: [
      { ru: 'вопро́с', kana: 'ヴァプロース', jp: '質問、問い、問題', pos: '名詞', gender: '男', pluralForm: 'вопро́сы', category: '対話', exampleRu: 'Тру́дный вопро́с.', exampleJp: '難しい質問。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'отве́т', kana: 'アトヴィエート', jp: '返答、答え', pos: '名詞', gender: '男', pluralForm: 'отве́ты', category: '対話', exampleRu: 'Пра́вильный отве́т.', exampleJp: '正しい答え。語末т。', level: 'A2' },
      { ru: 'зада́ча', kana: 'ザダーチャ', jp: '課題、問題、任務', pos: '名詞', gender: '女', pluralForm: 'зада́чи', category: '学習', exampleRu: 'Реши́ть зада́чу.', exampleJp: '問題を解く。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'оши́бка', kana: 'アシーブカ', jp: '間違い、誤り', pos: '名詞', gender: '女', pluralForm: 'оши́бки', category: '学習', exampleRu: 'Он не де́лает оши́бок.', exampleJp: '彼はミスを犯さない。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'сло́во', kana: 'スローヴァ', jp: '単語、言葉', pos: '名詞', gender: '中', pluralForm: 'слова́', category: '言語', exampleRu: 'Но́вое сло́во.', exampleJp: '新しい単語。複数形слова́。', accentTip: 'アクセント語尾移動(слова́)。', level: 'A2' }
    ]
  },
  // Set 49
  {
    title: '感情・嗜好の動詞',
    theme: '好悪と願望',
    words: [
      { ru: 'нра́виться', kana: 'ンラーヴィッツァ', jp: '気に入る、好きだ', pos: '動詞', aspect: '不完了', pairedWord: 'понра́виться', caseGovernance: '〔与格〕に〔主格〕が', category: '感情', exampleRu: 'Мне о́чень нра́вится э́та пе́сня.', exampleJp: '私はこの歌がとても気に入っている。', accentTip: '-тсяは[ツァ]と発音。', level: 'A2' },
      { ru: 'хоте́ть', kana: 'ハチェーチ', jp: '〜したい、欲する', pos: '動詞', aspect: '不完了', pairedWord: 'захоте́ть', conjugationNote: '不規則 (хочу́, хо́чешь, хо́чет, хоти́м, хоти́те, хотя́т)', category: '願望', exampleRu: 'Я хочу́ пить.', exampleJp: '喉が渇いた(飲みたい)。', accentTip: '単数は第1変化、複数は第2変化。', level: 'A2' },
      { ru: 'мочь', kana: 'モーチ', jp: '〜できる (状況的に可能)', pos: '動詞', aspect: '不完了', pairedWord: 'смочь', conjugationNote: '不規則 (могу́, мо́жешь... мо́гут; мог, могла́...)', category: '可能', exampleRu: 'Вы мо́жете мне помо́чь?', exampleJp: '私を手伝っていただけますか？', accentTip: '過去形мог, могла́, могли́。', level: 'A2' },
      { ru: 'уме́ть', kana: 'ウメーチ', jp: '〜できる (習得した能力)', pos: '動詞', aspect: '不完了', pairedWord: 'суме́ть', conjugationNote: '第1変化 (уме́ю, уме́ешь...)', category: '能力', exampleRu: 'Она́ уме́ет пла́вать.', exampleJp: '彼女は泳ぐことができる。', accentTip: 'мочьとの違い: 練習して身につけた能力。', level: 'A2' },
      { ru: 'боя́ться', kana: 'バヤーツァ', jp: '恐れる、怖がる', pos: '動詞', aspect: '不完了', caseGovernance: '+ 生格', conjugationNote: '第2変化 (бою́сь, бои́шься...)', category: '感情', exampleRu: 'Ребёнок бои́тся соба́ки.', exampleJp: '子どもが犬を怖がっている(生格)。', accentTip: '生格を支配する。', level: 'A2' }
    ]
  },
  // Set 50
  {
    title: '日常の動作動詞 (書く・尋ねる・答える)',
    theme: '対話動作',
    words: [
      { ru: 'писа́ть', kana: 'ピサーチ', jp: '書く', pos: '動詞', aspect: '不完了', pairedWord: 'написа́ть', conjugationNote: '第1変化・子音交替 (пишу́, пи́шешь...)', category: '動作', exampleRu: 'Я пишу́ письмо́.', exampleJp: '私は手紙を書いています。', accentTip: 'с→ш交替: пишу́, пи́шешь, пи́шет...', level: 'A2' },
      { ru: 'написа́ть', kana: 'ナピサーチ', jp: '書いてしまう、書き終える', pos: '動詞', aspect: '完了', pairedWord: 'писа́ть', conjugationNote: '完了未来 (напишу́, напи́шешь...)', category: '動作', exampleRu: 'Я напишу́ вам за́втра.', exampleJp: '明日あなたに手紙を書きます。', accentTip: '完了体。完了未来を表す。', level: 'A2' },
      { ru: 'спра́шивать', kana: 'スプラーシヴァチ', jp: '尋ねる、質問する', pos: '動詞', aspect: '不完了', pairedWord: 'спроси́ть', caseGovernance: '+ 対格', category: '対話', exampleRu: 'Он спра́шивает меня́.', exampleJp: '彼は私に尋ねている(対格)。', accentTip: '尋ねる相手は対格をとる。', level: 'A2' },
      { ru: 'спроси́ть', kana: 'スプラシーチ', jp: '尋ねてみる、質問する', pos: '動詞', aspect: '完了', pairedWord: 'спра́шивать', conjugationNote: '第2変化・子音交替 (спрошу́, спро́сишь...)', category: '対話', exampleRu: 'Мо́жно спроси́ть?', exampleJp: '質問してもいいですか？', accentTip: 'с→ш交替: спрошу́, спро́сишь。', level: 'A2' },
      { ru: 'отвеча́ть', kana: 'アトヴィチャーチ', jp: '答える、返答する', pos: '動詞', aspect: '不完了', pairedWord: 'отве́тить', caseGovernance: '+ 与格', category: '対話', exampleRu: 'Студе́нт отвеча́ет учи́телю.', exampleJp: '学生が先生に答えている(与格)。', accentTip: '相手は与格をとる。', level: 'A2' }
    ]
  },
  // Set 51
  {
    title: '動作の完結と購入',
    theme: '取引と結果',
    words: [
      { ru: 'покупа́ть', kana: 'パクパーチ', jp: '買う、購入する', pos: '動詞', aspect: '不完了', pairedWord: 'купи́ть', conjugationNote: '第1変化 (покупа́ю, покупа́ешь...)', category: '経済', exampleRu: 'Я покупа́ю проду́кты.', exampleJp: '私は食料品を買っている。', accentTip: '不完了体。', level: 'A2' },
      { ru: 'купи́ть', kana: 'クピーチ', jp: '買ってしまう、購入する', pos: '動詞', aspect: '完了', pairedWord: 'покупа́ть', conjugationNote: '第2変化・唇音交替 (куплю́, ку́пишь...)', category: '経済', exampleRu: 'Я купи́л кни́гу.', exampleJp: '私は本を買いました(過去完了)。', accentTip: '1単数で-л-挿入(куплю́)。', level: 'A2' },
      { ru: 'продава́ть', kana: 'プラダヴァーチ', jp: '売る、販売する', pos: '動詞', aspect: '不完了', pairedWord: 'прода́ть', conjugationNote: '-авать動詞 (продаю́, продаёшь...)', category: '経済', exampleRu: 'Здесь продаю́т цветы́.', exampleJp: 'ここでは花が売られている(不定人称文)。', accentTip: '現在形では-ава-が脱落。', level: 'A2' },
      { ru: 'получа́ть', kana: 'パルチャーチ', jp: '受け取る、もらう', pos: '動詞', aspect: '不完了', pairedWord: 'получи́ть', category: '授受', exampleRu: 'Я получа́ю пи́сьма.', exampleJp: '私は手紙を受け取っている。', accentTip: '不完了体。', level: 'A2' },
      { ru: 'получи́ть', kana: 'パルチーチ', jp: '受け取ってしまう、手に入れる', pos: '動詞', aspect: '完了', pairedWord: 'получа́ть', conjugationNote: '第2変化 (получу́, полу́чишь...)', category: '授受', exampleRu: 'Я получи́л посы́лку.', exampleJp: '私は小包を受け取りました。', accentTip: 'アクセント移動: получу́, полу́чишь。', level: 'A2' }
    ]
  },
  // Set 52
  {
    title: '授受と贈呈',
    theme: '贈り合い',
    words: [
      { ru: 'дава́ть', kana: 'ダヴァーチ', jp: '与える、渡す', pos: '動詞', aspect: '不完了', pairedWord: 'дать', conjugationNote: '-авать動詞 (даю́, даёшь...)', category: '授受', exampleRu: 'Учи́тель даёт зада́ние.', exampleJp: '先生は課題を出している。', accentTip: '現在形で-ава-脱落。命令形дава́й。', level: 'A2' },
      { ru: 'дать', kana: 'ダーチ', jp: 'あげる、渡してしまう', pos: '動詞', aspect: '完了', pairedWord: 'дава́ть', conjugationNote: '不規則 (дам, дашь, даст, дади́м, дади́те, даду́т)', category: '授受', exampleRu: 'Да́йте мне, пожа́луйста, хлеб.', exampleJp: 'パンをください(命令形)。', accentTip: '古代教会スラヴ語以来の不規則活用。', level: 'A2' },
      { ru: 'дари́ть', kana: 'ダリーチ', jp: '贈る、プレゼントする', pos: '動詞', aspect: '不完了', pairedWord: 'подари́ть', conjugationNote: '第2変化 (дарю́, да́ришь...)', category: '授受', exampleRu: 'Он да́рит цветы́.', exampleJp: '彼は花をプレゼントしている。', accentTip: 'アクセント移動: дарю́, да́ришь。', level: 'A2' },
      { ru: 'подари́ть', kana: 'パダリーチ', jp: '贈ってしまう、プレゼントする', pos: '動詞', aspect: '完了', pairedWord: 'дари́ть', conjugationNote: '第2変化 (подарю́, пода́ришь...)', category: '授受', exampleRu: 'Оте́ц подари́л мне часы́.', exampleJp: '父は私に時計をプレゼントしてくれた。', accentTip: '完了体。', level: 'A2' },
      { ru: 'помога́ть', kana: 'パマガーチ', jp: '助ける、手伝う', pos: '動詞', aspect: '不完了', pairedWord: 'помо́чь', caseGovernance: '+ 与格', category: '援助', exampleRu: 'Он помога́ет ма́ме.', exampleJp: '彼は母を手伝っている(与格)。', accentTip: '相手は与格をとる。', level: 'A2' }
    ]
  },
  // Set 53
  {
    title: '再帰・相互の-ся動詞',
    theme: '自己動作',
    words: [
      { ru: 'занима́ться', kana: 'ザニマーツァ', jp: '勉強する、従事する', pos: '動詞', aspect: '不完了', caseGovernance: '+ 造格', category: '学習', exampleRu: 'Я занима́юсь ру́сским языко́м.', exampleJp: '私はロシア語を勉強している(造格)。', accentTip: '母音後で-сь: занима́юсь, занима́етесь。', level: 'A2' },
      { ru: 'учи́ться', kana: 'ウチーツァ', jp: '学ぶ、通学している', pos: '動詞', aspect: '不完了', category: '学習', exampleRu: 'Где вы у́читесь? – В МГУ.', exampleJp: '「どちらで学ばれていますか？」「モスクワ大学です」', accentTip: 'учу́сь, у́чишься... у́чатся。', level: 'A2' },
      { ru: 'встреча́ться', kana: 'フストリチャーッツァ', jp: '会う、交際する', pos: '動詞', aspect: '不完了', pairedWord: 'встре́титься', caseGovernance: 'с + 造格', category: '交際', exampleRu: 'Они́ ча́сто встреча́ются.', exampleJp: '彼らはよく会っている。', accentTip: '相互動作。', level: 'A2' },
      { ru: 'встре́титься', kana: 'フストリェーチッツァ', jp: '落ち合う、会う', pos: '動詞', aspect: '完了', pairedWord: 'встреча́ться', caseGovernance: 'с + 造格', category: '交際', exampleRu: 'Встре́тимся в шесть!', exampleJp: '6時に会おう！', accentTip: '完了体。', level: 'A2' },
      { ru: 'улыба́ться', kana: 'ウリバーッツァ', jp: 'ほほえむ、笑顔を見せる', pos: '動詞', aspect: '不完了', pairedWord: 'улыбну́ться', category: '表情', exampleRu: 'Она́ всегда́ улыба́ется.', exampleJp: '彼女はいつも笑顔です。', accentTip: '-сяのない形は存在しない。', level: 'A2' }
    ]
  },
  // Set 54
  {
    title: '生活動作の-ся動詞',
    theme: '身支度',
    words: [
      { ru: 'одева́ться', kana: 'アヂヴァーツァ', jp: '服を着る、身支度する', pos: '動詞', aspect: '不完了', pairedWord: 'оде́ться', category: '生活', exampleRu: 'Одева́йтесь тепло́!', exampleJp: '暖かく着込んでください！', accentTip: '再帰動作(自分に服を着せる)。', level: 'A2' },
      { ru: 'мы́ться', kana: 'ムィーツァ', jp: '体を洗う、お風呂に入る', pos: '動詞', aspect: '不完了', pairedWord: 'помы́ться', category: '生活', exampleRu: 'У́тром я мо́юсь.', exampleJp: '朝、私は体を洗います。', accentTip: 'мо́юсь, мо́ешься...', level: 'A2' },
      { ru: 'ложи́ться', kana: 'ラジーツァ', jp: '横たわる、寝床に入る', pos: '動詞', aspect: '不完了', pairedWord: 'лечь', category: '生活', exampleRu: 'Ложи́ться спать.', exampleJp: '寝床に入る、就寝する。', accentTip: 'ложи́тся спать。', level: 'A2' },
      { ru: 'встава́ть', kana: 'フスタヴァーチ', jp: '起きる、立ち上がる', pos: '動詞', aspect: '不完了', pairedWord: 'встать', category: '生活', exampleRu: 'Я встаю́ в семь часо́в.', exampleJp: '私は7時に起きます。', accentTip: '現在形встаю́, встаёшь。', level: 'A2' },
      { ru: 'встать', kana: 'フスタート', jp: '起き上がる、立ち上がる', pos: '動詞', aspect: '完了', pairedWord: 'встава́ть', category: '生活', exampleRu: 'На́до встать ра́но.', exampleJp: '早く起きなければならない。', accentTip: 'вста́ну, вста́нешь...', level: 'A2' }
    ]
  },
  // Set 55
  {
    title: '開始・終了・継続の動詞',
    theme: 'アスペクト補語動詞',
    words: [
      { ru: 'начина́ть', kana: 'ナチナーチ', jp: '始める', pos: '動詞', aspect: '不完了', pairedWord: 'нача́ть', caseGovernance: '+ 不定形', category: '過程', exampleRu: 'Мы начина́ем уро́к.', exampleJp: '私たちは授業を始めます。', accentTip: '補語の動詞は常に不完了体。', level: 'A2' },
      { ru: 'нача́ть', kana: 'ナチャート', jp: '始めてしまう、開始する', pos: '動詞', aspect: '完了', pairedWord: 'начина́ть', conjugationNote: 'начну́, начнёшь... на́чал, начала́', category: '過程', exampleRu: 'Он на́чал рабо́тать.', exampleJp: '彼は働き始めた。過去女性начала́。', accentTip: '過去形アクセント移動: начала́。', level: 'A2' },
      { ru: 'конча́ть', kana: 'カンチャーチ', jp: '終える、完了する', pos: '動詞', aspect: '不完了', pairedWord: 'ко́нчить', caseGovernance: '+ 不定形', category: '過程', exampleRu: 'Она́ ко́нчила чита́ть.', exampleJp: '彼女は本を読み終えた。', accentTip: '補語動詞は不完了体。', level: 'A2' },
      { ru: 'продолжа́ть', kana: 'プラダルジャーチ', jp: '続ける、継続する', pos: '動詞', aspect: '不完了', pairedWord: 'продо́лжить', caseGovernance: '+ 不定形', category: '過程', exampleRu: 'Продолжа́йте, пожа́луйста.', exampleJp: 'どうぞ続けてください。', accentTip: '補語動詞は不完了体。', level: 'A2' },
      { ru: 'перестава́ть', kana: 'ピリスタヴァーチ', jp: 'やめる、止む', pos: '動詞', aspect: '不完了', pairedWord: 'переста́ть', caseGovernance: '+ 不定形', category: '過程', exampleRu: 'Дождь переста́л.', exampleJp: '雨が止んだ。', accentTip: '補語動詞は不完了体。', level: 'A2' }
    ]
  },
  // Set 56
  {
    title: '忘却・決定・試み',
    theme: '意思と記憶',
    words: [
      { ru: 'забыва́ть', kana: 'ザブィヴァーチ', jp: '忘れる', pos: '動詞', aspect: '不完了', pairedWord: 'забы́ть', category: '記憶', exampleRu: 'Не забыва́йте нас!', exampleJp: '私たちのことを忘れないでください！', accentTip: '不完了体。', level: 'A2' },
      { ru: 'забы́ть', kana: 'ザブィーチ', jp: '忘れてしまう', pos: '動詞', aspect: '完了', pairedWord: 'забыва́ть', caseGovernance: '+ 完了体不定形', category: '記憶', exampleRu: 'Я забы́л купи́ть хлеб.', exampleJp: 'パンを買うのを忘れました。', accentTip: '補語動詞は完了体。', level: 'A2' },
      { ru: 'реша́ть', kana: 'リシャ―チ', jp: '決める、解く', pos: '動詞', aspect: '不完了', pairedWord: 'реши́ть', category: '思考', exampleRu: 'Он реша́ет зада́чу.', exampleJp: '彼は問題に取り組んでいる。', accentTip: '不完了体。', level: 'A2' },
      { ru: 'реши́ть', kana: 'リシ―チ', jp: '決定する、解決する', pos: '動詞', aspect: '完了', pairedWord: 'реша́ть', caseGovernance: '+ 不定形', category: '思考', exampleRu: 'Я реши́л учи́ть ру́сский язы́к.', exampleJp: '私はロシア語を学ぶことに決めた。', accentTip: '完了体。', level: 'A2' },
      { ru: 'стара́ться', kana: 'スタラーッツァ', jp: '努める、努力する', pos: '動詞', aspect: '不完了', pairedWord: 'постара́ться', caseGovernance: '+ 不定形', category: '意志', exampleRu: 'Я стара́юсь говори́ть пра́вильно.', exampleJp: '私は正確に話すよう努めている。', accentTip: '-ся動詞。', level: 'A2' }
    ]
  },
  // Set 57
  {
    title: '生格を取る前置詞',
    theme: '格支配の前置詞 (生格)',
    words: [
      { ru: 'без', kana: 'ビェーズ', jp: '〜なしに、〜を抜きにして (without)', pos: '前置詞', caseGovernance: '+ 生格', category: '前置詞', exampleRu: 'Чай без са́хара.', exampleJp: '砂糖抜きの紅茶。', accentTip: '特定子音の前でбезо。', level: 'A2' },
      { ru: 'до', kana: 'ド', jp: '〜まで、〜の前に (before/until)', pos: '前置詞', caseGovernance: '+ 生格', category: '前置詞', exampleRu: 'До уро́ка.', exampleJp: '授業の前に。', accentTip: '時間にも場所にも使える。', level: 'A2' },
      { ru: 'по́сле', kana: 'ポースリェ', jp: '〜のあとで (after)', pos: '前置詞', caseGovernance: '+ 生格', category: '前置詞', exampleRu: 'По́сле обе́да.', exampleJp: '昼食の後に。', accentTip: '必ず生格を支配。', level: 'A2' },
      { ru: 'о́коло', kana: 'オーカラ', jp: '〜の近くに、約〜 (near/about)', pos: '前置詞', caseGovernance: '+ 生格', category: '前置詞', exampleRu: 'О́коло го́рода / О́коло часа́.', exampleJp: '街の近くで / 約1時間。', accentTip: '概数表現にも使用。', level: 'A2' },
      { ru: 'из', kana: 'イーズ', jp: '〜の中から、〜出身 (from/out of)', pos: '前置詞', caseGovernance: '+ 生格', category: '前置詞', exampleRu: 'Я из Япо́нии.', exampleJp: '私は日本から来ました。', accentTip: 'вに対応する出発点。', level: 'A2' }
    ]
  },
  // Set 58
  {
    title: '造格を取る前置詞',
    theme: '格支配の前置詞 (造格)',
    words: [
      { ru: 'над', kana: 'ナート', jp: '〜の上方に(接触なし) (above)', pos: '前置詞', caseGovernance: '+ 造格', category: '前置詞', exampleRu: 'Ла́мпа виси́т над столо́м.', exampleJp: 'ランプが机の上に吊るされている。', accentTip: '英語のaboveに相当。', level: 'A2' },
      { ru: 'под', kana: 'ポート', jp: '〜の下に (under)', pos: '前置詞', caseGovernance: '+ 造格', category: '前置詞', exampleRu: 'Ко́шка под дива́ном.', exampleJp: '猫がソファーの下にいる。', accentTip: '英語のunderに相当。', level: 'A2' },
      { ru: 'пе́ред', kana: 'ピェーリェト', jp: '〜の前に (in front of)', pos: '前置詞', caseGovernance: '+ 造格', category: '前置詞', exampleRu: 'Пе́ред до́мом.', exampleJp: '家の前に。', accentTip: '時間的「〜に先立って」も表す。', level: 'A2' },
      { ru: 'за', kana: 'ザ', jp: '〜の後ろに、向こう側に (behind)', pos: '前置詞', caseGovernance: '+ 造格', category: '前置詞', exampleRu: 'За реко́й.', exampleJp: '川の向こう側に。', accentTip: '位置は造格、移動先は対格。', level: 'A2' },
      { ru: 'ря́дом с', kana: 'リャーダム ス', jp: '〜の隣に、〜のすぐそばに (next to)', pos: '成句', caseGovernance: '+ 造格', category: '前置詞', exampleRu: 'Ря́дом с вокза́лом.', exampleJp: '駅の隣に。', accentTip: '造格を要求する。', level: 'A2' }
    ]
  },
  // Set 59
  {
    title: '副詞 (時間・頻度・程度)',
    theme: '修飾語',
    words: [
      { ru: 'всегда́', kana: 'フスィグダー', jp: 'いつも、常に (always)', pos: '副詞', category: '頻度', exampleRu: 'Он всегда́ говори́т пра́вду.', exampleJp: '彼はいつも真実を話す。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'ча́сто', kana: 'チャースタ', jp: 'しばしば、よく (often)', pos: '副詞', category: '頻度', exampleRu: 'Я ча́сто быва́ю там.', exampleJp: '私はよくそこに行きます。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'иногда́', kana: 'イナグダー', jp: 'ときどき (sometimes)', pos: '副詞', category: '頻度', exampleRu: 'Иногда́ идёт дождь.', exampleJp: '時々雨が降る。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'ре́дко', kana: 'リェートカ', jp: 'めったに〜ない、まれに (rarely)', pos: '副詞', category: '頻度', exampleRu: 'Мы ре́дко ви́димся.', exampleJp: '私たちはめったに会わない。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'никогда́', kana: 'ニカグダー', jp: '決して〜ない、一度も〜ない (never)', pos: '副詞', category: '否定', exampleRu: 'Я никогда́ не кури́л.', exampleJp: '私は一度もタバコを吸ったことがない。', accentTip: '常にнеを伴う(二重否定)。', level: 'A2' }
    ]
  },
  // Set 60
  {
    title: 'Unit 3 総合確認語彙',
    theme: 'A2の重要成句と表現',
    words: [
      { ru: 'друг дру́га', kana: 'ドルーク ドルーガ', jp: 'お互いに (each other)', pos: '成句', category: '代名詞', exampleRu: 'Они́ лю́бят друг дру́га.', exampleJp: '彼らはお互いを愛している。', accentTip: '2語目が格変化する。', level: 'A2' },
      { ru: 'коне́чно', kana: 'カニェーシナ', jp: 'もちろん、当然だ', pos: '副詞', category: '会話', exampleRu: 'Коне́чно, я помогу́ вам.', exampleJp: 'もちろん、お手伝いしますよ。', accentTip: 'чнは[шн]と発音[カニェーシナ]。', level: 'A2' },
      { ru: 'ра́ньше', kana: 'ラーニシェ', jp: '以前は、もっと早く', pos: '副詞', category: '時間', exampleRu: 'Ра́ньше я жил в Росси́и.', exampleJp: '以前私はロシアに住んでいた。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'пото́м', kana: 'パトーム', jp: 'それから、あとで (then/later)', pos: '副詞', category: '時間', exampleRu: 'Снача́ла уро́к, пото́м обе́д.', exampleJp: 'まず授業、それから昼食。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'снача́ла', kana: 'スナチャーラ', jp: '最初は、はじめに (at first)', pos: '副詞', category: '時間', exampleRu: 'Снача́ла слу́шайте, пото́м повторя́йте.', exampleJp: 'まず聞いて、それから繰り返してください。', accentTip: 'а́にアクセント。', level: 'A2' }
    ]
  }
];

export const unit3Sets: WordSet[] = rawUnit3Sets.map((raw, idx) =>
  buildWordSet(idx + 41, 3, idx + 1, raw.title, raw.theme, raw.words)
);
