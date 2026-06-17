import ProjectCard from "./ProjectCard";
import omnilenseLogoPic from "../assets/img/omniLenseBgRemoved.png";
import facialRecLogoPic from "../assets/img/OmnilenseAPILogo.png";
import desollarFitnessLogoPic from "../assets/img/DeSollarFitnessLogo.png";
import notablyLogoPic from "../assets/img/notablyLogo.png";
import portfolioLogoPic from "../assets/img/logo.jpg";
import audioGeneLogoPic from "../assets/img/AudioGene_logo.png";
import thesisPaper from "../assets/pdf/Masters_Thesis_Ben_DeSollar_Official.pdf";
import { Container, PageShell, SectionHeading } from "./ui";
import { useInViewReveal } from "../hooks/useInViewReveal";
import "../styles/Projects.css";

const projects = [
  {
    name: "AudioGene Translational Dashboard",
    tagline: "Hybrid ML and visualization for genetic hearing loss diagnosis",
    highlights: [
      "Masters thesis project",
      "Ensemble and semi supervised SVM models",
      "3D audiogram visualization",
      "Full AudioGene website redesign",
    ],
    githubLink:
      "https://research-git.uiowa.edu/morl/audiogene/website/AudioGene.git",
    websiteLink: "https://audiogene.eng.uiowa.edu/",
    thesisLink: thesisPaper,
    logo: audioGeneLogoPic,
    techs: ["Docker", "MYSQL", "Express-js", "React", "Node-js", "JavaScript"],
  },
  {
    name: "Notably",
    tagline: "AI powered note capture and study",
    highlights: [
      "Hackathon winner",
      "GPT and Vision APIs",
      "Handwritten note digitization",
      "Flashcard generation",
    ],
    githubLink: "https://github.com/JoslinSome/Notably",
    logo: notablyLogoPic,
    techs: [
      "React",
      "React-Native",
      "Express-js",
      "Node-js",
      "mongodb",
      "Google-Cloud",
      "chatgpt",
    ],
  },
  {
    name: "DeSollar Fitness",
    tagline: "Personalized workout tracking and progress",
    highlights: [
      "Two week sprint build",
      "12 workout regimen",
      "Dynamic progress tracking",
      "Personalized profiles",
    ],
    githubLink: "https://github.com/bdesollar/DeSollarFitness",
    logo: desollarFitnessLogoPic,
    techs: ["React-Native", "Expo", "Firebase", "JavaScript"],
  },
  {
    name: "Omnilense",
    tagline: "Facial recognition glasses with social connectivity",
    highlights: [
      "Four person engineering team",
      "Custom eyewear hardware",
      "Social platform pairing",
      "$15,300 in grants",
    ],
    githubLink: "https://github.com/Iron-Men-2023/OmniLens/tree/main",
    logo: omnilenseLogoPic,
    techs: ["React-Native", "Expo", "Firebase", "JavaScript"],
  },
  {
    name: "Facial Recognition API",
    tagline: "Python Flask API for facial authentication",
    highlights: [
      "Heroku deployment",
      "Recognition algorithm integration",
      "User authentication pipeline",
    ],
    githubLink: "https://github.com/Iron-Men-2023/Flask-API/tree/main",
    logo: facialRecLogoPic,
    techs: ["Python", "Flask", "Heroku", "JavaScript"],
  },
  {
    name: "Personal Portfolio",
    tagline: "React portfolio with Firebase hosting",
    highlights: [
      "Responsive editorial design",
      "Project showcase",
      "Contact form integration",
    ],
    githubLink: "https://github.com/bdesollar/Portfolio_Website",
    logo: portfolioLogoPic,
    techs: ["React", "Firebase", "JavaScript"],
  },
];

function ProjectItem({ project, index }) {
  const { ref, isInView } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`projects__item ${isInView ? "projects__item--visible" : ""}`}
      style={{ "--delay": `${index * 0.1}s` }}
    >
      <ProjectCard project={project} />
    </div>
  );
}

function Projects() {
  return (
    <PageShell className="projects">
      <Container maxWidth="wide">
        <SectionHeading
          label="Work"
          title="Projects"
          subtitle="AI · mobile · research · full stack"
        />
        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectItem key={project.name} project={project} index={index} />
          ))}
        </div>
      </Container>
    </PageShell>
  );
}

export default Projects;
