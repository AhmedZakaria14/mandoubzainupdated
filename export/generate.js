const fs = require('fs');
const path = require('path');

const OPERATOR = "زين";
const PHONE = "0537394981";
const BRAND = "زين";
const SITE_NAME = "الدليل السعودي";
const DOMAIN = "zain-fiber-riyadh.com";
const PRICE_500 = "399 ريال"; // 500Mb package
const PRICE_300 = "289 ريال"; // 300Mb package
const PRICE_1000 = "999 ريال"; // 1000Mb package
const PRICE_200 = "239 ريال"; // 100Mb package equivalent
const DATE_IN_ARABIC = "28 أبريل 2026";

function replaceTags(text, data) {
  let res = text;
  res = res.replace(/\[OPERATOR\]/g, OPERATOR);
  res = res.replace(/\[PHONE\]/g, PHONE);
  res = res.replace(/\[MY_PHONE\]/g, PHONE);
  res = res.replace(/\[BRAND\]/g, BRAND);
  if(data && data.city) res = res.replace(/\[CITY\]/g, data.city);
  if(data && data.hood) res = res.replace(/\[NEIGHBORHOOD\]/g, data.hood);
  res = res.replace(/\[MY_PRICE_500\]/g, PRICE_500);
  res = res.replace(/\[MY_PRICE_300\]/g, PRICE_300);
  res = res.replace(/\[MY_PRICE_1000\]/g, PRICE_1000);
  res = res.replace(/\[MY_PRICE_200\]/g, PRICE_200);
  return res;
}

const articles = [
  { id: 1, title: "موظف 5G زين الرياض", template: "A", city: "الرياض", hood: "الرياض" },
  { id: 2, title: "خدمات موظف 5G فى الربيع", template: "A", city: "الرياض", hood: "الربيع" },
  { id: 3, title: "عروض ألياف بصرية فى الصحافة", template: "B", hood: "الصحافة" },
  { id: 4, title: "أسعار 5G زين 2026", template: "C" },
  { id: 5, title: "موظف تأسيس وتركيب 5G زين الرياض", template: "A", city: "الرياض", hood: "الرياض" },
  { id: 6, title: "موظف ألياف زين النرجس", template: "A", city: "الرياض", hood: "النرجس" },
  { id: 7, title: "موظف ألياف زين الياسمين", template: "A", city: "الرياض", hood: "الياسمين" },
  { id: 8, title: "موظف ألياف زين الملقا", template: "A", city: "الرياض", hood: "الملقا" },
  { id: 9, title: "موظف ألياف زين السعادة", template: "A", city: "الرياض", hood: "السعادة" },
  { id: 10, title: "موظف ألياف زين القيروان", template: "A", city: "الرياض", hood: "القيروان" },
  { id: 11, title: "موظف ألياف زين الحزم", template: "A", city: "الرياض", hood: "الحزم" },
  { id: 12, title: "موظف ألياف زين النهضة", template: "A", city: "الرياض", hood: "النهضة" },
  { id: 13, title: "عروض ألياف بصرية فى النسيم الغربي", template: "B", hood: "النسيم الغربي" },
  { id: 14, title: "عروض ألياف بصرية فى ظهرات لبن", template: "B", hood: "ظهرات لبن" },
  { id: 15, title: "عروض ألياف بصرية فى طويق", template: "B", hood: "طويق" },
  { id: 16, title: "عروض ألياف بصرية فى العريجاء", template: "B", hood: "العريجاء" },
  { id: 17, title: "عروض ألياف بصرية فى ظهرات نمار", template: "B", hood: "ظهرات نمار" },
  { id: 18, title: "عروض ألياف بصرية فى البديعة", template: "B", hood: "البديعة" },
  { id: 21, title: "عروض ألياف بصرية فى عنيزة", template: "B", hood: "عنيزة" },
  { id: 23, title: "عروض ألياف بصرية فى الزلفي", template: "B", hood: "الزلفي" },
  { id: 26, title: "عروض ألياف بصرية فى النسيم الشرقي", template: "B", hood: "النسيم الشرقي" }
];

