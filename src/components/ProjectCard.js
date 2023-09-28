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
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TechStackIcons from "./TechStackIcons"; // Import a component that renders the tech stack icons

const useStyles = makeStyles({
  root: {
    height: 600,
    width: 500,
    position: "relative",
  },
  media: {
    height: 300,
    width: "100%",
  },
  cardActions: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    maxHeight: "90%",
    maxWidth: "90%",
  },
  techStack: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function ProjectCard({ project }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.media}
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
          <div className={classes.techStack}>
            <TechStackIcons techs={project.techs} />{" "}
            {/* Render the tech stack icons */}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          href={project.githubLink}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          View on Github
        </Button>
        {/*<Button size="small" color="primary" href={project.demoLink} target="_blank" startIcon={<YouTubeIcon />}>*/}
        {/*    Watch Demo*/}
        {/*</Button>*/}
      </CardActions>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <img
          src={project.image}
          alt={project.name}
          className={classes.modalImage}
        />
      </Modal>
    </Card>
  );
}

export default ProjectCard;
