import { Card, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { addToCart } from "../../Redux/Slice/cartSlice";

const ServiceCard = ({ services }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    if (services._id) {
      console.log("Calling addToCart with:", services);
      console.log (addToCart(services)); // Call the function to add to the cart
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Auto-hide alert after 3 seconds
    } else {
      console.error("Service ID is undefined");
      window.alert("Service ID is undefined"); // Use browser alert for errors
    }
  };

  return (
    <div>
      {/* Conditionally Render the Alert */}
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Added to Cart Successfully!
        </Alert>
      )}

      <Card className="services-card shadow-lg" style={{ cursor: "pointer" }}>
        <Card.Img
          className="card-image"
          variant="top"
          src={services.imageUrl}
          alt={services.name}
        />
        <Card.Body className="bg-light">
          <Card.Title className="text card-title">{services.name}</Card.Title>
          <Card.Text className="text-muted">
            {services.description || "No description available"}
          </Card.Text>
          {services.price && (
            <Card.Text className="text-primary font-weight-bold">
              Price: ₹{services.price.toLocaleString("en-IN")}
            </Card.Text>
          )}
          <Button variant="success" onClick={handleAddToCart}>
            Add to Cart
          </Button>
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
  addToCart: PropTypes.func,
};

export default ServiceCard;
