import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ServiceCard from "../Components/Cards/ServiceCard"; // Assuming this can be used for SubCategory

export default function SubBrands() {
  const [serviceCategories, setServiceCategories] = useState([]); // Store serviceCategories
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (params.id) {
        console.log("Fetching subcategories for ID:", params.id);
        try {
          const response = await fetch(
            `https://weddingwise-backend-gda8.onrender.com/products/subbrand/${params.id}`
          ); // Dynamic ID

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log(data.response);

          if (data.response && data.response.length > 0) {
            setServiceCategories(data.response);
          } else {
            setServiceCategories([]); // Handle case where no serviceCategories are found
          }
        } catch (err) {
          setError(err.message); // Set the error message
        } finally {
          setLoading(false); // Always set loading to false
        }
      } else {
        setLoading(false); // Set loading to false if no params
      }
    };

    fetchSubCategories(); // Call the async function
  }, [params]);

  console.log(serviceCategories);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <div className="container flex m-0 position">
      <div className="container Brand-page-content mt-4">
        <Container>
          <h1 className="my-4">Choose a Service</h1>
          <Row className="mb-4">
            {Array.isArray(serviceCategories) &&
            serviceCategories.length > 0 ? (
              serviceCategories.map((services) => (
                <Col key={services._id} md={4} className="mb-4">
                  <ServiceCard
                    services={{ ...services, imageUrl: services.imageUrl }}
                  />
                </Col>
              ))
            ) : (
              <p>No Services available</p>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
