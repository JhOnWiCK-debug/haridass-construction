"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar, Menu, X, Clock, MapPin, Heart } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface NavbarProps {
  onOpenAppointment: () => void;
}

export function Navbar({ onOpenAppointment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Care & Services", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Stories", href: "#stories" },
    { label: "The Clinic", href: "#clinic" },
    { label: "Pet Care Tools", href: "#pet-care-tools" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      {/* Top subtle emergency / timing announcement strip */}
      <div className="bg-[#11161b] text-[#faf8f5] text-xs font-medium py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300">
              Open Daily 9:00 AM – 9:00 PM · 2, Erikarai St, Perungudi, Chennai
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="hidden md:inline-flex items-center gap-1">
              <span className="text-amber-400">★★★★★</span> 5.0 Google Rating (6 Reviews)
            </span>
            <a
              href={`tel:${VETRI_DATA.phone}`}
              className="inline-flex items-center gap-1 font-semibold text-white hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> {VETRI_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-[#e8e2d5]/80 py-3"
            : "bg-[#faf8f5] border-b border-[#e8e2d5]/50 py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#0f4c3a] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <span className="font-serif font-bold text-xl tracking-tight">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-tight text-[#11161b] leading-tight group-hover:text-[#0f4c3a] transition-colors">
                  VETRI
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5e6872]">
                  Pet Hospital & Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#11161b]/80 hover:text-[#0f4c3a] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0f4c3a] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={VETRI_DATA.whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0f4c3a] bg-[#0f4c3a]/8 hover:bg-[#0f4c3a]/15 rounded-sm transition-colors"
                title="Chat with Vetri on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href={`tel:${VETRI_DATA.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#11161b] hover:text-[#0f4c3a] border border-[#d8d0c4] hover:border-[#0f4c3a] rounded-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0f4c3a]" />
                {VETRI_DATA.phone}
              </a>

              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] active:bg-[#0b382b] rounded-sm shadow-sm hover:shadow transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Visit
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#0f4c3a] rounded-sm"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#11161b] hover:text-[#0f4c3a] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#e8e2d5] bg-[#faf8f5] px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#11161b] py-1 border-b border-[#e8e2d5]/60 hover:text-[#0f4c3a]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0f4c3a] rounded-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Visit
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${VETRI_DATA.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#11161b] border border-[#d8d0c4] rounded-sm bg-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0f4c3a]" />
                  Call Now
                </a>
                <a
                  href={VETRI_DATA.whatsappLinks.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#0f4c3a] bg-[#0f4c3a]/10 rounded-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="text-xs text-[#5e6872] pt-2 border-t border-[#e8e2d5] space-y-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0f4c3a]" />
                <span>Open daily: 9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0f4c3a]" />
                <span>2, Erikarai St, Kurinji Nagar, Perungudi</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
