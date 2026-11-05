"use client";

import { Fragment, type ReactNode } from "react";
import { motion } from "framer-motion";

import { EASE, fadeUp, stagger } from "@/lib/site";
import type { LegalDoc } from "@/lib/legal";
import PageHero from "./PageHero";

/* ---------------------------------------------------------------- */
/*  Pace Studio — legal page layout (Privacy Policy, Terms)          */
/*                                                                   */
/*  Renders a LegalDoc from lib/legal.ts: hero, intro, then numbered */
/*  sections. Bullet items shaped "Label: text" get a bold label,    */
/*  matching the FAQ page's bolded policy terms. Email addresses     */
/*  become mailto links.                                             */
/* ---------------------------------------------------------------- */

const EMAIL_RE = /([\w.+-]+@[\w-]+\.[\w.]+)/g;

function linkify(text: string): ReactNode {
  const parts = text.split(EMAIL_RE);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="underline underline-offset-4 transition-colors hover:text-stone-900"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** "Late cancellation: Canceling less than…" → <strong>Late cancellation:</strong> … */
function renderItem(text: string): ReactNode {
  const idx = text.indexOf(":");
  const label = idx > 0 ? text.slice(0, idx) : "";
  const isLabel =
    label.length > 0 && label.length <= 48 && !/[.!?]/.test(label);
  if (!isLabel) return linkify(text);
  return (
    <>
      <strong className="font-semibold text-stone-900">{label}:</strong>
      {linkify(text.slice(idx + 1))}
    </>
  );
}

type LegalPageProps = { doc: LegalDoc };

export default function LegalPage({ doc }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      <PageHero kicker="Pace Studio" title={doc.title} />

      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto my-14 max-w-3xl px-4 sm:my-20 md:my-28"
      >
        {/* Intro */}
        {doc.intro.map((text, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-4 font-extralight leading-relaxed text-stone-600"
          >
            {linkify(text)}
          </motion.p>
        ))}

        {/* Sections */}
        <div className="mt-12 divide-y divide-stone-300 border-y border-stone-300">
          {doc.sections.map((section, i) => (
            <motion.div
              key={section.heading}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: EASE }}
              className="py-8"
            >
              <h2 className="flex items-baseline gap-3 text-lg text-stone-800 sm:text-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>

              <div className="mt-4 space-y-3 font-extralight leading-relaxed text-stone-600">
                {section.blocks.map((block, j) =>
                  block.type === "p" ? (
                    <p key={j}>{linkify(block.text)}</p>
                  ) : (
                    <ul key={j} className="list-disc space-y-2 pl-5">
                      {block.items.map((item, k) => (
                        <li key={k}>{renderItem(item)}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
