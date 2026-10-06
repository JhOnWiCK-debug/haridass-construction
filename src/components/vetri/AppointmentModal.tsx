"use client";

import React, { useState } from "react";
import { X, Calendar, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    petType: "Dog",
    reason: "General Consultation",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM – 1:00 PM)",
    phoneNumber: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi Vetri Pet Hospital, I would like to request an appointment:\n- Owner: ${formData.ownerName || "Pet Parent"}\n- Pet: ${formData.petName || "My Pet"} (${formData.petType})\n- Reason: ${formData.reason}\n- Preferred Date: ${formData.preferredDate || "Earliest available"}\n- Preferred Time: ${formData.preferredTime}\n- Phone: ${formData.phoneNumber || "Not provided"}\n${formData.notes ? `Note: ${formData.notes}` : ""}`;
    return `https://wa.me/${VETRI_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#faf8f5] border border-[#ded5c5] rounded-sm max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-[#5e6872] hover:text-[#11161b] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0f4c3a] bg-[#0f4c3a]/10 px-2 py-0.5 rounded-xs">
                Perungudi Clinic · 9 AM to 9 PM
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#11161b] mt-1">
                Book a Visit for Your Pet
              </h3>
              <p className="text-xs text-[#5e6872]">
                Tell us about your pet and your preferred timing. We will confirm doctor availability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                  Owner Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                  Pet Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Pet Name"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                  Pet Type
                </label>
                <select
                  value={formData.petType}
                  onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Guinea Pig">Guinea Pig</option>
                  <option value="Other">Other Pet</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                Reason for Visit
              </label>
              <select
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
              >
                <option value="General Consultation">General Health Consultation</option>
                <option value="Vaccination & Preventive">Vaccination / Preventive Health</option>
                <option value="Unwell / Sickness Assessment">Pet is Unwell / Fever / Stomach Issue</option>
                <option value="Supportive Care / IV Fluids">Supportive Care / IV Fluid Therapy</option>
                <option value="Senior Pet Care">Senior Pet Wellness & Mobility</option>
                <option value="Other Medical Concern">Other Medical Concern</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#11161b]">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
                >
                  <option value="Morning (9:00 AM – 1:00 PM)">Morning (9 AM – 1 PM)</option>
                  <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1 PM – 5 PM)</option>
                  <option value="Evening (5:00 PM – 9:00 PM)">Evening (5 PM – 9 PM)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request an Appointment</span>
            </button>
          </form>
        ) : (
          <div className="space-y-6 py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0f4c3a] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal text-[#11161b]">
                Appointment request received.
              </h3>
              <p className="text-xs text-[#5e6872] max-w-sm mx-auto">
                Please contact Vetri Pet Hospital to confirm availability and lock in the doctor's schedule.
              </p>
            </div>

            <div className="bg-[#f4efe6] p-4 rounded-sm border border-[#e2dacb] text-xs text-left space-y-1">
              <div><strong>Owner:</strong> {formData.ownerName} ({formData.phoneNumber})</div>
              <div><strong>Pet:</strong> {formData.petName} ({formData.petType})</div>
              <div><strong>Reason:</strong> {formData.reason}</div>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Vetri to Confirm</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs font-medium text-[#5e6872] hover:text-[#11161b]"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
