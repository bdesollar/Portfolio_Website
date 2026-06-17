import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "../assets/img/profile.jpeg";
import {
  Container,
  IconButton,
  PageShell,
  Typography,
} from "./ui";
import { fadeUp, staggerContainer } from "../utils/motion";
import "../styles/Home.css";

const roles = [
  "Customer Engineer",
  "Sales Engineering",
  "Software Engineering",
];

function Home() {
  return (
    <PageShell className="home">
      <div className="home__bg" aria-hidden="true" />
      <Container maxWidth="wide" className="home__container">
        <motion.div
          className="home__grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="home__portrait-col" variants={fadeUp}>
            <div className="home__portrait-frame">
              <img
                src={profilePicture}
                alt="Benjamin DeSollar"
                className="home__portrait"
                width={480}
                height={480}
                fetchpriority="high"
              />
              <div className="home__portrait-accent" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div className="home__content-col" variants={fadeUp}>
            <Typography as="span" variant="label" className="home__eyebrow">
              Portfolio
            </Typography>
            <Typography as="h1" variant="display" className="home__headline">
              Technical sales{" "}
              <span className="home__headline-dot" aria-hidden="true">·</span>{" "}
              product{" "}
              <span className="home__headline-dot" aria-hidden="true">·</span>{" "}
              engineering
            </Typography>
            <Typography as="p" variant="h3" className="home__name">
              Benjamin DeSollar
            </Typography>
            <div className="home__roles" aria-label="Professional roles">
              {roles.map((role) => (
                <span key={role} className="home__role-pill">
                  {role}
                </span>
              ))}
            </div>
            <div className="home__social">
              <IconButton
                href="https://github.com/bdesollar"
                label="GitHub profile"
              >
                <Github />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/ben-desollar"
                label="LinkedIn profile"
              >
                <Linkedin />
              </IconButton>
              <IconButton
                href="mailto:ben.desollar01@gmail.com"
                label="Send email"
              >
                <Mail />
              </IconButton>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </PageShell>
  );
}

export default Home;
