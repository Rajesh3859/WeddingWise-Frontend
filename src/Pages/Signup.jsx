import { Button, Spinner, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const response = await fetch(
        "https://weddingwise-backend-gda8.onrender.com/auth/register-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (!data.success) {
        setLoading(false);
        return setErrorMessage(
          data.message || "Something went wrong, please try again."
        );
      }

      if (response.ok) {
        setLoading(false);
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">
          <span className="text-gradient">WeddingWise</span>
        </h1>
        <p>
          You can sign up with your Email and password or you can use Google.
          This is a capstone project.
        </p>
      </div>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@company.com"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-3"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
        <OAuth />
        <div className="text-center mt-3">
          <Link to="/Signin">
            <span>Have an account already? </span>
            <span className="font-weight-bold text-primary">Signin</span>
          </Link>
        </div>
        {error && (
          <Alert variant="danger" className="mt-3">
            <strong>OOPS!</strong> {error}
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default Signup;
