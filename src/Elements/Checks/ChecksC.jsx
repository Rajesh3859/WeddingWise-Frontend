
import PropTypes from "prop-types";

export default function CheckC({
  label = "",
  checked = false,
  id = "",
  name = "",
  onChange = () => {},
}) {
  return (
    <div className="form-check" id={id}>
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) =>
          onChange({
            ...e,
            target: {
              ...e.target,
              id: id,
              name: name,
              type: "checkbox",
            },
          })
        }
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

// Prop validation
CheckC.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

// Default props
CheckC.defaultProps = {
  label: "",
  checked: false,
  onChange: () => {},
};
