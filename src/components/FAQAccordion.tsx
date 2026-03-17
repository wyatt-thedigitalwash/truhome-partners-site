"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
        <div
          className={`shrink-0 transition-transform duration-250 ease-out ${open ? "rotate-180" : ""}`}
        >
          <ChevronDown size={20} className={chevronColor} />
        </div>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-250 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className={`pb-5 leading-relaxed ${answerColor}`}>{a}</p>
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
      <div className={`rounded-2xl border px-6 sm:px-8 ${containerBg}`}>
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} variant={variant} />
        ))}
      </div>
    </div>
  );
}
