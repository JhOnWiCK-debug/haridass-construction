"use client";

import React, { useState, useRef, useEffect } from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Sparkles,
  AlertTriangle,
  Bot,
  MapPin,
  Clock,
  Calendar,
  ShoppingBag,
  ShieldAlert,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "nivi";
  text: string;
  isUrgent?: boolean;
  action?: {
    type: "call" | "book" | "location";
    label: string;
  };
}

interface NiviAssistantProps {
  onOpenAppointment: () => void;
}

export function NiviAssistant({ onOpenAppointment }: NiviAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "nivi",
      text: "Hello! I'm Nivi 🐾, your assistant at Nivis Pet Clinic & Pet Store in Thiruverkadu. How can I help you and your pet today?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    "Where is Nivis located?",
    "What are your opening hours?",
    "Do you have a pet store?",
    "How do I book an appointment?",
    "What vaccinations do puppies need?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Safe local rule-based response engine with strict medical guardrails
  const generateResponse = (query: string): Message => {
    const q = query.toLowerCase().trim();

    // 1. Strict Emergency / Serious Symptom Detection
    const emergencyTriggers = [
      "bleeding",
      "blood",
      "seizure",
      "shaking",
      "can't breathe",
      "choking",
      "unconscious",
      "poison",
      "paralyzed",
      "hit by car",
      "dying",
      "vomiting blood",
      "severe pain",
      "dose",
      "dosage",
      "antibiotic",
      "medicine amount",
      "parvo",
    ];

    const hasEmergency = emergencyTriggers.some((t) => q.includes(t));
    if (hasEmergency) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: "Your pet may need professional veterinary attention. I cannot prescribe medication, provide dosages, or diagnose clinical emergencies. Please contact Nivis Pet Clinic directly so Dr. Karthika and the medical team can assess your companion in person.",
        isUrgent: true,
        action: {
          type: "call",
          label: `Call Nivis: ${NIVIS_DATA.contact.phone}`,
        },
      };
    }

    // 2. Location Queries
    if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("directions")) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: `Nivis Pet Clinic & Pet Store is located in MGR Nagar, Thiruverkadu, Chennai at Thirumalai Balaji Nagar, Bus Stop, No. 74/1, Main Road (Pincode: 600077). Landmark: Right near the Thirumalai Balaji Nagar Bus Stop.`,
        action: {
          type: "location",
          label: "View Clinic on Map",
        },
      };
    }

    // 3. Opening Hours & Timing
    if (q.includes("hour") || q.includes("time") || q.includes("open") || q.includes("close") || q.includes("sunday")) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: `The clinic's listed hours are Monday–Sunday with a listed closing time of 9:30 PM (hours confirmed by the business 12 weeks ago). We always recommend giving us a quick call at ${NIVIS_DATA.contact.phone} to confirm today's availability.`,
        action: {
          type: "call",
          label: "Call to Confirm Today's Hours",
        },
      };
    }

    // 4. Pet Store & Supplies
    if (q.includes("store") || q.includes("food") || q.includes("treat") || q.includes("toy") || q.includes("shampoo") || q.includes("grooming product")) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: `Yes! Nivis includes a full pet store carrying quality pet food, nutritious treats, interactive toys, grooming shampoos, collars, leashes, and care essentials. You can enquire about specific stock availability directly on WhatsApp (+91 86101 25329).`,
      };
    }

    // 5. Booking / Appointments
    if (q.includes("book") || q.includes("appointment") || q.includes("visit") || q.includes("consult")) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: `You can submit a visit request using our 'Book a Visit' form or connect over WhatsApp. Our team will verify doctor availability and confirm your preferred slot.`,
        action: {
          type: "book",
          label: "Open Appointment Request",
        },
      };
    }

    // 6. Doctor / Dr. Karthika
    if (q.includes("doctor") || q.includes("karthika") || q.includes("vet")) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: `Dr. Karthika provides attentive veterinary care at Nivis. Pet parents have specifically praised her caring, gentle, and loving handling of animals during consultations and recovery.`,
      };
    }

    // 7. Vaccinations
    if (q.includes("vaccin") || q.includes("shot") || q.includes("rabies") || q.includes("dhppi")) {
      return {
        id: Date.now().toString(),
        sender: "nivi",
        text: `We provide essential core vaccinations including DHPPi (for dogs), Anti-Rabies, and Tricat (for cats) maintained with proper cold chain protocols. Vaccination schedules vary depending on your pet's age and history, so please consult our veterinarian for a personalized schedule.`,
      };
    }

    // 8. General Care Fallback
    return {
      id: Date.now().toString(),
      sender: "nivi",
      text: `Thank you for reaching out! Nivis Pet Clinic & Pet Store offers compassionate veterinary consultations, vaccinations, pet treatments, and pet store supplies in MGR Nagar, Thiruverkadu. For personalized care or appointments, you can call us at ${NIVIS_DATA.contact.phone} or chat on WhatsApp!`,
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate natural thinking delay
    setTimeout(() => {
      const reply = generateResponse(query);
      setMessages((prev) => [...prev, reply]);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#153e35] text-white shadow-editorial-lg hover:bg-[#1b4d3e] transition-all duration-300 group border border-white/20"
          aria-label="Open Nivi pet care assistant"
        >
          <div className="w-7 h-7 rounded-full bg-amber-400 text-[#153e35] flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-110 transition-transform">
            🐾
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold tracking-wide flex items-center gap-1">
              <span>Nivi</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] text-white/70">Pet Care Assistant</span>
          </div>
        </button>
      )}

      {/* Assistant Modal Window */}
      {isOpen && (
        <div className="w-[calc(100vw-32px)] sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-[#1e242b]/15 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#153e35] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-[#153e35] flex items-center justify-center text-sm font-bold">
                🐾
              </div>
              <div>
                <div className="text-xs font-semibold flex items-center gap-1.5">
                  <span>Nivi 🐾</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white/90">
                    Clinic Guide
                  </span>
                </div>
                <div className="text-[10px] text-white/70">
                  Nivis Pet Clinic & Pet Store
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#faf7f2]/60 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#153e35] text-white rounded-tr-sm"
                      : m.isUrgent
                      ? "bg-rose-50 text-rose-950 border border-rose-200 rounded-tl-sm shadow-sm"
                      : "bg-white text-[#1e242b] border border-[#1e242b]/10 rounded-tl-sm shadow-sm"
                  }`}
                >
                  {m.isUrgent && (
                    <div className="flex items-center gap-1.5 font-bold text-rose-800 mb-1 text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Urgent Clinical Notice</span>
                    </div>
                  )}
                  <p>{m.text}</p>
                </div>

                {/* Contextual Action Button */}
                {m.action && (
                  <div className="mt-1.5">
                    {m.action.type === "call" && (
                      <a
                        href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-700 text-white font-semibold text-[11px] shadow-sm hover:bg-rose-800"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{m.action.label}</span>
                      </a>
                    )}
                    {m.action.type === "book" && (
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenAppointment();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#153e35] text-white font-semibold text-[11px] shadow-sm hover:bg-[#1b4d3e]"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{m.action.label}</span>
                      </button>
                    )}
                    {m.action.type === "location" && (
                      <a
                        href={NIVIS_DATA.location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#153e35] text-white font-semibold text-[11px] shadow-sm hover:bg-[#1b4d3e]"
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{m.action.label}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 bg-white border-t border-[#1e242b]/5 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {quickChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 rounded-full bg-[#f4efe6] text-[10px] text-[#1e242b] hover:bg-[#153e35] hover:text-white transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-[#1e242b]/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask Nivi about clinic, visits, store..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-3.5 py-2 bg-[#faf7f2] rounded-xl text-xs text-[#1e242b] border border-[#1e242b]/10 focus:outline-none focus:ring-1 focus:ring-[#153e35]"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-[#153e35] text-white disabled:opacity-40 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Guardrail Disclaimer Footer */}
          <div className="px-3 py-1.5 bg-[#f4efe6] text-[9px] text-[#5e6872] text-center border-t border-[#1e242b]/5">
            Assistant does not diagnose illness or replace professional veterinary examination.
          </div>
        </div>
      )}
    </div>
  );
}
