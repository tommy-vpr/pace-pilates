// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
        url: "/pace-logo-final-v2-favicon.png", // place image in /publicgive
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
      <body className="bg-cream text-espresso font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
