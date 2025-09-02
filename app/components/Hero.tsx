"use client";

import { motion } from "framer-motion";
import Header from "./Header";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/pilate-hero-3.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Header */}
      {/* <Header /> */}

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-secondary uppercase text-light italic no-synth"
        >
          Strong Core, Strong Body
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-light/90 font-secondary"
        >
          Discover the power of mindful movement and controlled strength.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#classes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-8 inline-block bg-expresso text-light font-playfair text-lg font-medium py-3 px-8 
          shadow-md transition duration-300 hover:bg-coffee hover:shadow-lg"
        >
          Transform Today
        </motion.a>
      </div>
    </div>
  );
}
