import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { IconWhatsApp } from "./SocialIcons";

const COUNTRIES = [
  "China", "Japan", "Vietnam", "Kyrgyzstan", "South Korea",
  "Thailand", "UAE", "Germany", "Multiple / Any",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    product: "", country: "Multiple / Any", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const INPUT =
    "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[14px] text-brand-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7 lg:sticky lg:top-24"
          >
            <div className="eyebrow">Get in Touch</div>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-navy leading-[1.08] tracking-tight">
              Let's Build Global<br />
              <span className="text-brand-orange">Opportunities Together.</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you have a specific product requirement, want to explore international sourcing
              options, or simply want to understand how we can help your business — get in touch
              and we'll respond promptly.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                  <a href="mailto:trade@gatewayworkforce.com" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors">
                    trade@gatewayworkforce.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Phone</div>
                  <a href="tel:+919876543210" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <IconWhatsApp className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</div>
                  <a href="https://wa.me/919876543210" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Office Address</div>
                  <p className="text-brand-navy font-semibold">
                    122 Business Park, Chennai, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-card-lg p-8 sm:p-10 border border-slate-200/60">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Enquiry Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thank you! We'll review your requirement and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-bold text-brand-orange hover:underline"
                  >
                    Send another enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-brand-navy">Send an Enquiry</h3>
                    <p className="text-slate-500 text-sm mt-1">We'll get back to you within 24 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Full Name *</label>
                      <input required className={INPUT} placeholder="Your full name" value={form.name} onChange={set("name")} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Company Name</label>
                      <input className={INPUT} placeholder="Your company" value={form.company} onChange={set("company")} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Email Address *</label>
                      <input required type="email" className={INPUT} placeholder="you@company.com" value={form.email} onChange={set("email")} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Phone Number</label>
                      <input type="tel" className={INPUT} placeholder="+91 00000 00000" value={form.phone} onChange={set("phone")} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Product / Requirement *</label>
                    <input required className={INPUT} placeholder="e.g. Consumer Electronics, Industrial Machinery..." value={form.product} onChange={set("product")} />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Country of Interest</label>
                    <select className={INPUT} value={form.country} onChange={set("country")}>
                      {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      className={INPUT}
                      placeholder="Tell us more about your sourcing requirement..."
                      value={form.message}
                      onChange={set("message")}
                    />
                  </div>

                  <button type="submit" className="w-full btn-orange btn-shimmer py-3.5 rounded-lg text-sm justify-center mt-2">
                    Send Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
