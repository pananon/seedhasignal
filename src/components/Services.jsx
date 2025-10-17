import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'SEO',
      description: 'Dominate search rankings with our data-driven SEO strategies. We get your business found by the right audience.',
      icon: '🔍'
    },
    {
      title: 'Google Ads',
      description: 'Precision-targeted campaigns that convert. Maximize ROI with expert ad management and continuous optimization.',
      icon: '📊'
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all platforms. Engage, grow, and convert with content that resonates.',
      icon: '📱'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Services</h2>
          <p className="text-gray-400 text-base md:text-lg">Premium solutions tailored for your growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 relative overflow-hidden animate-fade-in-up active:scale-95"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 md:group-hover:scale-125 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
