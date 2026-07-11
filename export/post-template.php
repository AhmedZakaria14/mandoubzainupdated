<?php
// post-template.php
// Placeholder for fetching data
$post = [
    'id' => 1,
    'title' => 'عنوان المقال التجريبي',
    'imageUrl' => 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279049/1_s3knrl.png',
    'slug' => 'url-slug'
];
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Include the SEO tags here -->
    <?php include 'seo-tags.php'; ?>
    <link rel="stylesheet" href="blog-card.css">
    <!-- Tailwind or custom styles -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .post-header-bg {
            position: relative;
            height: 300px;
            width: 100%;
            background-color: #f3f4f6;
            overflow: hidden;
        }
        @media (min-width: 768px) {
            .post-header-bg { height: 400px; }
        }
        .post-header-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .post-number-badge {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #95c11f;
            color: white;
            font-weight: 700;
            font-size: 2.25rem;
            padding: 1rem 2rem;
            border-bottom-left-radius: 1.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            border-bottom: 4px solid rgba(255, 255, 255, 0.2);
            border-left: 4px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(4px);
            z-index: 10;
        }
        .post-title-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            display: flex;
            align-items: flex-end;
            padding: 1.5rem;
        }
        @media (min-width: 768px) {
            .post-title-overlay { padding: 3rem; }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">
    
    <main class="py-12">
        <div class="container mx-auto px-4 max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <!-- Full-width header image with number overlay -->
            <div class="post-header-bg">
                <img src="<?php echo $post['imageUrl']; ?>" alt="<?php echo $post['title']; ?>" class="post-header-img" loading="lazy">
                
                <div class="post-number-badge">
                    <?php echo $post['id']; ?>
                </div>

                <div class="post-title-overlay">
                    <h1 class="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
                        <?php echo $post['title']; ?>
                    </h1>
                </div>
            </div>

            <div class="p-6 md:p-12">
                <nav class="mb-8 text-gray-500 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-2">
                    <a href="/" class="hover:text-[#95c11f] font-bold transition-colors">الرئيسية</a> <span class="text-gray-300">/</span> <span class="text-black font-semibold"><?php echo $post['title']; ?></span>
                </nav>

                <div class="mb-10 text-lg leading-relaxed text-gray-600 space-y-6">
                    <p class="text-[#444] text-xl font-bold mt-6">
                        أهلاً بك في صفحة <strong class="text-[#242423]"><?php echo $post['title']; ?></strong> المخصصة لعروض الإنترنت المنزلي.
                    </p>

                    <h2 id="benefits" class="text-3xl font-bold text-[#242423] mt-12 mb-6 border-r-[4px] border-[#95c11f] pr-4 bg-gray-50 py-2">
                        مزايا الخدمة المتاحة
                    </h2>
                    <p>
                        نحن نهتم بتقديم أحدث باقات الإنترنت المنزلية في هذه المنطقة بأقصى سرعة وأفضل سعر. 
                        المرجع الرسمي لهذه الباقات هو <a href="https://sa.zain.com/" target="_blank" rel="noopener noreferrer" class="text-[#95c11f] font-bold hover:underline">موقع زين الإلكتروني</a>.
                    </p>

                    <h3 id="service-steps" class="text-2xl font-bold text-[#242423] mt-10 mb-4 border-r-[3px] border-[#c4eb5c] pr-3">
                        خطوات التأسيس
                    </h3>
                    <div class="grid md:grid-cols-2 gap-6 my-6">
                        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 class="font-bold text-black mb-3 text-xl">تأسيس فوري</h4>
                            <p class="text-gray-500">يقوم مندوبنا بالتواصل معك والوصول لعنوانك.</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 class="font-bold text-black mb-3 text-xl">خيارات متعددة</h4>
                            <p class="text-gray-500">باقات متنوعة تناسب الاستخدام الشخصي.</p>
                        </div>
                    </div>

                    <div class="my-10 p-10 bg-gray-100 border border-gray-200 rounded-[20px] text-center shadow-inner">
                        <p class="text-xl mb-4 font-bold text-black">لطلب الخدمة وتحديد موعد التركيب المجاني</p>
                        <a href="tel:0537394981" class="text-3xl font-black text-[#95c11f]" dir="ltr">
                            053 739 4981
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

</body>
</html>
