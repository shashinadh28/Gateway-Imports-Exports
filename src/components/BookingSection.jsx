import React, { useState } from "react";
import { ArrowRight, PhoneCall, Mail, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../data/tradeData";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "International Sourcing",
    product: "",
    destination: "Nhava Sheva (Mumbai)",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Form Box (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
                <span>◆</span>
                <span>Booking Appointment</span>
                <span>◆</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Book Transport & Logistics
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Provide your shipment or product sourcing specifications for a rapid feasibility assessment and pricing quote.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-green-50 border border-green-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-bold text-green-900">Quotation Request Submitted!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you! Our international trade desk has received your request and will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-lg bg-[#0c2f3b] text-white text-xs font-bold hover:bg-orange-500 transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@company.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Required Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                    >
                      <option>International Sourcing</option>
                      <option>Maritime & Container Freight</option>
                      <option>Air Cargo Express</option>
                      <option>Customs Clearance & Tax Advisory</option>
                      <option>Direct B2B Procurement Desk</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Product or Commodity Category
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Consumer Electronics / Industrial Valves"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Indian Destination / Port
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nhava Sheva / Delhi Air Cargo"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Dark Teal Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#0c2f3b] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4">
                How Can We Help You?
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Need immediate advisory on trade corridors, container slot bookings, or overseas manufacturer screening? Connect directly with our international desk.
              </p>

              <div className="space-y-4 text-sm border-t border-teal-800/60 pt-6">
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Direct Trade Hotline</div>
                    <div className="font-bold text-white">{COMPANY_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Official Desk</div>
                    <div className="font-bold text-white">{COMPANY_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Office Working Hours</div>
                    <div className="font-medium text-slate-200">{COMPANY_INFO.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-teal-800/60 text-xs text-teal-300">
              ⚡ Guaranteed response within 24 hours on all B2B procurement and freight inquiries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
