"use client";

import Script from "next/script";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { EASE } from "@/lib/site";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Schedule (Mindbody embed)                          */
/*                                                                   */
/*  NOTE: reached via a hard <a href="/schedule"> in the nav, not    */
/*  next/link. The Mindbody widget keeps global iframe state that    */
/*  breaks on client-side remounts, so this page must load fresh.    */
/*  The pageshow guard below covers the other re-entry path: hitting */
/*  the browser back/forward button restores the page from bfcache   */
/*  (a frozen snapshot) without re-running the widget script, so we  */
/*  force a reload when that happens.                                */
/* ---------------------------------------------------------------- */

export default function PaceSchedule() {
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      // event.persisted === true means the page came from bfcache.
      if (e.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* PAGE HERO */}
      <div className="bg-[linear-gradient(rgba(28,25,23,0.5),rgba(28,25,23,0.5)),url('/ps_main_texture_3.webp')] bg-cover bg-center">
        <div className="flex min-h-[40vh] md:min-h-[50vh] w-full flex-col items-center justify-center px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xs uppercase tracking-[0.3em] text-stone-300"
          >
            Reserve your spot
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mt-4 text-4xl font-extralight text-stone-50 sm:text-5xl md:text-6xl"
          >
            Class Schedule
          </motion.h1>
        </div>
      </div>

      {/* ---------- Mindbody widget ---------- */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto my-14 max-w-4xl px-4 sm:my-20 md:my-28"
      >
        {/* Mindbody Schedules widget begin */}
        <div
          className="mindbody-widget"
          data-widget-type="Schedules"
          data-widget-id="8654984448b"
        />
        <Script
          src="https://brandedweb.mindbodyonline.com/embed/widget.js"
          strategy="afterInteractive"
        />
        {/* Mindbody Schedules widget end */}
      </motion.section>
    </main>
  );
}
