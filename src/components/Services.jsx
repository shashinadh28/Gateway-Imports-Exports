import React from "react";
import { motion } from "framer-motion";
import { Globe, Ship, Network, Package, TrendingUp, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    iconBg: "bg-[#FF7A18]",
    title: "Global Sourcing",
    desc: "Identifying products and suppliers from international markets.",
    image: encodeURI("/OUR-SERVICES/Global Sourcing.webp"),
  },
  {
    icon: Ship,
    iconBg: "bg-[#06283D]",
    title: "Import & Trade",
    desc: "Facilitating the movement of products into the Indian market.",
    image: encodeURI("/OUR-SERVICES/import-and-trade.webp"),
  },
  {
    icon: Network,
    iconBg: "bg-[#0284C7]",
    title: "Supplier Network",
    desc: "Connecting businesses with trusted global suppliers.",
    image: encodeURI("/OUR-SERVICES/supplier-network.webp"),
  },
  {
    icon: Package,
    iconBg: "bg-[#FF7A18]",
    title: "Product Procurement",
    desc: "Supporting product sourcing across multiple categories.",
    image: encodeURI("/OUR-SERVICES/Product-Procurement.webp"),
  },
  {
    icon: TrendingUp,
    iconBg: "bg-[#0F766E]",
    title: "Market Opportunities",
    desc: "Exploring international products and supply opportunities.",
    image: encodeURI("/OUR-SERVICES/Market-Opportunities.webp"),
  },
];

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Row */}
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <span className="text-[#FF7A18] text-xs">▶</span>
              <span className="text-[#FF7A18] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#06283D] tracking-tight">
              End-to-End Trade Solutions
            </h2>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onSelectService && onSelectService("General Enquiry");
            }}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#06283D] hover:text-[#FF7A18] transition-colors group shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7A18] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 2 Cards per row on mobile, 5 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4.5">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onSelectService && onSelectService(s.title)}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Service Image header */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-2 left-2 w-7 h-7 sm:w-9 sm:h-9 rounded-lg ${s.iconBg} text-white flex items-center justify-center shadow-md backdrop-blur-sm`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-[15px] font-bold text-[#06283D] mb-1 sm:mb-1.5 group-hover:text-[#FF7A18] transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] sm:text-[13px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
