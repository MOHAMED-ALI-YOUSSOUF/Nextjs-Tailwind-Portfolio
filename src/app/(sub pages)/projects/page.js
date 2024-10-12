
import React from 'react';
import Layout from '@/app/components/Layout';
import AnimatedText from '@/app/components/AnimatedText';
import ProjectCard from '@/app/components/ProjectCard';

export const metadata = {
  title: "MAY | Project",
  description: "Frontend Developer",
};


const Projects = () => {
  return (
    <div className='w-full mb-16 flex flex-col items-center justify-center dark:bg-light'>
      <Layout>
        <AnimatedText text="Creativity Goes Beyond Knowledge." className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl" />
        <ProjectCard/>
      </Layout>
    </div>
  );
};

export default Projects;
