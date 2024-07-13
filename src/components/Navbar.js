import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: "#fff" }}>
          My Portfolio
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ color: "#fff" }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          style={{ color: "#fff" }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/resume"
          style={{ color: "#fff" }}
        >
          Resume
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/projects"
          style={{ color: "#fff" }}
        >
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
