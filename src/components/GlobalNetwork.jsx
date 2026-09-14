import React from "react";
import { ArrowRight, Globe, Box, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const BG_IMAGE = encodeURI("/OUR GLOBAL NETWORK-bg.webp");

const STATS = [
  { icon: Globe, label: "Multiple Countries" },
  { icon: Box, label: "Diverse Products" },
  { icon: Handshake, label: "Reliable Partnerships" },
];

export default function GlobalNetwork({ onOpenEnquiryWithCountry }) {
  return (
    <section id="network" className="relative overflow-hidden bg-[#041624] text-white">

      {/* Full background image — the world map + glowing arcs + ships */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      />

      {/* Left-heavy gradient so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031422]/95 via-[#031422]/75 to-[#031422]/15" />
      {/* Subtle bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#031422]/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="max-w-sm sm:max-w-md lg:max-w-lg">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3 sm:mb-4"
          >
            <span className="text-[#FF7A18] text-xs">▶</span>
            <span className="text-[#FF7A18] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">
              OUR GLOBAL NETWORK
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white leading-[1.1] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          >
            From Global Markets<br />
            to <span className="text-[#FF7A18]">India</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-200 text-xs sm:text-[15px] leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
          >
            We explore sourcing opportunities across key international markets and
            connect them with demand in India.
          </motion.p>

          {/* 3 Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-7 sm:mb-8"
          >
            {STATS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm">
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white text-xs sm:text-[13px] font-semibold leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <button
              onClick={() =>
                onOpenEnquiryWithCountry && onOpenEnquiryWithCountry("Global Network")
              }
              className="group px-6 py-3 rounded-lg bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Our Global Network
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}