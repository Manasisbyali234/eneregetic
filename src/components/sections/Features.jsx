import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { HiLightningBolt, HiShieldCheck, HiUserGroup, HiMap } from 'react-icons/hi';

const Features = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  const features = [
    {
      icon: <HiLightningBolt />,
      title: 'Energy Efficient',
      description: 'Cutting-edge solutions that reduce energy consumption and operational costs',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: <HiShieldCheck />,
      title: 'Reliable Quality',
      description: 'Premium products from authorized global and Indian manufacturers',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <HiUserGroup />,
      title: 'Expert Team',
      description: '50+ years of combined industry experience at your service',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <HiMap />,
      title: 'Pan-Karnataka',
      description: 'Comprehensive coverage across all regions of Karnataka',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/20 transition-all duration-300 group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 flex items-center justify-center text-white text-3xl shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              
              <div className="mt-6 flex items-center text-primary text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
