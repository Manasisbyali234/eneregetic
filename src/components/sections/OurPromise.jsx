import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { HiSparkles } from 'react-icons/hi';

const OurPromise = () => {
  return (
    <motion.section
      id="our-promise"
      className="py-16 md:py-24 bg-orange-100 relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/40 rounded-full blur-3xl -ml-40 -mt-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl -mr-40 -mb-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-3xl">
            <HiSparkles />
          </div>
        </motion.div>

        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Our Promise
        </motion.h2>
        <motion.div variants={fadeInUp} className="w-20 h-1.5 bg-primary/40 mx-auto rounded-full mb-8"></motion.div>

        <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
          At Energethics Engineering Solutions Pvt. Ltd., we don't just supply equipment — we engineer{' '}
          <span className="text-primary font-bold underline underline-offset-4 decoration-primary/50">reliable, efficient, and sustainable</span>{' '}
          industrial utility solutions that help our customers grow with confidence.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default OurPromise;
