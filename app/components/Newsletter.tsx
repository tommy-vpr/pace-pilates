"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { EASE } from "@/lib/site";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    // TODO: POST to your newsletter endpoint (Klaviyo / Mailchimp / your API)
    setSubscribed(true);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: EASE }}
      className="mx-auto max-w-7xl px-4 pb-12"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Stay in the loop
          </p>
          <h3 className="mt-2 text-lg text-stone-800 sm:text-2xl">
            Subscribe to get our emails for the latest class info, new merch,
            and exclusive events!
          </h3>
        </div>

        <div className="w-full md:max-w-sm">
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-lg text-stone-700"
              >
                You&apos;re in — see you on the mat.
              </motion.p>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 border-b border-stone-400 pb-2 transition-colors focus-within:border-stone-900"
              >
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="w-full bg-transparent text-stone-800 placeholder:text-stone-400 focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="shrink-0 cursor-pointer rounded-full bg-stone-800 px-5 py-2 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-stone-700"
                >
                  Subscribe
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
