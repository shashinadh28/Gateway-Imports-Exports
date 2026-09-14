import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, TrendingUp } from "lucide-react";

export default function CTASection({ onOpenModal }) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 bg-[#031B2B]">
      {/* Container Ship Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-ship.jpg"
          alt="Container ship sunset"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text legibility matching reference */}
        <div
          className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#031B2B]/95 via-[#031B2B]/85 to-[#031B2B]/75"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center sm:text-left space-y-4 sm:space-y-5">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white leading-tight tracking-tight">
            Looking for a Product or Global Supplier?
          </h2>

          <p className="text-slate-200 text-xs sm:text-base leading-relaxed max-w-xl mx-auto sm:mx-0">
            Tell us what you're looking for. Our team can explore sourcing opportunities
            across international markets.
          </p>

          <div className="flex flex-row items-center justify-center sm:justify-start gap-2.5 sm:gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="flex-1 sm:flex-initial px-4 sm:px-6 py-3 rounded-lg bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Send an Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <a
              href="#footer"
              className="flex-1 sm:flex-initial px-4 sm:px-6 py-3 rounded-lg bg-black/40 hover:bg-black/60 border border-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Talk to Our Team
            </a>
          </div>

          {/* Bottom 3 trust badges in horizontal 3-column row (matching mobile screenshot) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-8 border-t border-white/15">
            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-[10px] sm:text-xs font-bold leading-tight">
                Global Connections
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-[10px] sm:text-xs font-bold leading-tight">
                Trusted Sourcing
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-[10px] sm:text-xs font-bold leading-tight">
                Business Opportunities
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
