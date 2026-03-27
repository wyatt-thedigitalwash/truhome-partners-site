import type { Metadata } from "next";
import { FadeIn } from "@/components/motion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Privacy Policy | TruHome Partners",
  description:
    "Read the Privacy Policy for TruHome Partners. Learn how we collect, use, and protect your personal information.",
};

/* ------------------------------------------------------------------ */
/*  Section data                                                       */
/* ------------------------------------------------------------------ */

interface Section {
  title: string;
  blocks: Block[];
}

type Block =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "bold-paragraph"; bold: string; text: string };

const sections: Section[] = [
  {
    title: "Information We Collect",
    blocks: [
      {
        type: "paragraph",
        text: "When you use our website or submit a form, we may collect the following types of personal information:",
      },
      {
        type: "list",
        items: [
          "Full name",
          "Email address",
          "Phone number",
          "Property address",
          "Property condition and details",
          "Any additional information you voluntarily provide in form submissions or communications",
        ],
      },
    ],
  },
  {
    title: "How We Use Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We use the information we collect to:",
      },
      {
        type: "list",
        items: [
          "Evaluate your property and prepare a cash offer",
          "Communicate with you about your inquiry via phone, email, or SMS",
          "Provide and improve our services",
          "Comply with legal obligations",
        ],
      },
    ],
  },
  {
    title: "SMS/Text Messaging Policy",
    blocks: [
      {
        type: "paragraph",
        text: "By opting in to SMS communications through our website forms, you consent to receive text messages from TruHome Partners related to your property inquiry and our services. This may include:",
      },
      {
        type: "list",
        items: [
          "Offer updates and follow-ups regarding your property",
          "Appointment confirmations and reminders",
          "General information about our services",
        ],
      },
      {
        type: "bold-paragraph",
        bold: "Message frequency:",
        text: " Message frequency varies based on your inquiry and engagement.",
      },
      {
        type: "bold-paragraph",
        bold: "Message and data rates:",
        text: " Standard message and data rates may apply depending on your mobile carrier and plan.",
      },
      {
        type: "bold-paragraph",
        bold: "Opt-out:",
        text: " You may opt out of receiving SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive a final confirmation message and no further SMS messages will be sent.",
      },
      {
        type: "bold-paragraph",
        bold: "Help:",
        text: " Reply HELP to any text message for assistance, or contact us at info@truhomepartners.com.",
      },
    ],
  },
  {
    title: "Information Sharing",
    blocks: [
      {
        type: "paragraph",
        text: "We do not sell, rent, or trade your personal information to third parties. We may share your information with:",
      },
      {
        type: "list",
        items: [
          "Service providers who assist us in operating our business (e.g., title companies, closing attorneys)",
          "Legal or regulatory authorities when required by law or to protect our rights",
        ],
      },
    ],
  },
  {
    title: "Data Security",
    blocks: [
      {
        type: "paragraph",
        text: "We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.",
      },
    ],
  },
  {
    title: "Cookies and Tracking",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.",
      },
    ],
  },
  {
    title: "Third-Party Links",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    title: "Your Rights",
    blocks: [
      { type: "paragraph", text: "You have the right to:" },
      {
        type: "list",
        items: [
          "Request access to the personal information we hold about you",
          "Request correction of inaccurate information",
          "Request deletion of your personal information",
          "Opt out of SMS communications by replying STOP",
          "Opt out of email communications by clicking the unsubscribe link in any email",
        ],
      },
    ],
  },
  {
    title: "Children's Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete that information.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    blocks: [
      {
        type: "paragraph",
        text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.',
      },
    ],
  },
  {
    title: "Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:",
      },
      {
        type: "list",
        items: [
          "Email: info@truhomepartners.com",
          "Phone: (813) 555-0100",
          "Service Area: Tampa Bay, Florida",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PrivacyPage() {
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
              Privacy Policy
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
                    <div className="space-y-3">
                      <h2 className="text-lg font-semibold text-[#2F343A]">
                        {section.title}
                      </h2>
                      {section.blocks.map((block, bi) => {
                        if (block.type === "paragraph") {
                          return (
                            <p
                              key={bi}
                              className="text-[15px] text-[#6B6B6B] leading-relaxed"
                            >
                              {block.text}
                            </p>
                          );
                        }
                        if (block.type === "bold-paragraph") {
                          return (
                            <p
                              key={bi}
                              className="text-[15px] text-[#6B6B6B] leading-relaxed"
                            >
                              <strong className="text-[#2F343A]">
                                {block.bold}
                              </strong>
                              {block.text}
                            </p>
                          );
                        }
                        if (block.type === "list") {
                          return (
                            <ul
                              key={bi}
                              className="space-y-1.5 pl-5 list-disc marker:text-[#3FA380]/40"
                            >
                              {block.items.map((item) => (
                                <li
                                  key={item}
                                  className="text-[15px] text-[#6B6B6B] leading-relaxed"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return null;
                      })}
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
