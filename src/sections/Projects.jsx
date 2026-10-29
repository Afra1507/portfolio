import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  useScrollReveal();
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          title="Projects"
          lead="A full-stack learning platform and a desktop system for restaurant bookings."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
