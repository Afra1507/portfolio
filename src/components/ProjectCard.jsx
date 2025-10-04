// src/components/ProjectCard.jsx
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function ProjectCard({ project }) {



  return (
    <>
      <div className="project project-card glass h-100">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="card-img"
            loading="lazy"
          />
        )}

        <div className="p-3">
          <h5 className="mb-1">{project.title}</h5>
          {project.description && (
            <p className="text-muted mb-2 line-clamp-3">
              {project.description}
            </p>
          )}

          {Array.isArray(project.tech) && project.tech.length > 0 && (
            <div className="chips">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="project-overlay">
          {project.github && (
            <a
              className="btn btn-outline"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
            >
              <GitHubIcon /> GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );
}
