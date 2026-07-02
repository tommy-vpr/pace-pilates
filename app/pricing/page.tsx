"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import EnrollModal from "../components/EnrollModal";

import { fadeUp, stagger, EASE } from "@/lib/site";
import PageHero from "../components/PageHero";
import BuyContractButton from "../components/Buycontractbutton";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Pricing                                            */
/* ---------------------------------------------------------------- */

type Plan = {
  name: string;
  price: string;
  unit?: string;
  note?: string;
  serviceId?: string; // ← add
};

const DROP_IN: Plan[] = [
  { name: "Drop-in", price: "$25", unit: "single class" },
  { name: "5-Pack", price: "$100", unit: "$20 / class" },
  { name: "10-Pack", price: "$180", unit: "$18 / class" },
];

const MEMBERSHIPS: Plan[] = [
  { name: "8 Classes / Month", price: "$145", unit: "per month" },
  { name: "Unlimited", price: "$225", unit: "per month" },
  {
    name: "Founding Member",
    price: "$200",
    unit: "per month",
    note: "Limited-time rate, locked in for life",
    serviceId: "103",
  },
];

export default function PacePricing() {
  const [buyPlan, setBuyPlan] = useState<Plan | null>(null);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* PAGE HERO */}
      <PageHero title="Pricing" />

      <div className="mx-auto my-14 max-w-5xl px-4 sm:my-20 md:my-28">
        {/* ---------- Intro offer ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col items-center gap-3 bg-brand px-6 py-12 text-center text-stone-50"
        >
          {/* <span className="text-[11px] uppercase tracking-[0.3em] text-stone-700">
            New here
          </span> */}
          <h2 className="text-2xl font-extralight sm:text-3xl">
            Intro offer for new clients
          </h2>
          <p className="text-4xl font-extralight sm:text-5xl text-stone-700">
            $20
          </p>
          <Link
            href="/schedule"
            className="mt-4 w-fit cursor-pointer rounded-full bg-stone-50 px-6 py-2 text-center text-stone-900 transition-colors hover:bg-stone-200"
          >
            Start Your Intro
          </Link>
        </motion.div>

        {/* ---------- Drop-in & packs ---------- */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Pay as you go
          </p>
          <h3 className="mt-2 text-2xl font-extralight sm:text-3xl">
            Drop-in &amp; Class Packs
          </h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {DROP_IN.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-col gap-2 border border-stone-300 bg-white/40 p-8 transition-colors hover:border-stone-800 hover:bg-white"
              >
                <span className="text-sm uppercase tracking-[0.15em] text-stone-500">
                  {plan.name}
                </span>
                <span className="text-3xl font-extralight text-stone-800">
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="text-xs font-extralight text-stone-500">
                    {plan.unit}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ---------- Memberships ---------- */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Auto-pay membership
          </p>
          <h3 className="mt-2 text-2xl font-extralight sm:text-3xl">
            Monthly Memberships
          </h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {MEMBERSHIPS.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-col gap-2 border border-stone-300 bg-white/40 p-8 transition-colors hover:border-stone-800 hover:bg-white"
              >
                <span className="text-sm uppercase tracking-[0.15em] text-stone-500">
                  {plan.name}
                </span>
                <span className="text-3xl font-extralight text-stone-800">
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="text-xs font-extralight text-stone-500">
                    {plan.unit}
                  </span>
                )}
                {plan.note && (
                  <span className="mt-2 text-xs font-extralight leading-relaxed text-stone-600">
                    {plan.note}
                  </span>
                )}
                {plan.serviceId && (
                  <BuyContractButton serviceId={plan.serviceId} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-20 flex flex-col items-center gap-5 text-center"
        >
          <p className="font-extralight text-stone-500">
            Not sure which plan fits? We&apos;ll help you choose.
          </p>
          <Link
            href="/contact"
            className="w-fit cursor-pointer rounded-full bg-stone-800 px-6 py-2 text-center text-white transition-colors hover:bg-stone-700"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* <EnrollModal
          open={buyPlan !== null}
          onClose={() => setBuyPlan(null)}
          widgetId=""
          title={buyPlan ? buyPlan.name : ""}
        /> */}
      </div>
    </main>
  );
}
