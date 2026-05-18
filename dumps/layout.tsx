import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

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
  title: "Reform · Boutique pilates in Silver Lake",
  description:
    "A small studio teaching reformer, mat, and tower pilates. Classes capped at eight. No mirrors, no music push, no rush.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="bg-cream text-espresso font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
