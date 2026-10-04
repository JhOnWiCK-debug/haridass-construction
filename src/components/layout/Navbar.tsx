"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ClinicLogo } from "@/components/ui/ClinicLogo";

interface NavbarProps {
  onOpenAppointmentModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Services", href: "#services" },
    { name: "Post-Treatment Care", href: "#post-treatment-care" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenAppointmentModal) {
      onOpenAppointmentModal();
    } else {
      const target = document.querySelector("#appointment");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100/80 py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        {/* Top Mini Bar for Timings & Phone (Desktop only) */}
        <div className="hidden lg:block border-b border-emerald-50/80 pb-2 mb-2 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium text-emerald-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Valayapathi Salai, Mogappair East, Chennai 600037
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Mon–Sat: 5:00 PM – 8:30 PM (Sunday Closed)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px] border border-emerald-200/60">
                ✨ Women-Owned Practice
              </span>
              <a
                href={CLINIC_INFO.phone}
                className="flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl"
              aria-label="Jaksh's Dental Junction Home"
            >
              <ClinicLogo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={CLINIC_INFO.phone}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors focus:ring-2 focus:ring-emerald-500"
                aria-label={`Call Clinic at ${CLINIC_INFO.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="hidden md:inline">{CLINIC_INFO.phoneDisplay}</span>
                <span className="md:hidden">Call</span>
              </a>

              <button
                onClick={handleBookClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-sm shadow-emerald-600/30 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={CLINIC_INFO.phone}
                className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200"
                aria-label="Call clinic"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <ClinicLogo size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={handleBookClick}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <a
                href={CLINIC_INFO.phone}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>

              <div className="mt-2 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600">
                <p className="font-semibold text-emerald-950 flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" /> Timings
                </p>
                <p>Mon – Sat: 5:00 PM – 8:30 PM</p>
                <p className="text-amber-700 font-medium">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
