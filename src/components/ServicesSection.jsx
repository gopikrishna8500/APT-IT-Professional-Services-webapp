import React from 'react';
import mobileAppImg from '../assets/mobileapp.webp';
import webDevImg from '../assets/webdev.webp';
import staffAugImg from '../assets/staffaug.webp';

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "We specialize in creating high-quality mobile applications that enhance user experience and drive business growth.",
      image: mobileAppImg,
      alt: "Mobile app development"
    },
    {
      title: "Web Design & Development",
      description: "We craft visually stunning and highly functional websites that deliver seamless user experiences and empower businesses to thrive online.",
      image: webDevImg,
      alt: "Web development"
    },
    {
      title: "Staff Augmentation",
      description: "Our recruitment arm keeps evolving. At APT IT Professional Services, we don't just fill roles. We align with your vision of business transformation.",
      image: staffAugImg,
      alt: "Staff augmentation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full lg:w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-center items-stretch">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col h-full items-center text-center">
                <div className="mb-6 overflow-hidden rounded-lg w-full">
                  <img 
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 w-full">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow w-full">
                  {service.description}
                </p>
                <div className="mt-auto w-full flex justify-center">
                  <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
                    More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
