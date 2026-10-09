"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { DENTAL_SERVICES } from "@/data/services";
import {
  X,
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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "5:30 PM",
    service: preselectedService || "General Dental Consultation",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) setFormData((prev) => ({ ...prev, service: preselectedService }));
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    if (!formData.date) newErrors.date = "Please select a date";
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#1E332A]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-xl shadow-xl border border-[#DCE5D8] overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-[#F8F6F0] border-b border-[#DCE5D8] flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#737B73] bg-[#E7EDE3] px-2 py-0.5 rounded">
              Mogappair East, Chennai
            </span>
            <h3
              id="booking-modal-title"
              className="font-editorial text-2xl font-normal text-[#1E332A] mt-1"
            >
              Appointment Enquiry
            </h3>
            <p className="text-xs text-[#737B73] mt-0.5">
              Consultation Hours: 5:00 PM – 8:30 PM (Mon–Sat)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#737B73] hover:text-[#1E332A] rounded-lg hover:bg-[#E7EDE3]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E7EDE3] text-[#29483A] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-editorial text-xl text-[#1E332A] font-normal">
                Enquiry Ready to Forward
              </h4>
              <p className="text-xs text-[#737B73] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Forward your request directly via WhatsApp to coordinate available slots with our front desk.
              </p>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-medium text-white bg-[#29483A] hover:bg-[#1E332A] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Send Request via WhatsApp
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 px-4 rounded-lg text-xs text-[#737B73] hover:underline"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-[#29342D] mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Patient Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm text-[#29342D] bg-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#29483A] ${
                    errors.name ? "border-[#8F3E37]" : "border-[#DCE5D8]"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-[#8F3E37] mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-medium text-[#29342D] mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm text-[#29342D] bg-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#29483A] ${
                    errors.phone ? "border-[#8F3E37]" : "border-[#DCE5D8]"
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-[#8F3E37] mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-[#29342D] mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm text-[#29342D] bg-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#29483A] ${
                      errors.date ? "border-[#8F3E37]" : "border-[#DCE5D8]"
                    }`}
                  />
                  {errors.date && <p className="text-[11px] text-[#8F3E37] mt-1">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-medium text-[#29342D] mb-1">
                    Evening Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#DCE5D8] text-xs sm:text-sm text-[#29342D] bg-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#29483A]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-medium text-[#29342D] mb-1">
                  Treatment of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#DCE5D8] text-xs sm:text-sm text-[#29342D] bg-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#29483A]"
                >
                  <option value="General Dental Consultation">General Dental Consultation</option>
                  {DENTAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-[#29342D] mb-1">
                  Notes / Symptoms <span className="text-[#737B73] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Optional note for the doctor..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#DCE5D8] text-xs sm:text-sm text-[#29342D] bg-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#29483A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-xs font-medium text-white bg-[#29483A] hover:bg-[#1E332A] transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
