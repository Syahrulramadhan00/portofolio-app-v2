// src/components/ProjectCard.tsx

import { HireButton } from "./HireButton";
import { ProjectFrame } from "./ProjectFrame";

interface ProjectCardProps {
  direction: 'left' | 'right';
  projectName: string;
  techStack: string[];
  imageUrl: string;
  projectDesc: string;
  linkProject: string;
}

export const ProjectCard = ({ direction, projectName, techStack, imageUrl, projectDesc, linkProject }: ProjectCardProps) => {
  const isLeft = direction === 'left';

  return (
    // The main flex container for a single project card
    <div className={`flex flex-col lg:flex-row items-center w-full space-y-4 lg:space-y-0 lg:gap-x-12 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
      
      {/* Image Container: Takes full width on small screens, half on large */}
      <div className="w-full lg:w-1/2">
        <ProjectFrame direction={direction} imageUrl={imageUrl} width="w-full" height="h-80 md:h-110" />
      </div>

      {/* Text Content Container: Takes full width on small screens, half on large */}
      <div className={`flex flex-col space-y-1 w-full lg:w-1/2 ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
        <p className="font-anton text-4xl">{projectName}</p>
        <div className={`flex flex-wrap gap-x-4 text-sm text-shuttle ${isLeft ? 'justify-start' : 'justify-end'}`}>
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <p className="text-sm text-shuttle mt-4 pb-5">
          {projectDesc}
        </p>
        <HireButton link={linkProject} text="Visit Project" />
      </div>
      
    </div>
  );
};