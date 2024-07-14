import React, { useState } from "react";
import { Element } from "react-scroll";
import { Typography, Grid, Paper, Button, Container } from "@material-ui/core";
import resume from "../assets/pdf/Ben_DeSollar_Resume.pdf";
import "../styles/Resume.css";

function Resume() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
  };

  return (
    <Element name="resume" className="resume-section">
      <Container maxWidth="lg">
        <Typography className="resumeTitle" variant="h4" gutterBottom>
          My Resume
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle highlight">
                Education
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>The University of Iowa | Iowa City, IA</strong> <br />
                Master of Science (M.S),{" "}
                <span className="technicalHighlight">
                  Electrical and Computer Engineering
                </span>{" "}
                <br />
                <em>Aug 2022 - May 2024</em>
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>The University of Iowa | Iowa City, IA</strong> <br />
                Bachelor of Science in Engineering (B.S.E),{" "}
                <span className="technicalHighlight">
                  Computer Science and Engineering
                </span>{" "}
                <br />
                <em>Aug 2019 - May 2023</em>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle highlight">
                Technical Experience
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>University of Iowa, Iowa City, IA</strong> <br />
                Graduate Research Assistant <br />
                <em>Aug 2023 - July 2024</em> <br />• Led the development of the{" "}
                <span className="technicalHighlight">
                  AudioGene Translational Dashboard (AGTD)
                </span>
                , integrating{" "}
                <span className="technicalHighlight">machine learning</span> and
                visualization to enhance the prediction of hearing loss genes.{" "}
                <br />• Improved diagnostic accuracy through innovative data
                analysis and visualization techniques, addressing data sparsity.
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>AMD, Fort Collins, CO</strong> <br />
                Software Engineer Intern <br />
                <em>May 2023 - Aug 2023</em> <br />• Unified three apps into one
                interface, boosting efficiency by 60% and effectively
                communicating benefits to stakeholders. <br />• Collaborated
                cross-functionally to develop debugging tools that streamlined
                debugging processes across all business units.
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>John Deere, Moline, IL</strong> <br />
                Software Engineer Intern <br />
                <em>May 2022 - Aug 2022</em> <br />• Implemented robust security
                measures in{" "}
                <span className="technicalHighlight">Kubernetes</span>,
                enhancing cluster security and reducing potential
                vulnerabilities. <br />• Increased security operations
                efficiency by 50% through the strategic development and
                integration of{" "}
                <span className="technicalHighlight">Rego code</span>.
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>Collins Aerospace, Cedar Rapids, IA</strong> <br />
                Software Engineer Co-op/Intern <br />
                <em>May 2020 - Dec 2021</em> <br />
                • Developed analytical tools that enhanced avionic program
                accuracy and increased error scanning efficiency by 98%. <br />•
                Led a strategic initiative to consolidate five disparate tools
                into a single platform, reducing work time by 92%.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle">
                Leadership & Teaching Experience
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>University of Iowa, Iowa City, IA</strong> <br />
                Teaching Assistant <br />
                <em>Aug 2021 - May 2023</em> <br />• Educated 600+ students in{" "}
                <span className="technicalHighlight">C++</span> and{" "}
                <span className="technicalHighlight">Java</span>, significantly
                elevating their grasp of software design. <br />• Achieved a
                90%+ positive feedback rate, showcasing communication skills
                vital for client-facing roles.
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>UIowa Hyperloop Club, Iowa City, IA</strong> <br />
                Executive Board/Systems Lead <br />
                <em>Aug 2020 - Dec 2022</em> <br />
                • Managed a 15-member team in the SpaceX Hyperloop challenge,
                showcasing technical and strategic leadership. <br />• Garnered{" "}
                <span className="businessHighlight">$5,000</span> in project
                funding, emphasizing skills in{" "}
                <span className="businessHighlight">resource mobilization</span>{" "}
                and{" "}
                <span className="businessHighlight">
                  stakeholder collaboration
                </span>
                .
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle highlight">
                Business Experience
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>Omnilense, Iowa City, IA</strong> <br />
                Co-Founder & CTO <br />
                <em>Jul 2022 - Jun 2023</em> <br />
                • Directed a team of four, engineering glasses with facial
                recognition paired with a social media app, enhancing
                connections. <br />• Secured{" "}
                <span className="businessHighlight">$300</span> in a pitch
                contest and was granted an additional{" "}
                <span className="businessHighlight">$15,000</span> for the
                business venture.
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>BRDBOX, Iowa City, IA</strong> <br />
                Founder and CEO <br />
                <em>Jul 2022 - May 2023</em> <br />
                • Successfully initiated a startup, acquiring a comprehensive
                grasp of end-to-end business operations. <br />• Excelled in{" "}
                <span className="businessHighlight">
                  supplier negotiations
                </span>{" "}
                and{" "}
                <span className="businessHighlight">customer relations</span>,
                boosting supply chain efficiency and client satisfaction.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle">
                Projects
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>
                  Notably (React Native, MongoDB, Express.js, Node.js, OpenAI
                  GPT, Google Cloud Vision)
                </strong>{" "}
                <br />• Directed Notably to a 1st-place finish at the University
                of Iowa Hackathon, outperforming 200+ competitors by leveraging
                advanced <span className="technicalHighlight">ML/AI</span> and
                cloud solutions. <br />• Engineered seamless integrations of{" "}
                <span className="technicalHighlight">OpenAI GPT-3.5</span> and{" "}
                <span className="technicalHighlight">
                  Google Cloud Vision APIs
                </span>
                .
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle">
                Skills
              </Typography>
              <Typography variant="body1" className="sectionContent">
                • Programming:{" "}
                <span className="technicalHighlight">
                  Python, Java, C++, JavaScript, Ruby, SQL, Go, HTML/CSS
                </span>{" "}
                <br />• Frameworks & Databases:{" "}
                <span className="technicalHighlight">
                  React, React Native, Node.js, Express.js, MySQL, Firebase,
                  MongoDB
                </span>{" "}
                <br />• DevOps & Version Control:{" "}
                <span className="technicalHighlight">
                  Kubernetes, Docker, CI/CD, Git
                </span>{" "}
                <br />• Specialized Technologies:{" "}
                <span className="technicalHighlight">
                  Machine Learning, OpenCV, OpenAI GPT, Computer Vision
                </span>{" "}
                <br />• Management & Soft Skills:{" "}
                <span className="businessHighlight">
                  Agile, Scrum, Effective Communication, Customer Service,
                  Stakeholder Management
                </span>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              href={resume}
              download="Ben_DeSollar_Resume.pdf"
              className="button"
              onClick={handleDownload}
            >
              Download Resume
            </Button>
            {isDownloaded && (
              <Typography variant="body1" className="thankYouMessage">
                Thank you for downloading my resume! 😊
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
}

export default Resume;
