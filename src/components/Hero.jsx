import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 md:px-6">
        <div className="animate-float mb-6 md:mb-8">
          <img src="/assets/LOGO.png" alt="Seedha Signal Logo" className="h-20 md:h-32 mx-auto object-contain animate-pulse-glow" />
        </div>
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Seedha Signal
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed font-semibold">
            🚦 Digital marketing that slaps — SEO, ads, and social media on beast mode for straight-up growth. 🚀
          </p>
        </div>

        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p className="text-sm md:text-base text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Premium digital marketing solutions designed to accelerate your business growth. We deliver results that matter.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <button
            onClick={scrollToContact}
            className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden group active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></div>
          </button>
          <button
            onClick={scrollToContact}
            className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-300 hover:text-white hover:border-cyan-300 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 md:hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
          >
            Boost My Growth
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
        <div className="text-gray-500 text-2xl">↓</div>
      </div>
    </section>
  );
}
