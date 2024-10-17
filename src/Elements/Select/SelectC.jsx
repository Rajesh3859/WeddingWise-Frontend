
import PropTypes from "prop-types";

export default function SelectC({
  handleChange = () => {},
  label = "",
  id = "",
  options = [],
  overrides = {},
  value = "",
  name = "",
}) {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <select
        className="form-select"
        id={id}
        name={name}
        value={value}
        onChange={(e) =>
          handleChange({
            ...e,
            target: {
              ...e.target,
              id: id,
            },
          })
        }
        style={overrides} // Inline styles for customization
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.length > 0 &&
          options.map((o, i) => (
            <option key={`${label}-option-${i}`} value={o.value}>
              {o.label}
            </option>
          ))}
      </select>
    </div>
  );
}

// Prop validation
SelectC.propTypes = {
  handleChange: PropTypes.func, // Function to handle the change event
  label: PropTypes.string, // Label text for the select input
  id: PropTypes.string.isRequired, // ID for the select element
  options: PropTypes.arrayOf(
    // Array of options for the select dropdown
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  overrides: PropTypes.object, // Inline styles for the select input
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Selected value
  name: PropTypes.string.isRequired, // Name attribute for the select input
};

// Default props
SelectC.defaultProps = {
  handleChange: () => {},
  label: "",
  overrides: {},
  value: "",
};
