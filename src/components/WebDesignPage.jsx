import React from 'react';
import { Search, Settings, LayoutGrid as Layout, Repeat, Wrench, FileCode, Monitor, ArrowUp } from 'lucide-react';
import productChainImg from '../assets/product-chain.png';
import softwareEngineerImg from '../assets/softwareengineer.png';
import teamLeaderImg from '../assets/team-leader.png';
import Footer from './Footer';

const WebDesignPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
  <div className="container text-center lg:w-8/12 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Web Design & Development
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <a href="#" className="hover:text-orange-500">Home</a>
            <span>&gt;</span>
            <span className="text-orange-500">Web Design & Development</span>
          </div>
        </div>
      </div>

  <div className="container px-4 py-16 lg:w-8/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Web Design & Development
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We craft visually stunning and highly functional websites that deliver seamless user experiences and empower businesses to thrive online.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Web Development"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
            Our Core Custom Web Development Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="border-b border-orange-300 pb-4">
                  <h3 className="text-xl font-semibold">Website Development</h3>
                </div>
                <div className="border-b border-orange-300 pb-4">
                  <h3 className="text-xl font-semibold">UI/UX Design Services</h3>
                </div>
                <div className="border-b border-orange-300 pb-4">
                  <h3 className="text-xl font-semibold">Web Portal Development</h3>
                </div>
                <div className="border-b border-orange-300 pb-4">
                  <h3 className="text-xl font-semibold">System Integration Services</h3>
                </div>
                <div className="border-b border-orange-300 pb-4">
                  <h3 className="text-xl font-semibold">Maintenance & Support</h3>
                </div>
                <div className="pb-4">
                  <h3 className="text-xl font-semibold">Custom CMS Development</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <div className="flex justify-center mb-6">
                <Monitor className="w-20 h-20 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Web Application Development
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Transform your business vision into powerful, feature-rich web applications. We engineer secure, scalable, and responsive solutions tailored to your users and designed to fuel long-term growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
            Full Lifecycle Web Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Search className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We begin with deep-dive discovery sessions, stakeholder interviews, and market research to define goals, identify challenges, and align the product vision with your business needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Settings className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our planning process includes scope definition, timeline estimation, resource allocation, and roadmap creation—setting the foundation for an efficient, result-oriented engagement.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Repeat className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Agile Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use Agile methodologies to enable iterative delivery, continuous feedback, and flexible execution. This ensures reduced risk, improved product quality, and faster time to market.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <FileCode className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Commitment to Timelines</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Guided by ISO-compliant standards and best practices, our team delivers on every milestone with punctuality, transparency & dedication making us a trusted long-term partner.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
            Our Tech Eminence
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-5xl text-blue-400 mb-2">Flutter</div>
              <p className="text-gray-600 text-sm">Flutter</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-800 mb-2">django</div>
              <p className="text-gray-600 text-sm">Django</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">.NET</div>
              <p className="text-gray-600 text-sm">.NET</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">Swift</div>
              <p className="text-gray-600 text-sm">Swift</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">node.js</div>
              <p className="text-gray-600 text-sm">Node.js</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">Kotlin</div>
              <p className="text-gray-600 text-sm">Kotlin</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">Java</div>
              <p className="text-gray-600 text-sm">Java</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">GO</div>
              <p className="text-gray-600 text-sm">Go</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-6">
            Our Engagement Models
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto">
            We offer flexible engagement models tailored to your product lifecycle, resource needs, and budget.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-colors duration-200">
              <div className="flex justify-center mb-6">
                <img src={productChainImg} alt="Product Development" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Product Development</h3>
              <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                Bring us your idea, and we'll transform it into a fully functional, market-ready product—handling everything from architecture to launch.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-colors duration-200">
              <div className="flex justify-center mb-6">
                <img src={softwareEngineerImg} alt="Team Extension" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Team Extension</h3>
              <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                Already have a roadmap? Extend your in-house capabilities with our vetted engineers, designers, and QA experts who align seamlessly with your workflows.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-colors duration-200">
              <div className="flex justify-center mb-6">
                <img src={teamLeaderImg} alt="Dedicated Development Team" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Dedicated Development Team</h3>
              <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                Stay in control of your product's direction with a handpicked team working exclusively for you - agile, transparent, and fully integrated into your vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Footer sections (same as ContactUsPage and AboutUsPage) */}
      <Footer />
      <div className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a>
            </div>
            <div className="text-sm">
              <span>©Copyright 2025 </span>
              <span className="text-orange-400">APTITPS</span>
              <span> All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignPage;
