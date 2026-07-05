import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiClock, HiMail, HiChevronDown, HiChevronUp } from 'react-icons/hi';

const openings = [
  {
    title: 'Sales Engineer',
    location: 'Bangalore, India',
    type: 'Full-time',
    department: 'Sales',
    description:
      'Drive business growth by identifying new clients and promoting our range of industrial energy solutions including compressed air systems and steam/heat equipment.',
    responsibilities: [
      'Identify and develop new business opportunities in the industrial sector',
      'Present and demonstrate Kaeser and Thermax product lines to clients',
      'Prepare technical proposals and quotations',
      'Achieve monthly and quarterly sales targets',
    ],
    requirements: [
      'B.E./B.Tech in Mechanical or Electrical Engineering',
      '2–5 years of industrial sales experience',
      'Strong communication and negotiation skills',
      'Willingness to travel within the region',
    ],
  },
  {
    title: 'Service Technician',
    location: 'Bangalore, India',
    type: 'Full-time',
    department: 'Service & Maintenance',
    description:
      'Provide on-site installation, commissioning, and maintenance support for compressed air systems, steam boilers, and heat exchangers at client facilities.',
    responsibilities: [
      'Install and commission industrial equipment at client sites',
      'Perform preventive and corrective maintenance',
      'Diagnose and resolve technical issues promptly',
      'Maintain service records and submit reports',
    ],
    requirements: [
      'Diploma/B.E. in Mechanical or Electrical Engineering',
      '1–3 years of field service experience',
      'Hands-on knowledge of compressors or boilers preferred',
      'Valid driving license',
    ],
  },
  {
    title: 'Project Manager',
    location: 'Bangalore, India',
    type: 'Full-time',
    department: 'Projects',
    description:
      'Lead end-to-end execution of industrial energy projects, coordinating with clients, vendors, and internal teams to ensure on-time, within-budget delivery.',
    responsibilities: [
      'Plan, execute, and close projects per scope and schedule',
      'Coordinate with procurement, engineering, and service teams',
      'Manage client communication and expectations',
      'Track project budgets and report progress to management',
    ],
    requirements: [
      'B.E./B.Tech in Engineering; PMP certification is a plus',
      '4–7 years of project management experience in industrial sector',
      'Proficiency in MS Project or similar tools',
      'Strong leadership and problem-solving skills',
    ],
  },
];

const perks = [
  { icon: '🚀', title: 'Growth Opportunities', desc: 'Clear career paths and continuous learning programs' },
  { icon: '🤝', title: 'Collaborative Culture', desc: 'Work alongside experienced engineers and industry experts' },
  { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive medical coverage for you and your family' },
  { icon: '🌍', title: 'Impactful Work', desc: 'Contribute to energy-efficient solutions across industries' },
];

const JobCard = ({ job, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div
        className="p-6 cursor-pointer flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-4">
          <div className="bg-orange-50 p-3 rounded-xl">
            <HiBriefcase className="text-2xl text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{job.department}</p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <HiLocationMarker className="text-primary" /> {job.location}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <HiClock className="text-primary" /> {job.type}
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-400 mt-1 shrink-0">
          {open ? <HiChevronUp className="text-xl" /> : <HiChevronDown className="text-xl" />}
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-gray-600 mb-5">{job.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Responsibilities</h4>
              <ul className="space-y-1">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary mt-1">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Requirements</h4>
              <ul className="space-y-1">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary mt-1">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a
            href={`mailto:sales@energethics.in?subject=Application for ${job.title}`}
            className="inline-block mt-6 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Apply Now
          </a>
        </div>
      )}
    </motion.div>
  );
};

const CareerPage = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero */}
    <div className="bg-gray-900 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary font-semibold uppercase tracking-widest text-sm mb-3"
        >
          Join Our Team
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5"
        >
          Build Your Career at Energethics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We're looking for passionate engineers and professionals to help us deliver world-class industrial energy solutions across India.
        </motion.p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Why Join Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-md text-center"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Openings</h2>
        <p className="text-gray-500 mb-8">Click on a role to view details and apply.</p>
        <div className="space-y-4">
          {openings.map((job, idx) => (
            <JobCard key={idx} job={job} index={idx} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900 rounded-2xl p-10 text-center"
      >
        <HiMail className="text-5xl text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">Don't see the right role?</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          We're always on the lookout for talented individuals. Send us your resume and we'll reach out when a suitable opportunity arises.
        </p>
        <a
          href="mailto:sales@energethics.in?subject=General Job Application"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
        >
          Send Your Resume
        </a>
      </motion.div>
    </div>
  </div>
);

export default CareerPage;
