import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
// Pages & Sections
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import JobSection from "./components/JobSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import ClientLogos from "./components/ClientLogos";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import Services from "./components/Services";
import CareersPage from "./components/CareersPage";
import WebDesignPage from "./components/WebDesignPage";
import StaffAugmentationPage from "./components/StaffAugmentationPage";
import MobileAppDevelopmentPage from "./components/MobileAppDevelopmentPage";
import PortfolioPage from "./components/PortfolioPage";

// Privacy Policy Page (simple placeholder)
const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700">
        This is the Privacy Policy page. You can replace this content with your actual privacy policy information.
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="">
        {/* Header */}
        <Header />
        <ScrollToTop />
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <JobSection />
                <TestimonialSection />
                <ClientLogos />
                <ContactSection />
                 <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
              </>
            }
          />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/mobile" element={<MobileAppDevelopmentPage />} />
          <Route path="/webdesign" element={<WebDesignPage />} />
          <Route path="/staff-augmentation" element={<StaffAugmentationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
