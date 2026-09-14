import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Building,
  User,
  Mail,
  Phone,
  Package,
  Globe,
  MessageSquare,
  Clock,
  ShieldAlert,
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO, NETWORK_HUBS } from "../data/tradeData";

export default function EnquirySection({ prefillData }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productRequirement: "",
    countryOfInterest: "China",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Update form if prefillData changes
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        productRequirement: prefillData.category || prev.productRequirement,
        countryOfInterest: prefillData.country || prev.countryOfInterest,
      }));
    }
  }, [prefillData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.productRequirement) {
      setErrorMsg("Please fill in your name, email, and product requirement.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#f97316", "#0f2e3d", "#38bdf8"],
      });
    }, 900);
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Company Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-navy-700 text-brand-orange-400 text-xs font-bold tracking-widest uppercase">
              <span>Send An Enquiry</span>
            </div>

            {/* Exact Heading & Copy from prompt */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Looking for a Product or <span className="text-brand-orange-500">Global Supplier?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tell us what you're looking for. Our team can explore sourcing opportunities across international markets.
            </p>

            {/* Direct Contact Cards */}
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy-900/80 border border-brand-navy-800">
                <div className="w-10 h-10 rounded-lg bg-brand-orange-500/20 text-brand-orange-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Sourcing Desk</div>
                  <div className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy-900/80 border border-brand-navy-800">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">B2B Trade Inquiries</div>
                  <div className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy-900/80 border border-brand-navy-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Response Window</div>
                  <div className="text-sm font-bold text-white mt-0.5">Initial feasibility within 24–48 business hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-900 border border-slate-100">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-navy-950 font-heading">
                    Enquiry Received Successfully
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our international trade team has received your requirement for{" "}
                    <span className="font-semibold text-brand-orange-600">{formData.productRequirement}</span>. We will review supplier availability and reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        productRequirement: "",
                        countryOfInterest: "China",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-brand-navy-900 text-white text-xs font-bold hover:bg-brand-navy-800 transition-colors"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-2 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-brand-navy-950 font-heading">
                      Tell Us What You're Looking For
                    </h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Fill in your specifications to explore international sourcing viability.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company / Business Name"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="business@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product / Requirement & Country of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Product / Requirement *
                      </label>
                      <div className="relative">
                        <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="productRequirement"
                          required
                          value={formData.productRequirement}
                          onChange={handleChange}
                          placeholder="e.g. Consumer Electronics, Machinery..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Country of Interest
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          name="countryOfInterest"
                          value={formData.countryOfInterest}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 bg-white text-slate-900"
                        >
                          <option value="China">🇨🇳 China</option>
                          <option value="Japan">🇯🇵 Japan</option>
                          <option value="Vietnam">🇻🇳 Vietnam</option>
                          <option value="Kyrgyzstan">🇰🇬 Kyrgyzstan</option>
                          <option value="Other Global Markets">🌍 Other Global Markets</option>
                          <option value="Multiple / Best Corridors">Open to Recommendations</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Specifications
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details such as quantity, specifications, compliance, target timeline..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 text-slate-900 placeholder:text-slate-400"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button (Exact text from prompt) */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-bold text-base shadow-glow-orange hover:shadow-orange-500/50 hover:brightness-110 active:scale-95 transition-all duration-200 disabled:opacity-70"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send an Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
