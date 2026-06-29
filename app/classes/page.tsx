"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { CLASSES, fadeUp, stagger, EASE } from "@/lib/site";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Classes                                            */
/* ---------------------------------------------------------------- */

export default function PaceClasses() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* PAGE HERO */}
      <div className="bg-[linear-gradient(rgba(28,25,23,0.5),rgba(28,25,23,0.5)),url('/ps_main_texture_3.webp')] bg-cover bg-center">
        <div className="flex min-h-[40vh] md:min-h-[50vh] w-full flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mt-4 text-4xl font-extralight text-stone-50 sm:text-5xl md:text-6xl"
          >
            Our Classes
          </motion.h1>
        </div>
      </div>

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
