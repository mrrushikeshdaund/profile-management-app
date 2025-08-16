import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / App Name */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-90 transition"
        >
          <div className="bg-white p-1 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#2563eb"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.29.534 6.121 1.482M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-wide">
            Profile<span className="text-yellow-300">Manager</span>
          </span>
        </Link>

        {/* Hamburger button (Mobile) */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-blue-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/profiles" className="hover:text-gray-300">
                Profiles
              </Link>
              <Link to="/create-profile" className="hover:text-gray-300">
                Create Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
              <Link to="/features" className="hover:text-gray-300">
                Features
              </Link>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 space-y-3">
          {isLoggedIn ? (
            <>
              <Link to="/" className="block hover:text-gray-300">
                Home
              </Link>
              <Link to="/profiles" className="block hover:text-gray-300">
                Profiles
              </Link>
              <Link to="/create-profile" className="block hover:text-gray-300">
                Create Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/about" className="block hover:text-gray-300">
                About Us
              </Link>
              <Link to="/features" className="block hover:text-gray-300">
                Features
              </Link>
              <Link
                to="/login"
                className="block bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-yellow-400 text-blue-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default HeaderBar;
