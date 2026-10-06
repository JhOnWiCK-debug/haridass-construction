"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, Mail } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function ContactSection() {
  const contactCards = [
    {
      title: "Call Direct",
      desc: "Speak with our veterinary desk directly for immediate guidance.",
      val: VETRI_DATA.phone,
      actionText: "Call 93840 17392",
      href: `tel:${VETRI_DATA.phone}`,
      icon: Phone,
      primary: true,
    },
    {
      title: "WhatsApp Chat",
      desc: "Message us for quick appointment questions or photos.",
      val: "+91 93840 17392",
      actionText: "Chat with Vetri",
      href: VETRI_DATA.whatsappLinks.general,
      icon: MessageCircle,
      external: true,
    },
    {
      title: "Visit Clinic",
      desc: "2, Erikarai St, Kurinji Nagar, Perungudi, Chennai 600097",
      val: "Near Sunrise Pharmacy",
      actionText: "Open Google Maps",
      href: VETRI_DATA.googleMaps.directionsUrl,
      icon: MapPin,
      external: true,
    },
    {
      title: "Consultation Hours",
      desc: "Monday through Sunday · 9:00 AM – 9:00 PM",
      val: "Open 7 Days a Week",
      actionText: "Open Daily until 9 PM",
      href: "#location",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
            Reach Our Clinic
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#11161b]">
            Have a question about your pet?
          </h2>
          <p className="text-base text-[#5e6872] leading-relaxed">
            We are here every day to answer questions, assess symptoms, and guide pet parents with calm reassurance.
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#ded5c5] rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#0f4c3a] hover:shadow-editorial transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-[#f4efe6] border border-[#e2dacb] flex items-center justify-center text-[#0f4c3a] group-hover:bg-[#0f4c3a] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-normal text-[#11161b]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5e6872] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f0ebe1]">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f4c3a] group-hover:underline"
                  >
                    <span>{item.actionText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
