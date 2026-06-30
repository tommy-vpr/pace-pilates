"use client";

import Script from "next/script";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { EASE } from "@/lib/site";
import PageHero from "../components/PageHero";

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
      <PageHero kicker="Reserve your spot" title="Class Schedule" />

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
