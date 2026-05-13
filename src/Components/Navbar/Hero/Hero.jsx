import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a2b3c] mb-4 tracking-tight">Friends to keep close in your life</h1>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#234e3f] hover:bg-[#1a3a2f] text-white border-none px-6 rounded-md font-medium mb-12 md:mb-20">
          <span className="text-xl mr-1">+</span> Add a Frien</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white border border-gray-100 rounded-xl py-10 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">10</h2>
            <p className="text-gray-400 text-sm font-medium">Total Friends</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl py-10 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">3</h2>
            <p className="text-gray-400 text-sm font-medium">On Track</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl py-10 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">6</h2>
            <p className="text-gray-400 text-sm font-medium">Need Attention</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl py-10 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">12</h2>
            <p className="text-gray-400 text-sm font-medium px-2">Interactions This Month</p>
          </div>

        </div>

        
        <div className="w-full h-[1px] bg-gray-300 mt-8 md:mt-24">
        </div>
      </div>
    </section>
  );
};

export default Hero;