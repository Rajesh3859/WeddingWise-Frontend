import { Button, Spinner, Form, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
  selectLoading,
  selectError,
} from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  // Clear messages after 5 seconds
  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        dispatch(signInFailure(null)); // Clear the error state in Redux
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, error, dispatch]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value.trim() }));

    // Reset errors on input change
    if (id === "email") setEmailError(null);
    if (id === "password") setPasswordError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the fields."));
    }

    if (!validateEmail(formData.email)) {
      setEmailError("Invalid email format.");
      return;
    }

    try {
      dispatch(signInStart());
      const response = await fetch(
        "https://weddingwise-backend-gda8.onrender.com/api/users/login-User",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        handleError(data.message);
        return;
      }

      localStorage.setItem("Token", data.token);
      dispatch(signInSuccess(data));
      setSuccessMessage("Sign in successful!");
      navigate("/");
    } catch {
      dispatch(signInFailure("An error occurred. Please try again."));
    }
  };

  const handleError = (message) => {
    if (message.includes("wrong password")) {
      setPasswordError("The password entered is incorrect.");
    } else if (message.includes("email")) {
      setEmailError("The email entered is incorrect or not registered.");
    }
    dispatch(signInFailure(message));
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">WeddingWise</h1>
        <p>Sign in with your email and password or use OAuth.</p>
      </div>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Sign In"}
        </Button>

        <div className="mt-3">
          <p>
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>

        <OAuth loading={loading} />
      </Form>
    </div>
  );
};

export default Signin;
