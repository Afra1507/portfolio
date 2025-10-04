import useScrollReveal from "../hooks/useScrollReveal";

// Map each display name to a Devicon icon slug and style
const ICONS = {
  // Languages
  JavaScript: { slug: "javascript", style: "original" },
  Java: { slug: "java", style: "original" },
  HTML: { slug: "html5", style: "original" },
  CSS: { slug: "css3", style: "original" },
  Python: { slug: "python", style: "original" },
  C: { slug: "c", style: "original" },

  // Frameworks
  React: { slug: "react", style: "original" },
  Bootstrap: { slug: "bootstrap", style: "original" },
  "Tailwind CSS": { slug: "tailwindcss", style: "plain" },
  "Spring Boot": { slug: "spring", style: "original" },
  Express: { slug: "express", style: "original" },
  "Node.js": { slug: "nodejs", style: "original" },

  // Tools
  "Git/GitHub": { slug: "git", style: "original" },
  Vite: { slug: "vite", style: "original" },
  Docker: { slug: "docker", style: "original" },
  Jenkins: { slug: "jenkins", style: "original" },
  Kubernetes: { slug: "kubernetes", style: "plain" },
  MySQL: { slug: "mysql", style: "original" },
  Postman: { slug: "postman", style: "original" },
};

// Build a Devicon URL safely
const iconUrl = ({ slug, style }) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${style}.svg`;

const skillGroups = {
  Languages: ["JavaScript", "Java", "HTML", "CSS", "Python", "C"],
  Frameworks: [
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "Spring Boot",
    "Express",
    "Node.js",
  ],
  Tools: [
    "Git/GitHub",
    "Vite",
    "Docker",
    "Jenkins",
    "Kubernetes",
    "MySQL",
    "Postman",
  ],
};

function TechChip({ name }) {
  const meta = ICONS[name];
  return (
    <span className="chip chip--icon" title={name}>
      {meta ? (
        <img
          src={iconUrl(meta)}
          alt={`${name} logo`}
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // If a specific icon fails, hide the image and keep the label.
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
      <span>{name}</span>
    </span>
  );
}

export default function Skills() {
  useScrollReveal();
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Skills
        </h2>
        <div className="row g-4">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div className="col-md-4" key={group} data-reveal>
              <h5 className="text-muted">{group}</h5>
              <div className="chips">
                {items.map((s) => (
                  <TechChip key={s} name={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
