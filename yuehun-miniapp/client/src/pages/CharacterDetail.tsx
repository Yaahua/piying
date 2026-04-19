/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 角色详情页
 * 展示角色立绘、背景故事、武器、服饰纹样等
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Swords, Shirt, Palette, BookOpen, Sparkles } from "lucide-react";
import { getCharacterById, characters } from "@/lib/characters";
import BottomNav from "@/components/BottomNav";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const char = getCharacterById(id || "");

  if (!char) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">未找到该角色</p>
          <Link href="/" className="text-gold hover:text-gold-light text-sm">返回首页</Link>
        </div>
      </div>
    );
  }

  // Find adjacent characters for navigation
  const currentIndex = characters.findIndex((c) => c.id === char.id);
  const prevChar = currentIndex > 0 ? characters[currentIndex - 1] : null;
  const nextChar = currentIndex < characters.length - 1 ? characters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pb-20">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gold/10"
        style={{ background: "rgba(30, 18, 45, 0.9)" }}>
        <div className="flex items-center h-14 px-4 max-w-lg mx-auto">
          <Link href="/ip-gallery" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs tracking-wider font-sans">返回</span>
          </Link>
          <span className="flex-1 text-center font-serif-cn text-sm tracking-widest text-foreground">
            {char.name}
          </span>
          <span className="w-14" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-14">
        {/* Hero: Character image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden"
            style={{
              background: `radial-gradient(ellipse at center, ${char.color}20 0%, transparent 70%), linear-gradient(to bottom, var(--background), rgba(30,18,45,0.6))`,
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              className="h-full max-h-[480px] object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </motion.section>

        {/* Character info */}
        <div className="container -mt-8 relative z-10">
          {/* Name & basic info */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-8"
          >
            <p className="text-xs text-gold/60 tracking-[0.4em] mb-2 font-sans">{char.instrument} · {char.role}</p>
            <h1 className="font-brush text-4xl gold-text mb-3">{char.name}</h1>
            <div className="gold-border rounded-sm inline-block px-6 py-3 bg-card/40 mt-2">
              <p className="font-brush text-sm text-parchment/70 italic leading-relaxed">
                「{char.poem}」
              </p>
              <p className="text-[10px] text-muted-foreground mt-1 font-sans">—— {char.poemAuthor}</p>
            </div>
          </motion.div>

          {/* Info sections */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Background */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <InfoCard icon={BookOpen} title="身世背景" color={char.color}>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">{char.background}</p>
              </InfoCard>
            </motion.div>

            {/* Personality */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <InfoCard icon={Sparkles} title="性格解析" color={char.color}>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">{char.personality}</p>
              </InfoCard>
            </motion.div>

            {/* Weapon */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <InfoCard icon={Swords} title={`武器：${char.weapon}`} color={char.color}>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">{char.weaponDesc}</p>
              </InfoCard>
            </motion.div>

            {/* Costume */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <InfoCard icon={Shirt} title="服饰设计" color={char.color}>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">{char.costume}</p>
              </InfoCard>
            </motion.div>

            {/* Pattern */}
            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <InfoCard icon={Palette} title={`纹样：${char.pattern}`} color={char.color}>
                <p className="text-sm text-parchment/70 leading-[1.9] font-sans">{char.patternMeaning}</p>
              </InfoCard>
            </motion.div>

            {/* Trivia */}
            <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="gold-border rounded-sm p-5 bg-card/30">
                <p className="text-xs text-gold/50 tracking-widest mb-2 font-sans">细节彩蛋</p>
                <p className="text-sm text-parchment/60 leading-[1.9] font-sans italic">{char.trivia}</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation between characters */}
          <div className="flex items-center justify-between mt-12 mb-8">
            {prevChar ? (
              <Link
                href={`/character/${prevChar.id}`}
                className="flex items-center gap-2 text-gold/60 hover:text-gold text-sm transition-colors font-sans"
              >
                <ArrowLeft className="w-3 h-3" />
                {prevChar.name}
              </Link>
            ) : (
              <span />
            )}
            {nextChar ? (
              <Link
                href={`/character/${nextChar.id}`}
                className="flex items-center gap-2 text-gold/60 hover:text-gold text-sm transition-colors font-sans"
              >
                {nextChar.name}
                <ArrowLeft className="w-3 h-3 rotate-180" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  color,
  children,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="gold-border rounded-sm p-5 bg-card/40">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: `${color}30` }}
        >
          <Icon className="w-3.5 h-3.5 text-gold" />
        </div>
        <h3 className="font-serif-cn text-sm text-foreground tracking-wider">{title}</h3>
      </div>
      {children}
    </div>
  );
}
