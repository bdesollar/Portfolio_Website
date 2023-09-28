import React from "react";
import { Element } from "react-scroll";
import { Typography, Grid, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profilePicture from "../assets/img/profile.jpeg"; // Adjust the path to your image

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, .5)", // Adjust shadow as desired
  },
  profileImage: {
    margin: theme.spacing(2),
    width: theme.spacing(20), // Adjust size as desired
    height: theme.spacing(20), // Adjust size as desired
    // Put it in the middle of the page
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Element name="about" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Avatar
              src={profilePicture}
              alt="Profile Picture"
              className={classes.profileImage}
            />
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              I’m Benjamin DeSollar, a current graduate student at the
              University of Iowa pursuing a Master's in Electrical and Computer
              Engineering. My work in machine learning has led to breakthroughs
              in audiology gene research with an 80% predictive accuracy rate.
              Beyond research, my experience at AMD and John Deere has honed my
              ability to translate technical insights into compelling business
              value—ideal for roles in technical sales and solutions
              engineering. My leadership skills are proven. As a Teaching
              Assistant, I have helped more than 600 students improve their
              software design skills. Moreover, I have led multidisciplinary
              engineering teams in competitive environments such as SpaceX
              Hyperloop. These experiences have equipped me with the essential
              soft skills required for effective communication with customers. I
              also possess entrepreneurial initiative, demonstrated by founding
              BRDBOX and leading Notably to a first-place finish at a
              university-wide hackathon. My diverse skill set spans technical
              mastery and stakeholder engagement, making me well-suited for a
              range of roles within the tech industry.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Element>
  );
}

export default About;
