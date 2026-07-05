import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ProductSidebar from '../components/ProductSidebar';

const totalPages = 16;
const pages = Array.from({ length: totalPages }, (_, i) => `/kaeser/page_${i + 1}.png`);

const CARD_WIDTH = 220;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP;
const TOTAL_WIDTH = STEP * totalPages;

const InfiniteCarousel = ({ onOpen }) => {
  const x = useMotionValue(0);
  const paused = useRef(false);

  useAnimationFrame(() => {
    if (paused.current) return;
    let current = x.get();
    current -= 0.6;
    if (current <= -TOTAL_WIDTH) current += TOTAL_WIDTH;
    x.set(current);
  });

  const tripled = [...pages, ...pages, ...pages];

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <motion.div
        style={{ x, display: 'flex', gap: CARD_GAP, width: 'max-content' }}
      >
        {tripled.map((src, i) => {
          const pageIdx = i % totalPages;
          return (
            <div
              key={i}
              onClick={() => onOpen(pageIdx)}
              className="group cursor-pointer flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              style={{ width: CARD_WIDTH }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={src}
                  alt={`Page ${pageIdx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-white rounded-full p-3 shadow-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Page {pageIdx + 1}</span>
                <span className="text-xs text-primary font-semibold">View →</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const KaeserHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div ref={ref} className="relative h-64 md:h-96 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="absolute inset-0 scale-110"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center">
          <div className="pl-6 md:pl-16">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">Kaeser</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">World-renowned Compressed Air Systems</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[300px] flex-shrink-0">
            <ProductSidebar />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Efficiency</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  World-renowned Kaeser systems offering high energy efficiency, low life-cycle costs, durable components, and reliable performance for workshops to large manufacturing plants.
                </p>
                <div className="space-y-4">
                  {['High energy efficiency', 'Low life-cycle costs', 'Durable components', 'Reliable performance'].map((feature, i) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inquire About Kaeser Products</h3>
                <p className="text-gray-600 mb-6">Get technical specifications and pricing for our Kaeser compressed air solutions.</p>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-orange-600 transition-all">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const KaeserPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lbPrev = () => setLightboxIndex(i => (i > 0 ? i - 1 : totalPages - 1));
  const lbNext = () => setLightboxIndex(i => (i < totalPages - 1 ? i + 1 : 0));

  return (
    <motion.div
      className="pt-32 pb-16 min-h-screen bg-gray-50"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Card */}
        <KaeserHero />

        {/* Carousel Section */}
        <motion.div variants={fadeInUp} className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-1">Official Documentation</p>
              <h2 className="text-3xl font-bold text-gray-900">Product Catalog</h2>
            </div>
            <span className="text-sm text-gray-400">{totalPages} pages · hover to pause</span>
          </div>

          <InfiniteCarousel onOpen={setLightboxIndex} />
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={e => { e.stopPropagation(); lbPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary text-white rounded-full p-3 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.img
              key={lightboxIndex}
              src={pages[lightboxIndex]}
              alt={`Page ${lightboxIndex + 1}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="object-contain rounded-xl shadow-2xl"
              style={{ maxHeight: '88vh', maxWidth: '80vw' }}
              onClick={e => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm font-semibold px-5 py-2 rounded-full">
              <span className="text-primary">{lightboxIndex + 1}</span>
              <span className="text-white/40 mx-1">/</span>
              {totalPages}
            </div>

            <button
              onClick={e => { e.stopPropagation(); lbNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary text-white rounded-full p-3 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 bg-white/10 hover:bg-red-500 text-white rounded-full p-2.5 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default KaeserPage;
