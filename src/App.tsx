import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Hero } from "./sections/Hero"


function App() {

  return (
    <div className="ml-24 mr-24 mt-8 mb-8">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
