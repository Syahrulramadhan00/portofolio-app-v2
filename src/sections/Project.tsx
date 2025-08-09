// src/pages/Project.tsx (or wherever this component lives)
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from "../components/ProjectCard";
import { motion } from 'framer-motion';

const projects = [
  {
    direction: "left" as const,
    projectName: "Project 1",
    techStack: ["Node.js", "React", "TailwindCSS"],
    imageUrl: "https://placehold.co/600x400",
    projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    direction: "right" as const,
    projectName: "Project 2",
    techStack: ["Node.js", "React", "TailwindCSS"],
    imageUrl: "https://placehold.co/600x400",
    projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    direction: "left" as const,
    projectName: "Project 3",
    techStack: ["Node.js", "React", "TailwindCSS"],
    imageUrl: "https://placehold.co/600x400",
    projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    direction: "right" as const,
    projectName: "Project 4",
    techStack: ["Node.js", "React", "TailwindCSS"],
    imageUrl: "https://placehold.co/600x400",
    projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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