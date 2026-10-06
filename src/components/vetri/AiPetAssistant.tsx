"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  AlertTriangle,
  Bot,
  Settings,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface Message {
  sender: "user" | "assistant" | "system";
  text: string;
  isEmergency?: boolean;
}

interface AiPetAssistantProps {
  onOpenAppointment: () => void;
}

export function AiPetAssistant({ onOpenAppointment }: AiPetAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hello! I am the Vetri Care Assistant. I can help with clinic hours, location in Perungudi, services, appointments, or general pet care guidance. How may I assist you today?",
    },
  ]);

  const quickQuestions = [
    "What are your opening hours?",
    "Where is the clinic located?",
    "How do I book an appointment?",
    "Do you offer supportive care for senior pets?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Emergency keywords check
  const isEmergencyQuery = (query: string) => {
    const q = query.toLowerCase();
    const emergencyTerms = [
      "emergency",
      "bleeding",
      "blood",
      "choking",
      "choke",
      "seizure",
      "convulsion",
      "unconscious",
      "fainted",
      "collapse",
      "poison",
      "poisoned",
      "toxic",
      "rat poison",
      "hit by car",
      "accident",
      "cannot breathe",
      "difficulty breathing",
      "pale gums",
      "blue tongue",
      "vomiting blood",
      "snake bite",
    ];
    return emergencyTerms.some((term) => q.includes(term));
  };

  const generateLocalResponse = (query: string): { text: string; isEmergency: boolean } => {
    const q = query.toLowerCase();

    if (isEmergencyQuery(q)) {
      return {
        text: "This could require urgent veterinary attention. Please do not wait for online messages — call Vetri Pet Hospital directly at 93840 17392 immediately, or bring your pet to the nearest emergency clinic.",
        isEmergency: true,
      };
    }

    if (q.includes("hour") || q.includes("time") || q.includes("open") || q.includes("timing")) {
      return {
        text: `Vetri Pet Hospital & Pet Clinic is open daily from 9:00 AM to 9:00 PM (Monday through Sunday). Consultation walk-ins and appointments are both welcomed.`,
        isEmergency: false,
      };
    }

    if (q.includes("address") || q.includes("where") || q.includes("location") || q.includes("map") || q.includes("perungudi")) {
      return {
        text: `We are located at 2, Erikarai St (Panchayat Main Road), near Sunrise Pharmacy, Kurinji Nagar, Perungudi, Chennai 600097. You can tap 'Get Directions' in the Location section to navigate easily.`,
        isEmergency: false,
      };
    }

    if (q.includes("doctor") || q.includes("vet") || q.includes("sandhiya") || q.includes("ramu")) {
      return {
        text: `Consultations are conducted by Dr. Sandhiya. S (93840 17392) and Dr. Ramu (82488 42014). Both veterinary doctors focus on thorough clinical assessment, gentle handling, and honest medical guidance.`,
        isEmergency: false,
      };
    }

    if (q.includes("book") || q.includes("appointment") || q.includes("visit") || q.includes("schedule")) {
      return {
        text: `You can request an appointment directly on this website using our 'Book a Visit' form, or message us on WhatsApp at +91 93840 17392. We will immediately confirm doctor availability.`,
        isEmergency: false,
      };
    }

    if (q.includes("service") || q.includes("treatment") || q.includes("vaccine") || q.includes("vaccination")) {
      return {
        text: `Vetri provides General Consultations, Preventive Care, Vaccinations (Anti-Rabies, DHPPiL, Tricat), Medical Treatment for sudden illnesses, Supportive Care (IV fluids), and Senior Pet Care for dogs, cats, birds, rabbits, and guinea pigs.`,
        isEmergency: false,
      };
    }

    if (q.includes("senior") || q.includes("simba") || q.includes("ckd") || q.includes("fluid")) {
      return {
        text: `Yes, we provide supportive care for senior pets. As shared in patient reviews (such as 13-year-old Simba with CKD), we offer IV fluids, hydration management, and comforting geriatric care to keep older pets comfortable.`,
        isEmergency: false,
      };
    }

    if (q.includes("medicine") || q.includes("dose") || q.includes("dosage") || q.includes("prescribe") || q.includes("cure")) {
      return {
        text: `As an AI assistant, I cannot prescribe medication, provide drug dosages, or diagnose specific diseases. Veterinary treatment requires a physical clinical evaluation. Please bring your companion to Vetri Pet Hospital or call 93840 17392.`,
        isEmergency: false,
      };
    }

    return {
      text: `Vetri Pet Hospital & Pet Clinic is dedicated to compassionate veterinary treatment in Perungudi, Chennai. Open daily until 9 PM. Would you like assistance with booking an appointment, checking our location, or speaking with Dr. Sandhiya directly at 93840 17392?`,
      isEmergency: false,
    };
  };

  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const newMessages: Message[] = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    if (apiKey) {
      try {
        // Direct Gemini API call if key configured
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `System Context: You are Vetri Care Assistant for Vetri Pet Hospital & Pet Clinic in Perungudi, Chennai (Phone: 93840 17392, Open 9 AM - 9 PM daily, Address: 2 Erikarai St Kurinji Nagar). 
Rules:
1. NEVER diagnose diseases or prescribe medication or dosages.
2. If an emergency (bleeding, poison, choking, collapse), urgently advise calling 93840 17392 immediately.
3. Be calm, polite, and emphasize Vetri's treatment-first ethos.
4. Keep answers brief (2-4 sentences max).

User Query: ${userText}`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        const replyText =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          generateLocalResponse(userText).text;
        const isEmerg = isEmergencyQuery(userText);

        setMessages((prev) => [
          ...prev,
          { sender: "assistant", text: replyText, isEmergency: isEmerg },
        ]);
      } catch (e) {
        const fallback = generateLocalResponse(userText);
        setMessages((prev) => [
          ...prev,
          { sender: "assistant", text: fallback.text, isEmergency: fallback.isEmergency },
        ]);
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        const response = generateLocalResponse(userText);
        setMessages((prev) => [
          ...prev,
          { sender: "assistant", text: response.text, isEmergency: response.isEmergency },
        ]);
        setLoading(false);
      }, 350);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom right, offset above mobile action bar) */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40">
        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 bg-[#11161b] hover:bg-[#0f4c3a] text-white rounded-full shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 group"
            aria-label="Open Vetri Care Assistant"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <Bot className="w-4 h-4 text-emerald-300" />
            <span className="text-xs font-semibold tracking-wide pr-1">
              Vetri Assistant 🐾
            </span>
          </button>
        ) : null}
      </div>

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[580px] h-[520px] bg-[#faf8f5] border border-[#ded5c5] rounded-sm shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#11161b] text-white px-4 py-3.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0f4c3a] text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold flex items-center gap-1.5">
                  <span>Vetri Care Assistant</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-800">
                    Clinic AI
                  </span>
                </div>
                <div className="text-[10px] text-zinc-400">
                  Open Daily · 9 AM to 9 PM
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setShowConfig(!showConfig)}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                title="API Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Optional API Key Configuration Strip */}
          {showConfig && (
            <div className="p-3 bg-[#f4efe6] border-b border-[#ded5c5] text-xs space-y-2 animate-in fade-in">
              <div className="flex justify-between items-center text-[11px] font-semibold text-[#11161b]">
                <span>Optional Gemini API Key</span>
                <button
                  type="button"
                  onClick={() => setShowConfig(false)}
                  className="text-[#5e6872] hover:text-[#11161b]"
                >
                  ✕
                </button>
              </div>
              <input
                type="password"
                placeholder="AIzaSy... (Leave blank for built-in knowledge base)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded5c5] rounded-xs"
              />
              <p className="text-[10px] text-[#5e6872]">
                Without an API key, the assistant seamlessly answers using Vetri's verified clinic facts.
              </p>
            </div>
          )}

          {/* Conversation messages scroll area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#faf8f5]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-sm p-3 text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#0f4c3a] text-white"
                      : m.isEmergency
                      ? "bg-[#fff1ed] border border-[#b85433] text-[#11161b]"
                      : "bg-white border border-[#ded5c5] text-[#11161b] shadow-2xs"
                  }`}
                >
                  {m.isEmergency && (
                    <div className="flex items-center gap-1.5 text-[#b85433] font-bold pb-1 border-b border-[#b85433]/20 mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>URGENT MEDICAL NOTICE</span>
                    </div>
                  )}

                  <p>{m.text}</p>

                  {m.isEmergency && (
                    <div className="pt-2 mt-2 border-t border-[#b85433]/20">
                      <a
                        href={`tel:${VETRI_DATA.phone}`}
                        className="inline-flex items-center gap-1.5 w-full justify-center px-3 py-1.5 text-xs font-semibold uppercase bg-[#b85433] text-white rounded-xs"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call 93840 17392 Now
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-[#5e6872] px-1 mt-0.5">
                  {m.sender === "user" ? "You" : "Vetri Care"}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-1.5 text-xs text-[#5e6872] italic bg-white p-2.5 rounded-sm border border-[#ded5c5] w-28">
                <span className="w-1.5 h-1.5 bg-[#0f4c3a] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#0f4c3a] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#0f4c3a] rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px]">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick chips */}
          <div className="px-3 py-2 bg-[#f4efe6] border-t border-[#ded5c5] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(q)}
                className="whitespace-nowrap text-[10px] font-medium text-[#11161b] bg-white border border-[#ded5c5] hover:border-[#0f4c3a] px-2.5 py-1 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input box */}
          <div className="p-3 bg-white border-t border-[#ded5c5] flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about hours, location, care..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="flex-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded5c5] rounded-xs focus:outline-none focus:border-[#0f4c3a]"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              className="p-2 bg-[#0f4c3a] hover:bg-[#165b4c] text-white rounded-xs transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Safety guard disclaimer footer */}
          <div className="bg-[#faf8f5] px-3 py-1.5 border-t border-[#ded5c5] text-[9px] text-[#5e6872] text-center">
            Educational assistant only · Does not diagnose or prescribe
          </div>

        </div>
      )}
    </>
  );
}
