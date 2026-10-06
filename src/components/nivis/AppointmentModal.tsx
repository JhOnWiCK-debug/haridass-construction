"use client";

import React, { useState } from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Heart,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  AlertCircle,
  Dog,
  Cat,
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 7;

  // Form State
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState<"Dog" | "Cat" | "Other">("Dog");
  const [reason, setReason] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setOwnerName("");
    setPetName("");
    setReason("");
    setPreferredDate("");
    setPreferredTime("");
    setPhoneNumber("");
    onClose();
  };

  // WhatsApp confirmation text
  const whatsappBookingText = `Hi Nivis Pet Clinic, I would like to request an appointment for my pet.
Owner Name: ${ownerName}
Pet Name: ${petName} (${petType})
Reason: ${reason || "General Consultation"}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}
Phone: ${phoneNumber}
Could you please confirm availability?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf7f2] rounded-[2.5rem] max-w-xl w-full overflow-hidden shadow-2xl border border-[#1e242b]/10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#153e35] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-1">
            Nivis Pet Clinic • Thiruverkadu
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight">
            Request an Appointment Visit
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Unhurried clinical care • Dr. Karthika & clinical team
          </p>

          {!isSubmitted && (
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-300 rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
              <span className="text-[11px] font-medium text-white/80">
                Step {step} of {totalSteps}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Owner Name */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <User className="w-4 h-4" />
                    <span>Step 1: Your Name</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    What is your name, pet parent?
                  </h4>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="e.g. Anand, Priya, Suresh"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#1e242b]/15 text-sm sm:text-base text-[#1e242b] focus:outline-none focus:ring-2 focus:ring-[#153e35]"
                  />
                  <p className="text-xs text-[#5e6872]">
                    We will use this name to register your appointment request.
                  </p>
                </div>
              )}

              {/* Step 2: Pet Name */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <Heart className="w-4 h-4" />
                    <span>Step 2: Pet Name</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    What is your companion&apos;s name?
                  </h4>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="e.g. Bruno, Simba, Milo, Bella"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#1e242b]/15 text-sm sm:text-base text-[#1e242b] focus:outline-none focus:ring-2 focus:ring-[#153e35]"
                  />
                  <p className="text-xs text-[#5e6872]">
                    Tell us what you call your beloved animal.
                  </p>
                </div>
              )}

              {/* Step 3: Pet Type */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <span>Step 3: Species</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    What kind of pet is {petName || "your companion"}?
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {(["Dog", "Cat", "Other"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPetType(type)}
                        className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                          petType === type
                            ? "bg-[#153e35] text-white border-[#153e35] shadow-sm"
                            : "bg-white border-[#1e242b]/15 text-[#1e242b] hover:bg-[#f4efe6]"
                        }`}
                      >
                        {type === "Dog" && <Dog className="w-6 h-6" />}
                        {type === "Cat" && <Cat className="w-6 h-6" />}
                        {type === "Other" && <Heart className="w-6 h-6" />}
                        <span className="text-xs font-semibold">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Reason for Visit */}
              {step === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <span>Step 4: Clinical Need</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    Reason for visit?
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    {[
                      "General Health Checkup",
                      "Vaccination / Booster",
                      "Puppy / Kitten Care",
                      "Fever or Lethargy",
                      "Vomiting / Stomach Issue",
                      "Skin or Ear Problem",
                      "Follow-Up Review",
                      "Diet & Nutrition Guidance",
                    ].map((prefill) => (
                      <button
                        key={prefill}
                        type="button"
                        onClick={() => setReason(prefill)}
                        className={`p-2.5 rounded-xl text-left text-xs border transition-colors ${
                          reason === prefill
                            ? "bg-[#153e35] text-white border-[#153e35]"
                            : "bg-white border-[#1e242b]/10 text-[#1e242b] hover:bg-[#f4efe6]"
                        }`}
                      >
                        {prefill}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Or describe briefly here..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#1e242b]/15 text-xs sm:text-sm text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                  />
                </div>
              )}

              {/* Step 5: Preferred Date */}
              {step === 5 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <Calendar className="w-4 h-4" />
                    <span>Step 5: Date</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    When would you like to visit?
                  </h4>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#1e242b]/15 text-sm sm:text-base text-[#1e242b] focus:outline-none focus:ring-2 focus:ring-[#153e35]"
                  />
                  <p className="text-xs text-[#5e6872]">
                    Clinic is open Monday through Sunday (closes 9:30 PM).
                  </p>
                </div>
              )}

              {/* Step 6: Preferred Time */}
              {step === 6 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Step 6: Time Slot</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    Preferred time of day?
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      "Morning (10:00 AM – 1:00 PM)",
                      "Afternoon (1:00 PM – 4:00 PM)",
                      "Evening (4:00 PM – 7:00 PM)",
                      "Night (7:00 PM – 9:30 PM)",
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTime(slot)}
                        className={`p-3 rounded-xl border text-xs text-left transition-colors ${
                          preferredTime === slot
                            ? "bg-[#153e35] text-white border-[#153e35]"
                            : "bg-white border-[#1e242b]/10 text-[#1e242b] hover:bg-[#f4efe6]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Phone Number */}
              {step === 7 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153e35] uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Step 7: Contact Phone</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1e242b]">
                    Where should we call or WhatsApp you?
                  </h4>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 09876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#1e242b]/15 text-sm sm:text-base text-[#1e242b] focus:outline-none focus:ring-2 focus:ring-[#153e35]"
                  />
                  <p className="text-xs text-[#5e6872]">
                    Our clinic team will confirm doctor availability for your preferred slot.
                  </p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#1e242b]/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2.5 rounded-full text-xs font-medium text-[#5e6872] hover:text-[#1e242b] flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-full bg-[#153e35] text-white text-xs font-semibold hover:bg-[#1b4d3e] flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-[#153e35] text-white text-xs font-semibold hover:bg-[#1b4d3e] flex items-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request a Visit</span>
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* Post-Submission State: Transparent & Clear (No fake auto-confirmation) */
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#153e35] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-[#1e242b]">
                  Appointment Request Received
                </h4>
                <p className="text-xs sm:text-sm text-[#5e6872] max-w-md mx-auto mt-2 leading-relaxed">
                  Your appointment request has been received. Please contact Nivis to confirm
                  availability.
                </p>
              </div>

              <div className="bg-[#f4efe6] rounded-2xl p-4 text-xs text-left text-[#1e242b] max-w-md mx-auto border border-[#1e242b]/5 space-y-1">
                <div>
                  <strong>Pet:</strong> {petName} ({petType})
                </div>
                <div>
                  <strong>Preferred Date:</strong> {preferredDate || "As soon as possible"}
                </div>
                <div>
                  <strong>Preferred Time:</strong> {preferredTime || "During open hours"}
                </div>
                <div>
                  <strong>Contact:</strong> {phoneNumber || ownerName}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <a
                  href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                    whatsappBookingText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Nivis to Confirm</span>
                </a>

                <a
                  href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                  className="py-3 px-4 rounded-full bg-[#153e35] hover:bg-[#1b4d3e] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {NIVIS_DATA.contact.phone}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#5e6872] hover:underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
