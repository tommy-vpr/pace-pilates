"use client";

import Image from "next/image";
import { useState } from "react";

/* ---------------------------------------------------------------- */
/*  Pace Studio — full-left image, content right                     */
/* ---------------------------------------------------------------- */

type ClassStyle = {
  key: string;
  tab: string;
  kicker: string;
  title: string;
  blurb: string;
  detail: string;
  image: string;
  intensity: 1 | 2 | 3;
};

const CLASSES: ClassStyle[] = [
  {
    key: "form",
    tab: "Pace Form",
    kicker: "Classical",
    title: "Pace Form",
    blurb:
      "The original method, taught with intention. Slow, precise, breath-led — the foundation everything else is built on.",
    detail:
      "Spring tension and controlled tempo train deep stability before anything fast. Best if you're new, returning from injury, or rebuilding from the inside out.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    intensity: 1,
  },
  {
    key: "burn",
    tab: "Pace Burn",
    kicker: "Contemporary",
    title: "Sculpt & Burn",
    blurb:
      "Reformer Pilates with the volume turned up. Choreographed flows, faster transitions, heart rate climbing.",
    detail:
      "Time-under-tension supersets stacked back to back. You'll shake by minute twenty and feel it for two days. Bring water.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    intensity: 3,
  },
  {
    key: "core",
    tab: "Pace Core",
    kicker: "Core focus",
    title: "Pace Core",
    blurb:
      "Everything below the ribs, nothing wasted. A targeted session built entirely around the center line.",
    detail:
      "Deep abdominal, oblique, and pelvic-floor work with micro-movements that go further than they look. Pairs with any other class as a finisher.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    intensity: 2,
  },
];

const IG_POSTS = [
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518644730709-0835105d9daa?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
];

export default function PaceClasses() {
  const [active, setActive] = useState(CLASSES[0].key);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      {/* ---------- Split hero: full-left image / content right ---------- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 p-48">
        {/* LEFT — image */}
        {/* LEFT — static hero image */}
        <div className="relative min-h-[60vh] rounded-lg overflow-hidden">
          <img
            src="https://studio-twentyeight.nl/swfiles/files/L2b169-tab.jpg?nc=1774882259"
            alt="Pace Studio"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT — brand + Classes + class links */}
        {/* RIGHT — brand + nav */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          {/* <div className="p-12 bg-white/40 w-fit rounded-lg">
            <Image
              src={"/pace-logo-final-v1-alt.png"}
              width={240}
              height={140}
              alt="pace studio"
            />
          </div> */}
          <Image
            src={"/pace-logo-final-v1-alt.png"}
            width={200}
            height={140}
            alt="pace studio"
          />

          <nav className="mt-10" aria-label="Primary">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="/schedule"
                  className="font-serif text-2xl text-stone-500 transition-colors hover:text-stone-900 sm:text-3xl"
                >
                  Schedule
                </a>
              </li>

              {/* Classes + sub-items */}
              <li>
                <a
                  href="/classes"
                  className="font-serif text-2xl text-stone-900 transition-colors hover:text-stone-700 sm:text-3xl"
                >
                  Classes
                </a>
                <ul className="mt-3 flex flex-col gap-2 border-l border-stone-300 pl-5">
                  {CLASSES.map((c) => (
                    <li key={c.key}>
                      <a
                        href={`/classes/${c.key}`}
                        className="group flex items-baseline gap-3 text-stone-500 transition-colors hover:text-stone-800"
                      >
                        <span className="font-serif text-lg sm:text-xl">
                          {c.tab}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
                          {c.kicker}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="font-serif text-2xl text-stone-500 transition-colors hover:text-stone-900 sm:text-3xl"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="font-serif text-2xl text-stone-500 transition-colors hover:text-stone-900 sm:text-3xl"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-serif text-2xl text-stone-500 transition-colors hover:text-stone-900 sm:text-3xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* ---------- Instagram feed ---------- */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                On the feed
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                @pacestudio
              </h2>
            </div>
            <a
              href="https://instagram.com/pacestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.15em] text-stone-600 underline-offset-4 hover:underline"
            >
              Follow
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
            {IG_POSTS.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/pacestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-800"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-stone-900/0 transition-colors group-hover:bg-stone-900/20" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\[fadeIn_0\.5s_ease\] {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
