"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to Sell Your House?",
  subtext = "Get your no-obligation cash offer today. We buy houses in any condition — close in as little as 7 days.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
      {/* Radial glow behind button area */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-[#F5F5F5]/[0.04] blur-3xl" />
      </div>

      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            {subtext}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/sell-your-house"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-4 text-base font-bold text-[#2F343A] shadow-lg transition-all duration-200 ease-out hover:bg-[#F5F5F5] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(245,240,235,0.15)] active:scale-[0.97]"
          >
            Get My Cash Offer
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
