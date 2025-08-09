
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PointyFrame } from '../components/PointyFrame'
import { FrameCard } from '../icons/FrameCard'
import { NorthStar } from '../icons/NorthStar'
import { motion } from 'framer-motion'

interface AboutProps {
  setNavbarBg: (color: string) => void;
}

export const About: React.FC<AboutProps> = ({ setNavbarBg }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setNavbarBg('bg-black'); 
    }
  }, [inView, setNavbarBg]);

  return (
    <motion.div
      ref={ref}
      className='border-t-2 border-shuttle py-12 mx-8 md:mx-24'
      id='about'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
    >
            <h1 className='font-anton text-shuttle text-5xl'>ABOUT</h1>
            <div className='flex flex-col md:flex-row justify-between items-center mt-12'>
                <div className='flex flex-col space-y-12 text-center md:text-left'>
                    <div className='font-anton text-5xl md:text-8xl'>
                        <h1> WHO COULD BE MORE</h1>
                        <h1> POWERFULL THAN </h1>
                        <h1> A DEVELOPER WHO</h1>
                        <h1> IS DEEPLY PASSIONATE.</h1>
                    </div>
                    <div className='w-full md:w-7/12'>
                        <p>
                            I am a dedicated developer, specializing in frontend development, who loves coding and problem-solving. I find immense joy in creating software, more than in anything else. So, why did I suddenly find the audacity to do the unthinkable—learn design? I mean, come on, we all know developers can't learn design. Or can they? And should they? Perhaps adding frontend skills to my repertoire isn't such a crazy idea after all.
                        </p>
                    </div>
                </div>
                    <div className='flex flex-col justify-center items-center space-y-12 md:space-y-24 mt-12 md:mt-0'>
                        <div className='flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12'>
                            <PointyFrame direction='left'/>
                            <FrameCard />
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12'>
                            <NorthStar />
                            <PointyFrame direction='right'/>
                        </div>
                    </div>
            </div>
    </motion.div>
  )
}
