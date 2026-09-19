'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const homeImages = [
  { src: "/images/zain-banner-0537394981.webp", alt: "مندوب شركة زين الرياض لتركيب وتأسيس 5G والألياف" },
  { src: "/images/1_s3knrl.webp", alt: "عروض وسرعات إنترنت زين 5G الهائلة للمنزل لتجربة ألعاب وبث بلا تقطيع" },
  { src: "/images/2_ivbo98.webp", alt: "باقات زين المفتوحة واللامحدودة للإنترنت المنزلي والألياف البصرية المتطورة" },
  { src: "/images/fiber-installations.webp", alt: "تأسيس وإنشاء شبكات الألياف البصرية وزين فايبر للمنازل" },
  { src: "/images/3_d2uvsg.webp", alt: "أفضل تغطية إنترنت منزلي من شركة زين في الرياض والمملكة كاملة" },
  { src: "/images/fiber-boxes.webp", alt: "تمديد كابلات وتجهيز بوكسات الألياف البصرية زين بأعلى معايير الجودة" },
  { src: "/images/4_mve8v4.webp", alt: "تأسيس وتركيب إنترنت 5G سريع ومجاني مع راوتر حديث" },
  { src: "/images/fiber-identification.webp", alt: "مندوب زين الفني لتركيب الألياف البصرية بالموقع بأسرع وقت" },
  { src: "/images/5_l2sdhh.webp", alt: "موظف مبيعات زين لخدمات الإنترنت المنزلي ورفع طلبات التأسيس فوراً" }
];

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    }, 4500); // 4.5 seconds delay
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[300px] md:min-h-[500px] flex items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-800/50 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={homeImages[currentIndex].src}
          alt={homeImages[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-auto object-contain bg-white max-h-[600px] pb-16 group-hover:scale-105 transition-transform duration-[20s]"
        />
      </AnimatePresence>
      
      {/* Pagination indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 z-10 p-2 bg-black/20 rounded-full backdrop-blur-md">
        {homeImages.map((_, idx) => (
           <button
             key={idx}
             onClick={() => setCurrentIndex(idx)}
             className="focus:outline-none px-1"
             aria-label={`عرض الصورة رقم ${idx + 1}`}
           >
             <div 
               className={`transition-all duration-300 rounded-full ${
                 idx === currentIndex ? 'bg-brand-primary w-8 h-2' : 'bg-white/70 hover:bg-white w-2 h-2'
               }`}
             />
           </button>
        ))}
      </div>
    </div>
  );
}
