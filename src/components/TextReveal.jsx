import React from 'react';
import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

/**
 * TextReveal — animates each word on scroll.
 * Props: text (string), className (string), as (tag, default 'span'), once (bool)
 */
const TextReveal = ({ text, className = '', as: Tag = 'span', once = true }) => {
  const words = text.split(' ');
  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
