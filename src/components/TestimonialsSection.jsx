import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { TESTIMONIALS } from "../data/tradeData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header matching reference screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest">
            <span>◆</span>
            <span>Meet Our Clients</span>
            <span>◆</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Stories From Our Users
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Read how Indian enterprises and distributors scale their sourcing efficiency and supply predictability with Gateway Workforce.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid matching reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-orange-500 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Client Info with Avatar Placeholder */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-orange-500/30 flex items-center justify-center text-slate-400 shrink-0">
                  <User className="w-6 h-6 text-slate-500" />
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
