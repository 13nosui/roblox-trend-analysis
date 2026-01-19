/**
 * Trend Chart - トレンドチャートセクション
 * Design: Dark mode with interactive Recharts
 */
import { motion } from "framer-motion";
import { useState } from "react";
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
import { TrendingUp, Search, Globe, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const searchTrendData = [
  { name: "オープンワールド", searches: 14, fill: "oklch(0.75 0.18 195)" },
  { name: "スポーツ", searches: 13.5, fill: "oklch(0.7 0.2 330)" },
  { name: "ドライビング", searches: 12.5, fill: "oklch(0.8 0.2 140)" },
  { name: "ソーシャル", searches: 7.5, fill: "oklch(0.75 0.15 60)" },
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
  { name: "ロールプレイ", value: 25, color: "oklch(0.75 0.18 195)" },
  { name: "RPG/アクション", value: 22, color: "oklch(0.7 0.2 330)" },
  { name: "放置系", value: 18, color: "oklch(0.8 0.2 140)" },
  { name: "ホラー", value: 15, color: "oklch(0.75 0.15 60)" },
  { name: "スポーツ", value: 10, color: "oklch(0.7 0.18 280)" },
  { name: "その他", value: 10, color: "oklch(0.5 0.02 270)" },
];

const tabs = [
  { id: "search", label: "検索トレンド", icon: Search },
  { id: "growth", label: "ジャンル成長率", icon: TrendingUp },
  { id: "share", label: "市場シェア", icon: PieChartIcon },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-3 border border-white/10">
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
  const [activeTab, setActiveTab] = useState("search");

  return (
    <section id="trends" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[oklch(0.75_0.18_195_/_0.05)] rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <BarChart3 className="w-4 h-4 text-[oklch(0.75_0.18_195)]" />
            <span className="text-sm text-muted-foreground">トレンドデータ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">市場トレンド分析</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Roblox公式データに基づく検索トレンドとジャンル成長率の分析
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2 p-1 rounded-xl glass">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[oklch(0.75_0.18_195)] text-[oklch(0.13_0.02_270)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          {activeTab === "search" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.75_0.18_195_/_0.1)] flex items-center justify-center">
                  <Search className="w-5 h-5 text-[oklch(0.75_0.18_195)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">検索トレンド</h3>
                  <p className="text-sm text-muted-foreground">2024年Q1 検索数（百万回）</p>
                </div>
              </div>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={searchTrendData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis type="number" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" fontSize={12} width={100} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="searches" radius={[0, 4, 4, 0]}>
                      {searchTrendData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[oklch(0.75_0.18_195_/_0.1)] to-[oklch(0.7_0.2_330_/_0.1)] border border-white/10">
                <p className="text-sm text-muted-foreground">
                  <span className="text-[oklch(0.75_0.18_195)] font-medium">オープンワールドアクション</span>が最も検索されており、
                  未開拓の需要が高いことを示しています。
                </p>
              </div>
            </div>
          )}

          {activeTab === "growth" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.8_0.2_140_/_0.1)] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[oklch(0.8_0.2_140)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ジャンル成長率</h3>
                  <p className="text-sm text-muted-foreground">2024-2025年 相対成長指数</p>
                </div>
              </div>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={10} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="roleplay" name="ロールプレイ" stroke="oklch(0.75 0.18 195)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="horror" name="ホラー" stroke="oklch(0.75 0.15 60)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="idle" name="放置系" stroke="oklch(0.8 0.2 140)" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="sports" name="スポーツ" stroke="oklch(0.7 0.18 280)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[oklch(0.8_0.2_140_/_0.1)] border border-[oklch(0.8_0.2_140_/_0.2)]">
                <p className="text-sm text-muted-foreground">
                  <span className="text-[oklch(0.8_0.2_140)] font-medium">放置系ジャンル</span>が2025年に爆発的成長を遂げ、
                  Grow a Gardenの成功により市場を席巻しています。
                </p>
              </div>
            </div>
          )}

          {activeTab === "share" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.7_0.2_330_/_0.1)] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[oklch(0.7_0.2_330)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ジャンル別市場シェア</h3>
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
                    <div key={genre.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: genre.color }}
                        />
                        <span className="text-sm">{genre.name}</span>
                      </div>
                      <span className="font-bold" style={{ fontFamily: "'Space Grotesk', monospace" }}>{genre.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          {[
            { title: "放置系の急成長", value: "+950%", desc: "2024年最大の成長ジャンル", color: "lime" },
            { title: "ホラーの安定成長", value: "+117%", desc: "協力型サバイバルが牽引", color: "orange" },
            { title: "スポーツの台頭", value: "+250%", desc: "アニメIPとの連携が成功", color: "cyan" },
          ].map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className={`text-3xl font-bold mb-2 ${
                insight.color === "lime" ? "text-[oklch(0.8_0.2_140)]" :
                insight.color === "orange" ? "text-[oklch(0.75_0.15_60)]" :
                "text-[oklch(0.75_0.18_195)]"
              }`} style={{ fontFamily: "'Space Grotesk', monospace" }}>
                {insight.value}
              </div>
              <div className="font-medium mb-1">{insight.title}</div>
              <div className="text-sm text-muted-foreground">{insight.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
