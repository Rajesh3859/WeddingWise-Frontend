import { Alert, Card } from "react-bootstrap";
import PropTypes from "prop-types";
//import { useNavigate } from "react-router-dom"; // Assuming you have a CSS file for custom styles

const ServiceCard = ({ services }) => {
  //const navigate = useNavigate();

  return (
    <div>
      <Card
        className="services-card shadow-lg" // Added shadow, margin, and rounded styles
        onClick={() => {
          if (services._id) {
            Alert("unavaiable");
          } else {
            console.error("service ID is undefined");
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <Card.Img
          className="card-image" // Add custom image styling
          variant="top"
          src={services.imageUrl}
          alt={services.name}
        />
        <Card.Body className="bg-light">
          <Card.Title className="text card-title">{services.name}</Card.Title>
          <Card.Text className="text-muted">
            {services.description || "No description available"}
          </Card.Text>
          {/* <Button variant="primary">
            Book Now - ${services.price}
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

ServiceCard.propTypes = {
  services: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ServiceCard;
