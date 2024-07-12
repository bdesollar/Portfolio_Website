import React from "react";
import { Element } from "react-scroll";
import { Typography, Container } from "@material-ui/core";
import "../styles/Home.css";

function Home() {
  return (
    <Element name="home" className="section">
      <Container maxWidth="xl">
        <Typography variant="h2" className="homeTitle">
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" className="homeSubtitle">
          I’m Benjamin DeSollar, a graduate of the University of Iowa with a
          Master's in Electrical and Computer Engineering, focusing on Software
          Engineering.
        </Typography>
      </Container>
    </Element>
  );
}

export default Home;
