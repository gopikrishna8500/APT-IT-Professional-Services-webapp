import React from 'react';
import aboutImg1 from '../assets/about-img1.png';
import googleMap from '../assets/google-map.png';
import { ChevronRight, Smartphone, Monitor, Search } from 'lucide-react';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import Footer from './Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <div className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Services</h1>
          <div className="flex items-center justify-center text-gray-500">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-orange-500">Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Team Image */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center relative">
            {/* World Map Background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
              <img 
                src={googleMap}
                alt="World map background"
                className="w-full max-w-3xl mx-auto opacity-60"
                style={{ zIndex: 0 }}
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Welcome to APTIT Professional Services
              </h2>
              <p className="text-xl text-gray-500 mb-12">
                Engineering Tomorrow's Tech - Today!
              </p>
            </div>
            {/* Team Illustration */}
            <div className="relative mb-12">
              <img 
                src={aboutImg1}
                alt="Professional team illustration"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              />
            </div>
{/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mobile App Development */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-orange-500 hover:text-white">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                  <img src={appDevelopmentImg} alt="Mobile App Development" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                Read More
              </button>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-orange-500 hover:text-white">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                  <img src={webDevelopmentImg} alt="Web Development" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                Web Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                Read More
              </button>
            </div>

            {/* Staff Augmentation */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-orange-500 hover:text-white">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                  <img src={staffManagementImg} alt="Staff Augmentation" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                Staff Augmentation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                We provide elite, vetted developers on-demand, enabling you to rapidly scale teams, modernize systems, and accelerate transformation.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;