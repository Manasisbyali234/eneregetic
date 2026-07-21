import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiShieldCheck, HiGlobeAlt, HiUserGroup, HiStar } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Values = () => {
  const values = [
    {
      title: "Customer First",
      desc: "We place our customers at the heart of every decision and strive to exceed their expectations.",
      icon: <HiUserGroup className="text-3xl" />
    },
    {
      title: "Integrity",
      desc: "We conduct business with honesty, transparency, and ethical responsibility.",
      icon: <HiShieldCheck className="text-3xl" />
    },
    {
      title: "Engineering Excellence",
      desc: "We deliver technically sound, reliable, and innovative solutions that create lasting value.",
      icon: <HiStar className="text-3xl" />
    },
    {
      title: "Quality",
      desc: "We are committed to the highest standards in products, services, and project execution.",
      icon: <HiGlobeAlt className="text-3xl" />
    },
    {
      title: "Continuous Improvement",
      desc: "We embrace learning, innovation, and continuous development to better serve our customers.",
      icon: <HiLightBulb className="text-3xl" />
    },
    {
      title: "Partnership",
      desc: "We believe lasting success is built through strong relationships with customers, employees, suppliers, and technology partners.",
      icon: <HiUserGroup className="text-3xl" />
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
            Our <span className="text-primary">Core Values</span>
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
