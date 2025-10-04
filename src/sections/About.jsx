import portrait from "../assets/portrait.webp";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-7" data-reveal>
            <h2>About Me</h2>
            <h5 className="mb-3">
              I'm Afra, a Computer Science student who's passionate about
              building web applications. I build fast, accessible interfaces
              with React and modern CSS. I care about clean design, performance,
              and details.
            </h5>
            <ul>
              <li>
                <strong>Education:</strong> BSc (Hons) in Computer Science —
                University of Sri Jayewardenepura (2023 – Present)
              </li>
              <li>
                <strong>Internship:</strong> QTD — Software Engineering Intern
                (Oct 2025 – Present)
              </li>
            </ul>
          </div>
          <div className="col-md-5" data-reveal>
            <img
              src={portrait}
              alt="portrait"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
