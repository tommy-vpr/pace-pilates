"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

import { EMAIL, INSTAGRAM, fadeUp, stagger, EASE } from "@/lib/site";

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
      <div className="bg-[linear-gradient(rgba(28,25,23,0.5),rgba(28,25,23,0.5)),url('/ps_main_texture_3.webp')] bg-cover bg-center">
        <div className="flex min-h-[40vh] md:min-h-[50vh] w-full flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mt-4 text-4xl font-extralight text-stone-50 sm:text-5xl md:text-6xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-4 max-w-md font-extralight text-stone-300"
          >
            Questions about class, membership, or your first visit? Reach out —
            we&apos;ll get right back to you.
          </motion.p>
        </div>
      </div>

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
