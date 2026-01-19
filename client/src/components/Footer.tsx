/**
 * Footer - フッターセクション
 * Design: Dark mode with glassmorphism
 */
import { Gamepad2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.18_195)] to-[oklch(0.7_0.2_330)] flex items-center justify-center">
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
                  className="hover:text-[oklch(0.75_0.18_195)] transition-colors flex items-center gap-1"
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
                  className="hover:text-[oklch(0.75_0.18_195)] transition-colors flex items-center gap-1"
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
                  className="hover:text-[oklch(0.75_0.18_195)] transition-colors flex items-center gap-1"
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
              データは2024年〜2025年時点のものです。
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Roblox Trend Analysis Report
          </p>
          <p className="text-sm text-muted-foreground">
            最終更新: 2025年1月
          </p>
        </div>
      </div>
    </footer>
  );
}
