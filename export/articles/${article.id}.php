<?php
$article_id = ${article.id};
$article_title = "${articleTitle}";
$meta_description = "${metaDesc}";
$canonical = "https://${DOMAIN}/${article.id}";

// Basic SEO Headers that would be inside header.php
$page_title = $article_title . " | ${BRAND}";
$page_description = $meta_description;
$page_keywords = "${keywordsStr}";
$page_url = $canonical;
$page_image = "https://${DOMAIN}/uploads/hero.jpg";
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
    "author": {"@type": "Person", "name": "${BRAND}"},
    "publisher": {
      "@type": "Organization",
      "name": "${BRAND}",
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
    <h2>${BRAND}</h2>
  </header>

  <div class="container">
    <article>
      <div class="hero-img">
        <img src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279049/1_s3knrl.png" alt="تغطية وتأسيس شبكة 5g وألياف بصرية - <?php echo $article_title; ?>" loading="lazy" width="800" height="450">
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
    <p>جميع الحقوق محفوظة &copy; 2026 ${BRAND}</p>
  </footer>
</body>
</html>
