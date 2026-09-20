import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

// Canonical production origin for metadata and structured data.
const baseUrl = 'https://www.zain5gsaudi.com';

export const metadata: Metadata = {
  title: {
    default: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    template: '%s | انترنت زين 5G وألياف'
  },
  description: 'اكتشف أفضل عروض الإنترنت المنزلي 5G والألياف البصرية (الفايبر) من زين في الرياض والمدينة المنورة وكافة أنحاء السعودية. تأسيس مجاني، تركيب سريع، وباقات إنترنت لا محدود بأسعار تنافسية. تواصل معنا الآن: 0537394981',
  keywords: ['زين', 'انترنت منزلي', '5G', 'ألياف بصرية', 'فايبر', 'عروض زين', 'تركيب انترنت', 'مندوب زين', 'تأسيس زين', 'ألياف زين', 'راوتر زين', 'السعودية', 'الرياض', 'المدينة', 'المدينة المنورة', 'إنترنت لا محدود'],
  authors: [{ name: 'موظف مبيعات زين' }],
  creator: 'مبيعات زين',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: baseUrl,
    siteName: 'انترنت زين 5G وألياف بصرية',
    title: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    description: 'أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين في الرياض والمدينة المنورة وكافة أنحاء السعودية. تأسيس مجاني وتركيب سريع.',
    images: [
      {
        url: '/images/zain-logo-dark.webp',
        width: 1200,
        height: 630,
        alt: 'عروض انترنت زين 5G والألياف البصرية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    description: 'أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين السعودية. تأسيس سريع.',
    images: ['/images/zain-logo-dark.webp'],
  },
  verification: {
    google: 'zNma03gW7izxEAOPGdli00LFx5_QOTBw-1wQJn69UFE',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8AB825" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-gray text-[#444] font-sans antialiased" suppressHydrationWarning>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B7Q5YN19W9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B7Q5YN19W9');`}
        </Script>
      </body>
    </html>
  );
}
