import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FF7A18", "#06283D", "#38bdf8"],
      });
    }, 700);
  };

  return (
    <section id="quote" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto bg-[#F0F5FA] rounded-2xl p-5 sm:p-8 border border-slate-200/80 shadow-sm">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-black text-[#06283D] tracking-tight mb-1">
            Get a Quote
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-5">
            Share your requirement and our team will get back to you.
          </p>

          {submitted ? (
            <div className="text-center py-8 space-y-3 bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#06283D]">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our sourcing team will contact you shortly with quotation details.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", company: "", email: "", phone: "", requirement: "" });
                }}
                className="mt-2 text-xs font-bold text-[#FF7A18] hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Row 1: Name & Company (2-col grid) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18] transition-all"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18] transition-all"
                />
              </div>

              {/* Row 2: Email & Phone (2-col grid) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18] transition-all"
                />
              </div>

              {/* Row 3: Product Requirement */}
              <div>
                <textarea
                  rows="3"
                  required
                  placeholder="Product Requirement"
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-lg bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-[0.99] transition-all"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
