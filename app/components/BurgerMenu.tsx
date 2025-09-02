"use client";

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { SlSocialTwitter } from "react-icons/sl";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { usePathname } from "next/navigation";

type MenuItem = { label: string; href: string; img: string };

const menuItems: MenuItem[] = [
  {
    label: "Classes",
    href: "#classes",
    img: "https://images.unsplash.com/photo-1747238415033-b74eec07eb59?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    label: "Pricing",
    href: "#pricing",
    img: "https://images.unsplash.com/photo-1617560611911-85e1055544cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    label: "About",
    href: "#about",
    img: "https://images.unsplash.com/photo-1713201435382-bb915a39be16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    label: "Contact",
    href: "#contact",
    img: "https://images.unsplash.com/photo-1645402596240-8970b0869d88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

type Props = { scrolled?: boolean };

export default function BurgerMenu({ scrolled = false }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const menuId = useId();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Lock scroll when menu is open
  useEffect(() => {
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = open ? "hidden" : prev || "";
    return () => {
      style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // span color: light at top, dark after scroll
  const closedColor = isHome
    ? scrolled
      ? "bg-expresso"
      : "bg-light"
    : "bg-expresso";

  const lineBase =
    "absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded transition duration-75";

  return (
    <>
      {/* Button */}
      <motion.button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] inline-flex h-8 w-10 items-center justify-center cursor-pointer group"
      >
        <div className="relative h-5 w-8">
          {/* top line */}
          <motion.span
            className={clsx(
              lineBase,
              open ? "bg-light" : closedColor // <- toggles by scroll
            )}
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: -6 },
              open: { rotate: 45, y: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 10,
              mass: 0.2,
            }}
            style={{ transformOrigin: "center" }}
          />
          {/* bottom line */}
          <motion.span
            className={clsx(
              lineBase,
              open ? "bg-light" : closedColor // <- toggles by scroll
            )}
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: 6 },
              open: { rotate: -45, y: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 10,
              mass: 0.2,
            }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </motion.button>

      {/* Fullscreen overlay/menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 z-0"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              id={menuId}
              role="dialog"
              aria-modal="true"
              className="relative z-10 mx-auto h-full w-full max-w-4xl px-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: { opacity: 0, scale: 0.98 },
                open: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {/* GRID: Left preview | Right nav */}
              <div className="grid h-full grid-cols-1 items-center gap-10 md:grid-cols-[minmax(320px,0.9fr)_1.1fr]">
                {/* LEFT: Preview panel */}
                <div className="relative hidden md:block overflow-hidden aspect-[4/5] w-full min-h-[320px]">
                  {/* Current image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={menuItems[active]?.img}
                      className="rounded-xl absolute inset-0 bg-cover bg-center will-change-transform"
                      style={{
                        backgroundImage: `url(${menuItems[active]?.img})`,
                      }}
                      initial={{ opacity: 0, rotate: -6, x: -16 }}
                      animate={{ opacity: 1, rotate: 0, x: 0 }}
                      exit={{ opacity: 0, rotate: -12, x: -28 }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                        mass: 0.6,
                      }}
                    />
                  </AnimatePresence>

                  {/* Soft overlays */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark/40 to-transparent" />
                </div>

                {/* RIGHT: Your existing nav list */}
                <motion.ul
                  className="relative z-10 text-center space-y-6"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                    open: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      variants={{
                        closed: { y: 10, opacity: 0 },
                        open: { y: 0, opacity: 1 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }}
                    >
                      <a
                        href={item.href}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "font-thin-render text-3xl md:text-5xl font-playfair italic antialiased no-synth transition",
                          i === active
                            ? "text-primary"
                            : "text-bg hover:text-primary"
                        )}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Social icons (stick to bottom-right on large) */}
                <div className="pointer-events-auto absolute right-0 bottom-6 flex gap-6 text-2xl text-bg md:bottom-10">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-bg hover:text-expresso rounded-full p-2 duration-200 transition-colors"
                  >
                    <SlSocialTwitter />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-bg hover:text-expresso rounded-full p-2 duration-200 transition-colors"
                  >
                    <SiFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-bg hover:text-expresso rounded-full p-2 duration-200 transition-colors"
                  >
                    <SiInstagram />
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
