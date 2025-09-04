"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="px-6 md:p-0 flex flex-col md:flex-row m-auto max-w-[1200px] py-12 gap-24 items-center text-coffee">
      {/* Left text section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-playfair text-3xl">Move / Sculpt / Tone</p>
        <h3 className="font-playfair font-bold italic text-xl mt-8">
          Pilate With Yuki
        </h3>
        <p className="font-playfair mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          rerum non totam, quod amet odio quas commodi eveniet neque tempore
          illum unde qui aspernatur consectetur tempora repellendus perferendis
          animi accusamus.
        </p>
        <Link
          href={"/"}
          className="block w-fit font-playfair font-medium bg-accent text-light px-6 py-2
          mt-4 hover:bg-secondary transition duration-200 cursor-pointer text-lg"
        >
          Book Now
        </Link>
      </motion.div>

      {/* Right image section */}
      <motion.div
        className="w-full md:w-1/2 rounded-xl overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/pose-1.webp"
          alt="pilate with yuki"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
};

export default Intro;
