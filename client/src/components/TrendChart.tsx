/**
 * Trend Chart - トレンドチャートセクション
 * Design: Rechartsを使用したインタラクティブなチャート
 */
import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { TrendingUp, Calendar, Search, Globe } from "lucide-react";

const searchTrendData = [
  { name: "オープンワールド", searches: 14, fill: "#4361EE" },
  { name: "スポーツ", searches: 13.5, fill: "#7209B7" },
  { name: "ドライビング", searches: 12.5, fill: "#06D6A0" },
  { name: "ソーシャル", searches: 7.5, fill: "#F72585" },
];

const growthData = [
  { month: "2024 Q1", roleplay: 100, horror: 80, idle: 20, sports: 40 },
  { month: "2024 Q2", roleplay: 102, horror: 95, idle: 35, sports: 55 },
  { month: "2024 Q3", roleplay: 105, horror: 110, idle: 60, sports: 70 },
  { month: "2024 Q4", roleplay: 108, horror: 130, idle: 120, sports: 85 },
  { month: "2025 Q1", roleplay: 110, horror: 150, idle: 250, sports: 100 },
  { month: "2025 Q2", roleplay: 112, horror: 165, idle: 400, sports: 115 },
];

const genreShareData = [
  { name: "ロールプレイ", value: 25, color: "#4361EE" },
  { name: "RPG/アクション", value: 22, color: "#7209B7" },
  { name: "ホラー", value: 15, color: "#F72585" },
  { name: "放置系", value: 18, color: "#06D6A0" },
  { name: "スポーツ", value: 10, color: "#FFB703" },
  { name: "その他", value: 10, color: "#8D99AE" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-lg border border-border/50">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TrendChart() {
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
          <span className="gradient-text">トレンド分析</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Roblox公式データに基づく検索トレンドとジャンル成長率の分析。
          インタラクティブなチャートでデータを探索できます。
        </p>
      </motion.div>

      {/* Trend Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="glass-card p-4 rounded-2xl max-w-4xl mx-auto">
          <img 
            src="/images/trend-chart.png" 
            alt="Robloxトレンド分析"
            className="w-full rounded-xl"
          />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Search Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">検索トレンド</h3>
                <p className="text-sm text-muted-foreground">2024年Q1 検索数（百万回）</p>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={searchTrendData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" stroke="#8D99AE" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#8D99AE" fontSize={12} width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="searches" radius={[0, 4, 4, 0]}>
                    {searchTrendData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">オープンワールドアクション</span>が最も検索されており、
                未開拓の需要が高いことを示しています。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Genre Growth */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">ジャンル成長率</h3>
                <p className="text-sm text-muted-foreground">2024-2025年 相対成長指数</p>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#8D99AE" fontSize={10} />
                  <YAxis stroke="#8D99AE" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="roleplay" name="ロールプレイ" stroke="#4361EE" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="horror" name="ホラー" stroke="#F72585" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="idle" name="放置系" stroke="#06D6A0" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="sports" name="スポーツ" stroke="#FFB703" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-accent font-medium">放置系ジャンル</span>が2025年に爆発的成長を遂げ、
                Grow a Gardenの成功により市場を席巻しています。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Genre Share Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">ジャンル別市場シェア</h3>
              <p className="text-sm text-muted-foreground">2025年推定シェア</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genreShareData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {genreShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {genreShareData.map((genre) => (
                <div key={genre.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: genre.color }}
                    />
                    <span className="text-sm">{genre.name}</span>
                  </div>
                  <span className="font-semibold">{genre.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
