"use client"
import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return (
    <>
      {/* Première couche (bg-dark) */}
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
      />
      
      {/* Deuxième couche (bg-light) */}
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />
      
      {/* Troisième couche (bg-light avec opacité différente si besoin) */}
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-light'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  )
}

export default TransitionEffect
