import type { Metadata } from 'next';
import { Manrope, Fira_Code } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import { StructuredData } from '@/components/StructuredData';
import { SkipLink } from '@/components/SkipLink';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dpita.com'),
  title: {
    default: 'dpita.com — Modern Daily Tools, Built for Speed & Trust',
    template: '%s | dpita.com',
  },
  description:
    'dpita.com is the privacy-first daily toolkit delivering sleek, multilingual utilities that launch fast, stay accessible, and never store your data.',
  keywords: [
    'daily tools',
    'privacy-first utilities',
    'multilingual toolkit',
    'dpita',
    'online calculator',
    'unit converter',
    'world clock',
    'digital productivity',
  ],
  openGraph: {
    title: 'dpita.com — Modern Daily Tools, Built for Speed & Trust',
    description:
      'Lightning-fast, multilingual, and privacy-first digital tools designed for every day productivity across the globe.',
    url: 'https://dpita.com',
    siteName: 'dpita.com',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://dpita.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'dpita.com daily toolkit preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dpita',
    creator: '@dpita',
    title: 'dpita.com — Modern Daily Tools, Built for Speed & Trust',
    description:
      'Free daily tools with instant performance, inclusive accessibility, and zero data retention.',
    images: ['https://dpita.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://dpita.com',
    languages: {
      en: 'https://dpita.com',
      es: 'https://dpita.com/es',
      fr: 'https://dpita.com/fr',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${firaCode.variable} bg-slate-950 font-sans text-slate-100 antialiased`}
      >
        <LocaleProvider>
          <SkipLink />
          {children}
          <StructuredData />
        </LocaleProvider>
      </body>
    </html>
  );
}
