import { useState } from "react";
import PropTypes from "prop-types";

export default function RatingC({
  value = 1,
  onChange = () => {},
  readOnly = false,
  disabled = false,
  id = "",
  name = "",
  size = "small",
}) {
  const [ratingValue, setRatingValue] = useState(value);

  const handleRatingChange = (newRating) => {
    if (!readOnly && !disabled) {
      setRatingValue(newRating);
      onChange({
        target: {
          id: id,
          name: name,
          value: newRating,
        },
      });
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "fs-6"; // Small font size
      case "medium":
        return "fs-5"; // Medium font size
      case "large":
        return "fs-4"; // Large font size
      default:
        return "fs-5"; // Default to medium if not recognized
    }
  };

  return (
    <div id={id} className={`rating-component ${getSizeClass()}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`bi ${star <= ratingValue ? "bi-star-fill" : "bi-star"} ${
            disabled ? "text-muted" : ""
          }`}
          style={{ cursor: readOnly || disabled ? "not-allowed" : "pointer" }}
          onClick={() => handleRatingChange(star)}
        ></i>
      ))}
    </div>
  );
}

// Define prop types for the component
RatingC.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
