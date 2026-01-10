/**
 * Navigation - 季節に応じて色が変わるナビゲーションバー
 */

import { motion } from "framer-motion";
import { 
  Flower2, 
  Sun, 
  Leaf, 
  Snowflake,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Season = "spring" | "summer" | "autumn" | "winter";

interface NavigationProps {
  currentSeason: Season;
  activeSection: string;
}

const sections = [
  { id: "hero", label: "概要", season: "spring" },
  { id: "concept", label: "コンセプト", season: "spring" },
  { id: "market", label: "市場分析", season: "summer" },
  { id: "system", label: "システム", season: "autumn" },
  { id: "content", label: "コンテンツ", season: "autumn" },
  { id: "monetization", label: "収益化", season: "winter" },
  { id: "roadmap", label: "ロードマップ", season: "winter" },
];

const seasonIcons = {
  spring: Flower2,
  summer: Sun,
  autumn: Leaf,
  winter: Snowflake,
};

const seasonColors = {
  spring: "text-pink-500",
  summer: "text-amber-500",
  autumn: "text-orange-500",
  winter: "text-blue-500",
};

const seasonBgColors = {
  spring: "bg-pink-500/10 border-pink-200",
  summer: "bg-amber-500/10 border-amber-200",
  autumn: "bg-orange-500/10 border-orange-200",
  winter: "bg-blue-500/10 border-blue-200",
};

export default function Navigation({ currentSeason, activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const SeasonIcon = seasonIcons[currentSeason];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${seasonBgColors[currentSeason]} transition-colors duration-500`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`p-2 rounded-lg ${seasonBgColors[currentSeason]}`}>
              <SeasonIcon className={`w-5 h-5 ${seasonColors[currentSeason]}`} />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-foreground">
                ほのぼの日本村
              </h1>
              <p className="text-xs text-muted-foreground">ゲーム企画書 v1.0</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? `${seasonBgColors[currentSeason]} ${seasonColors[currentSeason]}`
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Season Indicator */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              {(["spring", "summer", "autumn", "winter"] as Season[]).map((season) => (
                <motion.div
                  key={season}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSeason === season
                      ? `scale-125 ${season === "spring" ? "bg-pink-400" : season === "summer" ? "bg-amber-400" : season === "autumn" ? "bg-orange-400" : "bg-blue-400"}`
                      : "bg-gray-300"
                  }`}
                  animate={{
                    scale: currentSeason === season ? 1.25 : 1,
                  }}
                />
              ))}
            </div>
            <span className={`text-sm font-medium ${seasonColors[currentSeason]}`}>
              {currentSeason === "spring" ? "春" : currentSeason === "summer" ? "夏" : currentSeason === "autumn" ? "秋" : "冬"}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            <div className="flex flex-col gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? `${seasonBgColors[currentSeason]} ${seasonColors[currentSeason]}`
                      : "text-muted-foreground hover:bg-black/5"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
