import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const OurStory = () => {
  return (
    <motion.section 
      id="our-story" 
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Our <span className="text-primary">Story</span>
            </h3>
            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed text-left md:text-justify">
              <p>
                Founded by a team of <span className="font-semibold text-slate-800">Forward-thinking engineers and strategists</span>, Energethics began as a small consultancy focused on process optimization and industrial innovation.
              </p>
              <p>
                Through relentless research, hands-on implementation, and strategic partnerships with original equipment manufacturers (OEMs), we have grown into a full-spectrum engineering solutions provider.
              </p>
              <p>
                Milestones along our journey include successful large-scale industrial projects, adoption of cutting edge IoT and automation tools, and recognition for sustainable practices in engineering solutions.
              </p>
              <p className="font-semibold text-slate-900 border-l-4 border-primary pl-4 py-2 bg-white/50 rounded-r-lg">
                Each success story is a testament to our dedication to expertise and innovation.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="Engineering Excellence"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;
