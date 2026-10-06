"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/vetri/Navbar";
import { Hero } from "@/components/vetri/Hero";
import { TrustStrip } from "@/components/vetri/TrustStrip";
import { EmotionalBrandStatement } from "@/components/vetri/EmotionalBrandStatement";
import { TreatmentFirstSection } from "@/components/vetri/TreatmentFirstSection";
import { ServicesSection } from "@/components/vetri/ServicesSection";
import { PatientStorySection } from "@/components/vetri/PatientStorySection";
import { ReviewsSection } from "@/components/vetri/ReviewsSection";
import { OurApproachSection } from "@/components/vetri/OurApproachSection";
import { ClinicTourSection } from "@/components/vetri/ClinicTourSection";
import { AppointmentExperience } from "@/components/vetri/AppointmentExperience";
import { LocationAndMapsSection } from "@/components/vetri/LocationAndMapsSection";
import { PetCareToolsSection } from "@/components/vetri/PetCareToolsSection";
import { ContactSection } from "@/components/vetri/ContactSection";
import { FinalCta } from "@/components/vetri/FinalCta";
import { Footer } from "@/components/vetri/Footer";
import { MobileActionBar } from "@/components/vetri/MobileActionBar";
import { AiPetAssistant } from "@/components/vetri/AiPetAssistant";
import { AppointmentModal } from "@/components/vetri/AppointmentModal";

export default function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const handleOpenAppointment = () => {
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentModalOpen(false);
  };

  return (
    <div id="top" className="min-h-screen bg-[#faf8f5] text-[#11161b] flex flex-col selection:bg-[#0f4c3a] selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenAppointment={handleOpenAppointment} />

        {/* 3. Hero Trust Strip */}
        <TrustStrip />

        {/* 4. Section 2 — Emotional Brand Statement */}
        <EmotionalBrandStatement />

        {/* 5. Section 3 — Treatment-First Positioning */}
        <TreatmentFirstSection />

        {/* 6. Section 4 — Services */}
        <ServicesSection onOpenAppointment={handleOpenAppointment} />

        {/* 7. Section 5 — Real Patient Story (Simba) */}
        <PatientStorySection onOpenAppointment={handleOpenAppointment} />

        {/* 8. Section 6 — Customer Reviews */}
        <ReviewsSection />

        {/* 9. Section 7 — Our Approach */}
        <OurApproachSection />

        {/* 10. Authentic Practice Tour (Real Photos & Doctors) */}
        <ClinicTourSection />

        {/* 11. Section 8 & 9 — Appointment Experience & WhatsApp Leads */}
        <AppointmentExperience />

        {/* 12. Section 10 & 11 — Google Maps & "Near You" Local Section */}
        <LocationAndMapsSection />

        {/* 13. Section 12 — Pet Care Tools (Vaccine, Profile, Guide, Emergency) */}
        <PetCareToolsSection />

        {/* 14. Section 14 — Minimal Contact Section */}
        <ContactSection />

        {/* 15. Final Dark Emotional CTA */}
        <FinalCta onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Persistent Mobile Bottom Action Bar */}
      <MobileActionBar onOpenAppointment={handleOpenAppointment} />

      {/* 18. Subtle Floating AI Pet Assistant */}
      <AiPetAssistant onOpenAppointment={handleOpenAppointment} />

      {/* 19. Global Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointment}
      />
    </div>
  );
}
