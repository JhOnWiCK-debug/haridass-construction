"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, Heart } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function Footer() {
  return (
    <footer className="bg-[#0c0f12] text-zinc-400 text-xs border-t border-white/10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#0f4c3a] flex items-center justify-center text-white font-serif font-bold text-lg">
                V
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  VETRI
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400">
                  Pet Hospital & Clinic
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Professional treatment and compassionate care for dogs, cats, and small companions in Perungudi, Chennai.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-amber-400">★★★★★</span>
              <span className="font-semibold text-white">5.0 Google Rating</span>
              <span className="text-zinc-500">· 6 Reviews</span>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#top" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Care & Services
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-emerald-400 transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-emerald-400 transition-colors">
                  Patient Stories (Simba)
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-emerald-400 transition-colors">
                  The Clinic & Doctors
                </a>
              </li>
              <li>
                <a href="#pet-care-tools" className="hover:text-emerald-400 transition-colors">
                  Pet Care Tools & Guide
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-emerald-400 transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  2, Erikarai St, Kurinji Nagar, Perungudi, Chennai 600097 (Near Sunrise Pharmacy)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${VETRI_DATA.phone}`} className="hover:text-white transition-colors">
                  {VETRI_DATA.phone} / {VETRI_DATA.phoneSecondary}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Direct Actions (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Direct Channels
            </h4>
            <div className="space-y-2">
              <a
                href={VETRI_DATA.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={VETRI_DATA.whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Vetri</span>
              </a>

              <a
                href={`tel:${VETRI_DATA.phone}`}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Vetri Pet Hospital & Pet Clinic. All rights reserved.
          </p>

          <p className="max-w-xl text-[10px] leading-relaxed text-zinc-500">
            *Information provided on this website is for general educational awareness only and does not constitute a substitute for in-person veterinary medical diagnosis.
          </p>
        </div>

      </div>
    </footer>
  );
}
