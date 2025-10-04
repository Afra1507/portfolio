import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

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
      setStatus({ sending: false, ok: true, msg: "✅ Message sent! I’ll get back to you soon." });
      formRef.current.reset();
    } catch {
      setStatus({
        sending: false,
        ok: false,
        msg: "❌ Failed to send. Please try again or email me directly.",
      });
    }
  };

  return (
    <div className="contact-card">
      <form ref={formRef} onSubmit={sendEmail} className="row g-3" data-reveal>
        {/* Hidden honeypot field */}
        <input type="text" name="bot_field" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {/* Name field */}
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              name="from_name"
              id="name"
              className="form-control"
              placeholder=" "
              autoComplete="name"
              required
            />
            <label htmlFor="name">
              <PersonIcon style={{ verticalAlign: "-4px", marginRight: 6 }} />
              Your name
            </label>
          </div>
        </div>

        {/* Email field */}
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              name="from_email"
              id="email"
              className="form-control"
              placeholder=" "
              autoComplete="email"
              required
            />
            <label htmlFor="email">
              <EmailIcon style={{ verticalAlign: "-4px", marginRight: 6 }} />
              Email address
            </label>
          </div>
        </div>

        {/* Message field */}
        <div className="col-12">
          <div className="form-floating">
            <textarea
              name="message"
              id="message"
              className="form-control"
              placeholder=" "
              style={{ height: "160px" }}
              required
            />
            <label htmlFor="message">
              <ChatBubbleOutlineIcon style={{ verticalAlign: "-4px", marginRight: 6 }} />
              Your message
            </label>
          </div>
        </div>

        {/* Status messages */}
        <div className="col-12" aria-live="polite">
          {status.ok === true && (
            <div className="alert alert-success py-2 my-1">{status.msg}</div>
          )}
          {status.ok === false && (
            <div className="alert alert-danger py-2 my-1">{status.msg}</div>
          )}
        </div>

        {/* Buttons */}
        <div className="col-12 d-flex gap-2 contact-actions">
          <button className="btn btn-primary" type="submit" disabled={status.sending}>
            {status.sending ? "Sending..." : "Send"}
          </button>
          <button
            className="btn btn-outline"
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
