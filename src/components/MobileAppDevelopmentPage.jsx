import React, { useState } from "react";
import { Smartphone, Wrench, Globe, RefreshCw, Palette, CheckCircle, Search, Link2 } from "lucide-react";
import Lottie from 'lottie-react';
import aptitlogo from '../assets/aptitps-logo.png';
import bulbIcon from '../assets/light-bulb.png';
import nativeApp from "../assets/Native Apps.png";
import crossPlatformApp from "../assets/Cross-Platform Apps.png";
import webApp from "../assets/Web Apps.png";
import hybridApp from "../assets/Hybrid Apps.png";
import iphone from "../assets/iphone.png";
import productChainImg from '../assets/product-chain.png';
import softwareEngineerImg from '../assets/softwareengineer.png';
import teamLeaderImg from '../assets/team-leader.png';
import androidAppAnimation from '../assets/Mobile app development & concept user interface design uiux.json';
import goLogo from "../assets/Techeminence/Go-Logo.png";
import reactLogo from "../assets/Techeminence/React.png";
import flutterLogo from "../assets/Techeminence/flutter.png";
import pythonLogo from "../assets/Techeminence/python-logo-master-v3-TM.png";
import djangoLogo from "../assets/Techeminence/django.png";
// import ObjectiveCImg from '../assets/Techeminence/Objective-c.png';
import dotNetLogo from "../assets/Techeminence/NET.png";
import swiftLogo from "../assets/Techeminence/Swift.png";
import nodejsLogo from "../assets/Techeminence/nodejsDark.png";
import kotlinLogo from "../assets/Techeminence/kotlin-logo.png";
import javaLogo from "../assets/Techeminence/Java.png";

import Footer from './Footer';

