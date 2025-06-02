import { ProjectFrame } from "../components/ProjectFrame";

const techStack = ["Node.js", "React", "TailwindCSS" ];

export const Project = () => {
  return (  
    <div className='relative overflow-hidden my-12' id="projects">
      <div className='mx-24 border-t-2 border-shuttle py-12 relative'> 
        <h1 className='font-anton text-shuttle text-5xl'>PROJECTS</h1>
        <div className="absolute -right-58 top-1/2 transform -translate-y-1/2 z-0"> 
          <img src="/LineV3.svg" alt="Decorative Line" className="object-cover w-full" />
        </div>
      </div>

      <div className="mx-24 mt-8 flex flex-row justify-between items-center space-x-12"> 
        <div className="flex flex-col space-y-8">
            <ProjectFrame direction="left" width="w-110" height="h-130" />
                <div className="flex flex-col space-y-1">
                    <p className="font-anton text-4xl">Project 1</p>
                    <div className="flex flex-wrap gap-x-4 text-sm text-shuttle">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                    </div>
                </div>
            </div>
        <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-1">
                    <p className="font-anton text-4xl">Project 2</p>
                    <div className="flex flex-wrap gap-x-4 text-sm text-shuttle">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                    </div>
                </div>
            <ProjectFrame direction="right" width="w-160" height="h-110" />
        </div>
      </div>
      <div className="mx-24 mt-8 flex flex-row justify-between items-center space-x-12"> 
        <div className="flex flex-col space-y-8 items-end">
            <ProjectFrame direction="right" width="w-150" height="h-110"/>
                <div className="flex flex-col space-y-1">
                    <p className="font-anton text-4xl">Project 3</p>
                    <div className="flex flex-wrap gap-x-4 text-sm text-shuttle">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                    </div>
                </div>
        </div>
        <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-1">
                    <p className="font-anton text-4xl">Project 4</p>
                    <div className="flex flex-wrap gap-x-4 text-sm text-shuttle">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                    </div>
                </div>
            <ProjectFrame direction="left" width="w-110" height="h-130" />
        </div>
      </div>

    </div>
  );
};