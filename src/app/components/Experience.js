"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const experiences = [
  {
    title: "Saleh Ismael Portfolio",
    role: "Freelance Frontend Developer",
    description:
      "Developed a personal portfolio website showcasing the work of Saleh Ismael with interactive elements.",
    duration: "2023 - Present",
  },
  {
    title: "Djibstudy",
    role: "Freelance Web Developer",
    description:
      "Created an educational platform for Djibouti, focusing on user-friendly design and accessibility.",
    duration: "2022 - Present",
  },
  {
    title: "Afar Halk Derneği",
    role: "Freelance Developer",
    description:
      "Built a website for the Afar Cultural Association to promote Afar culture and connect the diaspora.",
    duration: "2022 - Present",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mt-64 mb-64">
    <h2 className="font-bold text-8xl text-center mb-32 text-dark dark:text-light 
      lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* Barre verticale */}
        <motion.div
          className="absolute left-9 top-15 w-[4px] h-full bg-dark origin-top dark:bg-light"
          style={{
            scaleY: scrollYProgress,
          }}
        />

        <div ref={ref} className="mt-16 pl-16">
           
          {experiences.map((exp, index) => (
            <motion.div key={index} 
            className="border border-dark rounded-lg p-4 mb-16 dark:border-light text-dark"
            
            >
                <div
         ref={ref} ><LiIcon ref={ref}/></div>
                 
              <h3 className="font-bold text-xl">{exp.title}</h3>
              <p className="italic">
                {exp.role} - {exp.duration}
              </p>
              
              <p>-{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
