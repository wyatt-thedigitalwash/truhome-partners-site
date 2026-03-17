"use client";

import { FadeIn } from "@/components/motion";

export default function BlogPage() {
  return (
    <main data-dark-hero>
      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-7xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              TruHome Partners Blog
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
              Tips, guides, and insights for Tampa Bay homeowners.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Coming Soon                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Coming Soon
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#2F343A] sm:text-3xl">
              We&apos;re working on new content
            </h2>
            <p className="mt-4 text-[#6B6B6B] leading-relaxed">
              Check back soon for helpful articles about selling your home,
              navigating tough situations, and understanding the Tampa Bay real
              estate market.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
