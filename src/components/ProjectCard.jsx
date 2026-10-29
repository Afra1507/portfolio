export default function ProjectCard({ project }) {
  const description = project.description?.replace(
    /^\p{Extended_Pictographic}\uFE0F?\s*/u,
    ""
  );

  return (
    <article className="project-card">
      {project.image && (
        <div className="project-card__media">
          <img src={project.image} alt="" loading="lazy" />
          {project.github && (
            <a
              className="project-card__peek"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} repository`}
            >
              ↗
            </a>
          )}
        </div>
      )}

      <div className="project-card__body">
        <h3>{project.title}</h3>
        {description && <p className="line-clamp-3">{description}</p>}

        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <div className="chips">
            {project.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.github && (
          <a
            className="redirect-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View repository
            <span className="redirect-link__arrow" aria-hidden="true">
              →
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
