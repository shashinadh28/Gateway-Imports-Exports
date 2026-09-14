import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    image: "/images/cat-electronics.jpg",
  },
  {
    id: "toys",
    title: "Toys & Consumer Goods",
    image: "/images/cat-toys.jpg",
  },
  {
    id: "industrial",
    title: "Industrial Products",
    image: "/images/cat-industrial.jpg",
  },
  {
    id: "energy",
    title: "Energy & Commodities",
    image: "/images/cat-energy.jpg",
  },
  {
    id: "machinery",
    title: "Machinery & Equipment",
    image: "/images/cat-machinery.jpg",
  },
  {
    id: "other",
    title: "Other Products",
    image: "/images/cat-other.jpg",
  },
];

export default function ProductCategories({ onOpenEnquiryWithCategory }) {
  return (
    <section id="products" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Row */}
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <span className="text-[#FF7A18] text-xs">▶</span>
              <span className="text-[#FF7A18] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                PRODUCT CATEGORIES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#06283D] tracking-tight leading-[1.15]">
              Diverse Products.<br />
              Global Possibilities.
            </h2>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenEnquiryWithCategory && onOpenEnquiryWithCategory("All Categories");
            }}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#06283D] hover:text-[#FF7A18] transition-colors group shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7A18] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 2 Category Cards per row on mobile, 6 on desktop (matching reference) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => onOpenEnquiryWithCategory && onOpenEnquiryWithCategory(cat.title)}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title label with arrow (matching reference screenshot) */}
              <div className="p-2.5 sm:p-3.5 flex-1 flex items-center justify-between gap-1">
                <h3 className="text-[11px] sm:text-[13px] font-bold text-[#06283D] group-hover:text-[#FF7A18] transition-colors leading-snug">
                  {cat.title}
                </h3>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF7A18] shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
