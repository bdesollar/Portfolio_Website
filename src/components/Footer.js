import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <AppBar position="static" color="primary" className="appBarFooter">
        <Toolbar>
          <Typography variant="body1" color="inherit" className="grow">
            © 2024 Benjamin R DeSollar
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
