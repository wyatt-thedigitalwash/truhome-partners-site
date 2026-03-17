import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/sell-your-house", label: "Sell Your House" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/buyers", label: "Cash Buyers" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2F343A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/branding/logo-lockup-white.svg"
                alt="TruHome Partners"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              We buy houses in the Tampa Bay area for cash. No fees, no repairs,
              no hassle. Get a fair offer and close on your timeline.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} className="shrink-0" />
                <a href="tel:8135550100" className="hover:text-white transition-colors">
                  (813) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@truhomepartners.com" className="hover:text-white transition-colors">
                  info@truhomepartners.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={16} className="shrink-0" />
                Serving the Tampa Bay Area
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TruHome Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
