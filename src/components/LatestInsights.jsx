import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function LatestInsights({ onOpenModal }) {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-5 sm:mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#06283D] tracking-tight">
            Latest Insights
          </h2>

          <a
            href="#footer"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal && onOpenModal({ product: "Insights Inquiry" });
            }}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#06283D] hover:text-[#FF7A18] transition-colors group shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7A18] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Card matching mobile screenshot */}
        <div className="max-w-md sm:max-w-xl">
          <div
            onClick={() => onOpenModal && onOpenModal({ product: "Market Insights" })}
            className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group bg-white"
          >
            {/* Image container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/images/hero-ship.jpg"
                alt="Cargo vessel at sea"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Market Insights Badge overlay */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-orange-200/80 shadow-sm flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 text-[#FF7A18]" />
                <span className="text-[10px] sm:text-xs font-bold text-[#FF7A18]">
                  Market Insights
                </span>
              </div>
            </div>

            {/* Content info */}
            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm sm:text-base font-bold text-[#06283D] group-hover:text-[#FF7A18] transition-colors leading-snug">
                  Global Trade Trends and Opportunities for Indian Businesses
                </h3>
                <ArrowRight className="w-4 h-4 text-[#FF7A18] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
              </div>

              <p className="text-slate-400 text-xs sm:text-sm">
                Mar 15, 2026
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
