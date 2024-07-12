import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
