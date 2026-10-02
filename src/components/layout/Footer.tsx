"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, MessageSquare, ArrowUp, Star } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/constructionData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Customer Reviews", href: "#reviews" },
    { label: "Cost Estimator", href: "#estimator" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#060708] border-t border-white/10 pt-16 pb-24 md:pb-16 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Company Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#c5a880]/50 flex items-center justify-center bg-black/60">
                <span className="font-serif text-base font-bold text-[#c5a880]">
                  HC
                </span>
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-wide">
                HARIDASS CONSTRUCTION
              </span>
            </div>

            <p className="text-gray-300 text-sm font-light leading-relaxed max-w-md">
              Real Estate Builders &amp; Construction Company based in Ambattur, Chennai, Tamil Nadu. Focused on dependable construction, quality materials, and refined workmanship.
            </p>

            <div className="pt-2 space-y-2 text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  No. 48, 4th Street, East Balaji Nagar, Kallikuppam, Ambattur, Chennai, Tamil Nadu 600053
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-mono text-sm text-white hover:text-[#c5a880] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Google review pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm mt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-medium">4.8 / 5</span>
              <span className="text-gray-400">• 21 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold mb-4">
              Construction Services
            </div>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] text-gray-400 uppercase">Chennai</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} HARIDASS CONSTRUCTION. All rights reserved. Real Estate Builders &amp; Construction Company.
          </div>

          <div className="flex items-center gap-6">
            <span>Ambattur, Chennai 600053</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#c5a880]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
