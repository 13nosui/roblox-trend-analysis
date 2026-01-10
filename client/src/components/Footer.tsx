/**
 * Footer - フッターセクション
 * Design: シンプルでエレガントなフッター
 */
import { motion } from "framer-motion";
import { Gamepad2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Roblox Trend Analysis</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              国内外で人気のRobloxゲームの傾向を分析し、
              次世代のヒットゲームを生み出すためのインサイトを提供します。
            </p>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="font-semibold mb-4">データソース</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.roblox.com/charts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Roblox公式チャート
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://corp.roblox.com/newsroom/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Roblox Newsroom
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.blog.udonis.co/mobile-marketing/mobile-games/most-popular-roblox-games" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Udonis Blog
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-semibold mb-4">免責事項</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本レポートは公開情報に基づく分析であり、
              投資や事業判断の助言を目的としたものではありません。
              データは2025年-2026年時点のものです。
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Roblox Trend Analysis Report. Created with Manus AI.
          </p>
          <p className="text-sm text-muted-foreground">
            最終更新: 2026年1月10日
          </p>
        </div>
      </div>
    </footer>
  );
}
