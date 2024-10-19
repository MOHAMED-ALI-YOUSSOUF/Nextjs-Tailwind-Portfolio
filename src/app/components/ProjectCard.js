"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Saleh Ismael Portfolio",
    description:
      "A personal portfolio website showcasing the work of Saleh Ismael, featuring interactive elements and a modern design.",
    link: "https://salehismael.com",
    image: "/images/projects/1.png",
    width: 600,
    height: 400,
  },
  {
    id: 2,
    title: "Djibstudy",
    description:
      "An educational platform for Djibouti student, providing resources for students.",
    link: "https://djibstudy.com",
    image: "/images/projects/2.png",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    title: "IT Mastery",
    description:
      "Educational platform create using React.js & Bootstrap with a team",
    link: "https://itmasteryschool.com",
    image: "/images/projects/4.png", // Change to the correct image path
    width: 600,
    height: 400,
  },
  {
    id: 4,
    title: "Afar Halk Derneği",
    description:
      "A website for the Afar Cultural Association, aimed at promoting Afar culture and connecting the diaspora.",
    link: "https://afar-people-association.vercel.app/",
    image: "/images/projects/3.png",
    width: 600,
    height: 400,
  },

  {
    id: 5,
    title: "La Fontaine",
    description: "Discover new recipes",
    link: "https://la-fontaine.vercel.app/",
    image: "/images/projects/5.png", // Change to the correct image path
    width: 600,
    height: 400,
  },
  {
    id: 6,
    title: "Kyoto",
    description: "Guide to Japan",
    link: "https://mohamed-ali-youssouf.github.io/site-kyoto/#home",
    image: "/images/projects/6.png", // Change to the correct image path
    width: 600,
    height: 400,
  },
  {
    id: 7,
    title: "Calculator",
    description: "Design of Calculator",
    link: "https://mohamed-ali-youssouf.github.io/Calculator/",
    image: "/images/projects/7.png", // Change to the correct image path
    width: 600,
    height: 400,
  },
  {
    id: 8,
    title: "TODO",
    description: "TODO app",
    link: "https://github.com/MOHAMED-ALI-YOUSSOUF/Todo.app",
    image: "/images/projects/8.png", // Change to the correct image path
    width: 800,
    height: 500,
  },
];

const FramerImage = motion(Image);
const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  width,
  height,
}) => {
  return (
    <article className="w-full flex items-center  justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl sx:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-r-3xl dark:bg-light xs:-right-2 xm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={width}
          height={height}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light text-dark sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm-text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link> */}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light border border-solid hover:border-dark hover:bg-light hover:text-dark transition duration-150 ease-in-out"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, width, height }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={width}
          height={height}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pt-5 pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light text-dark lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light xs:text-base">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link> */}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light border border-solid hover:border-dark hover:bg-light hover:text-dark transition duration-150 ease-in-out "
          >
            Visit{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const ProjectCard = () => {
  return (
    <>
    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
      <div  className="col-span-12 ">

        
    {projects.map((project, index) => (
      <motion.div 
      key={index}
      className="borde bg-[#1b1b1b] border-white/20 flex flex-col md-flex-row text-white rounded-3xl sticky top-28 p-12 justify-between items-start mb-16 sm:w-[300p] h-[600px] 
     w-[1100p] "
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay: index*0.2}}
      viewport={{once:true}}
      
      
      
      >
 <FeaturedProject
            title={project.title}
            summary={project.description}
            link={project.link}
            type=" Project"
            img={project.image}
            // github={projects[0].link} // Assuming link is also the GitHub link
            width={project.width}
            height={project.height}
          />

    </motion.div>
    ))
       
    }
      </div>
    </div>
     {/* <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"> 
        // Featured Project 
        <div className="col-span-12">
          <FeaturedProject
            title={projects[0].title}
            summary={projects[0].description}
            link={projects[0].link}
            type=" Project"
            img={projects[0].image}
            // github={projects[0].link} // Assuming link is also the GitHub link
            width={projects[0].width}
            height={projects[0].height}
          />
        </div>

        // Other Projects 
        {projects.slice(1, 3).map((project, index) => (
          <div className="col-span-6 sm:col-span-12" key={index}>
            <Project
              title={project.title}
              summary={project.description}
              link={project.link}
              type="Project"
              img={project.image}
              // github={project.link} // Assuming link is also the GitHub link
              width={project.width}
              height={project.height}
            />
          </div>
        ))}
        <div className="col-span-12">
          <FeaturedProject
            title={projects[3].title}
            summary={projects[3].description}
            link={projects[3].link}
            type=" Project"
            img={projects[3].image}
            // github={projects[3].link} // Assuming link is also the GitHub link
            width={projects[3].width}
            height={projects[3].height}
          />
        </div>
        {projects.slice(4).map((project, index) => (
          <div className="col-span-6 sm:col-span-12" key={index}>
            <Project
              title={project.title}
              summary={project.description}
              link={project.link}
              type="Project"
              img={project.image}
              // github={project.link} // Assuming link is also the GitHub link
              width={project.width}
              height={project.height}
            />
          </div>
        ))}
      </div>  */}
     
  
    </>
  );
};

export default ProjectCard;
