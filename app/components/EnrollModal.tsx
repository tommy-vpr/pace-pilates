"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

/* ---------------------------------------------------------------- */
/*  Pace Studio — enrollment modal (Mindbody Healcode)               */
/*                                                                   */
/*  healcode.js scans the DOM ONCE on load and hydrates every        */
/*  <healcode-widget> it finds. A widget that only appears when the   */
/*  modal opens is created after that scan, so it never hydrates and  */
/*  renders blank. The fix: the widget is mounted from page load      */
/*  (so healcode hydrates it during its normal scan) and the modal    */
/*  is purely a visibility layer that reveals the already-hydrated    */
/*  widget. It is never conditionally rendered or re-injected.        */
/* ---------------------------------------------------------------- */

type EnrollModalProps = {
  open: boolean;
  onClose: () => void;
  /** Healcode enrollment widget id. Mounted at load so it hydrates. */
  widgetId: string;
  title: string;
};

export default function EnrollModal({
  open,
  onClose,
  widgetId,
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
    <div
      aria-hidden={!open}
      className={
        open
          ? "fixed inset-0 z-[100] flex items-center justify-center p-4"
          : // Off-screen but STILL IN THE DOM so healcode keeps the hydrated
            // widget alive. Not `hidden`/`display:none`, which some embeds
            // treat as "unmount".
            "pointer-events-none fixed left-0 top-0 h-0 w-0 overflow-hidden opacity-0"
      }
    >
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Enroll in ${title}`}
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl transition-transform duration-200 ${
          open ? "scale-100" : "scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3">
          <span className="text-sm uppercase tracking-[0.15em] text-stone-600">
            {title ? `Join ${title}` : "Enroll"}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-stone-500 transition-colors hover:text-stone-900"
          >
            <FaXmark className="h-5 w-5" />
          </button>
        </div>

        {/* Healcode enrollment widget — mounted unconditionally (as long as a
            widgetId exists) so it's present during healcode's initial scan. */}
        {/* Mindbody cart-link widget — test placement */}
        <div className="mx-auto max-w-5xl px-4 mt-10 flex justify-center">
          {/* <healcode-widget
            data-version="0.2"
            data-link-class="healcode-cart-text-link"
            data-site-id="135634"
            data-mb-site-id="5754511"
            data-bw-identity-site="true"
            data-type="cart-link"
            data-inner-html="Cart"
          /> */}
          <healcode-widget
            data-version="0.2"
            data-link-class="healcode-contract-text-link"
            data-site-id="135634"
            data-mb-site-id="5754511"
            data-service-id="103"
            data-bw-identity-site="true"
            data-type="contract-link"
            data-inner-html="Buy Now"
          />
        </div>
      </div>
    </div>
  );
}
