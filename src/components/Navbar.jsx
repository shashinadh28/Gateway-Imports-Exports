import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { GatewayLogo } from "./Logo";

const NAV_LINKS = [
  { label: "Home",           href: "#hero" },
  { label: "About Us",       href: "#about" },
  { label: "Our Services",   href: "#services" },
  { label: "Products",       href: "#products" },
  { label: "Global Network", href: "#network" },
  { label: "Insights",       href: "#how-it-works" },
  { label: "Contact",        href: "#footer" },
];

export default function Navbar({ onOpenModal }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "shadow-md py-2" : "border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">

          {/* ── Logo ── */}
          <a href="#hero" className="shrink-0">
            <GatewayLogo />
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`relative text-[13px] font-semibold transition-colors pb-1 group ${
                  i === 0 ? "text-[#06283D]" : "text-[#1E293B] hover:text-[#FF7A18]"
                }`}
              >
                {l.label}
                {/* Active underline for Home, hover underline for others */}
                {i === 0 ? (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FF7A18] rounded-full" />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF7A18] rounded-full group-hover:w-full transition-all duration-250" />
                )}
              </a>
            ))}
          </nav>

          {/* ── Right Action: Enquire Now + Mobile Toggle ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="p-2 text-slate-700 hover:text-[#FF7A18] transition-colors rounded-full hover:bg-slate-100"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-11 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search products, services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-xs text-slate-800 outline-none w-full"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Mobile "Enquire Now" button (Matches reference UI screenshot) */}
            <button
              onClick={onOpenModal}
              className="lg:hidden px-3.5 py-1.5 rounded-md bg-[#FF7A18] hover:bg-orange-600 text-white font-bold text-xs tracking-wide shadow-sm shadow-orange-500/20 active:scale-95 transition-all"
            >
              Enquire Now
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-slate-800 hover:text-[#FF7A18] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF7A18] border-b border-slate-50 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onOpenModal(); }}
            className="mt-3 w-full bg-[#FF7A18] text-white font-bold py-2.5 rounded-lg text-sm"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}
