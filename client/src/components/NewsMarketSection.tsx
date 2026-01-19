/**
 * News & Market Section Component
 * Design: Data Dashboard Elegance - Dark mode with glassmorphism
 * Features: Latest news, stock info, investor insights, official announcements
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  Newspaper, 
  DollarSign, 
  Users, 
  Shield,
  ExternalLink,
  Calendar,
  Building2,
  Globe,
  Sparkles
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Stock data
const stockData = {
  symbol: "RBLX",
  price: 87.28,
  change: 2.63,
  changePercent: 3.11,
  marketCap: "580億ドル",
  targetPrice: 137.03,
  analystRating: "Buy",
  analystCount: 39,
  upside: 55.94,
  lastUpdated: "2026年1月16日"
};

// Latest news
const latestNews = [
  {
    id: 1,
    category: "安全対策",
    title: "チャット機能に顔年齢確認を全世界で導入",
    summary: "Robloxは2026年1月7日より、チャット機能の利用に顔年齢確認を必須化。ゲーム業界初の取り組みとして、未成年者保護を強化。",
    date: "2026年1月7日",
    source: "Roblox公式",
    icon: Shield,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    category: "広告",
    title: "広告プラットフォームを大幅拡大",
    summary: "新しい広告フォーマットとツールを発表。次世代向けの必須チャネルとしての地位確立を目指す。",
    date: "2026年1月6日",
    source: "Roblox公式",
    icon: Building2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    category: "AI",
    title: "CEO David BaszuckiがAIワールドモデルを発表",
    summary: "新しいAI技術により、クリエイターがより高品質な体験を構築し、スマートなNPCを作成できるように。",
    date: "2026年1月12日",
    source: "Roblox公式",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    category: "日本",
    title: "電通グループがRobloxワークショップを開催",
    summary: "Roblox開発ツールを活用した実践型ゲーム制作ワークショップを日本で開催。プログラミング教育の新たな取り組み。",
    date: "2025年12月19日",
    source: "電通グループ",
    icon: Globe,
    color: "from-orange-500 to-red-500"
  }
];

// Investor insights
const investorInsights = [
  {
    name: "Cathie Wood / ARK Invest",
    action: "買い増し",
    amount: "約1,280万ドル",
    date: "2026年1月8日",
    comment: "メタバースとデジタル経済の成長ポテンシャルに注目。Meta、Palantirなどの成熟テック株から資金をシフト。",
    isPositive: true
  },
  {
    name: "Jefferies",
    action: "目標株価引き下げ",
    amount: "$100 → $85",
    date: "2026年1月15日",
    comment: "2026年の成長懸念からHold維持。ただし長期的な成長ポテンシャルは認識。",
    isPositive: false
  },
  {
    name: "TipRanks コンセンサス",
    action: "Moderate Buy",
    amount: "目標株価 $133.11",
    date: "2026年1月",
    comment: "22名のアナリストによるコンセンサス。現在価格から約60%の上昇余地。",
    isPositive: true
  },
  {
    name: "Massachusetts Financial Services",
    action: "保有増加",
    amount: "+7.5%",
    date: "2025年Q3",
    comment: "機関投資家による継続的な買い増し。長期的な成長に期待。",
    isPositive: true
  }
];

// Financial metrics
const financialMetrics = [
  { label: "DAU", value: "1.515億人", change: "+70%", isPositive: true },
  { label: "Bookings", value: "$19億", change: "+70%", isPositive: true },
  { label: "収益", value: "$14億", change: "+34%", isPositive: true },
  { label: "エンゲージメント", value: "396億時間", change: "+23%", isPositive: true }
];

// Official announcements
const officialAnnouncements = [
  {
    title: "2026年の方針",
    content: "より頻繁なアップデートを約束。製品アップデート、クリエイターニュース、コミュニティアップデート、ポリシー変更を定期的に発信。",
    speaker: "David Baszucki (CEO)",
    date: "2026年1月"
  },
  {
    title: "クリエイター経済の成長",
    content: "2025年1〜9月のクリエイター支払い総額が10億ドルを突破。トップ開発者の平均収益は3,850万ドル。開発者交換レートを8.5%引き上げ。",
    speaker: "Roblox IR",
    date: "2025年Q3"
  },
  {
    title: "ユーザー層の拡大",
    content: "13歳以上のユーザーがDAUの2/3を占め、年間89%成長。グローバルゲーム収益の3.2%を獲得（前年2.3%から上昇）。",
    speaker: "Roblox IR",
    date: "2025年Q3"
  }
];

export default function NewsMarketSection() {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <section id="news-market" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.15_0.02_280)] to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[oklch(0.5_0.15_195)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[oklch(0.5_0.15_330)]/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4">
            <Newspaper className="w-4 h-4 text-[oklch(0.75_0.18_195)]" />
            <span className="text-sm text-muted-foreground">最新情報</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ニュース・
            <span className="bg-gradient-to-r from-[oklch(0.75_0.18_195)] to-[oklch(0.7_0.2_330)] bg-clip-text text-transparent">
              市場動向
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Robloxに関する最新ニュース、株価情報、投資家の見解、公式発表をリアルタイムで追跡
          </p>
        </motion.div>

        {/* Stock Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-white/10 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.18_195)] to-[oklch(0.7_0.2_330)] flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">NYSE:</span>
                  <span className="font-bold text-lg">{stockData.symbol}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">${stockData.price}</span>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${stockData.change >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                    {stockData.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span className="text-sm font-medium">
                      {stockData.change >= 0 ? '+' : ''}{stockData.change} ({stockData.changePercent}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">時価総額</p>
                <p className="font-semibold">{stockData.marketCap}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">目標株価</p>
                <p className="font-semibold text-[oklch(0.75_0.18_195)]">${stockData.targetPrice}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">アナリスト評価</p>
                <p className="font-semibold text-emerald-400">{stockData.analystRating}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">上昇余地</p>
                <p className="font-semibold text-[oklch(0.7_0.2_330)]">+{stockData.upside}%</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-right">
            最終更新: {stockData.lastUpdated}
          </p>
        </motion.div>

        {/* Financial Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {financialMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 border border-white/10"
            >
              <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-xl font-bold mb-1">{metric.value}</p>
              <p className={`text-sm ${metric.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {metric.change} YoY
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full glass border border-white/10 p-1 mb-6">
            <TabsTrigger value="news" className="flex-1 data-[state=active]:bg-white/10">
              <Newspaper className="w-4 h-4 mr-2" />
              最新ニュース
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex-1 data-[state=active]:bg-white/10">
              <Users className="w-4 h-4 mr-2" />
              投資家動向
            </TabsTrigger>
            <TabsTrigger value="official" className="flex-1 data-[state=active]:bg-white/10">
              <Building2 className="w-4 h-4 mr-2" />
              公式発表
            </TabsTrigger>
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news">
            <div className="grid md:grid-cols-2 gap-4">
              {latestNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${news.color} flex items-center justify-center shrink-0`}>
                      <news.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground">
                          {news.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{news.date}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-[oklch(0.75_0.18_195)] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {news.summary}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        出典: {news.source}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Investors Tab */}
          <TabsContent value="investors">
            <div className="space-y-4">
              {investorInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{insight.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${insight.isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                          {insight.action}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{insight.comment}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {insight.amount}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {insight.date}
                        </span>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${insight.isPositive ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}>
                      {insight.isPositive ? (
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-amber-400" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Official Tab */}
          <TabsContent value="official">
            <div className="space-y-4">
              {officialAnnouncements.map((announcement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/10"
                >
                  <h3 className="font-semibold text-lg mb-2 text-[oklch(0.75_0.18_195)]">
                    {announcement.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{announcement.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {announcement.speaker}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {announcement.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Data Sources */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground mb-2">データソース</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://ir.roblox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-[oklch(0.75_0.18_195)] transition-colors flex items-center gap-1"
            >
              Roblox IR <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://corp.roblox.com/newsroom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-[oklch(0.75_0.18_195)] transition-colors flex items-center gap-1"
            >
              Roblox Newsroom <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://finance.yahoo.com/quote/RBLX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-[oklch(0.75_0.18_195)] transition-colors flex items-center gap-1"
            >
              Yahoo Finance <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
