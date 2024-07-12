import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Modal,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TechStackIcons from "./TechStackIcons"; // Import a component that renders the tech stack icons
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className="root">
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className="media"
          image={project.logo}
          title={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
          <div className="techStack">
            <TechStackIcons techs={project.techs} />{" "}
            {/* Render the tech stack icons */}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardActions">
        <Button
          size="small"
          color="primary"
          href={project.githubLink}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          View on Github
        </Button>
      </CardActions>
      <Modal className="modal" open={open} onClose={handleClose}>
        <img src={project.image} alt={project.name} className="modalImage" />
      </Modal>
    </Card>
  );
}

export default ProjectCard;
