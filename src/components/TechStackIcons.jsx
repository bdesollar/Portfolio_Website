import "../styles/TechStackIcons.css";
import { formatTechLabel } from "../utils/copy";

function TechStackIcons({ techs }) {
  if (!Array.isArray(techs)) return null;

  return (
    <div className="tech-stack" role="list" aria-label="Technology stack">
      {techs.map((tech) => (
        <span key={tech} className="tech-stack__item" role="listitem">
          {formatTechLabel(tech)}
        </span>
      ))}
    </div>
  );
}

export default TechStackIcons;
