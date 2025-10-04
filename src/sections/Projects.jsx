import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  useScrollReveal();
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} data-reveal>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
