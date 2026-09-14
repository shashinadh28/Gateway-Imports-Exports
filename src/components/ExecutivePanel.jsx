import React from "react";
import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, User } from "lucide-react";
import { EXECUTIVE_TEAM } from "../data/tradeData";

export default function ExecutivePanel() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest">
            <span>◆</span>
            <span>Our Main Team</span>
            <span>◆</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Meet The Executive Panel
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Our international trade executives, sourcing strategists, and customs specialists bring extensive cross-border experience to every shipment.
          </p>
        </div>

        {/* 4 Arched Team Cards Grid matching reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXECUTIVE_TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group items-center text-center"
            >
              {/* Arched Top Image Placeholder (exact shape from reference image) */}
              <div className="w-full aspect-[3/3.8] rounded-t-[100px] overflow-hidden bg-slate-800 relative border-t-2 border-x-2 border-slate-100 shadow-md group-hover:shadow-xl transition-all duration-300">
                {/* Styled Placeholder Container */}
                <div className="w-full h-full bg-gradient-to-b from-[#0a232c] via-[#103847] to-[#0c2f3b] flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 mb-3 group-hover:scale-110 transition-transform">
                    <User className="w-10 h-10" />
                  </div>
                  <span className="text-white font-semibold text-xs px-2.5 py-1 rounded bg-black/40 border border-white/10">
                    {member.placeholderLabel}
                  </span>
                  <span className="text-slate-400 text-[10px] mt-1">
                    [ Portrait Placeholder: 300 × 420 ]
                  </span>
                </div>
              </div>

              {/* Dark Teal Base Card */}
              <div className="w-full bg-[#0c2f3b] text-white py-6 px-4 rounded-b-xl border-t-2 border-orange-500 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-teal-300 font-medium mb-4">
                  {member.role}
                </p>

                {/* Social Actions Row matching reference design */}
                <div className="flex items-center justify-center gap-2 pt-2 border-t border-teal-800/60">
                  <button
                    aria-label="Share profile"
                    className="w-7 h-7 rounded bg-[#103d4c] hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    aria-label="Facebook"
                    className="w-7 h-7 rounded bg-[#103d4c] hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </button>
                  <button
                    aria-label="Twitter"
                    className="w-7 h-7 rounded bg-[#103d4c] hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    aria-label="LinkedIn"
                    className="w-7 h-7 rounded bg-[#103d4c] hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
