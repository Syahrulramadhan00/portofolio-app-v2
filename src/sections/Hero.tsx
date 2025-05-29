import { HireButton } from "../components/HireButton"
import { PhotoFrame } from "../components/PhotoFrame"

export const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center"> 
      <div>
        <div className="font-anton text-9xl">
        <h1>SYAHRUL RAMADHAN</h1>
        <h1 className="text-primary">YOUR DEVELOPER</h1>
        <h1 className="text-primary">OF THE YEAR.</h1>
        <div className="relative bottom-6 left-2">
            <img src="/LineV3.svg" alt="" />
        </div>
        </div>
        <div className="flex flex-row justify-start items-center pt-10 space-x-20">
            <HireButton />
            <p>Hi, I am Syahrul Ramadhan your most wanted<br/> creative deveoper, welcome to my <br /> personal portofilio</p>
        </div>
      </div>
      <div className="mt-6">
        <PhotoFrame />
      </div>
    </div>
  )
}