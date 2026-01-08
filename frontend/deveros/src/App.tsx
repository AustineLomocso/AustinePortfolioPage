import Iridescence from './Iridescence'
import Navbar from './components/reactbits/Navbar.tsx'
import Hero from "./components/HeroSection.tsx";
import './App.css';
import Projects from "./components/ProjectsSection.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/ContactSection.tsx";

function App() {
  return (
    <>
        <Navbar/>
        <Iridescence
            color={[0.4, 0, 0]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
        />
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default App
