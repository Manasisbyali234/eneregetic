import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ThermaxSidebar = () => {
  const [open, setOpen] = useState(true);
  const [tfhOpen, setTfhOpen] = useState(false);
  const [hwOpen, setHwOpen] = useState(false);
  const hwItems = ['Oil/Gas', 'Heat Pump', 'AQUANEXA E-SERIES'];
  const tfhItems = ['Thermic Fluid Heater', 'Oil/Gas', 'Thermopac™ Global', 'Thermocontainer', 'Solid Fuel', 'Enerbloc', 'Thermopac', 'Dynatherm', 'GreenBloc™'];
  const subItems = ['Oil/Gas', 'Steamatic', 'Revomax Nxt', 'Energen', 'Shellmax', 'Shellmax Global Ultra', 'Thermosyphon', 'Solid Fuel', 'Thermeon 2.0', 'Woodpac', 'Cocomax', 'Huskpac', 'Combloc', 'Combipac', 'Bi-Drum', 'Powerpac', 'UltraPac', 'GreenPac'];

  return (
    <div className="w-full lg:w-[300px] flex-shrink-0">
      <h2 className="text-xl font-bold text-gray-700 mb-6 tracking-tight">PRODUCT LIST</h2>
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 group transition-colors"
        >
          <span className="font-medium text-[15px] text-gray-900">STEAM BOILERS</span>
          <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {open ? <FaMinus size={12} /> : <FaPlus size={12} />}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-white">
                {subItems.map((item, i) => (
                  <div key={i}>
                    <div className="border-t border-gray-100 mx-4"></div>
                    <button className="block w-full text-left py-3 px-4 pl-6 text-[14px] text-orange-500 hover:bg-orange-50 transition-colors duration-200">
                      {item}
                    </button>
                  </div>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="border-t border-gray-200">
          <button
            onClick={() => setTfhOpen(!tfhOpen)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 group transition-colors"
          >
            <span className="font-medium text-[15px] text-gray-900">THERMIC FLUID HEATER</span>
            <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
              {tfhOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {tfhOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-white">
                  {tfhItems.map((item, i) => (
                    <div key={i}>
                      <div className="border-t border-gray-100 mx-4"></div>
                      <button className="block w-full text-left py-3 px-4 pl-6 text-[14px] text-orange-500 hover:bg-orange-50 transition-colors duration-200">
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="border-t border-gray-200">
          <button
            onClick={() => setHwOpen(!hwOpen)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 group transition-colors"
          >
            <span className="font-medium text-[15px] text-gray-900">HOT WATER HEATER</span>
            <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
              {hwOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {hwOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-white">
                  {hwItems.map((item, i) => (
                    <div key={i}>
                      <div className="border-t border-gray-100 mx-4"></div>
                      <button className="block w-full text-left py-3 px-4 pl-6 text-[14px] text-orange-500 hover:bg-orange-50 transition-colors duration-200">
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ThermaxPage = () => {
  return (
    <motion.div
      className="pt-24 pb-16 min-h-screen bg-gray-50"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="relative h-64 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
              alt="Thermax Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-transparent flex items-center">
              <div className="pl-6 md:pl-16">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">Thermax</h1>
                <p className="text-lg md:text-xl text-orange-100 max-w-xl">Leader in Energy and Environment Solutions</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <ThermaxSidebar />
              <div className="flex-1">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Energy & Environmental Engineering</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      In partnership with Thermax Group, we provide comprehensive engineering solutions for heating, cooling, power, water and waste management, air pollution control, and chemicals.
                    </p>
                    <div className="space-y-4">
                      {[
                        'Steam generation and distribution',
                        'Water and waste management',
                        'Air pollution control systems',
                        'Solar and renewable energy'
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Inquire About Thermax Solutions</h3>
                    <p className="text-gray-600 mb-6">Explore our range of Thermax environmental and energy engineering products.</p>
                    <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-orange-600 transition-all">
                      Contact Specialist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThermaxPage;
