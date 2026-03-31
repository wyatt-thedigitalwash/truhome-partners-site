"use client";

import { Lock, TrendingDown, Eye, RefreshCw } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const benefits = [
  {
    icon: Lock,
    title: "Off-Market Access",
    description:
      "Properties not listed anywhere else — direct from our pipeline.",
  },
  {
    icon: TrendingDown,
    title: "Below Market Value",
    description:
      "Deals priced for investor returns. No bidding wars.",
  },
  {
    icon: Eye,
    title: "First Look",
    description:
      "Get notified before anyone else when new deals drop.",
  },
  {
    icon: RefreshCw,
    title: "Consistent Deal Flow",
    description:
      "New properties added regularly across Tampa Bay.",
  },
];

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function BuyersPage() {
  return (
    <div data-dark-hero>
      {/* ============================================================= */}
      {/* 1. HERO — Dark bg, centered, radial glow                      */}
      {/* ============================================================= */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#2F343A]">
        <div className="relative mx-auto max-w-3xl px-4 py-32 text-center sm:px-6 lg:px-8 lg:py-40">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
              Access Off-Market Deals in Tampa Bay
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed md:text-xl">
              Join our investor list and get first access to discounted
              properties before they hit the market.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. BENEFITS — Cream bg, 4-card grid                           */}
      {/* ============================================================= */}
      <section className="relative bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Why Join
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              Benefits of Our Buyer List
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="group shimmer-card rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#3FA380]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#3FA380]/[0.03]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F5F5] transition-colors duration-300 group-hover:bg-[#3FA380]/10">
                    <benefit.icon size={26} className="text-[#3FA380] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#2F343A]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. BUYER SIGNUP FORM — White bg, centered card                 */}
      {/* ============================================================= */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-2xl">
          <FadeIn>
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold text-[#2F343A] sm:text-3xl text-center">
                Join Our Buyer List
              </h2>

              <form className="mt-8 space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#2F343A] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2F343A] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#2F343A] mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(813) 555-1234"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Markets of Interest */}
                <div>
                  <label className="block text-sm font-medium text-[#2F343A] mb-2">
                    Markets of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Tampa",
                      "St. Petersburg",
                      "Clearwater",
                      "Brandon",
                      "Riverview",
                      "Wesley Chapel",
                      "Plant City",
                      "Lutz",
                      "Land O' Lakes",
                      "New Port Richey",
                      "Palm Harbor",
                      "Hillsborough County",
                      "Pinellas County",
                      "Pasco County",
                    ].map((market) => (
                      <label
                        key={market}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-[#2F343A] cursor-pointer transition-all hover:border-[#3FA380] hover:bg-white has-[:checked]:border-[#3FA380] has-[:checked]:bg-white"
                      >
                        <input
                          type="checkbox"
                          name="markets"
                          value={market.toLowerCase().replace(/[\s']/g, "-")}
                          className="h-4 w-4 rounded border-gray-300 text-[#3FA380] focus:ring-[#3FA380]"
                        />
                        <span className="leading-tight">{market}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Property Types */}
                <div>
                  <label className="block text-sm font-medium text-[#2F343A] mb-2">
                    Property Types
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Single Family",
                      "Multi-Family",
                      "Townhome/Condo",
                      "Mobile Home",
                      "Vacant Land",
                      "Commercial",
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-[#2F343A] cursor-pointer transition-all hover:border-[#3FA380] hover:bg-white has-[:checked]:border-[#3FA380] has-[:checked]:bg-white"
                      >
                        <input
                          type="checkbox"
                          name="propertyTypes"
                          value={type.toLowerCase().replace(/[\s/]/g, "-")}
                          className="h-4 w-4 rounded border-gray-300 text-[#3FA380] focus:ring-[#3FA380]"
                        />
                        <span className="leading-tight">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-[#2F343A] mb-1.5"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380] appearance-none"
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-150k">$100K–$150K</option>
                    <option value="150k-250k">$150K–$250K</option>
                    <option value="250k-500k">$250K–$500K</option>
                    <option value="500k-1m">$500K–$1M</option>
                    <option value="1m-plus">$1M+</option>
                  </select>
                </div>

                {/* Deal Preferences */}
                <div>
                  <label
                    htmlFor="dealPreference"
                    className="block text-sm font-medium text-[#2F343A] mb-1.5"
                  >
                    Deal Preferences
                  </label>
                  <select
                    id="dealPreference"
                    name="dealPreference"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380] appearance-none"
                  >
                    <option value="" disabled>
                      Select deal type
                    </option>
                    <option value="fix-and-flip">Fix &amp; Flip</option>
                    <option value="buy-and-hold">Buy &amp; Hold Rental</option>
                    <option value="wholesale">Wholesale Assignment</option>
                    <option value="any">Any</option>
                  </select>
                </div>

                {/* Compliance checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#3FA380] focus:ring-[#3FA380]"
                    />
                    <span className="text-xs text-[#6B6B6B] leading-relaxed">
                      I agree to the{" "}
                      <a href="/terms" target="_blank" className="text-[#3FA380] underline underline-offset-2 hover:text-[#358E6E]">
                        Terms &amp; Conditions
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" target="_blank" className="text-[#3FA380] underline underline-offset-2 hover:text-[#358E6E]">
                        Privacy Policy
                      </a>.
                    </span>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#3FA380] focus:ring-[#3FA380]"
                    />
                    <span className="text-xs text-[#6B6B6B] leading-relaxed">
                      I agree to receive transactional or conversational
                      communications from TruHome Partners via text messages,
                      phone calls, and emails related to my real estate
                      inquiry, such as property details, responses, and
                      appointment confirmations. Message frequency varies.
                      Reply STOP to opt out. Reply HELP for help. Msg &amp;
                      data rates may apply. Your information is secure and
                      will not be sold or shared with third parties or
                      affiliates for promotional purposes.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#3FA380] px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-[#358E6E] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join the Buyer List
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-[#6B6B6B]">
                We&apos;ll send you deals that match your criteria. No spam, no
                fluff.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. CTA BANNER                                                  */}
      {/* ============================================================= */}
      <CTABanner
        headline="Have a Property to Sell?"
        subtext="Get a fair cash offer for your Tampa Bay home. No fees, no repairs, no hassle."
      />
    </div>
  );
}
