import PropTypes from "prop-types";

export default function BasicCta({
  label = "",
  id = "",
  overrides = {},
  fullWidth = false,
  handleClick = () => {},
}) {
  return (
    <button
      className={`btn btn-primary${fullWidth ? " w-100" : ""}`}
      style={overrides}
      id={id}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

// Prop validation
BasicCta.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  overrides: PropTypes.object,
  fullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
};

// Default props
BasicCta.defaultProps = {
  label: "",
  id: "",
  overrides: {},
  fullWidth: false,
  handleClick: () => {},
};
