import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  Typography,
  Grid,
  Avatar,
  Container,
  IconButton,
  Link,
} from "@material-ui/core";
import { ReactTyped } from "react-typed";
import profilePicture from "../assets/img/profile.jpeg"; // Adjust the path to your image
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ChatIcon from "@material-ui/icons/Chat";
import Contact from "./Contact";
import "../styles/Home.css";

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Element name="home" className="home-section">
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Avatar
              src={profilePicture}
              alt="Profile Picture"
              className="profileImageLarge"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="homeSection">
              <Typography variant="h2" className="homeTitle">
                <ReactTyped
                  strings={["Welcome to My Portfolio."]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  startDelay={50}
                  backDelay={3000}
                />
              </Typography>
              <Typography variant="h5" className="homeSubtitle">
                Benjamin DeSollar
              </Typography>
              <Typography variant="body1" className="description">
                Technical Sales Specialist | Innovator | Engineer
              </Typography>
              <Typography variant="body1" className="funnyQuote">
                "Innovation distinguishes between a leader and a follower." -
                Steve Jobs
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="socialIcons">
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
        <IconButton
          color="primary"
          component={Link}
          href="mailto:ben.desollar01@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <EmailIcon />
        </IconButton>
      </div>
    </Element>
  );
}

export default Home;
