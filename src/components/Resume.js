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
                <strong>Intel Corporation, Durham, NC</strong> <br />
                Global Alliances / Inside Sales Program Manager (Sales and Marketing Rotational Program){" "}
                <br />
                <em>Apr 2024 - Present</em> <br />• Drive technical enablement
                for Lenovo's Inside Sales organization, leading platform trainings,
                competitive analysis, and AI capability positioning to accelerate
                adoption of Intel's Commercial Client solutions. <br />• Manage
                execution of a multi-billion dollar MOU between Intel and Lenovo,
                aligning stakeholders across business, technical, and marketing
                teams on AI roadmap milestones, product commitments, and sales targets.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>Intel Corporation, Chandler, AZ</strong> <br />
                AI Product Manager (Sales and Marketing Rotational Program){" "}
                <br />
                <em>Aug 2024 - Apr 2024</em> <br />• Developed and deployed
                AI-driven analytics tools across sales and marketing functions,
                reducing manual workflows by over 70% and accelerating data-driven
                decision making. <br />• Collaborated with GTM and engineering
                teams to operationalize LLMs for document retrieval and partner
                intelligence, building scalable internal tools with real user impact.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>University of Iowa, Iowa City, IA</strong> <br />
                Graduate Research Assistant <br />
                <em>Aug 2023 - Jul 2024</em> <br />• Designed and deployed the{" "}
                <span className="technicalHighlight">
                  AudioGene Translational Dashboard (AGTD)
                </span>
                , integrating{" "}
                <span className="technicalHighlight">machine learning</span> and
                data visualization to improve genetic diagnostics for hearing loss patients. <br />•
                Addressed real-world challenges of class imbalance, data sparsity, and
                clinician usability—laying groundwork for production-grade AI deployment
                in healthcare.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>AMD, Fort Collins, CO</strong> <br />
                Software Engineer Intern <br />
                <em>May 2023 - Aug 2023</em> <br />• Led the consolidation of
                three distinct applications into a unified, intuitive platform,
                increasing team efficiency by 60%. <br />• Created robust
                debugging tools and collaborated cross-functionally to streamline
                chip development processes across multiple business units.
              </Typography>
              <br />
              <Typography variant="body1" className="sectionContent">
                <strong>John Deere, Moline, IL</strong> <br />
                Software Engineer Intern <br />
                <em>May 2022 - Aug 2022</em> <br />• Enhanced{" "}
                <span className="technicalHighlight">Kubernetes</span> security
                infrastructure by implementing advanced policies, significantly
                reducing vulnerabilities and improving operational efficiency by
                50% through optimized Rego integrations.
              </Typography>
              <br />

            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle highlight">
                Leadership Experience
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>UIowa Hyperloop Club, Iowa City, IA</strong> <br />
                Executive Board/Systems Lead <br />
                <em>Aug 2020 - Dec 2022</em> <br />• Directed a 15-member team
                in the SpaceX Hyperloop challenge, securing{" "}
                <span className="businessHighlight">$5,000</span> funding and
                demonstrating strong leadership and project management.
              </Typography>
              <br />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <Typography variant="h5" className="sectionTitle">
                Teaching Experience
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
                Entrepreneurial Experience
              </Typography>
              <Typography variant="body1" className="sectionContent">
                <strong>Omnilense, Iowa City, IA</strong> <br />
                Co-Founder & CTO <br />
                <em>Jul 2022 - Jun 2023</em> <br />• Led engineering for innovative
                facial-recognition glasses linked to a social media platform. <br />•
                Secured <span className="businessHighlight">$15,300</span> in funding
                through pitches and grants, effectively demonstrating entrepreneurial
                leadership.
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
                • Networking & Infrastructure:{" "}
                <span className="technicalHighlight">
                  Kubernetes, Docker, Virtualization, CI/CD Pipelines, RESTful APIs
                </span>{" "}
                <br />• Programming & Automation:{" "}
                <span className="technicalHighlight">
                  Python, Java, JavaScript, SQL, Git, Scripting (Bash, Rego), Automation Workflows
                </span>{" "}
                <br />• AI & Data Systems:{" "}
                <span className="technicalHighlight">
                  Machine Learning, OpenAI GPT, NLP, LLM Tools, Data Pipelines, Visualization
                </span>{" "}
                <br />• Web & System Development:{" "}
                <span className="technicalHighlight">
                  React, Node.js, Express.js, Firebase, MongoDB, MySQL
                </span>{" "}
                <br />• Sales Engineering & Strategy:{" "}
                <span className="businessHighlight">
                  Solution Storytelling, Technical Enablement, Competitive Positioning, GTM Alignment
                </span>{" "}
                <br />• Soft Skills:{" "}
                <span className="businessHighlight">
                  Cross-Functional Communication, Agile & Scrum, Customer Discovery, Technical Writing, Public Speaking
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
