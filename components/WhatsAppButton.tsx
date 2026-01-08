"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "263772859799";
  const message = encodeURIComponent(
    "Hello, I'd like to enquire about services at Carmentis Medical Centre."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="sr-only">WhatsApp</span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>
    </a>
  );
}


