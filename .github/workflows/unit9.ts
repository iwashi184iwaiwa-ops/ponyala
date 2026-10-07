import { RawWordDefinition, buildWordSet } from './types';
import { WordSet } from '../../types';

// Unit 9: Sets 161-180 (20 sets × 5 words = 100 authentic words, A2 level)
const rawUnit9Sets: { title: string; theme: string; words: RawWordDefinition[] }[] = [
  // Set 161
  {
    title: '教育・保育・専門指導',
    theme: '教育機関の職業',
    words: [
      { ru: 'воспита́тель', kana: 'ヴァスピターチェリ', jp: '保育士、指導員', pos: '名詞', gender: '男', pluralForm: 'воспита́тели', category: '職業', exampleRu: 'Воспита́тель в де́тском саду́.', exampleJp: '幼稚園の保育士。', accentTip: '女性形воспита́тельница。', level: 'A2' },
      { ru: 'ассисте́нт', kana: 'アッスィスチェーント', jp: '助手、アシスタント', pos: '名詞', gender: '男', pluralForm: 'ассисте́нты', category: '職業', exampleRu: 'Ассисте́нт профе́ссора.', exampleJp: '教授の助手。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'бухга́лтер', kana: 'ブフガールチェル', jp: '会計士、経理担当者', pos: '名詞', gender: '男', pluralForm: 'бухга́лтеры', category: '職業', exampleRu: 'Главный бухга́лтер компа́нии.', exampleJp: '会社の経理部長。', accentTip: 'а́にアクセント。хは[х]。', level: 'A2' },
      { ru: 'бизнесме́н', kana: 'ビズニスミエーン', jp: 'ビジネスマン、実業家', pos: '名詞', gender: '男', pluralForm: 'бизнесме́ны', category: '職業', exampleRu: 'Успе́шный бизнесме́н.', exampleJp: '成功した実業家。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'парикма́хер', kana: 'パリクマーヒル', jp: '美容師、理容師', pos: '名詞', gender: '男', pluralForm: 'парикма́херы', category: '職業', exampleRu: 'Пойти́ к парикма́херу.', exampleJp: '美容師のところへ行く（髪を切りに行く）。', accentTip: 'а́にアクセント。', level: 'A2' },
    ]
  },
  // Set 162
  {
    title: '法曹・治安・安全維持',
    theme: '法と治安の専門職',
    words: [
      { ru: 'юри́ст', kana: 'ユリースツ', jp: '法律家、法学者、弁護士', pos: '名詞', gender: '男', pluralForm: 'юри́сты', category: '職業', exampleRu: 'Консульта́ция юри́ста.', exampleJp: '法律家の相談。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'адвока́т', kana: 'アドヴァカート', jp: '弁護士', pos: '名詞', gender: '男', pluralForm: 'адвока́ты', category: '職業', exampleRu: 'Опытный адвока́т защища́ет в суде́.', exampleJp: '経験豊かな弁護士が法廷で弁護する。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'полице́йский', kana: 'パリツェーイスキー', jp: '警察官', pos: '名詞', gender: '男', pluralForm: 'полице́йские', category: '職業', exampleRu: 'Полице́йский регули́рует движе́ние.', exampleJp: '警察官が交通整理をしている。', accentTip: '形容詞変化名詞。', level: 'A2' },
      { ru: 'пожа́рный', kana: 'パジャールヌィ', jp: '消防士', pos: '名詞', gender: '男', pluralForm: 'пожа́рные', category: '職業', exampleRu: 'Отва́жный пожа́рный.', exampleJp: '勇敢な消防士。', accentTip: '形容詞変化名詞。', level: 'A2' },
      { ru: 'солда́т', kana: 'サルダート', jp: '兵士、軍人', pos: '名詞', gender: '男', pluralForm: 'солда́ты', category: '職業', exampleRu: 'Молодо́й солда́т слу́жит в а́рмии.', exampleJp: '若き兵士が軍で奉仕している。', accentTip: '複数生格солда́т(ゼロ語尾)。', level: 'A2' },
    ]
  },
  // Set 163
  {
    title: '先端技術と建設設計',
    theme: '技術・開発の専門職',
    words: [
      { ru: 'программи́ст', kana: 'プラグランミースト', jp: 'プログラマー、ITエンジニア', pos: '名詞', gender: '男', pluralForm: 'программи́сты', category: '職業', exampleRu: 'Программи́ст пи́шет код.', exampleJp: 'プログラマーがコードを書く。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'архите́ктор', kana: 'アルヒチェークタル', jp: '建築家', pos: '名詞', gender: '男', pluralForm: 'архите́кторы', category: '職業', exampleRu: 'Архите́ктор спроекти́ровал зда́ние.', exampleJp: '建築家が建物を設計した。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'иссле́дователь', kana: 'イスリェードヴァチェリ', jp: '研究者、探求者', pos: '名詞', gender: '男', pluralForm: 'иссле́дователи', category: '職業', exampleRu: 'Нау́чный иссле́дователь рабо́тает в институ́те.', exampleJp: '科学研究者が研究所で働いている。', accentTip: 'е́にアクセント。女性形иссле́довательница。', level: 'A2' },
      { ru: 'ма́стер', kana: 'マースチェル', jp: '熟練工、職人、名人', pos: '名詞', gender: '男', pluralForm: 'мастера́', category: '職業', exampleRu: 'Ма́стер по ремо́нту.', exampleJp: '修理の熟練職人。', accentTip: '複数形мастера́ (語尾移動)。', level: 'A2' },
      { ru: 'фе́рмер', kana: 'フィエールミル', jp: '農場経営者、農家', pos: '名詞', gender: '男', pluralForm: 'фе́рмеры', category: '職業', exampleRu: 'Фе́рмер вы́ращивает о́вощи.', exampleJp: '農家が野菜を栽培している。', accentTip: 'е́にアクセント。', level: 'A2' },
    ]
  },
  // Set 164
  {
    title: '組織管理と対人サービス',
    theme: 'ビジネス・接客',
    words: [
      { ru: 'дире́ктор', kana: 'ジリエークタル', jp: '所長、校長、社長', pos: '名詞', gender: '男', pluralForm: 'директора́', category: '職業', exampleRu: 'Дире́ктор шко́лы.', exampleJp: '学校長。', accentTip: '複数形директора́ (語尾移動)。', level: 'A2' },
      { ru: 'ме́неджер', kana: 'ミエニジェル', jp: '支配人、マネージャー', pos: '名詞', gender: '男', pluralForm: 'ме́неджеры', category: '職業', exampleRu: 'Ме́неджер по прода́жам.', exampleJp: '営業マネージャー。', accentTip: '最初のе́にアクセント。', level: 'A2' },
      { ru: 'продавщи́ца', kana: 'プラダフシーツァ', jp: '女性店員、売り子', pos: '名詞', gender: '女', pluralForm: 'продавщи́цы', category: '職業', exampleRu: 'Ве́жливая продавщи́ца.', exampleJp: '愛想のよい女性店員。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'по́вар', kana: 'ポーヴァル', jp: '料理人、シェフ', pos: '名詞', gender: '男', pluralForm: 'повара́', category: '職業', exampleRu: 'Опытный по́вар гото́вит обе́д.', exampleJp: '腕利きの料理人が昼食を作る。', accentTip: '複数形повара́ (語尾移動)。', level: 'A2' },
      { ru: 'гид', kana: 'ギート', jp: '観光ガイド、案内人', pos: '名詞', gender: '男', pluralForm: 'ги́ды', category: '職業', exampleRu: 'Гид пока́зывает достопримеча́тельности.', exampleJp: 'ガイドが名所を案内する。', accentTip: '語末дは[т]。', level: 'A2' },
    ]
  },
  // Set 165
  {
    title: '交通運行と運輸専門職',
    theme: '交通・輸送の従事者',
    words: [
      { ru: 'води́тель', kana: 'ヴァジーチェリ', jp: '運転手 (ドライバー)', pos: '名詞', gender: '男', pluralForm: 'води́тели', category: '職業', exampleRu: 'Води́тель авто́буса.', exampleJp: 'バスの運転手。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'пило́т', kana: 'ピロート', jp: 'パイロット、航空操縦士', pos: '名詞', gender: '男', pluralForm: 'пило́ты', category: '職業', exampleRu: 'Пило́т посади́л самолёт.', exampleJp: 'パイロットが飛行機を着陸させた。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'машини́ст', kana: 'マシニースト', jp: '列車の機関士、運転士', pos: '名詞', gender: '男', pluralForm: 'машини́сты', category: '職業', exampleRu: 'Машини́ст электропо́езда.', exampleJp: '電車の運転士。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'проводни́к', kana: 'プラヴァドニーク', jp: '車掌、客室案内係', pos: '名詞', gender: '男', pluralForm: 'проводники́', category: '職業', exampleRu: 'Проводни́к прове́рил биле́ты.', exampleJp: '車掌が切符を検札した。', accentTip: '女性形проводни́ца。', level: 'A2' },
      { ru: 'почтальо́н', kana: 'パチタリヨーン', jp: '郵便配達員', pos: '名詞', gender: '男', pluralForm: 'почтальо́ны', category: '職業', exampleRu: 'Почтальо́н принёс письмо́.', exampleJp: '郵便配達員が手紙を届けた。', accentTip: 'о́にアクセント。', level: 'A2' },
    ]
  },
  // Set 166
  {
    title: '文芸・美術・翻訳の創作職',
    theme: '文化創作の専門職',
    words: [
      { ru: 'перево́дчик', kana: 'ピリヴォーチク', jp: '翻訳者、通訳者', pos: '名詞', gender: '男', pluralForm: 'перево́дчики', category: '職業', exampleRu: 'Перево́дчик с ру́сского языка́.', exampleJp: 'ロシア語からの翻訳者。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'реда́ктор', kana: 'リダークタル', jp: '編集者、編集長', pos: '名詞', gender: '男', pluralForm: 'реда́кторы', category: '職業', exampleRu: 'Реда́ктор испра́вил текст.', exampleJp: '編集者が文章を校正した。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'рыба́к', kana: 'ルィバーク', jp: '漁師、釣り人', pos: '名詞', gender: '男', pluralForm: 'рыбаки́', category: '職業', exampleRu: 'Рыба́к пойма́л большу́ю ры́бу.', exampleJp: '漁師が大きな魚を捕まえた。', accentTip: '格変化で語尾移動(рыбака́)。', level: 'A2' },
      { ru: 'спортсме́н', kana: 'スパルツミエーン', jp: 'スポーツ選手、アスリート', pos: '名詞', gender: '男', pluralForm: 'спортсме́ны', category: '職業', exampleRu: 'Олимпи́йский спортсме́н.', exampleJp: 'オリンピック選手。', accentTip: '女性形спортсме́нка。', level: 'A2' },
      { ru: 'ску́льптор', kana: 'スクーリプタル', jp: '彫刻家', pos: '名詞', gender: '男', pluralForm: 'ску́льпторы', category: '芸術', exampleRu: 'Изве́стный ску́льптор созда́л па́мятник.', exampleJp: '著名な彫刻家が記念碑を制作した。', accentTip: 'у́にアクセント。', level: 'A2' },
    ]
  },
  // Set 167
  {
    title: '舞台・音楽・指揮の専門家',
    theme: '芸能芸術職',
    words: [
      { ru: 'режиссёр', kana: 'リジッスョール', jp: '演出家、映画監督', pos: '名詞', gender: '男', pluralForm: 'режиссёры', category: '芸術', exampleRu: 'Театра́льный режиссёр.', exampleJp: '劇場の演出家。', accentTip: 'ёにアクセント。', level: 'A2' },
      { ru: 'балери́на', kana: 'バリリーナ', jp: 'バレリーナ、バレエダンサー', pos: '名詞', gender: '女', pluralForm: 'балери́ны', category: '芸術', exampleRu: 'Прима-балери́на Большо́го теа́тра.', exampleJp: 'ボリショイ劇場のプリマバレリーナ。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'певе́ц', kana: 'ピヴェーツ', jp: '歌手、ボーカリスト', pos: '名詞', gender: '男', pluralForm: 'певцы́', category: '芸術', exampleRu: 'О́перный певе́ц.', exampleJp: 'オペラ歌手。', accentTip: '出没母音е(певца́, певцы́)。女性形певи́ца。', level: 'A2' },
      { ru: 'дирижёр', kana: 'ジリジョール', jp: '指揮者', pos: '名詞', gender: '男', pluralForm: 'дирижёры', category: '芸術', exampleRu: 'Дирижёр орке́стра.', exampleJp: 'オーケストラの指揮者。', accentTip: 'ёにアクセント。', level: 'A2' },
      { ru: 'компози́тор', kana: 'カンパズィータル', jp: '作曲家', pos: '名詞', gender: '男', pluralForm: 'компози́торы', category: '芸術', exampleRu: 'Пётр Чайко́вский – вели́кий компози́тор.', exampleJp: 'チャイコフスキーは偉大な作曲家だ。', accentTip: 'и́にアクセント。', level: 'A2' },
    ]
  },
  // Set 168
  {
    title: '人文科学と社会思想',
    theme: '学問体系 (人文・思想)',
    words: [
      { ru: 'филосо́фия', kana: 'フィラソーフィヤ', jp: '哲学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Изуча́ть филосо́фию.', exampleJp: '哲学を学ぶ。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'лингви́стика', kana: 'リングヴィースチカ', jp: '言語学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Теорети́ческая лингви́стика.', exampleJp: '理論言語学。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'политоло́гия', kana: 'パリタロージヤ', jp: '政治学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Ле́кция по политоло́гии.', exampleJp: '政治学の講義。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'социоло́гия', kana: 'サツィアロージヤ', jp: '社会学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Ка́федра социоло́гии.', exampleJp: '社会学科講座。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'астроно́мия', kana: 'アストラノーミヤ', jp: '天文学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Дре́вняя астроно́мия.', exampleJp: '古代天文学。', accentTip: 'о́にアクセント。', level: 'A2' },
    ]
  },
  // Set 169
  {
    title: '自然科学の基礎諸分野',
    theme: '理工系学問',
    words: [
      { ru: 'биоло́гия', kana: 'ビアロージヤ', jp: '生物学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Уро́к биоло́гии.', exampleJp: '生物の授業。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'геогра́фия', kana: 'ギアグラーフィヤ', jp: '地理、地理学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Геогра́фия Росси́и.', exampleJp: 'ロシアの地理。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'эколо́гия', kana: 'エカロージヤ', jp: '生態学、環境科学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Защи́та приро́ды и эколо́гия.', exampleJp: '自然保護と環境科学。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'психоло́гия', kana: 'プシハロージヤ', jp: '心理学', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Возрастна́я психоло́гия.', exampleJp: '発達心理学。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'медици́на', kana: 'ミジツィーナ', jp: '医学、医療', pos: '名詞', gender: '女', category: '学問', exampleRu: 'Совреме́нная медици́на.', exampleJp: '現代医学。', accentTip: 'и́にアクセント。', level: 'A2' },
    ]
  },
  // Set 170
  {
    title: '大学の組織と教育制度',
    theme: '高等教育機関',
    words: [
      { ru: 'факульте́т', kana: 'ファクリチェート', jp: '学部', pos: '名詞', gender: '男', pluralForm: 'факульте́ты', category: '学問', exampleRu: 'Филологи́ческий факульте́т.', exampleJp: '文学部（言語文献学部）。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'ка́федра', kana: 'カーフィドラ', jp: '講座、学科教室、演壇', pos: '名詞', gender: '女', pluralForm: 'ка́федры', category: '学問', exampleRu: 'Ка́федра ру́сского языка́.', exampleJp: 'ロシア語講座。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'семе́стр', kana: 'スィミエストル', jp: '学期 (セメスター)', pos: '名詞', gender: '男', pluralForm: 'семе́стры', category: '学問', exampleRu: 'Осе́нний семе́стр.', exampleJp: '秋学期。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'семина́р', kana: 'スィミナール', jp: 'ゼミ、演習、研究会', pos: '名詞', gender: '男', pluralForm: 'семина́ры', category: '学問', exampleRu: 'Выступа́ть на семина́ре.', exampleJp: 'ゼミで発表する。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'лаборато́рия', kana: 'ラバラトーリヤ', jp: '研究室、実験室', pos: '名詞', gender: '女', pluralForm: 'лаборато́рии', category: '学問', exampleRu: 'Нау́чная лаборато́рия.', exampleJp: '科学実験室。', accentTip: 'о́にアクセント。', level: 'A2' },
    ]
  },
  // Set 171
  {
    title: '学修の成果と評価',
    theme: '試験と単位認定',
    words: [
      { ru: 'зачёт', kana: 'ザチョート', jp: '合格認定テスト (合否判定試問)', pos: '名詞', gender: '男', pluralForm: 'зачёты', category: '学問', exampleRu: 'Сдать зачёт по исто́рии.', exampleJp: '歴史の認定試験に受かる。', accentTip: 'ёにアクセント。', level: 'A2' },
      { ru: 'дипло́м', kana: 'ジプローム', jp: '卒業証書、学位記、卒論', pos: '名詞', gender: '男', pluralForm: 'дипло́мы', category: '学問', exampleRu: 'Защи́та дипло́ма.', exampleJp: '卒業論文の口頭試問（ディプロム防衛）。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'оце́нка', kana: 'アツェーンカ', jp: '成績、点数、評価', pos: '名詞', gender: '女', pluralForm: 'оце́нки', category: '学問', exampleRu: 'Получи́ть отли́чную оце́нку.', exampleJp: '優（満点）の評価を取る。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'стипе́ндия', kana: 'スチピエンジヤ', jp: '奨学金、学生手当', pos: '名詞', gender: '女', pluralForm: 'стипе́ндии', category: '学問', exampleRu: 'Получа́ть стипе́ндию.', exampleJp: '奨学金を受給する。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'сочине́ние', kana: 'サチニエンイェ', jp: '作文、論文、著作', pos: '名詞', gender: '中', pluralForm: 'сочине́ния', category: '学問', exampleRu: 'Написа́ть сочине́ние на те́му.', exampleJp: 'テーマについての作文を書く。', accentTip: 'е́にアクセント。', level: 'A2' },
    ]
  },
  // Set 172
  {
    title: '筆記具と携帯文具',
    theme: '文房具',
    words: [
      { ru: 'блокно́т', kana: 'ブラクノート', jp: 'メモ帳、小型ノート', pos: '名詞', gender: '男', pluralForm: 'блокно́ты', category: '文具', exampleRu: 'Записа́ть но́мер в блокно́т.', exampleJp: '番号をメモ帳に書き留める。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'ла́стик', kana: 'ラースチク', jp: '消しゴム', pos: '名詞', gender: '男', pluralForm: 'ла́стики', category: '文具', exampleRu: 'Стере́ть каранда́ш ла́стиком.', exampleJp: '鉛筆の線を消しゴムで消す。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'пена́л', kana: 'ピナール', jp: '筆箱、ペンケース', pos: '名詞', gender: '男', pluralForm: 'пена́лы', category: '文具', exampleRu: 'Сложи́ть ру́чки в пена́л.', exampleJp: 'ペンを筆箱にしまう。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'флома́стер', kana: 'フラマースチェル', jp: 'サインペン、フェルトペン', pos: '名詞', gender: '男', pluralForm: 'флома́стеры', category: '文具', exampleRu: 'Цветны́е флома́стеры.', exampleJp: 'カラーサインペン。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'маркер', kana: 'マールキエル', jp: 'マーカー、蛍光ペン', pos: '名詞', gender: '男', pluralForm: 'маркеры', category: '文具', exampleRu: 'Вы́делить те́кст ма́ркером.', exampleJp: 'テキストをマーカーで強調する。', accentTip: 'а́にアクセント。', level: 'A2' },
    ]
  },
  // Set 173
  {
    title: '机上事務用具',
    theme: '事務用品',
    words: [
      { ru: 'лине́йка', kana: 'リニエイカ', jp: '定規 (ものさし)', pos: '名詞', gender: '女', pluralForm: 'лине́йки', category: '文具', exampleRu: 'Че́ртить ли́нию по лине́йке.', exampleJp: '定規を使って直線を引く。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'но́жницы', kana: 'ノージュニツィ', jp: 'ハサミ', pos: '名詞', gender: '複数', category: '文具', exampleRu: 'О́стрые но́жницы ре́жут бума́гу.', exampleJp: 'よく切れるハサミが紙を切る。', accentTip: '複数専用名詞(生格но́жниц)。', level: 'A2' },
      { ru: 'клей', kana: 'クリエイ', jp: '糊 (のり)、接着剤', pos: '名詞', gender: '男', category: '文具', exampleRu: 'Прикле́ить кле́ем.', exampleJp: '糊で貼り付ける。', accentTip: '単音節名詞(生格кле́я)。', level: 'A2' },
      { ru: 'скре́пка', kana: 'スクリェープカ', jp: 'クリップ、紙留め', pos: '名詞', gender: '女', pluralForm: 'скре́пки', category: '文具', exampleRu: 'Скрепи́ть страни́цы скре́пкой.', exampleJp: 'ページをクリップで留める。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'па́пка', kana: 'パープカ', jp: 'ファイル、書類綴り、フォルダー', pos: '名詞', gender: '女', pluralForm: 'па́пки', category: '文具', exampleRu: 'Положи́ть докуме́нты в па́пку.', exampleJp: '書類をファイルに挟む。', accentTip: 'а́にアクセント。', level: 'A2' },
    ]
  },
  // Set 174
  {
    title: '劇場・舞台・演劇文化',
    theme: '舞台芸術',
    words: [
      { ru: 'спекта́кль', kana: 'スピクタークリ', jp: '芝居、劇、公演', pos: '名詞', gender: '男', pluralForm: 'спекта́кли', category: '芸術', exampleRu: 'Прекра́сный спекта́кль в теа́тре.', exampleJp: '劇場の素晴らしい芝居。', accentTip: 'а́にアクセント。男性名詞。', level: 'A2' },
      { ru: 'пье́са', kana: 'ピイエサ', jp: '戯曲、劇の脚本', pos: '名詞', gender: '女', pluralForm: 'пье́сы', category: '芸術', exampleRu: 'Пье́са Че́хова «Вишнёвый сад».', exampleJp: 'チェーホフの戯曲『桜の園』。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'сце́на', kana: 'スツィエーナ', jp: '舞台、ステージ、場面', pos: '名詞', gender: '女', pluralForm: 'сце́ны', category: '芸術', exampleRu: 'Актёр вы́шел на сце́ну.', exampleJp: '俳優が舞台に登場した。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'за́навес', kana: 'ザーナヴェス', jp: '緞帳 (どんちょう)、幕', pos: '名詞', gender: '男', pluralForm: 'за́навесы', category: '芸術', exampleRu: 'За́навес опусти́лся.', exampleJp: '幕が下りた。', accentTip: '最初のа́にアクセント。', level: 'A2' },
      { ru: 'аплодисме́нты', kana: 'アプラジスミエーンティ', jp: '拍手、拍手喝采', pos: '名詞', gender: '複数', category: '芸術', exampleRu: 'Гро́мкие аплодисме́нты зри́телей.', exampleJp: '観客の大喝采の拍手。', accentTip: '複数専用名詞(生格аплодисме́нтов)。', level: 'A2' },
    ]
  },
  // Set 175
  {
    title: '音楽演奏と声楽・合唱',
    theme: '音楽文化',
    words: [
      { ru: 'хор', kana: 'ホール', jp: '合唱団、コーラス', pos: '名詞', gender: '男', pluralForm: 'хоры́', category: '音楽', exampleRu: 'Петь в хо́ре.', exampleJp: '合唱団で歌う。', accentTip: '単音節名詞。', level: 'A2' },
      { ru: 'мело́дия', kana: 'ミロージヤ', jp: '旋律、メロディー', pos: '名詞', gender: '女', pluralForm: 'мело́дии', category: '音楽', exampleRu: 'Краси́вая ру́сская мело́дия.', exampleJp: '美しいロシアの旋律。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'но́та', kana: 'ノータ', jp: '音符、楽譜', pos: '名詞', gender: '女', pluralForm: 'но́ты', category: '音楽', exampleRu: 'Игра́ть по но́там.', exampleJp: '楽譜通りに弾く。', accentTip: 'о́にアクセント。複数形но́тыで楽譜の意。', level: 'A2' },
      { ru: 'о́пера', kana: 'オーピラ', jp: 'オペラ (歌劇)', pos: '名詞', gender: '女', pluralForm: 'о́перы', category: '音楽', exampleRu: 'О́пера «Евге́ний Оне́гин».', exampleJp: 'オペラ『エヴゲーニー・オネーギン』。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'бале́т', kana: 'バリェート', jp: 'バレエ', pos: '名詞', gender: '男', pluralForm: 'бале́ты', category: '音楽', exampleRu: 'Ру́сский бале́т «Лебеди́ное о́зеро».', exampleJp: 'ロシアバレエ『白鳥の湖』。', accentTip: 'е́にアクセント。', level: 'A2' },
    ]
  },
  // Set 176
  {
    title: '弦楽器と鍵盤楽器',
    theme: '楽器 (弦・鍵盤)',
    words: [
      { ru: 'балала́йка', kana: 'バララーイカ', jp: 'バラライカ (ロシア伝統弦楽器)', pos: '名詞', gender: '女', pluralForm: 'балала́йки', category: '音楽', exampleRu: 'Игра́ть на балала́йке.', exampleJp: 'バラライカを演奏する。', accentTip: 'а́にアクセント。三角胴のロシア伝統楽器。', level: 'A2' },
      { ru: 'виолонче́ль', kana: 'ヴィアランチェーリ', jp: 'チェロ', pos: '名詞', gender: '女', pluralForm: 'виолонче́ли', category: '音楽', exampleRu: 'Звук виолонче́ли глубо́кий.', exampleJp: 'チェロの音色は深い。', accentTip: '女性名詞(生格виолонче́ли)。', level: 'A2' },
      { ru: 'роя́ль', kana: 'ラヤール', jp: 'グランドピアノ', pos: '名詞', gender: '男', pluralForm: 'роя́ли', category: '音楽', exampleRu: 'Чёрный концер́тный роя́ль.', exampleJp: '黒いコンサートグランドピアノ。', accentTip: '男性名詞(生格роя́ля)。', level: 'A2' },
      { ru: 'гармо́нь', kana: 'ガルモーニ', jp: 'ガルモニ (ロシア伝統アコーディオン)', pos: '名詞', gender: '女', pluralForm: 'гармо́ни', category: '音楽', exampleRu: 'Заигра́ла весе́лая гармо́нь.', exampleJp: '陽気なアコーディオンが鳴り出した。', accentTip: '女性名詞。口語гармо́шка。', level: 'A2' },
      { ru: 'цирк', kana: 'ツィールク', jp: 'サーカス', pos: '名詞', gender: '男', pluralForm: 'ци́рки', category: '芸術', exampleRu: 'Моско́вский цирк на Цветно́м бульва́ре.', exampleJp: 'モスクワのサーカス。', accentTip: '単音節名詞。', level: 'A2' },
    ]
  },
  // Set 177
  {
    title: '管楽器と打楽器',
    theme: '楽器 (管・打)',
    words: [
      { ru: 'труба́', kana: 'トゥルバー', jp: 'トランペット、ラッパ、煙突', pos: '名詞', gender: '女', pluralForm: 'тру́бы', category: '音楽', exampleRu: 'Гро́мкая труба́.', exampleJp: '大音量のトランペット。', accentTip: '複数形тру́бы (語幹移動)。', level: 'A2' },
      { ru: 'фле́йта', kana: 'フリェータ', jp: 'フルート (横笛)', pos: '名詞', gender: '女', pluralForm: 'фле́йты', category: '音楽', exampleRu: 'Не́жный звук фле́йты.', exampleJp: 'フルートの優しい音色。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'бараба́н', kana: 'バラバーン', jp: '太鼓、ドラム', pos: '名詞', gender: '男', pluralForm: 'бараба́ны', category: '音楽', exampleRu: 'Бить в бараба́н.', exampleJp: '太鼓を叩く。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'саксофо́н', kana: 'サクサフォーン', jp: 'サクソフォン (サックス)', pos: '名詞', gender: '男', pluralForm: 'саксофо́ны', category: '音楽', exampleRu: 'Джа́зовый саксофо́н.', exampleJp: 'ジャズのサックス。', accentTip: 'о́にアクセント。', level: 'A2' },
      { ru: 'мю́зикл', kana: 'ミユーズィクル', jp: 'ミュージカル', pos: '名詞', gender: '男', pluralForm: 'мю́зиклы', category: '芸術', exampleRu: 'Популярный мю́зикл.', exampleJp: '人気のミュージカル。', accentTip: 'ю́にアクセント。', level: 'A2' },
    ]
  },
  // Set 178
  {
    title: '祝典・記念日・社交',
    theme: '祝祭と式典',
    words: [
      { ru: 'юбиле́й', kana: 'ユビリエイ', jp: '記念祭、周年の祝い', pos: '名詞', gender: '男', pluralForm: 'юбиле́и', category: '行事', exampleRu: 'Отпра́здновать юбиле́й.', exampleJp: '記念の祝祭を祝う。', accentTip: 'е́にアクセント。', level: 'A2' },
      { ru: 'сва́дьба', kana: 'スヴァードゥバ', jp: '結婚式、婚礼', pos: '名詞', gender: '女', pluralForm: 'сва́дьбы', category: '行事', exampleRu: 'Золота́я сва́дьба.', exampleJp: '金婚式。', accentTip: 'а́にアクセント。дьは[д’]。', level: 'A2' },
      { ru: 'фестива́ль', kana: 'フィスチヴァーリ', jp: 'フェスティバル、映画祭・音楽祭', pos: '名詞', gender: '男', pluralForm: 'фестива́ли', category: '行事', exampleRu: 'Междунаро́дный кинофестива́ль.', exampleJp: '国際映画祭。', accentTip: 'а́にアクセント。男性名詞。', level: 'A2' },
      { ru: 'вечери́нка', kana: 'ヴィチリーンカ', jp: 'パーティー、懇親会', pos: '名詞', gender: '女', pluralForm: 'вечери́нки', category: '行事', exampleRu: 'Молодёжная вечери́нка.', exampleJp: '若者のパーティー。', accentTip: 'и́にアクセント。', level: 'A2' },
      { ru: 'анекдо́т', kana: 'アニクドート', jp: 'アネクドート (ロシアの風刺小話、ジョーク)', pos: '名詞', gender: '男', pluralForm: 'анекдо́ты', category: '文化', exampleRu: 'Рассказа́ть смешно́й анекдо́т.', exampleJp: '面白いアネクドートを話す。', accentTip: 'о́にアクセント。ロシア庶民文化の真髄。', level: 'A2' },
    ]
  },
  // Set 179
  {
    title: 'メディア・報道・広告',
    theme: '情報発信',
    words: [
      { ru: 'рекла́ма', kana: 'リクラーマ', jp: '広告、宣伝、CM', pos: '名詞', gender: '女', pluralForm: 'рекла́мы', category: 'メディア', exampleRu: 'Телевизио́нная рекла́ма.', exampleJp: 'テレビCM。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'интервью́', kana: 'インタルヴュー', jp: 'インタビュー、会見', pos: '名詞', gender: '中', category: 'メディア', exampleRu: 'Взять интервью́ у писа́теля.', exampleJp: '作家にインタビューする。', accentTip: '不変化中性名詞。', level: 'A2' },
      { ru: 'печать', kana: 'ピチャーチ', jp: '出版物、報道陣、印鑑', pos: '名詞', gender: '女', category: 'メディア', exampleRu: 'Свобо́да печа́ти.', exampleJp: '報道・出版の自由。', accentTip: '女性名詞(生格печа́ти)。', level: 'A2' },
      { ru: 'по́весть', kana: 'ポーヴィエスチ', jp: '中編小説 (ポヴェスチ)', pos: '名詞', gender: '女', pluralForm: 'по́вести', category: '文芸', exampleRu: 'По́весть Пу́шкина «Капита́нская до́чка».', exampleJp: 'プーシキンの中編小説『大尉の娘』。', accentTip: '女性名詞(生格по́вести)。', level: 'A2' },
      { ru: 'стажиро́вка', kana: 'スタジローフカ', jp: '研修、留学、インターンシップ', pos: '名詞', gender: '女', pluralForm: 'стажиро́вки', category: '学問', exampleRu: 'Языкова́я стажиро́вка в Москве́.', exampleJp: 'モスクワでの語学留学研修。', accentTip: 'о́にアクセント。', level: 'A2' },
    ]
  },
  // Set 180
  {
    title: 'インターネットと情報技術',
    theme: 'デジタル空間',
    words: [
      { ru: 'блог', kana: 'ブログ', jp: 'ブログ', pos: '名詞', gender: '男', pluralForm: 'бло́ги', category: 'ネット', exampleRu: 'Вести́ популя́рный блог.', exampleJp: '人気ブログを運営する。', accentTip: '単音節名詞。語末гは[к]。', level: 'A2' },
      { ru: 'паро́ль', kana: 'パローリ', jp: 'パスワード、合言葉', pos: '名詞', gender: '男', pluralForm: 'паро́ли', category: 'ネット', exampleRu: 'Ввести́ паро́ль.', exampleJp: 'パスワードを入力する。', accentTip: '男性名詞(生格паро́ля)。', level: 'A2' },
      { ru: 'ссы́лка', kana: 'ススィールカ', jp: 'リンク、URL、流刑', pos: '名詞', gender: '女', pluralForm: 'ссы́лки', category: 'ネット', exampleRu: 'Перейти́ по ссы́лке.', exampleJp: 'リンク先に飛ぶ。', accentTip: 'ы́にアクセント。', level: 'A2' },
      { ru: 'каллигра́фия', kana: 'カリグラーフィヤ', jp: '書道、カリグラフィー', pos: '名詞', gender: '女', category: '芸術', exampleRu: 'Иску́сство каллигра́фии.', exampleJp: '書道・カリグラフィーの芸術。', accentTip: 'а́にアクセント。', level: 'A2' },
      { ru: 'тест', kana: 'チエスト', jp: 'テスト、試験、小テスト', pos: '名詞', gender: '男', pluralForm: 'те́сты', category: '学問', exampleRu: 'Успе́шно сдать тест.', exampleJp: 'テストに無事合格する。', accentTip: 'еは硬音発音[tɛst]。', level: 'A2' },
    ]
  }
];

export const unit9Sets: WordSet[] = rawUnit9Sets.map((s, idx) =>
  buildWordSet(161 + idx, 9, idx + 1, s.title, s.theme, s.words)
);
