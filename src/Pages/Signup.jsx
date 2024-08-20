import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import OAuth from "../Components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("please fill out the fields");
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
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (response.ok) {
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
          <div className=" text-3xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from bg-yellow-600 via-orange-500 to from-red-600 text-transparent bg-clip-text">
              WeddingWise
            </span>
          </div>
          <p className="text-m mt-6">
            You can sign up with your Email and password or you can use
            Google.This is an capstone project.
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
            placeholder="Enter your User Name"
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
            "Sign Up"
          )}
        </Button>
        <OAuth />
        <div>
          <Link to="/Signin">
            <span> Have an account Already ?</span>{" "}
            <a className="font-semibold text-blue-700">Signin</a>
          </Link>
        </div>
        {errorMessage && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">OOPS!</span>
            {errorMessage}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Signup;
