"use client";

import React from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ClinicLogo } from "@/components/ui/ClinicLogo";
import {
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface FooterProps {
  onOpenAppointmentModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal }) => {
  const navLinks = [
    { name: "About the Practice", href: "#about" },
    { name: "Clinical Treatments", href: "#treatments" },
    { name: "Meet the Team", href: "#team" },
    { name: "Colgate Recognition", href: "#recognition" },
    { name: "Post-Treatment Care", href: "#post-treatment-care" },
    { name: "Clinic Photography", href: "#gallery" },
    { name: "Location & Timings", href: "#contact" },
    { name: "Book an Appointment", href: "#appointment" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBook = () => {
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
    <footer className="bg-[#203B2F] text-[#E7EEE4] pt-16 pb-12 border-t border-[#29483A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#29483A]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <ClinicLogo invert size="lg" />
            
            <p className="text-xs sm:text-sm text-[#B8CBB8] leading-relaxed max-w-sm pt-2 font-normal">
              Gentle dentistry delivered with attention, clarity and kindness. Comprehensive general and specialist dental care in Mogappair East, Chennai.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={CLINIC_INFO.colgateFeatureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-[11px] text-[#E7EEE4] border border-[#29483A] transition-colors"
              >
                <span>Colgate #ChampionsOfSmiles Feature</span>
                <ArrowUpRight className="w-3 h-3 text-[#B8CBB8]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B8CBB8]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E7EEE4]/85">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Address & Timings */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B8CBB8]">
              Practice Information
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#E7EEE4]/85 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8CBB8] shrink-0 mt-0.5" />
                <p>
                  {CLINIC_INFO.address.full}
                  <span className="block text-[11px] text-[#B8CBB8] mt-0.5 font-mono">
                    Plus Code: {CLINIC_INFO.plusCode}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8CBB8] shrink-0" />
                <a
                  href={CLINIC_INFO.phone}
                  className="text-white hover:underline font-medium"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B8CBB8] shrink-0 mt-0.5" />
                <div>
                  <p>Monday – Saturday: 5:00 PM – 8:30 PM</p>
                  <p className="text-[#B8CBB8] text-[11px]">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={handleBook}
                className="px-4 py-2 rounded-lg text-xs font-medium text-[#203B2F] bg-[#E7EEE4] hover:bg-white transition-colors"
              >
                Book an Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Dedicated Social Media Strip */}
        <div className="py-6 border-b border-[#29483A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3.5">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B8CBB8]">
              Follow us on:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#E1306C] text-[#E7EEE4] hover:text-white transition-all duration-200 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8CBB8]"
                aria-label="Follow Jaksh's Dental Junction on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#B8CBB8] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium tracking-wide">Instagram</span>
              </a>

              <a
                href="https://wa.me/918825564486"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] text-[#E7EEE4] hover:text-white transition-all duration-200 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8CBB8]"
                aria-label="Contact Jaksh's Dental Junction on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#B8CBB8] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium tracking-wide">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Direct WhatsApp Quick Prompt */}
          <div className="text-xs text-[#B8CBB8] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Evening Consultations &bull; Mon–Sat 5:00 PM – 8:30 PM</span>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#B8CBB8]">
          <div>
            © {new Date().getFullYear()} Jaksh&apos;s Dental Junction. All rights reserved.
          </div>

          <div className="max-w-md text-left md:text-right leading-relaxed text-[#B8CBB8]/80">
            Medical Disclaimer: Content on this site is provided for general health awareness and does not substitute individualized clinical evaluation. Consult our dental team for personal treatment planning.
          </div>
        </div>

      </div>
    </footer>
  );
};
