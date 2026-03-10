import React from 'react';
import { motion } from 'framer-motion';
import { HiEye, HiCheckCircle, HiStar } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const About = () => {
  const cards = [
    {
      title: 'Our Vision',
      icon: <HiEye />,
      content: 'To become the preferred engineering solutions provider for the manufacturing sector while building a loyal customer base.',
      color: 'blue'
    },
    {
      title: 'Our Mission',
      icon: <FaRocket />,
      content: 'To establish Energethics as the first choice engineering solutions partner by delivering reliable and innovative solutions.',
      color: 'green'
    },
    {
      title: 'Core Values',
      icon: <HiStar />,
      values: ['Ethical Business', 'Customer Satisfaction', 'Innovation', 'Sustainability'],
      color: 'orange'
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-32 bg-white relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Engineering solutions with <span className="text-primary">50+ years</span> of expertise.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              <strong>Energethics Engineering Solutions Pvt. Ltd. – Pioneering Reliable, Sustainable, and Industrially Transformative Solutions.</strong> We are committed to reshaping industries, empowering businesses, and delivering measurable excellence at every stage.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Established with a vision to push the boundaries of engineering, our organization excels at transforming complex industrial challenges into practical, sustainable, and innovative solutions.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We bring together decades of experience across multiple sectors, leveraging cutting-edge technology, expert knowledge, and strategic insight to help industries achieve operational excellence and long-term growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: 'Authorized Partner', sub: 'Global Brands' },
                { label: 'Pan-Karnataka', sub: 'Service Network' }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
                  <p className="text-lg md:text-2xl font-bold text-slate-900">{stat.label}</p>
                  <p className="text-xs md:text-sm text-slate-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h4>
                    {card.content ? (
                      <p className="text-slate-600 leading-relaxed">{card.content}</p>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {card.values.map((v, i) => (
                          <div key={i} className="flex items-center text-sm text-slate-600 font-medium">
                            <HiCheckCircle className="text-primary mr-2" />
                            {v}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
