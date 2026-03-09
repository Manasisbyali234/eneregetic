import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiBriefcase } from 'react-icons/hi';

const CareerPage = () => {
  const openings = [
    {
      title: 'Sales Engineer',
      location: 'Mumbai, India',
      type: 'Full-time'
    },
    {
      title: 'Service Technician',
      location: 'Pune, India',
      type: 'Full-time'
    },
    {
      title: 'Project Manager',
      location: 'Delhi, India',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Career Opportunities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and be part of innovative industrial solutions
            </p>
          </motion.div>

          <div className="grid gap-6 mb-12">
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <HiBriefcase className="text-4xl text-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.location} • {job.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <HiMail className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see a suitable position?</h3>
            <p className="text-gray-600 mb-6">Send us your resume and we'll keep you in mind for future opportunities.</p>
            <a href="mailto:careers@energethics.com" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-orange-600 transition-colors">
              Email Your Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
