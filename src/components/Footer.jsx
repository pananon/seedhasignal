import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/assets/LOGO.png" alt="Seedha Signal Logo" className="h-12 mb-4 object-contain" />
            <p className="text-gray-400">Premium digital marketing agency serving Basti, UP</p>
            <a href="https://www.instagram.com/seedhasignal/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors">
              📷 Follow on Instagram
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">SEO</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">📍 Basti, Uttar Pradesh</p>
            <p className="text-gray-400 mb-2">Pin: 272001</p>
            <p className="text-gray-400">Digital marketing that slaps</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Seedha Signal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
