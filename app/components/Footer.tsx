import Image from "next/image";
import Link from "next/link";
import {
  IoMailOutline,
  IoLocationOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

import { FOOTER_LINKS, EMAIL, PHONE, ADDRESS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-stone-300 px-4 py-12">
      <div className="flex gap-4 md:gap-10 justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Image
            src="/pace-logo-final-v2-alt.png"
            width={100}
            height={100}
            alt="Pace Studio"
            className="brightness-70"
          />
          <div className="hidden h-12 w-[1px] bg-stone-300 sm:block"></div>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <div className="h-4 w-4 flex items-center justify-center">
                <IoMailOutline className="h-auto" />
              </div>
              <span className="text-xs not-italic leading-relaxed">
                {EMAIL}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-4 w-4 flex items-center justify-center">
                <IoLocationOutline className="h-auto" />
              </div>
              <address className="text-xs not-italic leading-relaxed">
                {ADDRESS}
              </address>
            </div>
          </div>
        </div>

        <div className="flex gap-8 sm:gap-16">
          {FOOTER_LINKS.map((col) => (
            <div
              key={col.heading}
              className="text-[12px] md:text-base leading-[2]"
            >
              <div className="mb-1 text-stone-900 underline underline-offset-4">
                {col.heading}
              </div>
              {col.links.map((link) => {
                const Icon = link.icon;
                // /schedule must be a full page load — the Mindbody widget
                // breaks on client-side remounts. Use a plain anchor for it.
                const isHardLink = link.href === "/schedule";
                const inner = (
                  <>
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    <span>{link.label}</span>
                  </>
                );
                const className =
                  "flex items-center gap-2 transition-colors hover:text-stone-500";
                return isHardLink ? (
                  <a key={link.label} href={link.href} className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className={className}>
                    {inner}
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
  );
}
