/**
 * RoadmapSection - 開発ロードマップセクション（冬テーマ）
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Map, 
  CheckCircle2,
  Circle,
  Target,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
  {
    phase: "Phase 1",
    title: "基盤開発",
    duration: "1-3ヶ月目",
    status: "upcoming",
    tasks: [
      "コアシステム実装（放置メカニクス）",
      "基本店舗4種類の開発",
      "チュートリアル作成",
      "基本的なUI/UX設計",
    ],
  },
  {
    phase: "Phase 2",
    title: "コンテンツ拡充",
    duration: "4-6ヶ月目",
    status: "upcoming",
    tasks: [
      "四季システム実装",
      "追加店舗・職業の開発",
      "イベントシステム構築",
      "ソーシャル機能（村システム）",
    ],
  },
  {
    phase: "Phase 3",
    title: "収益化機能",
    duration: "7-9ヶ月目",
    status: "upcoming",
    tasks: [
      "シーズナルパス実装",
      "プレミアム職業リリース",
      "招き猫ガチャシステム",
      "ゲーム内ショップ整備",
    ],
  },
  {
    phase: "Phase 4",
    title: "正式リリース",
    duration: "10-12ヶ月目",
    status: "upcoming",
    tasks: [
      "ベータテスト実施",
      "バグ修正・最適化",
      "マーケティング施策",
      "正式リリース・運営開始",
    ],
  },
];

const kpis = [
  { metric: "DAU", target: "100万人", timeline: "リリース6ヶ月後" },
  { metric: "MAU", target: "500万人", timeline: "リリース12ヶ月後" },
  { metric: "課金率", target: "3-5%", timeline: "安定運営時" },
  { metric: "ARPU", target: "$0.50-1.00", timeline: "月間" },
  { metric: "D1リテンション", target: "40%以上", timeline: "継続目標" },
  { metric: "D7リテンション", target: "20%以上", timeline: "継続目標" },
];

const risks = [
  {
    risk: "競合の参入",
    impact: "高",
    mitigation: "差別化要素（日本文化）の強化、コミュニティ構築による囲い込み",
  },
  {
    risk: "文化的誤解",
    impact: "中",
    mitigation: "日本文化の専門家によるレビュー、ローカライズの徹底",
  },
  {
    risk: "技術的課題",
    impact: "中",
    mitigation: "段階的リリース、十分なテスト期間の確保",
  },
  {
    risk: "収益化の遅れ",
    impact: "高",
    mitigation: "早期のマネタイズテスト、柔軟な価格調整",
  },
];

export default function RoadmapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roadmap"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            <Map className="w-4 h-4" />
            <span className="text-sm font-medium">開発ロードマップ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            12ヶ月開発計画
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            段階的な開発アプローチで、品質を維持しながら確実にリリースを目指します
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 border-4 border-blue-500 flex items-center justify-center z-10">
                    <Circle className="w-3 h-3 text-blue-500 fill-current" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card className="bg-white/90 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                            {phase.phase}
                          </span>
                          <span className="text-sm text-gray-500">{phase.duration}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-gray-800 mb-3">
                          {phase.title}
                        </h3>
                        <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {phase.tasks.map((task) => (
                            <li key={task} className={`flex items-center gap-2 text-sm text-gray-600 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KPIs and Risks */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full bg-white/90 backdrop-blur-sm border-blue-100">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  KPI・成功指標
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.metric}
                      className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <p className="text-sm text-gray-500 mb-1">{kpi.metric}</p>
                      <p className="text-xl font-bold text-blue-700">{kpi.target}</p>
                      <p className="text-xs text-gray-400 mt-1">{kpi.timeline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="h-full bg-white/90 backdrop-blur-sm border-blue-100">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  リスク分析と対策
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {risks.map((item) => (
                    <div
                      key={item.risk}
                      className="p-4 rounded-xl bg-blue-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{item.risk}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          item.impact === "高" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                        }`}>
                          影響度: {item.impact}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.mitigation}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
