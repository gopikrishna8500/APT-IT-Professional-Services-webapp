import React from 'react';
import aboutImg1 from '../assets/about-img1.png';
import googleMap from '../assets/google-map.png';
import { ChevronRight } from 'lucide-react';
import TestimonialSection from './TestimonialSection';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";
import Footer from './Footer';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     <div
  className="relative py-20 bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Dark gradient overlay for professional look */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-gray-900/80 to-slate-900/90"></div>

  {/* Optional subtle pattern overlay */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl font-bold text-orange-500 mb-4 drop-shadow-lg">
      About Us
    </h1>
    <div className="flex items-center justify-center text-white">
      <span className="hover:text-orange-400 transition-colors cursor-pointer">
        Home
      </span>
      <ChevronRight className="h-4 w-4 mx-2 text-orange-400" />
      <span className="text-orange-500 font-semibold">About Us</span>
    </div>
  </div>
</div>


      {/* Hero Section with Team Image */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          {/* World Map Background */}
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-slate-800 mb-2">
              Welcome to APTIT Professional Services
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Engineering Tomorrow's Tech - Today!
            </p>
          </div>

          {/* World Map Background */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
            <img
              src={googleMap}
              alt="World map background"
              className="w-full max-w-3xl mx-auto opacity-60"
              style={{ zIndex: 0 }}
            />
          </div>

          {/* Team Illustration */}
          <div className="relative mt-24 mb-12 z-10">
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
                <Link to="/mobile">Read More</Link>
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
                <Link to="/webdesign">Read More</Link>
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
                <Link to="/staff-augmentation">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Person working on laptop"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">About Us</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 2016, APT IT Professional Services has grown from a tech recruitment agency into a dynamic, forward-thinking IT enterprise that specializes in delivering custom software development, enterprise-grade solutions, and strategic IT consulting services. Headquartered in New York, we bridge global expertise in an agile environment to help our clients accelerate innovation and drive business growth.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our leadership team comprises software veterans, solution architects, and dedicated project managers. From web development and mobile app development to enterprise architecture, legacy modernization, DevOps and data engineering, we bring an in-depth approach to every engagement.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                What sets us apart is our dual expertise in IT talent strategy and software development. While our tech recruitment division remains one of the fastest growing in the US, our software development services vertical is equally robust. Keeping customization at the heart, we design, build, and optimize high-performing digital products and platforms that solve mission-critical business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-5">Our Vision & Mission</h2>
          <div className="space-y-12">
            {/* Vision Statement */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Vision Statement</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted global partner for transformative digital solutions - empowering businesses to innovate, scale, and lead in an ever-evolving technological world.
              </p>
            </div>
            {/* Mission Statement */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Mission Statement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At APT IT Professional Services, our mission is to deliver high-impact software solutions that solve real-world business challenges. We are committed to building scalable, secure, and human-centered digital products through collaboration, innovation, and a relentless focus on quality.
              </p>
            </div>
            {/* We aim to */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">We aim to:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build technology that drives meaningful outcomes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Offer flexible engagement models tailored to your goals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuously evolve through agile, transparent, and client-first practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Foster a culture of excellence, learning, and ethical innovation
                </li>
              </ul>
            </div>
          </div>
          {/* Add TestimonialSection after 'We aim to' section */}
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
