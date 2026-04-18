/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 声影剧场
 * 视频展示区（MVP阶段使用占位内容）
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Heart, Share2, MessageCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";

const WORLD_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565225228/bYFuTqm65oC9uv9vw7WkMb/world-bg-Baa9zaWhWQNiqG2fRN5APU.webp";

const videos = [
  {
    id: "1",
    title: "《乐魂鸣霄引》概念动画预告",
    category: "原创动画",
    duration: "02:30",
    desc: "八位乐魂首次集结，声画同构的视觉盛宴",
    thumbnail: WORLD_BG,
  },
  {
    id: "2",
    title: "角色设计幕后纪实",
    category: "幕后创作",
    duration: "05:12",
    desc: "从传统纹样到皮影风格，角色诞生的全过程",
    thumbnail: WORLD_BG,
  },
  {
    id: "3",
    title: "CV配音花絮：谢云止篇",
    category: "幕后创作",
    duration: "03:45",
    desc: "声优如何赋予古琴化灵以灵魂",
    thumbnail: WORLD_BG,
  },
  {
    id: "4",
    title: "盛唐乐器文化科普：古琴与琵琶",
    category: "文化科普",
    duration: "04:20",
    desc: "穿越千年的音律之美",
    thumbnail: WORLD_BG,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Theater() {
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
            声影剧场
          </span>
          <span className="w-14" />
        </div>
      </div>

      <div className="pt-14">
        {/* Header */}
        <section className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${WORLD_BG})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/60 to-background" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="font-brush text-3xl gold-text mb-2">声影剧场</h1>
            <p className="text-xs text-parchment/50 tracking-widest font-sans">动画样片 · 幕后纪实 · 文化科普</p>
          </div>
        </section>

        {/* Video list */}
        <div className="container py-8 space-y-5">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="gold-border rounded-sm overflow-hidden bg-card/40 cursor-pointer hover:gold-glow transition-all duration-300"
              onClick={() => toast("视频播放功能即将上线", { description: "敬请期待后续更新" })}
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-gold ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-sm bg-cinnabar/80 text-white font-sans">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-sm bg-black/60 text-parchment/80 font-sans">
                    {video.duration}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="font-serif-cn text-sm text-foreground tracking-wider mb-1">{video.title}</h3>
                <p className="text-[11px] text-muted-foreground font-sans">{video.desc}</p>
                {/* Actions */}
                <div className="flex items-center gap-5 mt-3 pt-3 border-t border-gold/10">
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-cinnabar transition-colors"
                    onClick={(e) => { e.stopPropagation(); toast("已点赞"); }}
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-sans">喜欢</span>
                  </button>
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-gold transition-colors"
                    onClick={(e) => { e.stopPropagation(); toast("评论功能即将上线"); }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-sans">评论</span>
                  </button>
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-gold transition-colors"
                    onClick={(e) => { e.stopPropagation(); toast("分享功能即将上线"); }}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-sans">分享</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
