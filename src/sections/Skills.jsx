import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeading from "../components/SectionHeading";

const ICONS = {
  JavaScript: { slug: "javascript", style: "original" },
  Java: { slug: "java", style: "original" },
  HTML: { slug: "html5", style: "original" },
  CSS: { slug: "css3", style: "original" },
  Python: { slug: "python", style: "original" },
  C: { slug: "c", style: "original" },
  React: { slug: "react", style: "original" },
  Bootstrap: { slug: "bootstrap", style: "original" },
  "Tailwind CSS": { slug: "tailwindcss", style: "original" },
  "Spring Boot": { slug: "spring", style: "original" },
  Express: { slug: "express", style: "original" },
  "Node.js": { slug: "nodejs", style: "original" },
  "Git/GitHub": { slug: "git", style: "original" },
  Vite: { slug: "vite", style: "original" },
  Docker: { slug: "docker", style: "original" },
  Jenkins: { slug: "jenkins", style: "original" },
  Kubernetes: { slug: "kubernetes", style: "plain" },
  MySQL: { slug: "mysql", style: "original" },
  Postman: { slug: "postman", style: "original" },
  AWS: { src: "https://api.iconify.design/skill-icons/aws-light.svg" },
  Splunk: {
    src: "https://api.iconify.design/simple-icons/splunk.svg?color=%23000000",
    mono: true,
  },
  Cloudflare: {
    src: "https://api.iconify.design/simple-icons/cloudflare.svg?color=%23F38020",
  },
  Dynatrace: { src: "https://api.iconify.design/simple-icons/dynatrace.svg?color=%231496FF" },
  Zabbix: { src: "https://api.iconify.design/selfhst/zabbix.svg" },
};

const iconUrl = (meta) =>
  meta.src ||
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${meta.slug}/${meta.slug}-${meta.style}.svg`;

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
  DevOps: ["AWS", "Splunk", "Cloudflare", "Dynatrace", "Zabbix"],
};

function TechTile({ name }) {
  const meta = ICONS[name];
  const isMono = meta?.slug === "express" || meta?.mono;
  return (
    <span className={`skill-tile${isMono ? " skill-tile--mono" : ""}`}>
      {meta ? (
        <img
          src={iconUrl(meta)}
          alt=""
          width={22}
          height={22}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(event) => {
            event.currentTarget.style.display = "none";
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
        <SectionHeading
          title="Skills"
          lead="Languages, frameworks, and the tools I use to build, plus the monitoring and cloud tools I'm learning at Virtusa."
        />
        <div className="skill-board" data-reveal>
          {Object.entries(skillGroups).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="skill-list">
                {items.map((name) => (
                  <TechTile key={name} name={name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
