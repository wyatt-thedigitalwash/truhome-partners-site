"use client";

import {
  AlertTriangle,
  KeyRound,
  HeartCrack,
  FileWarning,
  Hammer,
  UserX,
  CheckCircle,
  X,
  Shield,
  Clock,
  DollarSign,
  ArrowRight,
  Wrench,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import {
  FadeIn,
  HeroEntrance,
  StaggerContainer,
  StaggerItem,
  WordReveal,
} from "@/components/motion";
import { FAQSection } from "@/components/FAQAccordion";

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Foreclosure",
    description:
      "Facing foreclosure? We can close fast and help you avoid a devastating hit to your credit score.",
  },
  {
    icon: KeyRound,
    title: "Inherited Property",
    description:
      "Inherited a house you don\u2019t want or can\u2019t maintain? We\u2019ll buy it as-is so you can move forward.",
  },
  {
    icon: HeartCrack,
    title: "Divorce",
    description:
      "Going through a divorce and need to sell quickly? We make it simple to split the asset and close on your terms.",
  },
  {
    icon: FileWarning,
    title: "Tax Liens",
    description:
      "Behind on property taxes? We work with homeowners facing tax liens to provide a fast, fair solution.",
  },
  {
    icon: Hammer,
    title: "Code Violations",
    description:
      "Facing code violations or expensive repairs? We buy houses in any condition \u2014 no fix-up required.",
  },
  {
    icon: UserX,
    title: "Bad Tenants",
    description:
      "Dealing with problem tenants or a vacant property? We\u2019ll take it off your hands quickly and hassle-free.",
  },
];

const truHomeAdvantages = [
  "No fees or commissions",
  "No repairs needed",
  "Close in 7\u201314 days",
  "Cash offer in 24 hours",
  "No showings required",
];

const traditionalDisadvantages = [
  "5\u20136% commission + closing costs",
  "Repairs & staging required",
  "60\u201390+ days on average",
  "Uncertain offers & financing",
  "Multiple showings & open houses",
];

