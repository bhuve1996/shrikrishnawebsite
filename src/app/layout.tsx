import type { Metadata } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';
import { Header, Footer, WhatsAppButton } from '@/components/layout';
import { siteConfig } from '@/config/site.config';
import { generateLocalBusinessSchema } from '@/config/seo.config';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Core Cutting Services in Kharar, Mohali`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/Shree_logo.png',
        width: 800,
        height: 600,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/Shree_logo.png'],
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
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/Shree_logo.png', type: 'image/png' },
    ],
    apple: '/Shree_logo.png',
    shortcut: '/Shree_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/Shree_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Shree_logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={siteConfig.themeColor} />
        <meta name="google-site-verification" content="your-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
