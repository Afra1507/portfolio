import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <div
        className="position-fixed"
        style={{ right: 16, bottom: 16, zIndex: 1050 }}
      >
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
