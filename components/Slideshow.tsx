'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const homeImages = [
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png", alt: "مندوب شركة زين الرياض لتركيب وتأسيس 5G والألياف" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279049/1_s3knrl.png", alt: "عروض وسرعات إنترنت زين 5G الهائلة للمنزل لتجربة ألعاب وبث بلا تقطيع" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/zain_fiber_rdqmd6.jpg", alt: "تركيب بوكسات ألياف بصرية زين فايبر بسرعة واحترافية" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/2_ivbo98.png", alt: "باقات زين المفتوحة واللامحدودة للإنترنت المنزلي والألياف البصرية المتطورة" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461698/WhatsApp_Image_2026-04-28_at_2.57.08_PM_z4ytos.jpg", alt: "تأسيس وإنشاء شبكات الألياف البصرية وزين فايبر للمنازل" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279053/3_d2uvsg.png", alt: "أفضل تغطية إنترنت منزلي من شركة زين في الرياض والمملكة كاملة" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_2_ztdosg.jpg", alt: "تمديد كابلات وتجهيز بوكسات الألياف البصرية زين بأعلى معايير الجودة" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279052/4_mve8v4.png", alt: "تأسيس وتركيب إنترنت 5G سريع ومجاني مع راوتر حديث" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_1_luo5ux.jpg", alt: "مندوب زين الفني لتركيب الألياف البصرية بالموقع بأسرع وقت" },
  { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279050/5_l2sdhh.png", alt: "موظف مبيعات زين لخدمات الإنترنت المنزلي ورفع طلبات التأسيس فوراً" }
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
          className="w-full h-auto object-cover max-h-[600px] group-hover:scale-105 transition-transform duration-[20s]"
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
