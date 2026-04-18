/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 首页
 * Hero Banner + 核心入口 + 角色速览 + 项目简介
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Users, Play, BookOpen, Sparkles, ChevronRight } from "lucide-react";
import { characters } from "@/lib/characters";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565225228/bYFuTqm65oC9uv9vw7WkMb/hero-banner-dsScwXWFScaUkmyaDGbaT7.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const entries = [
  { icon: Users, label: "乐魂IP馆", desc: "八位乐魂角色", href: "/ip-gallery" },
  { icon: Play, label: "声影剧场", desc: "动画与幕后", href: "/theater" },
  { icon: BookOpen, label: "鸣霄剧本阁", desc: "原创剧本", href: "/script" },
  { icon: Sparkles, label: "互动体验坊", desc: "共创征集", href: "/#interactive" },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[85vh] min-h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/40 via-purple-deep/60 to-background" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-brush text-5xl sm:text-7xl gold-text leading-tight tracking-wider mb-3">
              乐魂鸣霄引
            </h1>
            <p className="font-serif-cn text-gold-light/80 text-lg sm:text-xl tracking-[0.3em] mb-2">
              声动大唐 · 八音化灵
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-md text-sm text-parchment/70 leading-relaxed font-sans"
          >
            盛唐开元，八种传统乐器化灵为人，以声画同构的跨媒介叙事，守护华夏千年雅乐之魂。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href="#ip-gallery"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-sm gold-border bg-gold/10 text-gold font-serif-cn text-sm tracking-widest hover:bg-gold/20 transition-all duration-300"
            >
              探索乐魂
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ===== CORE ENTRIES ===== */}
      <section className="container py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {entries.map((entry, i) => {
            const Icon = entry.icon;
            return (
              <motion.div
                key={entry.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={entry.href}
                  className="group flex flex-col items-center gap-3 p-5 rounded-sm gold-border bg-card/50 hover:bg-card/80 transition-all duration-300 hover:gold-glow"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif-cn text-sm text-foreground tracking-wider">{entry.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{entry.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="section-divider mx-8" />

      {/* ===== PROJECT INTRO ===== */}
      <section className="container py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-brush text-3xl gold-text mb-6">阆影芯传</h2>
          <p className="text-sm text-parchment/70 leading-[1.9] font-sans">
            《乐魂鸣霄引》是一个融合盛唐文化与传统乐器拟人化的原创国漫IP项目。
            以古琴、琵琶、阮、二胡、埙、竖笛、筑、篪八种乐器化灵为核心角色，
            结合天宝年间的历史背景与悬疑剧情，打造"文化IP+数字科技+CV创新"的跨媒介叙事生态，
            以数字手段推动传统乐器文化的活化传承。
          </p>
        </motion.div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="section-divider mx-8" />

      {/* ===== CHARACTER GALLERY ===== */}
      <section id="ip-gallery" className="py-12">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <h2 className="font-brush text-3xl gold-text mb-3">乐魂 IP 馆</h2>
            <p className="text-sm text-muted-foreground tracking-wider">盛唐开元 · 八音化灵 · 乐魂守护 · 鸣霄九天</p>
          </motion.div>
        </div>

        {/* Horizontal scroll character cards */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-5 px-4 sm:px-8 w-max">
            {characters.map((char, i) => (
              <motion.div
                key={char.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={`/character/${char.id}`}>
                  <div className="group relative w-52 sm:w-60 flex-shrink-0 gold-border rounded-sm overflow-hidden bg-card/60 hover:gold-glow transition-all duration-500 cursor-pointer">
                    {/* Character image */}
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-b from-parchment/10 to-card/30">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    {/* Info */}
                    <div className="p-4 pt-0 relative -mt-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gold/70">{char.instrumentIcon}</span>
                        <span className="text-[10px] text-gold/60 tracking-widest font-sans">{char.instrument}</span>
                      </div>
                      <h3 className="font-serif-cn text-lg text-foreground tracking-wider">{char.name}</h3>
                      <p className="text-[11px] text-muted-foreground mt-1 font-sans">{char.role}</p>
                    </div>
                    {/* Hover accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${char.color}, transparent)` }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mt-8 text-center">
          <p className="text-xs text-muted-foreground/60 italic font-sans">
            — 点击角色卡片查看详细人设档案 —
          </p>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="section-divider mx-8" />

      {/* ===== WORLD VIEW TEASER ===== */}
      <section className="container py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="gold-border rounded-sm p-8 sm:p-12 bg-card/40 text-center"
        >
          <h2 className="font-brush text-2xl gold-text mb-4">天宝迷局</h2>
          <p className="text-sm text-parchment/60 leading-[1.9] max-w-xl mx-auto font-sans mb-6">
            天宝元年，教坊司连发离奇命案。七位乐魂齐聚长安，在雅俗之争的暗流中，
            揭开一个关乎天下音律存亡的惊天阴谋……大理寺卿裴承钧的音律控魂术，
            究竟隐藏着怎样的野心？
          </p>
          <Link
            href="/script"
            className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors font-serif-cn tracking-wider"
          >
            进入剧本阁
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ===== INTERACTIVE SECTION ===== */}
      <section id="interactive" className="container py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-8"
        >
          <h2 className="font-brush text-2xl gold-text mb-3">互动体验坊</h2>
          <p className="text-sm text-muted-foreground">参与共创，让乐魂的故事延续</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "角色线稿下载", desc: "下载高清线稿，用你的色彩诠释乐魂" },
            { title: "共创征集", desc: "皮影DIY、同人创作、剧本续写" },
            { title: "乐器小百科", desc: "八种传统乐器的历史与音色" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="gold-border rounded-sm p-6 bg-card/40 hover:bg-card/60 transition-all duration-300 cursor-pointer"
              onClick={() => toast("功能即将上线", { description: "敬请期待后续更新" })}
            >
              <h3 className="font-serif-cn text-sm text-foreground tracking-wider mb-2">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="section-divider mx-8" />

      {/* ===== ABOUT / FOOTER ===== */}
      <section id="about" className="container py-12 text-center">
        <h2 className="font-brush text-2xl gold-text mb-4">关于我们</h2>
        <p className="text-sm text-parchment/60 leading-[1.9] max-w-lg mx-auto font-sans mb-6">
          声影动漫工作室致力于以原创IP推动中华传统文化的数字化传承。
          《乐魂鸣霄引》是我们的核心项目，融合国漫、CV配音与非遗文化，
          探索"文化IP+数字科技"的创新路径。
        </p>
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/50">
          <span>声影动漫工作室</span>
          <span>·</span>
          <span>版权所有</span>
          <span>·</span>
          <span>2026</span>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
