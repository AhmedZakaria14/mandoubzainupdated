'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "كيف يمكنني طلب تأسيس إنترنت 5G أو ألياف بصرية من زين؟",
    answer: "يمكنك بسهولة طلب التأسيس والتركيب عبر التواصل المباشر مع موظف مبيعات زين المعتمد على الرقم 0537394981 (اتصال أو واتساب). سيقوم الموظف باختيار الباقة الأنسب ورفع الطلب في النظام فوراً لضمان سرعة التركيب."
  },
  {
    question: "هل التركيب والتأسيس مجاني؟",
    answer: "نعم، التأسيس وتركيب المودم مجاني تماماً لجميع باقات المفوتر الخاصة بالإنترنت المنزلي (5G والألياف البصرية)."
  },
  {
    question: "ما هي سرعة باقات زين 5G ومقارنتها بالألياف البصرية؟",
    answer: "نقدم سرعات فائقة تصل إلى 1000 ميجابت/ثانية (1 جيجابت) في باقات الألياف البصرية مع استقرار تام. أما باقات الـ 5G فتوفر سرعات عالية غير محدودة تعتمد على جودة التغطية في موقعك، وهي خيار ممتاز وسريع التركيب."
  },
  {
    question: "هل يوجد التزام (عقد) على الباقات المنزلية؟",
    answer: "نعم، معظم الباقات المفوترة لإنترنت المنزل تشمل التزام لمدة 12 أو 18 أو 24 شهراً لضمان تقديم الجهاز (الراوتر) والتأسيس مجاناً. يمكنك الاستفسار عن تفاصيل كل باقة عند التواصل."
  },
  {
    question: "هل يمكنني نقل خدمة الألياف البصرية إذا انتقلت لمنزل آخر؟",
    answer: "بالتأكيد، توفر زين خدمة نقل خط الألياف البصرية لمنزلك الجديد في حال كانت التغطية متوفرة فيه."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase">الاستفسارات الشائعة</h2>
          <h3 className="text-4xl font-black text-brand-secondary">كل ما تحتاج معرفته عن خدمات زين</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-brand-gray rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-brand-primary/30 shadow-md' : 'border-gray-800/50'}`}
            >
              <button
                className="w-full text-right px-6 md:px-8 py-6 flex justify-between items-center focus:outline-none hover:text-brand-primary transition-colors group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={`text-lg transition-colors font-bold ${openIndex === index ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary'}`}>
                   {faq.question}
                </h3>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === index ? 'bg-brand-primary border-brand-primary text-brand-secondary rotate-45' : 'bg-white border-gray-800 text-brand-secondary group-hover:border-brand-primary group-hover:text-brand-primary'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-8 pt-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
