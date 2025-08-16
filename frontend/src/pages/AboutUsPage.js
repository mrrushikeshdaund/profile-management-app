import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-10">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-100">
            Learn more about our mission, values, and the team behind Profile
            Manager.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At{" "}
          <span className="font-semibold text-blue-600">Profile Manager</span>,
          our mission is to make profile management seamless, secure, and
          accessible to everyone. Whether you’re an individual, a school, or an
          enterprise, we provide the tools you need to organize, secure, and
          collaborate with ease.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Security",
                desc: "We prioritize top-notch encryption and safety measures to ensure your data stays secure at all times.",
                img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
              },
              {
                title: "Simplicity",
                desc: "We design intuitive and easy-to-use interfaces so anyone can manage profiles effortlessly.",
                img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
              },
              {
                title: "Performance",
                desc: "We focus on speed and reliability, ensuring profile updates happen in seconds.",
                img: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We’re a passionate group of developers, designers, and innovators
          dedicated to creating a powerful and user-friendly platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rushi Daund",
              role: "Founder & Full-Stack Developer",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Sarah Lee",
              role: "UI/UX Designer",
              img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              name: "David Kim",
              role: "Backend Engineer",
              img: "https://randomuser.me/api/portraits/men/40.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
        <p className="mb-6 text-lg">
          Be a part of the Profile Manager community and make managing data
          effortless.
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

export default AboutUsPage;
