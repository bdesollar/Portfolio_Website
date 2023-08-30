import React from 'react';
import ProjectCard from './ProjectCard';
import {makeStyles} from "@material-ui/core/styles";
import {Card, Grid, Typography} from "@material-ui/core";
import {Element} from "react-scroll";
import omnilensePic from "../assets/img/omnilensePic.png";
import facialRecPic from "../assets/img/FacialRecPic.png";
import desollarFitnessPic from "../assets/img/DeSollarFitnessPic.jpeg";
import omnilenseLogoPic from "../assets/img/OmniLenseLogo.png";
import facialRecLogoPic from "../assets/img/OmnilenseAPILogo.png";
import desollarFitnessLogoPic from "../assets/img/DeSollarFitnessLogo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        padding: theme.spacing(2),
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Adjust shadow as desired
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

function Projects() {
    const classes = useStyles();

    const projects = [
        { name: 'Omnilense', description: "Omnilense is a cutting-edge social media app built with React Native and Expo that redefines human connectivity. By leveraging custom eyeglasses equipped with facial recognition, Omnilense provides users with a unique and immediate way to connect with people they encounter.", githubLink: 'https://github.com/Iron-Men-2023/OmniLens/tree/main', image: omnilensePic, logo: omnilenseLogoPic, techs: ['React-Native', 'Expo', 'Firebase', 'JavaScript']},
        { name: 'Facial Recognition API', description: 'The Facial Recognition API is a robust and intelligent solution designed to recognize and authenticate users based on their facial features. Built using Flask and hosted on Heroku, this API leverages cutting-edge facial recognition algorithms to accurately identify individuals from a given database.', githubLink: 'https://github.com/Iron-Men-2023/Flask-API/tree/main', image: facialRecPic, logo: facialRecLogoPic, techs: ['Python', 'FLask', 'Heroku', 'JavaScript']},
        { name: 'DeSollar Fitness', description: 'DeSollarFitness is a personalized fitness application crafted with React Native, MySQL, Firebase, and JavaScript. Developed in a two-week sprint, this innovative app features a 12-workout regimen, dynamic progress tracking, calculated maxes, and personalized user profiles. Whether setting goals or analyzing performance, DeSollarFitness brings motivation and guidance to your fitness journey, right at your fingertips.', githubLink: 'https://github.com/bdesollar/DeSollarFitness', image: desollarFitnessPic, logo: desollarFitnessLogoPic, techs: ['React-Native', 'Expo', 'Firebase', 'JavaScript']},
        // { name: 'DeSollar Fitness', description: '', githubLink: 'https://github.com/bdesollar/DeSollarFitness', image: desollarFitnessPic, logo: desollarFitnessLogoPic },
        // { name: 'DeSollar Fitness', description: '', githubLink: 'https://github.com/bdesollar/DeSollarFitness', image: desollarFitnessPic, logo: desollarFitnessLogoPic },
        // { name: 'DeSollar Fitness', description: '', githubLink: 'https://github.com/bdesollar/DeSollarFitness', image: desollarFitnessPic, logo: desollarFitnessLogoPic },
        // More projects...
    ];

    return (
        <Element name="projects" className={classes.root}>
            <Typography variant="h6" gutterBottom>
                Projects
            </Typography>
        <Grid container spacing={3}>
            {projects.map((project, index) => (
                <Grid item xs={4}> {/* Adjust the size based on how many projects you want per row */}
                    <ProjectCard key={index} project={project} />
                </Grid>
            ))}
        </Grid>
        </Element>
    );
}

export default Projects;
