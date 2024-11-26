import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Servicecard from "../Components/Cards/Servicecard"; // Assuming this can be used for SubCategory

export default function SubBrands() {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!params.id) {
        setError("No ID provided for fetching services.");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching subcategories for ID:", params.id);
        const response = await fetch(
          `https://weddingwise-backend-gda8.onrender.com/products/subbrand/${params.id}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.response);

        if (data.response && data.response.length > 0) {
          setServiceCategories(data.response);
        } else {
          setServiceCategories([]); // No services found
        }
      } catch (err) {
        setError(err.message || "An unknown error occurred.");
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    };

    fetchSubCategories();
  }, [params.id]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger" className="my-4">{`Error: ${error}`}</Alert>;
  }

  return (
    <div className="container flex m-0 position">
      <div className="container Brand-page-content mt-4">
        <Container>
          <h1 className="my-4">Choose a Service</h1>
          <Row className="mb-4">
            {serviceCategories.length > 0 ? (
              serviceCategories.map((services) => (
                <Col key={services._id} md={4} className="mb-4">
                  <Servicecard
                    services={services}
                    addToCart={(service) =>
                      console.log("Added to cart:", service)
                    } // Mock function
                  />
                </Col>
              ))
            ) : (
              <Alert variant="info">No services available at the moment.</Alert>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
