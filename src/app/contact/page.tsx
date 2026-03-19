"use client";

import { FadeIn } from "@/components/motion";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(813) 555-0100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@truhomepartners.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Tampa Bay — Hillsborough, Pinellas, and Pasco Counties",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday-Friday 9am-6pm, Saturday 10am-2pm",
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
  "Town 'n' Country",
  "Seminole Heights",
  "Ybor City",
  "Hyde Park",
  "Lutz",
  "Land O' Lakes",
  "New Port Richey",
  "Palm Harbor",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <main data-dark-hero>
      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Get In Touch
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
              Have a question or ready to get your cash offer? Reach out — we&apos;d
              love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Contact Form + Info                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Form */}
          <FadeIn>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#2F343A]">
                Send Us a Message
              </h2>

              <form className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2F343A] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2F343A] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2F343A] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(813) 555-0100"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2F343A] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#2F343A] placeholder-gray-400 transition-all focus:border-[#3FA380] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3FA380]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#3FA380] py-3.5 text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-[#358E6E] hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Right — Info Cards */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group shimmer-card flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition-all duration-300 ease-out hover:border-[#3FA380]/40 hover:shadow-sm"
                  >
                    <div className="flex-shrink-0 rounded-lg bg-[#F5F5F5] p-3 transition-colors duration-300 group-hover:bg-[#3FA380]/10">
                      <Icon size={20} className="text-[#3FA380] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#6B6B6B]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-[#2F343A]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Service Area                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

        <div className="relative mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Where We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Our Service Area
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
              We buy houses across the greater Tampa Bay area. If your property is
              in one of these communities, we&apos;d love to make you an offer.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-200 ease-out hover:bg-white/10 hover:border-white/20"
                >
                  {area}
                </span>
              ))}
            </div>
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
