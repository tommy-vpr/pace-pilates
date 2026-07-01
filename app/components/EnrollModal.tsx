"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

/* ---------------------------------------------------------------- */
/*  Pace Studio — enrollment modal                                   */
/*                                                                   */
/*  Opens a Mindbody enrollment URL in an iframe overlay. Closes on  */
/*  backdrop click, the X button, or Escape. Locks body scroll while */
/*  open.                                                            */
/* ---------------------------------------------------------------- */

type EnrollModalProps = {
  open: boolean;
  onClose: () => void;
  url: string;
  title: string;
};

export default function EnrollModal({
  open,
  onClose,
  url,
  title,
}: EnrollModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Enroll in ${title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3">
              <span className="text-sm uppercase tracking-[0.15em] text-stone-600">
                Join {title}
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-stone-500 transition-colors hover:text-stone-900"
              >
                <FaXmark className="h-5 w-5" />
              </button>
            </div>

            {/* Iframe */}
            <iframe
              src={url}
              title={`Enroll in ${title}`}
              className="h-full w-full flex-1 border-0"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
