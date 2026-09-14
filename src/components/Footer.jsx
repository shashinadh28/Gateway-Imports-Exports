import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { GatewayLogoWhite } from "./Logo";
import { IconLinkedin, IconTwitterX, IconYoutube, IconWhatsApp } from "./SocialIcons";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Global Network", href: "#network" },
  { label: "Insights", href: "#how-it-works" },
  { label: "Contact", href: "#quote" },
];

const SERVICES = [
  "Global Sourcing",
  "Import & Trade",
  "Supplier Network",
  "Product Procurement",
  "Market Opportunities",
  "B2B Trading",
];

export default function Footer({ onOpenModal }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sec) => {
    setOpenSection(openSection === sec ? null : sec);
  };

  return (
    <footer id="footer" className="bg-[#061826] text-slate-400 pt-10 sm:pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Brand Info (Top) ── */}
        <div className="pb-6 mb-6 border-b border-white/10 flex flex-col items-start gap-2">
          <a href="#hero" className="inline-block">
            <GatewayLogoWhite />
          </a>
          <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
            Connecting Global Markets with India.
          </p>

          {/* Social Media Icons (Desktop only or compact) */}
          <div className="hidden sm:flex items-center gap-2.5 pt-1">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF7A18] text-white flex items-center justify-center transition-colors"
            >
              <IconLinkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF7A18] text-white flex items-center justify-center transition-colors"
            >
              <IconTwitterX className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF7A18] text-white flex items-center justify-center transition-colors"
            >
              <IconYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── MOBILE ACCORDION (Matches mobile screenshot) ── */}
        <div className="md:hidden divide-y divide-white/10 pb-6 border-b border-white/10">

          {/* Accordion 1: Quick Links */}
          <div>
            <button
              onClick={() => toggleSection("quick-links")}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold text-white tracking-wide text-left"
            >
              <span>Quick Links</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openSection === "quick-links" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "quick-links" && (
              <ul className="pb-3.5 space-y-2 text-xs text-slate-400 pl-2">
                {QUICK_LINKS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#FF7A18] transition-colors block py-0.5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion 2: Our Services */}
          <div>
            <button
              onClick={() => toggleSection("services")}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold text-white tracking-wide text-left"
            >
              <span>Our Services</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "services" && (
              <ul className="pb-3.5 space-y-2 text-xs text-slate-400 pl-2">
                {SERVICES.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenModal && onOpenModal({ product: item });
                      }}
                      className="hover:text-[#FF7A18] transition-colors block py-0.5"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion 3: Contact Us */}
          <div>
            <button
              onClick={() => toggleSection("contact")}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold text-white tracking-wide text-left"
            >
              <span>Contact Us</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "contact" && (
              <div className="pb-3.5 space-y-2.5 text-xs text-slate-400 pl-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF7A18] mt-0.5 shrink-0" />
                  <span>123 Business Park, Chennai, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF7A18] shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-[#FF7A18] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF7A18] shrink-0" />
                  <a href="mailto:info@gatewayworkforce.com" className="hover:text-[#FF7A18] transition-colors">
                    info@gatewayworkforce.com
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ── DESKTOP 3-COLUMN LINKS (Hidden on mobile) ── */}
        <div className="hidden md:grid grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#FF7A18] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4 tracking-wide">Our Services</h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {SERVICES.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal && onOpenModal({ product: item });
                    }}
                    className="hover:text-[#FF7A18] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="space-y-3.5">
            <h4 className="text-white text-sm font-bold mb-4 tracking-wide">Contact Us</h4>

            <div className="flex items-start gap-3 text-xs sm:text-[13px]">
              <MapPin className="w-4 h-4 text-[#FF7A18] mt-0.5 shrink-0" />
              <span className="text-slate-300">123 Business Park, Chennai, India</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-[13px]">
              <Phone className="w-4 h-4 text-[#FF7A18] shrink-0" />
              <a href="tel:+919876543210" className="text-slate-300 hover:text-[#FF7A18] transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-[13px]">
              <Mail className="w-4 h-4 text-[#FF7A18] shrink-0" />
              <a href="mailto:info@gatewayworkforce.com" className="text-slate-300 hover:text-[#FF7A18] transition-colors">
                info@gatewayworkforce.com
              </a>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold"
              >
                <IconWhatsApp className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] sm:text-xs text-slate-500">
          <p>© 2026 Gateway Workforce. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
