import React from "react";
import { Element } from "react-scroll";
import { Typography, Grid, Avatar, Container } from "@material-ui/core";
import profilePicture from "../assets/img/profile.jpeg"; // Adjust the path to your image
import "../styles/About.css";

function About() {
  return (
    <Element name="about" className="section">
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12}>
            <div className="aboutSection">
              <Avatar
                src={profilePicture}
                alt="Profile Picture"
                className="profileImage"
              />
              <Typography className="aboutMeTitle" variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography className="aboutMe" variant="body1" gutterBottom>
                I’m Benjamin DeSollar, a graduate of the University of Iowa with
                a Master's in Electrical and Computer Engineering, focusing on
                Software Engineering. My mission is to leverage machine learning
                to drive innovation in audiology and beyond. Starting August
                2024, I will be joining Intel as a member of the Sales and
                Marketing Rotational Program (SMRP) in the technical side of
                things.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
}

export default About;
