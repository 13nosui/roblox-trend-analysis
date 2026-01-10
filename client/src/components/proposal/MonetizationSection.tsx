/**
 * MonetizationSection - マネタイズ戦略セクション（冬テーマ）
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Coins, 
  Calendar,
  Crown,
  Gift,
  PieChart,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const revenueData = [
  { name: "シーズナルパス", value: 40, color: "#f472b6" },
  { name: "プレミアム職業", value: 35, color: "#60a5fa" },
  { name: "招き猫ガチャ", value: 25, color: "#fbbf24" },
];

const seasonalPasses = [
  { season: "春", price: "400 Robux", items: "桜祭り限定の和菓子レシピ、花見セット、桜柄の着物", color: "bg-pink-100 border-pink-300" },
  { season: "夏", price: "600 Robux", items: "花火大会の屋台装飾、浴衣コレクション、風鈴アイテム", color: "bg-sky-100 border-sky-300" },
  { season: "秋", price: "500 Robux", items: "紅葉庭園デコレーション、月見団子レシピ、秋祭りの神輿", color: "bg-orange-100 border-orange-300" },
  { season: "冬", price: "800 Robux", items: "年末年始の門松・しめ縄、おせち料理レシピ、初詣イベント", color: "bg-blue-100 border-blue-300" },
];

const gachaRarities = [
  { rarity: "コモン", rate: "60%", example: "白猫（生産速度+5%）", color: "bg-gray-100" },
  { rarity: "レア", rate: "25%", example: "三毛猫（売上+10%）", color: "bg-green-100" },
  { rarity: "エピック", rate: "12%", example: "福猫（全ステータス+10%）", color: "bg-purple-100" },
  { rarity: "レジェンダリー", rate: "3%", example: "七福神猫セット", color: "bg-amber-100" },
];

const principles = [
  { 
    title: "Pay to Winを避ける",
    description: "すべての有料アイテムは見た目や利便性の向上に留め、ゲーム進行に必須としない"
  },
  { 
    title: "無課金でも楽しめる設計",
    description: "基本的なゲームプレイは完全無料で体験可能にする"
  },
  { 
    title: "透明性の確保",
    description: "ガチャの確率を明示し、天井システム（100回で確定入手）を導入"
  },
];

export default function MonetizationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="monetization"
      ref={ref}
      className="py-24 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="/images/proposal-winter.png"
          alt="Winter village"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            <Coins className="w-4 h-4" />
            <span className="text-sm font-medium">マネタイズ戦略</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            収益化モデル
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            プレイヤー満足度を維持しながら持続可能な収益を実現する3つの柱
          </p>
        </motion.div>

        {/* Revenue Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-sm border-blue-100">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-600" />
                推定収益配分
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsChart>
                    <Pie
                      data={revenueData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Three Pillars */}
        <div className="space-y-8">
          {/* Seasonal Pass */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-blue-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    1. シーズナルパス（40%）
                  </CardTitle>
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-bold">
                    主力収益
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  日本の四季や伝統行事に連動した期間限定のプレミアムパスを販売します。
                  無料ティアとプレミアムティアの2段階構成で、すべてのプレイヤーが参加可能です。
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {seasonalPasses.map((pass) => (
                    <div
                      key={pass.season}
                      className={`p-4 rounded-xl border-2 ${pass.color}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{pass.season}パス</h4>
                        <span className="text-sm font-bold">{pass.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{pass.items}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Jobs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-blue-100">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Crown className="w-5 h-5 text-blue-600" />
                  2. プレミアム職業・店舗アンロック（35%）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  基本の職業（ラーメン屋、和菓子屋など）は無料で、より専門的・ユニークな職業をゲームパスで販売します。
                  各職業は独自のゲームプレイ体験と限定コンテンツを提供します。
                </p>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-700">
                    <span className="font-bold">価格帯:</span> 400〜800 Robux（約500〜1,000円相当）
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    <span className="font-bold">ラインナップ:</span> 温泉旅館オーナー、寿司職人、神社の巫女/神主、陶芸家、茶道家、花火師
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Gacha System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-blue-100">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Gift className="w-5 h-5 text-blue-600" />
                  3. 招き猫ガチャシステム（25%）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  日本の縁起物「招き猫」をテーマにしたコレクションガチャ。
                  各招き猫は店舗に配置でき、それぞれ異なるボーナス効果を持ちます。
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {gachaRarities.map((item) => (
                    <div
                      key={item.rarity}
                      className={`p-4 rounded-xl ${item.color}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{item.rarity}</h4>
                        <span className="text-sm font-bold text-gray-600">{item.rate}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.example}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="px-4 py-2 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="font-bold text-amber-700">1回ガチャ:</span> 75 Robux
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="font-bold text-amber-700">10連ガチャ:</span> 650 Robux（1回分お得）
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-green-50 border border-green-200">
                    <span className="font-bold text-green-700">デイリー無料:</span> 1日1回
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-purple-50 border border-purple-200">
                    <span className="font-bold text-purple-700">天井:</span> 100回で確定
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Important Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                重要な原則
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {principles.map((principle, index) => (
                  <div key={principle.title} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{principle.title}</h4>
                      <p className="text-sm text-gray-600">{principle.description}</p>
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
