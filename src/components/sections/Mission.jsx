import React from 'react';
import { motion } from 'framer-motion';
import { HiUserGroup, HiShieldCheck, HiRefresh } from 'react-icons/hi';
import { FaQuoteLeft, FaBullseye } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Mission = () => {
  const points = [
    {
      title: "Customer Success",
      desc: "Delivering tailored solutions that exceed expectations and drive measurable results.",
      icon: <HiUserGroup />,
      color: "blue"
    },
    {
      title: "Quality Assurance",
      desc: "Maintaining the highest standards in every product and service we provide.",
      icon: <HiShieldCheck />,
      color: "green"
    },
    {
      title: "Continuous Improvement",
      desc: "Evolving with technology and market needs to stay ahead of the curve.",
      icon: <HiRefresh />,
      color: "orange"
    }
  ];

  return (
    <motion.section 
      id="mission" 
      className="py-24 bg-white relative"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Mission</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={staggerContainer} className="space-y-6 order-2 lg:order-1">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 flex gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl text-green-600 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-gray-900">{point.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100/50 rounded-[2rem] blur-2xl"></div>
              <div className="relative bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-8 text-white text-4xl shadow-lg shadow-green-200">
                  <FaBullseye />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To empower industries with reliable, efficient, and sustainable solutions that optimize performance, reduce costs, and enhance productivity.
                </p>
                
                <div className="relative p-8 bg-slate-900 rounded-2xl overflow-hidden">
                  <FaQuoteLeft className="absolute top-4 left-4 text-white/10 text-6xl" />
                  <p className="relative z-10 text-white text-lg font-medium italic leading-relaxed">
                    "Transforming industries through innovation, integrity, and excellence."
                  </p>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-600/20 rounded-full -mr-12 -mb-12 blur-2xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
