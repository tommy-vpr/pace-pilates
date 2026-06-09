"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

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

type FooterLink = {
  label: string;
  href: string;
  icon?: IconType;
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
  "https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717500251716-27057c48ace4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723406230636-aa8c4ac1e6c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const [active, setActive] = useState(CLASSES[0].key);
  const [scrolled, setScrolled] = useState(false);

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
    onScroll(); // set correct state on mount/refresh
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      <div className="bg-[linear-gradient(rgba(28,25,23,0.7),rgba(28,25,23,0.7)),url('/ps_main_texture.webp')] bg-cover bg-center">
        {/* NAV — fixed, pinned for the whole page, own texture */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
            scrolled ? "bg-stone-900" : "bg-transparent"
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
            <ul className="flex items-center gap-6 text-stone-400 font-extralight">
              <li className="hover:text-stone-300 transition cursor-pointer">
                Schedule
              </li>
              <li className="hover:text-stone-300 transition cursor-pointer">
                Classes
              </li>
              <li className="hover:text-stone-300 transition cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-stone-300 transition cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-stone-300 transition cursor-pointer">
                Contact
              </li>
              <li>
                <FaInstagram className="hover:text-stone-300 transition cursor-pointer" />
              </li>
              <li>
                <FaTiktok className="hover:text-stone-300 transition cursor-pointer" />
              </li>
            </ul>
          </div>
        </nav>

        {/* LOGO HERO — its own texture, separate copy */}
        <div className="bg-[linear-gradient(rgba(28,25,23,0.7),rgba(28,25,23,0.7)),url('/ps_main_texture.webp')] bg-cover bg-center">
          <div className="w-full min-h-[50vh] flex justify-center items-center">
            <Image
              src="/pace-logo-final-v1-alt.png"
              width={240}
              height={240}
              alt="pace studio"
              className="brightness-110"
            />
          </div>
        </div>
      </div>

      {/* ---------- Split hero: full-left image / content right ---------- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto my-36">
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
        <div className="text-center flex flex-col justify-center items-center gap-6">
          <h3 className="text-4xl text-stone-900">Join our platform now</h3>
          <button className="cursor-pointer hover:bg-stone-800 transition bg-stone-900 text-white text-center py-2 px-6 rounded-full w-fit">
            Join Now
          </button>
        </div>
      </section>

      {/* ---------- Instagram feed ---------- */}
      <section className="border-t border-stone-300 max-w-7xl mx-auto">
        <div className="py-24">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                On the feed
              </p>
              <h2 className="mt-2 font-extralight text-3xl sm:text-4xl">
                @pacestudio
              </h2>
            </div>
            <a
              href="https://instagram.com/pacestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-stone-600 underline-offset-4 hover:underline"
            >
              <FaInstagram className="h-4 w-4" /> Follow
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-5">
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

      <footer className="text-expresso max-w-7xl mx-auto py-12">
        {/* Newsletter */}
        <div className="mb-12 pb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Stay in the loop
              </p>
              <h3 className="mt-2 text-xl text-stone-800 sm:text-2xl">
                subscribe to get our emails for the latest class info, new
                merch, and exclusive events!
              </h3>
            </div>

            <div className="w-full max-w-sm">
              {subscribed ? (
                <p className="font-serif text-lg text-stone-700">
                  You're in — see you on the mat.
                </p>
              ) : (
                <div className="flex items-center gap-2 border-b border-stone-400 pb-2 focus-within:border-stone-900 transition-colors">
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
        <div className="flex justify-between">
          {" "}
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="">
              <Image
                src="/pace-logo-final-v1-alt.png"
                width={100}
                height={100}
                alt="Pace Studio"
                className="brightness-70"
              />
            </div>
            <div className="h-full w-[1px] bg-stone-300"></div>
            <address className="not-italic text-xs leading-relaxed">
              444 N Harbor Blvd #140
              <br />
              Fullerton CA 92832
            </address>
          </div>
          <div className="flex gap-8 md:gap-16">
            {footerLinks.map((col) => (
              <div key={col.heading} className="text-[11px] leading-[2]">
                <div className="text-cream mb-1">{col.heading}</div>

                {col.links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 hover:text-stone-500 transition-colors"
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

        <div className="pt-4 xl:px-36 flex flex-col sm:justify-between gap-1.5 text-[10px] uppercase tracking-[0.1em] text-stone">
          {/* <div className="h-[1px] w-full bg-cream/10 mb-4"></div> */}
          <span className="mt-8 mx-auto text-stone-700">
            © 2026 Pace Studio - All Rights Reserved.
          </span>
        </div>
      </footer>

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
