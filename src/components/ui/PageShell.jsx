import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { pageTransition } from "../../utils/motion";

function PageShell({ children, className = "" }) {
  return (
    <motion.div
      className={`page-section ${className}`.trim()}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageShell;
