import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiGlobeAlt, HiTrendingUp, HiEye } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Vision = () => {
  const cards = [
    {
      title: "Innovation First",
      desc: "Pioneering advanced solutions that transform industrial operations.",
      icon: <HiLightBulb className="text-2xl" />
    },
    {
      title: "Sustainability",
      desc: "Committed to eco-friendly practices and energy-efficient technologies.",
      icon: <HiTrendingUp className="text-2xl" />
    },
    {
      title: "Global Excellence",
      desc: "Setting industry standards through quality and reliability worldwide.",
      icon: <HiGlobeAlt className="text-2xl" />
    }
  ];

  return (
    <motion.section 
      id="vision" 
      className="py-24 bg-slate-50 relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Vision</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-900/5 border border-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <HiEye className="text-9xl text-primary" />
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-primary text-4xl">
                <HiEye />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Leading the Future</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                To be the most trusted and innovative partner in industrial solutions, driving sustainable growth and operational excellence across industries worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
                "We envision a future where every industry operates at peak efficiency with minimal environmental impact, powered by cutting-edge technology."
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="space-y-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex items-start gap-6 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{card.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Vision;
