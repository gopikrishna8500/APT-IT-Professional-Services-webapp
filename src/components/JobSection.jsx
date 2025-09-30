import React from 'react';

const JobSection = () => {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (col-3) */}
          <aside className="lg:w-3/12 w-full space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg text-slate-900 mb-4">Date Posted</h3>
              <div className="space-y-3">
                {['Last hour', 'Last 24 hour', 'Last 7 days', 'Last 14 days', 'Last 30 days'].map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Add more widgets here as needed, similar to CareersPage */}
          </aside>
          {/* Main Content (col-8) */}
          <main className="lg:w-8/12 w-full">
            <div className="text-center">
              <h3 className="text-orange-500 text-lg font-semibold mb-4">Post OR Get a job</h3>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Looking for Post OR Get a job? We have end-to-end solutions that can keep up with your criteria.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-colors">
                  Post a Job
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-md font-semibold transition-colors">
                  Browse Jobs
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default JobSection;