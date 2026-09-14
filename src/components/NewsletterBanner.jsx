import React, { useState } from "react";
import { Send, CheckCircle2, Truck } from "lucide-react";

export default function NewsletterBanner() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left: Newsletter Input (8 cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">
              Join Our Mailing List
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Subscribe to receive weekly freight rate indexes, international sourcing insights, and new trade corridor announcements.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-lg text-sm font-semibold border border-green-200">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Thank you for subscribing! You will receive our trade intelligence digest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Work Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right: Logistics Visual Placeholder (4 cols) */}
          <div className="hidden lg:block lg:col-span-4 bg-[#0c2f3b] relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-[#0c2f3b] to-[#124d5e] flex flex-col items-center justify-center p-6 text-center text-white">
              <Truck className="w-12 h-12 text-orange-400 mb-2" />
              <span className="text-xs font-bold text-white px-3 py-1 rounded bg-black/40 border border-white/20">
                Global Logistics Fleet (Placeholder)
              </span>
              <span className="text-slate-300 text-[10px] mt-1">
                [ Image Placeholder: 360 × 200 ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
