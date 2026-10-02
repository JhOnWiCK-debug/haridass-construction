"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight, MessageSquare, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Process", href: "#process" },
    { label: "Estimate", href: "#estimator" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090a0c]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#090a0c]/90 via-[#090a0c]/50 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            {/* Architectural Monogram Icon */}
            <div className="relative w-10 h-10 border border-[#c5a880]/50 flex items-center justify-center bg-black/60 group-hover:border-[#c5a880] transition-colors">
              <span className="font-serif text-lg font-bold text-[#c5a880] tracking-wider">
                HC
              </span>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#c5a880]" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#c5a880]" />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-bold tracking-tight text-white group-hover:text-[#dfbe99] transition-colors leading-none">
                HARIDASS CONSTRUCTION
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.16em] uppercase text-gray-400 mt-1">
                Real Estate Builders • Chennai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#c5a880] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider text-gray-200 hover:text-white border border-white/10 hover:border-white/30 rounded-sm bg-white/5 transition-all"
              title="Call Haridass Construction"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#090a0c] bg-[#c5a880] hover:bg-[#dfbe99] transition-colors rounded-sm shadow-md"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[#090a0c]/98 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold mb-4 border-b border-white/10 pb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-xl font-serif text-gray-200 hover:text-[#c5a880] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 space-y-3">
            <div className="text-xs text-gray-400 flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#c5a880]" />
              <span>Ambattur, Chennai • 600053</span>
            </div>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full py-3 px-4 bg-white/10 border border-white/15 text-white font-mono text-sm font-semibold flex items-center justify-center gap-2 rounded-sm"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 rounded-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Enquiry
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 bg-[#c5a880] text-[#090a0c] text-xs uppercase tracking-wider font-bold rounded-sm"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
