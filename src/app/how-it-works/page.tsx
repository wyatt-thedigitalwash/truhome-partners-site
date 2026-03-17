"use client";

import Link from "next/link";
import { Phone, FileText, Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";

/* ------------------------------------------------------------------ */
/*  How It Works Page                                                  */
/* ------------------------------------------------------------------ */

export default function HowItWorksPage() {
  return (
    <main data-dark-hero>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Our Process
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              How It Works — 3 Simple Steps to Sell Your House
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              No agents. No fees. No stress. Just a fair offer and a fast
              closing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────────────── Step 1 ───────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Content */}
              <div>
                <span className="text-8xl font-bold leading-none text-[#F5F5F5]">
                  01
                </span>
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3FA380]">
                  <Phone size={24} className="text-white" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-[#2F343A] sm:text-4xl">
                  Tell Us About Your Property
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#6B6B6B]">
                  Fill out our simple online form or give us a call. Share a few
                  details about your property — its location, condition, and
                  your timeline. There are no commitments and no obligations. We
                  just need enough information to start putting together your
                  personalized cash offer.
                </p>
              </div>

              {/* Image */}
              <div>
                <ImagePlaceholder
                  label="Person filling out form"
                  className="w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────────────── Step 2 ───────────────── */}
      <section className="bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image (left on desktop) */}
              <div className="order-2 lg:order-1">
                <ImagePlaceholder
                  label="Cash offer document"
                  className="w-full"
                />
              </div>

              {/* Content (right on desktop) */}
              <div className="order-1 lg:order-2">
                <span className="text-8xl font-bold leading-none text-white">
                  02
                </span>
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3FA380]">
                  <FileText size={24} className="text-white" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-[#2F343A] sm:text-4xl">
                  Get Your Cash Offer
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#6B6B6B]">
                  Our team evaluates your property and presents you with a fair,
                  no-obligation cash offer — typically within 24 hours. We walk
                  you through the numbers so you know exactly what you&apos;re
                  getting. No hidden fees, no last-minute surprises, and no
                  pressure to accept.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────────────── Step 3 ───────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Content */}
              <div>
                <span className="text-8xl font-bold leading-none text-[#F5F5F5]">
                  03
                </span>
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3FA380]">
                  <Calendar size={24} className="text-white" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-[#2F343A] sm:text-4xl">
                  Close On Your Timeline
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#6B6B6B]">
                  You pick the closing date — whether that&apos;s 7 days or 60.
                  There are no repairs to make, no inspections to worry about,
                  and no financing that might fall through. We handle the
                  paperwork, cover the closing costs, and you walk away with
                  cash in hand.
                </p>
              </div>

              {/* Image */}
              <div>
                <ImagePlaceholder
                  label="Keys handover at closing"
                  className="w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn className="py-12 text-center">
        <p className="text-[#6B6B6B]">
          Ready to start?{" "}
          <Link
            href="/sell-your-house"
            className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
          >
            Tell us about your property
          </Link>
          .
        </p>
      </FadeIn>

      {/* ───────────────── What Makes Us Different ───────────────── */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-[#F5F5F5]/[0.03] blur-3xl" />
        </div>

        {/* Dot pattern */}
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                What Sets Us Apart
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                What Makes Us Different
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 — No Middlemen */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/10 bg-[#2F343A]/40 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(245,240,235,0.15)] hover:shadow-[0_0_20px_rgba(245,240,235,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3FA380]">
                  <Users size={22} className="text-gray-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  No Middlemen
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  We buy directly from you. No agents, no brokers, no middlemen
                  taking a cut.
                </p>
              </div>
            </StaggerItem>

            {/* Card 2 — Transparent Offers */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/10 bg-[#2F343A]/40 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(245,240,235,0.15)] hover:shadow-[0_0_20px_rgba(245,240,235,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3FA380]">
                  <FileText size={22} className="text-gray-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  Transparent Offers
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  We show you exactly how we calculate our offer. No hidden math
                  or surprise deductions.
                </p>
              </div>
            </StaggerItem>

            {/* Card 3 — Local Team */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/10 bg-[#2F343A]/40 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(245,240,235,0.15)] hover:shadow-[0_0_20px_rgba(245,240,235,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3FA380]">
                  <MapPin size={22} className="text-gray-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  Local Team
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  We&apos;re based right here in Tampa Bay. We know these
                  neighborhoods because we live here too.
                </p>
              </div>
            </StaggerItem>

            {/* Card 4 — Flexible Closing */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/10 bg-[#2F343A]/40 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(245,240,235,0.15)] hover:shadow-[0_0_20px_rgba(245,240,235,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3FA380]">
                  <Calendar size={22} className="text-gray-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  Flexible Closing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Need to close in 7 days? Or 60? You set the date that works
                  for you.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ───────────────── CTA Banner ───────────────── */}
      <CTABanner />
    </main>
  );
}
