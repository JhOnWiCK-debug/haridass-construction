"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLINIC_GALLERY, GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { Camera, ZoomIn, Eye, Sparkles } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Exterior & Signage",
    "Operatory & Technology",
    "Reception & Ambience",
  ];

  const filteredItems = CLINIC_GALLERY.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const handleNavigate = (index: number) => {
    if (filteredItems[index]) {
      setSelectedItem(filteredItems[index]);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-emerald-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            Clinic Photographs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Take a Look Inside Our Clinic
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Real photos of Jaksh&apos;s Dental Junction in Mogappair East. Explore our hygienic treatment operatory, welcoming reception lounge, and modern clinical environment.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200"
                }`}
              >
                {cat} {cat === "All" ? `(${CLINIC_GALLERY.length})` : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-emerald-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`Open photo of ${item.title}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-slate-800 shadow-2xs">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-emerald-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom caption text overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold leading-snug drop-shadow-xs">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-1 font-normal drop-shadow-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
