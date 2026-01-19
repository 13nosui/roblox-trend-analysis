/**
 * Hero Section - Roblox Trend Analysis
 * Design: Dark mode with glassmorphism, cyan/magenta/lime accents
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Gamepad2, BarChart3, ChevronDown } from "lucide-react";

const stats = [
  { label: "累計訪問数TOP", value: "69.13億", suffix: "回", icon: TrendingUp, color: "cyan" },
  { label: "同時接続記録", value: "2,196万", suffix: "人", icon: Users, color: "magenta" },
  { label: "分析ゲーム数", value: "50", suffix: "+", icon: Gamepad2, color: "lime" },
  { label: "成長ジャンル", value: "6", suffix: "種類", icon: BarChart3, color: "orange" },
];

function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const numericPart = value.replace(/[^0-9.]/g, "");
    const suffix = value.replace(/[0-9.,]/g, "");
    const targetNum = parseFloat(numericPart.replace(/,/g, ""));
    
    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * easeOut;
      
      if (targetNum >= 1000) {
        setDisplayValue(current.toLocaleString("ja-JP", { maximumFractionDigits: 2 }) + suffix);
      } else {
        setDisplayValue(Math.round(current).toString() + suffix);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    animate();
  }, [value, duration]);
  
  return <span>{displayValue}</span>;
}

export default function HeroSection() {
  const getGlowClass = (color: string) => {
    switch (color) {
      case "cyan": return "hover:shadow-[0_0_30px_oklch(0.75_0.18_195_/_0.4)]";
      case "magenta": return "hover:shadow-[0_0_30px_oklch(0.7_0.2_330_/_0.4)]";
      case "lime": return "hover:shadow-[0_0_30px_oklch(0.8_0.2_140_/_0.4)]";
      default: return "";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "cyan": return "text-[oklch(0.75_0.18_195)]";
      case "magenta": return "text-[oklch(0.7_0.2_330)]";
      case "lime": return "text-[oklch(0.8_0.2_140)]";
      case "orange": return "text-[oklch(0.75_0.15_60)]";
      default: return "text-primary";
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "cyan": return "bg-[oklch(0.75_0.18_195_/_0.1)]";
      case "magenta": return "bg-[oklch(0.7_0.2_330_/_0.1)]";
      case "lime": return "bg-[oklch(0.8_0.2_140_/_0.1)]";
      case "orange": return "bg-[oklch(0.75_0.15_60_/_0.1)]";
      default: return "bg-primary/10";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.13_0.02_270)] via-[oklch(0.15_0.03_280)] to-[oklch(0.12_0.02_260)]" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[oklch(0.75_0.18_195_/_0.08)] rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[oklch(0.7_0.2_330_/_0.08)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[oklch(0.8_0.2_140_/_0.06)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75_0.18_195_/_0.3) 1px, transparent 1px),
                             linear-gradient(90deg, oklch(0.75_0.18_195_/_0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.8_0.2_140)] animate-pulse" />
            <span className="text-sm text-muted-foreground">2025-2026年 最新データ</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">Roblox</span>
            <br />
            <span className="text-foreground">ゲームトレンド分析</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            国内外の人気ゲームデータを分析し、次のヒットゲームを生み出すための
            <br className="hidden md:block" />
            インサイトと具体的なゲームアイデアを提案します
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`glass rounded-2xl p-6 transition-all duration-300 ${getGlowClass(stat.color)}`}
            >
              <div className={`w-12 h-12 rounded-xl ${getBgColor(stat.color)} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${getTextColor(stat.color)}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${getTextColor(stat.color)}`} style={{ fontFamily: "'Space Grotesk', monospace" }}>
                <AnimatedNumber value={stat.value} />
                <span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center mt-16"
        >
          <span className="text-sm text-muted-foreground mb-2">スクロールして詳細を見る</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
