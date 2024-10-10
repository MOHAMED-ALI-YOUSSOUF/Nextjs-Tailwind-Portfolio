"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon } from "./icons";
import { motion } from "framer-motion";
// import useThemeSwitcher from "./hooks/useThemeSwitcher"
const CustomerLink = ({ href, title, className }) => {
  const router = useRouter;
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light bg-dark`}
      >
        &nbsp;
      </span>{" "}
    </Link>
  );
};
const CustomerMobileLink = ({ href, title, className , toggle}) => {
  const router = useRouter();
  const handleclick = () =>{
    toggle()
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group my-2`}  onClick={handleclick}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light bg-light`}
      >
        &nbsp;
      </span>{" "}
    </button>
  );
};
const NavBar = () => {
// const [mode, setMode]=useThemeSwitcher()
const [isOpen, setIsOpen]= useState(false)

const handleclick= ()=>{
  setIsOpen(!isOpen)
}
  return (
    <header className="w-full px-32 sm:px-8 py-6 font-medium flex items-center justify-between text-dark dark:text-light relative ">
      <button className=" flex-col justify-center items-center hidden lg:flex" onClick={handleclick}>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
      <nav>
        <CustomerLink href="/" title="Home" className="mr-4" />
        <CustomerLink href="/about" title="About" className="mr-4" />
        <CustomerLink href="/projects" title="Projects" className="ml-4" />
      </nav>

      <nav className="flex -items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/mohamed-ali-youssouf/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />{" "}
        </motion.a>
        <motion.a
          href="https://github.com/MOHAMED-ALI-YOUSSOUF/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        
{/* 
        <button onClick={() => setMode(mode === "light" ? "dark" :"light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
          {
            mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
          }
        </button> */}
      </nav>
      </div>
     {
      isOpen ?  <motion.div 
      initial={{scale:0, opacity:0, x:"-50%",y:"-50"}}
      animate={{scale:1, opacity:1}}

      className="min-w-[70vw] flex  flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-light  bg-dark/60 rounded-lg backdrop-blur-md py-32">
        <nav className="flex items-center flex-col justify-center">
          <CustomerMobileLink href="/" title="Home" className="" toggle={handleclick}/>
          <CustomerMobileLink href="/about" title="About" className="" toggle={handleclick} />
          <CustomerMobileLink href="/projects" title="Projects" className="" toggle={handleclick}/>
        </nav><nav className="lg:flex -items-center justify-center flex-wrap mt-2">
        <motion.a
          href="https://www.linkedin.com/in/mohamed-ali-youssouf/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3" toggle={handleclick}
        >
          <LinkedInIcon />{" "}
        </motion.a>
        <motion.a
          href="https://github.com/MOHAMED-ALI-YOUSSOUF/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3" toggle={handleclick}
        >
          <GithubIcon toggle={handleclick}/>
        </motion.a>
        
{/* 
        <button onClick={() => setMode(mode === "light" ? "dark" :"light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
          {
            mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
          }
        </button> */}
      </nav>
  
        </motion.div> : null
     }
      
     
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;