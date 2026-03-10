import React from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaWrench, FaBolt, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] opacity-20 hidden md:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="text-8xl text-primary/30"
          >
            <FaCog />
          </motion.div>
        </div>
        <div className="absolute top-[65%] right-[12%] opacity-20 hidden md:block">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="text-7xl text-primary/30"
          >
            <FaWrench />
          </motion.div>
        </div>
        <div className="absolute bottom-[20%] left-[15%] opacity-20 hidden md:block">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl text-yellow-500/30"
          >
            <FaBolt />
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80" 
          alt="Energy efficiency industrial" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Future-Ready Industrial Solutions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
          >
            Engineering Excellence for a <span className="text-primary">Sustainable Future</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed max-w-2xl"
          >
            Energethics Engineering Solutions Pvt. Ltd. – Pioneering Reliable, Sustainable, and Industrially Transformative Solutions. 
            Trusted partner of <span className="text-white font-semibold underline decoration-primary underline-offset-4">Kaeser</span> and <span className="text-white font-semibold underline decoration-primary underline-offset-4">Thermax</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <motion.a 
              href="#products" 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300"
            >
              Explore Solutions <FaChevronRight className="text-sm" />
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
