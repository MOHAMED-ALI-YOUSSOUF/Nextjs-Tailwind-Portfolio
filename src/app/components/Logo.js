"use client"
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-10 bg-dark text-light flex items-center justify-center rounded-xl text-2xl font-bold border border-solid  border-transparent dark:border-light"
        whileHover={{
            backgroundColor:["#e9dada", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#e2c3c3"],
            transition:{ duration:2 , repeat: Infinity}
        }}
      >
        MAY
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
