/**
 * Success Factors - 成功要因セクション
 * Design: アイコン付きカード + チェックリスト形式
 */
import { motion } from "framer-motion";
import { 
  Sparkles, 
  RefreshCw, 
  Share2, 
  Users,
  Gamepad2,
  TrendingUp,
  Heart,
  Zap,
  Target,
  Clock,
  Gift,
  MessageCircle
} from "lucide-react";

const designFactors = [
  {
    icon: Users,
    title: "ソーシャル性",
    description: "友達と一緒にプレイできる設計。協力プレイ、チーム対戦、トレードなどの機能。",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "カスタマイズ性",
    description: "アバター、家、ペットなどの個人化要素。プレイヤーの自己表現を可能に。",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "進行感",
    description: "レベルアップ、アンロック、コレクションなど、達成感を感じられる仕組み。",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "リテンション施策",
    description: "定期アップデート、イベント、コード配布で継続的なプレイを促進。",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Share2,
    title: "ストリーム/ミーム適性",
    description: "面白い物理演算、ジャンプスケア、派手な能力など、SNSで拡散されやすい要素。",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Gift,
    title: "ガチャ/ランダム要素",
    description: "ランダム報酬による期待感。コレクション欲を刺激する仕組み。",
    color: "from-indigo-500 to-purple-500"
  },
];

const operationFactors = [
  {
    icon: RefreshCw,
    title: "週次アップデート",
    description: "新コンテンツを定期的に追加し、プレイヤーの関心を維持"
  },
  {
    icon: MessageCircle,
    title: "ユーザーフィードバック",
    description: "コミュニティの声を素早く反映し、改善を続ける"
  },
  {
    icon: Share2,
    title: "SNS戦略",
    description: "TikTok、YouTube Shortsでの露出を意識したコンテンツ設計"
  },
  {
    icon: Heart,
    title: "コミュニティ育成",
    description: "ファンアート、UGC、イベントでコミュニティを活性化"
  },
];

const monetizationMethods = [
  { name: "ゲームパス", description: "追加機能やVIP特典", percentage: 35 },
  { name: "コスメティック", description: "見た目アイテム、スキン", percentage: 30 },
  { name: "ペット/コンパニオン", description: "限定ペット、レアキャラクター", percentage: 20 },
  { name: "VIPサーバー", description: "プライベートサーバー", percentage: 15 },
];

export default function SuccessFactors() {
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
          <span className="gradient-text">成功要因</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Robloxで成功するゲームに共通する要素と、効果的な運営・収益化戦略をまとめました。
        </p>
      </motion.div>

      {/* Game Design Factors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold">ゲームデザイン要素</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {designFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-5 rounded-xl"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${factor.color} flex items-center justify-center mb-4`}>
                <factor.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">{factor.title}</h4>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Operation Factors */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">運営要素</h3>
            </div>

            <div className="space-y-4">
              {operationFactors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Monetization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">収益化戦略</h3>
            </div>

            <div className="space-y-4">
              {monetizationMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-medium">{method.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">- {method.description}</span>
                    </div>
                    <span className="font-bold text-primary">{method.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${method.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">ポイント:</span> 収益化は「Pay to Win」を避け、
                コスメティックやコンビニエンス機能に焦点を当てることで、
                プレイヤーの満足度と収益のバランスを取ることが重要です。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <div className="glass-card p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <h3 className="text-xl font-bold mb-6 text-center">重要なポイント</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">70%</div>
              <p className="text-sm text-muted-foreground">
                成功ゲームの70%が週次アップデートを実施
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2ヶ月</div>
              <p className="text-sm text-muted-foreground">
                Grow a Gardenが史上最高記録を達成するまでの期間
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">67%</div>
              <p className="text-sm text-muted-foreground">
                ピーク時にRoblox全体の67%を占めた単一ゲーム
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
