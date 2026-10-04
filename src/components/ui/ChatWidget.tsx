"use client";

import React, { useState, useRef, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { DENTAL_SERVICES } from "@/data/services";
import { DOCTORS } from "@/data/doctors";
import { ClinicLogo } from "@/components/ui/ClinicLogo";
import {
  MessageCircle,
  X,
  Minimize2,
  Maximize2,
  Send,
  Calendar,
  MapPin,
  Phone,
  Sparkles,
  Clock,
  HeartPulse,
  ExternalLink,
  Bot,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: { label: string; action: string }[];
  actionLink?: { label: string; url: string; isExternal?: boolean };
}

interface ChatWidgetProps {
  onOpenBooking?: () => void;
  onOpenServiceModal?: (serviceId: string) => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  onOpenBooking,
  onOpenServiceModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: "1",
      sender: "bot",
      text: "How may I assist you?",
      timestamp: "Just now",
      quickReplies: [
        { label: "Book an appointment", action: "action_book" },
        { label: "Our Services", action: "action_services" },
        { label: "Locations", action: "action_location" },
        { label: "Contact Us", action: "action_contact" },
      ],
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleQuickAction = (action: string) => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    switch (action) {
      case "action_book": {
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: "user",
          text: "Book an appointment",
          timestamp,
        };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "You can book your consultation online with our specialists or reach us directly on WhatsApp/Phone. Opening the appointment booking section for you now!",
          timestamp,
          quickReplies: [
            { label: "Call 088255 64486", action: "action_call" },
            { label: "Opening Hours", action: "action_timings" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        if (onOpenBooking) onOpenBooking();
        const target = document.querySelector("#appointment");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "action_services": {
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: "user",
          text: "Our Services",
          timestamp,
        };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We offer comprehensive dental treatments at Jaksh's Dental Junction: \n• Rotary Endodontics (Root Canal)\n• Orthodontics (Braces & Clear Aligners)\n• Dental Implants & Oral Surgery\n• Fillings & Restorations\n• Crowns & Fixed Bridges\n• Periodontics (Gum Care)\n• Pedodontics (Children's Dental Care)\n• Teeth Bleaching & Whitening\n• Full & Partial Dentures",
          timestamp,
          quickReplies: [
            { label: "Book an appointment", action: "action_book" },
            { label: "Post-Treatment Care", action: "action_postcare" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        const target = document.querySelector("#services");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "action_location": {
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: "user",
          text: "Locations",
          timestamp,
        };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `📍 Our Clinic Address:\nJaksh's Dental Junction\nValayapathi Salai, 6th Block, Block 6, Mogappair East, Chennai, Tamil Nadu 600037.\nPlus Code: 35HP+8F Chennai.`,
          timestamp,
          actionLink: {
            label: "Open in Google Maps",
            url: CLINIC_INFO.googleMapsUrl,
            isExternal: true,
          },
          quickReplies: [
            { label: "Get Directions", action: "action_directions" },
            { label: "Opening Hours", action: "action_timings" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        const target = document.querySelector("#location");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "action_contact": {
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: "user",
          text: "Contact Us",
          timestamp,
        };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `📞 Phone: 088255 64486\n💬 WhatsApp: +91 88255 64486\n⏰ Hours: Monday–Saturday: 5:00 PM – 8:30 PM (Sunday Closed)\n📍 Location: Valayapathi Salai, Mogappair East, Chennai`,
          timestamp,
          quickReplies: [
            { label: "Call Clinic Now", action: "action_call" },
            { label: "Book an appointment", action: "action_book" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        break;
      }

      case "action_call": {
        window.location.href = CLINIC_INFO.phone;
        break;
      }

      case "action_directions": {
        window.open(CLINIC_INFO.googleMapsDirectionsUrl, "_blank");
        break;
      }

      case "action_timings": {
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: "user",
          text: "Clinic Timings",
          timestamp,
        };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `🕒 Jaksh's Dental Junction Timings:\n• Monday to Saturday: 5:00 PM – 8:30 PM\n• Sunday: Closed\n\nEvening hours are tailored for family convenience!`,
          timestamp,
          quickReplies: [
            { label: "Book an appointment", action: "action_book" },
            { label: "Locations", action: "action_location" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        break;
      }

      case "action_postcare": {
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: "user",
          text: "Post-Treatment Care",
          timestamp,
        };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We have interactive recovery protocols for Extraction, Braces, Fillings, Crowns, Implants, Gum Care, Whitening, and Dentures! Navigating to the post-care guide section for you.",
          timestamp,
          quickReplies: [
            { label: "Book follow-up", action: "action_book" },
            { label: "Contact Us", action: "action_contact" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        const target = document.querySelector("#post-treatment-care");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      default:
        break;
    }
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setInputMessage("");

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp,
    };

    setMessages((prev) => [...prev, userMsg]);

    // Intelligent local bot reply logic
    setTimeout(() => {
      const lower = userText.toLowerCase();
      let replyText = "";
      let replies = [
        { label: "Book an appointment", action: "action_book" },
        { label: "Our Services", action: "action_services" },
        { label: "Locations", action: "action_location" },
        { label: "Contact Us", action: "action_contact" },
      ];

      if (lower.includes("time") || lower.includes("hour") || lower.includes("open") || lower.includes("sunday")) {
        replyText = "We are open Monday to Saturday from 5:00 PM to 8:30 PM. We are closed on Sundays. Prior appointments are recommended to ensure dedicated time.";
      } else if (lower.includes("where") || lower.includes("address") || lower.includes("location") || lower.includes("map") || lower.includes("mogappair")) {
        replyText = "We are located at Valayapathi Salai, 6th Block, Mogappair East, Chennai 600037 (Plus Code: 35HP+8F).";
      } else if (lower.includes("phone") || lower.includes("call") || lower.includes("contact") || lower.includes("number")) {
        replyText = `You can call us directly at 088255 64486 or WhatsApp us for appointments and inquiries.`;
      } else if (lower.includes("doctor") || lower.includes("priya") || lower.includes("specialist")) {
        replyText = "Our founder is Dr. Krishnapriya G, Rotary Endodontist with 12 years of clinical practice and Anbu Maruthuvar Awardee. We also have specialist consultant surgeons, orthodontists, periodontists, and pedodontists.";
      } else if (lower.includes("book") || lower.includes("appointment") || lower.includes("slot")) {
        replyText = "You can fill in our online appointment form on this page, or click below to submit your preferred date and time.";
      } else if (lower.includes("root canal") || lower.includes("pain") || lower.includes("toothache")) {
        replyText = "Dr. Krishnapriya G specializes in advanced Rotary Endodontics (Root Canal Treatment) for gentle, pain-relieving care. Please schedule an examination so we can evaluate your tooth.";
      } else if (lower.includes("kid") || lower.includes("child") || lower.includes("pediatric")) {
        replyText = "We have a dedicated consultant pedodontist (Dr. Sindhuja) and a child-friendly clinic with a fun shark mural divider to make dental care comfortable for children!";
      } else if (lower.includes("braces") || lower.includes("aligner") || lower.includes("ortho")) {
        replyText = "Dr. Preethi provides Orthodontics and Dentofacial Orthopedics including traditional braces and modern clear aligners.";
      } else if (lower.includes("cost") || lower.includes("fee") || lower.includes("price")) {
        replyText = "Treatment fees depend on the specific procedure and individual dental assessment. We maintain transparent pricing with no hidden charges. Book a consultation for a detailed treatment plan!";
      } else {
        replyText = `Thank you for your inquiry! Dr. Krishnapriya G and our clinic team at Mogappair East are here to assist you. Would you like to schedule an appointment or check our location?`;
      }

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        quickReplies: replies,
      };

      setMessages((prev) => [...prev, botReply]);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={`w-[92vw] sm:w-96 bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden flex flex-col mb-4 transition-all duration-300 animate-in slide-in-from-bottom-5 ${
            isMinimized ? "h-16" : "h-[540px] max-h-[80vh]"
          }`}
          role="region"
          aria-label="Dental Clinic Assistant Chat"
        >
          {/* Header */}
          <div className="p-4 bg-emerald-600 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center border border-white/20 shrink-0">
                <Bot className="w-6 h-6 text-emerald-100" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight text-white leading-tight">
                  Jaksh&apos;s Dental Junction
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-[11px] text-emerald-100 font-medium">
                    We are online to assist you
                  </span>
                </div>
              </div>
            </div>

            {/* Header controls: Minimize & Close */}
            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-xl hover:bg-white/15 hover:text-white transition-colors"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/15 hover:text-white transition-colors"
                aria-label="Close chat assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body (Hidden when minimized) */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70 text-xs sm:text-sm">
                
                {/* Intro announcement */}
                <div className="text-center my-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Virtual Dental Desk • Mogappair East
                  </span>
                </div>

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 whitespace-pre-line leading-relaxed shadow-xs ${
                        msg.sender === "user"
                          ? "bg-emerald-600 text-white rounded-br-xs"
                          : "bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs"
                      }`}
                    >
                      {msg.text}

                      {/* Action link if available */}
                      {msg.actionLink && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100">
                          <a
                            href={msg.actionLink.url}
                            target={msg.actionLink.isExternal ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {msg.actionLink.label}
                          </a>
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>

                    {/* Quick Reply Chips if provided */}
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                        {msg.quickReplies.map((qr, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleQuickAction(qr.action)}
                            className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200 text-xs font-semibold transition-all duration-150 shadow-2xs"
                          >
                            {qr.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={handleSendText}
                className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask a question or type a query..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-xl shadow-emerald-700/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Open clinic assistant chatbot"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-emerald-600" />
          )}
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          {isOpen ? "Close Assistant" : "Ask Clinic Assistant"}
        </span>
      </button>

    </div>
  );
};
