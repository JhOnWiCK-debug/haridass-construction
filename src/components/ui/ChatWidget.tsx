"use client";

import React, { useState, useRef, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import {
  MessageSquare,
  X,
  Calendar,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Send,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: { label: string; action: string }[];
}

interface ChatWidgetProps {
  onOpenBooking?: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: "1",
      sender: "bot",
      text: "Hello! Welcome to Jaksh's Dental Junction in Mogappair East. How may we assist you today?",
      timestamp: "Just now",
      quickReplies: [
        { label: "Book an Appointment", action: "action_book" },
        { label: "View Treatments", action: "action_treatments" },
        { label: "Location & Hours", action: "action_location" },
        { label: "Call Clinic", action: "action_call" },
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
    }
  }, [messages, isOpen]);

  const handleAction = (action: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    switch (action) {
      case "action_book": {
        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: "Book an Appointment", timestamp };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Opening our appointment enquiry section. You can submit your preferred date and evening slot, or message us directly via WhatsApp.",
          timestamp,
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        if (onOpenBooking) onOpenBooking();
        const target = document.querySelector("#appointment");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "action_treatments": {
        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: "View Treatments", timestamp };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We provide 11 clinical dental categories including Restorative Dentistry, Dental Implants, Clear Aligners, Braces, Pediatric Care, and our specialized ABHAYA & Sports Dental Centres. Navigating to the treatments directory for you.",
          timestamp,
          quickReplies: [
            { label: "Book an Appointment", action: "action_book" },
            { label: "Post-Treatment Care", action: "action_postcare" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        const target = document.querySelector("#treatments");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "action_location": {
        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: "Location & Hours", timestamp };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `📍 Valayapathi Salai, 6th Block, Mogappair East, Chennai 600037 (Plus Code: 35HP+8F).\n\n⏰ Opening Hours:\nMonday to Saturday: 5:00 PM – 8:30 PM\nSunday: Closed`,
          timestamp,
          quickReplies: [
            { label: "Call 088255 64486", action: "action_call" },
            { label: "Book an Appointment", action: "action_book" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botReply]);
        const target = document.querySelector("#contact");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "action_call": {
        window.location.href = CLINIC_INFO.phone;
        break;
      }

      case "action_postcare": {
        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: "Post-Treatment Care", timestamp };
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "You can find step-by-step guidance for extractions, fillings, braces, implants, and bleaching in our Post-Treatment Care section.",
          timestamp,
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

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: userText, timestamp };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let reply = "Thank you for reaching out. For specific dental advice, our team is available Monday to Saturday between 5:00 PM and 8:30 PM. Would you like to request an appointment or find our clinic?";

      if (lower.includes("time") || lower.includes("hour") || lower.includes("open") || lower.includes("sunday")) {
        reply = "We are open Monday to Saturday from 5:00 PM to 8:30 PM. The clinic is closed on Sundays.";
      } else if (lower.includes("address") || lower.includes("where") || lower.includes("location") || lower.includes("mogappair")) {
        reply = "Our clinic is located on Valayapathi Salai, 6th Block, Block 6, Mogappair East, Chennai 600037.";
      } else if (lower.includes("call") || lower.includes("phone") || lower.includes("contact")) {
        reply = "You can call our clinic front desk directly at 088255 64486.";
      } else if (lower.includes("book") || lower.includes("appointment")) {
        reply = "You can enquire for an evening slot using our online form or message us directly on WhatsApp.";
      }

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies: [
          { label: "Book an Appointment", action: "action_book" },
          { label: "Location & Hours", action: "action_location" },
        ],
      };
      setMessages((prev) => [...prev, botReply]);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Subordinate Assistant Window */}
      {isOpen && (
        <div
          className="w-[90vw] sm:w-88 bg-[#FFFDF9] rounded-2xl shadow-xl border border-[#E2E4DA] overflow-hidden flex flex-col mb-3 h-[460px] max-h-[75vh] animate-in slide-in-from-bottom-3 duration-200"
          role="region"
          aria-label="Clinic Assistant"
        >
          {/* Header */}
          <div className="p-4 bg-[#1E332A] text-white flex items-center justify-between">
            <div>
              <h4 className="text-xs font-medium tracking-wide">
                Jaksh&apos;s Dental Junction
              </h4>
              <p className="text-[10px] text-[#B8C7B2] mt-0.5">
                Front Desk Assistant &bull; Mogappair East
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/70 hover:text-white rounded"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F8F6F0] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 whitespace-pre-line leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#29483A] text-white"
                      : "bg-[#FFFDF9] text-[#29342D] border border-[#E2E4DA]"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-[#737B73] mt-0.5 px-1">{msg.timestamp}</span>

                {/* Quick reply chips */}
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAction(qr.action)}
                        className="px-2.5 py-1 rounded bg-[#E7EDE3] text-[#29483A] hover:bg-[#29483A] hover:text-white text-[11px] font-medium transition-colors"
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

          {/* Quick Input Form */}
          <form
            onSubmit={handleSendText}
            className="p-2.5 bg-[#FFFDF9] border-t border-[#E2E4DA] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type your question..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-md border border-[#E2E4DA] text-xs text-[#29342D] bg-[#F8F6F0] placeholder:text-[#737B73]/60 focus:outline-none focus:ring-1 focus:ring-[#29483A]"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-1.5 rounded-md bg-[#29483A] text-white hover:bg-[#1E332A] disabled:opacity-40 transition-colors"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Restrained Floating Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2.5 rounded-full bg-[#29483A] hover:bg-[#1E332A] text-white shadow-md flex items-center gap-2 text-xs font-medium tracking-wide transition-all"
        aria-label="Toggle clinic assistance"
      >
        <MessageSquare className="w-4 h-4 text-[#E7EDE3]" />
        <span>{isOpen ? "Close" : "Need Assistance?"}</span>
      </button>

    </div>
  );
};
