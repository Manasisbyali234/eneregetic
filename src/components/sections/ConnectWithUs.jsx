import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const ConnectWithUs = () => {
  return (
    <motion.section 
      id="connect" 
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect <span className="text-primary">With Us</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Discover how our engineering expertise can transform your operations and optimize your outcomes.
          </p>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            We invite you to connect with us for consultation, insights, or strategic collaboration.
          </p>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-12">
            Explore the possibilities of a partnership where innovation, reliability, and sustainability intersect.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
          >
            Get In Touch
            <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConnectWithUs;
