"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Testimonials data                                                  */
/* ------------------------------------------------------------------ */

const testimonials = [
  {
    name: "Sarah M.",
    situation: "Sold inherited property",
    location: "Seminole Heights",
    quote:
      "I had no idea what to do with my mom\u2019s house after she passed. TruHome Partners made it so easy \u2014 they handled everything and I didn\u2019t have to lift a finger.",
    rating: 5,
  },
  {
    name: "James R.",
    situation: "Facing foreclosure",
    location: "Brandon",
    quote:
      "They closed in 10 days and saved my credit. I was running out of options, and TruHome came through when I needed them most. I can\u2019t thank them enough.",
    rating: 5,
  },
  {
    name: "Maria L.",
    situation: "Divorce sale",
    location: "Clearwater",
    quote:
      "I needed to sell fast during a difficult time. They were compassionate and professional throughout the entire process. Made a hard situation much easier.",
    rating: 5,
  },
  {
    name: "Robert T.",
    situation: "Code violations",
    location: "Town \u2019n\u2019 Country",
    quote:
      "My house needed $40K in repairs I couldn\u2019t afford. TruHome bought it as-is and I walked away with cash in hand. No repairs, no stress.",
    rating: 5,
  },
  {
    name: "Linda K.",
    situation: "Vacant property",
    location: "Plant City",
    quote:
      "The house sat empty for two years draining my savings. One call to TruHome and it was handled within two weeks. Wish I\u2019d called sooner.",
    rating: 5,
  },
  {
    name: "David W.",
    situation: "Relocating",
    location: "Temple Terrace",
    quote:
      "Got an offer in 24 hours and closed in two weeks. The whole process was smooth and transparent. Exactly what I needed for my out-of-state move.",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function TestimonialsPage() {
  return (
    <div data-dark-hero>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              What Homeowners Are Saying
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-gray-400">
              Real stories from real people we&rsquo;ve helped across Tampa Bay.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials Grid ────────────────────────────────────── */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        {/* Dot pattern overlay */}
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="flex-1 text-[#2F343A] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="my-6 border-t border-gray-200" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3FA380]">
                      <span className="text-sm font-semibold text-white">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#2F343A]">{t.name}</p>
                      <p className="text-sm text-[#6B6B6B]">{t.situation} &middot; {t.location}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12 text-center">
            <p className="text-[#6B6B6B]">
              Have a story to share?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
              >
                Get in touch
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
