"use client";

import Image from "next/image";
import React from "react";
import { motion, type Easing, cubicBezier } from "framer-motion";
import { BiMapPin } from "react-icons/bi";
import { MdEmail, MdLocationPin, MdMap, MdPin } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const easeOutCubic: Easing = [0.25, 0.1, 0.25, 1];
const easeOut: Easing = cubicBezier(0.25, 0.1, 0.25, 1);
const easeInOut: Easing = cubicBezier(0.4, 0, 0.2, 1);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: easeOutCubic,
    delay,
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 1,
    ease: easeOut,
    delay,
  },
});

const lineExpand = (delay = 0) => ({
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: {
    duration: 1.2,
    ease: easeOutCubic,
    delay,
  },
});

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Background image layer */}
      <div className="opacity-[0.065] absolute inset-0 -z-10 bg-[url('/main-bg.webp')] bg-cover bg-center bg-no-repeat" />

      {/* Content */}
      <div className="flex flex-col items-center gap-6 md:gap-8 max-w-5xl w-full z-10">
        {/* Logo */}
        <motion.div {...fadeIn(0.2)}>
          <div className="relative mx-auto flex justify-center w-full">
            <Image
              src="/pace_studio_word_logo.png"
              width={180}
              height={180}
              className="invert-50 w-[110px] sm:w-[140px] md:w-[180px] h-auto"
              alt="Pace Studio"
              sizes="(min-width: 768px) 180px, (min-width: 640px) 140px, 110px"
            />
          </div>
        </motion.div>

        {/* Divider line */}
        <motion.div
          {...lineExpand(0.6)}
          className="w-24 h-[1px] bg-stone-400/50 origin-center"
        />

        {/* Hero heading */}
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <motion.h1
            {...fadeUp(0.8)}
            className="font-playfair text-[clamp(2.6rem,11vw,6.5rem)] leading-[0.9] text-stone-400 uppercase tracking-[0.15em]"
          >
            Setting the
          </motion.h1>
          <motion.h1
            {...fadeUp(1.0)}
            className="font-playfair text-[clamp(2.6rem,11vw,6.5rem)] leading-[0.9] text-stone-400 uppercase tracking-[0.15em]"
          >
            Pace
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(1.2)}
          className="text-xl md:text-2xl font-playfair text-stone-400 tracking-[0.3em] uppercase"
        >
          Mat Pilates Awaits
        </motion.p>

        {/* Divider line */}
        <motion.div
          {...lineExpand(1.4)}
          className="w-16 h-[1px] bg-stone-400/40 origin-center"
        />

        {/* Big inspirational quote */}
        <motion.blockquote
          {...fadeUp(1.6)}
          className="text-center max-w-2xl mt-4 md:mt-8"
        >
          <p className="font-playfair italic text-2xl md:text-4xl lg:text-5xl leading-snug text-stone-500/60">
            {/* &ldquo;In 10 sessions you&apos;ll feel the difference, in 20
            you&apos;ll see the difference, and in 30 you&apos;ll have a whole
            new body.&rdquo; */}
            We are currently making improvements to our website!
          </p>
          <motion.footer
            {...fadeIn(2.2)}
            className="mt-6 md:mt-8 text-sm md:text-base tracking-[0.25em] uppercase text-stone-400"
          >
            <span className="px-8 py-4 bg-stone-50 rounded-full shadow-xl shadow-stone-300/30">
              Hiring Instructors
            </span>
          </motion.footer>
        </motion.blockquote>

        {/* Coming soon note */}
        <motion.p
          {...fadeIn(2.0)}
          className="text-sm md:text-base text-stone-400 tracking-widest uppercase mt-6 md:mt-10"
        >
          Coming Soon
        </motion.p>
      </div>

      {/* Social icons at bottom */}
      <motion.div
        className="z-10 flex items-center gap-6 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
      >
        <motion.a
          href="https://www.instagram.com/pacestudio_co?igsh=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400 hover:text-stone-600 transition-colors duration-300"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </motion.a>

        <span className="w-[1px] h-4 bg-stone-400/40" />

        <motion.a
          href="mailto:info@pace-studio.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400 hover:text-stone-600 transition-colors duration-300"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </motion.a>
      </motion.div>
      <motion.div
        className="absolute bottom-14 md:bottom-16 z-10 flex flex-col md:flex-row items-center gap-2 md:gap-6 text-stone-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
      >
        <span className="flex items-center gap-2">
          <MdLocationPin /> 444 N Harbor Blvd #140, Fullerton CA 92832
        </span>
        <span className="hidden md:inline-flex">|</span>
        <span className="flex items-center gap-2">
          <MdEmail /> Info@pace-studio.com
        </span>
      </motion.div>
    </div>
  );
};

export default Home;
