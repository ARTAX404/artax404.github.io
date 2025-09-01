import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import JsonLd from "@/src/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://artax404.fr.nf"),
  title: {
    default: "ARTAX404 — créateur de sites & apps / PWA",
    template: "%s — ARTAX404",
  },
  description:
    "Portfolio d'ARTAX404: développeur web, PWA, monteur vidéo, créateur de jeux, community manager.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "ARTAX404 — créateur de sites & apps / PWA",
    description:
      "Portfolio d'ARTAX404: développeur web, PWA, monteur vidéo, créateur de jeux, community manager.",
    url: "https://artax404.fr.nf",
    siteName: "ARTAX404",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ARTAX404",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}