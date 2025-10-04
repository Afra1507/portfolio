import { timeline } from "../data/timeline";
import useScrollReveal from "../hooks/useScrollReveal";

// MUI icons (install @mui/icons-material if you haven't)
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import InsightsIcon from "@mui/icons-material/Insights";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Timeline() {
  useScrollReveal();

  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2 className="section-title" data-reveal>
          My Journey
        </h2>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.id} data-reveal>
              <div className="timeline-dot" aria-hidden="true" />

              <header>
                <div className="timeline-time">
                  <CalendarMonthIcon
                    fontSize="small"
                    style={{ verticalAlign: "-2px", marginRight: 6 }}
                    aria-hidden="true"
                  />
                  <time>{item.year}</time>
                </div>

                <h3 className="timeline-title">{item.title}</h3>

                {item.location && (
                  <p className="timeline-location">
                    <PlaceIcon
                      fontSize="small"
                      style={{ verticalAlign: "-3px", marginRight: 6 }}
                      aria-hidden="true"
                    />
                    {item.location}
                  </p>
                )}
              </header>

              <p className="timeline-body">{item.description}</p>

              {/* EXPANDABLE DETAILS: only render if we have extra fields */}
              {(item.results ||
                item.stream ||
                item.subjects ||
                item.skills) && (
                <details className="tl-details">
                  <summary className="tl-summary">
                    <ExpandMoreIcon className="tl-summary__chev" />
                    More details
                  </summary>

                  <div className="tl-details__content">
                    {item.results && (
                      <p className="timeline-results">
                        <ChecklistIcon
                          fontSize="small"
                          style={{ verticalAlign: "-3px", marginRight: 6 }}
                          aria-hidden="true"
                        />
                        <strong>Results:</strong> {item.results}
                      </p>
                    )}

                    {item.stream && (
                      <p className="timeline-stream">
                        <SchoolIcon
                          fontSize="small"
                          style={{ verticalAlign: "-3px", marginRight: 6 }}
                          aria-hidden="true"
                        />
                        <strong>Stream:</strong> {item.stream}
                      </p>
                    )}

                    {item.subjects && item.subjects.length > 0 && (
                      <div className="timeline-section">
                        <h4>
                          <ScienceIcon
                            fontSize="small"
                            style={{
                              verticalAlign: "-3px",
                              marginRight: 6,
                            }}
                            aria-hidden="true"
                          />
                          Core Subjects
                        </h4>
                        <ul>
                          {item.subjects.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.skills && item.skills.length > 0 && (
                      <div className="timeline-section">
                        <h4>
                          <InsightsIcon
                            fontSize="small"
                            style={{
                              verticalAlign: "-3px",
                              marginRight: 6,
                            }}
                            aria-hidden="true"
                          />
                          Skills & Knowledge Areas
                        </h4>
                        <ul>
                          {item.skills.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
