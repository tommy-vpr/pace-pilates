"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTiktok, FaBars, FaXmark } from "react-icons/fa6";

import { NAV_LINKS, INSTAGRAM, TIKTOK } from "@/lib/site";
import { Geist, Bebas_Neue } from "next/font/google";

const genome = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-genome",
});

// Routes that must trigger a full page load instead of a client-side
// transition. The Mindbody schedule widget keeps global iframe state that
// breaks when React remounts it, so /schedule needs a fresh document load.
const HARD_LINKS = new Set(["/schedule"]);

function NavItem({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (HARD_LINKS.has(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-brand" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-[var(--font-genome)] ultra-thin text-lg uppercase text-stone-200"
        >
          PACE STUDIO
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-stone-200 font-extralight md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label} className="transition hover:text-stone-700">
              <NavItem href={href} className="inline-block py-6">
                {label}
              </NavItem>
            </li>
          ))}

          <li>
            <Link href={INSTAGRAM} aria-label="Instagram">
              <FaInstagram className="cursor-pointer transition hover:text-stone-700" />
            </Link>
          </li>
          <li>
            <Link href={TIKTOK} aria-label="TikTok">
              <FaTiktok className="cursor-pointer transition hover:text-stone-700" />
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-stone-200 text-xl md:hidden"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-brand md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-6 pt-2 text-stone-200 font-extralight">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <NavItem
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full py-3 text-left text-lg transition hover:text-white"
                  >
                    {label}
                  </NavItem>
                </li>
              ))}

              <li className="mt-2 flex items-center gap-6 border-t border-white/10 pt-4">
                <Link href={INSTAGRAM} aria-label="Instagram">
                  <FaInstagram className="text-xl transition hover:text-white" />
                </Link>
                <Link href={TIKTOK} aria-label="Tiktok">
                  <FaTiktok className="cursor-pointer text-xl transition hover:text-white" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
