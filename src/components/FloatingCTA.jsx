import React, { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [showFloating, setShowFloating] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowFloating(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '+919999999999';
  const whatsappUrl = `https://wa.me/919999999999?text=Hi%20Seedha%20Signal%2C%20I%20want%20to%20discuss%20my%20digital%20marketing%20needs.`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <>
      {showFloating && (
        <div className="fixed bottom-4 right-4 z-40 md:hidden animate-slide-in-right">
          {activeTab === null ? (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveTab('contact')}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
              >
                💬
              </button>
              <button
                onClick={() => setActiveTab('call')}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
                style={{ animationDelay: '0.2s' }}
              >
                📞
              </button>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 w-64 animate-scale-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">
                  {activeTab === 'contact' ? 'Message Us' : 'Call Us'}
                </h3>
                <button
                  onClick={() => setActiveTab(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {activeTab === 'contact' ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                >
                  💬 WhatsApp
                </a>
              ) : (
                <a
                  href={callUrl}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                >
                  📞 Call Now
                </a>
              )}

              <p className="text-gray-400 text-sm mt-3 text-center">{phoneNumber}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
