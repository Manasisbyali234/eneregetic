import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import TextReveal from '../TextReveal';

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><TextReveal text="Why Choose Energethics?" /></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-6">
            We differentiate ourselves through a client-centric approach:
          </p>
          <ul className="space-y-4">
            {[
              { title: 'Tailored Solutions for Maximum Impact', desc: 'Every solution is crafted to meet the precise needs of your operations.' },
              { title: 'End-to-End Support', desc: 'From concept to maintenance, we are your partner across all stages.' },
              { title: 'Sustainable Innovation', desc: 'Integrating technologies that enhance productivity while reducing environmental footprint.' },
              { title: 'Proven Expertise', desc: 'Backed by a legacy of successful projects and satisfied partners globally.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary font-bold mr-4">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-8 italic border-l-4 border-primary pl-6">
            At Energethics, we don't just provide engineering solutions—we co-create value and growth opportunities for every client we collaborate with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} className="space-y-6">
            {[
              {
                title: 'Authorized Partnerships',
                desc: 'Official channel partners with leading global and Indian manufacturers',
                path: 'M5 13l4 4L19 7'
              },
              {
                title: 'Cost-Effective Solutions',
                desc: 'Maximize ROI with energy-efficient products that reduce operational expenses',
                path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Customized Engineering',
                desc: 'Tailored solutions designed to meet your specific industrial requirements',
                path: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
              },
              {
                title: 'Dedicated Support',
                desc: 'Comprehensive after-sales service and technical assistance',
                path: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: '50+', label: 'Years Combined Experience' },
                    { val: '100%', label: 'Quality Assurance' },
                    { val: '24/7', label: 'Customer Support' },
                    { val: '500+', label: 'Satisfied Clients' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-primary mb-2">{stat.val}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-700 font-semibold">Certified Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="mt-16 bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Strength</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What <span className="text-primary"><TextReveal text="Differentiates" /></span> Us
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            What differentiates Energethics is our ability to combine <strong className="text-gray-800">technical expertise</strong> with a <strong className="text-gray-800">customer-centric approach</strong>. We don't simply supply products—we understand each customer's operational requirements, engineer the right solution, and remain committed throughout the lifecycle of the system.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-primary pl-6">
            Our partnerships with globally respected manufacturers enable us to deliver innovative technologies, while our experienced engineering team ensures every solution is tailored to <strong className="text-gray-800">maximize productivity</strong>, <strong className="text-gray-800">minimize downtime</strong>, and <strong className="text-gray-800">improve energy efficiency</strong>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
