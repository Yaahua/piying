/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 鸣霄剧本阁
 * 世界观导读 + 剧情高光节选 + 创作手记
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Zap, Feather } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const SCRIPT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565225228/bYFuTqm65oC9uv9vw7WkMb/script-bg-F8MxfhiP6A7iYSY9u83fuL.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const highlights = [
  {
    chapter: "第一幕",
    title: "教坊司连环命案",
    excerpt:
      "天宝元年秋，长安教坊司接连发生三起离奇命案。死者皆为教坊乐师，面容安详如睡，唯独双耳渗出金色液体。大理寺卿裴承钧亲自督办此案，却在现场发现了一枚刻有古老音律符号的玉佩……",
    mood: "悬疑",
  },
  {
    chapter: "第三幕",
    title: "谢云止与薛枕月的首次交锋",
    excerpt:
      "太学博士谢云止以一曲《流水》试探教坊司新来的琵琶乐师。琴音如水，琵琶如刀——两种截然不同的音律在大殿中交织碰撞。薛枕月的琵琶声中暗藏杀意，谢云止的琴音里却藏着一个关于薛家的秘密……",
    mood: "对决",
  },
  {
    chapter: "第七幕",
    title: "七位乐魂齐聚长安",
    excerpt:
      "当古琴、琵琶、阮、二胡、埙、竖笛、篪七种乐音同时响起，长安城上空浮现出一道金色的音律屏障。七位乐魂第一次以真身示人，他们的命运从此紧紧交织在一起。而在大理寺的暗室中，裴承钧的筑声悄然奏响……",
    mood: "高燃",
  },
];

export default function ScriptHall() {
  return (
    <div className="min-h-screen pb-20">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gold/10"
        style={{ background: "rgba(30, 18, 45, 0.9)" }}>
        <div className="flex items-center h-14 px-4 max-w-lg mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs tracking-wider font-sans">返回</span>
          </Link>
          <span className="flex-1 text-center font-serif-cn text-sm tracking-widest text-foreground">
            鸣霄剧本阁
          </span>
          <span className="w-14" />
        </div>
      </div>

      <div className="pt-14">
        {/* Header */}
        <section className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${SCRIPT_BG})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/50 to-background" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="font-brush text-3xl gold-text mb-2">鸣霄剧本阁</h1>
            <p className="text-xs text-parchment/50 tracking-widest font-sans">原创剧本《乐魂鸣霄令》</p>
          </div>
        </section>

        {/* World View */}
        <section className="container py-10">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-5">
              <Globe className="w-4 h-4 text-gold" />
              <h2 className="font-serif-cn text-lg text-foreground tracking-wider">世界观导读</h2>
            </div>
            <div className="gold-border rounded-sm p-6 bg-card/40 space-y-4">
              <div>
                <h3 className="font-serif-cn text-sm text-gold mb-2">时代背景</h3>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">
                  故事发生在唐玄宗天宝年间，盛唐文化达到巅峰，教坊司作为皇家音乐机构掌管天下雅乐。
                  然而在繁华表象之下，一场关于"雅乐"与"俗乐"的文化之争正在暗流涌动。
                </p>
              </div>
              <div className="section-divider" />
              <div>
                <h3 className="font-serif-cn text-sm text-gold mb-2">乐器化灵</h3>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">
                  当一件乐器承载了足够深厚的情感与灵力，便有可能在特定条件下"化灵"——
                  以人形行走于世间。八种传统乐器各自化灵，成为守护华夏音律之魂的"乐魂"。
                  他们既是乐器的化身，也是音律文化的守护者。
                </p>
              </div>
              <div className="section-divider" />
              <div>
                <h3 className="font-serif-cn text-sm text-gold mb-2">核心矛盾</h3>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">
                  大理寺卿裴承钧（筑之化灵）妄图以"音律控魂术"统一天下乐制，
                  消灭一切不合"正统"的音律形式。七位乐魂必须联手对抗这一阴谋，
                  在守护音律多样性的同时，揭开各自身世的秘密。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="section-divider mx-8" />

        {/* Story Highlights */}
        <section className="container py-10">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-cinnabar" />
            <h2 className="font-serif-cn text-lg text-foreground tracking-wider">剧情高光节选</h2>
          </div>
          <div className="space-y-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.chapter}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="gold-border rounded-sm p-5 bg-card/40"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-sm bg-cinnabar/20 text-cinnabar-light font-sans">
                    {item.mood}
                  </span>
                  <span className="text-[10px] text-gold/50 tracking-widest font-sans">{item.chapter}</span>
                </div>
                <h3 className="font-serif-cn text-sm text-foreground tracking-wider mb-3">{item.title}</h3>
                <p className="text-sm text-parchment/60 leading-[1.9] font-sans">{item.excerpt}</p>
                <p className="text-xs text-gold/40 mt-3 italic font-sans text-right">—— 未完待续 ——</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="section-divider mx-8" />

        {/* Creator Notes */}
        <section className="container py-10">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-5">
              <Feather className="w-4 h-4 text-gold" />
              <h2 className="font-serif-cn text-lg text-foreground tracking-wider">创作手记</h2>
            </div>
            <div className="gold-border rounded-sm p-6 bg-card/40">
              <p className="text-sm text-parchment/70 leading-[2] font-sans">
                创作《乐魂鸣霄令》的初衷，是想让更多年轻人通过故事的方式认识传统乐器。
                在构思每一位角色时，我们都会先深入研究对应乐器的历史渊源、音色特点与文化象征，
                再将这些特质融入角色的性格、武器与服饰设计中。
              </p>
              <p className="text-sm text-parchment/70 leading-[2] font-sans mt-4">
                比如谢云止的"太极两仪棋"，灵感来源于古琴曲中阴阳交替的旋律结构；
                薛枕月的"九环斩月刀"，则取自琵琶演奏中"扫弦"技法的凌厉感。
                我们希望每一个设定都经得起考究，让文化传承不再是空洞的口号，
                而是融入每一个细节的匠心。
              </p>
              <p className="text-xs text-muted-foreground mt-4 font-sans text-right">—— 编剧团队</p>
            </div>
          </motion.div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
