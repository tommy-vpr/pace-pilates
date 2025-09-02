"use client";
import Image from "next/image";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-espresso-800 text-coffee py-10 mt-auto">
      <Newsletter />
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Text */}
        <div className="text-center md:text-left">
          <Image
            src="/pace_studio_word_logo.png"
            alt=""
            width={100}
            height={50}
            className="invert"
          />
        </div>

        {/* Social icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-coffee hover:text-[#f4f1ef] rounded-full p-2 duration-200 transition-colors"
          >
            <SlSocialTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-coffee hover:text-[#f4f1ef] rounded-full p-2 duration-200 transition-colors"
          >
            <SiFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-coffee hover:text-[#f4f1ef] rounded-full p-2 duration-200 transition-colors"
          >
            <SiInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-beige-300">
        © {new Date().getFullYear()} Pilates Studio. All rights reserved.
      </div>
    </footer>
  );
}
