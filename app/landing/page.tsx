"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { BiChevronDown } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import {
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

/* ---------------------------------------------------------------- */
/*  Pace Studio — mobile responsive                                  */
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

type FooterLink = {
  label: string;
  href: string;
  icon?: IconType;
};

const NAV_LINKS = ["Schedule", "Classes", "Pricing", "FAQs", "Contact"];

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
  "https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const footerLinks: {
  heading: string;
  links: FooterLink[];
}[] = [
  {
    heading: "Studio",
    links: [
      { label: "Classes", href: "#" },
      { label: "Schedule", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    heading: "Follow",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/bypacestudio",
        icon: FaInstagram,
      },
      { label: "TikTok", href: "#", icon: FaTiktok },
      { label: "Newsletter", href: "#", icon: FaEnvelope },
    ],
  },
];

export default function PaceClasses() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    // TODO: POST to your newsletter endpoint (Klaviyo / Mailchimp / your API)
    setSubscribed(true);
    setEmail("");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      <div className="bg-[linear-gradient(rgba(28,25,23,0.7),rgba(28,25,23,0.7)),url('/ps_main_texture.webp')] bg-cover bg-center">
        {/* NAV */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
            scrolled || menuOpen ? "bg-stone-900" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
            <Image
              src="/pace-logo-final-v1-alt.png"
              width={60}
              height={60}
              alt="pace studio"
              className="brightness-200"
            />

            {/* Desktop links */}
            <ul className="hidden items-center gap-6 text-stone-400 font-extralight md:flex">
              {NAV_LINKS.map((label) =>
                label === "Classes" ? (
                  <li
                    key={label}
                    className="relative"
                    onMouseEnter={() => setClassesOpen(true)}
                    onMouseLeave={() => setClassesOpen(false)}
                  >
                    <span className="inline-block cursor-pointer py-6 transition hover:text-stone-300">
                      Classes
                    </span>

                    {classesOpen && (
                      <ul className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-xl bg-stone-800 p-2 shadow-xl ring-1 ring-white/10">
                        {CLASSES.map((c) => (
                          <li key={c.key}>
                            <Link
                              href={`/classes/${c.key}`}
                              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                            >
                              <span className="block text-stone-100">
                                {c.tab}
                              </span>
                              <span className="block text-[11px] uppercase tracking-[0.15em] text-stone-400">
                                {c.kicker}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    key={label}
                    className="cursor-pointer transition hover:text-stone-300"
                  >
                    {label}
                  </li>
                ),
              )}

              <li>
                <Link
                  href="https://www.instagram.com/bypacestudio"
                  aria-label="Instagram"
                >
                  <FaInstagram className="cursor-pointer transition hover:text-stone-300" />
                </Link>
              </li>
              <li>
                <FaTiktok className="cursor-pointer transition hover:text-stone-300" />
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="text-stone-300 text-xl md:hidden"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {/* Mobile menu panel */}
          <div
            className={`overflow-hidden bg-stone-900 transition-[max-height] duration-300 md:hidden ${
              menuOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col gap-1 px-4 pb-6 pt-2 text-stone-300 font-extralight">
              {NAV_LINKS.map((label) =>
                label === "Classes" ? (
                  <li key={label}>
                    <button
                      onClick={() => setClassesOpen((v) => !v)}
                      aria-expanded={classesOpen}
                      className="flex w-full items-center justify-between py-3 text-left text-lg transition hover:text-white"
                    >
                      Classes
                      <span
                        className={`transition-transform ${classesOpen ? "rotate-180" : ""}`}
                      >
                        <BiChevronDown />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden pl-4 transition-[max-height] duration-300 ${
                        classesOpen ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      {CLASSES.map((c) => (
                        <Link
                          key={c.key}
                          href={`/classes/${c.key}`}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-baseline gap-2 border-l border-white/10 py-2 pl-4 transition hover:text-white"
                        >
                          <span>{c.tab}</span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                            {c.kicker}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={label}>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="block w-full py-3 text-left text-lg transition hover:text-white"
                    >
                      {label}
                    </button>
                  </li>
                ),
              )}

              <li className="mt-2 flex items-center gap-6 border-t border-white/10 pt-4">
                <Link
                  href="https://www.instagram.com/bypacestudio"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl transition hover:text-white" />
                </Link>
                <FaTiktok className="cursor-pointer text-xl transition hover:text-white" />
              </li>
            </ul>
          </div>
        </nav>

        {/* LOGO HERO */}
        <div className="bg-[linear-gradient(rgba(28,25,23,0.7),rgba(28,25,23,0.7)),url('/ps_main_texture.webp')] bg-cover bg-center">
          <div className="flex min-h-[50vh] w-full items-center justify-center px-6">
            <Image
              src="/pace-logo-final-v1-alt.png"
              width={240}
              height={240}
              alt="pace studio"
              className="brightness-110 w-40 sm:w-48 md:w-60 h-auto"
            />
          </div>
        </div>
      </div>

      {/* ---------- Split hero ---------- */}
      <section className="mx-auto my-20 grid max-w-7xl grid-cols-1 gap-10 px-4 md:my-36 md:gap-0 lg:grid-cols-2">
        {/* LEFT — image */}
        <div className="relative min-h-[40vh] overflow-hidden rounded-lg md:min-h-[60vh] md:rounded-none">
          <img
            src="https://studio-twentyeight.nl/swfiles/files/L2b169-tab.jpg?nc=1774882259"
            alt="Pace Studio"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT — CTA */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h3 className="text-3xl text-stone-900 sm:text-4xl">
            Join our platform now
          </h3>
          <button className="w-fit cursor-pointer rounded-full bg-stone-900 px-6 py-2 text-center text-white transition hover:bg-stone-800">
            Join Now
          </button>
        </div>
      </section>

      {/* ---------- Instagram feed ---------- */}
      <section className="mx-auto max-w-7xl border-t border-stone-300 px-4">
        <div className="py-16 md:py-24">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                On the feed
              </p>
              <h2 className="mt-2 text-2xl font-extralight sm:text-4xl">
                @pacestudio
              </h2>
            </div>
            <a
              href="https://www.instagram.com/bypacestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone-600 underline-offset-4 hover:underline sm:text-sm"
            >
              <FaInstagram className="h-4 w-4" /> Follow
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-[1px] sm:grid-cols-3 lg:grid-cols-4">
            {IG_POSTS.map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/bypacestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-800"
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

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto max-w-7xl px-4 py-12">
        {/* Newsletter */}
        <div className="mb-12 pb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Stay in the loop
              </p>
              <h3 className="mt-2 text-lg text-stone-800 sm:text-2xl">
                Subscribe to get our emails for the latest class info, new
                merch, and exclusive events!
              </h3>
            </div>

            <div className="w-full max-w-sm">
              {subscribed ? (
                <p className="font-serif text-lg text-stone-700">
                  You&apos;re in — see you on the mat.
                </p>
              ) : (
                <div className="flex items-center gap-2 border-b border-stone-400 pb-2 transition-colors focus-within:border-stone-900">
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
                    className="shrink-0 cursor-pointer rounded-full bg-stone-900 px-5 py-2 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-stone-700"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer columns */}
        <div className="flex gap-10 sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src="/pace-logo-final-v1-alt.png"
              width={100}
              height={100}
              alt="Pace Studio"
              className="brightness-70"
            />
            <div className="hidden h-12 w-[1px] bg-stone-300 sm:block"></div>
            <address className="text-xs not-italic leading-relaxed">
              444 N Harbor Blvd #140
              <br />
              Fullerton CA 92832
            </address>
          </div>

          <div className="flex gap-12 sm:gap-16">
            {footerLinks.map((col) => (
              <div key={col.heading} className="text-[11px] leading-[2]">
                <div className="mb-1 text-stone-900">{col.heading}</div>
                {col.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 transition-colors hover:text-stone-500"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 pt-4 text-[10px] uppercase tracking-[0.1em]">
          <span className="mx-auto mt-8 text-stone-700">
            © 2026 Pace Studio — All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
