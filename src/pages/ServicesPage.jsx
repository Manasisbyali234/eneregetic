import React from 'react';
import { motion } from 'framer-motion';
import { HiCog, HiSupport, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';
import WhatWeOffer from '../components/sections/WhatWeOffer';

const ServicesPage = () => {
  const services = [
    {
      icon: <HiCog className="text-5xl" />,
      title: 'Installation & Commissioning',
      description: 'Professional installation and commissioning services for all industrial equipment.'
    },
    {
      icon: <HiSupport className="text-5xl" />,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance and technical support to ensure optimal performance.'
    },
    {
      icon: <HiLightningBolt className="text-5xl" />,
      title: 'Energy Optimization',
      description: 'Energy audit and optimization services to reduce operational costs.'
    },
    {
      icon: <HiShieldCheck className="text-5xl" />,
      title: 'Consulting Services',
      description: 'Expert consulting for industrial automation and energy solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your industrial needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <WhatWeOffer />
    </div>
  );
};

export default ServicesPage;
