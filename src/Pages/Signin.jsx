import { Button, Spinner, Form, Alert } from "react-bootstrap";
import { useState } from "react";
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

  const loading = useSelector(selectLoading); // Use the memoized selector
  const error = useSelector(selectError); // Use the memoized selector
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value.trim() }));

    if (id === "email") setEmailError(null);
    if (id === "password") setPasswordError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      const errorMsg = "Please fill out all the fields.";
      alert(errorMsg);
      return dispatch(signInFailure(errorMsg));
    }

    if (!validateEmail(formData.email)) {
      const errorMsg = "Invalid email format.";
      alert(errorMsg);
      return setEmailError(errorMsg);
    }

    try {
      dispatch(signInStart());
      const response = await fetch("http://localhost:3001/auth/login-User", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        let errorMsg;
        if (data.message.includes("wrong password")) {
          errorMsg = "The password entered is incorrect.";
          setPasswordError(errorMsg);
        } else if (data.message.includes("email")) {
          errorMsg = "The email entered is incorrect or not registered.";
          setEmailError(errorMsg);
        } else {
          errorMsg = "Failed to sign in.";
          dispatch(signInFailure(errorMsg));
        }
        alert(errorMsg);
        return;
      }

      localStorage.setItem("Token", data.token);
      dispatch(signInSuccess(data));

      const successMsg = "Sign in successful!";
      alert(successMsg);
      setSuccessMessage(successMsg);

      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      navigate("/");
    } catch (error) {
      const errorMsg = error.message || "An error occurred. Please try again.";
      alert(errorMsg);
      dispatch(signInFailure(errorMsg));
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">WeddingWise</h1>
        <p>You can sign in with your email and password below or use OAuth.</p>
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
            Don&apos;t have an account already?{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <OAuth />
      </Form>
    </div>
  );
};

export default Signin;