const templateA = `<h1>موظف 5G [OPERATOR] [NEIGHBORHOOD]</h1>

<p>[CITY] تغطية 5G [BRAND] [PHONE] ممثلو شركة الدليل السعودي [OPERATOR] تعتبر الشركة الرائدة في مجال الاتصالات على مستوى منطقة الخليج والمملكة العربية السعودية وصاحبة العروض والسرعات الممتازة في 5G بـ[CITY] وغيرها من مدن المملكة.</p>

<p>بالإضافة إلى كل المزايا التي ذكرناها عن تصنيعنا لشبكات 5G من خلال موظف [OPERATOR] Fiber Optics، هناك ميزة أخرى تتمتع بها هذه الشبكة وهي العرض من خلال شركة [OPERATOR] السعودية لباقات الإنترنت المتنوعة التي تناسب جميع العملاء سواء الأفراد أو رجال الأعمال أو الشركات والمؤسسات المختلفة.</p>

<p>يمكنك التعرف على العروض الدائمة المتوفرة من خلال الشركة من خلال تحميل تطبيق [OPERATOR] السعودية على جهازك المحمول والذي يمكن تحميله على جهازك الأندرويد أو جهاز الأيفون والاستفادة من الميزات العديدة التي يمكننا الحصول عليها من هذا التطبيق مثل معرفة العروض المتنوعة للشركة بالإضافة إلى معرفة الاستهلاك الشهري ومدة تجديد الاشتراك وغيرها من البيانات الهامة.</p>

<h2>كيفية طلب 5G</h2>
<p>يتم طلب خدمة 5G المقدمة من شركة [OPERATOR] للألياف البصرية من خلال موظفي الشركة. هناك عدة طرق قانونية للتواصل مع ممثلي [OPERATOR] فايبر أوبتيك بـ[CITY]، مثل التواصل المباشر على الموقع الإلكتروني الخاص بالشركة أو من خلال الإعلانات المنشورة في الشوارع والأسوار، أو من خلال المقابلات المباشرة مع الموظف شخصيًا في المولات والمحلات التجارية. نحرص على التواصل شخصياً وتقديم كتيبات بالعروض والأسعار والسرعات الجديدة والمحدثة.</p>

<p>التواصل مع ممثلي شركة [OPERATOR] [CITY] للألياف البصرية يتم من خلال التواصل المباشر أي لقاءات شخصية وجهاً لوجه مع الممثلين في الشوارع أو في المحلات التجارية والمولات.</p>

<h2>ما هى اسعار الالياف البصرية [OPERATOR]؟</h2>
<p>اسأل ممثل الألياف الذي يقدم خدمة [OPERATOR] فايبر الأسئلة الشائعة حول أسعار [OPERATOR] فايبر. هنا، يقوم ممثل [OPERATOR] فايبر بعرض باقات الأسعار التي تقدمها [OPERATOR]، سواء كانت شهرية، ربع سنوية، نصف سنوية أو سنوية، ليختار منها العميل. اختر الباقة أو السعر الأنسب من بين جميع العروض المقدمة والمتاحة.</p>

<h2>رقم موظف 5G بـ[CITY]</h2>
<p>يمكنك الاتصال مباشرة على هذا الرقم <span dir="ltr">[PHONE]</span> لتقديم الخدمات، لدينا موظفين خدمة مؤهلين يتميزون باللطف والصدق والأدب، ومن خلال هذه الأرقام يمكنك التواصل معهم على مدار الساعة للحصول على الخدمات.</p>

<a href="tel:[PHONE]" class="call-btn">
    <div style="background: #25D366; color: white; padding: 15px 30px; border-radius: 50px; font-size: 1.5rem; font-weight: bold; text-align: center; display: inline-block;">
    اتصل بنا الآن [PHONE]
    </div>
</a>

<h2>[CITY] تغطية 5G [OPERATOR] [PHONE]</h2>
<p>ولذلك قدمنا لكم أرقام هواتف ممثلي [OPERATOR] للألياف البصرية في [CITY] لتتمكنوا من التواصل معهم بسهولة والحصول على أفضل الخدمات وأفضل الأسعار للألياف البصرية في [CITY].</p>

<h2>كلمات بحثية</h2>
<p>فايبر انترنت [OPERATOR]، طلب توصيل الياف [OPERATOR]، تقديم طلب 5G [OPERATOR]، طلب تغطية 5G، طريقة طلب فايبر [OPERATOR]، الياف [OPERATOR] تغطية، كيف اطلب الياف، طريقة تركيب 5G [OPERATOR]، موظف ألياف بصرية [OPERATOR]، موظف [OPERATOR] [CITY]، 5G [OPERATOR]، الياف [OPERATOR]، تركيب الياف، فايبر [OPERATOR]، طلب تأسيس 5G [OPERATOR]، fiber [OPERATOR]، موظف الياف [OPERATOR]، الموظف ألياف بصرية [OPERATOR]، موظف 5G</p>`;

