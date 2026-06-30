"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

import { EMAIL, INSTAGRAM, fadeUp, stagger, EASE } from "@/lib/site";
import PageHero from "../components/PageHero";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Contact                                            */
/* ---------------------------------------------------------------- */

const CONTACT_METHODS: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: IoMailOutline,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@bypacestudio",
    href: INSTAGRAM,
    external: true,
  },
];

export default function PaceContact() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* PAGE HERO */}
      <PageHero
        kicker="Say hello"
        title="Get in Touch"
        subtitle="Questions about class, membership, or your first visit? Reach out — we'll get right back to you."
      />

      {/* ---------- Contact methods ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto my-14 max-w-2xl px-4 sm:my-20 md:my-28"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_METHODS.map(
            ({ icon: Icon, label, value, href, external }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: EASE }}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col items-center gap-3 border border-stone-300 bg-white/40 px-6 py-10 text-center transition-colors hover:border-stone-800 hover:bg-white"
              >
                <Icon className="h-6 w-6 text-stone-500 transition-colors group-hover:text-stone-800" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
                  {label}
                </span>
                <span className="break-all text-sm font-extralight text-stone-800">
                  {value}
                </span>
              </motion.a>
            ),
          )}
        </div>

        {/* Primary CTA */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p className="font-extralight text-stone-500">
            Prefer to drop us a line directly?
          </p>
          <Link
            href={`mailto:${EMAIL}`}
            className="w-fit cursor-pointer rounded-full bg-stone-800 px-6 py-2 text-center text-white transition-colors hover:bg-stone-700"
          >
            Email Us
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
