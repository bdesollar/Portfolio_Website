import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  Cloud,
  Cpu,
  Dumbbell,
  TrendingUp,
  Users,
} from "lucide-react";
import profilePicture from "../assets/img/profile.jpeg";
import {
  Container,
  PageShell,
  SectionHeading,
  Typography,
} from "./ui";
import { fadeUp, staggerContainer } from "../utils/motion";
import "../styles/About.css";

const bioFragments = [
  "M.S. Electrical and Computer Engineering · University of Iowa",
  "Customer Engineer at Pendo",
  "Pre and post sales for mid market SaaS",
  "Background in AI product, Intel SMRP, and software engineering",
];

const hobbies = [
  { icon: Dumbbell, label: "Working out" },
  { icon: BookOpen, label: "Stormlight Archives" },
  { icon: Users, label: "Friends and community" },
];

const interests = [
  { icon: Cloud, label: "Cloud computing" },
  { icon: Bot, label: "AI and LLMs" },
  { icon: Cpu, label: "CPUs and GPUs" },
  { icon: TrendingUp, label: "Technical sales and strategy" },
];

function AboutCard({ icon: Icon, label }) {
  return (
    <motion.div className="about-card" variants={fadeUp}>
      <div className="about-card__icon">
        <Icon size={22} aria-hidden="true" />
      </div>
      <Typography as="p" variant="bodySm">
        {label}
      </Typography>
    </motion.div>
  );
}

function About() {
  return (
    <PageShell className="about">
      <Container maxWidth="wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              label="About"
              title="The person behind the work"
            />
          </motion.div>

          <div className="about__intro">
            <motion.div className="about__portrait-wrap" variants={fadeUp}>
              <img
                src={profilePicture}
                alt="Benjamin DeSollar"
                className="about__portrait"
                width={400}
                height={500}
                loading="lazy"
              />
            </motion.div>
            <motion.div className="about__bio" variants={fadeUp}>
              <Typography as="h1" variant="h2" className="about__bio-title">
                About me
              </Typography>
              <div className="about__fragments">
                {bioFragments.map((line) => (
                  <Typography
                    key={line}
                    as="p"
                    variant="body"
                    className="about__fragment"
                  >
                    {line}
                  </Typography>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.section className="about__section" variants={fadeUp}>
            <Typography as="h2" variant="h3" className="about__section-title">
              Hobbies
            </Typography>
            <div className="about__grid about__grid--3">
              {hobbies.map((item) => (
                <AboutCard key={item.label} {...item} />
              ))}
            </div>
          </motion.section>

          <motion.section className="about__section" variants={fadeUp}>
            <Typography as="h2" variant="h3" className="about__section-title">
              Interests in tech
            </Typography>
            <div className="about__grid about__grid--4">
              {interests.map((item) => (
                <AboutCard key={item.label} {...item} />
              ))}
            </div>
          </motion.section>
        </motion.div>
      </Container>
    </PageShell>
  );
}

export default About;
