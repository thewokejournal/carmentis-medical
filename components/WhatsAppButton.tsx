"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20services%20at%20Carmentis%20Medical%20Centre."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      {/* Main Button */}
      <div className="relative">
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg md:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center">
          <MessageCircle size={24} className="md:w-7 md:h-7 fill-white" />
        </div>
        
        {/* Pulse Animation - Only on desktop */}
        <div className="hidden md:block absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Tooltip - Only on desktop */}
      <div
        className={`hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl transition-all ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-neutral-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
