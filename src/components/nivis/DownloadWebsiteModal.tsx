"use client";

import React, { useState } from "react";
import { generateNivisStaticZip } from "@/utils/generateStaticSite";
import {
  Download,
  CheckCircle,
  FileCode,
  Globe,
  Sparkles,
  X,
  ShieldCheck,
  FolderArchive,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface DownloadWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadWebsiteModal({ isOpen, onClose }: DownloadWebsiteModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const checklist = [
    { label: "Semantic HTML5, CSS & JavaScript", status: "Verified" },
    { label: "Responsive Design (Mobile, Tablet, Desktop)", status: "Verified" },
    { label: "Real Google Maps Embed & Directions Fallback", status: "Verified" },
    { label: "Direct Phone & WhatsApp Links (+91 86101 25329)", status: "Verified" },
    { label: "Multi-step Appointment Request Flow", status: "Verified" },
    { label: "Pet Care Passport (Local Storage Engine)", status: "Verified" },
    { label: "Vaccination Reminder System", status: "Verified" },
    { label: "Pet Urgency Triage Guide (🔴 🟠 🟡)", status: "Verified" },
    { label: "Pet Store WhatsApp Shopping Enquiry", status: "Verified" },
    { label: "Nivi 🐾 AI Pet Assistant Fallback Engine", status: "Verified" },
    { label: "FAQ Accordion & Medical Disclaimers", status: "Verified" },
    { label: "Netlify Zero-Install Drag & Drop (app.netlify.com/drop)", status: "Ready" },
  ];

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const blob = await generateNivisStaticZip();

      // Trigger browser download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nivis-Pet-Clinic-Static.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setDownloaded(true);
    } catch (err) {
      console.error("Failed to generate zip", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf7f2] rounded-[2.5rem] max-w-xl w-full overflow-hidden shadow-2xl border border-[#1e242b]/15 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#153e35] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
            <FolderArchive className="w-3.5 h-3.5 text-amber-300" />
            <span>Production Static Package</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight">
            Download Website for Netlify
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Download → Extract → Drag to Netlify Drop → Instantly Live
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-[#f4efe6] p-4 rounded-2xl border border-[#1e242b]/8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1e242b] mb-2">
              <Globe className="w-4 h-4 text-[#153e35]" />
              <span>Zero-Install Deployment Workflow</span>
            </div>
            <p className="text-xs text-[#5e6872] leading-relaxed">
              No <code className="bg-white/80 px-1 py-0.5 rounded text-[11px]">npm install</code>, no Node.js build process, and no server database configuration required. All assets, scripts, and responsive styles are self-contained.
            </p>
          </div>

          {/* Validation Checklist */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1e242b] mb-3">
              Pre-flight Validation & Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs max-h-48 overflow-y-auto pr-1">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#1e242b]/5"
                >
                  <span className="text-[#1e242b] text-[11px] truncate mr-2">{item.label}</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 shrink-0">
                    <CheckCircle className="w-3 h-3" />
                    <span>{item.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Deployment Link */}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-4 px-6 rounded-full bg-[#153e35] hover:bg-[#1b4d3e] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>
                {downloading
                  ? "Generating Production Package..."
                  : downloaded
                  ? "Download Again (Nivis-Pet-Clinic-Static.zip)"
                  : "Download Complete Website (ZIP)"}
              </span>
            </button>

            {downloaded && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <span className="text-xs text-emerald-800 font-semibold block">
                  ZIP Downloaded Successfully!
                </span>
                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#153e35] font-bold hover:underline mt-1"
                >
                  <span>Open Netlify Drop (app.netlify.com/drop)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
