import React from 'react';
import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiUsers, HiLightningBolt, HiCheckCircle } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const CompanyProfile = () => {
  const points = [
    {
      title: "Who We Are",
      desc: "At Energethics Engineering Solutions Pvt. Ltd., we are more than just engineers; we are problem-solvers, innovators, and partners in industrial transformation.",
      icon: <HiUsers />,
    },
    {
      title: "Our Expertise",
      desc: "We bring together decades of experience across multiple sectors, leveraging cutting-edge technology and strategic insight.",
      icon: <HiLightningBolt />,
    },
    {
      title: "Our Vision",
      desc: "Established with a vision to push the boundaries of engineering, transforming complex industrial challenges into practical solutions.",
      icon: <HiOfficeBuilding />,
    }
  ];

  return (
    <motion.section 
      id="company-profile" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company <span className="text-primary">Profile</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <div className="bg-slate-50 p-6 md:p-10 rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden group">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Engineering Excellence</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                <strong>Energethics Engineering Solutions Pvt. Ltd. – Pioneering Reliable, Sustainable, and Industrially Transformative Solutions.</strong> We are committed to reshaping industries, empowering businesses, and delivering measurable excellence at every stage.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Established with a vision to push the boundaries of engineering, our organization excels at transforming complex industrial challenges into practical, sustainable, and innovative solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We bring together decades of experience across multiple sectors, leveraging cutting-edge technology, expert knowledge, and strategic insight to help industries achieve operational excellence and long-term growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Industrial Innovation',
                  'Sustainable Solutions',
                  'Strategic Insights',
                  'Operational Excellence'
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-700 font-medium">
                    <HiCheckCircle className="text-primary mr-2 text-xl" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="space-y-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex items-start gap-6 group transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-2xl">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{point.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CompanyProfile;
