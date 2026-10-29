import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2 className="section-title">About</h2>
        </header>
        <div className="about-layout">
          <p className="about-copy" data-reveal>
            I'm Afra, a fourth-year Computer Science student at the University
            of Sri Jayewardenepura. I build web applications with React, and
            I'm currently a Dev & DevOps intern at Virtusa in Colombo —
            learning cloud, monitoring, and how to ship software that holds up
            in production.
          </p>
          <dl className="fact-list" data-reveal>
            <div className="fact">
              <dt>Education</dt>
              <dd>
                BSc (Hons) in Computer Science, 4th year
                <span>University of Sri Jayewardenepura · 2023 – Present</span>
              </dd>
            </div>
            <div className="fact">
              <dt>Now</dt>
              <dd>
                Dev & DevOps Intern
                <span>Virtusa PVT Ltd, Colombo · Aug 2026 – Present</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
