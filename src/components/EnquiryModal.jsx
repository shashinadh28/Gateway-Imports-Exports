import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, ArrowRight } from "lucide-react";

const VARIANTS = {
  overlay: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  modal:   { hidden: { opacity: 0, scale: 0.95, y: 16 }, show: { opacity: 1, scale: 1, y: 0 } },
};

const COUNTRIES = [
  "China", "Japan", "Vietnam", "Kyrgyzstan", "South Korea",
  "Thailand", "UAE", "Germany", "Multiple / Any",
];

export default function EnquiryModal({ isOpen, onClose, initialData }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", country: "Multiple / Any", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) setForm((f) => ({ ...f, ...initialData }));
  }, [initialData]);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = "hidden"; setSubmitted(false); }
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const INPUT =
    "w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[13px] text-brand-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          variants={VARIANTS.overlay}
          initial="hidden"
          animate="show"
          exit="hidden"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" />

          <motion.div
            className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            variants={VARIANTS.modal}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-brand-navy">Send an Enquiry</div>
                  <div className="text-[11px] text-slate-400">Gateway Workforce</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="text-4xl">✅</div>
                  <h3 className="text-lg font-bold text-brand-navy">Enquiry Sent!</h3>
                  <p className="text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
                  <button onClick={onClose} className="btn-orange px-6 py-2.5 rounded-lg text-sm mt-2">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Name *</label>
                      <input required className={INPUT} placeholder="Full name" value={form.name} onChange={set("name")} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Email *</label>
                      <input required type="email" className={INPUT} placeholder="Email" value={form.email} onChange={set("email")} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Phone</label>
                    <input type="tel" className={INPUT} placeholder="+91 00000 00000" value={form.phone} onChange={set("phone")} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Product / Requirement *</label>
                    <input required className={INPUT} placeholder="What are you looking to source?" value={form.product} onChange={set("product")} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Country of Interest</label>
                    <select className={INPUT} value={form.country} onChange={set("country")}>
                      {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Message</label>
                    <textarea rows={3} className={INPUT} placeholder="Additional details..." value={form.message} onChange={set("message")} />
                  </div>
                  <button type="submit" className="w-full btn-orange btn-shimmer py-3 rounded-lg text-sm justify-center mt-1">
                    Send Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
