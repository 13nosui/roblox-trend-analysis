/**
 * HeroSection - 春の桜をテーマにしたヒーローセクション
 */

import { motion } from "framer-motion";
import { ChevronDown, Users, Gamepad2, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("concept");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/proposal-hero.png"
          alt="Spring village"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-transparent to-pink-50/90" />
      </div>

      {/* Floating Petals Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-200 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-sm font-medium text-pink-700">Roblox向け放置型シミュレーション</span>
          </motion.div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            ほのぼの日本村
          </h1>
          <p className="font-display text-2xl md:text-3xl text-pink-600 mb-6">
            〜のんびり商店街物語〜
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
            日本の美しい四季と伝統文化の中で、のんびりと自分だけのお店と村を育てる
            癒し系放置型シミュレーションゲーム
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg"
            >
              <div className="p-2 rounded-lg bg-pink-100">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">500万+</p>
                <p className="text-sm text-gray-500">目標MAU</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg"
            >
              <div className="p-2 rounded-lg bg-green-100">
                <Gamepad2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">6種類</p>
                <p className="text-sm text-gray-500">プレミアム職業</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg"
            >
              <div className="p-2 rounded-lg bg-amber-100">
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">95%</p>
                <p className="text-sm text-gray-500">成功可能性</p>
              </div>
            </motion.div>
          </div>

          {/* Version Info */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>企画書 v1.0</span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span>2026年1月10日</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-pink-600">
            <span className="text-sm font-medium">スクロールして詳細を見る</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
