import { useState } from "react";
import { motion } from "framer-motion";
import resume from "../assets/pdf/Ben_DeSollar_Resume.pdf";
import {
  Button,
  Card,
  Container,
  PageShell,
  SectionHeading,
  Typography,
} from "./ui";
import { useInViewReveal } from "../hooks/useInViewReveal";
import { formatDateRange } from "../utils/copy";
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

function ResumeEntry({ org, role, dates, highlights = [] }) {
  return (
    <div className="resume-entry">
      <Typography as="p" variant="body" className="resume-entry__org">
        <strong>{org}</strong>
      </Typography>
      <Typography as="p" variant="bodySm" className="resume-entry__role">
        {role}
      </Typography>
      <Typography as="p" variant="mono" className="resume-entry__dates">
        {dates}
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
        <SectionHeading label="Resume" title="Experience and credentials" />

        <div className="timeline">
          <TimelineBlock title="Education" index={0}>
            <ResumeEntry
              org="The University of Iowa, Iowa City, IA"
              role="Master of Science, Electrical and Computer Engineering"
              dates={formatDateRange("Aug 2022", "May 2024")}
            />
            <ResumeEntry
              org="The University of Iowa, Iowa City, IA"
              role="Bachelor of Science in Engineering, Computer Science and Engineering"
              dates={formatDateRange("Aug 2019", "May 2023")}
            />
          </TimelineBlock>

          <TimelineBlock title="Technical Experience" index={1}>
            <ResumeEntry
              org="Pendo"
              role="Customer Engineer"
              dates={formatDateRange("Apr 2026")}
              highlights={[
                "Mid market accounts",
                "Pre and post sales",
                "Client relationships",
                "Trials and demos",
                "Product adoption",
              ]}
            />
            <ResumeEntry
              org="Pendo"
              role="Sales Engineer"
              dates={formatDateRange("Nov 2025", "Apr 2026")}
              highlights={[
                "Pre sales",
                "Product demos",
                "Trials",
                "Technical evaluations",
                "Solution fit",
              ]}
            />
            <ResumeEntry
              org="Intel Corporation, Raleigh, NC"
              role="Global Alliances / Inside Sales Program Manager (SMRP)"
              dates={formatDateRange("Apr 2024", "Nov 2025")}
              highlights={[
                "Lenovo inside sales enablement",
                "Platform training",
                "Competitive analysis",
                "AI capability positioning",
                "Multi billion dollar MOU execution",
              ]}
            />
            <ResumeEntry
              org="Intel Corporation, Chandler, AZ"
              role="AI Product Manager (SMRP)"
              dates={formatDateRange("Aug 2023", "Apr 2024")}
              highlights={[
                "AI analytics tooling",
                "LLM workflows",
                "70% manual workflow reduction",
                "GTM and engineering collaboration",
              ]}
            />
            <ResumeEntry
              org="University of Iowa, Iowa City, IA"
              role="Graduate Research Assistant"
              dates={formatDateRange("Aug 2023", "Jul 2024")}
              highlights={[
                "AudioGene Translational Dashboard",
                "Machine learning integration",
                "Genetic diagnostics visualization",
              ]}
            />
            <ResumeEntry
              org="AMD, Fort Collins, CO"
              role="Software Engineer Intern"
              dates={formatDateRange("May 2023", "Aug 2023")}
              highlights={[
                "Three app consolidation",
                "60% team efficiency gain",
                "Cross functional chip development",
              ]}
            />
            <ResumeEntry
              org="John Deere, Moline, IL"
              role="Software Engineer Intern"
              dates={formatDateRange("May 2022", "Aug 2022")}
              highlights={[
                "Kubernetes security policies",
                "50% operational efficiency gain",
                "Rego policy integration",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Leadership Experience" index={2}>
            <ResumeEntry
              org="UIowa Hyperloop Club, Iowa City, IA"
              role="Executive Board / Systems Lead"
              dates={formatDateRange("Aug 2020", "Dec 2022")}
              highlights={[
                "15 member team leadership",
                "SpaceX Hyperloop challenge",
                "$5,000 funding secured",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Teaching Experience" index={3}>
            <ResumeEntry
              org="University of Iowa, Iowa City, IA"
              role="Teaching Assistant"
              dates={formatDateRange("Aug 2021", "May 2023")}
              highlights={[
                "Java instruction",
                "C++ instruction",
                "600+ students taught",
              ]}
            />
          </TimelineBlock>

          <TimelineBlock title="Entrepreneurial Experience" index={4}>
            <ResumeEntry
              org="Omnilense, Iowa City, IA"
              role="Cofounder and CTO"
              dates={formatDateRange("Jul 2022", "Jun 2023")}
              highlights={[
                "Facial recognition glasses",
                "Social platform integration",
                "$15,300 funding secured",
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
