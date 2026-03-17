"use client";

import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  Shield,
  Clock,
  CheckCircle,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We make fair, honest offers — every time. No bait and switch.",
  },
  {
    icon: Clock,
    title: "Speed",
    description:
      "We close on your timeline, not ours. As fast as 7 days.",
  },
  {
    icon: CheckCircle,
    title: "Simplicity",
    description:
      "No paperwork headaches, no hidden fees. We keep it simple.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We're invested in Tampa Bay. Your neighborhood is our neighborhood.",
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

export default function AboutPage() {
  return (
    <main data-dark-hero>
      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-7xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              About TruHome Partners
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
              Tampa Bay&apos;s trusted home buying team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Founder Section                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Image */}
          <FadeIn>
            <ImagePlaceholder
              label="Founder headshot"
              aspectRatio="aspect-square"
              className="w-full"
            />
          </FadeIn>

          {/* Right — Copy */}
          <FadeIn delay={0.15}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl">
                Built on Trust, Driven by Community
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#6B6B6B]">
                TruHome Partners was founded with a simple mission — help Tampa
                Bay homeowners sell their properties quickly, fairly, and without
                the stress of the traditional real estate process. We saw too
                many homeowners stuck in difficult situations with nowhere to
                turn, and we knew there had to be a better way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
                Based right here in Tampa Bay, we&apos;re not a faceless
                corporation. We&apos;re your neighbors. We live and work in this
                community, and we treat every homeowner the way we&apos;d want
                to be treated.
              </p>
              <p className="mt-8 text-[#6B6B6B]">
                Want to learn more about how we work?{" "}
                <Link
                  href="/how-it-works"
                  className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
                >
                  See our process
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Mission & Values                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3FA380]">
                Our Values
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#2F343A] sm:text-4xl">
                What We Stand For
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F5]">
                      <Icon size={24} className="text-[#3FA380]" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#2F343A]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Service Area                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Image */}
          <FadeIn>
            <ImagePlaceholder
              label="Tampa Bay area skyline"
              className="w-full"
            />
          </FadeIn>

          {/* Right — Copy + Pills */}
          <FadeIn delay={0.15}>
            <div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Service Area
                </p>
              </div>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Proudly Serving Tampa Bay
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                We buy houses across the greater Tampa Bay area, including
                Hillsborough, Pinellas, and Pasco counties. Whether you&apos;re
                in a busy downtown neighborhood or a quiet suburban street, we
                can help.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-200 ease-out hover:bg-white/10 hover:border-white/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
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
