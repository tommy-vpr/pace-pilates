"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // if (pathname !== "/") return;

    const onScroll = () => setScrolled(window.scrollY > 8); // threshold
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-bg" : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between p-6">
        <Link href={"/"}>
          <Image
            src="/pace_studio_word_logo.png"
            alt="logo"
            width={100}
            height={50}
            className={clsx(
              pathname === "/" ? (scrolled ? "invert" : "") : "invert-100"
            )}
          />
        </Link>
        <BurgerMenu scrolled={scrolled} />
      </div>
    </header>
  );
}
