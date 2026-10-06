"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NIVIS_DATA, StoreCategory } from "@/data/nivisData";
import {
  ShoppingBag,
  MessageCircle,
  Sparkles,
  Check,
  Send,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export function PetStoreSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("food");
  const [enquiryProduct, setEnquiryProduct] = useState("");
  const [enquiryQuantity, setEnquiryQuantity] = useState("1");
  const [customNote, setCustomNote] = useState("");

  const activeCategoryObj =
    NIVIS_DATA.storeCategories.find((c) => c.id === selectedCategory) ||
    NIVIS_DATA.storeCategories[0];

  const handleQuickEnquire = (item: string) => {
    setEnquiryProduct(item);
  };

  const generateWhatsAppUrl = () => {
    const itemString = enquiryProduct.trim() || activeCategoryObj.name;
    const qtyText = enquiryQuantity ? ` (Qty: ${enquiryQuantity})` : "";
    const noteText = customNote.trim() ? ` Notes: ${customNote.trim()}` : "";
    const text = `Hi Nivis Pet Clinic & Pet Store, I would like to enquire about ${itemString}${qtyText}.${noteText} Is it available?`;
    return `https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pet-store" className="py-20 sm:py-28 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Clinic & Store Combined</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            More than a{" "}
            <span className="italic text-[#153e35] font-normal">clinic.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            Everyday essentials for happier, healthier pets. Pick up doctor-recommended diets,
            supplements, tasty rewards, and daily accessories right in Thiruverkadu.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-12">
          {NIVIS_DATA.storeCategories.map((cat) => {
            const isSelected = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setEnquiryProduct("");
                }}
                className={`group rounded-2xl p-3 sm:p-4 text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#153e35] shadow-editorial ring-2 ring-[#153e35]/10"
                    : "bg-[#f4efe6] border-[#1e242b]/5 hover:bg-white hover:border-[#1e242b]/15"
                }`}
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-[#e8e2d5]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="180px"
                  />
                </div>
                <div>
                  <h3
                    className={`font-serif text-base sm:text-lg font-semibold tracking-tight ${
                      isSelected ? "text-[#153e35]" : "text-[#1e242b]"
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-[#5e6872] line-clamp-1 mt-0.5">
                    {cat.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Category Showcase & WhatsApp Shopping Enquiry Box */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-[#1e242b]/8 shadow-editorial-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Category Visual & Sample Items */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebf1ee] text-[#153e35] text-xs font-semibold mb-3">
                <span>Selected Category: {activeCategoryObj.name}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1e242b] mb-2">
                {activeCategoryObj.tagline}
              </h3>

              <p className="text-xs sm:text-sm text-[#5e6872] leading-relaxed mb-6 font-light">
                {activeCategoryObj.description}
              </p>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1e242b] block mb-2.5">
                  Frequently Requested in {activeCategoryObj.name} (Click to Enquire)
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCategoryObj.sampleItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickEnquire(item)}
                      className={`text-xs px-3.5 py-2 rounded-xl transition-all border flex items-center gap-1.5 ${
                        enquiryProduct === item
                          ? "bg-[#153e35] text-white border-[#153e35] shadow-sm"
                          : "bg-[#faf7f2] border-[#1e242b]/10 text-[#1e242b] hover:bg-[#ebf1ee]"
                      }`}
                    >
                      <span>{item}</span>
                      {enquiryProduct === item && <Check className="w-3.5 h-3.5 text-amber-300" />}
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-[11px] text-[#5e6872] italic">
                * We keep a carefully curated in-clinic stock. If you need a specific brand, dietary formula, or toy size, enquire below and we&apos;ll check availability immediately.
              </p>
            </div>

            {/* Right: WhatsApp Enquiry Box (No Fake Checkout) */}
            <div className="lg:col-span-5 bg-[#faf7f2] rounded-3xl p-6 sm:p-7 border border-[#1e242b]/8">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e242b]/10">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="font-serif text-lg font-semibold text-[#1e242b]">
                  WhatsApp Stock Enquiry
                </h4>
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-[#1e242b] block mb-1">
                    Category / Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Royal Canin Puppy 1kg, Dental chews..."
                    value={enquiryProduct}
                    onChange={(e) => setEnquiryProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1e242b]/10 text-xs sm:text-sm text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#1e242b] block mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      disabled
                      value={activeCategoryObj.name}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-100 text-[#5e6872] border border-[#1e242b]/10 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#1e242b] block mb-1">
                      Quantity
                    </label>
                    <select
                      value={enquiryQuantity}
                      onChange={(e) => setEnquiryQuantity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1e242b]/10 text-xs text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#1e242b] block mb-1">
                    Specific Brand or Size (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Medium size harness, Puppy flavor"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1e242b]/10 text-xs text-[#1e242b] focus:outline-none focus:ring-1 focus:ring-[#153e35]"
                  />
                </div>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#153e35] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1b4d3e] transition-colors shadow-md mt-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Ask on WhatsApp (+91 86101 25329)</span>
                </a>

                <div className="text-[10px] text-center text-[#5e6872]">
                  Direct WhatsApp reply with pricing & in-store availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
