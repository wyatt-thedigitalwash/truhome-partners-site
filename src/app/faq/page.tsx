"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";
import CTABanner from "@/components/CTABanner";
import { FAQSection } from "@/components/FAQAccordion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const sellingProcessFaqs = [
  {
    q: "How does the process work?",
    a: "It\u2019s simple: fill out our form or give us a call, we\u2019ll learn about your property, and we\u2019ll present you with a fair cash offer within 24 hours. If you accept, we close on your schedule.",
  },
  {
    q: "How quickly can you close?",
    a: "We can close in as little as 7 days. Most closings happen within 7-14 days, but we\u2019ll work with whatever timeline you need \u2014 even if that\u2019s a few months out.",
  },
  {
    q: "Do I need a real estate agent?",
    a: "No. We buy directly from you, so there\u2019s no need for an agent, and you save on commission fees.",
  },
];

const costsFeesFaqs = [
  {
    q: "Are there any fees or commissions?",
    a: "None. There are zero fees, zero commissions, and zero closing costs when you sell to us. The offer we make is the amount you receive.",
  },
  {
    q: "Who pays closing costs?",
    a: "We do. You won\u2019t pay a dime in closing costs.",
  },
  {
    q: "Is there any obligation after I get an offer?",
    a: "Absolutely not. Our offers are completely no-obligation. If it doesn\u2019t work for you, no hard feelings.",
  },
];

const propertyConditionsFaqs = [
  {
    q: "Do I need to make repairs before selling?",
    a: "No repairs needed. We buy houses in any condition \u2014 from move-in ready to major renovations needed.",
  },
  {
    q: "Do I need to clean out the house?",
    a: "No. Leave behind anything you don\u2019t want. We\u2019ll handle the cleanout.",
  },
  {
    q: "What types of properties do you buy?",
    a: "We buy single-family homes, multi-family properties, condos, townhomes, and vacant land across the Tampa Bay area.",
  },
];

const timelineLogisticsFaqs = [
  {
    q: "How do you determine your offer price?",
    a: "We evaluate your property based on its location, condition, market value, and repair costs. Our goal is to make a fair offer that works for both of us.",
  },
  {
    q: "What if I'm behind on mortgage payments?",
    a: "We work with homeowners in pre-foreclosure regularly. We can often close before your foreclosure date and help you avoid the impact on your credit.",
  },
  {
    q: "Can I sell if I have tenants?",
    a: "Yes. We buy tenant-occupied properties. You don\u2019t need to evict anyone before selling.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FAQPage() {
  return (
    <main data-dark-hero>
      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-7xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
              Everything you need to know about selling your house to TruHome
              Partners.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Selling Process FAQs                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380] mb-6">
              Selling Process
            </p>
            <FAQSection
              faqs={sellingProcessFaqs}
              variant="light"
            />
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Costs & Fees FAQs                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380] mb-6">
              Costs & Fees
            </p>
            <FAQSection
              faqs={costsFeesFaqs}
              variant="light"
            />
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Property Conditions FAQs                                   */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380] mb-6">
              Property Conditions
            </p>
            <FAQSection
              faqs={propertyConditionsFaqs}
              variant="light"
            />
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Timeline & Logistics FAQs                                  */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380] mb-6">
              Timeline & Logistics
            </p>
            <FAQSection
              faqs={timelineLogisticsFaqs}
              variant="light"
            />
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12 text-center">
            <p className="text-[#6B6B6B]">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
              >
                We&apos;re happy to chat
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  CTA Banner                                                 */}
      {/* ---------------------------------------------------------- */}
      <CTABanner />
    </main>
  );
}
