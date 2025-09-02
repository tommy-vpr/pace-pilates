"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <MotionConfig /* let users’ OS reduced-motion be respected */>
      <section className="relative py-16 md:py-24 bg-bg overflow-x-clip">
        {/* ornaments ... */}

        <div className="relative mx-auto max-w-[1100px] px-4">
          {/* header ... */}

          <div className="grid gap-6 md:grid-cols-2">
            {/* left: studio card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // ← animate once when ~20% visible
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl bg-expresso text-light shadow-xl"
            >
              {/* ...content... */}
            </motion.div>

            {/* right: form */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl bg-light/70 backdrop-blur shadow-xl border border-coffee/20"
            >
              <form onSubmit={onSubmit} className="p-6 md:p-8">
                {/* ... */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-expresso px-6 py-2.5 font-medium text-light hover:bg-expresso/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
                {sent && (
                  <div
                    className="mt-4 rounded-xl border border-coffee/30 bg-light/80 px-4 py-3 text-expresso"
                    role="status"
                    aria-live="polite"
                  >
                    Thanks! Your message has been sent.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
