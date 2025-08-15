import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token (adjust to your authentication method)
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / App Name */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">
          Profile Manager
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/profiles" className="hover:text-gray-300">
            Profiles
          </Link>
          <Link to="/create-profile" className="hover:text-gray-300">
            Create Profile
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
