import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import boxImage from "../assets/img/box.jpg";
import uhualImage from "../assets/img/uhual.jpg";
import website from "../assets/img/website.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
  card: {
    width: '100%', // Set width to 100% of the container
    margin: theme.spacing(2),
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    },
    justifyContent: 'center',
  },
  media: {
    height: 400, // You can adjust this as needed
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 20,
    padding: theme.spacing(1, 4),
    alignSelf: 'center',
  },
}));


function WaitlistHome() {
  const classes = useStyles();
  const features = [
    {
      title: "Seamless Moving Experience",
      description: "Experience the future of moving. Our platform offers seamless, stress-free moving solutions designed for the modern age.",
      imageUrl: boxImage,
    },
    {
      title: "Affordable Pricing",
      description: "Get the best rates in the market without compromising on quality or efficiency. Our platform ensures you get the most value for your money.",
      imageUrl: uhualImage,
    },
    {
      title: "Nationwide Coverage",
      description: "No matter where you are, our platform can help you move across the country with ease and comfort.",
      imageUrl: website,
    },
    // Add more features as needed
  ];

  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} key={index}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={feature.imageUrl}
                title="Feature image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {feature.description}
                </Typography>
                {index === features.length - 1 && (
                  <Button variant="contained" color="primary" className={classes.button} href="/waitlistForm">
                    Join the Waitlist
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WaitlistHome;