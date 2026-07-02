// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const genome = localFont({
  src: [
    {
      path: "../public/fonts/Genome-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-genome",
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pace Studio",
  description: "Pace Studio | Mat Pilates",
  keywords: [
    "Pilates",
    "Pilates classes",
    "Pilates booking",
    "Pilates studio",
    "fitness",
    "yoga pilates",
    "core strength",
    "flexibility training",
    "private pilates",
    "group pilates",
  ],
  authors: [
    { name: "Pace Studio | Mat Pilates", url: "https://pace-studio.com" },
  ],
  openGraph: {
    title: "Pace Studio",
    description: "Pace Studio | Mat Pilates",
    url: "https://pace-studio.com",
    siteName: "Pilates Studio",
    images: [
      {
        url: "/pace-logo-final-v2-favicon.png",
        width: 1200,
        height: 630,
        alt: "Pace Studio | Mat Pilates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pace Studio",
    description: "Pace Studio | Mat Pilates",
    images: ["/pace-logo-final-v2-favicon.png"],
  },
  icons: {
    icon: [
      {
        url: "/pace-logo-final-v2-favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/pace-logo-final-v2-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/ps_main_texture_3.webp"
          type="image/webp"
        />
      </head>
      <body
        className={`bg-cream text-espresso font-sans antialiased ${genome.variable}`}
      >
        <Header />
        {children}
        <Footer />

        {/* Mindbody Healcode — powers the Login | Register account link and the
            class enrollment widgets. Loaded once globally. */}
        <Script
          src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
