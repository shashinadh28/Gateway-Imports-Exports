import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Building2,
  Route,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { WHY_US_POINTS } from "../data/tradeData";

const iconMap = {
  Globe,
  Layers,
  Building2,
  Route,
  ShieldCheck,
};

export default function WhyUs({ onOpenModal }) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-orange-600 text-xs font-bold tracking-wider uppercase border border-orange-200">
            <span>Why Gateway Workforce</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 font-heading tracking-tight">
            Why Work With Us
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our approach is built around reliability, commercial efficiency, and long-term business
            relationships connecting international suppliers with the Indian market.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_POINTS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            const isFullWidth = idx === 4; // 5th card styling for balanced layout

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl p-8 border border-slate-200 bg-white hover:border-brand-orange-500/40 shadow-card-elevated hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                  isFullWidth ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-white via-orange-50/20 to-white" : ""
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy-900 text-brand-orange-400 group-hover:bg-brand-orange-500 group-hover:text-white flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title (Exact from prompt) */}
                  <h3 className="text-xl font-bold text-brand-navy-950 font-heading mb-3 group-hover:text-brand-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description (Exact from prompt) */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Quick Consultation Callout Box in the 6th slot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl p-8 bg-brand-navy-950 text-white flex flex-col justify-between border border-brand-navy-800 shadow-xl"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-orange-400">
                Partner With Us
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
                Ready to Discuss Sourcing Opportunities?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Connect with our international trade desk to evaluate sourcing feasibility for your product lines.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-xs shadow-glow-orange transition-all"
            >
              <span>Schedule Sourcing Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
