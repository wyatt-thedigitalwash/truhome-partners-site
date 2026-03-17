"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

interface CTAStripProps {
  variant?: "dark" | "cream";
  text?: string;
}

export default function CTAStrip({
  variant = "dark",
  text = "Ready to get started?",
}: CTAStripProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-10 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-[#2F343A]" : "bg-[#F5F5F5]"
      }`}
    >
      <FadeIn>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p
            className={`text-base font-medium ${
              isDark ? "text-gray-300" : "text-[#2F343A]"
            }`}
          >
            {text}
          </p>
          <Link
            href="/sell-your-house"
            className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.97] ${
              isDark
                ? "bg-white text-[#2F343A] hover:bg-[#F5F5F5] hover:shadow-md"
                : "bg-[#3FA380] text-white hover:bg-[#358E6E] hover:shadow-md"
            }`}
          >
            Get Your Cash Offer
            <ArrowRight size={16} />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
