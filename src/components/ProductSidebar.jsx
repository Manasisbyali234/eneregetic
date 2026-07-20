import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductSidebar = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const menuItems = [
    {
      title: 'COMPRESSORS',
      subItems: [
        'Rotary Screw Compressors',
        'Reciprocating Compressors',
        'Portable Compressors'
      ]
    },
    {
      title: 'BLOWERS',
      subItems: [
        'Rotary Lobe Blowers',
        'Screw Blowers',
        'Turbo Blowers'
      ]
    },
    {
      title: 'VACUUM PUMPS',
      subItems: [
        'Rotary Screw Vacuum Pumps',
        'Rotary Lobe Vacuum Pumps'
      ]
    },
    {
      title: 'AIR TREATMENT',
      subItems: [
        'Compressed Air Dryers',
        'Compressed Air Filters'
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:w-[300px] flex-shrink-0">
      <h2 className="text-xl font-bold text-gray-700 mb-6 tracking-tight">PRODUCT LIST</h2>
      
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
        {menuItems.map((item, index) => (
          <div key={index} className="border-b border-gray-100 last:border-b-0">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 group"
            >
              <span className={`font-medium text-[15px] ${openIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                {item.title}
              </span>
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-white">
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        <div className="border-t border-gray-100 mx-4"></div>
                        <button
                          className="block w-full text-left py-3 px-4 pl-6 text-[14px] text-orange-500 hover:bg-orange-50 transition-colors duration-200"
                        >
                          {subItem}
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
