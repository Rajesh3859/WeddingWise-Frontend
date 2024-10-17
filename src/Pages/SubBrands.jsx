import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SubbrandList from "../Components/Cards/SubbrandList"; // Assuming this can be used for SubCategory

export default function SubBrands() {
  const [subCategories, setSubCategories] = useState([]); // Store subCategories
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (params.id) {
        console.log("Fetching subcategories for ID:", params.id);
        try {
          const response = await fetch(
            `http://localhost:3001/subbrands/${params.id}`
          ); // Dynamic ID

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log(response)

          const data = await response.json();
          console.log(data.response);

          if (data.response && data.response.length > 0) {
            setSubCategories(data.response);
          } else {
            setSubCategories([]); // Handle case where no subCategories are found
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
          <h1 className="my-4">Choose a Catego</h1>
          <Row className="mb-4">
            {Array.isArray(subCategories) && subCategories.length > 0 ? (
              subCategories.map((category) => (
                <Col key={category._id} md={4} className="mb-4">
                  <SubbrandList
                    category={{ ...category, imageUrl: category.imageUrl }}
                  />
                </Col>
              ))
            ) : (
              <p>No categories available.</p>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
