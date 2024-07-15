import React from "react";
import { Element } from "react-scroll";
import { Typography, Grid, Container } from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import BookIcon from "@material-ui/icons/Book";
import PeopleIcon from "@material-ui/icons/People";
import CloudIcon from "@material-ui/icons/Cloud";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ChipIcon from "@material-ui/icons/Memory"; // Use MemoryIcon as a placeholder for a chip icon
import profilePicture from "../assets/img/profile.jpeg";
import "../styles/About.css";

function About() {
  return (
    <Element name="about" className="about-section">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="profileImage"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="aboutSection">
              <Typography className="aboutMeTitle" variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography className="aboutMe" variant="body1" gutterBottom>
                My name is Benjamin DeSollar, and I hold a Master's degree in
                Electrical and Computer Engineering from the University of Iowa,
                with a focus in Software Engineering. I am dedicated to
                utilizing my expertise to assist others in achieving their goals
                and generating actionable insights. Beginning in August 2024, I
                will be joining Intel as part of the Sales and Marketing
                Rotational Program (SMRP) in a technical capacity. I am
                committed to continuous learning and growth, and I am excited to
                see where my career takes me! Do not hesitate to reach out to me
                and connect to discuss opportunities or to chat about
                technology, fitness, or anything else!
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="hobbiesSection">
              <Typography className="sectionTitle" variant="h5" gutterBottom>
                Hobbies
              </Typography>
              <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={4} className="hobbyItem">
                  <FitnessCenterIcon className="hobbyIcon" />
                  <Typography variant="body1" className="interestText">
                    Working Out
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className="hobbyItem">
                  <BookIcon className="hobbyIcon" />
                  <Typography variant="body1" className="interestText">
                    Reading (Currently on the Stormlight Archives by Brandon
                    Sanderson)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className="hobbyItem">
                  <PeopleIcon className="hobbyIcon" />
                  <Typography variant="body1" className="interestText">
                    Hanging Out with Friends
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="interestsSection">
              <Typography className="sectionTitle" variant="h5" gutterBottom>
                Interests in Tech
              </Typography>
              <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={4} className="interestItem">
                  <CloudIcon className="interestIcon" />
                  <Typography variant="body1" className="interestText">
                    Cloud Computing
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className="interestItem">
                  <SmartToyIcon className="interestIcon" />
                  <Typography variant="body1" className="interestText">
                    Advancements in AI Technologies
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className="interestItem">
                  <ChipIcon className="interestIcon" />
                  <Typography variant="body1" className="interestText">
                    Advancements in Processors (CPUs, GPUs)
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
}

export default About;