const templateB = `<h1>عروض ألياف بصرية فى [NEIGHBORHOOD]</h1>\n\n<p>إن عروض 5G التي تقدمها [OPERATOR] لعملائها بـ[NEIGHBORHOOD] كثيرة جدا، فلك أن تختار ما يناسب استخداماتك اليومية والشهرية، فهناك عروض تناسب الأشخاص العاديين والعروض الخاصة بالبزنس وعروض الشركات الكبيرة ذات الاستخدامات المحدودة واللامحدودة. والعروض جميعها تتميز بالمرونة والتنوع لتناسب جميع الفئات العمرية والمجتمعية.</p>\n\n<h2>طريقة الاشتراك في الالياف البصرية [OPERATOR] بـ[NEIGHBORHOOD]</h2>\n<p>كل ما يجول بخاطرك عزيزي العميل حول كيفية الاشتراك في خدمة 5G بـ[NEIGHBORHOOD] له إجابة. الاتصال بأحد موظفينا حيث يوفر لكم موقعنا أرقام هواتف موظفي كل الخدمات بكافة أرجاء المملكة، والاستفسار ومعرفة نوع الخدمة والباقة التي تريدها، سواء محدودة أو لامحدودة. بعدها سيتوجه الموظف لإتمام إجراءات التعاقد على الخدمة المختارة ودفع الرسوم المستحقة وتوصيل الخدمة لكم في سهولة ويسر.</p>\n\n<a href="tel:[PHONE]" class="call-btn">\n    <div style="background: #25D366; color: white; padding: 15px 30px; border-radius: 50px; font-size: 1.5rem; font-weight: bold; text-align: center; display: inline-block;">\n    اتصل بنا الآن [PHONE]\n    </div>\n</a>\n\n<h2>طريقة تركيب الالياف البصرية [OPERATOR]</h2>\n<p>إن شركة [OPERATOR] لخدمة 5G بـ[NEIGHBORHOOD] توفر لعملائها أجود أنواع الكابلات المعدة خصيصاً لخدمات 5G التي تقاوم عوامل التعرية والعوامل المناخية من حرارة مرتفعة ورطوبة عالية من حيث القوة والمتانة، حيث يقوم الموظف بتوصيل الأسلاك ووضعها في أماكنها الصحيحة لضمان عدم انقطاع الخدمة عن عملائها طوال الوقت وبجودة منقطعة النظير.</p>\n\n<h2>أسعار 5G [OPERATOR] 2026</h2>\n<p>توفر شركة [OPERATOR] أرخص الأسعار للألياف البصرية بـ[NEIGHBORHOOD] لجذب أكبر عدد من المشتركين والعملاء، حيث تسعى [OPERATOR] لتكوين قاعدة عريضة من العملاء وجعلهم يثقون في خدماتها. لذلك تقدم أجود أنواع الخدمات بأرخص الأسعار ليس في [NEIGHBORHOOD] فحسب بل في كل أنحاء المملكة العربية السعودية.</p>\n\n<h2>ما هو سعر اشتراك الالياف البصرية [OPERATOR] فى [NEIGHBORHOOD]؟</h2>\n<p>بمجرد اتصالك بنا على رقم <span dir="ltr">[PHONE]</span> بـ[NEIGHBORHOOD] ستصبح بعدها على دراية بكافة العروض والأسعار المختلفة للألياف البصرية التي تلاءم الجميع.</p>\n\n<h2>الالياف البصرية [OPERATOR] التغطية [NEIGHBORHOOD]</h2>\n<p>إن تغطية [OPERATOR] للألياف البصرية بـ[NEIGHBORHOOD] لهي الأقوى والأسرع، حيث تسعى لتحسين خدماتها دوماً من خلال أحدث الأجهزة والكوادر البشرية المدربة بعناية وعلى أحدث النظم الحديثة والمسايرة للتطورات العالمية، لجعلك عزيزي العميل في الصدارة من حيث قوة الشبكات وسرعة الاستجابة وتوصيل الخدمة على الفور.</p>\n\n<h2>كلمات بحثية</h2>\n<p>عروض الياف بصرية [NEIGHBORHOOD]، فايبر [OPERATOR] [NEIGHBORHOOD]، تركيب الياف [NEIGHBORHOOD]، انترنت منزلي [NEIGHBORHOOD]، 5G [OPERATOR] [NEIGHBORHOOD]، اشتراك الياف بصرية [NEIGHBORHOOD]، سعر فايبر [OPERATOR] [NEIGHBORHOOD]، موظف 5G [NEIGHBORHOOD]، تغطية [OPERATOR] [NEIGHBORHOOD]، طريقة الاشتراك في فايبر [OPERATOR]</p>`;

