import React from "react";
import { motion } from "framer-motion";
import { FileEdit, PackageSearch, Ship, Store, ArrowRight } from "lucide-react";

const BG_IMAGE = encodeURI("/HOW IT WORKS.webp");

const STEPS = [
  {
    num: "01",
    accent: "blue",
    icon: FileEdit,
    title: "Share Your Requirement",
    desc: "Tell us what you need – product details, quantity, specifications and target market.",
  },
  {
    num: "02",
    accent: "orange",
    icon: PackageSearch,
    title: "Global Sourcing",
    desc: "We explore suitable suppliers and markets across key international regions.",
  },
  {
    num: "03",
    accent: "blue",
    icon: Ship,
    title: "Trade Coordination",
    desc: "We manage the sourcing, logistics and trade process end-to-end.",
  },
  {
    num: "04",
    accent: "orange",
    icon: Store,
    title: "Indian Market",
    desc: "Products are delivered into the Indian market, connecting global supply with local demand.",
  },
];

const ACCENT = {
  blue: {
    badge: "bg-[#0284C7]",
    iconBg: "bg-[#0284C7]/10",
    iconColor: "text-[#0284C7]",
    border: "border-[#0284C7]/30",
    hoverBorder: "hover:border-[#0284C7]/60",
  },
  orange: {
    badge: "bg-[#FF7A18]",
    iconBg: "bg-[#FF7A18]/10",
    iconColor: "text-[#FF7A18]",
    border: "border-[#FF7A18]/30",
    hoverBorder: "hover:border-[#FF7A18]/60",
  },
};

function StepCard({ step, idx, onOpenModal }) {
  const Icon = step.icon;
  const a = ACCENT[step.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      onClick={onOpenModal}
      className={`relative flex-1 bg-white rounded-2xl pt-8 pb-7 px-5 border ${a.border} ${a.hoverBorder} shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-start z-10`}
    >
      {/* Number badge overlapping top-left corner */}
      <div
        className={`absolute -top-4 left-5 w-9 h-9 rounded-full ${a.badge} text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-md ring-4 ring-white select-none`}
      >
        {step.num}
      </div>

      {/* Circular Icon matching reference design */}
      <div
        className={`w-12 h-12 rounded-full ${a.iconBg} ${a.iconColor} flex items-center justify-center mb-4 mt-1`}
      >
        <Icon className="w-5 h-5" strokeWidth={2.2} />
      </div>

      <h3 className="text-[16px] font-bold text-[#06283D] group-hover:text-[#FF7A18] transition-colors mb-2 leading-snug">
        {step.title}
      </h3>
      <p className="text-slate-500 text-[13px] leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 xl:w-12 shrink-0 self-center relative z-0">
      <div className="w-full border-t border-dashed border-slate-300" />
      <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700">
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

export default function HowItWorks({ onOpenModal }) {
  return (
    <section
      id="how-it-works"
      className="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden min-h-[560px] flex flex-col justify-center"
    >
      {/* Background photo (world map + cargo ship) — crisp, no wash */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-top pointer-events-none"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#FF7A18] text-xs">▶</span>
            <span className="text-[#FF7A18] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#06283D] tracking-tight mb-2">
            A Simple Path to Global Trade
          </h2>
          <p className="text-slate-500 text-xs sm:text-base leading-relaxed">
            From your requirement to the Indian market, we make global trade simple, reliable and efficient.
          </p>
        </div>

        {/* ── Mobile Vertical Timeline ── */}
        <div className="lg:hidden relative max-w-lg mx-auto py-2">
          <div className="absolute left-[19px] top-6 bottom-8 w-[2px] border-l-2 border-dotted border-slate-300 pointer-events-none" />

          <div className="space-y-6 sm:space-y-8 relative">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const a = ACCENT[step.accent];
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={onOpenModal}
                  className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group relative z-10"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${a.badge} text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-md ring-4 ring-white`}
                  >
                    {step.num}
                  </div>

                  <span className="text-slate-400 font-bold text-sm select-none shrink-0">-</span>

                  <div
                    className={`w-10 h-10 rounded-full ${a.iconBg} ${a.iconColor} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="pl-1">
                    <h3 className="text-sm font-bold text-[#06283D] group-hover:text-[#FF7A18] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-0.5 leading-tight">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Desktop Horizontal Step Cards with connectors (Matches reference design) ── */}
        <div className="hidden lg:flex items-stretch justify-between">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.num}>
              <StepCard step={step} idx={idx} onOpenModal={onOpenModal} />
              {idx < STEPS.length - 1 && <Connector />}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}