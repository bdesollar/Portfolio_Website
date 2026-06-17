import { Github } from "lucide-react";
import TechStackIcons from "./TechStackIcons";
import { Button, Card, Typography } from "./ui";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <Card className="project-card card--interactive">
      <div className="project-card__content">
        <Typography as="h3" variant="h3" className="project-card__name">
          {project.name}
        </Typography>
        <Typography as="p" variant="body" className="project-card__tagline">
          {project.tagline}
        </Typography>
        <div className="project-card__highlights" role="list">
          {project.highlights.map((item) => (
            <span key={item} className="project-card__chip" role="listitem">
              {item}
            </span>
          ))}
        </div>
        <div className="project-card__tech">
          <TechStackIcons techs={project.techs} />
        </div>
      </div>

      <div className="project-card__actions">
        <Button
          variant="outline"
          href={project.githubLink}
          className="project-card__btn"
        >
          <Github size={16} aria-hidden="true" />
          View on GitHub
        </Button>
        {project.thesisLink && (
          <Button
            variant="outline"
            href={project.thesisLink}
            className="project-card__btn"
          >
            Download Thesis
          </Button>
        )}
        {project.websiteLink && (
          <Button
            variant="primary"
            href={project.websiteLink}
            className="project-card__btn"
          >
            Visit Website
          </Button>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
