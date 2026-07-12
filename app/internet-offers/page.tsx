'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Check, Globe, Wifi, Zap, ShieldCheck } from 'lucide-react';
import * as motion from 'framer-motion/client';

const displayPhone = "0537394981";
const whatsappPhone = "966537394981";

const packages = [
  {
    id: 1,
    title: "باقة الإنترنت الأساسية",
    speed: "100 ميجابت/ث",
    price: "239",
    features: ["إنترنت لا محدود", "مودم مجاني", "تركيب فوري", "بدون تمديدات"]
  },
  {
    id: 2,
    title: "باقة الإنترنت المتقدمة",
    speed: "300 ميجابت/ث",
    price: "329",
    features: ["سرعة فائقة للألعاب", "مقوي شبكة مجاني", "تطبيقات ترفيهية", "ثبات عالي"]
  },
  {
    id: 3,
    title: "باقة الألياف البصرية",
    speed: "500 ميجابت/ث",
    price: "399",
    features: ["ألياف بصرية حقيقية", "أقل بينج للألعاب", "دعم فني متخصص", "تأسيس مجاني"]
  }
];

export default function GenericLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      {/* Simple Header */}
      <header className="border-b border-gray-100 py-6 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <Globe size={24} />
            </div>
            <span className="font-black text-xl tracking-tight">مندوب انترنت منزلي</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href={`tel:${displayPhone}`} className="font-bold hover:text-gray-600 transition-colors">اتصل بنا</a>
            <a href={`https://wa.me/${whatsappPhone}`} className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-all">اطلب الآن</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Zap size={16} className="text-yellow-500" />
              <span className="text-sm font-bold uppercase tracking-wider">عروض حصرية لعام 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              أفضل عروض <br />
              <span className="text-gray-500">الإنترنت المنزلي</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              خدمات تأسيس وتركيب فورية للإنترنت المنزلي (5G والألياف البصرية) في جميع مناطق المملكة بأسعار تنافسية ودعم فني متكامل.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={`tel:${displayPhone}`} className="flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                <Phone size={24} />
                <span>اتصل للطلب فورا</span>
              </a>
              <a href={`https://wa.me/${whatsappPhone}`} className="flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/10">
                <MessageCircle size={24} />
                <span>تواصل واتساب</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <Image 
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_1_luo5ux.jpg" 
                  alt="مندوب انترنت منزلي" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="text-3xl font-black">مندوبك الشخصي</p>
                  <p className="opacity-80">نصلك أينما كنت وفي أسرع وقت</p>
                </div>
              </div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">الضمان</p>
                  <p className="text-xl font-black">تركيب مضمون</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-gray-400 font-bold tracking-widest uppercase text-sm">الباقات المتاحة</h2>
            <h3 className="text-4xl md:text-5xl font-black">اختر الباقة الأنسب لاحتياجاتك</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <motion.div 
                key={pkg.id}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-gray-100 p-8 rounded-3xl transition-all hover:border-black group"
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-black mb-2">{pkg.title}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{pkg.price}</span>
                    <span className="text-gray-500 font-bold">ر.س / شهريا</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-lg font-bold">
                    <Wifi size={20} className="text-gray-400" />
                    <span>{pkg.speed}</span>
                  </div>
                  <div className="h-px bg-gray-100 w-full" />
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <Check size={18} className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/${whatsappPhone}?text=أريد طلب ${pkg.title}`}
                  className="block w-full text-center py-4 rounded-xl font-black transition-all bg-gray-50 group-hover:bg-black group-hover:text-white"
                >
                  اطلب الآن
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative">
                  <Image src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279053/3_d2uvsg.png" alt="تأسيس شبكات" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative">
                  <Image src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461698/WhatsApp_Image_2026-04-28_at_2.57.08_PM_z4ytos.jpg" alt="تركيب انترنت" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative">
                  <Image src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_2_ztdosg.jpg" alt="سرعة اتصال" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative">
                  <Image src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/2_ivbo98.png" alt="خدمة عملاء" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">خدماتنا تشمل كافة <br /> أنحاء المملكة</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">تغطية شاملة</h4>
                    <p className="text-gray-600 leading-relaxed">نغطي كافة أحياء الرياض وجدة والدمام وبقية مدن المملكة بخدمات 5G والألياف.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">تركيب في نفس اليوم</h4>
                    <p className="text-gray-600 leading-relaxed">لا حاجة للانتظار الطويل، مندوبنا يصلك ويقوم بتفعيل الخدمة في أسرع وقت ممكن.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">دعم ما بعد البيع</h4>
                    <p className="text-gray-600 leading-relaxed">فريقنا متواجد دائماً لمساعدتك في أي استفسار أو مشكلة تقنية قد تواجهك.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a href={`tel:${displayPhone}`} className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all">
                  اطلب مندوب الآن
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12 mb-12">
            <div className="text-center md:text-right">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  <Globe size={24} />
                </div>
                <span className="font-black text-2xl">مندوب انترنت منزلي</span>
              </div>
              <p className="text-gray-400 max-w-sm">خيارك الأول لخدمات الإنترنت السريع والموثوق في المملكة العربية السعودية.</p>
            </div>
            <div className="flex gap-4">
              <a href={`tel:${displayPhone}`} className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all">
                <Phone size={24} />
              </a>
              <a href={`https://wa.me/${whatsappPhone}`} className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} مندوب انترنت منزلي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
