
import FooterLink from "../components/FooterLink";
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
                <div className="pl-1">
                    <p>SYAHRUL</p>
                </div>
                <div className="mt-8 space-y-1 md:mt-0">
              <FooterLink href="https://www.instagram.com/syahrulll.rmdhn/">
                INSTAGRAM
              </FooterLink>
              {/* Corrected the LinkedIn URL from the Instagram one */}
              <FooterLink href="https://www.linkedin.com/in/m-syahrul-ramadhan00/">
                LINKEDIN
              </FooterLink>
              {/* Add the correct path to your CV file here */}
              <FooterLink href="https://drive.google.com/drive/folders/1A08dNCjMTID0ate5WnueMB8eHtHf5yW0">
                CURRICULUM VITAE
              </FooterLink>
              <FooterLink href="https://github.com/Syahrulramadhan00">
                GITHUB
              </FooterLink>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between my-5 text-xl font-anton text-shuttle">
                <div className="flex flex-row space-x-1">
                    <p>{currentYear} Design by </p>
                <a href="https://dribbble.com/shots/18529579-DIVO-Creative-Developer-Landing-Page" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                  <p>Aryo Pamungkas SLAB Design Studio</p>
                </a>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0"> 
                    <a href="mailto:sahrulramadhan684@gmail.com" className="hover:text-primary transition-colors duration-300">
                    sahrulramadhan684@gmail.com
                    </a>
                    {/* UPDATE: Added WhatsApp link for the phone number */}
                    <a href="https://wa.me/628986367472" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                    +62 898 6367 472
                    </a>
                </div>
            </div>
        </div>  
    </motion.div>
  );
}
