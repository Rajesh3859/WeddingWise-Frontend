import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux"
import { signInFailure, signInStart, signInSuccess } from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";



const Signin = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {loading , error:errorMessage} = useSelector((state)=>state.user)
 const navigate = useNavigate();
  const handleChange = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password){
        return dispatch(signInFailure(alert("please fill out the fields")));
    }
    try {
        dispatch(signInStart())
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
        if(data.success === false){
            return dispatch(signInFailure(alert(data.message)))
        }
        if(response.ok){
            localStorage.setItem('Token',data.token)
            dispatch(signInSuccess(data))
            navigate('/Home');
        }
    } catch (error) {
        dispatch(signInFailure((error.message)))
    }
  };

  return (
    <div className="min-h-screen mt-50 ml-10 mr-10">
      <div>
        <div>
          <div className=" text-3xl font-semibold dark:text-white">
            <span className=" px-2 py-1 bg-gradient-to-r from bg-yellow-600 via-orange-500 to from-red-600 text-transparent bg-clip-text">
              WeddingWise
            </span>
          </div>
          <p className="text-m mt-6 ">
            You can sign up with your Email and password or you can use
            Google.This is an capstone project.
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
          <OAuth />
        </form>
        <div className="flex gap-2 text-sm mt-6 ml-6">
          <span>Dont Have An Account ?</span>
          <Link to="/Signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
        {errorMessage && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">OOPS!</span>
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Signin;