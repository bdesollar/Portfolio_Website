import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Benjamin R DeSollar
        </Typography>
        <Link to="home" smooth={true} duration={100}>
          <Button className="navButton">Home</Button>
        </Link>
        <Link to="about" smooth={true} duration={100}>
          <Button className="navButton">About</Button>
        </Link>
        <Link to="resume" smooth={true} duration={100}>
          <Button className="navButton">Resume</Button>
        </Link>
        <Link to="projects" smooth={true} duration={100}>
          <Button className="navButton">Projects</Button>
        </Link>
        <Link to="contact" smooth={true} duration={100}>
          <Button className="navButton">Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;