import React from "react";
import { Element } from "react-scroll";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  IconButton,
} from "@material-ui/core";
import { useForm, ValidationError } from "@formspree/react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xknljonv");

  return (
    <Element name="contact" className="section">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className="paper">
            <Typography className="contactTitle" variant="h5" gutterBottom>
              Contact Me
            </Typography>
            <p>You can also find me on:</p>
            <IconButton
              color="primary"
              component={Link}
              href="https://github.com/bdesollar"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="primary"
              component={Link}
              href="https://www.linkedin.com/in/ben-desollar"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon />
            </IconButton>
            {state.succeeded ? (
              <p>
                Your message was submitted successfully! I'll get back to you as
                soon as possible.
              </p>
            ) : state.submitting || state.errors ? (
              <p>
                An error occurred while submitting the form. Please try again.
              </p>
            ) : (
              <p>
                Feel free to reach out to me with any questions or
                opportunities!
              </p>
            )}
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <TextField required id="name" name="name" label="Name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
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
                color="primary"
                disabled={state.submitting}
              >
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Element>
  );
}

export default Contact;
