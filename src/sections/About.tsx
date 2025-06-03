
import { PointyFrame } from '../components/PointyFrame'
import { FrameCard } from '../icons/FrameCard'
import { NorthStar } from '../icons/NorthStar'

export const About = () => {
  return (
    <div className='border-t-2 border-shuttle py-12 mx-24' id='about'>
            <h1 className='font-anton text-shuttle text-5xl'>ABOUT</h1>
            <div className='flex flex-row justify-between items-center mt-12'>
                <div className='flex flex-col space-y-12'>
                    <div className='font-anton text-8xl'>
                        <h1> WHO COULD BE MORE</h1>
                        <h1> POWERFULL THAN </h1>
                        <h1> A DEVELOPER WHO</h1>
                        <h1> IS DEEPLY PASSIONATE.</h1>
                    </div>
                    <div className='w-7/12'>
                        <p>
                            I am a dedicated developer, specializing in frontend development, who loves coding and problem-solving. I find immense joy in creating software, more than in anything else. So, why did I suddenly find the audacity to do the unthinkable—learn design? I mean, come on, we all know developers can't learn design. Or can they? And should they? Perhaps adding frontend skills to my repertoire isn't such a crazy idea after all.
                        </p>
                    </div>
                </div>
                    <div className='flex flex-col justify-center items-center space-y-24'>
                        <div className='flex flex-row space-x-12'>
                            <PointyFrame direction='left'/>
                            <FrameCard />
                        </div>
                        <div className='flex flex-row justify-center items-center    space-x-12'>
                            <NorthStar />
                            <PointyFrame direction='right'/>
                        </div>
                    </div>
            </div>
    </div>
  )
}
