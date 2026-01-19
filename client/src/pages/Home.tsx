/**
 * Roblox Game Trend Analysis Report
 * Design: Data Dashboard Elegance - Dark mode with glassmorphism
 * Color: Cyan (#00d4ff), Magenta (#ff006e), Lime (#39ff14) accents on dark background
 */

import HeroSection from "@/components/HeroSection";
import MarketOverview from "@/components/MarketOverview";
import GenreAnalysis from "@/components/GenreAnalysis";
import TrendChart from "@/components/TrendChart";
import NewsMarketSection from "@/components/NewsMarketSection";
import GameIdeas from "@/components/GameIdeas";
import SuccessFactors from "@/components/SuccessFactors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.75_0.18_195)] to-[oklch(0.7_0.2_330)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-lg">Roblox Trend Analysis</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#overview" className="hover:text-foreground transition-colors">市場概要</a>
            <a href="#genres" className="hover:text-foreground transition-colors">ジャンル分析</a>
            <a href="#trends" className="hover:text-foreground transition-colors">トレンド</a>
            <a href="#news-market" className="hover:text-foreground transition-colors">ニュース</a>
            <a href="#ideas" className="hover:text-foreground transition-colors">ゲームアイデア</a>
            <a href="#success" className="hover:text-foreground transition-colors">成功要因</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <MarketOverview />
        <GenreAnalysis />
        <TrendChart />
        <NewsMarketSection />
        <GameIdeas />
        <SuccessFactors />
      </main>

      <Footer />
    </div>
  );
}
