import "./App.css";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FeaturePage from "./pages/FeaturePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <main className="pt-10 container mx-auto p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/features" element={<FeaturePage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
