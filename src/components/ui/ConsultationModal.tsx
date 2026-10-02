"use client";

import React, { useState, useEffect } from "react";
import { X, Phone, MessageSquare, CheckCircle, ArrowRight, Building, MapPin, User, Calendar } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/constructionData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = ""
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService || "Residential Construction",
    location: "Ambattur, Chennai",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMethod, setSubmitMethod] = useState<"whatsapp" | "direct">("whatsapp");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    if (submitMethod === "whatsapp") {
      const text = `*New Construction Consultation Request*%0A%0A*Name:* ${encodeURIComponent(
        formData.name
      )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(
        formData.service
      )}%0A*Project Location:* ${encodeURIComponent(
        formData.location
      )}%0A*Details:* ${encodeURIComponent(
        formData.message || "Requesting a site consultation."
      )}%0A%0A_Sent via Haridass Construction Website_`;

      window.open(`https://wa.me/918056052207?text=${text}`, "_blank");
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      service: "Residential Construction",
      location: "Ambattur, Chennai",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
      <div 
        className="relative w-full max-w-lg bg-[#111317] border border-white/10 rounded-sm shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent border line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#c5a880]/10 border border-[#c5a880]/30 rounded-full flex items-center justify-center mx-auto mb-5 text-[#c5a880]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Request Received</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-sm mx-auto">
              Thank you, {formData.name}. Our construction team in Ambattur will review your request and reach out to you shortly.
            </p>
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-left mb-6 text-xs text-gray-300 space-y-1">
              <div className="font-semibold text-white">Direct Line for Urgent Queries:</div>
              <div className="text-[#c5a880] font-mono text-sm flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4" />
                <a href={BUSINESS_INFO.phoneTel} className="hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-sm tracking-wider uppercase transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#c5a880] uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                Haridass Construction • Chennai
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                Request a Consultation
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Discuss your residential or commercial project with our team in Ambattur.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. Ramanathan"
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98400 12345"
                      className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                    Project Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Ambattur / Anna Nagar"
                      className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                  Service Required
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#090a0c] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors appearance-none cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#111317]">
                        {s.title}
                      </option>
                    ))}
                    <option value="General Construction Inquiry" className="bg-[#111317]">
                      General Construction Inquiry
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                  Brief Project Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Plot size, number of floors, or type of construction work..."
                  className="w-full p-3 bg-black/40 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                />
              </div>

              {/* Submit options */}
              <div className="pt-2">
                <button
                  type="submit"
                  onClick={() => setSubmitMethod("whatsapp")}
                  className="w-full py-3 px-4 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors mb-2.5 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send & Connect on WhatsApp
                </button>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <span>Prefer calling directly?</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-[#c5a880] hover:underline font-mono font-medium flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
