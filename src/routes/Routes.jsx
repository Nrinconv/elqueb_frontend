import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Offers from "../pages/offers/Offers";
import AboutUs from "../pages/about-us/AboutUs";
import Login from "../pages/login/Login";

export default function PrincipalRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
