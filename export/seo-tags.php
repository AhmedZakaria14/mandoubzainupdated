<?php 
// seo-tags.php
// Expected variables:
// $page_title
// $page_description
// $page_url
// $page_image (Optional)
// $is_blog_post (Boolean) - true if rendering a blog post

$site_name = "مبيعات زين 5G وألياف بصرية";
$page_title = isset($page_title) ? htmlspecialchars($page_title) . " | " . $site_name : $site_name;
$page_description = isset($page_description) ? htmlspecialchars($page_description) : "تأسيس إنترنت منزلي فائق السرعة عبر مندوب مبيعات زين.";
$page_keywords = isset($meta_keywords) ? htmlspecialchars($meta_keywords) : "إنترنت زين, 5G زين, ألياف بصرية, تأسيس إنترنت, مندوب مبيعات, زين السعودية, الرياض";
$page_url = isset($page_url) ? htmlspecialchars($page_url) : "https://zain-fiber-riyadh.com/";
$page_image = isset($page_image) ? htmlspecialchars($page_image) : "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png";
?>
<!-- SEO Meta Tags -->
<title><?php echo $page_title; ?></title>
<meta name="description" content="<?php echo $page_description; ?>">
<meta name="keywords" content="<?php echo $page_keywords; ?>">
<link rel="canonical" href="<?php echo $page_url; ?>">

<!-- hreflang for Arabic -->
<link rel="alternate" hreflang="ar" href="<?php echo $page_url; ?>" />

<!-- Open Graph / Social Sharing -->
<meta property="og:site_name" content="<?php echo $site_name; ?>">
<meta property="og:title" content="<?php echo $page_title; ?>">
<meta property="og:description" content="<?php echo $page_description; ?>">
<meta property="og:type" content="<?php echo isset($is_blog_post) && $is_blog_post ? 'article' : 'website'; ?>">
<meta property="og:url" content="<?php echo $page_url; ?>">
<meta property="og:image" content="<?php echo $page_image; ?>">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo $page_title; ?>">
<meta name="twitter:description" content="<?php echo $page_description; ?>">
<meta name="twitter:image" content="<?php echo $page_image; ?>">

<?php if(isset($is_blog_post) && $is_blog_post): ?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "<?php echo $post['title'] ?? $page_title; ?>",
  "image": "<?php echo $page_image; ?>",
  "description": "<?php echo $page_description; ?>",
  "author": {
    "@type": "Person",
    "name": "موظف مبيعات زين"
  },
  "publisher": {
    "@type": "Organization",
    "name": "<?php echo $site_name; ?>",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png"
    }
  },
  "datePublished": "<?php echo date('Y-m-d'); ?>",
  "dateModified": "<?php echo date('Y-m-d'); ?>",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "<?php echo $page_url; ?>"
  }
}
</script>
<?php else: ?>
<!-- LocalBusiness Schema for Homepage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "<?php echo $site_name; ?>",
  "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png",
  "telephone": "+966537394981",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Riyadh",
    "addressCountry": "SA"
  },
  "areaServed": "Saudi Arabia",
  "url": "https://zain-fiber-riyadh.com/"
}
</script>
<?php endif; ?>
