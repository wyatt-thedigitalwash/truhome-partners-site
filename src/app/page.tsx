"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  FileText,
  Calendar,
  DollarSign,
  Wrench,
  Clock,
  Users,
  Star,
  ArrowRight,
  Shield,
  AlertTriangle,
  KeyRound,
  HeartCrack,
  FileWarning,
  Hammer,
  UserX,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTABanner from "@/components/CTABanner";

import {
  FadeIn,
  HeroEntrance,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "@/components/motion";

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const socialProofStats = [
  { label: "Homes Purchased", value: "100+" },
  { label: "Tampa Bay\u2019s Trusted Home Buyer", value: "" },
  { label: "Close in as Little as 7 Days", value: "" },
  { label: "5-Star Rated", value: "\u2605" },
];

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description:
      "Tell us about your property. Fill out the form or give us a call \u2014 no commitment required.",
  },
  {
    icon: FileText,
    title: "Get Your Offer",
    description:
      "We\u2019ll evaluate your property and present a fair, no-obligation cash offer within 24 hours.",
  },
  {
    icon: Calendar,
    title: "Close On Your Timeline",
    description:
      "Pick your closing date \u2014 as fast as 7 days or on your schedule. We handle the paperwork.",
  },
];

const situations = [
  {
    icon: AlertTriangle,
    title: "Foreclosure",
    description:
      "Facing foreclosure? We can close fast and help you avoid a hit to your credit. Get a fair cash offer before the bank takes over.",
  },
  {
    icon: KeyRound,
    title: "Inherited Property",
    description:
      "Inherited a house you don\u2019t want or can\u2019t maintain? We\u2019ll buy it as-is so you can move on without the burden.",
  },
  {
    icon: HeartCrack,
    title: "Divorce",
    description:
      "Going through a divorce and need to sell quickly? We make it simple to split the asset and close on your terms.",
  },
  {
    icon: FileWarning,
    title: "Tax Liens & Back Taxes",
    description:
      "Behind on property taxes? We work with homeowners facing tax liens to provide a fast, fair solution.",
  },
  {
    icon: Hammer,
    title: "Code Violations & Repairs Needed",
    description:
      "Facing code violations or expensive repairs? We buy houses in any condition \u2014 no fix-up required.",
  },
  {
    icon: UserX,
    title: "Bad Tenants or Vacant Property",
    description:
      "Dealing with problem tenants or sitting on a vacant property? We\u2019ll take it off your hands quickly and hassle-free.",
  },
];

const trustSignals = [
  {
    icon: DollarSign,
    title: "No Fees or Commissions",
    stat: "$0",
    description:
      "Keep more of your money. We cover all closing costs \u2014 no agent fees, no hidden charges.",
  },
  {
    icon: Wrench,
    title: "Any Condition",
    stat: "As-Is",
    description:
      "Don\u2019t spend a dime on repairs. We buy houses as-is, no matter the condition.",
  },
  {
    icon: Clock,
    title: "Fast Closing",
    stat: "7 Days",
    description:
      "Need to sell quickly? We can close in as little as 7 days with cash in hand.",
  },
  {
    icon: Users,
    title: "Local Tampa Bay Team",
    stat: "Local",
    description:
      "We\u2019re your neighbors. Our team knows the Tampa Bay market inside and out.",
  },
];

const counterStats = [
  { target: 100, suffix: "+", label: "Homes Purchased", decimals: 0 },
  { target: 10, prefix: "$", suffix: "M+", label: "In Offers Made", decimals: 0 },
  { target: 7, suffix: "", label: "Average Days to Close", decimals: 0 },
  { target: 4.9, suffix: "", label: "Star Rating", decimals: 1 },
];

