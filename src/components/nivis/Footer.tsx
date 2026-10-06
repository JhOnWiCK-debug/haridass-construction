"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  Navigation,
  ShieldCheck,
} from "lucide-react";

interface FooterProps {
  onOpenAppointment?: () => void;
}

export function Footer({ onOpenAppointment }: FooterProps) {
  return (
    <footer className="bg-[#111714] text-[#faf7f2] pt-16 pb-28 sm:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info & Women-Owned Badge (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#153e35] text-white flex items-center justify-center font-serif text-xl font-bold border border-white/10">
                N
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                NIVIS
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-white/60 mb-3 font-medium">
              Pet Clinic & Pet Store • Thiruverkadu
            </p>

            <p className="text-xs text-white/70 leading-relaxed mb-6 font-light max-w-sm">
              Compassionate veterinary care and everyday pet essentials, all in one place.
              Dedicated to unhurried listening and loving clinical handling.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium border border-white/10">
                <Heart className="w-3 h-3 text-[#c86343] fill-[#c86343]" />
                <span>{NIVIS_DATA.identity} Business</span>
              </span>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[11px] text-amber-300 border border-white/10">
                <Star className="w-3 h-3 fill-amber-300" />
                <span className="font-bold">{NIVIS_DATA.rating.score} ★</span>
                <span className="text-white/60">({NIVIS_DATA.rating.count} Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#top" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Care & Services
                </a>
              </li>
              <li>
                <a href="#care-behind-nivis" className="hover:text-white transition-colors">
                  The Care Behind Nivis
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Recovery Stories
                </a>
              </li>
              <li>
                <a href="#pet-store" className="hover:text-white transition-colors">
                  Pet Store
                </a>
              </li>
              <li>
                <a href="#pet-passport" className="hover:text-white transition-colors">
                  Pet Passport Hub
                </a>
              </li>
              <li>
                <a href="#urgency-guide" className="hover:text-white transition-colors">
                  Pet Urgency Guide
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic Hours & Doctor (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Hours & Clinical Care
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">{NIVIS_DATA.hours.days}</div>
                  <div className="text-white/70">
                    Current listed closing time: {NIVIS_DATA.hours.closingTime}
                  </div>
                  <div className="text-[10px] text-white/50 mt-1">
                    Call ahead to confirm today&apos;s doctor availability.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-[11px] text-white/60">Veterinarian:</div>
                <div className="font-medium text-white mt-0.5">
                  {NIVIS_DATA.doctorMentioned} • {NIVIS_DATA.doctorRole}
                </div>
                <div className="text-[10px] text-white/50 italic mt-0.5">
                  &quot;She is very caring and loving with pets.&quot;
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Visit or Contact
            </h4>
            <address className="not-italic text-xs text-white/75 space-y-2 leading-relaxed mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c86343] shrink-0 mt-0.5" />
                <div>
                  {NIVIS_DATA.location.landmark}
                  <br />
                  {NIVIS_DATA.location.doorNo}
                  <br />
                  {NIVIS_DATA.location.area}
                  <br />
                  {NIVIS_DATA.location.city} {NIVIS_DATA.location.pincode}
                </div>
              </div>
            </address>

            <div className="space-y-2">
              <a
                href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                className="flex items-center gap-2 text-xs text-white hover:text-emerald-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{NIVIS_DATA.contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                  NIVIS_DATA.contact.defaultWhatsappText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white hover:text-emerald-400 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {NIVIS_DATA.contact.whatsappDisplay}</span>
              </a>

              <a
                href={NIVIS_DATA.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#c86343] hover:underline transition-colors font-medium"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {NIVIS_DATA.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>MGR Nagar, Thiruverkadu, Chennai 600077</span>
            <span>•</span>
            <span className="text-white/80 font-medium">Dr. Karthika · Veterinary Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
