import React from 'react';
import { Element } from 'react-scroll';
import { Typography, Grid, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import profilePicture from '../assets/img/profile.jpeg'; // Adjust the path to your image

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, .5)', // Adjust shadow as desired
    },
    profileImage: {
        margin: theme.spacing(2),
        width: theme.spacing(20),  // Adjust size as desired
        height: theme.spacing(20), // Adjust size as desired
        // Put it in the middle of the page
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
}));

function About() {
    const classes = useStyles();

    return (
        <Element name="about" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <Avatar src={profilePicture} alt="Profile Picture" className={classes.profileImage} />
                        <Typography variant="h6" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Accomplished software engineer seeking a role in the tech industry. With a strong technical background, leadership skills, and effective communication, I aim to drive product development, enhance customer satisfaction, and boost sales efforts. My goal is to significantly impact any role, whether developing innovative software solutions, leading product strategies, or driving technical sales initiatives.                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Element>
    );
}

export default About;
