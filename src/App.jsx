import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import JobSection from './components/JobSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import ClientLogos from './components/ClientLogos';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import Services from './components/Services';
import CareersPage from './components/CareersPage';
// ...existing code...

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'services':
        return <Services />;
      case 'careers':
        return <CareersPage />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <JobSection />
            <TestimonialSection />
            <ContactSection />
            <ClientLogos />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      {currentPage === 'home' && <Footer />}
    </div>
  );
}

export default App;