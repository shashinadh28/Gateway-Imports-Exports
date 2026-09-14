import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, X, PhoneCall } from "lucide-react";

export default function SupportBanner({ onOpenModal }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 bg-[#071a22] text-white">
      {/* Background Image Placeholder with Ocean / Ship theme */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-[#071a22]/95 via-[#0c2f3b]/85 to-[#071a22]/70 bg-cover bg-center">
          {/* Subtle water / ship grid simulation */}
          <div className="w-full h-full opacity-25 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest">
                Booking Appointment
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-heading">
              24/7 customer support any time of the day or night
            </h2>

            <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
              Our dedicated trade coordinators and customs clearance desks are available around the clock to support your cross-border shipments, monitor vessel schedules, and address urgent inquiries across global time zones.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg hover:shadow-orange-500/40 transition-all active:scale-95"
              >
                <span>Make Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-transparent hover:bg-white/10 text-white font-semibold text-sm border border-white/30 transition-all"
              >
                <span>More Details</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right Pulsing Play Button Widget (4 cols) */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative flex items-center justify-center">
              {/* Pulsing Ripple Rings */}
              <div className="absolute w-28 h-28 rounded-full bg-orange-500/20 animate-ping" />
              <div className="absolute w-36 h-36 rounded-full bg-orange-500/10 animate-pulse" />

              {/* Play Button */}
              <button
                onClick={() => setShowVideo(true)}
                aria-label="Play Overview Video"
                className="relative z-10 w-20 h-20 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-xl shadow-orange-500/50 hover:scale-110 active:scale-95 transition-all"
              >
                <Play className="w-8 h-8 fill-white ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full bg-[#0c2f3b] rounded-2xl overflow-hidden p-6 text-white text-center">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-4">24/7 Trade Operations & Cargo Support</h3>
            <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center border border-white/10 p-6 text-center">
              <PhoneCall className="w-12 h-12 text-orange-500 mb-3 animate-bounce" />
              <p className="text-white font-bold text-base">Direct Helpline: +91 (22) 4988 7700</p>
              <p className="text-slate-400 text-xs mt-2">
                [ Video Stream Placeholder: 24/7 Logistics Dispatch Center & Vessel Monitoring ]
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
