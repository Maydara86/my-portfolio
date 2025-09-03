import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import dynamic from 'next/dynamic';

const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohamed Cherif - Full-Stack Web Developer',
  description: 'Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies. Specialized in React, Next.js, Node.js, and more.',
  keywords: 'web developer, full-stack developer, React, Next.js, Node.js, JavaScript, TypeScript, MongoDB, PostgreSQL',
  authors: [{ name: 'Mohamed Cherif' }],
  creator: 'Mohamed Cherif',
  publisher: 'Mohamed Cherif',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamedcherif.dev',
    title: 'Mohamed Cherif - Full-Stack Web Developer',
    description: 'Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies.',
    siteName: 'Mohamed Cherif Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Cherif - Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Cherif - Full-Stack Web Developer',
    description: 'Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies.',
    images: ['/images/og-image.jpg'],
    creator: '@mohamedcherif',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}