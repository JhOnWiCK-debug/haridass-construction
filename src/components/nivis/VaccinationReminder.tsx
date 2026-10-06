"use client";

import React, { useState, useEffect } from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  Bell,
  Calendar,
  Check,
  AlertCircle,
  Phone,
  MessageCircle,
  Plus,
  Trash2,
  Clock,
  Sparkles,
} from "lucide-react";

interface ReminderItem {
  id: string;
  petName: string;
  vaccination: string;
  date: string;
}

const DEFAULT_REMINDERS: ReminderItem[] = [
  {
    id: "r1",
    petName: "Bruno",
    vaccination: "DHPPi Annual Booster",
    date: "2027-04-10",
  },
  {
    id: "r2",
    petName: "Bruno",
    vaccination: "Anti-Rabies",
    date: "2027-05-15",
  },
];

export function VaccinationReminder() {
  const [petName, setPetName] = useState("");
  const [vaccine, setVaccine] = useState("DHPPi / 9-in-1 Booster");
  const [date, setDate] = useState("");
  const [reminders, setReminders] = useState<ReminderItem[]>(DEFAULT_REMINDERS);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nivis_vaccine_reminders");
      if (saved) {
        setReminders(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const handleSaveReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petName || !vaccine || !date) return;

    const newRem: ReminderItem = {
      id: Date.now().toString(),
      petName,
      vaccination: vaccine,
      date,
    };

    const updated = [newRem, ...reminders];
    setReminders(updated);
    try {
      localStorage.setItem("nivis_vaccine_reminders", JSON.stringify(updated));
    } catch {}

    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);

    setPetName("");
    setDate("");
  };

  const handleDelete = (id: string) => {
    const updated = reminders.filter((r) => r.id !== id);
    setReminders(updated);
    try {
      localStorage.setItem("nivis_vaccine_reminders", JSON.stringify(updated));
    } catch {}
  };

  return (
    <section className="py-16 sm:py-24 bg-[#f4efe6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Explanatory & Reminder Form */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
              <Bell className="w-3.5 h-3.5" />
              <span>Immunization Tracker</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#1e242b] font-medium tracking-tight mb-4">
              Never miss an{" "}
              <span className="italic text-[#153e35] font-normal">important date.</span>
            </h2>

            <p className="text-base text-[#5e6872] leading-relaxed mb-6 font-light">
              Staying consistent with core and booster immunizations is vital for guarding against
              fatal viruses. Save your upcoming date here for easy local tracking.
            </p>

            <form
              onSubmit={handleSaveReminder}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#1e242b]/8 shadow-editorial space-y-4"
            >
              <div>
                <label className="text-xs font-semibold text-[#1e242b] block mb-1.5">
                  Pet Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Leo, Bella, Bruno"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#1e242b]/10 text-xs sm:text-sm text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1e242b] block mb-1.5">
                    Vaccination Type
                  </label>
                  <select
                    value={vaccine}
                    onChange={(e) => setVaccine(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#1e242b]/10 text-xs sm:text-sm text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                  >
                    <option value="DHPPi / 9-in-1 Booster">DHPPi / 9-in-1 Booster</option>
                    <option value="Anti-Rabies">Anti-Rabies</option>
                    <option value="Puppy Primary 1st Dose">Puppy Primary 1st Dose</option>
                    <option value="Puppy Primary 2nd Dose">Puppy Primary 2nd Dose</option>
                    <option value="Puppy Primary 3rd Dose">Puppy Primary 3rd Dose</option>
                    <option value="Kennel Cough (KC)">Kennel Cough (KC)</option>
                    <option value="Cat Tricat / FPV">Cat Tricat / FPV</option>
                    <option value="Deworming Booster">Deworming Booster</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1e242b] block mb-1.5">
                    Target Due Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#1e242b]/10 text-xs sm:text-sm text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#153e35] text-white text-xs font-semibold hover:bg-[#1b4d3e] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Save Reminder Locally</span>
                </button>

                {successMsg && (
                  <span className="text-xs text-emerald-700 font-medium flex items-center gap-1 animate-in fade-in">
                    <Check className="w-3.5 h-3.5" /> Saved!
                  </span>
                )}
              </div>
            </form>

            {/* Mandatory Medical Schedule Disclaimer */}
            <div className="mt-4 p-3.5 rounded-2xl bg-[#ebf1ee] border border-[#153e35]/10 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#153e35] shrink-0 mt-0.5" />
              <p className="text-xs text-[#153e35] leading-relaxed">
                {NIVIS_DATA.disclaimers.vaccination}
              </p>
            </div>
          </div>

          {/* Right: Saved Reminders & Clinic Confirmation Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#1e242b]/8 shadow-editorial">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#1e242b]/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c86343]" />
                  <h3 className="font-serif text-lg font-semibold text-[#1e242b]">
                    Your Saved Reminders
                  </h3>
                </div>
                <span className="text-xs text-[#5e6872]">{reminders.length} scheduled</span>
              </div>

              {reminders.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#5e6872]">
                  No vaccination reminders saved yet.
                </div>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {reminders.map((r) => (
                    <div
                      key={r.id}
                      className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#1e242b]/5 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#1e242b]">{r.petName}</span>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#153e35]/10 text-[#153e35] font-medium">
                            {r.vaccination}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#5e6872] mt-1 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#c86343]" />
                          <span>Due: {r.date}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDelete(r.id)}
                        className="text-[#8fa89b] hover:text-rose-600 transition-colors p-1"
                        title="Remove reminder"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Clinic CTA */}
              <div className="mt-6 pt-5 border-t border-[#1e242b]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#5e6872]">
                  Unsure of your pet&apos;s vaccination status?
                </span>

                <a
                  href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Nivis Pet Clinic, I would like to verify the recommended vaccination schedule for my pet."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#f4efe6] hover:bg-[#153e35] hover:text-white text-[#153e35] text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Contact Nivis</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
