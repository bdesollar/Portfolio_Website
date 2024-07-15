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
    <div className={`contactContainer ${isOpen ? "open" : ""}`}>
      <Paper className="contactPaper">
        <div className="contactHeader">
          <Typography className="contactTitle" variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {state.succeeded ? (
          <Typography className="successMessage" variant="body1">
            Your message was submitted successfully! I'll get back to you as
            soon as possible.
          </Typography>
        ) : (
          <Typography className="infoMessage" variant="body1">
            Feel free to reach out to me with any questions or opportunities!
          </Typography>
        )}
        <form className="contactForm" onSubmit={handleSubmit}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            margin="normal"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <TextField
            required
            id="email"
            name="_replyto"
            label="Email"
            fullWidth
            margin="normal"
          />
          <ValidationError
            prefix="Email"
            field="_replyto"
            errors={state.errors}
          />
          <TextField
            required
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            type="submit"
            variant="contained"
            className="submitButton"
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
