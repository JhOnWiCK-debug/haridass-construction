"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, ArrowUpRight, Phone, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Bento Pillars", href: "#pillars" },
    { label: "3-Step Engine", href: "#process" },
    { label: "Economics & ROI", href: "#economics" },
    { label: "Call Proof", href: "#proof" },
    { label: "BPO Comparison", href: "#comparison" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#091322] border border-emerald-500/40 p-2 shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-transform duration-300 group-hover:scale-105">
              {/* Custom SVG Nexum Solar Core */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                  stroke="#00ff88"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3.5" fill="#00f0ff" />
                <path
                  d="M12 2V8.5M12 15.5V22M4 7L9.5 10M14.5 14L20 17M20 7L14.5 10M9.5 14L4 17"
                  stroke="#00f0ff"
                  strokeWidth="1.2"
                  strokeOpacity="0.8"
                />
              </svg>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-sm -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-wider text-white font-mono group-hover:text-emerald-300 transition-colors">
                HOUSE OF NEXUM
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-400 font-mono">
                B2B Solar Outbound Pods
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase font-mono tracking-wider text-gray-300 hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Live Badge & Discovery CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>MEX-US PODS LIVE</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl p-px font-mono text-xs font-semibold uppercase tracking-wider text-white focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 transition-all duration-300 group-hover:opacity-100 opacity-70 animate-pulse-glow" />
              <span className="relative flex items-center gap-2 rounded-xl bg-[#050b16] px-4 py-2.5 transition-all duration-300 group-hover:bg-[#081224] group-hover:shadow-[0_0_25px_rgba(0,255,136,0.35)]">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>Book Discovery Call</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-xl border border-white/10 bg-[#070e1b]/95 backdrop-blur-xl space-y-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-mono text-gray-200 hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider text-center"
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
