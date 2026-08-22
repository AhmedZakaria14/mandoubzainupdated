import React from 'react';
import { packages } from '@/data/packages';
import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { Slideshow } from '@/components/Slideshow';
import { FAQSection } from '@/components/FAQ';
import ComparisonTable from '@/components/ComparisonTable';
import { CoverageMap } from '@/components/CoverageMap';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Phone, MessageCircle, Zap, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { RiyalIcon } from 'riyal/react';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'تأسيس وتركيب إنترنت زين | عروض 5G والألياف البصرية',
  description: 'احصل على أفضل خدمات وعروض زين لإنترنت 5G والألياف البصرية. تأسيس سريع، مودم مجاني، وباقات مميزة لتغطية شاملة في كافة أحياء الرياض والمدينة المنورة والمملكة. اتصل بمندوب زين.',
  alternates: {
    canonical: process.env.APP_URL ? `${process.env.APP_URL}/` : '/',
  }
};

export default function Home() {
  const WHATSAPP_PHONE = "966537394981";
  const DISPLAY_PHONE = "0537394981";

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray font-sans text-brand-secondary">
      <Header />
      
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "تأسيس وتركيب إنترنت 5G وألياف بصرية",
              "name": "مبيعات زين 5G وألياف",
              "provider": {
                "@type": "Organization",
                "name": "مبيعات زين 5G وألياف",
                "telephone": `+${WHATSAPP_PHONE}`,
                "image": `https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png`
              },
              "areaServed": ["الرياض", "المدينة المنورة", "المملكة العربية السعودية"],
              "description": "خدمات تأسيس وتركيب إنترنت زين 5G والألياف البصرية للمنازل في مدينة الرياض والمدينة المنورة وكافة أنحاء السعودية بأفضل العروض لتجربة تصفح أسرع.",
              "url": process.env.APP_URL || 'https://example.com',
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "باقات زين المتاحة",
                "itemListElement": packages.map((pkg) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pkg.title,
                    "description": pkg.subtitle
                  },
                  "price": pkg.price,
                  "priceCurrency": "SAR",
                  "url": process.env.APP_URL || 'https://example.com'
                }))
              }
            })
          }}
        />

        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden selection:bg-brand-primary selection:text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-gray to-white -z-10" />
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none z-0" 
               style={{ backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.4) 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

          <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="lg:w-1/2 text-center lg:text-right space-y-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-brand-secondary font-medium text-sm border border-gray-200 shadow-sm mx-auto lg:mx-0">
                 <div className="flex items-center justify-center bg-brand-primary text-brand-secondary font-black text-[11px] px-2 py-0.5 rounded shadow-[0_2px_8px_rgba(149,193,31,0.5)] tracking-wider">
                   5G
                 </div>
                 <span>أقوى عروض التأسيس لعام 2026</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-brand-secondary leading-[1.15] tracking-tight">
                إنترنت <span className="text-brand-primary">زين 5G</span> <br /> 
                <span className="font-bold text-4xl md:text-6xl text-gray-800">الأسرع لمنزلك</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                استمتع بعروض 5G والألياف البصرية المتطورة. تأسيس وتركيب مجاني في كافة مناطق المملكة مع <span className="font-bold text-brand-primary">راوتر مجاني</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <a 
                  href={`https://wa.me/${WHATSAPP_PHONE}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-brand-primary text-brand-secondary px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">تواصل عبر الواتساب</span>
                </a>
                <a 
                  href={`tel:${DISPLAY_PHONE}`} 
                  className="group inline-flex items-center justify-center gap-3 bg-white text-brand-secondary border border-gray-200 px-8 py-4 rounded-full font-bold text-lg shadow-sm hover:border-brand-primary hover:text-brand-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span dir="ltr" className="tracking-wider">{DISPLAY_PHONE}</span>
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 opacity-70">
                 <div className="flex items-center gap-2 font-medium text-sm"><CheckCircle2 className="w-5 h-5 text-brand-primary"/> تأسيس مجاني</div>
                 <div className="flex items-center gap-2 font-medium text-sm"><CheckCircle2 className="w-5 h-5 text-brand-primary"/> الدعم 24/7</div>
                 <div className="flex items-center gap-2 font-medium text-sm"><CheckCircle2 className="w-5 h-5 text-brand-primary"/> تغطية شاملة</div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="lg:w-1/2 w-full mt-12 lg:mt-0 relative group"
            >
               <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-light/30 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                 <div className="rounded-[1.5rem] overflow-hidden">
                   <Slideshow />
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase">لماذا تختارنا؟</h2>
              <h3 className="text-4xl font-black text-brand-secondary">خدمات مصممة لراحتك</h3>
              <p className="text-gray-600 text-lg">نضمن لك تجربة اتصال مستقرة وسرعات فائقة تلبي كافة احتياجات العائلة الترفيهية والعملية.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-brand-gray/50 rounded-2xl p-10 md:p-12 border border-gray-100 hover:border-brand-primary/30 transition-all duration-300 group hover:shadow-xl hover:bg-white"
              >
                <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-brand-primary/20">
                   <Zap className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-brand-secondary group-hover:text-brand-primary transition-colors">
                  إنترنت 5G منزلي
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  احصل على راوتر الجيل الخامس 5G لسرعات إنترنت غير مسبوقة. تغطية ممتازة لجميع أرجاء المنزل ومناسبة للألعاب والبث بدقة 4K بدون تقطيع نهائياً، مع تركيب فوري بنقرة زر.
                </p>
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="bg-brand-gray/50 rounded-2xl p-10 md:p-12 border border-gray-100 hover:border-brand-primary/30 transition-all duration-300 group hover:shadow-xl hover:bg-white"
              >
                 <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-brand-primary/20">
                   <ShieldCheck className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
                 </div>
                 <h4 className="text-3xl font-bold mb-4 text-brand-secondary group-hover:text-brand-primary transition-colors">
                   ألياف بصرية (فايبر)
                 </h4>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   استقرار تام وسرعات هائلة ونسبة تأخير (Ping) شبه معدومة. الخيار الأمثل للمنازل الذكية، ومحبي الألعاب الإلكترونية التنافسية والعائلات ذات الاستهلاك العالي.
                 </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white text-brand-secondary relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
          
          <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-20 space-y-4"
            >
              <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase">الباقات المتاحة</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-secondary">اختر السرعة التي تناسبك</h3>
              <p className="text-gray-600 text-lg">باقات صُممت لتلبي احتياجات التصفح، الألعاب، والمشاهدة بأعلى الجودات.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, idx) => (
                <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: 0.1 * idx }}
                     key={pkg.id} 
                     className={`flex flex-col bg-white rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 border relative z-10 shadow-lg
                     ${pkg.isPopular ? 'border-brand-primary shadow-[0_20px_40px_-10px_rgba(149,193,31,0.2)]' : 'border-gray-200'}`}>
                  
                  {pkg.isPopular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-secondary text-center shadow-lg px-6 py-1.5 rounded-full font-bold text-sm z-20">
                      الأكثر طلباً
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="font-bold text-2xl text-brand-secondary mb-3">{pkg.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed min-h-[40px]">{pkg.subtitle}</p>
                  </div>
                  
                  <div className="mb-8 pb-8 border-b border-gray-100 flex items-center gap-2">
                    <span className="font-black text-5xl md:text-6xl text-brand-secondary tracking-tight flex items-end gap-2">
                      {pkg.price}
                      <span className="text-brand-secondary mb-1">
                        <RiyalIcon width={28} height={28} className="fill-current" />
                      </span>
                    </span>
                    <span className="text-lg text-gray-500 font-medium self-end mb-1">/ {pkg.period}</span>
                  </div>
                  
                  <div className="flex-grow space-y-6 mb-10">
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-wider">مزايا الباقة</p>
                      <ul className="space-y-4">
                        {pkg.highlights.map((hlt, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" /> 
                            <span className="text-brand-secondary font-medium leading-snug">{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">خصائص إضافية</p>
                      <ul className="space-y-2">
                        {pkg.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                             <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a href={`https://wa.me/${WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer" 
                     className={`mt-auto text-center py-4 px-8 rounded-2xl font-bold transition-all duration-300 
                     ${pkg.isPopular ? 'bg-brand-primary text-brand-secondary hover:bg-brand-primary/90 shadow-[0_8px_20px_-6px_rgba(149,193,31,0.5)]' : 'bg-gray-100 text-brand-secondary hover:bg-gray-200'}`}>
                    أطلب وتأسس الآن
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <ComparisonTable />
          </div>
        </section>

        {/* Coverage Map Section */}
        <CoverageMap />

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5 }}
               className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 max-w-7xl mx-auto"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-brand-secondary mb-4">معرض التأسيس والتركيب</h2>
                <p className="text-gray-600 text-lg">جانب من أعمال المهندسين والفنيين في إيصال شبكات فايبر وتأسيس الراوترات لعملائنا بكل احترافية.</p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/zain_fiber_rdqmd6.jpg", alt: "تركيب بوكسات ألياف بصرية لشركة زين فايبر" },
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461698/WhatsApp_Image_2026-04-28_at_2.57.08_PM_z4ytos.jpg", alt: "تأسيس وإنشاء شبكات الألياف البصرية وزين فايبر" },
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_2_ztdosg.jpg", alt: "تمديد كابلات وتجهيز بوكسات الألياف البصرية زين" },
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_1_luo5ux.jpg", alt: "مندوب وموظف تركيب الألياف البصرية فايبر من زين" }
              ].map((img, idx) => (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.5, delay: 0.1 * idx }}
                   key={idx} 
                   className="relative h-[300px] w-full rounded-2xl overflow-hidden group"
                >
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-brand-secondary font-bold tracking-wide">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5 }}
               className="text-center md:text-right mb-16"
            >
              <h2 className="text-4xl font-black text-brand-secondary mb-4">المدونة والمقالات</h2>
              <p className="text-gray-600 text-lg">أحدث التفاصيل حول عروض ومميزات شبكات زين المتقدمة.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((post, idx) => (
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.5, delay: 0.1 * idx }}
                   key={post.id}
                >
                  <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image 
                        src={post.imageUrl}
                        alt={post.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-secondary font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                        مقال حصري
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-brand-secondary mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.metaDescription || 'تعرف على أحدث عروض وباقات الإنترنت المنزلي من شركة زين، شاملة تفاصيل التأسيس المجاني والراوتر.'}
                      </p>
                      <div className="flex items-center text-brand-primary font-bold text-sm mt-auto group-hover:translate-x-[-4px] transition-transform">
                        اقرأ المزيد
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-brand-gray border-t border-gray-800">
          <FAQSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
