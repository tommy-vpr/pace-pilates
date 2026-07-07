"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SlBadge } from "react-icons/sl";

import { EASE } from "@/lib/site";
import PageHero from "../components/PageHero";
import BuyContractButton from "../components/Buycontractbutton";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Pricing                                            */
/*                                                                   */
/*  Every purchasable option renders a Healcode Buy Now widget. These */
/*  must NOT sit inside Framer Motion elements — healcode hydrates on */
/*  page load and crashes if its container is mid-animation. So the   */
/*  price grids are static; only non-widget sections animate.        */
/* ---------------------------------------------------------------- */

type Kind = "contract" | "pricing";

type Plan = {
  name: string;
  price: string;
  unit?: string;
  note?: string;
  serviceId: string;
  kind: Kind;
  featured?: boolean;
};

const DROP_IN: Plan[] = [
  {
    name: "Drop-in",
    price: "$25",
    unit: "single class",
    serviceId: "100003",
    kind: "pricing",
  },
  {
    name: "5-Pack",
    price: "$100",
    unit: "$20 / class",
    serviceId: "100004",
    kind: "pricing",
  },
  {
    name: "10-Pack",
    price: "$180",
    unit: "$18 / class",
    serviceId: "100005",
    kind: "pricing",
  },
];

const MEMBERSHIPS: Plan[] = [
  {
    name: "8 Classes / Month",
    price: "$145",
    unit: "per month",
    serviceId: "101",
    kind: "contract",
  },
  {
    name: "Unlimited",
    price: "$225",
    unit: "per month",
    serviceId: "102",
    kind: "contract",
  },
];

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex flex-col gap-2 border border-stone-300 bg-white/40 p-8 transition-colors hover:border-stone-800 hover:bg-white">
      <span className="flex items-center gap-1 text-sm uppercase tracking-[0.15em] text-stone-500">
        {plan.name}
        {plan.featured && <SlBadge />}
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
      <BuyContractButton serviceId={plan.serviceId} kind={plan.kind} />
    </div>
  );
}

export default function PacePricing() {
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
          <h2 className="text-2xl font-extralight sm:text-3xl capitalize tracking-wide">
            INTRO OFFER FOR NEW CLIENTS
          </h2>
          <p className="text-4xl font-extralight sm:text-5xl text-stone-700">
            $20
          </p>
          {/* Intro Class pricing option (100011). Static wrapper — no motion. */}
          <div className="mt-2">
            <BuyContractButton
              serviceId="100011"
              kind="pricing"
              label="Start Your Intro"
            />
          </div>
        </motion.div>

        {/* ---------- Drop-in & packs ---------- */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Pay as you go
          </p>
          <h3 className="mt-2 text-2xl font-extralight sm:text-3xl">
            Drop-in &amp; Class Packs
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {DROP_IN.map((plan) => (
              <PriceCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        {/* ---------- Memberships ---------- */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Auto-pay membership
          </p>
          <h3 className="mt-2 text-2xl font-extralight sm:text-3xl">
            Monthly Memberships
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {MEMBERSHIPS.map((plan) => (
              <PriceCard key={plan.name} plan={plan} />
            ))}
          </div>
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
      </div>
    </main>
  );
}
