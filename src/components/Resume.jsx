import { useState } from "react";
import { motion } from "framer-motion";
import resume from "../assets/pdf/Ben_DeSollar_Resume.pdf";
import DateRange from "./ui/DateRange";
import {
  Button,
  Card,
  Container,
  PageShell,
  SectionHeading,
  Typography,
} from "./ui";
import { useInViewReveal } from "../hooks/useInViewReveal";
import { fadeUp } from "../utils/motion";
import "../styles/Resume.css";

function HighlightChips({ items }) {
  return (
    <div className="resume-chips" role="list">
      {items.map((item) => (
        <span key={item} className="resume-chip" role="listitem">
          {item}
        </span>
      ))}
    </div>
  );
}

function TimelineBlock({ title, children, index }) {
  const { ref, isInView } = useInViewReveal();

  return (
    <motion.div
      ref={ref}
      className={`timeline-block ${isInView ? "timeline-block--visible" : ""}`}
      style={{ "--delay": `${index * 0.08}s` }}
    >
      <div className="timeline-block__marker" aria-hidden="true" />
      <Card className="timeline-block__card card--accent-bar">
        <Typography as="h3" variant="h3" className="timeline-block__title">
          {title}
        </Typography>
        {children}
      </Card>
    </motion.div>
  );
}

function ResumeEntry({ org, role, start, end = "Present", highlights = [] }) {
  return (
    <div className="resume-entry">
      <Typography as="p" variant="body" className="resume-entry__org">
        <strong>{org}</strong>
      </Typography>
      <Typography as="p" variant="bodySm" className="resume-entry__role">
        {role}
      </Typography>
      <Typography as="p" variant="mono" className="resume-entry__dates">
        <DateRange start={start} end={end} />
      </Typography>
      {highlights.length > 0 && <HighlightChips items={highlights} />}
    </div>
  );
}

const skillChips = [
  "Kubernetes",
  "Docker",
  "CI/CD",
  "REST APIs",
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "Git",
  "Machine Learning",
  "LLM Tools",
  "NLP",
  "React",
  "Node.js",
  "Express.js",
  "Firebase",
  "MongoDB",
  "MySQL",
  "Solution Storytelling",
  "GTM Alignment",
  "Competitive Positioning",
  "Technical Enablement",
];

function Resume() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <PageShell className="resume">
      <Container maxWidth="lg">
        <SectionHeading label="Resume" title="Experience and Credentials" />

        <div className="timeline">
          <TimelineBlock title="Education" index={0}>
            <ResumeEntry
              org="The University of Iowa, Iowa City, IA"
              role="Master of Science, Electrical and Computer Engineering"
              start="Aug 2022"
              end="May 2024"
            />
            <ResumeEntry
              org="The University of Iowa, Iowa City, IA"
              role="Bachelor of Science in Engineering, Computer Science and Engineering"
              start="Aug 2019"
              end="May 2023"
            />
          </TimelineBlock>

          <TimelineBlock title="Technical Experience" index={1}>
            <ResumeEntry
              org="Pendo"
              role="Customer Engineer"
              start="Apr 2026"
              highlights={[
                "Mid Market Accounts",
                "Pre and Post Sales",
                "Client Relationships",
                "Trials and Demos",
                "Product Adoption",
              ]}
            />
            <ResumeEntry
              org="Pendo"
              role="Sales Engineer"
              start="Nov 2025"
              end="Apr 2026"
              highlights={[
                "Pre Sales",
                "Product Demos",
                "Trials",
                "Technical Evaluations",
                "Solution Fit",
              ]}
            />
            <ResumeEntry
              org="Intel Corporation, Raleigh, NC"
              role="Global Alliances / Inside Sales Program Manager (SMRP)"
              start="Apr 2024"
              end="Nov 2025"
              highlights={[
                "Lenovo Inside Sales Enablement",
                "Platform Training",
                "Competitive Analysis",
                "AI Capability Positioning",
                "Multi Billion Dollar MOU Execution",
              ]}
            />
            <ResumeEntry
              org="Intel Corporation, Chandler, AZ"
              role="AI Product Manager (SMRP)"
              start="Aug 2023"
              end="Apr 2024"
              highlights={[
                "AI Analytics Tooling",
                "LLM Workflows",
                "70% Manual Workflow Reduction",
                "GTM and Engineering Collaboration",
              ]}
            />
            <ResumeEntry
              org="University of Iowa, Iowa City, IA"
              role="Graduate Research Assistant"
              start="Aug 2023"
              end="Jul 2024"
              highlights={[
                "AudioGene Translational Dashboard",
                "Machine Learning Integration",
                "Genetic Diagnostics Visualization",
              ]}
            />
            <ResumeEntry
              org="AMD, Fort Collins, CO"
              role="Software Engineer Intern"
              start="May 2023"
              end="Aug 2023"
              highlights={[
                "Three App Consolidation",
                "60% Team Efficiency Gain",
                "Cross Functional Chip Development",
              ]}
            />
            <ResumeEntry
              org="John Deere, Moline, IL"
              role="Software Engineer Intern"
              start="May 2022"
              end="Aug 2022"
              highlights={[
                "Kubernetes Security Policies",
                "50% Operational Efficiency Gain",
                "Rego Policy Integration",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Leadership Experience" index={2}>
            <ResumeEntry
              org="UIowa Hyperloop Club, Iowa City, IA"
              role="Executive Board / Systems Lead"
              start="Aug 2020"
              end="Dec 2022"
              highlights={[
                "15 Member Team Leadership",
                "SpaceX Hyperloop Challenge",
                "$5,000 Funding Secured",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Teaching Experience" index={3}>
            <ResumeEntry
              org="University of Iowa, Iowa City, IA"
              role="Teaching Assistant"
              start="Aug 2021"
              end="May 2023"
              highlights={[
                "Java Instruction",
                "C++ Instruction",
                "600+ Students Taught",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Entrepreneurial Experience" index={4}>
            <ResumeEntry
              org="Omnilense, Iowa City, IA"
              role="Cofounder and CTO"
              start="Jul 2022"
              end="Jun 2023"
              highlights={[
                "Facial Recognition Glasses",
                "Social Platform Integration",
                "$15,300 Funding Secured",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Skills" index={5}>
            <HighlightChips items={skillChips} />
          </TimelineBlock>
        </div>

        <motion.div
          className="resume__download"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            className="btn--shimmer"
            href={resume}
            download="Ben_DeSollar_Resume.pdf"
            onClick={() => setIsDownloaded(true)}
          >
            Download Resume
          </Button>
          {isDownloaded && (
            <Typography as="p" variant="bodySm" className="resume__thanks">
              Thanks for downloading
            </Typography>
          )}
        </motion.div>
      </Container>
    </PageShell>
  );
}

export default Resume;
