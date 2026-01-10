/**
 * ContentSection - コンテンツ設計セクション（秋テーマ）
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Package, 
  Briefcase,
  Crown,
  Building,
  Shirt
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const basicJobs = [
  { name: "ラーメン職人", description: "麺を打ち、スープを仕込む", skills: "麺打ち、スープ調合", emoji: "🍜" },
  { name: "和菓子職人", description: "伝統的な和菓子を作る", skills: "餡作り、成形技術", emoji: "🍡" },
  { name: "農家", description: "野菜や米を育てる", skills: "栽培、収穫", emoji: "🌾" },
  { name: "商人", description: "物品を仕入れて販売する", skills: "交渉、在庫管理", emoji: "🏪" },
];

const premiumJobs = [
  { 
    name: "温泉旅館オーナー", 
    price: "800 Robux",
    features: ["露天風呂経営", "特別な癒し効果", "VIP客対応"],
    emoji: "♨️"
  },
  { 
    name: "寿司職人", 
    price: "600 Robux",
    features: ["高級ネタ仕入れ", "カウンター席", "職人技アニメーション"],
    emoji: "🍣"
  },
  { 
    name: "神社の巫女/神主", 
    price: "500 Robux",
    features: ["お守り作成", "おみくじ機能", "神社イベント主催"],
    emoji: "⛩️"
  },
  { 
    name: "陶芸家", 
    price: "400 Robux",
    features: ["陶器作成ミニゲーム", "窯", "オリジナル食器販売"],
    emoji: "🏺"
  },
  { 
    name: "茶道家", 
    price: "500 Robux",
    features: ["茶室経営", "茶道具コレクション", "茶会イベント"],
    emoji: "🍵"
  },
  { 
    name: "花火師", 
    price: "700 Robux",
    features: ["花火制作", "夏祭り特別演出", "限定花火パターン"],
    emoji: "🎆"
  },
];

const buildings = [
  { category: "個人施設", items: ["店舗", "住居", "庭園", "倉庫"] },
  { category: "共有施設", items: ["神社", "温泉", "商店街", "祭り会場", "駅"] },
];

const itemCategories = [
  { 
    name: "素材アイテム", 
    items: [
      { type: "農作物", examples: "米、野菜、果物" },
      { type: "海産物", examples: "魚、海藻、貝" },
      { type: "木材", examples: "杉、檜、竹" },
      { type: "布地", examples: "絹、麻、綿" },
    ]
  },
  { 
    name: "装飾アイテム", 
    items: [
      { type: "家具", examples: "畳、障子、掛け軸、花瓶" },
      { type: "庭園", examples: "灯籠、鹿威し、池、橋" },
      { type: "季節装飾", examples: "門松、鯉のぼり、風鈴" },
    ]
  },
  { 
    name: "衣装アイテム", 
    items: [
      { type: "和服", examples: "着物、浴衣、袴" },
      { type: "職業服", examples: "法被、前掛け、白衣" },
      { type: "アクセサリー", examples: "簪、扇子、下駄" },
    ]
  },
];

export default function ContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <section
      id="content"
      ref={ref}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 mb-4">
            <Package className="w-4 h-4" />
            <span className="text-sm font-medium">コンテンツ設計</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ゲームコンテンツ
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            職業、建物、アイテムなど、プレイヤーを夢中にさせる豊富なコンテンツ
          </p>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                職業
              </TabsTrigger>
              <TabsTrigger value="buildings" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                建物
              </TabsTrigger>
              <TabsTrigger value="items" className="flex items-center gap-2">
                <Shirt className="w-4 h-4" />
                アイテム
              </TabsTrigger>
            </TabsList>

            {/* Jobs Tab */}
            <TabsContent value="jobs">
              <div className="space-y-8">
                {/* Basic Jobs */}
                <Card className="bg-white/90 backdrop-blur-sm border-orange-100">
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-orange-600" />
                      基本職業（無料）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {basicJobs.map((job) => (
                        <div
                          key={job.name}
                          className="p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors"
                        >
                          <span className="text-3xl mb-2 block">{job.emoji}</span>
                          <h4 className="font-bold text-gray-800 mb-1">{job.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                          <p className="text-xs text-orange-600">スキル: {job.skills}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Premium Jobs */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-2">
                      <Crown className="w-5 h-5 text-amber-600" />
                      プレミアム職業（有料）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {premiumJobs.map((job) => (
                        <div
                          key={job.name}
                          className="p-4 rounded-xl bg-white/80 border border-amber-200 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-3xl">{job.emoji}</span>
                            <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-bold">
                              {job.price}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2">{job.name}</h4>
                          <ul className="space-y-1">
                            {job.features.map((feature) => (
                              <li key={feature} className="text-sm text-gray-600 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Buildings Tab */}
            <TabsContent value="buildings">
              <Card className="bg-white/90 backdrop-blur-sm border-orange-100">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <Building className="w-5 h-5 text-orange-600" />
                    建物・施設
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {buildings.map((category) => (
                      <div key={category.category}>
                        <h4 className="font-bold text-gray-800 mb-4 pb-2 border-b border-orange-200">
                          {category.category}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {category.items.map((item) => (
                            <div
                              key={item}
                              className="p-3 rounded-lg bg-orange-50 text-center hover:bg-orange-100 transition-colors"
                            >
                              <span className="font-medium text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Items Tab */}
            <TabsContent value="items">
              <div className="grid md:grid-cols-3 gap-6">
                {itemCategories.map((category) => (
                  <Card key={category.name} className="bg-white/90 backdrop-blur-sm border-orange-100">
                    <CardHeader>
                      <CardTitle className="font-display text-lg">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <div key={item.type} className="p-3 rounded-lg bg-orange-50">
                            <span className="font-medium text-gray-800 block mb-1">{item.type}</span>
                            <span className="text-sm text-gray-500">{item.examples}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
