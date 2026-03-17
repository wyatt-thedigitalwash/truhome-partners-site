"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/sell-your-house", label: "Sell Your House" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/buyers", label: "Cash Buyers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Homepage has green hero — white text at top (like other pages), dark after scroll
  // Other pages have dark heroes — same behavior
  const lightText = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src={lightText ? (isHome ? "/branding/logo-lockup-mono-white.svg" : "/branding/logo-lockup-white.svg") : "/branding/logo-lockup-dark.svg"}
              alt="TruHome Partners"
              className="h-8 w-auto transition-opacity duration-200"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  lightText
                    ? "text-white hover:text-white/80"
                    : "text-[#2F343A] hover:text-[#6B6B6B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sell-your-house"
              className={`ml-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.97] ${
                lightText
                  ? isHome
                    ? "border border-white text-white bg-transparent hover:bg-white hover:text-[#3FA380] hover:shadow-md"
                    : "bg-[#3FA380] text-white hover:bg-[#358E6E] hover:shadow-md"
                  : "bg-[#3FA380] text-white hover:bg-[#358E6E] hover:shadow-md"
              }`}
            >
              Get My Cash Offer
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden p-2 transition-colors duration-200 ${
              lightText && !mobileOpen ? "text-white" : "text-[#2F343A]"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-18 z-30 bg-black/40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-18 z-40 bg-white transition-all duration-300 ease-out ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-[#2F343A] transition-colors hover:bg-[#F5F5F5]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sell-your-house"
            className="mt-4 block rounded-lg bg-[#3FA380] px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#358E6E]"
            onClick={() => setMobileOpen(false)}
          >
            Get My Cash Offer
          </Link>
        </div>
      </div>
    </nav>
  );
}
