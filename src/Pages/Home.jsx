import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import couple from "../assets/couple.png";
import axios from "axios";
import Categorycard from "../Components/Cards/Categorycard";

export default function Home() {
  const [categories, setCategories] = useState([]); // Ensure initial state is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://weddingwise-backend-gda8.onrender.com/brands/"
        );
        console.log(response.data);

        // Adjust this based on the actual structure of your response
        if (response.data && Array.isArray(response.data.response)) {
          setCategories(response.data.response);
        } else {
          throw new Error("Invalid data structure from API");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <Spinner className="d-flex justify-content-center" animation="border" />
    );
  if (error) return <Alert variant="danger">Error: {error}</Alert>;

  return (
    <Container fluid className="m-0 p-0">
      <Row className="border flex bg-warning">
        <Col md={6} className="d-flex flex-column justify-content-center p-4">
          <h1 className="font-weight-bold heading">
            Everything you need to <br />
            plan your event...
          </h1>
          <h3>Search local professionals with pricing, and more...</h3>
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search the Vendor Company or Name..."
              />
              <button className="input-group-append border border-0">
                <span className="input-group-text">
                  <AiOutlineSearch />
                </span>
              </button>
            </div>
          </form>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={couple} className="img-fluid rounded-circle" alt="Couple" />
        </Col>
      </Row>
      <Container className="home-page-content mt-4">
        <h1 className="my-4">Categories</h1>
        <Row>
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category) => (
              <Col key={category._id} md={4}>
                <Categorycard
                  category={{ ...category, imageUrl: category.imageUrl }}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p>No categories available.</p>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}
