import React from 'react';
import { motion } from 'framer-motion';
import { HiSearch, HiChip, HiLightningBolt, HiChartBar } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import TextReveal from '../TextReveal';

const WhatWeOffer = () => {
  const offers = [
    {
      title: 'Consultation & Planning',
      desc: 'In-depth analysis of industrial operations to identify opportunities for optimization and innovation.',
      icon: <HiSearch />,
      bg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'System Design & Product Selection',
      desc: 'Customized engineering solutions and selection of appropriate products for maximum efficiency.',
      icon: <HiChip />,
      bg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Installation & Implementation',
      desc: 'Seamless integration of engineered solutions, ensuring minimal disruption to workflows.',
      icon: <HiLightningBolt />,
      bg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Post-Deployment Monitoring & Support',
      desc: 'Continuous monitoring, maintenance, and technical support to guarantee sustainable performance gains.',
      icon: <HiChartBar />,
      bg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <motion.section 
      id="what-we-offer" 
      className="py-16 md:py-24 bg-white"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <TextReveal text="What We" /> <span className="text-primary"><TextReveal text="Offer" /></span>
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Energethics provides comprehensive engineering services tailored to each client’s operational environment. By combining technical expertise with strategic insight, we provide solutions that are both practical and scalable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group h-full flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 ${item.bg} ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeInUp} className="text-center mt-12 text-slate-800 font-semibold text-lg italic bg-primary/5 py-4 px-8 rounded-full inline-block mx-auto max-w-full">
          Ensuring every project delivers tangible value.
        </motion.p>

        {/* What We Do */}
        <motion.div variants={fadeInUp} className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              What We <span className="text-primary"><TextReveal text="Do" /></span>
            </h3>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-slate-600 mb-8">Our comprehensive portfolio includes:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                'Compressed Air Systems',
                'Air Treatment & Compressed Air Accessories',
                'Aluminium Compressed Air Piping Systems',
                'Pneumatic Automation Solutions',
                'Steam Boilers & Thermal Utility Solutions',
                'Water & Wastewater Treatment Systems',
                'Industrial Pumps & Pumping Solutions',
                'System Design & Engineering',
                'Turnkey Supply, Installation & Commissioning',
                'Preventive Maintenance & Annual Maintenance Contracts (AMC)',
                'Energy Audits & Utility System Optimization',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-lg leading-relaxed border-t border-slate-200 pt-8">
              From <strong className="text-slate-800">concept and design</strong> to <strong className="text-slate-800">installation, commissioning, and lifecycle support</strong>, we provide complete solutions that ensure reliability, efficiency, and long-term performance.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatWeOffer;
