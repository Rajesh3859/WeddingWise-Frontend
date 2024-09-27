import {  Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { HiInformationCircle } from "react-icons/hi";
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
    <div className="min-h-screen mt-50 ml-10 mr-10">
      <div>
        <div>
          <div className="text-3xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 text-transparent bg-clip-text">
              WeddingWise
            </span>
          </div>
          <p className="text-m mt-6">
            You can sign up with your Email and password or you can use Google.
            This is a capstone project.
          </p>
        </div>
      </div>
      <br />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Label value="Username" />
          <TextInput
            className="mr-2 ml-2"
            type="text"
            placeholder="Enter your Username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Email" />
          <TextInput
            className="mr-2 ml-2"
            type="email"
            placeholder="name@company.com"
            id="email"
            onChange={handleChange}
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
          />
        </div>
        <Button
          className="mr-5 ml-5"
          gradientDuoTone="redToYellow"
          type="submit"
          disabled={loading}
          aria-label="Sign up button"
        >
          {loading ? (
            <>
              <Spinner color="purple" aria-label="Loading spinner" size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
        <OAuth />
        <div>
          <Link to="/Signin">
            <span>Have an account already?</span>{" "}
            <span className="font-semibold text-blue-700">Signin</span>
          </Link>
        </div>
        {error && (
          <div
            className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="font-bold">OOPS!</span>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
