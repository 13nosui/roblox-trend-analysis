/**
 * Footer - フッターコンポーネント
 */

import { motion } from "framer-motion";
import { Flower2, Heart } from "lucide-react";

const sections = [
  { id: "hero", label: "概要" },
  { id: "concept", label: "コンセプト" },
  { id: "market", label: "市場分析" },
  { id: "system", label: "システム" },
  { id: "content", label: "コンテンツ" },
  { id: "monetization", label: "収益化" },
  { id: "roadmap", label: "ロードマップ" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-transparent to-slate-100 py-16">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Logo and Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-3 mb-6 hover:scale-105 transition-transform"
          >
            <div className="p-3 rounded-xl bg-pink-100">
              <Flower2 className="w-6 h-6 text-pink-600" />
            </div>
            <div className="text-left">
              <h3 className="font-display text-xl font-bold text-gray-800">
                ほのぼの日本村
              </h3>
              <p className="text-sm text-gray-500">〜のんびり商店街物語〜</p>
            </div>
          </button>

          <p className="text-gray-500 mb-4">
            ゲーム企画書 v1.0 | 2026年1月
          </p>

          <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-400 fill-current" />
            <span>for Roblox</span>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-xs text-gray-400">
            © 2026 ほのぼの日本村 プロジェクト. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
