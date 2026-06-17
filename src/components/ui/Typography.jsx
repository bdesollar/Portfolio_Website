import PropTypes from "prop-types";

const variants = {
  display: "typography-display",
  h1: "typography-h1",
  h2: "typography-h2",
  h3: "typography-h3",
  h4: "typography-h4",
  body: "typography-body",
  bodySm: "typography-body-sm",
  label: "typography-label",
  mono: "typography-mono",
};

function Typography({ as: Tag = "p", variant = "body", className = "", children }) {
  const classes = [variants[variant], className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}

Typography.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(Object.keys(variants)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
