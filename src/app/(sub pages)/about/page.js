import Image from "next/image";
import React from "react";
import profilePic from "/public/images/profile/2.jpg"; 
import AnimatedText from "@/app/components/AnimatedText";
import Layout from "@/app/components/Layout";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
export const metadata = {
  title: "MAY | about",
  description: "Frontend Developer",
};

const About = () => {
  return (
    <>

    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        {/* Animated Text */}
        <AnimatedText
          text=" Passion Drives Innovation!"
          className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl"
        />

        <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
          {/* Biography Section */}
          <div className="col-span-3 flex flex-col items-start justify-start text-justify text-dark dark:text-light lg:col-span-6">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
              Biography
            </h2>
            <p className="font-medium">
              My name is Mohamed Ali Youssouf, and I am a frontend developer
              specializing in creating modern, intuitive, and user-centered digital
              experiences. With a strong background and a master’s degree in computer
              engineering, I have worked on several projects, including
              salehismael.com, djibstudy.com, and afarhalkdernegi.org. Each project
              has allowed me to develop both technical and creative skills, while
              meeting the specific needs of my clients and users.
            </p>
            <p className="my-4 font-medium">
              I am passionate about web development because it allows me to turn
              ideas into concrete and functional solutions. What I enjoy most is
              solving complex problems with simple and elegant interfaces. To me,
              every line of code should contribute to a better user experience.
            </p>
            <p className="font-medium">
              My goal is to continue innovating in frontend development, with a
              particular focus on performance, responsive design, and accessibility.
              I enjoy working on a variety of projects, whether it’s websites,
              applications, or interactive platforms, always adopting a user-centered
              approach.
            </p>
            <p className="font-medium">
              I am constantly looking for new opportunities to contribute to
              impactful projects and to continue growing in the field of web
              development.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light lg:col-span-3 md:col-span-6">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePic}
              alt="Profile"
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Skills, Experience, Education Components */}
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main></>
  );
};

export default About;
