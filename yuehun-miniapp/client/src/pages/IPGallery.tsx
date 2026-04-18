/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 乐魂IP馆
 * 展示全部角色的网格布局页面
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { characters } from "@/lib/characters";
import BottomNav from "@/components/BottomNav";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function IPGallery() {
  return (
    <div className="min-h-screen pb-20">
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gold/10"
        style={{ background: "rgba(30, 18, 45, 0.9)" }}
      >
        <div className="flex items-center h-14 px-4 max-w-lg mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs tracking-wider font-sans">返回</span>
          </Link>
          <span className="flex-1 text-center font-serif-cn text-sm tracking-widest text-foreground">
            乐魂IP馆
          </span>
          <span className="w-14" />
        </div>
      </div>

      <div className="pt-14">
        {/* Header */}
        <section className="py-10 text-center">
          <h1 className="font-brush text-3xl gold-text mb-2">乐魂 IP 馆</h1>
          <p className="text-xs text-muted-foreground tracking-widest font-sans">
            盛唐开元 · 八音化灵 · 乐魂守护
          </p>
        </section>

        {/* Character Grid */}
        <section className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                  <div className="group gold-border rounded-sm overflow-hidden bg-card/60 hover:gold-glow transition-all duration-500 cursor-pointer">
                    {/* Character image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-parchment/10 to-card/30">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    {/* Info */}
                    <div className="p-3 pt-0 relative -mt-3">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-xs text-gold/70">
                          {char.instrumentIcon}
                        </span>
                        <span className="text-[10px] text-gold/60 tracking-widest font-sans">
                          {char.instrument}
                        </span>
                      </div>
                      <h3 className="font-serif-cn text-base text-foreground tracking-wider">
                        {char.name}
                      </h3>
                      <p className="text-[10px] text-muted-foreground mt-0.5 font-sans">
                        {char.role}
                      </p>
                    </div>
                    {/* Hover accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${char.color}, transparent)`,
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer hint */}
        <div className="container py-8 text-center">
          <p className="text-xs text-muted-foreground/50 italic font-sans">
            — 点击角色卡片查看详细人设档案 —
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