const testimonials = [
  {
    name: "Mark R.",
    situation: "Sold inherited property in Seminole Heights",
    quote:
      "I inherited a house that needed a ton of work. TruHome Partners gave me a fair offer and we closed in two weeks. No stress, no repairs. Exactly what I needed.",
    rating: 5,
  },
  {
    name: "Sandra L.",
    situation: "Avoided foreclosure in Brandon",
    quote:
      "I was behind on payments and didn\u2019t know what to do. They walked me through everything and helped me avoid foreclosure. I\u2019m so grateful for their honesty and speed.",
    rating: 5,
  },
  {
    name: "James T.",
    situation: "Relocated from Temple Terrace",
    quote:
      "Got a job offer out of state and needed to sell fast. TruHome Partners made it easy \u2014 cash offer in a day, closed on my timeline. Couldn\u2019t have asked for more.",
    rating: 5,
  },
];

const serviceAreas = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Brandon",
  "Riverview",
  "Wesley Chapel",
  "Plant City",
  "Temple Terrace",
  "Town \u2019n\u2019 Country",
  "Seminole Heights",
  "Ybor City",
  "Hyde Park",
  "Lutz",
  "Land O\u2019 Lakes",
  "New Port Richey",
  "Palm Harbor",
];

const faqs = [
  {
    q: "How fast can you close?",
    a: "We can close in as little as 7 days. However, we work on your timeline \u2014 if you need 30 days or more, that\u2019s perfectly fine too. You pick the closing date.",
  },
  {
    q: "Do I need to make repairs?",
    a: "Absolutely not. We buy houses in any condition \u2014 roof damage, foundation issues, mold, fire damage, you name it. We handle all repairs after closing.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "None. There are zero fees, zero commissions, and zero closing costs for you. The offer we make is the amount you receive. We cover everything.",
  },
  {
    q: "How do you determine your offer?",
    a: "We evaluate your property based on its location, condition, and current market values in your area. Our goal is to give you a fair, competitive cash offer \u2014 no lowballing.",
  },
  {
    q: "What if I\u2019m behind on payments?",
    a: "We work with homeowners facing financial difficulty all the time. Whether you\u2019re behind on mortgage payments, facing foreclosure, or dealing with tax liens, we can help you find a solution quickly.",
  },
];

