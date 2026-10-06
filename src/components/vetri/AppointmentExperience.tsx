"use client";

import React, { useState } from "react";
import { Calendar, Clock, MessageCircle, Phone, CheckCircle2, User, Sparkles, AlertCircle } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function AppointmentExperience() {
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
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate swift local processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi Vetri Pet Hospital, I would like to request an appointment:\n- Owner: ${formData.ownerName || "Pet Parent"}\n- Pet: ${formData.petName || "My Pet"} (${formData.petType})\n- Reason: ${formData.reason}\n- Preferred Date: ${formData.preferredDate || "Earliest available"}\n- Preferred Time: ${formData.preferredTime}\n- Phone: ${formData.phoneNumber || "Not provided"}\n${formData.notes ? `Note: ${formData.notes}` : ""}`;
    return `https://wa.me/${VETRI_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#f4efe6] border-b border-[#e2dacb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
              Consultations & Visits
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11161b] leading-[1.08]">
              Let's take care of them.
            </h2>
            
            <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed">
              Whether it's a routine assessment, timely vaccination, or supportive therapy, we prepare in advance so your pet receives a calm, attentive visit.
            </p>

            {/* Practical instructions */}
            <div className="p-6 bg-[#faf8f5] border border-[#ded5c5] rounded-sm space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#11161b]">
                What to expect during your visit:
              </h4>
              <ul className="space-y-2.5 text-xs text-[#5e6872]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0f4c3a] font-bold">•</span>
                  <span><strong>Zero rush:</strong> We dedicate time to let anxious pets acclimate to the examination room.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f4c3a] font-bold">•</span>
                  <span><strong>Open daily:</strong> Walk-ins and requests accommodated between 9:00 AM and 9:00 PM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f4c3a] font-bold">•</span>
                  <span><strong>Direct WhatsApp confirmation:</strong> We confirm real-time doctor availability on WhatsApp.</span>
                </li>
              </ul>
            </div>

            {/* Direct Urgent Call Card */}
            <div className="border-l-2 border-[#b85433] pl-4 space-y-1">
              <div className="text-xs font-semibold text-[#11161b]">
                Need immediate same-day guidance?
              </div>
              <p className="text-xs text-[#5e6872]">
                Call our veterinary desk directly at{" "}
                <a href={`tel:${VETRI_DATA.phone}`} className="font-semibold text-[#0f4c3a] underline">
                  {VETRI_DATA.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Appointment Form / Confirmation Card */}
          <div className="lg:col-span-7 bg-[#faf8f5] border border-[#ded5c5] rounded-sm p-8 sm:p-10 shadow-editorial">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#11161b]">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-[#5e6872] mt-1">
                    Fill out the details below. We will confirm doctor availability immediately.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Owner Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                      Owner Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh / Priya"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pet Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                      Pet Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Leo / Simba / Bella"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                    />
                  </div>

                  {/* Pet Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                      Pet Type
                    </label>
                    <select
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
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

                {/* Reason for Visit */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                    Reason for Visit
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                  >
                    <option value="General Consultation">General Health Consultation</option>
                    <option value="Vaccination & Preventive">Vaccination / Preventive Health</option>
                    <option value="Unwell / Sickness Assessment">Pet is Unwell / Fever / Stomach Issue</option>
                    <option value="Supportive Care / IV Fluids">Supportive Care / IV Fluid Therapy</option>
                    <option value="Senior Pet Care">Senior Pet Wellness & Mobility</option>
                    <option value="Skin / Allergy Review">Skin / Coat / Allergy Review</option>
                    <option value="Other Medical Concern">Other Medical Concern</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                      Preferred Timing
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                    >
                      <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#11161b]">
                    Brief Notes / Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific symptoms or history our doctors should know..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a] transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-white bg-[#0f4c3a] hover:bg-[#165b4c] active:bg-[#0b382b] rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{submitting ? "Processing..." : "Request an Appointment"}</span>
                </button>

                <p className="text-[11px] text-[#5e6872] text-center">
                  *Submitting sends your request to Vetri. We confirm exact doctor timing directly with you.
                </p>
              </form>
            ) : (
              /* Submission Confirmation State */
              <div className="space-y-6 py-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-[#0f4c3a] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-serif text-3xl font-normal text-[#11161b]">
                    Appointment request received.
                  </h3>
                  <p className="text-sm text-[#5e6872] max-w-md mx-auto">
                    Please contact Vetri Pet Hospital to confirm availability and schedule the exact doctor slot.
                  </p>
                </div>

                {/* Summary of submitted request */}
                <div className="bg-[#f4efe6] border border-[#e2dacb] rounded-sm p-4 text-xs space-y-1.5 text-[#374151]">
                  <div className="flex justify-between">
                    <span className="text-[#5e6872]">Pet Parent:</span>
                    <span className="font-semibold text-[#11161b]">{formData.ownerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6872]">Pet:</span>
                    <span className="font-semibold text-[#11161b]">{formData.petName} ({formData.petType})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6872]">Reason:</span>
                    <span className="font-semibold text-[#11161b]">{formData.reason}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6872]">Preferred Slot:</span>
                    <span className="font-semibold text-[#11161b]">{formData.preferredDate || "Earliest"} · {formData.preferredTime}</span>
                  </div>
                </div>

                {/* Instant Actions */}
                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Vetri to Confirm</span>
                  </a>

                  <div className="flex items-center justify-center gap-4 text-xs">
                    <a
                      href={`tel:${VETRI_DATA.phone}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#11161b] hover:text-[#0f4c3a]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0f4c3a]" />
                      Call {VETRI_DATA.phone}
                    </a>
                    <span className="text-zinc-300">|</span>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-[#5e6872] hover:underline"
                    >
                      Edit request details
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
