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
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      {/* Main Button */}
      <div className="relative">
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-110 flex items-center justify-center">
          <MessageCircle size={28} className="fill-white" />
        </div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Tooltip */}
      <div
        className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl transition-all ${
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
