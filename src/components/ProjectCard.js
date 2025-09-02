import React, { useEffect, useRef } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TechStackIcons from "./TechStackIcons"; // Import a component that renders the tech stack icons
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <Card className="root" ref={cardRef}>
      <Grid container spacing={2} alignItems="center" className="cardContent">
        <Grid item xs={12} md={4} container justify="center">
          <img className="media" src={project.logo} alt={project.name} />
        </Grid>
        <Grid item xs={12} md={8} className="cardTextContent">
          <CardContent>
            <Typography
              className="projectName"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {project.name}
            </Typography>
            <Typography
              className="projectDescription"
              variant="body2"
              component="p"
            >
              <span className="descriptionTitle">Description:</span>{" "}
              {project.description.overallDescription}
            </Typography>
            <Typography
              className="projectAchievements"
              variant="body2"
              component="p"
            >
              <span className="descriptionTitle">Achievements:</span>
              <ul>
                {project.description.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </Typography>
            <Typography
              className="projectKeyFeatures"
              variant="body2"
              component="p"
            >
              <span className="descriptionTitle">Key Features:</span>
              <ul>
                {project.description.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Typography>
            <Typography
              className="projectUseCase"
              variant="body2"
              component="p"
            >
              <span className="descriptionTitle">Use Case:</span>{" "}
              {project.description.useCase}
            </Typography>
            <div className="techStack">
              <TechStackIcons techs={project.techs} />
              {/* Render the tech stack icons */}
            </div>
          </CardContent>
        </Grid>
      </Grid>
      <CardActions className="cardActions">
        <Button
          size="medium"
          href={project.githubLink}
          target="_blank"
          startIcon={<GitHubIcon />}
          className="projectButton"
          variant="outlined"
        >
          View on Github
        </Button>
        {project.thesisLink && (
          <Button
            size="medium"
            href={project.thesisLink}
            target="_blank"
            className="projectButton"
            variant="outlined"
          >
            Download Thesis
          </Button>
        )}
        {project.websiteLink && (
          <Button
            size="medium"
            href={project.websiteLink}
            target="_blank"
            className="projectButton"
            variant="contained"
          >
            Visit Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
