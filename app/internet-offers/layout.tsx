import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عروض الإنترنت المنزلي 5G والفايبر',
  description:
    'قارن باقات الإنترنت المنزلي 5G والألياف البصرية وتواصل للاستفسار عن التغطية والتأسيس في السعودية.',
  alternates: {
    canonical: 'https://www.zain5gsaudi.com/internet-offers',
  },
  openGraph: {
    url: 'https://www.zain5gsaudi.com/internet-offers',
    title: 'عروض الإنترنت المنزلي 5G والفايبر',
    description:
      'قارن باقات الإنترنت المنزلي 5G والألياف البصرية وتواصل للاستفسار عن التغطية والتأسيس في السعودية.',
  },
};

export default function InternetOffersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
