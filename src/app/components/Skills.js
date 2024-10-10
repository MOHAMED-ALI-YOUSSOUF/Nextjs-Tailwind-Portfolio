"use client";
import React from "react";
import { motion } from "framer-motion";

// Le composant Skill pour chaque compétence individuelle
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer dark:text-dark dark:bg-light 
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        {/* Centre du cercle */}
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light 
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* Compétences individuelles avec ajustements des positions */}
        <Skill name="HTML" x="-15vw" y="-10vw" />
        <Skill name="CSS" x="15vw" y="-10vw" />
        <Skill name="JavaScript" x="15vw" y="10vw" />
        <Skill name="React" x="0vw" y="18vw" />
        <Skill name="Next.js" x="-15vw" y="10vw" />
        <Skill name="TypeScript" x="22vw" y="0vw" />
        <Skill name="Bootstrap" x="-22vw" y="0vw" />
        <Skill name="Tailwind CSS" x="-30vw" y="-15vw" />
        <Skill name="jQuery" x="0vw" y="-18vw" />
        <Skill name="Git & Github" x="30vw" y="-18vw" />
        <Skill name="Responsive Design" x="-30vw" y="16vw" />
        <Skill name="API Integration" x="30vw" y="16vw" />
        <Skill name="Web Performance Optimization" x="0vw" y="25vw" />
      </div>
    </>
  );
};

export default Skills;
