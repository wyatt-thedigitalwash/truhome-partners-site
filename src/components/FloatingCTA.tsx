"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~80vh (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop — floating button, bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-40 hidden sm:block"
          >
            <Link
              href="/sell-your-house"
              className="inline-flex items-center gap-2 rounded-full bg-[#3FA380] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:bg-[#358E6E] hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] animate-floating-cta"
            >
              Get My Cash Offer
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Mobile — full-width sticky bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden"
          >
            <div className="bg-[#2F343A] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
              <Link
                href="/sell-your-house"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2F343A] transition-all duration-200 ease-out hover:bg-[#F5F5F5] active:scale-[0.98]"
              >
                Get My Cash Offer
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
