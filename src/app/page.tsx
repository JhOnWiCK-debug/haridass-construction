"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { SpecialistCentresSection } from "@/components/sections/SpecialistCentresSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PostCareSection } from "@/components/sections/PostCareSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BookingModal } from "@/components/ui/BookingModal";

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBookingModal = (service = "") => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#18332E] font-sans antialiased selection:bg-[#EEF5EF] selection:text-[#176B57]">
      
      {/* 01. Refined Navigation */}
      <Navbar onOpenAppointmentModal={() => handleOpenBookingModal()} />

      <main>
        {/* 02. Clinic-First Hero */}
        <HeroSection onOpenAppointmentModal={() => handleOpenBookingModal()} />

        {/* 03. A Short Introduction to Jaksh's Dental Junction */}
        <AboutSection />

        {/* 04. Selected Treatment Areas (11 Categories) */}
        <ServicesSection onSelectService={(service) => handleOpenBookingModal(service)} />

        {/* 05. A Carefully Composed Clinic Photography Section */}
        <GallerySection />

        {/* 06. Meet the Dental Team ("Meet Your Dental Care Team" - 7 Members) */}
        <DoctorsSection onOpenAppointmentModal={() => handleOpenBookingModal()} />

        {/* 07. Recognition and Professional Affiliations (Colgate-Palmolive #ChampionsOfSmiles) */}
        <RecognitionSection />

        {/* 08. Registered Centres and Specialist Capabilities (ABHAYA, Sports Dental, Precisalign) */}
        <SpecialistCentresSection />

        {/* 09. Patient Reviews & Authentic Feedback Section */}
        <ReviewsSection />

        {/* 10. Interactive Post-Treatment Dental Care */}
        <PostCareSection onOpenAppointment={() => handleOpenBookingModal()} />

        {/* 11. Instagram / Social Section ("Life at Jaksh's Dental Junction") */}
        <InstagramSection />

        {/* 12. Clinic Location, Contact Information and Opening Hours */}
        <LocationSection onOpenAppointmentModal={() => handleOpenBookingModal()} />

        {/* 13. Appointment Enquiry Section */}
        <AppointmentSection initialService={selectedService} />
      </main>

      {/* 14. Refined Footer with Social Media Strip */}
      <Footer onOpenAppointmentModal={() => handleOpenBookingModal()} />

      {/* Permanent Floating WhatsApp Quick Contact (Bottom-Left) */}
      <FloatingWhatsApp />

      {/* Discreet, Subordinate Contact Assistant (Bottom-Right) */}
      <ChatWidget onOpenBooking={() => handleOpenBookingModal()} />

      {/* Accessible Appointment Enquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedService={selectedService}
      />

    </div>
  );
}
