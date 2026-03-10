import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiShieldCheck, HiGlobeAlt, HiUserGroup, HiStar } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Values = () => {
  const values = [
    {
      title: "Innovation",
      desc: "Constantly redefining solutions through creativity and forward-thinking engineering practices.",
      icon: <HiLightBulb className="text-3xl" />
    },
    {
      title: "Reliability",
      desc: "Ensuring our clients can trust every system and product we deliver.",
      icon: <HiShieldCheck className="text-3xl" />
    },
    {
      title: "Sustainability",
      desc: "Designing solutions that respect the planet while optimizing industrial efficiency.",
      icon: <HiGlobeAlt className="text-3xl" />
    },
    {
      title: "Collaboration",
      desc: "Working closely with stakeholders to achieve seamless implementation and lasting results.",
      icon: <HiUserGroup className="text-3xl" />
    },
    {
      title: "Excellence",
      desc: "Upholding the highest standards of technical performance, service quality, and client satisfaction.",
      icon: <HiStar className="text-3xl" />
    }
  ];

  return (
    <motion.section 
      id="values" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 group hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Values;
