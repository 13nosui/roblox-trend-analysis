/**
 * Game Ideas - 新規ゲームアイデア提案セクション
 * Design: カード形式のアイデア提案 + 詳細モーダル
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Lightbulb, 
  Bot, 
  Users, 
  Leaf,
  Target,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const gameIdeas = [
  {
    id: 1,
    title: "AIペット育成 & クラフトサバイバル",
    subtitle: "AI × ペット × サバイバル",
    image: "/images/game-idea-1.png",
    icon: Bot,
    color: "from-cyan-500 to-teal-500",
    description: "プレイヤーがAIを搭載したユニークなペットを育て、一緒に未知の島を探検しながら、クラフト要素を駆使して生き残る協力型サバイバルゲーム。",
    targetAudience: "10歳〜18歳の男女、ペット育成・サバイバル・クラフトゲームのファン",
    keyMechanics: [
      "AIペット育成: 餌やり、トレーニング、コミュニケーションでペットが独自のスキルを獲得",
      "協力型サバイバル: プレイヤーとペットが協力して資源を収集",
      "クラフトシステム: 収集した資源で拠点、道具、武器を作成",
      "探検とクエスト: 広大な島を探索し、隠された謎を解き明かす"
    ],
    successFactors: [
      "「Adopt Me!」のペット育成 + 「99 Nights」のサバイバル + クラフト要素の融合",
      "協力型サバイバルは「Dead Rails」の成功で成長ジャンルとして確立",
      "「AIによるペットの成長」という独自の差別化要素",
      "Roblox公式推奨の「オープンワールドアクション」需要に対応"
    ],
    potentialScore: 92
  },
  {
    id: 2,
    title: "ミームカルチャー x ソーシャル推理",
    subtitle: "Brainrot × 人狼 × パーティー",
    image: "/images/game-idea-2.png",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    description: "「Brainrot」などの最新インターネットミームをテーマにした、人狼風のソーシャル推理ゲーム。プレイヤーは「ミーム感染者」と「一般市民」に分かれ、議論と投票で勝敗を決める。",
    targetAudience: "Z世代・α世代（10代前半〜20代前半）、ミームやSNSトレンドに敏感な層",
    keyMechanics: [
      "ソーシャル推理: プレイヤー間のコミュニケーションと投票によるインポスター特定",
      "ミームベースのタスク: Brainrotキャラクターの世話、奇妙なダンスなどのミニゲーム",
      "役割システム: 探偵、ドクターなど特殊能力を持つ役職",
      "定期的なミーム更新: 現実世界のトレンドに合わせた新コンテンツ追加"
    ],
    successFactors: [
      "「Steal a Brainrot」の爆発的成功が証明するBrainrotミーム文化の影響力",
      "「Murder Mystery 2」「Among Us」で実証されたソーシャル推理の普遍的人気",
      "ミームの移り変わりに合わせた継続的な話題性の維持",
      "Roblox公式推奨の「ソーシャルコオペティション」需要に完全合致"
    ],
    potentialScore: 88
  },
  {
    id: 3,
    title: "放置型 x 日本文化シミュレーション",
    subtitle: "放置系 × 日本 × 癒し",
    image: "/images/game-idea-3.png",
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    description: "日本の美しい田舎や昔ながらの商店街を舞台にした、癒し系の放置型シミュレーションゲーム。神社の巫女、ラーメン屋の店主、和菓子屋の職人などになり、自分のお店や村を発展させる。",
    targetAudience: "全年齢層、特に癒しやスローライフを求めるプレイヤー、日本文化やアニメ風ビジュアルが好きな層",
    keyMechanics: [
      "放置型システム: オフライン中に資源が自動生産・蓄積",
      "経営・育成シミュレーション: 収益を使って店や村の施設をアップグレード",
      "高度なカスタマイズ: 建物、庭、内装などを自由に飾り付け",
      "コレクション要素: 季節ごとのアイテム、特別な衣装、地域の特産品を収集"
    ],
    successFactors: [
      "「Grow a Garden」のRoblox史上最大ヒットで放置系の成功確率が証明済み",
      "Roblox公式調査で「日本の電車シミュレーター」など日本文化への高い関心",
      "競争やストレスの少ない癒し系ゲームプレイの幅広い層への訴求力",
      "アニメ風アートスタイルによるグローバルアニメファン層へのアピール"
    ],
    potentialScore: 95
  }
];

export default function GameIdeas() {
  const [selectedIdea, setSelectedIdea] = useState<typeof gameIdeas[0] | null>(null);

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
          <span className="gradient-text">新規ゲームアイデア</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          市場分析に基づき、成功の可能性が高いと考えられる3つの新規ゲームアイデアを提案します。
          各アイデアをクリックして詳細を確認できます。
        </p>
      </motion.div>

      {/* Idea Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {gameIdeas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setSelectedIdea(idea)}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={idea.image} 
                alt={idea.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Potential Score Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-accent" />
                  <span className="text-sm font-bold text-accent">{idea.potentialScore}%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${idea.color} flex items-center justify-center`}>
                  <idea.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">{idea.subtitle}</span>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {idea.title}
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {idea.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  対象: {idea.targetAudience.split("、")[0]}
                </span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedIdea && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedIdea(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-48 sm:h-64">
              <img 
                src={selectedIdea.image} 
                alt={selectedIdea.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              <button
                onClick={() => setSelectedIdea(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedIdea.color} flex items-center justify-center`}>
                    <selectedIdea.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    成功可能性: {selectedIdea.potentialScore}%
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">{selectedIdea.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  コンセプト
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedIdea.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-secondary" />
                  ターゲット層
                </h4>
                <p className="text-muted-foreground">
                  {selectedIdea.targetAudience}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  主要メカニクス
                </h4>
                <ul className="space-y-2">
                  {selectedIdea.keyMechanics.map((mechanic, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {mechanic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  成功の可能性（根拠）
                </h4>
                <ul className="space-y-2">
                  {selectedIdea.successFactors.map((factor, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => setSelectedIdea(null)}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  閉じる
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
