import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaGlobe, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Vision', href: '/vision' },
    { name: 'Mission', href: '/mission' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const solutions = [
    'Compressed Air Solutions',
    'Steam & Heat Solutions',
    'Industrial Products',
    'Sustainable Energy',
    'Quality Assurance'
  ];

  return (
    <motion.footer 
      className="bg-[#0f172a] text-white pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden relative"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Company Brand */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <img src="/download.png" alt="Energethics" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              <strong>Energethics Engineering Solutions Pvt. Ltd. – Pioneering Reliable, Sustainable, and Industrially Transformative Solutions.</strong> We are committed to reshaping industries, empowering businesses, and delivering measurable excellence at every stage.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/energethics", label: "LinkedIn" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/energethics", label: "Instagram" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/energethics", label: "Facebook" },
                { icon: <FaGlobe />, href: "https://energethics.in", label: "Website" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#f97316' }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all border border-gray-700 hover:border-primary/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Navigation */}
          <motion.div
            variants={fadeInUp}
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Solutions */}
          <motion.div
            variants={fadeInUp}
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Solutions
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 text-sm group cursor-pointer hover:text-primary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:bg-primary transition-colors"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Details */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">+91 6364463656/62/63</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Email Support</p>
                  <a href="mailto:sales@energethics.in" className="text-gray-400 group-hover:text-primary transition-colors">
                    sales@energethics.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Our Office</p>
                  <p className="text-gray-400 leading-relaxed">
                    No. 878, Kutadri, Ground Floor, 1st E Main Road, Girinagar Phase 2, Bangalore – 560085
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Strip */}
        <motion.div 
          variants={fadeInUp}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Energethics Engineering Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Cookie Policy</button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
