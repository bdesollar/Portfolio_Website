import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <Container className="notFoundContainer">
      <Typography variant="h1" className="notFoundTitle">
        404
      </Typography>
      <Typography variant="h5" className="notFoundSubtitle">
        Page Not Found
      </Typography>
      <Typography variant="body1" className="notFoundDescription">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        className="homeButton"
      >
        Go to Home
      </Button>
    </Container>
  );
}

export default NotFound;
