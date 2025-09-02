"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
  q: string;
  a: string;
  img: string;
};

const faqs: FaqItem[] = [
  {
    q: "How do I book a Pilates class?",
    a: "Book online: choose your class, pick a time, and confirm your spot. You’ll receive an email confirmation immediately.",
    img: "https://images.unsplash.com/photo-1747238415033-b74eec07eb59?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    q: "Can I cancel or reschedule my booking?",
    a: "Yes—free changes up to 12 hours before class. Inside 12 hours, the session is charged to your pass.",
    img: "https://images.unsplash.com/photo-1617560611911-85e1055544cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    q: "Do I need to bring my own mat?",
    a: "Mats and props are provided. You’re welcome to bring your own for comfort or hygiene preferences.",
    img: "https://images.unsplash.com/photo-1713201435382-bb915a39be16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    q: "What should I wear to class?",
    a: "Comfortable, form-fitting activewear. Grip socks are recommended for safety and stability.",
    img: "https://images.unsplash.com/photo-1645402596240-8970b0869d88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    q: "Are beginner classes available?",
    a: "Absolutely. Look for ‘Intro’ or ‘Foundations’—small groups with extra guidance on form.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const currentImage =
    typeof openIndex === "number" && openIndex >= 0 && openIndex < faqs.length
      ? faqs[openIndex].img
      : null;

  return (
    <section className="w-full text-coffee overflow-x-clip">
      <div className="max-w-[1200px] mx-auto my-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left column: image */}
        <motion.div
          className="order-1 lg:order-none rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[360px] md:h-[480px] overflow-hidden">
            <AnimatePresence mode="wait">
              {currentImage && (
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage.replace(/(&|\?)w=\d+/g, "")}
                    alt="FAQ related visual"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={85}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right column: FAQ list */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="font-playfair font-thin text-5xl md:text-6xl italic text-center md:text-left mb-8">
            Faq
          </h3>

          <div className="max-w-2xl mx-auto md:mx-0 font-playfair">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="py-5 border-b border-coffee">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="font-bold italic text-xl text-coffee">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      className="shrink-0"
                    >
                      <FaPlus className="text-coffee" size={12} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-coffee">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
