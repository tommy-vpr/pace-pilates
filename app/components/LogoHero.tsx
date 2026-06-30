"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { EASE } from "@/lib/site";

/* ---------------------------------------------------------------- */
/*  Pace Studio — reusable logo hero                                 */
/*                                                                   */
/*  Exact extraction of the landing-page logo hero: two nested       */
/*  texture layers (outer 0.2→0, inner 0.1→0 overlays) over          */
/*  /main-bg.webp, with the centered animated logo.                  */
/* ---------------------------------------------------------------- */

export default function LogoHero() {
  return (
    <div className="bg-[linear-gradient(rgba(28,25,23,0.2),rgba(28,25,23,0)),url('/main-bg.webp')] bg-cover bg-center">
      {/* LOGO HERO */}
      <div className="bg-[linear-gradient(rgba(28,25,23,0.1),rgba(28,25,23,0)),url('/main-bg.webp')] bg-cover bg-center">
        <div className="flex min-h-[50vh] md:min-h-[60vh] w-full items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Image
              src="/ps-logo-website-white.png"
              width={260}
              height={260}
              alt="pace studio"
              className="w-40 sm:w-48 md:w-80 h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
