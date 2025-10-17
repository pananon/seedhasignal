import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="animate-fade-in-up">
            <img src="/assets/LOGO.png" alt="Seedha Signal Logo" className="h-10 md:h-12 mb-3 md:mb-4 object-contain hover:scale-110 transition-transform duration-300" />
            <p className="text-gray-400 text-sm md:text-base">Premium digital marketing agency serving Basti, UP</p>
            <a href="https://www.instagram.com/seedhasignal/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 md:mt-4 text-blue-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110 text-sm md:text-base">
              📷 Follow on Instagram
            </a>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors transform hover:translate-x-1 inline-block">SEO</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors transform hover:translate-x-1 inline-block">Google Ads</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors transform hover:translate-x-1 inline-block">Social Media Marketing</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-blue-400">Contact</h4>
            <p className="text-gray-400 mb-2 text-sm md:text-base">📍 Basti, Uttar Pradesh</p>
            <p className="text-gray-400 mb-2 text-sm md:text-base">Pin: 272001</p>
            <p className="text-gray-400 italic text-sm md:text-base">Digital marketing that slaps</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-500 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <p className="text-xs md:text-sm">&copy; {currentYear} Seedha Signal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
