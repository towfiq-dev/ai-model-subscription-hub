import React from 'react';
import BannerImage from '../../assets/banner.png';

const Banner = () => {
  // Smooth Scroll Functionality
  const scrollToModels = () => {
    window.scrollTo({
      top: 850,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-red-50/50 to-white py-16 lg:py-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-red-100 shadow-sm text-red-500 text-sm font-bold px-5 py-2 rounded-full animate-bounce">
            ✨ Next Gen Intelligence
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
            One Plan. <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              All AI Models.
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Stop paying for multiple subscriptions. Access GPT-4, Claude, Gemini, and more through one unified dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button 
              onClick={scrollToModels}
              className="bg-zinc-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all hover:-translate-y-1"
            >
              Explore Models
            </button>
            <button className="bg-white border-2 border-gray-200 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-bold text-gray-400 uppercase tracking-widest pt-4">
            <span>Enterprise Ready</span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Right Image with Floating Animation */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-none animate-[float_6s_ease-in-out_infinite]">
            <img
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(239,68,68,0.2)] rounded-3xl"
              src={BannerImage}
              alt="AI Visualization"
            />
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Banner;