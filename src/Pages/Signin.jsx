import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState(null); // State for success message
  const [passwordError, setPasswordError] = useState(null); // State for wrong password error
  const [emailError, setEmailError] = useState(null); // State for wrong email error
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Helper to validate email format
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value.trim() }));

    // Clear errors if the user starts typing again
    if (id === "email") setEmailError(null);
    if (id === "password") setPasswordError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      const errorMsg = "Please fill out all the fields.";
      localStorage.setItem("ErrorMessage", errorMsg); // Store the error message
      alert(errorMsg); // Show alert with error message
      return dispatch(signInFailure(errorMsg));
    }

    if (!validateEmail(formData.email)) {
      const errorMsg = "Invalid email format.";
      localStorage.setItem("ErrorMessage", errorMsg); // Store the error message
      alert(errorMsg); // Show alert with error message
      return setEmailError(errorMsg);
    }

    try {
      dispatch(signInStart());
      const response = await fetch(
        "https://weddingwise-backend-gda8.onrender.com/auth/login-user",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        let errorMsg;
        if (data.message.includes("wrong password")) {
          errorMsg = "The password entered is incorrect.";
          setPasswordError(errorMsg);
          setEmailError(null); // Clear any previous email error
        } else if (data.message.includes("email")) {
          errorMsg = "The email entered is incorrect or not registered.";
          setEmailError(errorMsg);
          setPasswordError(null); // Clear any previous password error
        } else {
          errorMsg = "Failed to sign in.";
          setEmailError(null);
          setPasswordError(null);
          return dispatch(signInFailure(errorMsg));
        }

        // Store error message in local storage and show alert
        localStorage.setItem("ErrorMessage", errorMsg);
        alert(errorMsg);

        return;
      }

      // Successful login
      localStorage.setItem("Token", data.token);
      dispatch(signInSuccess(data));
      const successMsg = "Sign in successful!";
      localStorage.setItem("SuccessMessage", successMsg);
      alert(successMsg); // Show success message
      setSuccessMessage(successMsg); // Set success message

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      navigate("/");
    } catch (error) {
      const errorMsg = error.message && "An error occurred. Please try again.";
      localStorage.setItem("ErrorMessage", errorMsg); // Store the error message
      alert(errorMsg); // Show alert with error message
      dispatch(signInFailure(errorMsg));
    }
  };

  return (
    <div className="min-h-screen mt-50 ml-10 mr-10">
      <div>
        <div>
          <div className="text-3xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 text-transparent bg-clip-text">
              WeddingWise
            </span>
          </div>
          <p className="text-m mt-6">
            You can sign in with your Email and password or you can use Google.
            This is a capstone project.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Email" />
            <TextInput
              className="mr-2 ml-2"
              type="email"
              placeholder="name@company.com"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <Label value="Password" />
            <TextInput
              className="mr-2 ml-2"
              type="password"
              placeholder="Enter Your Password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <Button
            className="mr-5 ml-5"
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner
                  color="purple"
                  aria-label="Purple spinner example"
                  size="sm"
                />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        <OAuth />
        <div className="flex gap-2 text-sm mt-6 ml-6">
          <span> Don't Have An Account?</span>
          <Link to="/Signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
        {emailError && (
          <div
            className="mt-5 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="font-bold">Email Error!</span>
            <span className="block sm:inline">{emailError}</span>
          </div>
        )}
        {passwordError && (
          <div
            className="mt-5 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="font-bold">Password Error!</span>
            <span className="block sm:inline">{passwordError}</span>
          </div>
        )}
        {error &&
          !emailError &&
          !passwordError && ( // General error message
            <div
              className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="font-bold">OOPS!</span>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
        {successMessage && ( // Success message alert
          <div
            className="fixed top-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="font-bold">Success!</span>
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
