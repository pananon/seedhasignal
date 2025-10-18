import React from 'react';

export default function Contact() {
  const phoneNumber = '+919455406362';
  const whatsappUrl = `https://wa.me/919455406362?text=Hi%20Seedha%20Signal%2C%20I%20want%20to%20discuss%20my%20digital%20marketing%20needs.`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <section id="contact" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Let's Talk</h2>
          <p className="text-gray-400 text-base md:text-lg">Ready to boost your growth? Reach out to us directly.</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-xl p-6 md:p-12 backdrop-blur-sm animate-scale-in">
          <div className="space-y-4 md:space-y-6">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg font-semibold">Choose your preferred way to connect with us:</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 md:p-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 text-center group relative overflow-hidden animate-fade-in-up active:scale-95"
              style={{animationDelay: '0.3s'}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></div>
              <span className="relative z-10 text-2xl md:text-3xl mr-2 md:mr-3">💬</span>
              <span className="relative z-10 text-base md:text-lg">Message on WhatsApp</span>
            </a>

            <a
              href={callUrl}
              className="block w-full p-4 md:p-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 text-center group relative overflow-hidden animate-fade-in-up active:scale-95"
              style={{animationDelay: '0.4s'}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></div>
              <span className="relative z-10 text-2xl md:text-3xl mr-2 md:mr-3">📞</span>
              <span className="relative z-10 text-base md:text-lg">Call Us Now</span>
            </a>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <p className="text-gray-300 font-semibold mb-2 text-sm md:text-base">Phone Number:</p>
              <p className="text-green-400 text-base md:text-lg mb-4 md:mb-6 font-mono">{phoneNumber}</p>
              <p className="text-gray-400 text-sm md:text-base">
                📍 Basti, Uttar Pradesh (Pin: 272001)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
