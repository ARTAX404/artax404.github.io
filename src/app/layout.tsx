import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ARTAX404 - Créateur de sites & apps",
    template: "%s | ARTAX404"
  },
  description: "Portfolio d'ARTAX404 - Développeur web, créateur de PWA, monteur vidéo, créateur de jeux et community manager. Découvrez mes projets et compétences.",
  keywords: ["développeur web", "PWA", "React", "Next.js", "montage vidéo", "créateur de jeux", "community manager"],
  authors: [{ name: "ARTAX404" }],
  creator: "ARTAX404",
  publisher: "ARTAX404",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://artax404.fr.nf'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://artax404.fr.nf',
    title: 'ARTAX404 - Créateur de sites & apps',
    description: 'Portfolio d\'ARTAX404 - Développeur web, créateur de PWA, monteur vidéo, créateur de jeux et community manager',
    siteName: 'ARTAX404',
    images: [
      {
        url: '/Logo_ARTAX.png',
        width: 1200,
        height: 630,
        alt: 'ARTAX404 - Créateur de sites & apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARTAX404 - Créateur de sites & apps',
    description: 'Portfolio d\'ARTAX404 - Développeur web, créateur de PWA, monteur vidéo, créateur de jeux et community manager',
    images: ['/Logo_ARTAX.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/Logo_ARTAX.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ARTAX404" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
