import "./App.css";
import "./styles/style.scss";

import Footer from "./components/Common-components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login-page/Login";
import Register from "./components/Register-page/Register";
import NotFound from "./pages/NotFound";
import Iphone from "./pages/Iphones";
import Ipad from "./pages/Ipads";
import Mac from "./pages/Macs";
import Applewatch from "./pages/Applewatches";

import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import ProductPage from "./components/Product-page/Product";
import Verification from "./components/Register-page/Verification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/verify" element={<Verification></Verification>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/iPhones" element={<Iphone></Iphone>}></Route>
        <Route path="/iPads" element={<Ipad></Ipad>}></Route>
        <Route path="/macs" element={<Mac></Mac>}></Route>
        <Route path="/applewatches" element={<Applewatch></Applewatch>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/product" element={<ProductPage></ProductPage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
