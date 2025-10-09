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
      <div className="pt-20 lg:pt-20">
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
        </Routes>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
