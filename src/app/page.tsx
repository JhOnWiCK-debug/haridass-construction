"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectGallery from "@/components/sections/ProjectGallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CostEstimator from "@/components/sections/CostEstimator";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import ConsultationModal from "@/components/ui/ConsultationModal";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import FloatingContactBar from "@/components/ui/FloatingContactBar";
import { PROJECTS, ProjectItem } from "@/data/constructionData";

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenConsultation = (serviceName = "") => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleOpenLightbox = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#f3f3f1] font-sans antialiased selection:bg-[#c5a880]/30 selection:text-white">
      {/* Sticky Responsive Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main>
        {/* Full-Screen Architectural Hero Section */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Trust Indicators Bar */}
        <TrustBar />

        {/* About Haridass Construction */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Core Construction Services */}
        <ServicesSection onSelectService={(service) => handleOpenConsultation(service)} />

        {/* Portfolio & Project Gallery */}
        <ProjectGallery
          onOpenLightbox={handleOpenLightbox}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Why Choose Haridass Construction */}
        <WhyChooseUs />

        {/* Real Customer Reviews from Google */}
        <ReviewsSection />

        {/* 4-Step Construction Process */}
        <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Interactive Construction Cost Estimator */}
        <CostEstimator onOpenConsultation={() => handleOpenConsultation()} />

        {/* Location & Service Area Map */}
        <LocationSection />

        {/* Contact & Conversion Section */}
        <ContactSection onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Conversion Bar */}
      <FloatingContactBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedService}
      />

      {/* Project Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        projects={PROJECTS}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onSelectProject={(p) => setSelectedProject(p)}
        onInquire={(projName) => handleOpenConsultation(`Inquiry for ${projName}`)}
      />
    </div>
  );
}