/* ================================================================== */
/*  FAQ ACCORDION ITEM                                                 */
/* ================================================================== */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.08]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-white sm:text-lg pr-4">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-gray-400" />
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
            <p className="pb-5 text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function Home() {
  return (
    <div data-dark-hero>
      {/* ============================================================= */}
      {/* 1. HERO — Dark bg, full viewport, radial glow, floating form  */}
      {/* ============================================================= */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden hero-bg-green"
      >

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Copy */}
            <div>
              <HeroEntrance>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
                  Sell Your Tampa Bay Home
                  <span className="block text-white/70">
                    Fast &mdash; For Cash
                  </span>
                </h1>
              </HeroEntrance>

              <HeroEntrance delay={0.15}>
                <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg md:text-xl">
                  No fees. No repairs. No hassle. Get a fair cash offer and close
                  on your timeline &mdash; whether that&apos;s 7 days or 30.
                </p>
              </HeroEntrance>

              <HeroEntrance delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <Shield size={16} className="text-white/60" />
                    No obligations
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-white/60" />
                    Close in 7 days
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign size={16} className="text-white/60" />
                    Zero fees
                  </span>
                </div>
              </HeroEntrance>
            </div>

            {/* Right — Form card */}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#2F343A] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hero-email"
                        className="block text-sm font-medium text-[#2F343A] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="hero-email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#2F343A] mb-1.5"
                      >
                        Phone Number
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
                  No fees. No obligations. Close in as little as 7 days.
                </p>
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. SOCIAL PROOF BAR — Slim trust stats strip                   */}
      {/* ============================================================= */}
      <section className="bg-[#F5F5F5] border-b border-[#e5e5e5]">
        <FadeIn className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-y-3 divide-x divide-[#d5d5d5]">
            {socialProofStats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 sm:px-8 text-sm font-medium text-[#2F343A]"
              >
                {stat.value && (
                  <span className="font-bold">{stat.value}</span>
                )}
                <span className="text-[#6B6B6B]">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ============================================================= */}
      {/* 3. HOW IT WORKS — White bg, step cards with connecting line    */}
      {/* ============================================================= */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              The Process
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
              Selling your house shouldn&apos;t be complicated. Here&apos;s our
              simple 3-step process.
            </p>
          </FadeIn>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <StaggerItem key={step.title}>
                  <div className="relative text-center p-8 lg:p-10 rounded-2xl border border-gray-200 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-t-2 hover:border-t-[#3FA380]">
                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3FA380]">
                      <step.icon size={28} className="text-white" />
                    </div>
                    <div className="mt-3 mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#2F343A]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[#6B6B6B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. WHO WE HELP — Dark bg, 6 situation cards                   */}
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
              We Buy Houses in Any Situation
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
              No matter what you&apos;re going through, we can help.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-white/10 bg-[#2F343A]/40 p-6 lg:p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(245,240,235,0.15)] hover:shadow-[0_0_20px_rgba(245,240,235,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <item.icon size={24} className="text-[#F5F5F5]" />
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
          Dealing with one of these situations?{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
          >
            Let&apos;s talk
          </Link>
          .
        </p>
      </FadeIn>

      {/* ============================================================= */}
      {/* 5. WHY TRUHOME — White bg, trust signal cards                  */}
      {/* ============================================================= */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              Why TruHome Partners
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
              We make selling your house simple, fast, and fair.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <StaggerItem key={signal.title}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F5F5]">
                    <signal.icon size={26} className="text-[#3FA380]" />
                  </div>
                  <div className="mt-4 text-2xl font-bold text-[#3FA380]">
                    {signal.stat}
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-[#2F343A]">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 6. BY THE NUMBERS — Cream bg, animated counters                */}
      {/* ============================================================= */}
      <section className="relative bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Our Track Record
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              By The Numbers
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {counterStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#3FA380] sm:text-5xl lg:text-6xl">
                    <CountUp
                      target={stat.target}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-[#6B6B6B] sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 7. TESTIMONIALS — White bg, elegant cards with shadows         */}
      {/* ============================================================= */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
              Real stories from Tampa Bay homeowners we&apos;ve helped.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <div className="h-full rounded-2xl bg-white border border-gray-200 p-8 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#2F343A] leading-relaxed text-[15px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3FA380] text-sm font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2F343A]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#6B6B6B]">
                        {testimonial.situation}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FadeIn className="py-12 text-center">
        <p className="text-[#6B6B6B]">
          <Link
            href="/testimonials"
            className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
          >
            See more stories from Tampa Bay homeowners &rarr;
          </Link>
        </p>
      </FadeIn>

      {/* ============================================================= */}
      {/* 8. SERVICE AREA — Cream bg, area pill tags for local SEO       */}
      {/* ============================================================= */}
      <section className="relative bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
              Where We Buy
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl lg:text-5xl">
              Proudly Serving the Tampa Bay Area
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
              We buy houses across Hillsborough, Pinellas, and Pasco counties.
              If you&apos;re in the Tampa Bay area, we want to make you an
              offer.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-6 justify-center">
                <MapPin size={20} className="text-[#3FA380]" />
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]">
                  Areas We Serve
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-gray-200 bg-[#F5F5F5] px-4 py-2 text-sm font-medium text-[#2F343A] transition-all duration-200 ease-out hover:bg-[#3FA380] hover:text-white hover:border-[#3FA380]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 9. FAQ PREVIEW — Dark bg, accordion                            */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#F5F5F5]/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Common Questions From Homeowners
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-[#2F343A]/30 px-6 sm:px-8">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              Have more questions? Visit our FAQ page
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 10. CTA BANNER                                                 */}
      {/* ============================================================= */}
      <CTABanner />
    </div>
  );
}
