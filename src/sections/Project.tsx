// src/pages/Project.tsx (or wherever this component lives)
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from "../components/ProjectCard";
import { motion } from 'framer-motion';


const projects = [
{
direction: "left" as const,
projectName: "Muatrans",
techStack: ["Zustand", "Next Js", "TailwindCSS"],
imageUrl: "/img/muatrans.png",
projectDesc: "For Muatrans, a heavy goods logistics platform, I was responsible for developing key features for their internal dashboard. My main contributions involved building the analytics and driver management systems used by both the transporter and customer service teams.",
linkProject: "https://muatmuat.com"
},
 {
direction: "right" as const,
 projectName: "Cahaya Teknik",
 techStack: ["Go", "Nuxt Js", "TailwindCSS"],
 imageUrl: "/img/cahaya-teknik.png",
 projectDesc: "As a full-stack developer for my final project, I built a comprehensive management system for Cahaya Teknik, a building materials supplier. The system was designed to streamline their core business operations, and I was responsible for both the back-end and front-end development.",
 linkProject:"https://github.com/Syahrulramadhan00/ct-frontend-web"
 },
{
 direction: "left" as const,
projectName: "Diserasi",
techStack: ["Vite", "React", "TailwindCSS"],
imageUrl: "/img/diserasi.png",
projectDesc: "Diserasi is a social platform designed to match people based on similar tastes. As a key contributor, I initiated and developed the first version of the front-end, laying the foundational codebase for the user-facing application.",
linkProject: "https://www.diserasi.com/"
},
{
 direction: "right" as const,
projectName: "Gisact",
techStack: ["Next Js", "Mapbox", "TailwindCSS"],
imageUrl: "/img/gisact.png",
projectDesc: "This project was a technical selection test for Gisact, a geospatial data provider. I developed a proof-of-concept application to consume and visualize their geospatial data, successfully demonstrating proficiency in mapping and tracking functionalities using their API.",
linkProject: "https://github.com/Syahrulramadhan00/gisact-geospasial-app"
},
];

interface ProjectProps {
  setNavbarBg: (color: string) => void;
}

export const Project: React.FC<ProjectProps> = ({ setNavbarBg }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Lower threshold since the section is long
  });

  useEffect(() => {
    if (inView) {
      setNavbarBg('bg-black');
    }
  }, [inView, setNavbarBg]);

  return (
    <motion.div
      ref={ref}
      className='relative my-12'
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
    >
      <div className='mx-8 md:mx-24 border-t-2 border-shuttle py-12 relative'>
        <h1 className='font-anton text-shuttle text-5xl'>PROJECTS</h1>
      </div>

      <div className="mx-8 md:mx-24 mt-8 flex flex-col space-y-24"> 
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};