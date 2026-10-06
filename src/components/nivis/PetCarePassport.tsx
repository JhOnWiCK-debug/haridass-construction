"use client";

import React, { useState, useEffect } from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  FileText,
  Syringe,
  CalendarCheck,
  StickyNote,
  Plus,
  Trash2,
  AlertCircle,
  Sparkles,
  Heart,
  Dog,
  Cat,
} from "lucide-react";

interface PetProfile {
  name: string;
  type: "Dog" | "Cat" | "Other";
  breed: string;
  age: string;
  sex: "Male" | "Female";
  weight: string;
  microchipOrId?: string;
}

interface VaccineRecord {
  id: string;
  name: string;
  dateGiven: string;
  nextDue: string;
  notes: string;
}

interface VisitRecord {
  id: string;
  date: string;
  reason: string;
  notes: string;
}

const DEFAULT_PROFILE: PetProfile = {
  name: "Bruno",
  type: "Dog",
  breed: "Indie",
  age: "2 years",
  sex: "Male",
  weight: "18 kg",
  microchipOrId: "NIVIS-LOCAL-01",
};

const DEFAULT_VACCINES: VaccineRecord[] = [
  {
    id: "1",
    name: "DHPPi + Lepto (Annual)",
    dateGiven: "2026-04-10",
    nextDue: "2027-04-10",
    notes: "Core vaccine administered",
  },
  {
    id: "2",
    name: "Anti-Rabies",
    dateGiven: "2026-05-15",
    nextDue: "2027-05-15",
    notes: "Annual booster",
  },
];

const DEFAULT_VISITS: VisitRecord[] = [
  {
    id: "v1",
    date: "2026-08-20",
    reason: "Wellness Check & Deworming",
    notes: "Healthy coat, normal temperature, prescribed broad spectrum dewormer.",
  },
];