const templateC = `<h1>أسعار 5G [OPERATOR] 2026</h1>\n\n<p>اسعار الالياف البصرية [OPERATOR] — كيفية الاشتراك في فايبر [OPERATOR]</p>\n\n<p>للحصول على إنترنت ثابت بدون تقطيع وذو سرعة فائقة تعادل سرعة الضوء، نتيجة نقل البيانات عبر ألياف مصنوعة من الزجاج عالي النقاوة على عكس الكابلات التقليدية المصنوعة من النحاس. ولأن شركة [OPERATOR] حريصة على تقديم الأفضل لعملائها فقد عملت على التوسع في تقديم هذه الخدمة حتى أصبحت تغطي معظم مناطق ومدن المملكة العربية السعودية.</p>\n\n<h2>اسعار الالياف البصرية [OPERATOR]</h2>\n<p>تختلف اسعار الالياف البصرية [OPERATOR] بحسب حجم الباقة ونظامها، حيث يمكن تقسيمها إلى:</p>\n<ul>\n  <li>باقات فايبر إنترنت [OPERATOR] المفوترة</li>\n  <li>باقات فايبر إنترنت [OPERATOR] المسبقة الدفع</li>\n</ul>\n\n<h2>كيفية الاشتراك في فايبر [OPERATOR]</h2>\n<p>يمكن الاشتراك في فايبر [OPERATOR] من خلال الاتصال بالرقم <span dir="ltr">[PHONE]</span>، أو من خلال اتباع الخطوات التالية:</p>\n<ul>\n  <li>اذهب إلى موقع شركة [OPERATOR]</li>\n  <li>انقر على تبويب فايبر</li>\n  <li>حدد الباقة التي ترغب بالاشتراك بها</li>\n  <li>انقر على الاشتراك</li>\n  <li>أدخل رقم الهوية الوطنية أو الإقامة</li>\n  <li>أدخل تاريخ الميلاد</li>\n  <li>أدخل رمز التحقق المرئي</li>\n  <li>أدخل المعلومات الخاصة باستمارة التقديم</li>\n  <li>انقر على تقديم الطلب</li>\n</ul>\n<p>بعد ذلك سيتم التواصل مع صاحب الطلب من قبل خدمة الدعم الفني للشركة لتأكيد الاشتراك.</p>\n\n<a href="tel:[PHONE]" class="call-btn">\n    <div style="background: #25D366; color: white; padding: 15px 30px; border-radius: 50px; font-size: 1.5rem; font-weight: bold; text-align: center; display: inline-block;">\n    اتصل بنا الآن [PHONE]\n    </div>\n</a>\n\n<h3>باقة الالياف البصرية فايبر 300 (المنزلية بلس)</h3>\n<p>السعر الشهري للاشتراك الجديد: [MY_PRICE_300] شامل الضريبة. تتيح هذه الباقة الحصول على إنترنت لا محدود طوال الشهر بسرعة تحميل 300 ميجابت. يحصل المشتركون الجدد على مودم مجاني، بالإضافة لعدد 2 مقوي شبكة، واشتراك بتطبيقين مجاناً. لا توجد دفعة مقدمة للسعوديين.</p>\n\n<h3>باقة الالياف البصرية فايبر 500 (بريميوم)</h3>\n<p>السعر الشهري للاشتراك الجديد: [MY_PRICE_500] شامل الضريبة. إنترنت لا محدود طوال الشهر بسرعة تحميل 500 ميجابت. يحصل المشتركون الجدد على مودم مجاني، 2 مقوي شبكة والتطبيقات مجانية. لا توجد دفعة مقدمة للسعوديين.</p>\n\n<h3>باقة الالياف البصرية فايبر 1000 (المنزلية بلاك)</h3>\n<p>أعلى السرعات بسعر شهري: [MY_PRICE_1000] شامل الضريبة. باقة الـ 1 جيجا للإنترنت اللامحدود شاملة المودم، والتطبيقات المجانية، و2 مقوي شبكة. للمواطن السعودي بدون دفعة مقدمة.</p>\n\n<h2>كلمات بحثية</h2>\n<p>أسعار فايبر [OPERATOR] 2026، اسعار الالياف البصرية [OPERATOR]، باقات فايبر [OPERATOR]، سعر فايبر 200 [OPERATOR]، سعر فايبر 500 [OPERATOR]، كيفية الاشتراك في فايبر [OPERATOR]، فايبر انترنت [OPERATOR]، باقات الياف بصرية 2026، أسعار انترنت منزلي الرياض 2026</p>`;

