"use client";

import React from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ClinicLogo } from "@/components/ui/ClinicLogo";
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  Calendar,
  Heart,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface FooterProps {
  onOpenAppointmentModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal }) => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About the Clinic", href: "#about" },
    { name: "Doctors & Specialists", href: "#doctors" },
    { name: "Dental Services", href: "#services" },
    { name: "Post-Treatment Care", href: "#post-treatment-care" },
    { name: "Clinic Gallery", href: "#gallery" },
    { name: "Find Our Location", href: "#location" },
    { name: "Contact & Appointments", href: "#appointment" },
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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <ClinicLogo invert size="lg" />
            <p className="text-emerald-400 font-semibold text-sm italic">
              &ldquo;{CLINIC_INFO.tagline}&rdquo;
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Jaksh&apos;s Dental Junction is a dedicated, women-owned dental healthcare clinic in Mogappair East, Chennai. Led by Rotary Endodontist Dr. Krishnapriya G with a team of consultant specialists.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-medium">
                Founder: Dr. Krishnapriya G
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-medium">
                12 Years Practice
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-medium">
                Women-Owned
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours & Quick Actions */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Timings
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  {CLINIC_INFO.address.full}
                  <span className="block text-[11px] text-slate-400 mt-0.5 font-mono">
                    Plus Code: {CLINIC_INFO.plusCode}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={CLINIC_INFO.phone}
                  className="text-white hover:text-emerald-400 font-bold transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">
                    Monday – Saturday: 5:00 PM – 8:30 PM
                  </p>
                  <p className="text-rose-400 font-bold text-xs mt-0.5">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={handleBook}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </button>

              <a
                href={CLINIC_INFO.phone}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                Call Clinic
              </a>

              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                Get Directions
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <p>
              © {new Date().getFullYear()} Jaksh&apos;s Dental Junction. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Valayapathi Salai, Block 6, Mogappair East, Chennai, Tamil Nadu 600037
            </p>
          </div>

          <div className="text-[11px] text-slate-400 max-w-md text-center md:text-right">
            Medical Disclaimer: Content on this site is provided for general informational purposes only and does not constitute individual medical diagnosis or treatment advice. Consult with our dental team for personalized clinical recommendations.
          </div>
        </div>

      </div>
    </footer>
  );
};
