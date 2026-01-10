/**
 * Hero Section - ヒーローセクション
 * Design: ガラスモーフィズム + グラデーション背景
 */
import { motion } from "framer-motion";
import { ChevronDown, TrendingUp, Users, Gamepad2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(67, 97, 238, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(67, 97, 238, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">2025-2026年 最新データ</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="gradient-text">Roblox</span>
            <br />
            <span className="text-foreground">ゲームトレンド分析</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            国内外で人気のRobloxゲームの傾向を分析し、
            <br className="hidden sm:block" />
            次世代のヒットゲームを生み出すためのインサイトを提供します。
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12"
          >
            <div className="glass-card p-4 sm:p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">7770万+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">日間アクティブユーザー</div>
            </div>
            <div className="glass-card p-4 sm:p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">4000万+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">公開ゲーム数</div>
            </div>
            <div className="glass-card p-4 sm:p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">691億</div>
              <div className="text-xs sm:text-sm text-muted-foreground">最高訪問数（単一ゲーム）</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">スクロールして詳細を見る</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
