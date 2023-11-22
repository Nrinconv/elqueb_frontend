import "./App.css";
import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AccessibilityBar from "./components/AccessibilityBar/AccessibilityBar";

import PrincipalRoutes from "./routes/Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <AccessibilityBar/>
      <Routes>
        <Route path="/*" element={<PrincipalRoutes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
