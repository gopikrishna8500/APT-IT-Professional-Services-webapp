import React from 'react';

const HeroSection = () => {
  return (
  <section id="home" className="relative banner bg-black bg-opacity-70 overflow-hidden min-h-[500px] flex items-center">
    {/* YouTube Video Background */}
    <div className="absolute inset-0 w-full h-full -z-10">
      {/* Fallback background image for video */}
      <div
        style={{
          backgroundImage: 'url(https://img.youtube.com/vi/Fu4GHmyvDk8/maxresdefault.jpg)',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: -100,
          marginTop: '-27px',
          transform: 'translate3d(0px, 66.5px, 0px)',
          display: 'block',
        }}
      ></div>
      <iframe
        title="Digital Marketing Website Background"
        src="https://www.youtube.com/embed/Fu4GHmyvDk8?autohide=1&rel=0&autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=Fu4GHmyvDk8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full object-cover"
        style={{ pointerEvents: 'none', position: 'fixed', inset: 0, width: '100vw', height: '100vh', maxWidth: 'none', maxHeight: 'none', margin: 0, zIndex: -1, transform: 'translate3d(0px, 0px, 0px)' }}
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    </div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-start justify-center min-h-[500px] relative z-10 text-left">
        <h1 className="text-white mb-2 text-3xl lg:text-5xl font-bold">Welcome to APT IT Professional Services</h1>
        <p className="lead mb-2 fw-normal text-white text-xl font-semibold"><b>Architecting The Digital Change</b></p>
        <p className="lead mb-4 fw-normal text-white text-base lg:text-lg max-w-2xl">
          At APT IT Professional Services, we leverage the latest technology to propel your business forward to make it scalable, secure and future-ready. Powered by engineers with a problem solving mindset, we deliver outcomes that go beyond expectations.
        </p>
        <a href="#about" className="mt-2">
          <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-base lg:text-lg font-semibold transition-colors">
            Read More
          </button>
        </a>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;