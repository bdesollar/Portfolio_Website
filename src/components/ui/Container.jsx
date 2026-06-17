import PropTypes from "prop-types";

const maxWidths = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  wide: "1400px",
};

function Container({ children, maxWidth = "xl", className = "" }) {
  const width = maxWidths[maxWidth] || maxWidths.xl;
  return (
    <div
      className={`container ${className}`.trim()}
      style={{ "--container-max": width }}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", "wide"]),
  className: PropTypes.string,
};

export default Container;
