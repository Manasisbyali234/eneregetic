import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { navLinkHover } from '../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      dropdown: [
        { name: 'Our Vision', href: '/vision' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Company Profile', href: '/company-profile' }
      ]
    },
    { 
      name: 'Products', 
      href: '/#products',
      dropdown: [
        { name: 'Kaeser', href: '/kaeser' },
        { name: 'Thermax', href: '/thermax' },
        { name: 'Compressed Air Solutions', href: '/compressed-air' },
        { name: 'Steam & Heat Solutions', href: '/steam-heat' },
        { name: 'Industrial Products', href: '/industrial-products' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Career', href: '/career' },
  ];

  // Logic for Navbar background and text color
  const navBackground = !isHome || scrolled 
    ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' 
    : 'bg-transparent py-5';
  
  const linkHoverColor = !isHome || scrolled
    ? 'text-gray-600 hover:text-primary'
    : 'text-gray-200 hover:text-white';

  const buttonStyle = !isHome || scrolled
    ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-orange-600'
    : 'bg-white text-primary hover:bg-gray-100';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden transition-transform group-hover:scale-105">
              <img src="/download.png" alt="Energethics" className="h-10 md:h-14 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <div 
                key={idx}
                className="relative px-3 py-2"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <motion.button 
                    variants={navLinkHover}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className={`flex items-center space-x-1 font-medium text-sm transition-colors duration-300 ${linkHoverColor}`}
                  >
                    <span>{link.name}</span>
                    <HiChevronDown className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </motion.button>
                ) : (
                  <motion.a 
                    href={link.href}
                    variants={navLinkHover}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className={`font-medium text-sm transition-colors duration-300 ${linkHoverColor}`}
                  >
                    {link.name}
                  </motion.a>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 overflow-hidden"
                    >
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.href.startsWith('/#') ? '/' : item.href}
                          onClick={() => {
                            if (item.href.includes('#')) {
                              window.location.hash = item.href.split('#')[1];
                            }
                          }}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-all font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className={`ml-6 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform active:scale-95 ${buttonStyle}`}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              !isHome || scrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'
            }`}
          >
            {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <img src="/download.png" alt="Energethics" className="h-14" />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-100 rounded-xl text-gray-900"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4">
              {navLinks.map((link, idx) => (
                <div key={idx} className="space-y-2">
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button 
                        onClick={() => setMobileActiveDropdown(mobileActiveDropdown === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="text-xl font-bold text-gray-900">{link.name}</span>
                        <HiChevronDown className={`text-2xl text-gray-500 transition-transform duration-300 ${mobileActiveDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileActiveDropdown === link.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 space-y-3 border-l-2 border-primary/20"
                          >
                            {link.dropdown.map((item, i) => (
                              <Link
                                key={i}
                                to={item.href.startsWith('/#') ? '/' : item.href}
                                onClick={() => {
                                  if (item.href.includes('#')) {
                                    window.location.hash = item.href.split('#')[1];
                                  }
                                  setIsOpen(false);
                                }}
                                className="block text-lg font-medium text-gray-600 hover:text-primary transition-colors py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-xl font-bold text-gray-900 hover:text-primary transition-colors block"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="block w-full text-center py-3.5 bg-primary text-white rounded-2xl font-bold text-base shadow-xl shadow-primary/20"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
