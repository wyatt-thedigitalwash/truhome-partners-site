"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  q: string;
  a: string;
  variant?: "light" | "dark";
}

export function FAQItem({ q, a, variant = "dark" }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  const borderColor =
    variant === "dark" ? "border-white/[0.08]" : "border-gray-200";
  const questionColor = variant === "dark" ? "text-white" : "text-[#2F343A]";
  const answerColor = variant === "dark" ? "text-gray-400" : "text-[#6B6B6B]";
  const chevronColor = variant === "dark" ? "text-gray-400" : "text-[#6B6B6B]";

  return (
    <div className={`border-b ${borderColor}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className={`text-base font-semibold sm:text-lg pr-4 ${questionColor}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className={chevronColor} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className={`pb-5 leading-relaxed ${answerColor}`}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQSectionProps {
  title?: string;
  faqs: { q: string; a: string }[];
  variant?: "light" | "dark";
}

export function FAQSection({ title, faqs, variant = "dark" }: FAQSectionProps) {
  const containerBg =
    variant === "dark"
      ? "border-white/10 bg-[#2F343A]/30"
      : "border-gray-200 bg-white";
  const titleColor = variant === "dark" ? "text-gray-400" : "text-[#6B6B6B]";

  return (
    <div>
      {title && (
        <h3
          className={`text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${titleColor}`}
        >
          {title}
        </h3>
      )}
      <div className={`rounded-2xl border px-6 sm:px-8 ${containerBg}`}>
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} variant={variant} />
        ))}
      </div>
    </div>
  );
}
