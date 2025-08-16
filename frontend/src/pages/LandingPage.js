import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen pt-10 flex flex-col bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
          {/* Left Side - Text */}
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Effortless Profile Management
            </h1>
            <p className="text-lg mb-6 text-gray-100">
              Securely create, manage, and organize profiles from anywhere.
              Whether you’re a business, school, or individual — our platform
              makes it easy.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/profiles"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
              >
                View Profiles
              </Link>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile Management"
            className="w-72 md:w-96 mt-8 md:mt-0 drop-shadow-lg"
          />
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">What is Profile Manager?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Profile Manager is an all-in-one solution to create, update, and
          maintain personal or organizational profiles with ease. Our system is
          designed to handle multiple profiles, keep data secure, and allow
          seamless collaboration between team members.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
          alt="About"
          className="w-48 mx-auto mt-8"
        />
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                alt="Secure"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p>
                Your data is encrypted and stored with top-tier security
                protocols to ensure maximum protection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Easy to Use"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p>
                Our clean, intuitive design ensures that even non-technical
                users can manage profiles without hassle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                alt="Fast"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p>
                Optimized performance ensures that profile creation and updates
                happen in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              feedback:
                "Profile Manager has saved us hours every week! Managing our clients’ profiles has never been easier.",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sarah Smith",
              feedback:
                "I love how simple and intuitive the interface is. I was able to set up my team in minutes.",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "David Brown",
              feedback:
                "The security and speed are unmatched. Highly recommend for any organization!",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-600 mb-4">
                “{testimonial.feedback}”
              </p>
              <h4 className="font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Start Managing Your Profiles Today
        </h2>
        <p className="mb-6 text-lg">
          Sign up now and take control of your data in a secure and efficient
          way.
        </p>
        <Link
          to="/login"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Profile Manager
            </h3>
            <p>
              Manage your profiles with ease and security. Accessible anywhere,
              anytime.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/profiles" className="hover:underline">
                  View Profiles
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:underline">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p>Email: support@profilemanager.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Profile Manager. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
