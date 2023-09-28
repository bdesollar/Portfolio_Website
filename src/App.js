import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000", // black
    },
    secondary: {
      main: "#fff", // white
    },
    background: {
      default: "#fff", // white
    },
    gradient: {
      main: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Example gradient
    },
  },
  typography: {
    fontFamily: "SF Pro Text, Helvetica, Arial, sans-serif", // Apple-like font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
