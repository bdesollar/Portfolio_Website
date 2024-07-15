import React, { useEffect, useRef } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
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
          size="small"
          color="black"
          href={project.githubLink}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          View on Github
        </Button>
        {project.thesisLink && (
          <Button
            size="small"
            color="black"
            href={project.thesisLink}
            target="_blank"
          >
            Download Thesis
          </Button>
        )}
        {project.websiteLink && (
          <Button
            size="small"
            color="black"
            href={project.websiteLink}
            target="_blank"
          >
            Visit Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
