/**
 * ProposalPage - ほのぼの日本村 ゲーム企画書
 * 
 * Design: Japanese Seasonal Gradient Style
 * - Spring (桜): Hero & Game Concept
 * - Summer (夏祭り): Market Analysis & Target Users
 * - Autumn (紅葉): Game Systems & Content
 * - Winter (雪): Monetization & Roadmap
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/proposal/Navigation";
import HeroSection from "@/components/proposal/HeroSection";
import ConceptSection from "@/components/proposal/ConceptSection";
import MarketSection from "@/components/proposal/MarketSection";
import SystemSection from "@/components/proposal/SystemSection";
import ContentSection from "@/components/proposal/ContentSection";
import MonetizationSection from "@/components/proposal/MonetizationSection";
import RoadmapSection from "@/components/proposal/RoadmapSection";
import Footer from "@/components/proposal/Footer";

type Season = "spring" | "summer" | "autumn" | "winter";

export default function ProposalPage() {
  const [currentSeason, setCurrentSeason] = useState<Season>("spring");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", season: "spring" as Season },
        { id: "concept", season: "spring" as Season },
        { id: "market", season: "summer" as Season },
        { id: "system", season: "autumn" as Season },
        { id: "content", season: "autumn" as Season },
        { id: "monetization", season: "winter" as Season },
        { id: "roadmap", season: "winter" as Season },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSeason(section.season);
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const seasonColors = {
    spring: "from-pink-100 via-pink-50 to-green-50",
    summer: "from-sky-100 via-amber-50 to-orange-50",
    autumn: "from-orange-100 via-amber-100 to-yellow-50",
    winter: "from-slate-100 via-blue-50 to-indigo-50",
  };

  return (
    <div className="relative min-h-screen">
      {/* Background gradient that changes with season */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSeason}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`fixed inset-0 bg-gradient-to-br ${seasonColors[currentSeason]} -z-10`}
        />
      </AnimatePresence>

      {/* Navigation */}
      <Navigation 
        currentSeason={currentSeason} 
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ConceptSection />
        <MarketSection />
        <SystemSection />
        <ContentSection />
        <MonetizationSection />
        <RoadmapSection />
      </main>

      <Footer />
    </div>
  );
}
