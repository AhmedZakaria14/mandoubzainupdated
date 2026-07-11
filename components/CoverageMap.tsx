'use client';

import React from 'react';
import { MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function CoverageMap() {
  const WHATSAPP_PHONE = "966537394981";

  const regions = [
    {
      name: "الرياض",
      districts: ["شمال الرياض", "جنوب الرياض", "شرق الرياض", "غرب الرياض", "وسط الرياض"],
      color: "from-brand-primary/20 to-brand-primary/5"
    },
    {
      name: "المدينة المنورة",
      districts: ["الدائري الثاني", "العزيزية", "الهجرة", "الفيصلية", "المطار"],
      color: "from-[#B1015B]/20 to-[#B1015B]/5"
    }
  ];

  return (
    <section id="coverage" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B1015B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center justify-center bg-white p-3 rounded-full shadow-md mb-4 text-brand-primary">
            <MapPin size={32} />
          </div>
          <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase">تغطية شبكتنا</h2>
          <h3 className="text-4xl font-black text-brand-secondary">أوسع تغطية لشبكات 5G والألياف</h3>
          <p className="text-gray-600 text-lg">
            نغطي معظم أحياء الرياض والمدينة المنورة لضمان وصول خدماتنا إليك بأسرع وقت وأعلى جودة.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {regions.map((region, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${region.color}`}></div>
              <h4 className="text-2xl font-bold text-brand-secondary mb-6 flex items-center gap-2">
                <MapPin className="text-brand-primary" /> {region.name}
              </h4>
              <ul className="grid grid-cols-2 gap-4">
                {region.districts.map((district, dIndex) => (
                  <li key={dIndex} className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span>{district}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500 font-medium">
                والمزيد من الأحياء والمناطق...
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-10 shadow-2xl border border-brand-primary/10 relative"
        >
           <div className="relative z-10">
              <h4 className="text-2xl font-bold text-brand-secondary mb-4">هل حيك مغطى؟</h4>
              <p className="text-gray-600 mb-8 font-medium">
                أرسل لنا موقعك عبر الواتساب للتحقق من التغطية بدقة في منطقتك ومعرفة الباقات المتاحة لك فوراً.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('مرحباً، أود التحقق من تغطية زين 5G أو الألياف البصرية في موقعي.')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle size={24} />
                تحقق من التغطية الآن
              </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
