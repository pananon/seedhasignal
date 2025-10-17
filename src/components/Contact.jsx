import React from 'react';

export default function Contact() {
  const phoneNumber = '+919999999999';
  const whatsappUrl = `https://wa.me/919999999999?text=Hi%20Seedha%20Signal%2C%20I%20want%20to%20discuss%20my%20digital%20marketing%20needs.`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Let's Talk</h2>
          <p className="text-gray-400 text-lg">Ready to boost your growth? Reach out to us directly.</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-300 mb-8 text-lg">Choose your preferred way to connect with us:</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              <span className="text-3xl mr-3">💬</span>
              Message on WhatsApp
            </a>

            <a
              href={callUrl}
              className="block w-full p-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              <span className="text-3xl mr-3">📞</span>
              Call Us Now
            </a>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-300 font-semibold mb-2">Phone Number:</p>
              <p className="text-blue-400 text-lg mb-6">{phoneNumber}</p>
              <p className="text-gray-400">
                📍 Basti, Uttar Pradesh (Pin: 272001)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
