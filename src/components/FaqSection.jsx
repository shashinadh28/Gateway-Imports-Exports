import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle, Plane, Ship } from "lucide-react";
import { FAQ_ITEMS } from "../data/tradeData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest">
              <span>◆</span>
              <span>Frequently Asked Questions</span>
              <span>◆</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              The Fastest And Reliable Courier Solutions
            </h2>

            <p className="text-slate-600 text-base">
              Common questions about our international sourcing verification, maritime logistics, customs clearance, and delivery corridors into the Indian market.
            </p>

            {/* Accordion List */}
            <div className="space-y-4 pt-4">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-orange-500 bg-orange-50/30 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-base gap-4"
                    >
                      <span className={isOpen ? "text-orange-600" : "text-slate-900"}>
                        {item.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-orange-500 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-orange-100 pt-3">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Split Image Placeholder with Floating Orange Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/4.5] shadow-xl border border-slate-200 group">
              {/* Styled Placeholder for Cargo Plane / Port Ship */}
              <div className="w-full h-full bg-gradient-to-br from-[#0a2630] via-[#0c2f3b] to-[#124b5e] flex flex-col items-center justify-center p-6 text-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white/80">
                    <Plane className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white/80">
                    <Ship className="w-7 h-7 text-white" />
                  </div>
                </div>
                <span className="text-white font-bold text-sm px-4 py-1.5 rounded-lg bg-black/40 border border-white/20">
                  Cargo Aircraft & Ocean Vessel (Placeholder)
                </span>
                <span className="text-slate-300 text-xs mt-2">
                  [ Image Placeholder: 500 × 580 ]
                </span>
              </div>

              {/* Floating Orange Badge (matching reference design) */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-orange-500 text-white p-5 rounded-xl shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-extrabold leading-tight">Project Completed</div>
                  <div className="text-xs text-orange-100 font-medium">
                    100% Reliable Logistics & Sourcing
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-4 border-[#0c2f3b]/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
