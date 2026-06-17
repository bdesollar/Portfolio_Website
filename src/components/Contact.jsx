import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X } from "lucide-react";
import { Button, Typography } from "./ui";
import "../styles/Contact.css";

function Contact({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("xknljonv");
  const panelRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 300);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [state.succeeded, onClose]);

  return (
    <>
      <div
        className={`contact-backdrop ${isOpen ? "contact-backdrop--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className={`contact-drawer ${isOpen ? "contact-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        aria-hidden={!isOpen}
      >
        <div className="contact-drawer__panel">
          <header className="contact-drawer__header">
            <Typography as="h2" variant="h3" id="contact-title">
              Contact Me
            </Typography>
            <button
              type="button"
              className="contact-drawer__close"
              onClick={onClose}
              aria-label="Close contact form"
            >
              <X size={20} />
            </button>
          </header>

          {state.succeeded ? (
            <div className="contact-drawer__success">
              <Typography as="p" variant="body">
                Message sent successfully
              </Typography>
            </div>
          ) : (
            <>
              <Typography as="p" variant="body" className="contact-drawer__intro">
                Questions · opportunities · collaboration
              </Typography>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    ref={firstFieldRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="_replyto"
                    type="email"
                    required
                    autoComplete="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="_replyto"
                    errors={state.errors}
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="btn--shimmer contact-form__submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
