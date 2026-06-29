import { IconType } from "react-icons";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

/* ---------------------------------------------------------------- */
/*  Pace Studio — single source of truth for nav, classes, contact  */
/* ---------------------------------------------------------------- */

export const EMAIL = "info@pace-studio.com";
export const PHONE = "(626) 888-9999";
export const PHONE_TEL = "+16268889999";
export const INSTAGRAM = "https://www.instagram.com/bypacestudio";
export const ADDRESS = "444 N Harbor Blvd #140 Fullerton CA 92832";

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Schedule", href: "/schedule" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export type ClassStyle = {
  key: string;
  name: string;
  kicker: string;
  blurb: string;
  heated?: string;
};

export const CLASSES: ClassStyle[] = [
  {
    key: "align",
    name: "Pace Align",
    kicker: "Classical",
    blurb:
      "Experience the foundations of classical Pilates where it all began. This class returns to the roots of the method in a warm, welcoming environment, perfect for building strength, alignment, and mindful movement.",
  },
  {
    key: "sculpt",
    name: "Pace Sculpt",
    kicker: "Contemporary",
    blurb:
      "A contemporary take on Pilates for the modern mover. Designed for those who love a challenge, this class is practiced in a heated environment of 85–90°F to deepen your practice and elevate your results.",
    heated: "85–90°F",
  },
];

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string; icon?: IconType }[];
};

export const FOOTER_LINKS: FooterColumn[] = [
  {
    heading: "Studio",
    links: [
      { label: "Classes", href: "/classes" },
      { label: "Schedule", href: "/schedule" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Follow",
    links: [
      { label: "Instagram", href: INSTAGRAM, icon: FaInstagram },
      { label: "TikTok", href: "#", icon: FaTiktok },
      { label: "Newsletter", href: "#", icon: FaEnvelope },
    ],
  },
];

/* --- shared motion variants (used across pages) --- */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const EASE = [0.22, 1, 0.36, 1] as const;