const faqs = [
  {
    q: "How does your process work?",
    a: "It\u2019s simple: tell us about your property by filling out our form or giving us a call. We\u2019ll evaluate your home and present you with a fair, no-obligation cash offer within 24 hours. If you accept, you pick the closing date \u2014 we handle all the paperwork and cover closing costs.",
  },
  {
    q: "Will I get a fair price?",
    a: "Absolutely. We evaluate your property based on its location, condition, and current Tampa Bay market values. Our goal is to make a competitive offer that reflects the true value of your home. There\u2019s no obligation \u2014 if our offer doesn\u2019t work for you, there\u2019s no pressure to accept.",
  },
  {
    q: "Do I need to clean or repair anything?",
    a: "Not at all. We buy houses in any condition \u2014 whether it\u2019s outdated, has roof damage, mold, foundation issues, or needs a complete renovation. You don\u2019t need to lift a finger. We handle everything after closing.",
  },
  {
    q: "How fast can you actually close?",
    a: "We can close in as little as 7 days. That said, we work on your timeline. If you need 14 days, 30 days, or longer, that\u2019s perfectly fine. You pick the date that works best for you, and we\u2019ll make it happen.",
  },
  {
    q: "Is there any cost to me?",
    a: "None whatsoever. There are zero fees, zero commissions, and zero closing costs on your end. The offer we make is the amount you receive at closing. We cover all costs associated with the transaction.",
  },
  {
    q: "What types of properties do you buy?",
    a: "We buy single-family homes, duplexes, townhomes, condos, and even vacant land across the Tampa Bay area. It doesn\u2019t matter the condition, situation, or location \u2014 if it\u2019s in Tampa Bay, we\u2019re interested in making you an offer.",
  },
];

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function SellYourHouse() {
  return (
    <div data-dark-hero>
      {/* ============================================================= */}
      {/* 1. HERO -- Dark bg with form card                              */}
      {/* ============================================================= */}
      <section
        id="offer-form"
        className="relative min-h-screen flex items-center overflow-hidden hero-bg-dark"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left -- Copy */}
            <div>
              <HeroEntrance>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
                  Sell Your Tampa Bay House Fast &mdash;
                  <span className="block text-[#F5F5F5]/60">
                    <WordReveal text="No Fees, No Hassle" delay={0.4} />
                  </span>
                </h1>
              </HeroEntrance>

              <HeroEntrance delay={0.15}>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg md:text-xl">
                  Get a fair cash offer in 24 hours. Close on your timeline.
                </p>
              </HeroEntrance>

              <HeroEntrance delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <DollarSign size={16} className="text-[#F5F5F5]/50" />
                    No fees or commissions
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-[#F5F5F5]/50" />
                    Close in as little as 7 days
                  </span>
                  <span className="flex items-center gap-2">
                    <Wrench size={16} className="text-[#F5F5F5]/50" />
                    Any condition &mdash; no repairs needed
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield size={16} className="text-[#F5F5F5]/50" />
                    No obligations, 100% free
                  </span>
                </div>
              </HeroEntrance>
            </div>

            {/* Right -- Form card */}
            <HeroEntrance delay={0.2}>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/20">
                <h2 className="text-2xl font-bold text-[#2F343A] mb-1">
                  Get Your Free Cash Offer
                </h2>
                <p className="text-[#6B6B6B] mb-6 text-sm">
                  Fill out the form and we&apos;ll get back to you within 24
                  hours.
                </p>

                <form className="space-y-4">
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

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-[#2F343A] mb-1.5"
                    >
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="123 Main St, Tampa, FL"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="condition"
                        className="block text-sm font-medium text-[#2F343A] mb-1.5"
                      >
                        Property Condition
                      </label>
                      <select
                        id="condition"
                        name="condition"
                        defaultValue=""
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380] appearance-none"
                      >
                        <option value="" disabled>
                          Condition...
                        </option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                        <option value="very-poor">Very Poor</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-[#2F343A] mb-1.5"
                      >
                        Timeline to Sell
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        defaultValue=""
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380] appearance-none"
                      >
                        <option value="" disabled>
                          Timeline...
                        </option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-weeks">1–2 Weeks</option>
                        <option value="1-month">1 Month</option>
                        <option value="2-3-months">2–3 Months</option>
                        <option value="exploring">Just Exploring</option>
                      </select>
                    </div>
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

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#3FA380] px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-[#358E6E] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
                  >
                    Get My Cash Offer
                    <ArrowRight
                      size={18}
                      className="inline-block ml-2 -mt-0.5"
                    />
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-[#6B6B6B]">
                  Your information is 100% confidential. No spam, no
                  obligations.
                </p>
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. PAIN POINTS -- Dark bg, 6 situation cards                   */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#F5F5F5]/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              We Can Help
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              We Help Homeowners in Tough Situations
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
              No matter what you&apos;re going through, we have a solution.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group shimmer-card-dark rounded-2xl border border-white/10 bg-[#2F343A]/40 p-6 lg:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#3FA380]/30 hover:shadow-[0_0_30px_rgba(63,163,128,0.15)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors duration-300 group-hover:bg-[#3FA380]/20">
                    <item.icon size={24} className="text-[#F5F5F5] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FadeIn className="py-12 text-center">
        <p className="text-[#6B6B6B]">
          Not sure if we can help? Give us a call &mdash; no pressure.{" "}
          <a
            href="tel:8135550100"
            className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
          >
            (813) 555-0100
          </a>
        </p>
      </FadeIn>

      {/* ============================================================= */}
      {/* 3. HOW IT COMPARES -- Cream bg, two-column comparison          */}
      {/* ============================================================= */}
      <section className="relative bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Compare Your Options
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              TruHome Partners vs. Traditional Selling
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
              See why homeowners choose us over listing with a traditional
              agent.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TruHome Partners Column */}
            <StaggerItem>
              <div className="shimmer-card rounded-2xl border border-emerald-200 bg-white p-8 lg:p-10 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(63,163,128,0.12)]">
                <div className="mb-6">
                  <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                    Recommended
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-[#2F343A]">
                    TruHome Partners
                  </h3>
                </div>
                <ul className="space-y-4">
                  {truHomeAdvantages.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      <span className="text-[#2F343A] font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Traditional Agent Column */}
            <StaggerItem>
              <div className="shimmer-card rounded-2xl border border-gray-200 bg-white/70 p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6">
                  <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-[#6B6B6B]">
                    Traditional
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-[#6B6B6B]">
                    Traditional Agent
                  </h3>
                </div>
                <ul className="space-y-4">
                  {traditionalDisadvantages.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X
                        size={20}
                        className="mt-0.5 shrink-0 text-red-400"
                      />
                      <span className="text-[#6B6B6B]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <FadeIn className="py-12 text-center">
        <p className="text-[#6B6B6B]">
          Skip the hassle.{" "}
          <a
            href="#offer-form"
            className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
          >
            Get your cash offer today
          </a>
          .
        </p>
      </FadeIn>

      {/* ============================================================= */}
      {/* 4. FAQ -- White bg, light variant                              */}
      {/* ============================================================= */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
              Everything you need to know about selling your house to TruHome
              Partners.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <FAQSection faqs={faqs} variant="light" />
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. CTA BANNER                                                  */}
      {/* ============================================================= */}
      <CTABanner />
    </div>
  );
}
