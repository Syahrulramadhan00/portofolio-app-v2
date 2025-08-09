
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { HireButton } from "../components/HireButton"
import { PhotoFrame } from "../components/PhotoFrame"
import { motion } from 'framer-motion'

interface HeroProps {
  setNavbarBg: (color: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setNavbarBg }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      setNavbarBg('bg-black');
    }
  }, [inView, setNavbarBg]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row justify-between items-center mx-8 md:mx-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
      id="hero"
    >
      <div className="my-8 md:my-16 text-center md:text-left">
        <div className="font-anton text-6xl md:text-9xl">
        <h1>SYAHRUL RAMADHAN</h1>
        <h1 className="text-primary">YOUR DEVELOPER</h1>
        <h1 className="text-primary">OF THE YEAR.</h1>
        <div className="relative bottom-6 left-2">
            <img src="/LineV3.svg" alt="" />
        </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center pt-10 space-y-8 md:space-y-0 md:space-x-20">
            <HireButton />
            <p>Hi, I am Syahrul Ramadhan your most wanted<br/> creative deveoper, welcome to my <br /> personal portofolio</p>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <PhotoFrame />
      </div>
    </motion.div>
  )
}
