import { ReactTyped } from "react-typed";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  useScrollReveal();
  return (
    <header id="hero" className="section hero">
      <div className="container py-5">
        <h1 className="display-5 fw-bold hero-title" data-reveal>
          Hi, I’m <span>Afra Banu</span>
        </h1>

        <p className="lead" data-reveal style={{ fontSize: "1.6rem" }}>
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Cloud Enthusiast",
              "Problem Solver",
              "Web Artist",
            ]}
            typeSpeed={45}
            backSpeed={25}
            backDelay={1400}
            loop
          />
        </p>

        <a href="#projects" className="btn btn-primary btn-lg" data-reveal>
          View My Work
        </a>
      </div>
    </header>
  );
}
