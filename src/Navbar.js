import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    color: "#fff", // Change the color of the text to white
  },
  appBar: {
    background: "linear-gradient(45deg, #000000 30%, #FFFFFF 90%)", // Add gradient background
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Benjamin R DeSollar
          </Typography>
          <Button color="inherit" component={Link} to="about" smooth={true}>
            About
          </Button>
          <Button color="inherit" component={Link} to="resume" smooth={true}>
            Resume
          </Button>
          <Button color="inherit" component={Link} to="projects" smooth={true}>
            Projects
          </Button>
          <Button color="inherit" component={Link} to="contact" smooth={true}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;