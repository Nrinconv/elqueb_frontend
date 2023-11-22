import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Offers from "../pages/offers/Offers";
import AboutUs from "../pages/about-us/AboutUs";
import Login from "../pages/login/Login";
import AddOffer from "../pages/addOffer/addOffer";
import RevisionOffers from "../pages/RevisionOffers/RevisionOffers";
import MyOffers from "../pages/myOffers/myOffers";
import Statistics from "../pages/Statistics/Statistics";
import NewsPage from "../pages/NewsPage/NewsPage";

export default function PrincipalRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-offer" element={<AddOffer />} />
        <Route path="/revision-offers" element={<RevisionOffers />} />
        <Route path="/my-offers" element={<MyOffers />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/news" element={<NewsPage />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