const outputDir = './export/articles';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

articles.forEach(article => {
  let contentTemplate = templateA;
  if(article.template === 'B') contentTemplate = templateB;
  if(article.template === 'C') contentTemplate = templateC;

  const bodyContent = replaceTags(contentTemplate, article);
  const articleTitle = replaceTags(article.title, article);
  
  let metaDesc = `تفاصيل وعروض ${articleTitle} لتأسيس إنترنت منزلي 5G وألياف بصرية. بادر بالطلب الآن.`;
  let keywordsStr = "";
  if (article.template === 'A') {
    keywordsStr = `فايبر انترنت [OPERATOR]، طلب توصيل الياف [OPERATOR]، تقديم طلب 5G [OPERATOR]، طلب تغطية 5G، طريقة طلب فايبر [OPERATOR]، الياف [OPERATOR] تغطية، كيف اطلب الياف، طريقة تركيب 5G [OPERATOR]، موظف ألياف بصرية [OPERATOR]، موظف [OPERATOR] [CITY]، 5G [OPERATOR]، الياف [OPERATOR]، تركيب الياف، فايبر [OPERATOR]، طلب تأسيس 5G [OPERATOR]، fiber [OPERATOR]، موظف الياف [OPERATOR]، الموظف ألياف بصرية [OPERATOR]، موظف 5G`;
  } else if (article.template === 'B') {
    keywordsStr = `عروض الياف بصرية [NEIGHBORHOOD]، فايبر [OPERATOR] [NEIGHBORHOOD]، تركيب الياف [NEIGHBORHOOD]، انترنت منزلي [NEIGHBORHOOD]، 5G [OPERATOR] [NEIGHBORHOOD]، اشتراك الياف بصرية [NEIGHBORHOOD]، سعر فايبر [OPERATOR] [NEIGHBORHOOD]، موظف 5G [NEIGHBORHOOD]، تغطية [OPERATOR] [NEIGHBORHOOD]، طريقة الاشتراك في فايبر [OPERATOR]`;
  } else if (article.template === 'C') {
    keywordsStr = `أسعار فايبر [OPERATOR] 2026، اسعار الالياف البصرية [OPERATOR]، باقات فايبر [OPERATOR]، سعر فايبر 200 [OPERATOR]، سعر فايبر 500 [OPERATOR]، كيفية الاشتراك في فايبر [OPERATOR]، فايبر انترنت [OPERATOR]، باقات الياف بصرية 2026، أسعار انترنت منزلي الرياض 2026`;
  }
  
  keywordsStr = replaceTags(keywordsStr, article);
  keywordsStr = keywordsStr.split('،').map(s => s.trim()).join(", ");
  
  const relatedLinksHTML = articles.map(a => {
    let t = replaceTags(a.title, a);
    return `<li><a href="/${a.id}">${t}</a></li>`;
  }).join("\n");

  const phpFile = `<?php
$article_id = ${article.id};
$article_title = "${articleTitle}";
$meta_description = "${metaDesc}";
$canonical = "https://${DOMAIN}/${article.id}";

// Basic SEO Headers that would be inside header.php
$page_title = "${articleTitle} | ${SITE_NAME}";
$page_description = $meta_description;
$page_keywords = "${keywordsStr}";
$page_url = $canonical;
$page_image = "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279248/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B4%D8%B1%D9%83%D8%A9_%D8%B2%D9%8A%D9%86_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_nppqfj.png";
$is_blog_post = true;

// Mock include
// include('header.php');
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title><?php echo $page_title; ?></title>
  <meta name="description" content="<?php echo $page_description; ?>">
  <meta name="keywords" content="<?php echo $page_keywords; ?>">
  <link rel="canonical" href="<?php echo $canonical; ?>">
  <meta property="og:title" content="<?php echo $article_title; ?>">
  <meta property="og:description" content="<?php echo $page_description; ?>">
  <meta property="og:image" content="<?php echo $page_image; ?>">
  <meta property="og:url" content="<?php echo $canonical; ?>">
  <meta property="og:type" content="article">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "<?php echo $article_title; ?>",
    "description": "<?php echo $page_description; ?>",
    "author": {"@type": "Person", "name": "${SITE_NAME}"},
    "publisher": {
      "@type": "Organization",
      "name": "${SITE_NAME}",
      "logo": {"@type": "ImageObject", "url": "https://${DOMAIN}/assets/img/logo.png"}
    },
    "mainEntityOfPage": {"@type": "WebPage", "@id": "<?php echo $canonical; ?>"},
    "keywords": "${keywordsStr}"
  }
  </script>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #333; background: #fafafa; margin: 0; padding: 0; }
    .container { max-width: 800px; margin: 2rem auto; padding: 2rem; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    img { max-width: 100%; height: auto; border-radius: 8px; }
    .hero-img { position: relative; display: block; overflow: hidden; background: #f3f4f6; }
    .hero-img img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
    .number-badge {
      position: absolute; bottom: 20px; left: 20px;
      font-size: 3rem; font-weight: 900; color: white;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
    }
    h1, h2, h3 { color: #111; }
    h1 { font-size: 2.2rem; margin-top: 1.5rem; }
    h3 { font-size: 1.4rem; border-right: 4px solid #95c11f; padding-right: 10px; margin-top: 2rem; }
    a { color: #95c11f; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .call-btn { display: inline-block; margin: 2rem 0; width: 100%; text-align: center; transition: transform 0.2s; }
    .call-btn:hover { transform: scale(1.05); }
    .related-articles { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #eee; }
    .related-articles ul { list-style: none; padding: 0; }
    .related-articles li { margin-bottom: 0.8rem; }
    .related-articles li::before { content: "« "; color: #95c11f; font-weight: bold; }
  </style>
</head>
<body>
  <!-- Mock Header -->
  <header style="background:#111; color:#fff; padding:1rem; text-align:center;">
    <h2>${SITE_NAME}</h2>
  </header>

  <div class="container">
    <article>
      <div class="hero-img">
        <img src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279248/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B4%D8%B1%D9%83%D8%A9_%D8%B2%D9%8A%D9%86_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_nppqfj.png" alt="مندوب مبيعات زين الرياض لتركيب إنترنت 5G وألياف بصرية - <?php echo $article_title; ?>" loading="lazy" width="800" height="450">
        <div class="number-badge">${article.id}</div>
      </div>
      
      <time style="color: #666; font-size: 0.9rem; display: block; margin-top: 1rem;">${DATE_IN_ARABIC}</time>

      ${bodyContent}

      <div class="related-articles">
        <h2>قد يهمك أيضاً:</h2>
        <ul>
${relatedLinksHTML}
        </ul>
      </div>

    </article>
  </div>

  <!-- Mock Footer -->
  <footer style="background:#111; color:#fff; padding:2rem; text-align:center; margin-top: 2rem;">
    <p>جميع الحقوق محفوظة &copy; 2026 ${SITE_NAME}</p>
  </footer>
</body>
</html>
`;

  const filePath = `${outputDir}/${article.id}.php`;
  console.log('Writing to:', filePath);
  fs.writeFileSync(filePath, phpFile, 'utf8');
});

console.log('Successfully generated 21 PHP articles in ./export/articles directory.');

// Generate robots.txt in the export directory
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://${DOMAIN}/sitemap.xml
`;

fs.writeFileSync(`${outputDir}/robots.txt`, robotsContent, 'utf8');
console.log('Successfully generated robots.txt in ./export/articles directory.');
