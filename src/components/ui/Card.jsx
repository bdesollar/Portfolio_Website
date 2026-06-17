import PropTypes from "prop-types";

function Card({ children, className = "", as: Tag = "div", ...rest }) {
  const classes = ["card", className].filter(Boolean).join(" ");
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Card;
