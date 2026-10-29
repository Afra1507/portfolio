import { timeline } from "../data/timeline";
import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeading from "../components/SectionHeading";

export default function Timeline() {
  useScrollReveal();

  return (
    <section id="timeline" className="section">
      <div className="container">
        <SectionHeading
          title="Journey"
          lead="Fourth-year computer science studies, a previous frontend internship, and a Dev & DevOps internship at Virtusa."
        />

        <ol className="timeline">
          {timeline.map((item) => (
            <li className="timeline-item" key={item.id} data-reveal>
              <article className="timeline-card">
                <p className="timeline-time">
                  <time>{item.year}</time>
                </p>
                <h3 className="timeline-title">{item.title}</h3>
                {item.location && (
                  <p className="timeline-location">{item.location}</p>
                )}
                <p className="timeline-body">{item.description}</p>

                {(item.results ||
                  item.stream ||
                  item.subjects ||
                  item.skills) && (
                  <details className="tl-details">
                    <summary className="tl-summary">More details</summary>
                    <div className="tl-details__content">
                      {item.results && (
                        <p className="timeline-results">
                          <strong>Results: </strong>
                          {item.results}
                        </p>
                      )}
                      {item.stream && (
                        <p className="timeline-stream">
                          <strong>Stream: </strong>
                          {item.stream}
                        </p>
                      )}
                      {item.subjects?.length > 0 && (
                        <div className="timeline-section">
                          <h4>Core subjects</h4>
                          <ul>
                            {item.subjects.map((subject) => (
                              <li key={subject}>{subject}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.skills?.length > 0 && (
                        <div className="timeline-section">
                          <h4>Skills</h4>
                          <ul>
                            {item.skills.map((skill) => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </details>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
