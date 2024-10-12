import Image from "next/image";
import Layout from "./components/Layout";
import profilePic from "../../public/images/profile/1.jpg";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/icons";
// import HireMe from "./components/HireMe";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";


export default function Home() {
  return (
    <>
    
   
  
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full lg:flex-col">
          {/* Image section */}
          <div className="w-1/2 lg:w-full p-5 m-5">
            <Image
              src={profilePic}
              alt="MAY"
              className="w-full h-auto lg:hidden md:inline-block sm:w-full"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
            />
          </div>

          {/* Text section */}
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Bringing Ideas to Life Through Code and Creativity."
              className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />

           
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
  As a skilled frontend developer, I am passionate about creating modern, intuitive web experiences. 
  Explore my latest projects , showcasing my expertise in React.js & Nextjs and web development.
</p>

            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
              >
                Resume
                <LinkArrow className="w-6 ml-1 md:w-4" />
              </Link>

              <Link
                href="mailto:info@mohamed-ali-youssouf.com"
                className="ml-4 text-lg font-medium text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      {/* <HireMe /> */}
      {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image src={lightBulb} alt="Light Bulb" className="w-full h-auto" />
      </div> */}
    </main> </>
  );
}
