/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 角色数据
 * 使用用户提供的原始皮影风格立绘
 */

export interface Character {
  id: string;
  name: string;
  instrument: string;
  instrumentIcon: string;
  role: string;
  gender: string;
  image: string;
  poem: string;
  poemAuthor: string;
  background: string;
  personality: string;
  weapon: string;
  weaponDesc: string;
  costume: string;
  pattern: string;
  patternMeaning: string;
  trivia: string;
  color: string;
  colorAccent: string;
}

const CHARACTER_IMAGE_BASE = `${import.meta.env.BASE_URL}characters/`;

export const characters: Character[] = [
  {
    id: "xie-yunzhi",
    name: "谢云止",
    instrument: "古琴",
    instrumentIcon: "🎵",
    role: "谋士 / 太学博士",
    gender: "男",
    image: `${CHARACTER_IMAGE_BASE}xie-yunzhi-nobg.png`,
    poem: "泠泠七弦上，静听松风寒。",
    poemAuthor: "刘长卿《听弹琴》",
    background: "化灵之初师从道士吴筠，后入太学任乐博士，编纂《开元雅乐谱》。他以清冷高傲的姿态行走于朝堂与江湖之间，实则内心深藏对音律之道的执着守护。",
    personality: "清冷疏高，以冷傲伪装真实情绪。看似不近人情，实则重情重义，是主角团中的智囊核心。",
    weapon: "太极两仪棋",
    weaponDesc: "以棋局推演天下大势，棋子可化为攻防兼备的灵力阵法。黑白二色棋子对应阴阳两仪，落子之间暗合音律节拍。",
    costume: "紫色圆领襕衫、乌纱帽、唐白玉龙文朝带",
    pattern: "鹤纹、竹纹",
    patternMeaning: "鹤纹象征高洁超脱，竹纹寓意虚心有节。二者结合，映射谢云止清高自持的文人风骨。",
    trivia: "习惯在思考时无意识地以指尖叩击桌面，节奏恰好是古琴名曲《流水》的旋律片段。",
    color: "#6B4C8A",
    colorAccent: "#9B7DB8",
  },
  {
    id: "xue-zhenyue",
    name: "薛枕月",
    instrument: "琵琶",
    instrumentIcon: "🎶",
    role: "将门女将",
    gender: "女",
    image: `${CHARACTER_IMAGE_BASE}xue-zhenyue-nobg.png`,
    poem: "大弦嘈嘈如急雨，小弦切切如私语。",
    poemAuthor: "白居易《琵琶行》",
    background: "名将薛丁山养女兼徒弟，薛府被满门抄斩后流落教坊司。在歌舞升平的表象下，她从未放弃为薛家翻案的执念。",
    personality: "妩媚侍人的外表下是酷飒凌厉的将门风骨。舞姿如花，刀法如霜，亦柔亦刚。",
    weapon: "九环斩月刀",
    weaponDesc: "薛家祖传兵刃，刀身九环在挥舞时发出如琵琶弦音般的清鸣。月圆之夜刀芒最盛，可斩破一切音律屏障。",
    costume: "齐胸褶裙、披帛、大袖衫、梳篦花钿",
    pattern: "紫檀木画槽琵琶纹样、牡丹",
    patternMeaning: "琵琶纹样铭记乐魂本源，牡丹象征国色天香的盛唐气象，也暗喻她在教坊司中的绝代风华。",
    trivia: "每逢月圆之夜会独自登楼弹奏一曲《霓裳羽衣曲》，据说曲中暗藏薛家军阵法的排列密码。",
    color: "#8B4A3A",
    colorAccent: "#C4725E",
  },
  {
    id: "ruan-ling",
    name: "阮泠",
    instrument: "阮",
    instrumentIcon: "🎼",
    role: "治愈者",
    gender: "男",
    image: `${CHARACTER_IMAGE_BASE}ruan-ling-nobg.png`,
    poem: "掩抑复凄清，非琴不是筝。",
    poemAuthor: "白居易《和令狐仆射小饮听阮咸》",
    background: "蜀中匠人江晚枫耗十年心血铸造阮咸琴，遭官府抄家之际，坐于火场中以血涂琴，琴魂因此化灵。阮泠继承了匠人的温柔与坚韧。",
    personality: "温柔如盛唐诗人笔下的'林下之风'，是主角团中的情感纽带与治愈之光。",
    weapon: "慈烬符",
    weaponDesc: "以魂力凝聚的治疗符咒，可修复同伴的灵力损伤。符咒燃烧时散发温暖的橘色光芒，如同匠人炉火的余烬。",
    costume: "直领大袖长衫、褙子、百褶裙",
    pattern: "忍冬纹",
    patternMeaning: "忍冬纹是佛教艺术中常见的纹样，象征坚韧不拔与永恒生命力，恰如阮泠在烈火中重生的经历。",
    trivia: "喜欢收集各地的茶叶，认为品茶与品音有异曲同工之妙——都需要静心感受其中的层次变化。",
    color: "#5A8FA8",
    colorAccent: "#7DB8D4",
  },
  {
    id: "mai-le",
    name: "麦勒",
    instrument: "二胡",
    instrumentIcon: "🎻",
    role: "草原少年",
    gender: "男",
    image: `${CHARACTER_IMAGE_BASE}maile-nobg.png`,
    poem: "胡姬貌如花，当垆笑春风。",
    poemAuthor: "李白《前有一樽酒行》",
    background: "全名安呼麦格日勒，草原战场上吸收马嘶鸣与胡笳声化形，借丝绸之路入长安。他带着草原的自由与野性，在宫廷礼教中显得格格不入。",
    personality: "爽朗如草原上的胡旋舞，厌恶宫廷礼教的束缚。直率热情，重义轻利，是团队中的活力担当。",
    weapon: "弦幻弓",
    weaponDesc: "由胡琴琴弦凝练而成的灵弓，可发射'风弦箭'。箭矢飞行时发出二胡般的悠长鸣音，箭到之处风起云涌。",
    costume: "改良版游牧民族袍服、黑色靴履",
    pattern: "普斯贺纹",
    patternMeaning: "普斯贺纹是丝绸之路上流传的装饰纹样，融合了中亚与东方的审美元素，象征文化交融与自由奔放。",
    trivia: "到长安后最爱吃胡饼，经常在训练间隙偷偷藏几个在袖子里，被谢云止发现后总是装作若无其事。",
    color: "#B8860B",
    colorAccent: "#DAA520",
  },
  {
    id: "su-mingyou",
    name: "苏冥幽",
    instrument: "埙",
    instrumentIcon: "🌑",
    role: "侠盗",
    gender: "男",
    image: `${CHARACTER_IMAGE_BASE}su-mingyou-nobg.png`,
    poem: "千山鸟飞绝，万径人踪灭。",
    poemAuthor: "柳宗元《江雪》",
    background: "与篪一同化灵于长安城西贫民窟，目睹底层百姓的苦难后，以侠盗身份劫富济贫。白日隐于市井，夜晚出没于权贵府邸。",
    personality: "外冷内热，沉默寡言，习惯隐于黑暗之中。看似冷漠无情，实则对弱者怀有深切的悲悯。",
    weapon: "泣血翎（×6）",
    weaponDesc: "六把指尖短剑，可藏于袖中随时发射。剑身刻有饕餮纹，命中目标时会发出埙声般低沉的呜咽。",
    costume: "唐代改良胡服",
    pattern: "饕餮纹",
    patternMeaning: "饕餮纹源自上古青铜器，象征威慑与力量。用于苏冥幽身上，暗示他在黑暗中守护正义的矛盾身份。",
    trivia: "有一只收养的黑猫，名叫'小埙'。据说这只猫能感知危险，每次苏冥幽出任务前它都会蹭他的脚踝。",
    color: "#2D2D2D",
    colorAccent: "#555555",
  },
  {
    id: "liu-yaocong",
    name: "柳瑶琮",
    instrument: "竖笛",
    instrumentIcon: "🎵",
    role: "情报掌控者",
    gender: "女",
    image: `${CHARACTER_IMAGE_BASE}liu-yaocong-nobg.png`,
    poem: "谁家玉笛暗飞声，散入春风满洛城。",
    poemAuthor: "李白《春夜洛城闻笛》",
    background: "江南富商养女，精通赌术，管理赌坊。凭借赌坊的信息网络，她掌握着长安城中最隐秘的情报，是主角团的'千里眼'。",
    personality: "活泼如《春莺啭》曲调，消息灵通，八面玲珑。看似没心没肺，实则心思缜密，从不做亏本买卖。",
    weapon: "错金银骰子",
    weaponDesc: "六面骰子分别对应风、雷、影、幻、惑、引六种能力。掷骰结果决定释放何种术法，充满不确定性与戏剧张力。",
    costume: "齐胸衫裙",
    pattern: "桃花纹、唐代银鎏金花鸟纹香囊",
    patternMeaning: "桃花纹象征春意盎然与灵动俏皮，花鸟纹香囊则暗示她善于在美丽外表下隐藏锋利的情报触角。",
    trivia: "随身携带一副特制骰子，无聊时会单手抛接把玩。据说她从未在赌局中输过，但没人知道她是否作弊。",
    color: "#D4A5A5",
    colorAccent: "#E8C4C4",
  },
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}
