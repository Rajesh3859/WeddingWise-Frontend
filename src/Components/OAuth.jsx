import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signInFailure, signInSuccess } from "../Redux/Slice/userSlice";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../fireBase";



const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async() => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt:"select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const res = await fetch(
        "https://weddingwise-backend-gda8.onrender.com/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            profilePic: result.user.photoURL,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        
        dispatch(signInSuccess(data));
        navigate("/Home");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <Button
      className="mr-5 ml-5 mt-5"
       type="button"
      gradientDuoTone="purpleToPink"
      onClick={handleSubmit}
    >
      <AiFillGoogleCircle className="w-6 h-5 mr-3" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
