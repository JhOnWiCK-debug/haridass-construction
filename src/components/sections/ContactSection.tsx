"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, ArrowRight, CheckCircle, MapPin, Mail, Clock, Calendar } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/constructionData";

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export default function ContactSection({ onOpenConsultation }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Residential Construction",
    location: "Ambattur, Chennai",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `*Construction Consultation Request - Haridass Construction*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(
      formData.service
    )}%0A*Location:* ${encodeURIComponent(
      formData.location
    )}%0A*Notes:* ${encodeURIComponent(
      formData.message || "Requesting discussion on new construction requirements."
    )}%0A%0A_Sent from Contact Form on Website_`;

    window.open(`https://wa.me/918056052207?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090a0c] border-t border-white/10 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Copy, Prominent Phone & Quick Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
                <span className="w-2 h-0.5 bg-[#c5a880]" />
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
                Ready to Build Your Next Space?
              </h2>

              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                Let&apos;s discuss your construction requirements and turn your vision into reality.
              </p>
            </div>

            {/* Prominent Big Phone Card */}
            <div className="p-6 sm:p-8 bg-[#111317] border border-[#c5a880]/30 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a880]/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a880] block mb-2">
                Direct Contractor Line
              </span>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-2xl sm:text-4xl font-serif font-bold text-white hover:text-[#dfbe99] transition-colors flex items-center gap-3 tracking-wide"
              >
                <Phone className="w-7 h-7 text-[#c5a880]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Available for Consultation
                </span>
                <span>•</span>
                <span>Ambattur, Chennai</span>
              </div>
            </div>

            {/* Required Conversion Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 rounded-sm transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 rounded-sm transition-colors cursor-pointer"
              >
                <span>Get a Consultation</span>
              </button>
            </div>

            {/* Office Snapshot */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#111317] border border-white/10 p-6 sm:p-10 rounded-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#c5a880]/15 border border-[#c5a880]/30 rounded-full flex items-center justify-center mx-auto text-[#c5a880]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Consultation Initiated</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. We have logged your request. You can also connect with us on WhatsApp or call directly at {BUSINESS_INFO.phoneDisplay}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-serif text-white mb-1">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Fill in your details below for a quick response from our Ambattur office.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramanathan"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98400 12345"
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Site / Plot Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Ambattur / Chennai"
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#090a0c] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Construction Inquiry">
                        General Construction Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share plot area, number of floors, or work required..."
                      className="w-full p-3 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 rounded-sm transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Submit & Connect on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
