import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound"; // Import the NotFound component
import ChatIcon from "@material-ui/icons/Chat";
import "./App.css"; // Import global styles

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <Navbar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} /> {/* Add this line */}
        </Routes>
      </div>
      <Footer />
      <div className="chatBubble" onClick={toggleChat}>
        <ChatIcon />
      </div>
      <Contact isOpen={isChatOpen} onClose={toggleChat} />
    </Router>
  );
}

export default App;
