/*
 * 「鎏金教坊」盛唐宫廷华彩风 — 底部导航栏
 * 模拟微信小程序TabBar，5个入口
 */
import { useLocation, Link } from "wouter";
import { Home, Users, Play, BookOpen, User } from "lucide-react";

const tabs = [
  { path: "/", label: "首页", icon: Home },
  { path: "/ip-gallery", label: "IP馆", icon: Users },
  { path: "/theater", label: "剧场", icon: Play },
  { path: "/script", label: "剧本阁", icon: BookOpen },
  { path: "/profile", label: "我的", icon: User },
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 backdrop-blur-xl"
      style={{ background: "rgba(30, 18, 45, 0.95)" }}
    >
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const isActive =
            tab.path === "/"
              ? location === "/"
              : location.startsWith(tab.path);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`relative flex flex-col items-center gap-0.5 py-1 px-3 transition-all duration-300 ${
                isActive
                  ? "text-gold"
                  : "text-muted-foreground hover:text-gold-light"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium tracking-wide">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-1 h-1 rounded-full bg-gold" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
