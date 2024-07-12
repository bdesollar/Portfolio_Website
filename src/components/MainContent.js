import React from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import KellyBirthday from "./KellysBirthday";
import Navbar from "./Navbar";
import "./MainContent.css";

function MainContent() {
  const location = useLocation();

  if (location.pathname === "/kelly=stink") {
    return <KellyBirthday />;
  }

  return (
    <>
      <Navbar />
      <div className="mainContent">
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default MainContent;
