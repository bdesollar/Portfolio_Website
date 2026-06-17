import PropTypes from "prop-types";
import Typography from "./Typography";
import "./SectionHeading.css";

function SectionHeading({ label, title, subtitle, className = "" }) {
  return (
    <header className={`section-heading ${className}`.trim()}>
      {label && (
        <Typography as="span" variant="label" className="section-heading__label">
          {label}
        </Typography>
      )}
      <Typography as="h2" variant="h2" className="section-heading__title">
        {title}
      </Typography>
      {subtitle && (
        <Typography as="p" variant="body" className="section-heading__subtitle">
          {subtitle}
        </Typography>
      )}
      <div className="section-heading__rule" aria-hidden="true" />
    </header>
  );
}

SectionHeading.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default SectionHeading;
