import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Terms & Conditions | TruHome Partners",
  description:
    "Read the Terms & Conditions for TruHome Partners. Learn about our policies, disclaimers, and your rights when using our services.",
};

/* ------------------------------------------------------------------ */
/*  Section data                                                       */
/* ------------------------------------------------------------------ */

const sections = [
  {
    title: "Agreement to Terms",
    content:
      "By accessing or using the TruHome Partners website and services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "Services",
    content:
      "TruHome Partners provides real estate purchasing services in the Tampa Bay area. We buy residential properties for cash. Our services include property evaluation, cash offers, and facilitation of real estate transactions.",
  },
  {
    title: "No Obligation",
    content:
      "Submitting a form or requesting an offer through our website does not obligate you to sell your property. All offers presented by TruHome Partners are no-obligation and can be accepted or declined at your discretion.",
  },
  {
    title: "Information Accuracy",
    content:
      "You agree to provide accurate, current, and complete information when using our forms and services. TruHome Partners reserves the right to adjust or withdraw any offer if information provided is found to be inaccurate or misleading.",
  },
  {
    title: "Communication Consent",
    content:
      "By submitting a form on our website and checking the SMS consent checkbox, you expressly consent to receive communications from TruHome Partners, including but not limited to phone calls, text messages (SMS/MMS), and emails regarding your property inquiry and our services. Message and data rates may apply. Message frequency varies. You may opt out of SMS communications at any time by replying STOP to any message.",
  },
  {
    title: "Privacy",
    content:
      "Your use of our services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.",
    hasPrivacyLink: true,
  },
  {
    title: "Intellectual Property",
    content:
      'All content on this website, including text, graphics, logos, images, and software, is the property of TruHome Partners and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.',
  },
  {
    title: "Limitation of Liability",
    content:
      'TruHome Partners provides this website and its services on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of any information on this website. In no event shall TruHome Partners be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.',
  },
  {
    title: "Governing Law",
    content:
      "These Terms & Conditions are governed by and construed in accordance with the laws of the State of Florida. Any disputes arising from these terms shall be resolved in the courts of Hillsborough County, Florida.",
  },
  {
    title: "Changes to Terms",
    content:
      "TruHome Partners reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website after any changes constitutes acceptance of the updated terms.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about these Terms & Conditions, please contact us at info@truhomepartners.com or call (813) 555-0100.",
    hasContactLinks: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TermsPage() {
  return (
    <div data-dark-hero>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark" />

        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Legal
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Terms &amp; Conditions
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              Last updated: March 27, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-3xl">
          <div className="space-y-0 rounded-2xl border border-gray-200 bg-white overflow-hidden">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.03}>
                <div className="border-b border-gray-200 last:border-b-0 px-6 sm:px-8 py-6">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-mono font-semibold text-[#3FA380]/50 shrink-0 pt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-[#2F343A]">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-[15px] text-[#6B6B6B] leading-relaxed">
                        {section.hasPrivacyLink ? (
                          <>
                            Your use of our services is also governed by our{" "}
                            <Link
                              href="/privacy"
                              className="font-medium text-[#3FA380] underline underline-offset-2 transition-colors hover:text-[#358E6E]"
                            >
                              Privacy Policy
                            </Link>
                            , which describes how we collect, use, and protect
                            your personal information.
                          </>
                        ) : section.hasContactLinks ? (
                          <>
                            If you have questions about these Terms &amp;
                            Conditions, please contact us at{" "}
                            <a
                              href="mailto:info@truhomepartners.com"
                              className="font-medium text-[#3FA380] underline underline-offset-2 transition-colors hover:text-[#358E6E]"
                            >
                              info@truhomepartners.com
                            </a>{" "}
                            or call{" "}
                            <a
                              href="tel:8135550100"
                              className="font-medium text-[#3FA380] underline underline-offset-2 transition-colors hover:text-[#358E6E]"
                            >
                              (813) 555-0100
                            </a>
                            .
                          </>
                        ) : (
                          section.content
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
