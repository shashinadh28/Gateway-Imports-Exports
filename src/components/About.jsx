import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About({ onOpenModal }) {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── LEFT: Content (matching reference layout) ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[#FF7A18] text-xs">▶</span>
              <span className="text-[#FF7A18] text-xs font-bold uppercase tracking-wider">
                ABOUT GATEWAY WORKFORCE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-[#06283D] leading-[1.12] tracking-tight">
              Global Sourcing.<br />
              Real Opportunities.
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Gateway Workforce bridges global suppliers and the Indian market. We facilitate international sourcing and trade across diverse product categories, working with trusted partners worldwide.
            </p>

            {/* Button */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Image Card with overlaid quote ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-[#06283D]">
              <img
                src="/images/about-worker.jpg"
                alt="Gateway Workforce logistics professional on site"
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Quote overlay on bottom-left of image */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-white text-xl sm:text-2xl font-black leading-tight drop-shadow-md">
                  "Bridging Markets.<br />Building Possibilities."
                </p>
                {/* Orange accent line */}
                <div className="w-12 h-1.5 bg-[#FF7A18] rounded-full mt-3" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
