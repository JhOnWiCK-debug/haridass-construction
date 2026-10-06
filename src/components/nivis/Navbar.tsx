"use client";

import React, { useState, useEffect } from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  Phone,
  MessageCircle,
  Calendar,
  Menu,
  X,
  Download,
  MapPin,
  Heart,
  ShoppingBag,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  onOpenAppointment: () => void;
}

export function Navbar({ onOpenAppointment }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Care & Services", href: "#services" },
    { label: "The Care Behind Nivis", href: "#care-behind-nivis" },
    { label: "Stories", href: "#stories" },
    { label: "Pet Store", href: "#pet-store" },
    { label: "Urgency Guide", href: "#urgency-guide" },
    { label: "Pet Passport", href: "#pet-passport" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md shadow-sm border-b border-[#1e242b]/10 py-3"
          : "bg-[#faf7f2] py-4 border-b border-[#1e242b]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#153e35] text-[#faf7f2] flex items-center justify-center font-serif text-2xl font-bold tracking-tighter shadow-sm transition-transform duration-300 group-hover:scale-105">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#153e35] leading-none">
                NIVIS
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#5e6872] font-medium mt-1">
                Pet Clinic & Pet Store
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#1e242b]/80 hover:text-[#153e35] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#153e35] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href={`tel:${NIVIS_DATA.contact.phoneTel}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-full bg-[#f4efe6] text-[#1e242b] hover:bg-[#e8e2d5] transition-colors"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-[#153e35]" />
              <span className="hidden md:inline">{NIVIS_DATA.contact.phone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                NIVIS_DATA.contact.defaultWhatsappText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-full bg-[#eaf4ed] text-[#153e35] hover:bg-[#d6ebd9] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            {/* Book Visit Primary CTA */}
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-full bg-[#153e35] text-[#faf7f2] hover:bg-[#1b4d3e] shadow-sm hover:shadow transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Visit</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-full bg-[#153e35] text-white"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1e242b] hover:bg-[#f4efe6] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf7f2] border-b border-[#1e242b]/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-sm font-medium text-[#1e242b] hover:bg-[#f4efe6] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#8fa89b]">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1e242b]/10 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium rounded-xl bg-[#f4efe6] text-[#1e242b]"
              >
                <Phone className="w-4 h-4 text-[#153e35]" />
                <span>Call Clinic</span>
              </a>

              <a
                href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                  NIVIS_DATA.contact.defaultWhatsappText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium rounded-xl bg-[#eaf4ed] text-[#153e35]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-xl bg-[#153e35] text-[#faf7f2] shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment Visit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
