import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Seedha Signal
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          🚦 Digital marketing that slaps — SEO, ads, and social media on beast mode for straight-up growth. 🚀
        </p>

        <p className="text-sm md:text-base text-gray-400 mb-12 max-w-2xl mx-auto">
          Premium digital marketing solutions designed to accelerate your business growth. We deliver results that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold rounded-lg transition-all duration-300"
          >
            Boost My Growth
          </button>
        </div>
      </div>
    </section>
  );
}
