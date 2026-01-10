/**
 * SystemSection - ゲームシステムセクション（秋テーマ）
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cog, 
  Clock,
  Store,
  TreeDeciduous,
  RefreshCw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const coreLoopSteps = [
  { step: "ログイン", icon: "🌅" },
  { step: "オフライン報酬受取", icon: "🎁" },
  { step: "店舗運営", icon: "🏪" },
  { step: "資源収集", icon: "🌾" },
  { step: "アップグレード", icon: "⬆️" },
  { step: "カスタマイズ", icon: "🎨" },
  { step: "ログアウト", icon: "🌙" },
];

const offlineFeatures = [
  { feature: "商品生産", limit: "8時間分", description: "店舗で商品が自動生産される" },
  { feature: "売上", limit: "8時間分", description: "来店客への自動販売" },
  { feature: "作物成長", limit: "24時間分", description: "畑の作物が成長する" },
  { feature: "資源回復", limit: "12時間分", description: "木材・石材などの自然資源" },
];

const shopTypes = [
  { name: "ラーメン屋", type: "高回転・中利益", products: "醤油ラーメン、味噌ラーメン、餃子", emoji: "🍜" },
  { name: "和菓子屋", type: "中回転・高利益", products: "大福、どら焼き、羊羹", emoji: "🍡" },
  { name: "八百屋", type: "高回転・低利益", products: "野菜、果物、漬物", emoji: "🥬" },
  { name: "雑貨屋", type: "低回転・高利益", products: "和小物、陶器、布製品", emoji: "🏺" },
];

const seasons = [
  { 
    name: "春", 
    months: "3月〜5月", 
    events: "桜の開花、花見イベント",
    products: "桜餅、いちご大福",
    color: "bg-pink-100 text-pink-700 border-pink-200"
  },
  { 
    name: "夏", 
    months: "6月〜8月", 
    events: "花火大会、盆踊り",
    products: "かき氷、冷やし中華",
    color: "bg-sky-100 text-sky-700 border-sky-200"
  },
  { 
    name: "秋", 
    months: "9月〜11月", 
    events: "紅葉狩り、月見",
    products: "栗きんとん、焼き芋",
    color: "bg-orange-100 text-orange-700 border-orange-200"
  },
  { 
    name: "冬", 
    months: "12月〜2月", 
    events: "初詣、餅つき",
    products: "おせち、お雑煮",
    color: "bg-blue-100 text-blue-700 border-blue-200"
  },
];

export default function SystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="system"
      ref={ref}
      className="py-24 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="/images/proposal-autumn.png"
          alt="Autumn landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 mb-4">
            <Cog className="w-4 h-4" />
            <span className="text-sm font-medium">ゲームシステム</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            システム設計
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            プレイヤーを毎日引き戻すコアループと、日本の四季を体験できるシステム
          </p>
        </motion.div>

        {/* Core Loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-orange-600" />
                コアループ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                {coreLoopSteps.map((item, index) => (
                  <div key={item.step} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{item.step}</span>
                    </div>
                    {index < coreLoopSteps.length - 1 && (
                      <span className="mx-2 text-orange-400">→</span>
                    )}
                  </div>
                ))}
                <span className="mx-2 text-orange-400">↻</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Offline System */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full bg-white/90 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  放置システム
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  プレイヤーがログアウトしている間も、以下の要素が自動で進行します。
                </p>
                <div className="space-y-3">
                  {offlineFeatures.map((item) => (
                    <div
                      key={item.feature}
                      className="flex items-center justify-between p-3 rounded-lg bg-orange-50"
                    >
                      <div>
                        <span className="font-medium text-gray-800">{item.feature}</span>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                        {item.limit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Shop Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full bg-white/90 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Store className="w-5 h-5 text-orange-600" />
                  基本店舗タイプ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {shopTypes.map((shop) => (
                    <div
                      key={shop.name}
                      className="p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl">{shop.emoji}</span>
                        <div>
                          <span className="font-medium text-gray-800">{shop.name}</span>
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-orange-200 text-orange-700">
                            {shop.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 ml-11">{shop.products}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Four Seasons System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <TreeDeciduous className="w-5 h-5 text-orange-600" />
                四季システム
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                ゲーム内では現実の時間に連動して四季が変化します。各季節は約3週間続き、
                季節ごとに異なるイベント、商品、装飾が登場します。
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {seasons.map((season) => (
                  <div
                    key={season.name}
                    className={`p-4 rounded-xl border-2 ${season.color}`}
                  >
                    <h4 className="text-2xl font-bold mb-1">{season.name}</h4>
                    <p className="text-sm opacity-80 mb-3">{season.months}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">イベント:</span>
                        <p className="opacity-80">{season.events}</p>
                      </div>
                      <div>
                        <span className="font-medium">限定商品:</span>
                        <p className="opacity-80">{season.products}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
