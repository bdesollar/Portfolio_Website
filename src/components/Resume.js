import React from "react";
import { Element } from "react-scroll";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import resume from "../assets/pdf/Ben_DeSollar_Resume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Adjust shadow as desired
  },
  button: {
    margin: theme.spacing(1),
    display: "block", // Center the button
    marginLeft: "33%",
    marginRight: "33%",
  },
  resumeTitle: {
    textAlign: "center",
    justifyContent: "center",
    // Make title bold
    fontWeight: "bold",
  },
}));

function Resume() {
  const classes = useStyles();

  return (
    <Element name="resume" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              className={classes.resumeTitle}
              variant="h5"
              gutterBottom
            >
              Resume
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please click the button below to download my resume.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={resume}
              target="_blank"
              className={classes.button}
            >
              Download Resume
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Element>
  );
}

export default Resume;
