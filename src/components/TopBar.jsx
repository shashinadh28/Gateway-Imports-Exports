import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { IconLinkedin, IconTwitterX, IconFacebook, IconYoutube, IconWhatsApp } from "./SocialIcons";

export default function TopBar({ onOpenModal }) {
  return (
    <div className="bg-[#062134] text-slate-300 text-[10px] sm:text-xs border-b border-white/5">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-8 sm:h-10 flex items-center justify-between gap-2 sm:gap-4">

        {/* Left */}
        <p className="text-slate-300 font-medium whitespace-nowrap text-[10px] sm:text-xs">
          Connecting Global Markets with India
        </p>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="mailto:info@gatewayworkforce.com"
            aria-label="Email"
            className="flex items-center gap-1 sm:gap-1.5 text-slate-300 hover:text-white transition-colors whitespace-nowrap text-[10px] sm:text-xs"
          >
            <Mail className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF7A18]" />
            <span className="hidden md:inline">info@gatewayworkforce.com</span>
          </a>

          <a
            href="tel:+919876543210"
            aria-label="Phone"
            className="flex items-center gap-1 sm:gap-1.5 text-slate-300 hover:text-white transition-colors whitespace-nowrap text-[10px] sm:text-xs"
          >
            <Phone className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF7A18]" />
            <span className="hidden md:inline">+91 98765 43210</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-1.5 sm:pl-2 border-l border-white/15">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-slate-300 hover:text-white transition-colors">
              <IconWhatsApp className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
              <IconLinkedin className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
            <a href="#" aria-label="Twitter / X" className="hidden sm:inline-block text-slate-300 hover:text-white transition-colors">
              <IconTwitterX className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
            <a href="#" aria-label="Facebook" className="hidden sm:inline-block text-slate-300 hover:text-white transition-colors">
              <IconFacebook className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
          </div>

          {/* Enquire Now Button (Desktop only here, on mobile it's inside Navbar) */}
          <button
            onClick={onOpenModal}
            className="hidden md:inline-flex ml-2 px-3.5 py-1.5 rounded bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-xs items-center gap-1.5 transition-all shadow-sm shadow-orange-500/20"
          >
            Enquire Now
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
