"use client";

import { motion } from "framer-motion";

import { EASE } from "@/lib/site";

/* ---------------------------------------------------------------- */
/*  Pace Studio — reusable page hero                                 */
/*                                                                   */
/*  Used at the top of interior pages (Schedule, Classes, Pricing,   */
/*  FAQs, Contact). Renders the textured band with an optional       */
/*  kicker, a title, and an optional subtitle.                       */
/* ---------------------------------------------------------------- */

type PageHeroProps = {
  title: string;
  kicker?: string;
  subtitle?: string;
};

export default function PageHero({ title, kicker, subtitle }: PageHeroProps) {
  return (
    <div className="bg-[linear-gradient(rgba(28,25,23,0.2),rgba(28,25,23,0)),url('/main-bg.webp')] bg-cover bg-center">
      <div className="flex min-h-[40vh] md:min-h-[50vh] w-full flex-col items-center justify-center px-6 text-center">
        {kicker && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xs uppercase tracking-[0.3em] text-stone-300"
          >
            {kicker}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: kicker ? 0.1 : 0 }}
          className="mt-4 text-4xl font-extralight text-stone-50 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-4 max-w-md font-extralight text-stone-300"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
