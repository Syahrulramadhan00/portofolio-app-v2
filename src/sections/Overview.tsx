
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CareersStats } from "../components/CareersStats"
import { motion } from 'framer-motion'

interface OverviewProps {
  setNavbarBg: (color: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ setNavbarBg }) => {
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
      className="border-t-2 border-shuttle py-12 mx-8 md:mx-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
      id="overview"
    >
        <div className="flex flex-col md:flex-row w-full">
                <h1 className='font-anton text-shuttle text-5xl w-full md:w-1/2'>IN NUMBERS</h1>
            <div className="flex flex-col justify-center space-y-8 w-full md:w-1/2 mt-8 md:mt-0">
                <p>When you're defying expectations, data grounds you. These aren't just figures, but a testament to the unexpected power of combining code-driven precision with a dash of design audacity. each project that have done proving ground for crafting robust frontend architectures while simultaneously embracing intuitive UI/UX principles. And those rework customers? They're living proof of the value in iterative refinement and a keen eye for both functionality and user delight. Turns out, a developer's systematic approach, applied to design problems, can yield some surprisingly elegant solutions. Who knew?</p>
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-8 md:space-y-0 md:space-x-2">
                    <CareersStats years="10" desc="Projects completed" />
                    <CareersStats years="7" desc="Rework customers" />
                    <CareersStats years="2" desc="Years experience" />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

