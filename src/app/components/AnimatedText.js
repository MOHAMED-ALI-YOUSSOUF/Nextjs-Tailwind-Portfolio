"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  return (
    <div className='w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden'>
      <h1 className={`${className} inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light`}>
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className='inline-block mr-2' 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1,  duration: 0.8  }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
