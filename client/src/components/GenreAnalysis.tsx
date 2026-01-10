/**
 * Genre Analysis - ジャンル分析セクション
 * Design: インタラクティブなジャンルカード + 詳細情報
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Home, 
  Sword, 
  Ghost, 
  Trophy, 
  Car, 
  Sprout,
  Users,
  Zap,
  Target,
  Sparkles
} from "lucide-react";

const genres = [
  {
    id: "roleplay",
    name: "ロールプレイ/ライフシム",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
    share: "高",
    trend: "安定",
    description: "プレイヤーが仮想の生活を送り、他のプレイヤーと交流するジャンル。Brookhaven RPやBerry Avenueが代表作。",
    examples: ["Brookhaven RP", "Berry Avenue", "Welcome to Bloxburg"],
    keyFeatures: ["自由なロールプレイ", "住居カスタマイズ", "ソーシャル機能"],
    targetAge: "全年齢"
  },
  {
    id: "rpg",
    name: "RPG/アクション",
    icon: Sword,
    color: "from-purple-500 to-pink-500",
    share: "高",
    trend: "安定",
    description: "キャラクターを育成し、戦闘やクエストを楽しむジャンル。アニメIPとの親和性が高い。",
    examples: ["Blox Fruits", "Jujutsu Infinite", "The Strongest Battlegrounds"],
    keyFeatures: ["キャラクター育成", "戦闘システム", "クエスト"],
    targetAge: "10-18歳"
  },
  {
    id: "horror",
    name: "ホラー/サバイバル",
    icon: Ghost,
    color: "from-red-500 to-orange-500",
    share: "中〜高",
    trend: "上昇",
    description: "恐怖体験や生存を目指すジャンル。DOORSやPiggyの成功で急成長中。",
    examples: ["DOORS", "Piggy", "99 Nights in the Forest"],
    keyFeatures: ["緊張感", "協力プレイ", "ジャンプスケア"],
    targetAge: "12歳以上"
  },
  {
    id: "idle",
    name: "放置系/シミュレーション",
    icon: Sprout,
    color: "from-green-500 to-emerald-500",
    share: "急成長",
    trend: "急上昇",
    description: "オフラインでも進行する設計で、2025年に爆発的成長。Grow a Gardenが歴史的ヒット。",
    examples: ["Grow a Garden", "Fisch", "Tap Simulator"],
    keyFeatures: ["オフライン進行", "コレクション", "低ストレス"],
    targetAge: "全年齢"
  },
  {
    id: "sports",
    name: "スポーツ",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500",
    share: "成長中",
    trend: "上昇",
    description: "サッカー、バスケットボール、バレーボールなどのスポーツゲーム。アニメIPとの連携も人気。",
    examples: ["Blue Lock: Rivals", "Volleyball Legends", "Super League Soccer"],
    keyFeatures: ["チーム対戦", "スキルベース", "リアルタイム競争"],
    targetAge: "全年齢"
  },
  {
    id: "racing",
    name: "ドライビング/レーシング",
    icon: Car,
    color: "from-cyan-500 to-blue-500",
    share: "成長中",
    trend: "上昇",
    description: "車やバイクでのレース、運転シミュレーション。日本の電車シミュレーターも人気。",
    examples: ["Driving Empire", "Vehicle Legends", "Emergency Response: Liberty County"],
    keyFeatures: ["車両カスタマイズ", "レース", "オープンワールド"],
    targetAge: "全年齢"
  },
];

export default function GenreAnalysis() {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

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
          <span className="gradient-text">ジャンル分析</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Robloxで人気のゲームジャンルとその特徴を分析。各ジャンルの市場シェアと成長傾向を確認できます。
        </p>
      </motion.div>

      {/* Genre Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="glass-card p-4 rounded-2xl max-w-4xl mx-auto">
          <img 
            src="/images/genre-analysis.png" 
            alt="Robloxゲームジャンル分析"
            className="w-full rounded-xl"
          />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Genre Cards */}
        <div className="lg:col-span-1 space-y-3">
          {genres.map((genre, index) => (
            <motion.button
              key={genre.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedGenre(genre)}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                selectedGenre.id === genre.id
                  ? "glass-card border-primary/50 glow-primary"
                  : "bg-muted/30 hover:bg-muted/50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${genre.color} flex items-center justify-center`}>
                  <genre.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{genre.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      genre.trend === "急上昇" 
                        ? "bg-accent/20 text-accent" 
                        : genre.trend === "上昇"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {genre.trend}
                    </span>
                    <span className="text-xs text-muted-foreground">シェア: {genre.share}</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Genre Details */}
        <motion.div
          key={selectedGenre.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-6 sm:p-8 rounded-2xl h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedGenre.color} flex items-center justify-center`}>
                <selectedGenre.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedGenre.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    selectedGenre.trend === "急上昇" 
                      ? "bg-accent/20 text-accent" 
                      : selectedGenre.trend === "上昇"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {selectedGenre.trend}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    対象: {selectedGenre.targetAge}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedGenre.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Examples */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  代表的なゲーム
                </h4>
                <ul className="space-y-2">
                  {selectedGenre.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-secondary" />
                  主な特徴
                </h4>
                <ul className="space-y-2">
                  {selectedGenre.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Market Insight */}
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-medium">マーケットインサイト</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {selectedGenre.trend === "急上昇" 
                  ? "このジャンルは現在最も成長しており、新規参入のチャンスが大きいです。"
                  : selectedGenre.trend === "上昇"
                  ? "安定した成長を続けており、差別化された体験を提供することで成功の可能性があります。"
                  : "成熟したジャンルですが、革新的なアプローチで差別化することが重要です。"
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
