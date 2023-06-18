import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function About() {
    return (
        <Card style={{ maxWidth: 345, margin: 'auto', marginTop: 50 }}>
            <CardMedia
                component="img"
                height="140"
                image="url-to-your-image"
                alt="Your Name"
                style={{ borderRadius: '50%', width: '100px', margin: 'auto', marginTop: '-50px' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Your Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A brief description about you as a graduate student goes here.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default About;
