import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Products = () => {
  const products = [
    {
      title: 'Compressed Air Solutions',
      description: 'Advanced compressed air systems for industrial operations ensuring efficient and reliable air supply.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
      icon: '💨'
    },
    {
      title: 'Kaeser Compressed Air Systems',
      description: 'World-renowned Kaeser systems offering high energy efficiency, low life-cycle costs, durable components, and reliable performance for workshops to large manufacturing plants.',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      icon: '⚙️'
    },
    {
      title: 'Water & Environmental Solutions',
      description: 'Comprehensive solutions for water treatment, waste management, and environmental sustainability to help industries meet environmental standards.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
      icon: '💧'
    },
    {
      title: 'Industrial Lubricants',
      description: 'High-quality lubricants designed to improve equipment efficiency and reduce wear and maintenance.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80',
      icon: '🔧'
    },
    {
      title: 'Material Handling Systems',
      description: 'Equipment and solutions designed to improve industrial logistics and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80',
      icon: '📦'
    }
  ];

  return (
    <motion.section 
      id="products" 
      className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive industrial engineering solutions tailored to meet your manufacturing needs
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div 
                  className="absolute top-4 right-4 text-4xl"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary font-semibold hover:text-orange-600 transition-colors duration-300 flex items-center"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