const MobileAppDevelopmentPage = () => {
  const data = [
    { id: 1, title: "Mobile Application Development", content: "APTIT PS is a leading software company with a decade of experience in mobile app development services.", icon: <span className="text-orange-500 text-4xl">📱</span> },
    { id: 2, title: "MVP and Prototype Development", content: "Start your mobile app journey with a prototype and an MVP that can validate your idea and concept before you commit to a full-scale implementation.", icon: <span className="text-orange-500 text-4xl">🛠️</span> },
    { id: 3, title: "Mobile Web Optimization", content: "Our team of mobile veterans optimize your web application to deliver an excellent experience across various mobile devices. At APT IT PS, one of our objectives is to ensure accessibility on the go with our mobile web development services.", icon: <span className="text-orange-500 text-4xl">🌐</span> },
    { id: 4, title: "Cross-Platform Compatibility", content: "Our team of mobile professionals help your business reach a wider audience with cross-platform compatibility for your industry-specific application. We offer a hassle-free deployment across various operating systems and devices.", icon: <span className="text-orange-500 text-4xl">🔄</span> },
    { id: 5, title: "UI/UX design", content: "Apart from being a leading mobile solutions enterprise, we are also a UI UX design company that supports businesses and gives startups a chance to differentiate and grab the attention of investors.", icon: <span className="text-orange-500 text-4xl">🎨</span> },
    { id: 6, title: "Quality Assurance", content: "Starting with discussion and improvements of your idea, we aim to embody your exact vision. Our QA experts check for bugs, code integrity, and flaws to address your business goals.", icon: <span className="text-orange-500 text-4xl">✅</span> },
    { id: 7, title: "Discovery phase", content: "Implement your business idea consulting our experts and you get the best solutions ever to satisfy your target users’ needs.", icon: <span className="text-orange-500 text-4xl">🔍</span> },
    { id: 8, title: "IT System & Software Integration Services", content: "APT IT Professional Services is a software integration company that can help you integrate enterprise applications, data, and processes in the most efficient way.", icon: <span className="text-orange-500 text-4xl">🔗</span> },
  ];

  const [selected, setSelected] = useState(data[0]);



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-b from-gray-50 to-black py-12"> */}
      <div
        className="relative py-12 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Mobile App Development</h1>
          <div className="flex items-center justify-center space-x-2 text-white">
            <span className="hover:text-orange-400 transition-colors cursor-pointer">Home</span>
            <span className="text-orange-400">›</span>
            <span className="text-orange-500">Mobile App Development</span>
          </div>
        </div>
      </div>



      {/* Android App Development Section */}
      <section className="py-20 mb-5 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[80%]">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 text-orange-500 ">
                Android App Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We specialize in creating high-quality mobile applications that enhance user experience and drive business growth.
              </p>
            </div>

            {/* Right Lottie Animation */}
            <div className="flex justify-center mt-4 md:mt-0">
              <Lottie
                animationData={androidAppAnimation}
                loop={true}
                autoplay={true}
                style={{ width: 450, height: 'auto' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Our custom mobile app development service Suite */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[85%]">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            Our custom mobile app development service Suite
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch shadow-lg rounded-3xl overflow-hidden bg-white">

            {/* Left Panel (Scrollable List) */}
            <div className="bg-orange-500 text-white flex flex-col justify-start overflow-y-auto rounded-l-3xl max-h-[400px] left-scroll ">
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`cursor-pointer px-6 py-5 text-center text-lg font-medium transition-all border-b border-orange-400/50 ${selected.id === item.id ? "bg-orange-600 font-bold" : "hover:bg-orange-600"
                    }`}
                  onClick={(e) => {
                    setSelected(item);
                    // make sure the clicked item remains visible
                    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest" });
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Right Panel (Dynamic Content) */}
            <div className="p-10 flex flex-col justify-center items-center text-center bg-white transition-all duration-500 ease-in-out">
              <div className="mb-4">{selected.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{selected.title}</h3>
              <p className="text-gray-700 leading-relaxed">{selected.content}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Mobile Application Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[80%]">

          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">
            Mobile Application Platforms
          </h2>
          <div className="grid md:grid-cols-4 gap-8">

            {/* Native Apps */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img
                  src={nativeApp}
                  alt="Native Apps"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Native Apps</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Our mobile team at APT IT PS creates apps for a specific mobile operating system, such as iOS or Android, the latest development tools and platform-specific programming languages.
              </p>
            </div>

            {/* Cross-Platform Apps */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img
                  src={crossPlatformApp}
                  alt="Cross-Platform Apps"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Cross-Platform Apps</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Our team builds applications using frameworks including React Native or Flutter. This allows for faster development cycles and code reusability across different operating systems and platforms.
              </p>
            </div>

            {/* Web Apps */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img
                  src={webApp}
                  alt="Web Apps"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Web Apps</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Apart from cross-platform applications, we develop web-based mobile applications. These are accessible through mobile browsers and offer flexibility in deployment across various devices.
              </p>
            </div>

            {/* Hybrid Apps */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img
                  src={hybridApp}
                  alt="Hybrid Apps"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Hybrid Apps</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Combining the capabilities and elements of both native and web applications, our team develops hybrid applications using web technologies packaged as native applications.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Our Process & Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[90%]">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">
            Our Process & Integrations
          </h2>
          <div className="grid md:grid-cols-3 gap-12 items-center">

            {/* Left Column - Our Process */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-left">Our Process</h3>
              <div className="space-y-4 text-left text-gray-700">
                <p><span className="font-semibold text-orange-500">Discovery Phase</span> - We immerse in your business, identify challenges, explore opportunities, and set clear objectives.</p>
                <p><span className="font-semibold text-orange-500">Design Phase</span> - User-focused, intuitive designs from wireframes to prototypes, ensuring seamless user journeys.</p>
                <p><span className="font-semibold text-orange-500">Development Phase</span> - Robust, scalable apps built using cutting-edge technologies and agile collaboration.</p>
                <p><span className="font-semibold text-orange-500">Testing Phase</span> - Comprehensive QA for performance, security, and usability before release.</p>
                <p><span className="font-semibold text-orange-500">Deployment & Go-to-Market</span> - Store compliance, optimization, and smooth launch for maximum visibility.</p>
                <p><span className="font-semibold text-orange-500">Maintenance & Support</span> - Ongoing updates, enhancements, and 24/7 support to keep your app thriving.</p>
              </div>
            </div>

            {/* Center Column - iPhone Image */}
            <div className="flex items-center justify-center">
              <img
                src={iphone}
                alt="Mobile App Preview"
                className="w-80 md:w-96 mx-auto"
              />
            </div>

            {/* Right Column - Integrations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-left">Integrations We Offer</h3>
              <div className="space-y-4 text-left text-gray-700">
                <p><span className="font-semibold text-orange-500">API Integration</span> - Enable your app to connect with platforms via RESTful or GraphQL APIs—unlocking payment gateways, social logins, and SaaS features.</p>
                <p><span className="font-semibold text-orange-500">Database Integration</span> - Secure, real-time connections with MySQL, PostgreSQL, MongoDB, and Firebase for structured and unstructured data.</p>
                <p><span className="font-semibold text-orange-500">Authentication & Authorization</span> - Industry-standard protocols (OAuth 2.0, OpenID, JWT, SSO) for secure and controlled access.</p>
                <p><span className="font-semibold text-orange-500">Enterprise System Integration</span> - Seamless sync with CRM, ERP, HRMS, and legacy systems for unified workflows and visibility.</p>
                <p><span className="font-semibold text-orange-500">Push Notification Integration</span> - Personalized, geo-targeted alerts using FCM, OneSignal, and APNs to boost engagement.</p>
                <p><span className="font-semibold text-orange-500">Messaging & Communication</span> - In-app chat, VoIP, and video conferencing with Twilio, Sendbird, Agora, and WebRTC.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[80%]">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">
            Why Choose APT IT Professional Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <img
                    src={bulbIcon}
                    alt="Innovation Bulb"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Streamlined UX, Engineered for Adoption
                </h3>
                <p className="text-gray-600">
                  We design interfaces that eliminate friction, simplify navigation,
                  and delight users at every touchpoint — enhancing accessibility for
                  all demographics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <img
                    src={bulbIcon}
                    alt="Innovation Bulb"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Real-Time Access to Core Functionality
                </h3>
                <p className="text-gray-600">
                  Empower users with instant access to vital data, workflows, and
                  features — minimizing downtime and maximizing productivity.
                </p>
              </div>
            </div>

            {/* Center Column - Logo */}
            <div className="flex items-center justify-center py-30">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={aptitlogo}
                      alt="APT IT Professional Services"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <img
                    src={bulbIcon}
                    alt="Innovation Bulb"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Seamless User Onboarding</h3>
                <p className="text-gray-600">
                  Our custom apps minimize learning curves through guided onboarding,
                  role-based experiences, and behavior-driven UX strategies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <img
                    src={bulbIcon}
                    alt="Innovation Bulb"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Exceeding Expectations, Building Loyalty
                </h3>
                <p className="text-gray-600">
                  We engineer apps that go beyond utility — creating memorable
                  interactions that turn users into advocates and one-time visitors
                  into loyal customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* our Tech Eminence Section */}
      <section className="py-16 bg-white">
        <h2 className="text-orange-500 text-center font-bold mb-10" style={{ fontSize: "35px" }}>
          Our Tech Eminence
        </h2>

        {/* First Row - scrolling left */}
        <div className="overflow-hidden relative mb-6">
          <div className="marquee">
            {[goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo, dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo,
              goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo, dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Tech Logo"
                className="inline-block mr-6 h-16"
              />
            ))}
          </div>
        </div>

        {/* Second Row - scrolling right */}
        {/* <div className="overflow-hidden relative">
    <div className="marquee-reverse">
      {[goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo, objectiveCLogo, dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo,
        goLogo, reactLogo, flutterLogo, pythonLogo, djangoLogo, objectiveCLogo, dotNetLogo, swiftLogo, nodejsLogo, kotlinLogo, javaLogo
      ].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Tech Logo"
          className="inline-block mr-6 h-16"
        />
      ))}
    </div>
  </div> */}
      </section>


      {/* Our Engagement Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[80%]">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-6">
              Our Engagement Models
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto">
              We offer flexible engagement models tailored to your product lifecycle, resource needs, and budget.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Product Development */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-colors duration-200">
                <div className="flex justify-center mb-6">
                  <img src={productChainImg} alt="Product Development" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Product Development</h3>
                <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                  Bring us your idea, and we'll transform it into a fully functional, market-ready product—handling everything from architecture to launch.
                </p>
              </div>

              {/* Team Extension */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-colors duration-200">
                <div className="flex justify-center mb-6">
                  <img src={softwareEngineerImg} alt="Team Extension" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Team Extension</h3>
                <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                  Already have a roadmap? Extend your in-house capabilities with our vetted engineers, designers, and QA experts who align seamlessly with your workflows.
                </p>
              </div>

              {/* Dedicated Development Team */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-colors duration-200">
                <div className="flex justify-center mb-6">
                  <img src={teamLeaderImg} alt="Dedicated Development Team" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Development Team</h3>
                <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                  Stay in control of your product's direction with a handpicked team working exclusively for you - agile, transparent, and fully integrated into your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      {/* <Footer /> */}
    </div>
  );
};

export default MobileAppDevelopmentPage;
