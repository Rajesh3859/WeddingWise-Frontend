import PropTypes from "prop-types";

export default function TextInput({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  id = "",
  name = "",
  label = "",
  overrides = {},
}) {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={overrides} // Use inline styles for custom styling
      />
    </div>
  );
}

// Prop validation
TextInput.propTypes = {
  type: PropTypes.string, // Input type (e.g., "text", "password", "email")
  placeholder: PropTypes.string, // Placeholder text for the input
  value: PropTypes.string, // Controlled input value
  onChange: PropTypes.func, // Function to handle input change events
  id: PropTypes.string, // ID for the input element
  name: PropTypes.string, // Name for the input element
  label: PropTypes.string, // Label text for the input
  overrides: PropTypes.object, // Inline styles for additional customization
};

// Default props
TextInput.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => {},
  id: "",
  name: "",
  label: "",
  overrides: {},
};
