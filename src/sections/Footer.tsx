
import { HireButton } from "../components/HireButton";
import { motion } from 'framer-motion'

export const Footer = () => {

const currentYear: number = new Date().getFullYear();
  return (
    <motion.div
      className="border-t-2 border-shuttle pt-12 mx-8 md:mx-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
      id="footer"
    >
        <div className="flex flex-col w-full space-y-12">
            <div className="font-anton text-6xl md:text-9xl">
                <h1>LET'S BUILD AMAZING</h1>
                <h1 className="text-primary">EXPERIENCES</h1>
                    <div className="relative bottom-6 left-2">
                        <img src="/LineV3.svg" alt="" />
                    </div>
            </div>
            <div>
                    <HireButton />
            </div>
            <div className="flex flex-col md:flex-row justify-between my-5 text-3xl font-anton">
                <div>
                    <p>SYAHRUL</p>
                </div>
                <div className="mt-8 md:mt-0">
                    <ol>INSTAGRAM</ol>
                    <ol>LINKEDIN</ol>
                    <ol>CURRICULUM VITAE</ol>
                    <ol>GITHUB</ol>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between my-5 text-xl font-anton text-shuttle">
                <div>
                    <p>{currentYear}</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0"> 
                    <p>sahrulramadhan684@gmail.com</p>
                    <p>+62 898 6367 472</p>
                </div>
            </div>
        </div>  
    </motion.div>
  );
}
