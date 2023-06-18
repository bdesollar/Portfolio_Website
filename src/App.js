import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        My Portfolio
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
