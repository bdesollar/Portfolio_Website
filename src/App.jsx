import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((open) => !open);
  };

  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="mainContent">
        <AnimatedRoutes />
      </main>
      <Footer />
      <button
        type="button"
        className="chatBubble"
        onClick={toggleChat}
        aria-label={isChatOpen ? "Close contact form" : "Open contact form"}
        aria-expanded={isChatOpen}
      >
        <MessageCircle aria-hidden="true" />
      </button>
      <Contact isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </Router>
  );
}

export default App;
