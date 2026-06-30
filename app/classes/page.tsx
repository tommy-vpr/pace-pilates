"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { CLASSES, fadeUp, stagger, EASE } from "@/lib/site";
import PageHero from "../components/PageHero";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Classes                                            */
/* ---------------------------------------------------------------- */

export default function PaceClasses() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* PAGE HERO */}
      <PageHero title="Our Classes" />

      {/* ---------- Class cards ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mx-auto my-14 grid max-w-5xl gap-8 px-4 sm:my-20 md:my-28 md:grid-cols-2"
      >
        {CLASSES.map((c) => (
          <motion.article
            key={c.key}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col border border-stone-300 bg-white/40 p-8 transition-colors hover:border-stone-800 hover:bg-white sm:p-10"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-500">
              {c.kicker}
            </span>
            <h2 className="mt-3 text-2xl text-stone-800 sm:text-3xl">
              {c.name}
            </h2>
            {c.heated && (
              <span className="mt-2 w-fit rounded-full border border-stone-300 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-stone-500">
                Heated · {c.heated}
              </span>
            )}
            <p className="mt-5 font-extralight leading-relaxed text-stone-600">
              {c.blurb}
            </p>
            <a
              href="/schedule"
              className="mt-8 w-fit cursor-pointer rounded-full bg-stone-800 px-6 py-2 text-center text-white transition-colors hover:bg-stone-700"
            >
              Book {c.name}
            </a>
          </motion.article>
        ))}
      </motion.section>
    </main>
  );
}
