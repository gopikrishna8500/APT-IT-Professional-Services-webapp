import React from "react";
import backgroundVideo from "../assets/digital-marketing-bg.mp4";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Local Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <h1 className="text-white mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Welcome to APT IT Professional Services
          </h1>
          <p className="text-white text-base lg:text-lg xl:text-xl font-semibold mb-5">
            Architecting The Digital Change
          </p>
          <p className="text-white text-sm lg:text-base xl:text-lg mb-6 leading-relaxed max-w-3xl">
            At APT IT Professional Services, we leverage the latest technology
            to propel your business forward to make it scalable, secure and
            future-ready. Powered by engineers with a problem-solving mindset,
            we deliver outcomes that go beyond expectations.
          </p>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
