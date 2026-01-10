/**
 * Robloxゲームトレンド分析レポート
 * Design: Data Dashboard Elegance - ガラスモーフィズム + グラデーション
 */
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Gamepad2, 
  Users, 
  Lightbulb,
  ChevronDown,
  BarChart3,
  Globe,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MarketOverview from "@/components/MarketOverview";
import GenreAnalysis from "@/components/GenreAnalysis";
import TrendChart from "@/components/TrendChart";
import GameIdeas from "@/components/GameIdeas";
import SuccessFactors from "@/components/SuccessFactors";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const navItems = [
    { id: "overview", label: "市場概要", icon: BarChart3 },
    { id: "genres", label: "ジャンル分析", icon: Gamepad2 },
    { id: "trends", label: "トレンド", icon: TrendingUp },
    { id: "ideas", label: "ゲームアイデア", icon: Lightbulb },
    { id: "success", label: "成功要因", icon: Sparkles },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg hidden sm:block">Roblox Trend Analysis</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 sm:gap-2 ${
                    activeSection === item.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="relative">
        {/* Market Overview */}
        <section id="overview" className="py-20">
          <MarketOverview />
        </section>

        {/* Genre Analysis */}
        <section id="genres" className="py-20 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
          <GenreAnalysis />
        </section>

        {/* Trend Chart */}
        <section id="trends" className="py-20">
          <TrendChart />
        </section>

        {/* Game Ideas */}
        <section id="ideas" className="py-20 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
          <GameIdeas />
        </section>

        {/* Success Factors */}
        <section id="success" className="py-20">
          <SuccessFactors />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
