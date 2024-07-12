import React from "react";
import { Element } from "react-scroll";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import resume from "../assets/pdf/Ben_DeSollar_Resume.pdf";
import "../styles/Resume.css";

function Resume() {
  return (
    <Element name="resume" className="section">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} className="paper">
            <Typography className="resumeTitle" variant="h5" gutterBottom>
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
              className="button"
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
