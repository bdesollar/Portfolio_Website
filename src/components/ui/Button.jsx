import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  href,
  to,
  download,
  type = "button",
  className = "",
  disabled = false,
  onClick,
  ...rest
}) {
  const classes = ["btn", `btn--${variant}`, className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "outline"]),
  href: PropTypes.string,
  to: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
