import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaShieldAlt, FaIndustry, FaLeaf } from 'react-icons/fa';

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 40);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
};

const stats = [
  { icon: <FaShieldAlt />, label: 'Years of Trust',    target: 10, suffix: '+' },
  { icon: <FaIndustry />,  label: 'Industries Served', target: 20, suffix: '+' },
  { icon: <FaLeaf />,      label: 'Energy Saved',      target: 30, suffix: '%↑' },
];

const Hero = () => (
  <section id="home" className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.05); }
        }
      `}</style>
      <img
        src="/hero-bg.png"
        alt="Industrial engineering facility"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: 'heroZoom 25s ease-in-out infinite alternate', transformOrigin: 'center center' }}
      />
      {/* Dark blue overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(8,20,40,0.45)' }} />
      {/* Orange accent left */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,122,0,0.12) 0%, transparent 45%)' }} />
      {/* Text readability */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,20,40,0.35) 0%, transparent 60%)' }} />
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex-1 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Future-Ready Industrial Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            Engineering Excellence<br />
            for a <span className="text-primary">Sustainable Future</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-orange-100/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Energethics Engineering Solutions Pvt. Ltd. — Pioneering reliable, sustainable, and industrially transformative solutions.
            Trusted partner of{' '}
            <span className="text-white font-semibold underline decoration-primary underline-offset-4">Kaeser</span> &{' '}
            <span className="text-white font-semibold underline decoration-primary underline-offset-4">Thermax</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-lg shadow-lg transition-colors duration-200"
            >
              Explore Solutions <FaChevronRight className="text-xs" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-bold px-7 py-3.5 rounded-lg shadow-lg transition-colors duration-200"
            >
              Contact Us
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="relative z-10 backdrop-blur-md border-t border-white/10" style={{ background: 'rgba(8,20,40,0.72)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-3 divide-x divide-white/10">
        {stats.map(({ icon, label, target, suffix }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-4">
            <span className="text-sky-300 text-xl">{icon}</span>
            <div>
              <p className="text-white font-bold text-xl leading-none"><Counter target={target} suffix={suffix} /></p>
              <p className="text-orange-200/70 text-xs mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

  </section>
);

export default Hero;