export function PetCarePassport() {
  const [profile, setProfile] = useState<PetProfile>(DEFAULT_PROFILE);
  const [vaccines, setVaccines] = useState<VaccineRecord[]>(DEFAULT_VACCINES);
  const [visits, setVisits] = useState<VisitRecord[]>(DEFAULT_VISITS);
  const [notes, setNotes] = useState<string>(
    "Bruno loves carrot treats. Mild anxiety during heavy rain or loud thunder. Deworming due every 3 months."
  );
  const [activeTab, setActiveTab] = useState<"profile" | "vaccines" | "visits" | "notes">("profile");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // New item modal states
  const [newVaccine, setNewVaccine] = useState({ name: "", dateGiven: "", nextDue: "", notes: "" });
  const [showAddVaccine, setShowAddVaccine] = useState(false);

  const [newVisit, setNewVisit] = useState({ date: "", reason: "", notes: "" });
  const [showAddVisit, setShowAddVisit] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("nivis_pet_profile");
      if (savedProfile) setProfile(JSON.parse(savedProfile));

      const savedVaccines = localStorage.getItem("nivis_pet_vaccines");
      if (savedVaccines) setVaccines(JSON.parse(savedVaccines));

      const savedVisits = localStorage.getItem("nivis_pet_visits");
      if (savedVisits) setVisits(JSON.parse(savedVisits));

      const savedNotes = localStorage.getItem("nivis_pet_notes");
      if (savedNotes) setNotes(savedNotes);
    } catch {
      // Local storage disabled or unavailable
    }
  }, []);

  // Save changes to local storage
  const saveProfile = (updated: PetProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem("nivis_pet_profile", JSON.stringify(updated));
    } catch {}
    setIsEditingProfile(false);
  };

  const handleAddVaccine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVaccine.name) return;
    const updated = [...vaccines, { ...newVaccine, id: Date.now().toString() }];
    setVaccines(updated);
    try {
      localStorage.setItem("nivis_pet_vaccines", JSON.stringify(updated));
    } catch {}
    setNewVaccine({ name: "", dateGiven: "", nextDue: "", notes: "" });
    setShowAddVaccine(false);
  };

  const handleDeleteVaccine = (id: string) => {
    const updated = vaccines.filter((v) => v.id !== id);
    setVaccines(updated);
    try {
      localStorage.setItem("nivis_pet_vaccines", JSON.stringify(updated));
    } catch {}
  };

  const handleAddVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVisit.reason) return;
    const updated = [...visits, { ...newVisit, id: Date.now().toString() }];
    setVisits(updated);
    try {
      localStorage.setItem("nivis_pet_visits", JSON.stringify(updated));
    } catch {}
    setNewVisit({ date: "", reason: "", notes: "" });
    setShowAddVisit(false);
  };

  const handleDeleteVisit = (id: string) => {
    const updated = visits.filter((v) => v.id !== id);
    setVisits(updated);
    try {
      localStorage.setItem("nivis_pet_visits", JSON.stringify(updated));
    } catch {}
  };

  const handleNotesChange = (val: string) => {
    setNotes(val);
    try {
      localStorage.setItem("nivis_pet_notes", val);
    } catch {}
  };

  return (
    <section id="pet-passport" className="py-20 sm:py-28 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            Your pet&apos;s little{" "}
            <span className="italic text-[#153e35] font-normal">health hub.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            Keep your companion&apos;s vaccinations, appointments, and care history organized in one
            convenient, private browser passport.
          </p>
        </div>

        {/* Passport Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-[#1e242b]/10 shadow-editorial-lg overflow-hidden">
          {/* Passport Top Cover / Header */}
          <div className="bg-[#153e35] text-[#faf7f2] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-serif text-2xl font-bold text-amber-200">
                {profile.type === "Dog" ? <Dog className="w-7 h-7" /> : <Cat className="w-7 h-7" />}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 block">
                  Pet Care Passport
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {profile.name}
                </h3>
                <span className="text-xs text-white/80">
                  {profile.breed} • {profile.age} • {profile.sex} • {profile.weight}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="self-start sm:self-auto px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-colors"
            >
              {isEditingProfile ? "Done Editing" : "Edit Profile"}
            </button>
          </div>

          {/* Edit Profile Panel */}
          {isEditingProfile && (
            <div className="p-6 bg-[#f4efe6] border-b border-[#1e242b]/10 animate-in slide-in-from-top duration-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1e242b] mb-4">
                Update Pet Details
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#5e6872] block mb-1">Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#1e242b]/10 text-xs text-[#1e242b]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#5e6872] block mb-1">Species</label>
                  <select
                    value={profile.type}
                    onChange={(e) =>
                      setProfile({ ...profile, type: e.target.value as "Dog" | "Cat" | "Other" })
                    }
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#1e242b]/10 text-xs text-[#1e242b]"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#5e6872] block mb-1">Breed</label>
                  <input
                    type="text"
                    value={profile.breed}
                    onChange={(e) => setProfile({ ...profile, breed: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#1e242b]/10 text-xs text-[#1e242b]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#5e6872] block mb-1">Age</label>
                  <input
                    type="text"
                    value={profile.age}
                    onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#1e242b]/10 text-xs text-[#1e242b]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#5e6872] block mb-1">Sex</label>
                  <select
                    value={profile.sex}
                    onChange={(e) =>
                      setProfile({ ...profile, sex: e.target.value as "Male" | "Female" })
                    }
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#1e242b]/10 text-xs text-[#1e242b]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#5e6872] block mb-1">Weight</label>
                  <input
                    type="text"
                    value={profile.weight}
                    onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#1e242b]/10 text-xs text-[#1e242b]"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => saveProfile(profile)}
                  className="px-4 py-2 bg-[#153e35] text-white rounded-xl text-xs font-semibold"
                >
                  Save Profile
                </button>
              </div>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#1e242b]/10 bg-[#faf7f2] overflow-x-auto">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-6 py-3.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "profile"
                  ? "border-[#153e35] text-[#153e35] bg-white"
                  : "border-transparent text-[#5e6872] hover:text-[#1e242b]"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("vaccines")}
              className={`flex items-center gap-2 px-6 py-3.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "vaccines"
                  ? "border-[#153e35] text-[#153e35] bg-white"
                  : "border-transparent text-[#5e6872] hover:text-[#1e242b]"
              }`}
            >
              <Syringe className="w-3.5 h-3.5" />
              <span>Vaccinations ({vaccines.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("visits")}
              className={`flex items-center gap-2 px-6 py-3.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "visits"
                  ? "border-[#153e35] text-[#153e35] bg-white"
                  : "border-transparent text-[#5e6872] hover:text-[#1e242b]"
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Visits ({visits.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("notes")}
              className={`flex items-center gap-2 px-6 py-3.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "notes"
                  ? "border-[#153e35] text-[#153e35] bg-white"
                  : "border-transparent text-[#5e6872] hover:text-[#1e242b]"
              }`}
            >
              <StickyNote className="w-3.5 h-3.5" />
              <span>Care Notes</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {/* 1. Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#f4efe6] p-4 rounded-2xl">
                    <span className="text-[11px] text-[#5e6872] uppercase tracking-wider block">
                      Species & Breed
                    </span>
                    <span className="text-sm font-semibold text-[#1e242b] mt-1 block">
                      {profile.type} ({profile.breed})
                    </span>
                  </div>

                  <div className="bg-[#f4efe6] p-4 rounded-2xl">
                    <span className="text-[11px] text-[#5e6872] uppercase tracking-wider block">
                      Age & Sex
                    </span>
                    <span className="text-sm font-semibold text-[#1e242b] mt-1 block">
                      {profile.age} • {profile.sex}
                    </span>
                  </div>

                  <div className="bg-[#f4efe6] p-4 rounded-2xl">
                    <span className="text-[11px] text-[#5e6872] uppercase tracking-wider block">
                      Weight
                    </span>
                    <span className="text-sm font-semibold text-[#1e242b] mt-1 block">
                      {profile.weight}
                    </span>
                  </div>

                  <div className="bg-[#f4efe6] p-4 rounded-2xl">
                    <span className="text-[11px] text-[#5e6872] uppercase tracking-wider block">
                      Vaccine Status
                    </span>
                    <span className="text-sm font-semibold text-emerald-700 mt-1 block">
                      {vaccines.length} Logged
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#ebf1ee] border border-[#153e35]/15 flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#153e35] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#153e35] leading-relaxed">
                    <strong>Local Organizer:</strong> This passport stores your notes safely in your
                    browser&apos;s local storage. When you bring {profile.name} to Nivis, you can
                    quickly pull up your logged dates, weights, and questions.
                  </div>
                </div>
              </div>
            )}

            {/* 2. Vaccinations Tab */}
            {activeTab === "vaccines" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-[#5e6872]">
                    Keep track of core and booster immunizations.
                  </p>
                  <button
                    onClick={() => setShowAddVaccine(!showAddVaccine)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#153e35] text-white text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Vaccine</span>
                  </button>
                </div>

                {showAddVaccine && (
                  <form
                    onSubmit={handleAddVaccine}
                    className="p-4 bg-[#f4efe6] rounded-2xl border border-[#1e242b]/10 mb-4 space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] text-[#5e6872] block mb-1">
                          Vaccine Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. DHPPi / Rabies"
                          required
                          value={newVaccine.name}
                          onChange={(e) =>
                            setNewVaccine({ ...newVaccine, name: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#1e242b]/10"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#5e6872] block mb-1">Date Given</label>
                        <input
                          type="date"
                          value={newVaccine.dateGiven}
                          onChange={(e) =>
                            setNewVaccine({ ...newVaccine, dateGiven: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#1e242b]/10"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#5e6872] block mb-1">Next Due Date</label>
                        <input
                          type="date"
                          value={newVaccine.nextDue}
                          onChange={(e) =>
                            setNewVaccine({ ...newVaccine, nextDue: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#1e242b]/10"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowAddVaccine(false)}
                        className="px-3 py-1.5 text-xs text-[#5e6872]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#153e35] text-white rounded-xl text-xs font-semibold"
                      >
                        Save Vaccine
                      </button>
                    </div>
                  </form>
                )}

                {vaccines.length === 0 ? (
                  <div className="p-8 text-center text-xs text-[#5e6872]">
                    No vaccinations logged yet. Click &quot;Add Vaccine&quot; above.
                  </div>
                ) : (
                  <div className="divide-y divide-[#1e242b]/10">
                    {vaccines.map((v) => (
                      <div
                        key={v.id}
                        className="py-3.5 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-xs font-semibold text-[#1e242b]">
                            {v.name}
                          </div>
                          <div className="text-[11px] text-[#5e6872] mt-0.5">
                            Given: {v.dateGiven || "Not specified"} • Due:{" "}
                            <span className="font-medium text-[#c86343]">
                              {v.nextDue || "Annual"}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteVaccine(v.id)}
                          className="text-[#8fa89b] hover:text-rose-600 transition-colors p-1"
                          title="Delete record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. Visits Tab */}
            {activeTab === "visits" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-[#5e6872]">
                    Log check-ups, follow-ups, and treatments.
                  </p>
                  <button
                    onClick={() => setShowAddVisit(!showAddVisit)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#153e35] text-white text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Log Visit</span>
                  </button>
                </div>

                {showAddVisit && (
                  <form
                    onSubmit={handleAddVisit}
                    className="p-4 bg-[#f4efe6] rounded-2xl border border-[#1e242b]/10 mb-4 space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-[#5e6872] block mb-1">Visit Date</label>
                        <input
                          type="date"
                          required
                          value={newVisit.date}
                          onChange={(e) =>
                            setNewVisit({ ...newVisit, date: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#1e242b]/10"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#5e6872] block mb-1">
                          Reason / Treatment
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Fever, Deworming, Nail trim"
                          required
                          value={newVisit.reason}
                          onChange={(e) =>
                            setNewVisit({ ...newVisit, reason: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#1e242b]/10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-[#5e6872] block mb-1">Doctor Advice / Notes</label>
                      <input
                        type="text"
                        placeholder="e.g. Prescribed probiotics, review in 3 days"
                        value={newVisit.notes}
                        onChange={(e) =>
                          setNewVisit({ ...newVisit, notes: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#1e242b]/10"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowAddVisit(false)}
                        className="px-3 py-1.5 text-xs text-[#5e6872]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#153e35] text-white rounded-xl text-xs font-semibold"
                      >
                        Save Visit
                      </button>
                    </div>
                  </form>
                )}

                {visits.length === 0 ? (
                  <div className="p-8 text-center text-xs text-[#5e6872]">
                    No clinical visits logged yet. Click &quot;Log Visit&quot; above.
                  </div>
                ) : (
                  <div className="divide-y divide-[#1e242b]/10">
                    {visits.map((vis) => (
                      <div
                        key={vis.id}
                        className="py-3.5 flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-[#1e242b]">
                              {vis.reason}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 bg-[#f4efe6] rounded-full text-[#5e6872]">
                              {vis.date}
                            </span>
                          </div>
                          {vis.notes && (
                            <p className="text-[11px] text-[#5e6872] mt-1 leading-relaxed">
                              {vis.notes}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => handleDeleteVisit(vis.id)}
                          className="text-[#8fa89b] hover:text-rose-600 transition-colors p-1"
                          title="Delete visit"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 4. Notes Tab */}
            {activeTab === "notes" && (
              <div className="space-y-3">
                <label className="text-xs text-[#5e6872] block">
                  Dietary preferences, allergies, behavior triggers, or questions for your next visit:
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-[#faf7f2] border border-[#1e242b]/10 text-xs sm:text-sm text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                  placeholder="e.g. Allergic to chicken, prefers fish kibble..."
                />
                <span className="text-[11px] text-[#8fa89b]">
                  Auto-saved to your browser.
                </span>
              </div>
            )}
          </div>

          {/* Mandatory Strict Privacy & Non-Medical Record Disclaimer */}
          <div className="p-4 bg-[#f4efe6] border-t border-[#1e242b]/10 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#8fa89b] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#5e6872] leading-relaxed">
              <strong className="text-[#1e242b]">Notice:</strong> {NIVIS_DATA.disclaimers.passport}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
