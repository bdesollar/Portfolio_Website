import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Grid, Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import omnilensePic from "../assets/img/omnilensePic.png";
import facialRecPic from "../assets/img/FacialRecPic.png";
import desollarFitnessPic from "../assets/img/DeSollarFitnessPic.jpeg";
import notablyPic from "../assets/img/notablyPic.png";
import omnilenseLogoPic from "../assets/img/omniLenseBgRemoved.png";
import facialRecLogoPic from "../assets/img/OmnilenseAPILogo.png";
import desollarFitnessLogoPic from "../assets/img/DeSollarFitnessLogo.png";
import notablyLogoPic from "../assets/img/notablyLogo.png";
import "../styles/Projects.css";

function Projects() {
  const projects = [
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
      image: notablyPic,
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
      image: desollarFitnessPic,
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
      image: omnilensePic,
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
      image: facialRecPic,
      logo: facialRecLogoPic,
      techs: ["Python", "Flask", "Heroku", "JavaScript"],
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
