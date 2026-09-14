import React, { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProductCategories from "./components/ProductCategories";
import GlobalNetwork from "./components/GlobalNetwork";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import LatestInsights from "./components/LatestInsights";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import { ArrowUp, MessageSquare } from "lucide-react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (data = null) => {
    setPrefillData(data);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#FF7A18] selection:text-white">
      <IntroAnimation />
      <TopBar onOpenModal={() => openModal()} />
      <Navbar onOpenModal={() => openModal()} />

      <main>
        {/* 1. Hero Section (Uses /Mobile/landing.png on mobile) */}
        <Hero onOpenModal={() => openModal()} />

        {/* 2. About Gateway Workforce */}
        <About onOpenModal={() => openModal()} />

        {/* 3. Our Services (2 Columns on mobile, 5 Cards) */}
        <Services onSelectService={(title) => openModal({ product: title })} />

        {/* 4. Product Categories (2 Columns on mobile, 6 Categories with arrows) */}
        <ProductCategories onOpenEnquiryWithCategory={(cat) => openModal({ product: cat })} />

        {/* 5. Our Global Network (Visual Map & Badges) */}
        <GlobalNetwork onOpenEnquiryWithCountry={(country) => openModal({ country })} />

        {/* 6. How It Works (Connected Timeline) */}
        <HowItWorks onOpenModal={() => openModal()} />

        {/* 7. CTA Banner (Ship & Badges) */}
        <CTASection onOpenModal={() => openModal()} />

        {/* 8. Latest Insights (Market Insights Card) - Hidden on mobile & medium screens */}
        <div className="hidden lg:block">
          <LatestInsights onOpenModal={() => openModal()} />
        </div>

        {/* 9. Get a Quote Form - Hidden on mobile & medium screens */}
        <div className="hidden lg:block">
          <QuoteSection />
        </div>
      </main>

      {/* 10. Footer (With Mobile Accordions) */}
      <Footer onOpenModal={() => openModal()} />

      {/* Interactive Enquiry / Quote Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={prefillData}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#06283D] text-white flex items-center justify-center shadow-lg hover:bg-[#FF7A18] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF7A18] text-white text-xs font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Enquire Now</span>
        </button>
      </div>
    </div>
  );
}
