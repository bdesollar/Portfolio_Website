import React from 'react';
import ProjectCard from './ProjectCard';
import {makeStyles} from "@material-ui/core/styles";
import {Card, Grid} from "@material-ui/core";
import {Element} from "react-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Adjust shadow as desired
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

function Projects() {
    const classes = useStyles();

    const projects = [
        { name: 'Project 1', description: 'Description 1', githubLink: 'Link 1', image: 'Image URL 1' },
        { name: 'Project 2', description: 'Description 2', githubLink: 'Link 2', image: 'Image URL 2' },
        { name: 'Project 3', description: 'Description 3', githubLink: 'Link 3', image: 'Image URL 3' },
        // More projects...
    ];

    return (
        <Element name="projects" className={classes.root}>
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
