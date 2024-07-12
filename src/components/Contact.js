import React from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import { useForm, ValidationError } from "@formspree/react";
import CloseIcon from "@material-ui/icons/Close";
import "../styles/Contact.css";

function Contact({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("xknljonv");

  return (
    <div className={`chatBox ${isOpen ? "open" : ""}`}>
      <Paper className="paper">
        <div className="chatHeader">
          <Typography className="contactTitle" variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {state.succeeded ? (
          <p>
            Your message was submitted successfully! I'll get back to you as
            soon as possible.
          </p>
        ) : state.submitting || state.errors ? (
          <p>An error occurred while submitting the form. Please try again.</p>
        ) : (
          <p>
            Feel free to reach out to me with any questions or opportunities!
          </p>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <TextField required id="name" name="name" label="Name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <TextField required id="email" name="_replyto" label="Email" />
            <ValidationError
              prefix="Email"
              field="_replyto"
              errors={state.errors}
            />
          </div>
          <div>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#000", color: "#fff" }}
            disabled={state.submitting}
          >
            Send
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Contact;
