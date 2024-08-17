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
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>Intel Corporation, Chandler, AZ</strong> <br />
                AI Product Manager, Sales and Marketing Rotational Program{" "}
                <br />
                <em>Aug 2024 - Present</em> <br />• Contributing to high-impact
                projects within Intel's MAAD team (Machine Learning, Artificial
                Intelligence, Advanced Analytics, and Data Science) to enhance
                business outcomes. <br />• Translating complex data insights
                into actionable business strategies that align with Intel's
                financial and technological objectives. <br />• Collaborating
                with senior management and key stakeholders to emphasize the
                strategic importance of AI, fostering partnerships that support
                long-term success.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>University of Iowa, Iowa City, IA</strong> <br />
                Graduate Research Assistant |{" "}
                <a
                  href="https://audiogene.eng.uiowa.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                  onMouseLeave={(e) => (e.target.style.color = "inherit")}
                >
                  audiogene.eng.uiowa.edu
                </a>{" "}
                <br />
                <em>Aug 2022 - May 2024</em> <br />• Developed the{" "}
                <span className="technicalHighlight">
                  AudioGene Translational Dashboard (AGTD)
                </span>
                , integrating{" "}
                <span className="technicalHighlight">machine learning</span> and
                visualization tools to enhance the genetic diagnosis of
                Autosomal Dominant Non-Syndromic Hearing Loss (ADNSHL). <br />•
                Enhanced diagnostic accuracy by addressing class imbalance and
                data sparsity in audiometric datasets, resulting in improved
                diagnosis confidence.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>AMD, Fort Collins, CO</strong> <br />
                Software Engineer Intern <br />
                <em>May 2023 - Aug 2023</em> <br />• Led the unification of
                three distinct applications into a comprehensive user interface,
                boosting efficiency by 60% and effectively communicating
                benefits to stakeholders. <br />• Developed and deployed
                debugging tools across all business units, enhancing chip
                debugging processes and productivity.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>John Deere, Moline, IL</strong> <br />
                Software Engineer Intern <br />
                <em>May 2022 - Aug 2022</em> <br />• Implemented robust security
                policies to fortify{" "}
                <span className="technicalHighlight">Kubernetes</span> cluster
                security, reducing vulnerabilities. <br />• Developed and
                integrated <span className="technicalHighlight">Rego code</span>
                , improving security operations efficiency by 50%.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>Collins Aerospace, Cedar Rapids, IA</strong> <br />
                Software Engineer Intern <br />
                <em>May 2021 - Aug 2021</em> <br />• Developed{" "}
                <span className="technicalHighlight">Python</span>-based
                analytical tools to enhance avionic program requirement accuracy
                and increased error scanning efficiency by 98%. <br />• Led a
                project to consolidate five development tools into one, reducing
                work time by 92% and boosting team productivity. <br />•
                Optimized data collection from multiple Restful APIs, improving
                algorithm time complexity and data processing efficiency.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>Collins Aerospace, Cedar Rapids, IA</strong> <br />
                Software Engineer Co-op <br />
                <em>Aug 2020 - Dec 2020</em> <br />• Engineered a
                high-performance application for military avionic documentation
                verification, reducing verification time by 98% and accelerating
                data migration into a large data center. <br />• Collaborated
                with a cross-functional team on data migration, demonstrating
                strong teamwork and communication skills. <br />• Conducted
                rigorous testing and debugging of the application, ensuring its
                reliability and effectiveness in the data verification process.
              </Typography>
              <br />
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
                <em>Aug 2021 - May 2023</em> <br />• Translated complex
                programming concepts in{" "}
                <span className="technicalHighlight">Java</span> and{" "}
                <span className="technicalHighlight">C++</span> into digestible
                lessons for over 600 students, demonstrating strong
                communication and technical teaching abilities. <br />• Graded
                assignments and provided detailed feedback, fostering students'
                academic growth in object-oriented and systems programming.{" "}
                <br />• Managed code repositories and projects, enhancing
                students' practical skills and exposure to software development
                practices used in industry.
              </Typography>
              <br />
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
                <em>Jul 2022 - Jun 2023</em> <br />• Directed a team of four,
                engineering glasses with facial recognition technology paired
                with a social media app, enhancing personal connections. <br />•
                Secured <span className="businessHighlight">$300</span> in a
                pitch contest and an additional{" "}
                <span className="businessHighlight">$15,000</span> in funding
                for the business venture.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>BRDBOX, Iowa City, IA</strong> <br />
                Founder and CEO <br />
                <em>Jul 2022 - May 2023</em> <br />• Launched and led a startup
                to gain firsthand experience with business operations,
                demonstrating initiative, leadership, and strategic planning
                skills. <br />• Engaged in supplier negotiations and customer
                communications, acquiring key insights into sales processes and
                stakeholder management. <br />• Leveraged this experience to
                deepen understanding of entrepreneurship, product development,
                and project management.
              </Typography>
              <br />
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
              <br />
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
