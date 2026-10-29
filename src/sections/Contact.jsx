import ContactForm from "../components/forms/ContactForm";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="contact" className="section">
      <div className="container contact-layout">
        <div data-reveal>
          <h2 className="section-title">Contact</h2>
          <p className="section-lead">
            Have a project, a question, or a role in mind? Send a note and I’ll
            get back to you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
