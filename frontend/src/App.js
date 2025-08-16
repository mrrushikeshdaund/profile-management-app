import "./App.css";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FeaturePage from "./pages/FeaturePage";
import AboutUsPage from "./pages/AboutUsPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import BridePage from "./pages/BridePage";
import GroomPage from "./pages/GroomPage";

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
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={<ProfilePage />} />
              <Route path="bride" element={<BridePage />} />
              <Route path="groom" element={<GroomPage />} />
            </Route>
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
