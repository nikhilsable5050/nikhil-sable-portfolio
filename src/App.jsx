import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    // ✨ The addition of min-h-screen ensures the gradient fills the screen.
    <div className="relative gradient text-white min-h-screen">
      <CustomCursor />

      <ParticlesBackground />

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}