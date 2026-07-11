"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Info } from "lucide-react";

const comparisonData = [
  {
    feature: "السرعة والتقنية",
    fiber:
      "سرعات انترنت ثابتة ومضمونة عبر كابلات الألياف الضوئية المباشرة (استجابة سريعة جداً).",
    fiveG:
      "سرعات عالية عبر الأبراج اللاسلكية تعتمد على التغطية في الموقع (استجابة سريعة).",
  },
  {
    feature: "تغطية الشبكة",
    fiber:
      "تتوفر في الأحياء المدعومة كبنية تحتية (يجب التأكد من وجود العلبة في المبنى).",
    fiveG: "متوفرة في معظم المناطق وتعتمد فقط على تغطية أبراج زين في المكان.",
  },
  {
    feature: "زمن التأخير (Ping / Latency)",
    fiber: "منخفض جداً (ممتاز لمحبي الألعاب الأونلاين والبث المباشر).",
    fiveG:
      "منخفض، جيد جداً للاستخدام اليومي والألعاب لكن الألياف أفضل في الاستقرار.",
  },
  {
    feature: "سهولة التركيب والنقل",
    fiber:
      "يتم تركيبه وتأسيسه من قبل فني في نفس موقع المنزل ولا يمكن نقله بسهولة.",
    fiveG:
      "توصل وشغل الفيش (Plug & Play)، ويمكنك نقل الراوتر معك داخل أو خارج المنزل لمناطق تغطية زين.",
  },
  {
    feature: "الأجهزة المدعومة",
    fiber:
      "دعم عالي لعدد كبير جداً من الأجهزة الثابتة والمتصلة في المنزل في وقت واحد.",
    fiveG: "دعم قوي لعدد كبير من الأجهزة باستخدام راوترات 5G المتطورة.",
  },
  {
    feature: "الباقات والأسعار",
    fiber: "باقات متنوعة (تبدأ بأسعار متفاوتة بناءً على السرعة المختارة).",
    fiveG: "باقات اقتصادية ومرنة تقدم قيمة ممتازة مقابل السرعة.",
  },
];

export default function ComparisonTable() {
  return (
    <div className="max-w-5xl mx-auto mt-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl font-black text-brand-secondary mb-4">
          أيهما الأنسب لك؟
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          جدول مقارنة يوضح الفروقات الجوهرية بين خدمة الألياف البصرية المتطورة و
          خدمة 5G اللاسلكية لتسهيل اختيارك.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-brand-gray border-b border-gray-200">
                <th className="p-6 text-brand-secondary font-bold text-lg w-1/3">
                  الميزة / الخدمة
                </th>
                <th className="p-6 text-brand-primary font-black text-xl w-1/3 bg-brand-primary/5 text-center border-x border-gray-200">
                  الألياف البصرية (Fiber)
                </th>
                <th className="p-6 text-brand-secondary font-black text-xl w-1/3 text-center">
                  زين 5G المنزلي
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-brand-gray/30 transition-colors"
                >
                  <td className="p-6 font-bold text-brand-secondary">
                    {row.feature}
                  </td>
                  <td className="p-6 text-gray-600 font-medium leading-relaxed bg-brand-primary/5 border-x border-gray-200">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span>{row.fiber}</span>
                    </div>
                  </td>
                  <td className="p-6 text-gray-600 font-medium leading-relaxed">
                    <div className="flex items-start gap-2 justify-start">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{row.fiveG}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-brand-gray/50 border-t border-gray-100 text-center flex items-start gap-3 justify-center text-gray-500 text-sm">
          <Info className="w-5 h-5 shrink-0" />
          <p>
            اختر الألياف البصرية إن كنت تبحث عن استقرار فائق للألعاب الأونلاين.
            واختر 5G إن كنت تبحث عن سهولة النقل وسرعة التركيب ومرونة في
            الاستخدام.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
