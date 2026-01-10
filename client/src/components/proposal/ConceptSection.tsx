/**
 * ConceptSection - ゲームコンセプトセクション（春テーマ）
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Clock, 
  Sparkles, 
  Palette, 
  Users,
  Flower2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Clock,
    title: "放置型経営シミュレーション",
    description: "オフライン中も自動で商品が生産・販売され、ログイン時に報酬を受け取れます。忙しい日常の合間にも楽しめる設計です。",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Flower2,
    title: "日本文化体験",
    description: "四季折々の日本の風景、伝統行事、食文化を忠実に再現。桜の花見から初詣まで、日本の一年を体験できます。",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Palette,
    title: "カスタマイズと自己表現",
    description: "店舗の内装・外装、庭園のデザイン、アバターの着物など、あらゆる要素をカスタマイズ可能です。",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Users,
    title: "コミュニティと協力",
    description: "同じ村に住む他のプレイヤーと協力して村全体を発展させます。村祭りの開催や共同での神社建設など。",
    color: "bg-blue-100 text-blue-600",
  },
];

export default function ConceptSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="concept"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">ゲームコンセプト</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            4つの柱
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            本ゲームは以下の4つの柱で構成され、プレイヤーに癒しと楽しさを提供します
          </p>
        </motion.div>

        {/* Core Concept Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">"</div>
              <p className="font-display text-2xl md:text-3xl text-gray-700 leading-relaxed">
                日本の美しい四季と伝統文化の中で、
                <br />
                のんびりと自分だけのお店と村を育てる
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-pink-600">
                <Flower2 className="w-5 h-5" />
                <span className="font-medium">コアコンセプト</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Four Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${pillar.color}`}>
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-pink-50 to-green-50 border-pink-200">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4 text-center">
                世界観とストーリー
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                舞台は「ほのぼの村」という架空の日本の田舎町です。かつては賑わっていた商店街も、
                時代の流れとともに寂れてしまいました。プレイヤーは都会から移住してきた新しい住人として、
                この村に活気を取り戻す使命を担います。村には様々なNPCキャラクターが住んでおり、
                それぞれに個性的なバックストーリーがあります。
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
