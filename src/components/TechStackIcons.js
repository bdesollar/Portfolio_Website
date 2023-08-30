import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import PythonIcon from '../assets/icons/icons8-python.svg'; // You can import custom icons or images
import JavaScriptIcon from '../assets/icons/icons8-javascript.svg';
import ReactIcon from '../assets/icons/icons8-react.svg';
import RubyIcon from '../assets/icons/icons8-ruby-48.png';

const useStyles = makeStyles({
    iconButton: {
        padding: 5,
    },
    icon: {
        fontSize: 25,
    },
});

function TechStackIcon({ tech }) {
    const classes = useStyles();

    switch (tech) {
        // case 'Flask':
        //     return <img src="../assets/icons/icons8-flask.svg" alt="Firebase" className={classes.icon} />;
        // case 'Firebase':
        //     return <img src="../assets/icons/icons8-firebase.svg" alt="Firebase" className={classes.icon} />;
        case 'MySQL':
            return <img src="../assets/icons/icons8-mysql.svg" alt="MySQL" className={classes.icon} />;
        case 'Python':
            return <PythonIcon className={classes.icon} />;
        // case 'JavaScript':
        //     return <JavaScriptIcon className={classes.icon} />;
        // case 'React':
        //     return <ReactIcon className={classes.icon} />;
        // case 'React Native':
        //     return <img src="../assets/icons/icons8-react-native.svg" alt="React Native" className={classes.icon} />;
        // case 'Ruby':
        //     return <RubyIcon className={classes.icon} />;
        // case 'OpenCV':
        //     return <img src="../assets/icons/icons8-opencv.svg" alt="OpenCV" className={classes.icon} />;
        // case 'Ruby on Rails':
        //     return <img src="../assets/icons/icons8-ruby-48.png" alt="Ruby on Rails" className={classes.icon} />;
        // case 'Expo':
        //     return <img src="../assets/icons/icons8-expo.svg" alt="Ruby on Rails" className={classes.icon} />;
        default:
            return null;
    }
}

function TechStackIcons({ techs }) {

    const classes = useStyles();
    if (!Array.isArray(techs)) {
        return null; // Return null or some placeholder if techs is not valid
    }

    return (
        <div>
            {techs.map((tech, index) => (
                <IconButton key={index} className={classes.iconButton}>
                    <TechStackIcon tech={tech} />
                </IconButton>
            ))}
        </div>
    );
}

export default TechStackIcons;
