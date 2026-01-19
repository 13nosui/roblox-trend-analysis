/**
 * Market Overview - 市場概要セクション
 * Design: Dark mode with glassmorphism, cyan/magenta accents
 */
import { motion } from "framer-motion";
import { Trophy, Eye, TrendingUp, Clock, Flame } from "lucide-react";

const topGames = [
  { rank: 1, name: "Brookhaven RP", visits: "69.13億", genre: "ロールプレイ", year: 2020, trend: "安定" },
  { rank: 2, name: "Blox Fruits", visits: "52.95億", genre: "RPG/アクション", year: 2019, trend: "安定" },
  { rank: 3, name: "Adopt Me!", visits: "40.03億", genre: "ペット育成", year: 2017, trend: "安定" },
  { rank: 4, name: "Tower of Hell", visits: "29.9億", genre: "パルクール", year: 2018, trend: "安定" },
  { rank: 5, name: "Murder Mystery 2", visits: "21.56億", genre: "推理", year: 2014, trend: "安定" },
  { rank: 6, name: "Grow a Garden", visits: "21.19億", genre: "放置系", year: 2025, trend: "急成長", isHot: true },
  { rank: 7, name: "MeepCity", visits: "16.24億", genre: "ソーシャル", year: 2016, trend: "安定" },
  { rank: 8, name: "Piggy", visits: "13.77億", genre: "ホラー", year: 2020, trend: "安定" },
  { rank: 9, name: "The Strongest Battlegrounds", visits: "13.61億", genre: "格闘", year: 2022, trend: "上昇" },
  { rank: 10, name: "BedWars", visits: "10.58億", genre: "戦略", year: 2021, trend: "安定" },
];

const currentActive = [
  { name: "Fish It!", players: "945.8K", change: "+12%", isHot: true },
  { name: "99 Nights in the Forest", players: "741.4K", change: "+8%", isHot: true },
  { name: "Brookhaven RP", players: "735.2K", change: "-2%" },
  { name: "Blox Fruits", players: "536.5K", change: "+5%" },
  { name: "RIVALS", players: "363.8K", change: "+15%" },
];

export default function MarketOverview() {
  return (
    <section id="overview" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Trophy className="w-4 h-4 text-[oklch(0.75_0.18_195)]" />
            <span className="text-sm text-muted-foreground">市場概要</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">人気ゲームランキング</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            累計訪問数とリアルタイムアクティブユーザー数から見る、Robloxプラットフォームの現状
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Top Games Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.75_0.18_195_/_0.1)] flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-[oklch(0.75_0.18_195)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">累計訪問数ランキング</h3>
                  <p className="text-sm text-muted-foreground">歴代トップ10ゲーム</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">順位</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">ゲーム名</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">訪問数</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground hidden sm:table-cell">ジャンル</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground hidden md:table-cell">リリース</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">傾向</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topGames.map((game, index) => (
                      <motion.tr
                        key={game.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-2">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold ${
                            game.rank <= 3 
                              ? "bg-[oklch(0.75_0.18_195)] text-[oklch(0.13_0.02_270)]" 
                              : "bg-white/10 text-muted-foreground"
                          }`} style={{ fontFamily: "'Space Grotesk', monospace" }}>
                            {game.rank}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{game.name}</span>
                            {game.isHot && <Flame className="w-4 h-4 text-[oklch(0.75_0.15_60)]" />}
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <span className="font-bold text-[oklch(0.75_0.18_195)]" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                            {game.visits}
                          </span>
                        </td>
                        <td className="py-3 px-2 hidden sm:table-cell">
                          <span className="text-sm px-2 py-1 rounded-full bg-white/5 text-muted-foreground">
                            {game.genre}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{game.year}</td>
                        <td className="py-3 px-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            game.trend === "急成長" 
                              ? "bg-[oklch(0.8_0.2_140_/_0.2)] text-[oklch(0.8_0.2_140)]" 
                              : game.trend === "上昇"
                              ? "bg-[oklch(0.75_0.18_195_/_0.2)] text-[oklch(0.75_0.18_195)]"
                              : "bg-white/5 text-muted-foreground"
                          }`}>
                            {game.trend === "急成長" && <TrendingUp className="w-3 h-3" />}
                            {game.trend}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Current Active Players */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.7_0.2_330_/_0.1)] flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[oklch(0.7_0.2_330)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">現在のアクティブ</h3>
                  <p className="text-sm text-muted-foreground">リアルタイム同時接続</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentActive.map((game, index) => (
                  <motion.div
                    key={game.name}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-muted-foreground w-6" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                        {index + 1}
                      </span>
                      <span className="font-medium text-sm">{game.name}</span>
                      {game.isHot && <Flame className="w-3 h-3 text-[oklch(0.75_0.15_60)]" />}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[oklch(0.7_0.2_330)]" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                        {game.players}
                      </div>
                      <div className={`text-xs ${game.change.startsWith("+") ? "text-[oklch(0.8_0.2_140)]" : "text-[oklch(0.6_0.2_25)]"}`}>
                        {game.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[oklch(0.75_0.18_195_/_0.1)] to-[oklch(0.7_0.2_330_/_0.1)] border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[oklch(0.75_0.18_195)]" />
                  <span className="text-sm font-medium">2026年1月時点</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  データはRoblox公式チャートより取得
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
