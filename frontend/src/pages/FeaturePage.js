import React from "react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-10">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Features</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-100">
            Discover the powerful tools that make Profile Manager the perfect
            solution for individuals and organizations.
          </p>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Secure Data",
              desc: "All profiles are encrypted and protected with enterprise-grade security.",
              img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
            },
            {
              title: "Multi-Profile Support",
              desc: "Create, manage, and organize multiple profiles seamlessly in one place.",
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              title: "Collaboration",
              desc: "Invite team members to collaborate, edit, and manage profiles together.",
              img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
            },
            {
              title: "Cross-Platform",
              desc: "Access your profiles anytime, anywhere, on any device.",
              img: "https://cdn-icons-png.flaticon.com/512/3208/3208707.png",
            },
            {
              title: "Fast & Reliable",
              desc: "Optimized for performance so profile updates happen instantly.",
              img: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
            },
            {
              title: "User-Friendly Design",
              desc: "Clean, modern interface designed for simplicity and ease of use.",
              img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience It?</h2>
        <p className="mb-6 text-lg">
          Start using Profile Manager today and simplify your profile management
          process.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default FeaturesPage;
