"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { DENTAL_SERVICES } from "@/data/services";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Send,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface AppointmentSectionProps {
  initialService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialService = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "5:30 PM",
    service: initialService || "General Dental Consultation",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialService) setFormData((prev) => ({ ...prev, service: initialService }));
  }, [initialService]);

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.date) newErrors.date = "Please select a preferred date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppUrl = () => {
    const text = `Hello Jaksh's Dental Junction, I would like to enquire about an appointment:
• Name: ${formData.name || "Patient"}
• Phone: ${formData.phone || "Not provided"}
• Date: ${formData.date || "Next available"}
• Time: ${formData.time}
• Treatment of interest: ${formData.service}
${formData.message ? `• Note: ${formData.message}` : ""}`;
    return `https://wa.me/918825564486?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleSendWhatsApp = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#EEF5EF] border-b border-[#D9E6DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D9E6DE] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B57]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#18332E]">
              Appointment Enquiries
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18332E] font-normal tracking-tight mt-1 leading-tight">
            Book an appointment.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#65756F] leading-relaxed font-normal">
            Send an appointment request to our clinic desk. We review available time slots between 5:00 PM and 8:30 PM (Mon–Sat) and coordinate directly with you.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#D9E6DE] shadow-xs">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-[#176B57] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="font-editorial text-2xl text-[#18332E] font-normal">
                  Appointment Request Ready
                </h3>
                <p className="text-xs sm:text-sm text-[#65756F] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry details have been assembled. To send your request directly to our front desk for quick confirmation, forward it via WhatsApp below.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-medium text-white bg-[#176B57] hover:bg-[#125544] transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Request via WhatsApp
                </button>

                <a
                  href={CLINIC_INFO.phone}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-medium text-[#18332E] bg-[#EEF5EF] hover:bg-[#D9E6DE] border border-[#D9E6DE] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#176B57]" />
                  Call Clinic Directly
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#65756F] hover:text-[#18332E] underline"
                >
                  ← Edit details or submit another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-[#65756F] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Priya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] placeholder:text-[#65756F]/60 focus:outline-none focus:ring-1 focus:ring-[#176B57] ${
                        errors.name ? "border-[#8F3E37]" : "border-[#D9E6DE]"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-[#8F3E37] mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-[#65756F] absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] placeholder:text-[#65756F]/60 focus:outline-none focus:ring-1 focus:ring-[#176B57] ${
                        errors.phone ? "border-[#8F3E37]" : "border-[#D9E6DE]"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-[#8F3E37] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                  Email Address <span className="text-[#65756F] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-[#65756F] absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D9E6DE] text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] placeholder:text-[#65756F]/60 focus:outline-none focus:ring-1 focus:ring-[#176B57]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#176B57] ${
                      errors.date ? "border-[#8F3E37]" : "border-[#D9E6DE]"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-[11px] text-[#8F3E37] mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                    Preferred Evening Slot <span className="text-[#65756F] font-normal">(5:00 PM – 8:30 PM)</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D9E6DE] text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#176B57]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Treatment Category */}
              <div>
                <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                  Treatment of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#D9E6DE] text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#176B57]"
                >
                  <option value="General Dental Consultation">General Dental Consultation</option>
                  {DENTAL_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name}
                    </option>
                  ))}
                  <option value="Urgent Dental Relief">Urgent Dental Relief</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-[#18332E] mb-1.5">
                  Brief Note or Symptoms <span className="text-[#65756F] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about any specific discomfort, duration of symptoms, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9E6DE] text-xs sm:text-sm text-[#18332E] bg-[#FFFFFF] placeholder:text-[#65756F]/60 focus:outline-none focus:ring-1 focus:ring-[#176B57]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-7 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white bg-[#176B57] hover:bg-[#125544] transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Appointment Request
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto py-3 px-6 rounded-full text-xs sm:text-sm font-medium text-[#18332E] bg-[#EEF5EF] hover:bg-[#D9E6DE] border border-[#D9E6DE] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#176B57]" />
                  Direct WhatsApp Enquiry
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-[#65756F]">
                Note: Submitting this form sends an appointment request. Our clinic desk confirms exact time availability directly with you.
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
