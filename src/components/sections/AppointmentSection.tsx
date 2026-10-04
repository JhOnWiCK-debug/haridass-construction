"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { DENTAL_SERVICES } from "@/data/services";
import { DOCTORS } from "@/data/doctors";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  Send,
  MessageSquare,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface AppointmentSectionProps {
  initialDoctor?: string;
  initialService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialDoctor = "",
  initialService = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "5:30 PM",
    doctor: initialDoctor,
    service: initialService || "General Dental Care",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Synchronize when initial props change
  React.useEffect(() => {
    if (initialDoctor) setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
  }, [initialDoctor]);

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
      newErrors.phone = "Please enter your contact phone number";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.date) newErrors.date = "Please select a preferred date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Jaksh's Dental Junction, I would like to request an appointment:
- Name: ${formData.name || "Patient"}
- Phone: ${formData.phone || "Not provided"}
- Preferred Date: ${formData.date || "Next available"}
- Preferred Time: ${formData.time}
- Service: ${formData.service}
${formData.doctor ? `- Doctor: ${formData.doctor}\n` : ""}${formData.message ? `- Notes: ${formData.message}` : ""}`;
    const url = `https://wa.me/918825564486?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-emerald-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            Consultation Request
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book an Appointment
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Schedule your evening visit at Jaksh&apos;s Dental Junction, Mogappair East. Submit the form below or message our clinic desk directly.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          {submitted ? (
            <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Thank you, <strong>{formData.name}</strong>. Our clinic team will verify the schedule and call you at <strong>{formData.phone}</strong> during clinic hours (5:00 PM – 8:30 PM) to confirm your slot.
                </p>
              </div>

              {/* Instant WhatsApp Send Option */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Instant Confirmation via WhatsApp
                </div>
                <p className="text-xs text-slate-600">
                  For immediate coordination with our front desk, click below to forward this request directly to our clinic phone:
                </p>
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Details on WhatsApp (088255 64486)
                </button>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  ← Submit another appointment request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Priyadarshini"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.name ? "border-red-400" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.phone ? "border-red-400" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="e.g. patient@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.date ? "border-red-400" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Preferred Time (5 PM - 8:30 PM) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Time Slot (5:00 PM – 8:30 PM)
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Treatment / Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {DENTAL_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name}
                      </option>
                    ))}
                    <option value="Consultation / Check-up">General Consultation / Check-up</option>
                    <option value="Other">Other / Emergency Relief</option>
                  </select>
                </div>

                {/* Preferred Doctor */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Doctor (Optional)
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) =>
                      setFormData({ ...formData, doctor: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Any Available Specialist</option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.specialty})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Symptoms or Notes for the Doctor (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe any pain, duration of symptoms, or questions you have..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Submit Appointment Request
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Request on WhatsApp
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-500 text-center">
                Need urgent care? Call our direct clinic desk at{" "}
                <a
                  href={CLINIC_INFO.phone}
                  className="font-bold text-emerald-700 underline hover:text-emerald-900"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>{" "}
                (5:00 PM – 8:30 PM, Mon–Sat).
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
