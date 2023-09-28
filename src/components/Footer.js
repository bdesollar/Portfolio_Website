import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.root}>
      <Toolbar>
        <Typography variant="body1" color="inherit" className={classes.grow}>
          © 2023 Benjamin R DeSollar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
