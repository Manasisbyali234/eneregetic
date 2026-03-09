import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const CompressedAirPage = () => {
  return (
    <motion.div 
      className="pt-24 pb-16 min-h-screen bg-gray-50"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="relative h-64 md:h-96">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80" 
              alt="Compressed Air Solutions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="pl-8 md:pl-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Compressed Air Solutions</h1>
                <p className="text-xl text-gray-200 max-w-xl">Advanced Compressed Air Systems for Industrial Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Efficient and Reliable Air Supply</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Advanced compressed air systems for industrial operations ensuring efficient and reliable air supply. Our solutions are designed to optimize energy consumption and maximize performance.
                </p>
                <div className="space-y-4">
                  {[
                    'Rotary Screw Compressors',
                    'Reciprocating Compressors',
                    'Air Dryers and Filters',
                    'Piping Systems'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Compressed Air</h3>
                <p className="text-gray-600 mb-6">Get technical specifications and pricing for our industrial compressed air solutions.</p>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-orange-600 transition-all">
                  Get Technical Advice
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompressedAirPage;
