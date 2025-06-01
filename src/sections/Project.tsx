import { ProjectFrame } from "../components/ProjectFrame";

export const Project = () => {
  return (  
    <div className='relative overflow-hidden my-12'>
      <div className='mx-24 border-t-2 border-shuttle py-12 relative'> 
        <h1 className='font-anton text-shuttle text-5xl'>PROJECTS</h1>
        <div className="absolute -right-58 top-1/2 transform -translate-y-1/2 z-0"> 
          <img src="/LineV3.svg" alt="Decorative Line" className="object-cover w-full" />
        </div>
      </div>

      <div className="mx-24 mt-8 flex flex-row justify-between items-center space-x-12"> 
        <div className="flex flex-col space-y-8">
            <ProjectFrame direction="left" width="w-110" height="h-130"/>
            <p className="font-anton text-3xl">Project 1</p>
        </div>
        <div className="flex flex-col space-y-8">
            <p className="font-anton text-3xl">Project 2</p>
            <ProjectFrame direction="right" width="w-160" height="h-110" />
        </div>
      </div>
      <div className="mx-24 mt-8 flex flex-row justify-between items-center space-x-12"> 
        <div className="flex flex-col space-y-8 items-end">
            <ProjectFrame direction="right" width="w-150" height="h-110"/>
            <p className="font-anton text-3xl">Project 3</p>
        </div>
        <div className="flex flex-col space-y-8">
            <p className="font-anton text-3xl">Project 4</p>
            <ProjectFrame direction="left" width="w-110" height="h-130" />
        </div>
      </div>

    </div>
  );
};