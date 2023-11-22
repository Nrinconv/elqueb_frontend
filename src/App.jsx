import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PrincipalRoutes from "./routes/Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/*" element={<PrincipalRoutes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
