import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Partnerships = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="partnerships" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Partnerships</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with reputed engineering companies to deliver high-quality products and services across Karnataka
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="md:w-1/3 text-center"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <motion.h3 
                  className="text-2xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  Thermax Group
                </motion.h3>
                <p className="text-sm text-gray-500">Authorized Channel Partner</p>
              </div>
            </motion.div>
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed mb-4">
                Energethics is proud to collaborate with <span className="font-semibold text-primary">Thermax Group</span>, a leading provider of comprehensive solutions in:
              </p>
              <motion.ul 
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
                className="space-y-2"
              >
                {[
                  'Energy and heating solutions',
                  'Cooling and refrigeration systems',
                  'Water treatment and purification',
                  'Environmental management solutions'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            As an authorized channel partner of several reputed global and Indian manufacturers, we ensure our customers 
            receive products known for durability, low maintenance, and minimal energy consumption.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
