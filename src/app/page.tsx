"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PostCareSection } from "@/components/sections/PostCareSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { BookingModal } from "@/components/ui/BookingModal";

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBookingModal = (doctor = "", service = "") => {
    setSelectedDoctor(doctor);
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleDoctorSelected = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setIsBookingModalOpen(true);
  };

  const handleServiceSelected = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-slate-800 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* 1. Header / Sticky Navigation */}
      <Navbar onOpenAppointmentModal={() => handleOpenBookingModal()} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenAppointmentModal={() => handleOpenBookingModal()} />

        {/* 3. About the Clinic */}
        <AboutSection />

        {/* 4. Doctors / Dental Specialists */}
        <DoctorsSection onSelectDoctor={handleDoctorSelected} />

        {/* 5. Dental Services (Interactive modal) */}
        <ServicesSection onSelectService={handleServiceSelected} />

        {/* 6. Interactive Post-Treatment Care (Extremely Important Section) */}
        <PostCareSection onOpenAppointment={() => handleOpenBookingModal()} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Clinic Gallery (Responsive grid with Lightbox) */}
        <GallerySection />

        {/* 9 & 10. Location / Google Maps & Opening Hours */}
        <LocationSection />

        {/* 11. Appointment Booking Form Section */}
        <AppointmentSection
          initialDoctor={selectedDoctor}
          initialService={selectedService}
        />
      </main>

      {/* 14. Footer */}
      <Footer onOpenAppointmentModal={() => handleOpenBookingModal()} />

      {/* 12. Floating Interactive Assistant Chatbot (Bottom-Right) */}
      <ChatWidget onOpenBooking={() => handleOpenBookingModal()} />

      {/* 13. Floating Call & WhatsApp Buttons (Bottom-Left) */}
      <FloatingActions />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedDoctor={selectedDoctor}
        preselectedService={selectedService}
      />

    </div>
  );
}
