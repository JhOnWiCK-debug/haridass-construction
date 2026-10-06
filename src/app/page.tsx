"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/nivis/Navbar";
import { Hero } from "@/components/nivis/Hero";
import { HeroTrustStrip } from "@/components/nivis/HeroTrustStrip";
import { EmotionalBrandSection } from "@/components/nivis/EmotionalBrandSection";
import { TheCareBehindNivis } from "@/components/nivis/TheCareBehindNivis";
import { RecoveryStoriesSection } from "@/components/nivis/RecoveryStoriesSection";
import { ServicesSection } from "@/components/nivis/ServicesSection";
import { ParvoEducationSection } from "@/components/nivis/ParvoEducationSection";
import { PetCarePassport } from "@/components/nivis/PetCarePassport";
import { VaccinationReminder } from "@/components/nivis/VaccinationReminder";
import { PetUrgencyGuide } from "@/components/nivis/PetUrgencyGuide";
import { PetStoreSection } from "@/components/nivis/PetStoreSection";
import { LocationSection } from "@/components/nivis/LocationSection";
import { FaqSection } from "@/components/nivis/FaqSection";
import { EmergencyCta } from "@/components/nivis/EmergencyCta";
import { FinalCta } from "@/components/nivis/FinalCta";
import { Footer } from "@/components/nivis/Footer";
import { MobileStickyBar } from "@/components/nivis/MobileStickyBar";
import { NiviAssistant } from "@/components/nivis/NiviAssistant";
import { AppointmentModal } from "@/components/nivis/AppointmentModal";

export default function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#faf7f2] text-[#1e242b] flex flex-col selection:bg-[#153e35] selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenAppointment={() => setAppointmentModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Asymmetric Hero */}
        <Hero onOpenAppointment={() => setAppointmentModalOpen(true)} />

        {/* 3. Hero Trust Strip */}
        <HeroTrustStrip />

        {/* 4. Section: Emotional Brand Statement */}
        <EmotionalBrandSection />

        {/* 5. Section: The Care Behind Nivis (Brand Story & Dr. Karthika customer quote) */}
        <TheCareBehindNivis />

        {/* 6. Section: Real Pet Recovery Stories */}
        <RecoveryStoriesSection />

        {/* 7. Section: Clinical Services (6 categories) */}
        <ServicesSection onOpenAppointment={() => setAppointmentModalOpen(true)} />

        {/* 8. Section: Parvo / Serious Illness Awareness */}
        <ParvoEducationSection />

        {/* 9. Unique Interactive Feature: Pet Store & WhatsApp Shopping Enquiry */}
        <PetStoreSection />

        {/* 10. Unique Interactive Feature: Pet Urgency Triage Guide */}
        <PetUrgencyGuide />

        {/* 11. Unique Interactive Feature: Pet Care Passport */}
        <PetCarePassport />

        {/* 12. Unique Interactive Feature: Vaccination Reminder */}
        <VaccinationReminder />

        {/* 13. Critical Section: Real Google Maps & Location Information */}
        <LocationSection />

        {/* 14. Section: Common Questions (FAQ Accordion) */}
        <FaqSection />

        {/* 15. Section: Calm Emergency CTA */}
        <EmergencyCta />

        {/* 16. Section: Final Brand CTA */}
        <FinalCta onOpenAppointment={() => setAppointmentModalOpen(true)} />
      </main>

      {/* 17. Complete Business Footer */}
      <Footer
        onOpenAppointment={() => setAppointmentModalOpen(true)}
      />

      {/* 18. Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenAppointment={() => setAppointmentModalOpen(true)} />

      {/* 19. Floating Nivi 🐾 AI Pet Assistant */}
      <NiviAssistant onOpenAppointment={() => setAppointmentModalOpen(true)} />

      {/* 20. Multi-Step Appointment Request Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </div>
  );
}
