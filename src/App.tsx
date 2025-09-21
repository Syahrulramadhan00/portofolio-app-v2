// App.tsx
import { useState } from "react";
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Footer } from "./sections/Footer"
import { Hero } from "./sections/Hero"
import { Overview } from "./sections/Overview"
import { Project } from "./sections/Project"
import { Services } from "./sections/Services"
import Career from "./sections/Career";


function App() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  return (
    <div className="mt-8 mb-8">
      <Navbar bgColor={navbarBg} />
      <div className="space-y-24">
        <Hero setNavbarBg={setNavbarBg} /> 
        <About setNavbarBg={setNavbarBg}  />
        <Career setNavbarBg={setNavbarBg}/> 
        <Project setNavbarBg={setNavbarBg} /> 
        <Services setNavbarBg={setNavbarBg} />
        <Overview setNavbarBg={setNavbarBg} />
        <Footer />
      </div>
    </div>
  )
}

export default App
