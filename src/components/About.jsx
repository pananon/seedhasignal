import React from 'react';

export default function About() {
  const reasons = [
    'Proven track record of delivering measurable results',
    'Expert team with years of industry experience',
    'Data-driven strategies tailored to your business',
    'Transparent reporting and continuous optimization',
    'Dedicated support and personalized service',
    'Premium quality at competitive rates'
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Why Choose Us</h2>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              We're not just another marketing agency. We're your growth partners. With a focus on results, transparency, and innovation, we help businesses in Basti and beyond reach their full potential.
            </p>
            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
              Serving businesses across Basti, Uttar Pradesh (Pin: 272001) and beyond with premium digital marketing solutions.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 animate-slide-in-right">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-gradient-to-r from-gray-800/30 to-gray-800/10 hover:from-blue-900/30 hover:to-blue-800/10 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 transform hover:translate-x-1 md:hover:translate-x-2 animate-fade-in-up active:scale-95"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-blue-400 text-xl md:text-2xl flex-shrink-0 mt-1 animate-pulse">✓</div>
                <p className="text-gray-300 text-sm md:text-base group-hover:text-gray-200 transition-colors">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
