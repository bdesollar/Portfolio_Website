import React from "react";
import { Typography, Container } from "@material-ui/core";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <Typography variant="body1" align="center">
          © 2024 Benjamin DeSollar. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
