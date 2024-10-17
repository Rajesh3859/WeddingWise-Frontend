import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FooterCom from "./Components/Footer";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import SubBrands from "./Pages/SubBrands";
import Services from "./Pages/Services";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Services/:id" element={<Services />} />
        <Route path="/SubBrands/:id" element={<SubBrands />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
