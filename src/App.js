import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import MainContent from "./components/MainContent";
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
        <MainContent /> {/* Use the MainContent component here */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
