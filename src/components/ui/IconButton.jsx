import PropTypes from "prop-types";

function IconButton({ children, href, label, className = "", onClick, ...rest }) {
  const classes = ["icon-btn", className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      aria-label={label}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
