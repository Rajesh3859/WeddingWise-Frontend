import PropTypes from "prop-types";

export default function IconCta({
  color = "primary", // default to Bootstrap's primary color
  label = "",
  onClick = () => {},
  Icon = null,
}) {
  return (
    <button
      type="button"
      className={`btn btn-${color} p-2`}
      aria-label={label}
      onClick={onClick}
    >
      {Icon && <Icon />}
    </button>
  );
}

// Prop validation
IconCta.propTypes = {
  color: PropTypes.string, // Button color, e.g., "primary", "secondary", etc.
  label: PropTypes.string, // Accessible label for screen readers
  onClick: PropTypes.func, // Function to handle click events
  Icon: PropTypes.elementType, // Icon component to render (React component)
};

// Default props
IconCta.defaultProps = {
  color: "primary", // Default Bootstrap button color
  label: "",
  onClick: () => {},
  Icon: null,
};
