import { ReactTyped } from "react-typed";
import portrait from "../assets/portrait.webp";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  useScrollReveal();

  return (
    <header id="hero" className="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-orb hero-orb--a" />
        <span className="hero-orb hero-orb--b" />
      </div>
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker" data-reveal>
            4th year Computer Science · Colombo
          </p>
          <h1 className="hero-title" data-reveal>
            Afra <span className="hero-title__accent">Banu</span>
          </h1>
          <div className="hero-meta" data-reveal>
            <p className="hero-role">
              <ReactTyped
                strings={[
                  "Dev & DevOps Intern",
                  "Full Stack Developer",
                  "Cloud Enthusiast",
                  "Problem Solver",
                ]}
                typeSpeed={45}
                backSpeed={25}
                backDelay={1400}
                loop
              />
            </p>
          </div>
          <p className="hero-blurb" data-reveal>
            I design and build web applications that stay fast, clear, and
            careful with the details.
          </p>
          <div className="hero-actions" data-reveal>
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost btn-arrow">
              Get in touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <figure className="hero-portrait-wrap" data-reveal>
          <img
            className="hero-portrait"
            src={portrait}
            alt="Portrait of Afra Banu"
          />
        </figure>
      </div>
    </header>
  );
}
