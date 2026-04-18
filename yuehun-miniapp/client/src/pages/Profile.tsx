/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 我的（个人中心）
 * 展示用户信息、收藏、设置等占位功能
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Download,
  MessageSquare,
  Settings,
  ChevronRight,
  User,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const menuItems = [
  { icon: Heart, label: "我的收藏", desc: "已收藏的角色与剧情" },
  { icon: Download, label: "下载管理", desc: "已下载的线稿与素材" },
  { icon: MessageSquare, label: "互动记录", desc: "评论与共创投稿" },
  { icon: Settings, label: "设置", desc: "通知、隐私与关于" },
];

export default function Profile() {
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
            我的
          </span>
          <span className="w-14" />
        </div>
      </div>

      <div className="pt-14">
        {/* User avatar area */}
        <section className="py-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto rounded-full gold-border flex items-center justify-center bg-card/60 mb-4">
              <User className="w-8 h-8 text-gold/60" />
            </div>
            <h2 className="font-serif-cn text-lg text-foreground tracking-wider mb-1">
              乐魂守护者
            </h2>
            <p className="text-xs text-muted-foreground font-sans">
              点击登录，开启你的乐魂之旅
            </p>
          </motion.div>
        </section>

        <div className="section-divider mx-8" />

        {/* Menu items */}
        <section className="container py-6">
          <div className="space-y-3">
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="gold-border rounded-sm p-4 bg-card/40 hover:bg-card/60 transition-all duration-300 cursor-pointer flex items-center gap-4"
                  onClick={() =>
                    toast("功能即将上线", {
                      description: "敬请期待后续更新",
                    })
                  }
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif-cn text-sm text-foreground tracking-wider">
                      {item.label}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5 font-sans">
                      {item.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="section-divider mx-8" />

        {/* App info */}
        <section className="container py-8 text-center">
          <p className="font-brush text-lg gold-text mb-2">乐魂鸣霄引</p>
          <p className="text-[10px] text-muted-foreground/50 font-sans">
            阆影芯传 · MVP v1.0
          </p>
          <p className="text-[10px] text-muted-foreground/40 font-sans mt-1">
            声影动漫工作室 出品
          </p>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
