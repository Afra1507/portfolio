import { useRef, useState } from "react";
import emailjs from "emailjs-com";

// Your EmailJS credentials
const SERVICE_ID = "service_portfolio";
const TEMPLATE_ID = "template_contact";
const PUBLIC_KEY  = "zg8_qWIr4pwNYGDnA";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const sendEmail = async (e) => {
    e.preventDefault();

    // Honeypot (spam protection)
    const honey = formRef.current?.elements?.bot_field?.value;
    if (honey) return;

    try {
      setStatus({ sending: true, ok: null, msg: "" });
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ sending: false, ok: true, msg: "Message sent. I’ll get back to you soon." });
      formRef.current.reset();
    } catch {
      setStatus({
        sending: false,
        ok: false,
        msg: "Couldn’t send that. Please try again.",
      });
    }
  };

  return (
    <div className="contact-card">
      <form ref={formRef} onSubmit={sendEmail} className="contact-form" data-reveal>
        <input
          type="text"
          name="bot_field"
          className="honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="contact-form__row">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="from_name"
              id="name"
              autoComplete="name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="from_email"
              id="email"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required />
        </div>

        <div aria-live="polite">
          {status.ok === true && <p className="form-note">{status.msg}</p>}
          {status.ok === false && <p className="form-note is-error">{status.msg}</p>}
        </div>

        <div className="contact-actions">
          <button className="btn btn-primary" type="submit" disabled={status.sending}>
            {status.sending ? "Sending..." : "Send message"}
          </button>
          <button
            className="btn btn-ghost"
            type="reset"
            disabled={status.sending}
            onClick={() => setStatus({ sending: false, ok: null, msg: "" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
