import certImage from "../assets/Udemy certification1.jpeg";
import SectionHeading from "../components/SectionHeading";
import useScrollReveal from "../hooks/useScrollReveal";

const certificates = [
  {
    id: "clf-c02",
    status: "Completed · Oct 2026",
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    detail: "Udemy · Stephane Maarek",
    image: certImage,
    imageAlt: "AWS Certified Cloud Practitioner certificate",
    href: "https://www.udemy.com/certificate/UC-c7a9ea01-23da-49aa-974a-bcbe7b3fdb57/",
    cta: "View credential",
  },
  {
    id: "saa",
    status: "Currently reading",
    title: "AWS Solutions Architect – Associate",
    detail:
      "Building cloud architecture fundamentals while preparing for the certification exam.",
    pending: "In progress",
  },
];

function CertificateCard({ certificate }) {
  const card = (
    <>
      <figure className="cert-card__media">
        {certificate.image ? (
          <img src={certificate.image} alt={certificate.imageAlt} loading="lazy" />
        ) : (
          <span className="cert-card__pending">
            <span className="cert-reading__pulse" aria-hidden="true" />
            {certificate.pending}
          </span>
        )}
      </figure>
      <div className="cert-card__body">
        <p className="cert-card__label">{certificate.status}</p>
        <h3>{certificate.title}</h3>
        <p>{certificate.detail}</p>
        {certificate.href ? (
          <span className="redirect-link cert-card__cta">
            {certificate.cta}
            <span className="redirect-link__arrow" aria-hidden="true">
              →
            </span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (certificate.href) {
    return (
      <a
        className="cert-card"
        href={certificate.href}
        target="_blank"
        rel="noreferrer"
        data-reveal
      >
        {card}
      </a>
    );
  }

  return (
    <article className="cert-card" data-reveal>
      {card}
    </article>
  );
}

export default function Certifications() {
  useScrollReveal();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          title="Certifications"
          lead="Credentials I've earned, and what I'm studying next."
        />
        <div className="cert-layout">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
