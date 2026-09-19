'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const displayPhone = "0537394981";
  const whatsappPhone = "966537394981";

  const logoSrc = "/images/zain-logo.webp";
  const logoAlt = "شعار زين 5G وألياف بصرية";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto' };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="bg-brand-primary text-brand-secondary overflow-hidden py-2 relative z-[60]">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 font-bold text-sm w-max"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Sparkles size={16} />
              <span>عرض محدود لفترة محدودة: احصل على تركيب مجاني الآن</span>
              <a href={`tel:${displayPhone}`} className="underline pr-2 hover:text-white transition-colors">اتصل بالمندوب الآن</a>
            </div>
          ))}
        </motion.div>
      </div>
      <header className={`py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 text-brand-secondary' : 'bg-white border-b border-gray-100 text-brand-secondary'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center relative min-h-[4rem] md:min-h-[6rem]">
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="md:hidden text-brand-secondary hover:text-brand-primary transition z-10 p-2 -mr-2"
            aria-label="افتح القائمة"
          >
            <Menu size={32} />
          </button>

          <div className="hidden md:flex gap-8 z-10 flex-1 items-center">
            <Link href="/" className="font-bold hover:text-brand-primary transition-colors text-[15px]">الرئيسية</Link>
            <Link href="/#services" className="font-bold hover:text-brand-primary transition-colors text-[15px]">الخدمات</Link>
            <Link href="/#gallery" className="font-bold hover:text-brand-primary transition-colors text-[15px]">أعمال التركيب</Link>
            <Link href="/#blog" className="font-bold hover:text-brand-primary transition-colors text-[15px]">المدونة</Link>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
            <Image 
              src={logoSrc} 
              alt={logoAlt} 
              width={240}
              height={120}
              className="h-20 md:h-32 w-auto object-contain transition-all duration-300 " 
              loading="eager" 
            />
          </Link>
          
          <div className="hidden md:flex gap-4 z-10 flex-1 justify-end items-center">
             <Link href="/blog/5" className="font-bold text-brand-primary hover:text-brand-primary/80 transition-colors text-[15px] hidden lg:block">عرض التأسيس</Link>
             <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-brand-secondary hover:bg-brand-primary/90 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm flex items-center gap-2">
               <MessageCircle size={18} />
               <span>تواصل معنا</span>
             </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col border-l border-gray-100"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <Image 
                src={logoSrc} 
                alt={logoAlt} 
                width={200}
                height={100}
                className="h-20 w-auto object-contain " 
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-gray-600 hover:text-brand-primary transition bg-gray-50 p-2 rounded-full border border-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2 text-brand-secondary">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-gray-50 font-bold rounded-xl p-4 transition-colors">
                الرئيسية
              </Link>
              <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-gray-50 font-bold rounded-xl p-4 transition-colors">
                الخدمات
              </Link>
              <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-gray-50 font-bold rounded-xl p-4 transition-colors">
                أعمال التركيب
              </Link>
              <Link href="/#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-gray-50 font-bold rounded-xl p-4 transition-colors">
                المدونة
              </Link>
              <Link href="/blog/5" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-gray-50 font-bold rounded-xl p-4 transition-colors text-brand-primary">
                عروض التأسيس الحصرية
              </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-800">
               <a 
                 href={`https://wa.me/${whatsappPhone}`} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-green-500 hover:bg-green-600 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition text-white shadow-md shadow-green-500/20"
               >
                 <MessageCircle size={20} />
                 <span>تواصل عبر الواتساب</span>
               </a>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-[55] flex flex-col gap-4">
        <a 
          href={`tel:${displayPhone}`}
          className="w-14 h-14 bg-brand-secondary rounded-full shadow-lg flex items-center justify-center text-white md:hover:scale-110 transition-transform duration-300 group relative"
          aria-label="اتصل بنا الآن"
        >
          <Phone size={24} />
          <span className="absolute left-16 bg-brand-secondary text-white font-bold px-4 py-2 rounded-lg hidden md:group-hover:block text-sm whitespace-nowrap shadow-xl">
            اتصل للطلب
          </span>
        </a>

        <a 
          href={`https://wa.me/${whatsappPhone}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white md:hover:scale-110 transition-transform duration-300 group relative"
          aria-label="تواصل معنا عبر واتساب"
        >
          <MessageCircle size={28} />
          <span className="absolute left-16 bg-brand-secondary text-white font-bold px-4 py-2 rounded-lg hidden md:group-hover:block text-sm whitespace-nowrap shadow-xl">
            تواصل عبر واتساب
          </span>
        </a>
      </div>
    </>
  );
}

export function Footer() {
  const displayPhone = "0537394981";
  const whatsappPhone = "966537394981";
  const logoSrc = "/images/zain-logo.webp";

  return (
    <footer className="bg-brand-secondary text-gray-400 pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-right mb-16 max-w-7xl">
        <div className="md:col-span-5 flex flex-col items-center md:items-start">
          <Image 
            src={logoSrc} 
            alt="شعار المؤسسة" 
            width={300}
            height={150}
            className="mb-6 h-28 md:h-40 w-auto opacity-100 object-contain" 
          />
          <p className="mb-6 leading-relaxed text-gray-400 max-w-sm">
            الوجهة الأولى لتأسيس وتركيب خدمات زين 5G والألياف البصرية في السعودية. نوفر لك السرعة والكفاءة بضمان معتمد.
          </p>
          <a href={`tel:${displayPhone}`} className="inline-flex items-center gap-3 bg-brand-primary text-brand-secondary font-bold text-xl px-6 py-3 rounded-2xl hover:bg-white hover:text-brand-primary transition-colors shadow-lg">
            <Phone size={20} />
            <span dir="ltr">{displayPhone}</span>
          </a>
        </div>
        
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-brand-primary transition-colors flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> الرئيسية</Link></li>
            <li><Link href="/#services" className="hover:text-brand-primary transition-colors flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> الخدمات والباقات</Link></li>
            <li><Link href="/#gallery" className="hover:text-brand-primary transition-colors flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> معرض التأسيس</Link></li>
            <li><Link href="/#blog" className="hover:text-brand-primary transition-colors flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> المدونة</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-6 text-lg">خدماتنا</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> إنترنت 5G منزلي لامحدود</li>
            <li className="flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> تركيب ألياف بصرية (فايبر)</li>
            <li className="flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> تغطية شاملة للمملكة</li>
            <li className="flex items-center gap-2 justify-center md:justify-start"><span className="text-brand-primary opacity-50">✦</span> دعم فني ومساعدة متخصصة</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-6 text-center text-sm bg-black/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لخدمات التأسيس.</p>
          
          <div className="flex flex-col items-center gap-1 my-2 md:my-0">
             <span className="text-gray-400 text-xs">تم التصميم والتطوير بواسطة</span>
             <a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-green-400 hover:scale-110 transition-transform tracking-wider text-base">
               NasharHub.com
             </a>
          </div>

          <div className="flex gap-3">
            <a href={`https://wa.me/${whatsappPhone}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
