"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface FAQItemProps {
  q: string;
  a: string;
  variant?: "light" | "dark";
  index?: number;
}

export function FAQItem({ q, a, variant = "dark", index = 0 }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  const borderColor =
    variant === "dark" ? "border-white/[0.08]" : "border-gray-200";
  const questionColor = variant === "dark" ? "text-white" : "text-[#2F343A]";
  const answerColor = variant === "dark" ? "text-gray-400" : "text-[#6B6B6B]";
  const chevronColor = variant === "dark" ? "text-gray-400" : "text-[#6B6B6B]";
  const numberColor =
    variant === "dark" ? "text-[#3FA380]/60" : "text-[#3FA380]/50";
  const openBg = open
    ? variant === "dark"
      ? "bg-[#3FA380]/[0.05]"
      : "bg-[#3FA380]/[0.03]"
    : "";
  return (
    <div
      className={`border-b ${borderColor} transition-colors duration-300 ${openBg}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 px-6 sm:px-8 text-left gap-4"
      >
        <div className="flex items-center gap-4">
          <span
            className={`text-sm font-mono font-semibold ${numberColor} shrink-0`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-base font-semibold sm:text-lg ${questionColor}`}
          >
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className={chevronColor} />
        </motion.div>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-5 px-6 sm:px-8 pl-[4.25rem] sm:pl-[4.75rem] leading-relaxed ${answerColor}`}
          >
            {a}
          </p>
        </div>
      </div>
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
      <div className={`rounded-2xl border overflow-hidden ${containerBg}`}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.q}
            q={faq.q}
            a={faq.a}
            variant={variant}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
