import ProjectCard from "./ProjectCard";
import thesisPaper from "../assets/pdf/Masters_Thesis_Ben_DeSollar_Official.pdf";
import { Container, PageShell, SectionHeading } from "./ui";
import { useInViewReveal } from "../hooks/useInViewReveal";
import "../styles/Projects.css";

const projects = [
  {
    name: "AudioGene Translational Dashboard",
    tagline: "Machine learning and visualization for genetic hearing loss diagnosis",
    highlights: [
      "Master's Thesis",
      "Ensemble and Semi-Supervised SVM Models",
      "3D Audiogram Visualization",
      "AudioGene Website Redesign",
    ],
    githubLink:
      "https://research-git.uiowa.edu/morl/audiogene/website/AudioGene.git",
    websiteLink: "https://audiogene.eng.uiowa.edu/",
    thesisLink: thesisPaper,
    techs: ["Docker", "MYSQL", "Express-js", "React", "Node-js", "JavaScript"],
  },
  {
    name: "Notably",
    tagline: "AI-powered note capture and study tools",
    highlights: [
      "University of Iowa Hackathon Winner",
      "GPT and Vision API Integration",
      "Handwritten Note Digitization",
      "Flashcard Generation",
    ],
    githubLink: "https://github.com/JoslinSome/Notably",
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
      "Two Week Sprint Build",
      "12 Workout Regimen",
      "Dynamic Progress Tracking",
      "Personalized Profiles",
    ],
    githubLink: "https://github.com/bdesollar/DeSollarFitness",
    techs: ["React-Native", "Expo", "Firebase", "JavaScript"],
  },
  {
    name: "Omnilense",
    tagline: "Facial recognition eyewear with social connectivity",
    highlights: [
      "Four Person Engineering Team",
      "Custom Eyewear Hardware",
      "Social Platform Integration",
      "$15,300 in Grant Funding",
    ],
    githubLink: "https://github.com/Iron-Men-2023/OmniLens/tree/main",
    techs: ["React-Native", "Expo", "Firebase", "JavaScript"],
  },
  {
    name: "Facial Recognition API",
    tagline: "Python and Flask API for facial authentication",
    highlights: [
      "Heroku Deployment",
      "Recognition Algorithm Integration",
      "User Authentication Pipeline",
    ],
    githubLink: "https://github.com/Iron-Men-2023/Flask-API/tree/main",
    techs: ["Python", "Flask", "Heroku", "JavaScript"],
  },
  {
    name: "Personal Portfolio",
    tagline: "React portfolio with Firebase hosting",
    highlights: [
      "Responsive Editorial Design",
      "Project Showcase",
      "Contact Form Integration",
    ],
    githubLink: "https://github.com/bdesollar/Portfolio_Website",
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
          subtitle="AI · Mobile · Research · Full Stack"
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
