import React from 'react';
import { motion } from 'framer-motion';
import { HiUsers, HiLightBulb, HiHeart, HiRocketLaunch } from 'react-icons/hi2';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const TeamCulture = () => {
  const values = [
    {
      title: "Collaboration",
      desc: "Working together to achieve excellence and drive innovation.",
      icon: <HiUsers className="text-2xl" />
    },
    {
      title: "Innovation",
      desc: "Encouraging creative thinking and continuous improvement.",
      icon: <HiLightBulb className="text-2xl" />
    },
    {
      title: "Diversity",
      desc: "Celebrating diverse perspectives and inclusive environment.",
      icon: <HiHeart className="text-2xl" />
    },
    {
      title: "Excellence",
      desc: "Committed to delivering quality solutions and client success.",
      icon: <HiRocketLaunch className="text-2xl" />
    }
  ];

  return (
    <motion.section 
      id="team-culture" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -ml-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Team & Culture</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-gradient-to-r from-slate-50 to-orange-50 p-6 md:p-10 rounded-3xl shadow-lg shadow-orange-200/20 border border-orange-100/50 mb-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Our team is the cornerstone of our success. Comprised of seasoned engineers, project managers, and technical specialists, each member brings a unique perspective and expertise.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Through a collaborative and inclusive culture, we encourage learning, innovation, and client-focused problem solving.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We celebrate diversity in thought and skill, fostering an environment that is dynamic, agile, and solution-oriented.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 text-center group hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h4 className="font-bold text-xl mb-3 text-gray-900">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamCulture;
