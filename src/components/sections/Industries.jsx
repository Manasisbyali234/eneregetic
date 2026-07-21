import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Industries = () => {
  const industries = [
    { name: 'Automotive', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80' },
    { name: 'Chemical', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80' },
    { name: 'Pharmaceutical', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80' },
    { name: 'Food & Beverage', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80' },
    { name: 'Textile', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80' },
    { name: 'Cement', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80' },
    { name: 'Wastewater Treatment', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
    { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80' }
  ];

  return (
    <motion.section
      className="py-12 md:py-16 bg-gray-50"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing specialized engineering solutions across diverse industrial sectors
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-900">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Industries;
