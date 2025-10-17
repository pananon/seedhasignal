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
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">Premium solutions tailored for your growth</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
