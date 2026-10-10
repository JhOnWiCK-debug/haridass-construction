"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Our Team", href: "#team" },
    { name: "Recognition", href: "#recognition" },
    { name: "Clinic Gallery", href: "#gallery" },
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
            ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D9E6DE] py-3.5 shadow-xs"
            : "bg-[#F7F5EF]/90 backdrop-blur-xs border-b border-[#D9E6DE]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo & Wordmark */}
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="focus:outline-none focus:ring-1 focus:ring-[#176B57] rounded-lg"
              aria-label="Jaksh's Dental Junction Home"
            >
              <ClinicLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-[#18332E]/80 hover:text-[#176B57] transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Instagram, Phone & Book CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Instagram link */}
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#65756F] hover:text-[#176B57] transition-colors rounded-full hover:bg-[#EEF5EF]"
                aria-label="Visit Jaksh's Dental Junction on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Discreet Phone */}
              <a
                href={CLINIC_INFO.phone}
                className="text-xs font-medium text-[#176B57] hover:text-[#125544] transition-colors flex items-center gap-1.5"
                aria-label={`Call Clinic at ${CLINIC_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#65756F]" />
                <span className="hidden xl:inline">{CLINIC_INFO.phoneDisplay}</span>
              </a>

              {/* Refined Book Appointment Button */}
              <button
                onClick={handleBookClick}
                className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide text-white bg-[#176B57] hover:bg-[#125544] active:bg-[#125544] transition-all shadow-xs"
              >
                Book an Appointment
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#65756F] hover:text-[#176B57]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={CLINIC_INFO.phone}
                className="p-2 text-[#176B57] hover:bg-[#EEF5EF] rounded-lg"
                aria-label="Call clinic"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#18332E] hover:bg-[#EEF5EF] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B57]"
                aria-label="Toggle navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#18332E]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FFFFFF] shadow-xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#D9E6DE] z-10 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9E6DE]">
                <ClinicLogo size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#65756F] hover:text-[#176B57]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#18332E] hover:bg-[#EEF5EF] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D9E6DE] space-y-3">
              <button
                onClick={handleBookClick}
                className="w-full py-2.5 rounded-full text-center text-xs font-medium text-white bg-[#176B57] hover:bg-[#125544] transition-colors"
              >
                Book an Appointment
              </button>

              <a
                href={CLINIC_INFO.phone}
                className="w-full py-2.5 rounded-full text-center text-xs font-medium text-[#176B57] bg-[#EEF5EF] hover:bg-[#EEF5EF]/80 border border-[#D9E6DE] flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>

              <div className="pt-2 text-[11px] text-[#65756F] text-center">
                Mon–Sat: 5:00 PM – 8:30 PM &nbsp;•&nbsp; Sunday Closed
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
