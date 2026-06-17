import "../styles/TechStackIcons.css";

const iconModules = import.meta.glob("../assets/icons/icons8-*.svg", {
  eager: true,
  import: "default",
});

const defaultIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><rect fill="%23c4783a" width="48" height="48" rx="8"/><text x="24" y="30" text-anchor="middle" fill="%230a0a0b" font-size="14" font-family="monospace">?</text></svg>';

function getIconSrc(tech) {
  const key = `../assets/icons/icons8-${tech.toLowerCase()}.svg`;
  return iconModules[key] || defaultIcon;
}

function TechStackIcon({ tech }) {
  return (
    <img
      src={getIconSrc(tech)}
      alt={tech}
      className="tech-icon"
      loading="lazy"
      width={32}
      height={32}
    />
  );
}

function TechStackIcons({ techs }) {
  if (!Array.isArray(techs)) return null;

  return (
    <div className="tech-stack" role="list" aria-label="Technology stack">
      {techs.map((tech) => (
        <div key={tech} className="tech-stack__item" role="listitem">
          <TechStackIcon tech={tech} />
          <span className="tech-stack__label">{tech}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStackIcons;
