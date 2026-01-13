import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// --- (Interface and careerData remain the same) ---
interface CareerStep {
  status: 'completed' | 'current';
  role: string;
  company: string;
  duration: string;
  description: string;
  imageUrl: string;
}

const careerData: CareerStep[] = [
    {
    status: 'completed',
    role: 'Student (Associate Degree in Informatics Engineering)',
    company: 'Electronic Engineering Polytechnic Institute of Surabaya (PENS)',
    imageUrl: '/img/pens.svg',
    duration: 'Aug 2022 - Jul 2025',
    description: 'Developed foundational skills in computer science and engineering, with a focus on software development, algorithms, and data structures. Graduated with a GPA of 3.54/4.00.',
    },
    {
    status: 'completed',
    role: 'Frontend Developer (Intern)',
    company: 'Diserasi',
    imageUrl: 'https://www.diserasi.com/assets/logo-2.svg',
    duration: 'Aug 2024 - Jan 2025',
    description: 'Developed diserasi.com, a social platform that matches people based on similar tastes. Initiated and built the first version of the front-end, laying the foundational codebase.',
    },
    {
    status: 'completed',
    role: 'Frontend Developer',
    company: 'Muat Muat',
    imageUrl: 'https://muatmuat.com/blog/wp-content/uploads/2024/03/logo.svg',
    duration: 'Jul 2025 - December 2025',
    description: 'Developing key features for Muatrans, a heavy goods logistics platform. Main contributions involve building analytics and driver management systems for transporter and customer service teams.',
    },
];


interface CareerProps {
  setNavbarBg: (color: string) => void;
}

const Career: React.FC<CareerProps> = ({ setNavbarBg }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setNavbarBg('bg-black');
    }
  }, [inView, setNavbarBg]);

  // 1. SIMPLIFY the style helper. It now only manages the line color.
// This is the new, corrected logic
const getStepStyles = (step: CareerStep, index: number) => {
  const nextItemIsHovered = hoveredIndex !== null && index + 1 === hoveredIndex;

  // The line should be primary if:
  // 1. The NEXT item is being hovered (to color the line before it).
  // OR
  // 2. NOTHING is being hovered AND the current step is 'completed' (the default state).
  const isLineActive = nextItemIsHovered || (hoveredIndex === null && step.status === 'completed');

  return {
    liClass: `text-primary ${isLineActive ? 'after:border-primary' : 'after:border-shuttle'}`,
  };
};
  return (
    <motion.div
      ref={ref}
      className='relative my-12'
      id="career"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
    >
      <div className='mx-8 md:mx-24 border-t-2 border-shuttle py-12 relative'>
        <h1 className='font-anton text-shuttle text-5xl'>CAREER</h1>
      </div>

      <div className="mx-8 md:mx-24 mt-8 flex flex-col space-y-12">
        <ol className="flex items-center w-full">
          {careerData.map((step, index) => {
            const styles = getStepStyles(step, index);
            const isLastItem = index === careerData.length - 1;

            // 2. DEFINE animation logic here, based on state
            const isHovered = index === hoveredIndex;
            const isCurrent = step.status === 'current';
            const hasRing = isHovered || (isCurrent && hoveredIndex === null);

            return (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center cursor-pointer ${!isLastItem ? 'w-full' : ''} ${styles.liClass} ${!isLastItem ? "after:content-[''] after:w-full after:h-1 after:border-b-4  after:inline-block" : ''}`}
              >
                {/* 3. USE the animate prop to control all animations */}
                <motion.span
                  className="flex items-center justify-center w-16 h-16 rounded-full lg:w-20 lg:h-20 shrink-0 bg-white"
                  animate={{
                    scale: isHovered ? 1.15 : 1,
                    boxShadow: hasRing ? '0 0 0 4px #577DE0' : '0 0 0 0px rgba(87, 125, 224, 0)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <img
                    src={step.imageUrl}
                    alt={`${step.company} logo`}
                    className="w-11/12 h-11/12 object-contain p-1"
                  />
                </motion.span>
              </li>
            );
          })}
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center md:text-left">
           {careerData.map((step, index) => (
             <div key={index} className="px-4">
               <h3 className="font-bold text-lg text-light">{step.role}</h3>
               <p className="font-semibold text-primary">{step.company}</p>
               <p className="text-sm text-shuttle mb-2">{step.duration}</p>
               <p className="text-base text-gray-400">{step.description}</p>
             </div>
           ))}
         </div>
      </div>
    </motion.div>
  );
};

export default Career;