// App.tsx
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { Project } from "./sections/Project"


function App() {
  return (
    // REMOVE ml-24 mr-24 from this main div.
    // This div will now span the full available width of the browser window.
    <div className="mt-8 mb-8">
      <Navbar />
      {/* space-y-24 is fine for vertical spacing */}
      <div className="space-y-24">
        {/* Now, each section below will decide its own horizontal margins for its content */}
        {/* You'll need to add mx-24 or px-24 to sections like Hero and About if they need it */}
        <Hero/> {/* Or mx-24 depending on desired spacing behavior */}
        <About  /> {/* Or mx-24 */}
        <Project /> {/* Project component will handle its own internal margins */}
      </div>
    </div>
  )
}

export default App