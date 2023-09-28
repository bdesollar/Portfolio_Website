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
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  contact: {
    margin: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Adjust shadow as desired
  },
}));

function Contact() {
  const classes = useStyles();
  const [state, handleSubmit] = useForm("xknljonv");

  return (
    <Element name="contact" className={classes.contact}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
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
            <form className={classes.form} onSubmit={handleSubmit}>
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
