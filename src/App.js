import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Import global styles

function useIntersectionObserver(setIsVisible) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsVisible]);

  return ref;
}

function App() {
  const [homeVisible, setHomeVisible] = React.useState(false);
  const [aboutVisible, setAboutVisible] = React.useState(false);
  const [resumeVisible, setResumeVisible] = React.useState(false);
  const [projectsVisible, setProjectsVisible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);

  const homeRef = useIntersectionObserver(setHomeVisible);
  const aboutRef = useIntersectionObserver(setAboutVisible);
  const resumeRef = useIntersectionObserver(setResumeVisible);
  const projectsRef = useIntersectionObserver(setProjectsVisible);
  const contactRef = useIntersectionObserver(setContactVisible);

  return (
    <Router>
      <Navbar />
      <div className="mainContent">
        <div
          ref={homeRef}
          className={`fade-in-section ${homeVisible ? "is-visible" : ""}`}
        >
          <Home />
        </div>
        <div
          ref={aboutRef}
          className={`fade-in-section ${aboutVisible ? "is-visible" : ""}`}
        >
          <About />
        </div>
        <div
          ref={resumeRef}
          className={`fade-in-section ${resumeVisible ? "is-visible" : ""}`}
        >
          <Resume />
        </div>
        <div
          ref={projectsRef}
          className={`fade-in-section ${projectsVisible ? "is-visible" : ""}`}
        >
          <Projects />
        </div>
        <div
          ref={contactRef}
          className={`fade-in-section ${contactVisible ? "is-visible" : ""}`}
        >
          <Contact />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
