"use client"
import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark'
      initial={{x:"100%", width:"100%"}}
      animate={{x:"0%", width:"0%"}}
      transition={{delay: 0.2,  ease: "easeInOut"}}
      
      
      
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light'
      initial={{x:"100%", width:"900%"}}
      animate={{x:"0%", width:"0%"}}
      transition={{delay: 0.2 , duration:0,   ease: "easeInOut"}}
      
      
      
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light'
      initial={{x:"100%", width:"80%"}}
      animate={{x:"0%", width:"0"}}
      transition={{delay: 0.2 ,duration:0,  ease: "easeInOut"}}
      
      
      
      />
    </>
  )
}

export default TransitionEffect
