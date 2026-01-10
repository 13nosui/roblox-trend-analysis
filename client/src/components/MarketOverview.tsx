/**
 * Market Overview - 市場概要セクション
 * Design: ガラスモーフィズムカード + インタラクティブテーブル
 */
import { motion } from "framer-motion";
import { Trophy, Eye, TrendingUp, Clock } from "lucide-react";

const topGames = [
  { rank: 1, name: "Brookhaven RP", visits: "69.13億", genre: "ロールプレイ", year: 2020, trend: "安定" },
  { rank: 2, name: "Blox Fruits", visits: "52.95億", genre: "RPG/アクション", year: 2019, trend: "安定" },
  { rank: 3, name: "Adopt Me!", visits: "40.03億", genre: "ペット育成", year: 2017, trend: "安定" },
  { rank: 4, name: "Tower of Hell", visits: "29.9億", genre: "パルクール", year: 2018, trend: "安定" },
  { rank: 5, name: "Murder Mystery 2", visits: "21.56億", genre: "推理", year: 2014, trend: "安定" },
  { rank: 6, name: "Grow a Garden", visits: "21.19億", genre: "放置系", year: 2025, trend: "急成長" },
  { rank: 7, name: "MeepCity", visits: "16.24億", genre: "ソーシャル", year: 2016, trend: "安定" },
  { rank: 8, name: "Piggy", visits: "13.77億", genre: "ホラー", year: 2020, trend: "安定" },
  { rank: 9, name: "The Strongest Battlegrounds", visits: "13.61億", genre: "格闘", year: 2022, trend: "上昇" },
  { rank: 10, name: "BedWars", visits: "10.58億", genre: "戦略", year: 2021, trend: "安定" },
];

const currentActive = [
  { name: "Fish It!", players: "945.8K", change: "+12%" },
  { name: "99 Nights in the Forest", players: "741.4K", change: "+8%" },
  { name: "Brookhaven RP", players: "735.2K", change: "-2%" },
  { name: "Blox Fruits", players: "536.5K", change: "+5%" },
  { name: "RIVALS", players: "363.8K", change: "+15%" },
];

export default function MarketOverview() {
  return (
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">市場概要</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Robloxプラットフォームの現在の状況と、最も人気のあるゲームのランキングを確認できます。
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
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">累計訪問数ランキング</h3>
                <p className="text-sm text-muted-foreground">歴代トップ10ゲーム</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
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
                      className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-3 px-2">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold ${
                          game.rank <= 3 
                            ? "bg-gradient-to-br from-primary to-secondary text-white" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {game.rank}
                        </span>
                      </td>
                      <td className="py-3 px-2 font-medium">{game.name}</td>
                      <td className="py-3 px-2 text-primary font-semibold">{game.visits}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden sm:table-cell">{game.genre}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{game.year}</td>
                      <td className="py-3 px-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          game.trend === "急成長" 
                            ? "bg-accent/20 text-accent" 
                            : game.trend === "上昇"
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
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
          <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">現在のアクティブ</h3>
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
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground w-6">{index + 1}</span>
                    <span className="font-medium text-sm">{game.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{game.players}</div>
                    <div className={`text-xs ${game.change.startsWith("+") ? "text-accent" : "text-destructive"}`}>
                      {game.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">2026年1月時点</span>
              </div>
              <p className="text-xs text-muted-foreground">
                データは定期的に更新されます。最新の傾向を把握するために定期的にチェックしてください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
