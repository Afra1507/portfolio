import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Contact
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
