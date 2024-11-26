import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Assuming you have a CSS file for custom styles

const Categorycard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div>
    <Card
      className="category-card shadow-lg" // Added shadow, margin, and rounded styles
      onClick={() => {
        if (category._id) {
          navigate(`/SubBrands/${category._id}`);
        } else {
          console.error("Category ID is undefined");
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <Card.Img
        className="card-image" // Add custom image styling
        variant="top"
        src={category.imageUrl}
        alt={category.name}
      />
      <Card.Body className="bg-light">
        <Card.Title className="text card-title">{category.name}</Card.Title>
        <Card.Text className="text-muted">
          {category.description || "No description available"}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

Categorycard.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Categorycard;
