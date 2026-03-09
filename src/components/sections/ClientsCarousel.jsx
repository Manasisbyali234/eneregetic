import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const logos = [
  { name: 'ACME Corp', path: '/clients/client1.svg' },
  { name: 'TechFlow', path: '/clients/client2.svg' },
  { name: 'GlobalTech', path: '/clients/client3.svg' },
  { name: 'InnovateCo', path: '/clients/client4.svg' },
  { name: 'Apex Ltd', path: '/clients/client5.svg' },
  { name: 'ProSystems', path: '/clients/client6.svg' },
];

const ClientsCarousel = () => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-orange-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trusted by leading companies across industries for energy efficiency and industrial solutions
        </p>
      </motion.div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-8 w-40 h-28 bg-white rounded-lg p-6 shadow-md hover:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.path}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
