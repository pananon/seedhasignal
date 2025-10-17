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
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We're not just another marketing agency. We're your growth partners. With a focus on results, transparency, and innovation, we help businesses in Basti and beyond reach their full potential.
            </p>
            <p className="text-gray-500 text-base mb-8">
              Serving businesses across Basti, Uttar Pradesh (Pin: 272001) and beyond with premium digital marketing solutions.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors"
              >
                <div className="text-blue-400 text-2xl flex-shrink-0 mt-1">✓</div>
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
