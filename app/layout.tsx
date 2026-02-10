// app/layout.tsx
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Bodoni_Moda,
} from "next/font/google"; // Playfair is now Playfair_Display, and Bodoni_Moda for variable
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Import the variable version of Bodoni Moda, not the small caps version
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Use specific weights or a range
  display: "swap",
});

// Use the variable version of Playfair Display
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Weights should match what is available in the variable font
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pilates Studio | Book Classes Online",
  description:
    "Join our Pilates studio to strengthen your body, improve flexibility, and find balance. Book group or private Pilates classes online today.",
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
  authors: [{ name: "Move | Sculpt | Tone", url: "https://mypilate.com" }],
  openGraph: {
    title: "Pilates Studio | Book Your Next Class Online",
    description:
      "Strengthen your core, improve posture, and increase flexibility with our expert-led Pilates classes. Book your spot easily online.",
    url: "https://mypilate.com",
    siteName: "Pilates Studio",
    images: [
      {
        url: "/pose-1.webp", // place image in /publicgive
        width: 1200,
        height: 630,
        alt: "Pilates class session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Studio | Book Pilates Classes Online",
    description:
      "Book Pilates classes online at our studio. Improve your strength, posture, and flexibility with experienced instructors.",
    images: ["/pose-1.webp"],
  },
  icons: {
    icon: [
      { url: "/pace_studio_word_logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/pace_studio_word_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${bodoni.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
