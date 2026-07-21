import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const logos = [
  { name: 'ACME Corp',    initials: 'AC', color: '#E65C00' },
  { name: 'TechFlow',     initials: 'TF', color: '#1A73E8' },
  { name: 'GlobalTech',   initials: 'GT', color: '#0F9D58' },
  { name: 'InnovateCo',   initials: 'IC', color: '#9C27B0' },
  { name: 'Apex Ltd',     initials: 'AL', color: '#F4511E' },
  { name: 'ProSystems',   initials: 'PS', color: '#00897B' },
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
              className="flex-shrink-0 flex flex-col items-center justify-center mx-8 w-40 h-28 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <svg width="44" height="44" viewBox="0 0 44 44" className="mb-2">
                <rect width="44" height="44" rx="10" fill={logo.color} />
                <text x="22" y="29" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">{logo.initials}</text>
              </svg>
              <span className="text-gray-700 font-semibold text-center text-xs leading-tight">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
