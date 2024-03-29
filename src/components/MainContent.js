// MainContent.js
import React from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import KellyBirthday from "../components/KellysBirthday";
import Navbar from "../Navbar";
import WaitlistHome from "../components/WaitlistHome";
import WaitlistForm from "../components/WaitlistForm";

function MainContent() {
  const location = useLocation();

  if (location.pathname === "/kelly=stink") {
    return <KellyBirthday />;
  }

  if (location.pathname === "/waitlist") {
    return <WaitlistHome />;
  }

  // Updated this line to include the leading slash
  if (location.pathname === "/waitlistForm") {
    return <WaitlistForm />;
  }

  return (
    <>
      <Navbar />
      <>
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </>
    </>
  );
}

export default MainContent;
