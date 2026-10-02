"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

import { fadeUp, EASE } from "@/lib/site";
import PageHero from "../components/PageHero";

/* ---------------------------------------------------------------- */
/*  Pace Studio — FAQs                                               */
/* ---------------------------------------------------------------- */

type Faq = { q: string; a: ReactNode };

const FAQS: Faq[] = [
  {
    q: "What do I need to bring?",
    a: (
      <>
        Please bring <strong>a mat</strong> and <strong>grip socks</strong>.
      </>
    ),
  },
  {
    q: "Studio Late Policy?",
    a: (
      <>
        We offer a <strong>5-minute grace period</strong>. Clients who arrive
        more than 5 minutes after class begins may be denied entry to ensure the
        safety and experience of all participants.
      </>
    ),
  },
  {
    q: "What is your cancellation policy?",
    a: (
      <>
        Clients <strong>must cancel</strong> their reservation{" "}
        <strong>at least 12 hours</strong> before the scheduled class start
        time. If you cancel less than 12 hours before class or do not attend
        your scheduled class, your class credit will be forfeited, and a late
        cancellation or no-show fee may apply.
      </>
    ),
  },
  {
    q: "Is this class suitable for beginners?",
    a: "Absolutely! Everyone is welcome at Pace Studio, no matter where you are in your fitness journey.",
  },
  {
    q: "Can I attend class if I'm pregnant?",
    a: "Yes, you are welcome to join us! However, please keep in mind that our classes are held in a heated environment. We recommend consulting with your doctor before attending.",
  },

  {
    q: "How early should I arrive before class?",
    a: "We recommend arriving 5 minutes before class. If it's your first time, please arrive 10 minutes early so you can meet your instructor and get familiar with the studio!",
  },
  {
    q: "Where are you located and is there parking?",
    a: "Parking is available in the parking structure located next to our building.",
  },
  {
    q: "How does the waitlist work?",
    a: "Joining the waitlist is just like signing up for a class. If a spot opens up, you'll be automatically added to the class up to 1 hour before it starts. If you can no longer attend, please cancel at least 12 hours before class time — otherwise it will count as a no-show.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes. You can freeze your membership once per year. To cancel your membership, you must do so at least 30 days before your next billing date. Please email us at info@pace-studio.com to request a freeze or cancellation.",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function PaceFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* PAGE HERO */}
      <PageHero title="Frequently Asked Questions" />

      {/* ---------- FAQ accordion ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="mx-auto my-14 max-w-3xl px-4 sm:my-20 md:my-28"
      >
        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="cursor-pointer flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-stone-500"
                >
                  <span className="text-base text-stone-800 sm:text-lg">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="shrink-0 text-stone-500"
                  >
                    <BiChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 font-extralight leading-relaxed text-stone-600 [&_strong]:font-semibold [&_strong]:text-stone-900">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p className="font-extralight text-stone-500">
            Still have a question? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="w-fit cursor-pointer rounded-full bg-stone-800 px-6 py-2 text-center text-white transition-colors hover:bg-stone-700"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
