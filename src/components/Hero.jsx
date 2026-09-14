import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section id="hero" className="relative hero-bg overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between">
      {/* Dark gradient overlay with orange glow highlights matching reference image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(3,27,43,0.92) 0%, rgba(3,27,43,0.85) 45%, rgba(3,27,43,0.40) 80%, rgba(3,27,43,0.20) 100%)",
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3.5 sm:mb-4"
          >
            <span className="text-[#FF7A18] text-xs">▶</span>
            <span className="text-[#FF7A18] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">
              IMPORT&nbsp;&nbsp;•&nbsp;&nbsp;EXPORT&nbsp;&nbsp;•&nbsp;&nbsp;GLOBAL TRADE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[68px] font-black text-white leading-[1.12] tracking-tight mb-4 sm:mb-6"
          >
            Connecting<br />
            Global Markets<br />
            with <span className="text-[#FF7A18]">India</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-200 text-xs sm:text-base lg:text-[17px] leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal"
          >
            Gateway Workforce is an international trading and sourcing company,
            connecting quality products from trusted global markets to the Indian market.
          </motion.p>

          {/* Action Buttons (Stacked on mobile as in screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Carousel indicator dots (Matches mobile reference screenshot) */}
          <div className="flex items-center gap-2 mb-2 sm:hidden">
            <span className="w-6 h-2 rounded-full bg-[#FF7A18]" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>

        </div>
      </div>

      {/* Bottom Trust Indicators Bar (3 columns on mobile matching screenshot) */}
      <div className="relative z-10 w-full border-t border-white/15 bg-black/35 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6 items-center">

            {/* 1. Global Sourcing */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 flex items-center justify-center text-white/90 shrink-0">
                <Globe className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div>
                <div className="text-white text-[10px] sm:text-sm font-bold leading-tight">Global Sourcing</div>
                <div className="text-slate-300 text-[9px] sm:text-[11px] leading-tight">Across Countries</div>
              </div>
            </div>

            {/* 2. Reliable Trade */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 flex items-center justify-center text-white/90 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div>
                <div className="text-white text-[10px] sm:text-sm font-bold leading-tight">Reliable Trade</div>
                <div className="text-slate-300 text-[9px] sm:text-[11px] leading-tight">Partnerships</div>
              </div>
            </div>

            {/* 3. Growth Opportunities */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 flex items-center justify-center text-white/90 shrink-0">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div>
                <div className="text-white text-[10px] sm:text-sm font-bold leading-tight">Growth</div>
                <div className="text-slate-300 text-[9px] sm:text-[11px] leading-tight">Opportunities</div>
              </div>
            </div>

            {/* 4. Scroll indicator (Desktop only) */}
            <div className="hidden md:flex items-center justify-end gap-2 text-slate-300">
              <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
                <span className="w-1 h-2 bg-white rounded-full animate-bounce" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider">Scroll</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
