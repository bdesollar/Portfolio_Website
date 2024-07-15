import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Grid, Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import omnilenseLogoPic from "../assets/img/omniLenseBgRemoved.png";
import facialRecLogoPic from "../assets/img/OmnilenseAPILogo.png";
import desollarFitnessLogoPic from "../assets/img/DeSollarFitnessLogo.png";
import notablyLogoPic from "../assets/img/notablyLogo.png";
import portfolioLogoPic from "../assets/img/logo.jpg";
import audioGeneLogoPic from "../assets/img/AudioGene_logo.png";
import thesisPaper from "../assets/pdf/Masters_Thesis_Ben_DeSollar_Official.pdf";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      name: "AGTD - The AudioGene Translational Dashboard",
      description: {
        overallDescription:
          "AGTD: AudioGene Translational Dashboard is a hybrid machine learning and visualization interface I designed for my masters thesis to enhance the genetic diagnosis of Autosomal Dominant Non-Syndromic Hearing Loss (ADNSHL). It integrates advanced visualization tools with ensemble and semi-supervised SVM models. Additionally, I completely redesigned and implemented the entire AudioGene website where the tool is deployed, ensuring a seamless user experience and robust functionality.",
        achievements: [
          "Developed AGTD: AudioGene Translational Dashboard.",
          "Innovated a hybrid machine learning and visualization interface to enhance the genetic diagnosis of ADNSHL.",
          "Redesigned and implemented the entire AudioGene website for improved user experience and functionality.",
        ],
        keyFeatures: [
          "Hybrid Machine Learning: Combines ensemble and semi-supervised SVM models.",
          "Advanced Visualization: Features an interactive three-dimensional audiogram plot, a 2D audio profile plot, a surface profile viewer, and an ethnicity distribution visualization.",
          "Website Redesign: Complete redesign and implementation of the AudioGene website.",
        ],
        useCase:
          "Enhances diagnosis confidence and improves interpretation of AudioGene predictions while providing a user-friendly and functional website for deployment.",
      },
      githubLink:
        "https://research-git.uiowa.edu/morl/audiogene/website/AudioGene.git",
      websiteLink: "https://audiogene.eng.uiowa.edu/",
      thesisLink: thesisPaper,
      logo: audioGeneLogoPic,
      techs: [
        "Docker",
        "MYSQL",
        "Express-js",
        "React",
        "Node-js",
        "JavaScript",
      ],
    },
    {
      name: "Notably",
      description: {
        overallDescription:
          "Notably is a mobile application designed to enhance the studying experience for students. It allows users to capture images of handwritten notes, store them digitally, and search through them effortlessly. The app integrates advanced AI and cloud solutions to provide intelligent study assistance, including personalized flashcard quizzes.",
        achievements: [
          "Directed Notably to a 1st-place finish at the University of Iowa Hackathon, outperforming 200+ competitors by leveraging advanced ML/AI and cloud solutions.",
          "Engineered seamless integrations of OpenAI GPT-3.5 and Google Cloud Vision APIs.",
        ],
        keyFeatures: [
          "Note Capture and Styling: Capture images of handwritten notes and store them digitally.",
          "Powerful Search: Effortlessly search through all your notes for quick content retrieval.",
          "Intelligent Study Assistance: Generate personalized flashcard quizzes based on your notebook content.",
        ],
        useCase:
          "Enhances the studying experience for students by addressing common challenges in organizing and presenting notes.",
      },
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
      description: {
        overallDescription:
          "DeSollar Fitness is a personalized fitness application that provides users with a structured workout plan, dynamic progress tracking, and customized user profiles. Developed in a two-week sprint, the app aims to motivate and guide users in their fitness journey.",
        achievements: [
          "Developed a personalized fitness application in a two-week sprint.",
        ],
        keyFeatures: [
          "12-workout regimen: Provides a structured workout plan.",
          "Dynamic progress tracking: Tracks user progress and calculates maxes.",
          "Personalized user profiles: Customizes the fitness experience for each user.",
        ],
        useCase:
          "Motivates and guides users in their fitness journey by providing personalized workout plans and progress tracking.",
      },
      githubLink: "https://github.com/bdesollar/DeSollarFitness",
      logo: desollarFitnessLogoPic,
      techs: ["React-Native", "Expo", "Firebase", "JavaScript"],
    },
    {
      name: "Omnilense",
      description: {
        overallDescription:
          "Omnilense is a unique project that combines custom eyeglasses equipped with facial recognition technology and a social media app. The glasses enhance human connectivity by providing an immediate way to connect with people they encounter.",
        achievements: [
          "Directed a team of four, engineering glasses with facial recognition paired with a social media app, enhancing connections.",
          "Secured $300 in a pitch contest and was granted an additional $15,000 for the business venture.",
        ],
        keyFeatures: [
          "Facial Recognition: Custom eyeglasses equipped with facial recognition technology.",
          "Social Media Integration: Connects users with people they encounter through a social media app.",
        ],
        useCase:
          "Enhances human connectivity by providing a unique and immediate way to connect with people.",
      },
      githubLink: "https://github.com/Iron-Men-2023/OmniLens/tree/main",
      logo: omnilenseLogoPic,
      techs: ["React-Native", "Expo", "Firebase", "JavaScript"],
    },
    {
      name: "Facial Recognition API",
      description: {
        overallDescription:
          "The Facial Recognition API is a robust solution for recognizing and authenticating users based on their facial features. Built using Python and Flask, and hosted on Heroku, this API leverages cutting-edge facial recognition algorithms to accurately identify individuals.",
        achievements: [
          "Developed a robust and intelligent solution for recognizing and authenticating users based on their facial features.",
        ],
        keyFeatures: [
          "Facial Recognition: Leverages cutting-edge facial recognition algorithms.",
          "API Integration: Built using Flask and hosted on Heroku.",
        ],
        useCase:
          "Accurately identifies individuals from a given database for authentication purposes.",
      },
      githubLink: "https://github.com/Iron-Men-2023/Flask-API/tree/main",
      logo: facialRecLogoPic,
      techs: ["Python", "Flask", "Heroku", "JavaScript"],
    },
    {
      name: "Personal Portfolio Website (This Website 🤓)",
      description: {
        overallDescription:
          "This personal portfolio website showcases my projects, skills, and experiences. Built using React, and Firebase, it serves as a central hub for all my professional information and a way to connect with potential employers and collaborators.",
        achievements: [
          "Designed and developed a responsive and visually appealing portfolio website.",
          "Integrated Firebase for backend services and hosting.",
        ],
        keyFeatures: [
          "Project Showcase: Displays detailed information about my projects.",
          "Responsive Design: Ensures the website looks great on all devices.",
          "Contact Form: Allows visitors to get in touch with me easily.",
        ],
        useCase:
          "Serves as a central hub for showcasing my work and connecting with potential employers and collaborators.",
      },
      githubLink: "https://github.com/bdesollar/Portfolio_Website",
      logo: portfolioLogoPic,
      techs: ["React", "Firebase", "JavaScript"],
    },
  ];

  const projectRefs = useRef([]);

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

    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === 0) {
          ref.classList.add("in-view"); // Ensure the first project is always in view
        } else {
          observer.observe(ref);
        }
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Element name="projects" className="section projects-section">
      <Typography className="projectTitle" variant="h5" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3} direction="column" alignItems="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            key={index}
            className="projectCard"
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Element>
  );
}

export default Projects;
