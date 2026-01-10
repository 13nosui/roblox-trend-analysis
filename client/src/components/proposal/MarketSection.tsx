/**
 * MarketSection - 市場分析セクション（夏テーマ）
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Target, 
  Users,
  Globe,
  BarChart3,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const marketStats = [
  { label: "DAU目標", value: "100万人", icon: Users },
  { label: "MAU目標", value: "500万人", icon: Globe },
  { label: "課金率", value: "3-5%", icon: TrendingUp },
  { label: "月間収益", value: "1.2-2億円", icon: BarChart3 },
];

const differentiators = [
  { aspect: "テーマ", competitor: "農業・ガーデニング", ours: "日本文化・商店街経営" },
  { aspect: "世界観", competitor: "汎用的", ours: "日本の四季・伝統行事" },
  { aspect: "ソーシャル性", competitor: "限定的", ours: "村全体での協力・イベント" },
  { aspect: "カスタマイズ", competitor: "植物中心", ours: "店舗・衣装・庭園の総合カスタマイズ" },
];

const personas = [
  {
    name: "エミリー",
    age: "14歳",
    location: "アメリカ",
    description: "アニメが大好きな中学生。「鬼滅の刃」や「SPY×FAMILY」を見て日本文化に興味を持った。",
    traits: ["アニメファン", "コレクター", "友達とプレイ"],
  },
  {
    name: "ユウキ",
    age: "22歳",
    location: "日本",
    description: "大学生で、授業の合間や通学中にスマホでゲームをする。放置系ゲームなら隙間時間に楽しめる。",
    traits: ["カジュアルゲーマー", "癒し系好き", "時短重視"],
  },
  {
    name: "トーマス",
    age: "28歳",
    location: "ドイツ",
    description: "IT企業で働く社会人。仕事のストレスを解消するために、リラックスできるゲームを探している。",
    traits: ["社会人", "課金意欲高", "日本旅行経験あり"],
  },
];

export default function MarketSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="market"
      ref={ref}
      className="py-24 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/images/proposal-summer.png"
          alt="Summer festival"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">市場分析</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            市場機会と差別化
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            放置系ゲームの急成長と日本文化への高い関心を活かした戦略
          </p>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-amber-100">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                    市場機会
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Robloxプラットフォームにおいて、放置系ゲームは2025年に爆発的な成長を遂げました。
                    「Grow a Garden」はわずか2ヶ月でRoblox史上最高の訪問数を記録し、
                    ピーク時にはプラットフォーム全体の<span className="font-bold text-amber-600">67%</span>のプレイヤーを占めるという驚異的な数字を達成しています。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-amber-100 text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-amber-100 mb-3">
                    <stat.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Differentiation Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-sm border-amber-100 overflow-hidden">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="font-display flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-600" />
                差別化ポイント
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-100">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">要素</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">競合ゲーム</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-amber-600">本ゲーム</th>
                    </tr>
                  </thead>
                  <tbody>
                    {differentiators.map((item, index) => (
                      <tr key={item.aspect} className={index % 2 === 0 ? "bg-amber-50/30" : ""}>
                        <td className="px-6 py-4 font-medium text-gray-800">{item.aspect}</td>
                        <td className="px-6 py-4 text-gray-500">{item.competitor}</td>
                        <td className="px-6 py-4 text-amber-700 font-medium">{item.ours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Target Personas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 text-center">
            ターゲットペルソナ
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-100 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center text-xl font-bold text-amber-700">
                        {persona.name[0]}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-gray-800">{persona.name}</h4>
                        <p className="text-sm text-gray-500">{persona.age} / {persona.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {persona.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {persona.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
