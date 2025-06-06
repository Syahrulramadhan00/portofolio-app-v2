// App.tsx
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { Overview } from "./sections/Overview"
import { Project } from "./sections/Project"
import { Services } from "./sections/Services"


function App() {
  return (
    <div className="mt-8 mb-8">
      <Navbar />
      <div className="space-y-24">
        <Hero/> 
        <About  />
        <Project /> 
        <Services />
        <Overview />
      </div>
    </div>
  )
}

export default App