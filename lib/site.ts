import { IconType } from "react-icons";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

export const EMAIL = "info@pace-studio.com";
export const PHONE = "(626) 888-9999";
export const PHONE_TEL = "+16268889999";
export const INSTAGRAM = "https://www.instagram.com/bypacestudio";
export const TIKTOK = "https://www.tiktok.com/@bypacestudio";
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
  /** If set, the class card shows a "Join Now" button that opens this
   *  Mindbody Healcode enrollment widget in a modal. */
  enrollWidgetId?: string;
};

export const CLASSES: ClassStyle[] = [
  // {
  //   key: "align",
  //   name: "Pace Align",
  //   kicker: "Classical",
  //   blurb:
  //     "Experience the foundations of classical Pilates where it all began. This class returns to the roots of the method in a warm, welcoming environment, perfect for building strength, alignment, and mindful movement.",
  // },
  {
    key: "Contemporary",
    name: "Pace Fusion",
    kicker: "Classical and Contemporary",
    blurb:
      "The best of both worlds! Pace Fusion combines classical Pilates with contemporary movement in a heated studio for a dynamic, full-body workout that builds strength, balance, and control.",
  },
  {
    key: "sculpt",
    name: "Pace Sculpt",
    kicker: "Contemporary (heated and non heated)",
    blurb:
      "A contemporary take on Pilates designed for those who love a challenge. This full-body workout builds strength, control, and confidence while elevating your practice. Available in heated and non-heated formats.",

    enrollWidgetId: "86114960448b",
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
      { label: "FAQ", href: "/faqs" },
    ],
  },
  {
    heading: "Follow",
    links: [
      { label: "Instagram", href: INSTAGRAM, icon: FaInstagram },
      {
        label: "TikTok",
        href: TIKTOK,
        icon: FaTiktok,
      },
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
