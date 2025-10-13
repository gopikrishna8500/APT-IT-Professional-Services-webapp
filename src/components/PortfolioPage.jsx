import React from "react";
import image from '../assets/gc.jpeg';
import image1 from '../assets/fi.jpeg';
import image2 from '../assets/tci.jpeg';
import image3 from '../assets/gai.jpeg';
import image4 from '../assets/wie.jpeg';
import image5 from '../assets/thechat.jpeg';
const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Our Expertise */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 tracking-wider">OUR EXPERTISE</h1>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
            Zerodot Plus is a company dedicated to empowering entities and individuals through our expertise in
            information, technology platforms, skill-sets, network, branding & advertising, social media optimization, SEO,
            performance marketing and future advancements. Our goal is to create an ecosystem of a progressive
            population that contributes globally.
          </p>
          <div className="mt-8 w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Authorised Partners Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 tracking-wider">AUTHORISED PARTNERS</h2>
          <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-16 text-lg">
            Zerodot Plus harnesses cutting-edge technology and advanced platforms to drive projects in website
            development, e-commerce development, digital marketing, brand design, advertising, performance
            marketing, and more. We are the authorised service partners for the Zoho and Wix ecosystem.
          </p>

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Zoho Partner Card */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <img
                    src="https://www.zoho.com/sites/zweb/images/zoho-logo.svg"
                    alt="Zoho Authorized Partner"
                    className="h-24 w-auto mx-auto mb-4"
                  />
                  <div className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded inline-block">
                    Zoho Authorized Partner
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">ZOHO SERVICE PARTNERS</h3>
              <p className="text-gray-600 leading-relaxed">
                Starting with Zoho Sites & Zoho Commerce, Zoho authorise Zerodot Plus to serve businesses across{" "}
                <span className="underline">Zoho products</span> that can transform your tech and digital presence and help
                accelerate your growth
              </p>
            </div>

            {/* Wix Partner Card */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="border-4 border-black rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                    <div className="text-center">
                      <div className="text-xs font-bold mb-1">WIX PARTNER</div>
                      <div className="text-4xl font-bold">Wix</div>
                      <div className="text-xs font-bold">WIX PARTNER</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">WIX SERVICE PARTNERS</h3>
              <p className="text-gray-600 leading-relaxed">
                With an advanced web ecosystem for professionals and small businesses, Wix offer exemplary web and
                marketing solutions via Zerodot Plus, the WIX pioneers.
              </p>
            </div>
          </div>

          <div className="mt-12 w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Tool Stack Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 tracking-wider">TOOL</h2>
          <h2 className="text-5xl font-bold text-center mb-16 tracking-wider">STACK</h2>

          {/* Green Consultation Banner */}
          <div className="bg-green-500 text-white text-center py-3 mb-16 max-w-md mx-auto">
            <span className="text-xl font-bold">Free Consultation Now</span>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="flex justify-center">
              <img
                src="https://www.zoho.com/sites/zweb/images/zoho-logo.svg"
                alt="Zoho"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://logo.clearbit.com/hostinger.com"
                alt="Hostinger"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                alt="MySQL"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={image}
                alt="Google Cloud"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
                alt="Meta for Business"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Row 3 */}
            <div className="flex justify-center">
              <img
                src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png"
                alt="Firebase"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={image1}
                alt="Flutter"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://resources.jetbrains.com/storage/products/company/brand/logos/AppCode_icon.png"
                alt="AppCode"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={image2}
                alt="Canva"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={image3}
                alt="Google Ads"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center">
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
                alt="WordPress"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={image4}
                alt="Wix"
                className="h-16 w-auto object-contain"
              />
            </div>
             <div className="flex justify-center">
              <img
                src={image5}
                alt="chatgpt"
                className="h-16 w-auto object-contain"
              />
            </div>
            {/* <div className="flex justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white rounded-full" style={{
                  background: 'repeating-conic-gradient(from 0deg, white 0deg 45deg, black 45deg 90deg)'
                }}></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
