import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Benjamin DeSollar
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          className="navButton"
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          className="navButton"
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/resume"
          className="navButton"
        >
          Resume
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/projects"
          className="navButton"
        >
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
