"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const educationList = [
  {
    degree: "Master in Computer Engineering",
    institution: "Çankırı Karatekin University, Turkey",
    duration: "2021 - 2023",
    description: "In-depth training in software engineering, artificial intelligence, and web development.",
  },
  {
    degree: "Frontend Developer Training",
    institution: "TechPro Education, Online",
    duration: "2023",
    description: "Practical training focused on modern web development and frontend technologies.",
  },
  {
    degree: "Bachelor in Mathematic",
    institution: "University of Djibouti",
    duration: "2017-2020",
    description: "Graduated with a specialization in maths.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mt-64 mb-64">
       <h2 className="font-bold text-8xl text-center mb-32 text-dark dark:text-light 
      lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* Vertical Bar */}
        <motion.div
          className="absolute left-9 top-15 w-[4px] h-full bg-dark origin-top dark:bg-light"
          style={{
            scaleY: scrollYProgress,
          }}
        />

        <div className="mt-16 pl-16">
          {educationList.map((edu, index) => (
            <motion.div key={index} className="border border-dark rounded-lg p-4 mb-16 dark:border-light text-dark">
              <LiIcon reference={ref} />
              <h3 className="font-bold text-xl">{edu.degree}</h3>
              <p className="italic">
                {edu.institution}  
              </p>
              <p>{edu.duration}</p>
              <p>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
