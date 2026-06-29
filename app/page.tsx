"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import { BiChevronDown } from "react-icons/bi";
import {
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import {
  IoLocation,
  IoLocationOutline,
  IoMail,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { INSTAGRAM, TIKTOK } from "@/lib/site";

/* ---------------------------------------------------------------- */
/*  Pace Studio — mobile responsive + framer motion                  */
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

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Schedule", href: "/schedule" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

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
        href: INSTAGRAM,
        icon: FaInstagram,
      },
      {
        label: "TikTok",
        href: TIKTOK,
        icon: FaTiktok,
      },
      { label: "Newsletter", href: "#", icon: FaEnvelope },
    ],
  },
];

/* --- shared motion variants --- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const EASE = [0.22, 1, 0.36, 1] as const;

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-stone-800 antialiased">
      <div className="bg-[linear-gradient(rgba(28,25,23,0.7),rgba(28,25,23,0.7)),url('/ps_main_texture_3.webp')] bg-cover bg-center">
        {/* LOGO HERO */}
        <div className="bg-[linear-gradient(rgba(28,25,23,0.5),rgba(28,25,23,0.5)),url('/ps_main_texture_3.webp')] bg-cover bg-center">
          <div className="flex min-h-[50vh] md:min-h-[60vh] w-full items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 1.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Image
                src="/pace-logo-final-v1-alt.png"
                width={260}
                height={260}
                alt="pace studio"
                className="brightness-110 w-40 sm:w-48 md:w-80 h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- Split hero ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="mx-auto my-14 sm:my-20 grid max-w-7xl grid-cols-1 gap-10 md:my-36 md:gap-0 lg:grid-cols-2  
        xl:bg-white p-4 md:p-8 xl:shadow-2xl xl:shadow-stone-700/10"
      >
        {/* LEFT — image */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative min-h-[40vh] overflow-hidden md:min-h-[60vh]"
        >
          <motion.img
            src="/pace-studios-main.webp"
            alt="Pace Studio"
            className="absolute inset-0 h-full w-full object-cover object-bottom md:object-center"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: EASE }}
          />
        </motion.div>

        {/* RIGHT — CTA */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <span className="font-extralight flex items-center text-stone-500 uppercase">
            MOVE{" "}
            <span className="mx-2 text-xl bg-stone-500 h-1 w-1 rounded-full block"></span>
            SCULPT{" "}
            <span className="mx-2 text-xl bg-stone-500 h-1 w-1 rounded-full block"></span>
            STRENGTHEN
          </span>
          <h3 className="uppercase text-3xl text-stone-800 sm:text-4xl text-center">
            Your Journey Your Pace
          </h3>
          <motion.a
            href="/schedule"
            className="w-fit cursor-pointer rounded-full bg-stone-800 px-6 py-2 text-center text-white transition-colors hover:bg-stone-700"
          >
            Book Now
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
}
