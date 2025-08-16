import React from "react";
import { Heart, User, Calendar, MapPin, Phone } from "lucide-react";

const GroomPage = () => {
  const grooms = [
    {
      name: "Rahul Verma",
      age: 28,
      location: "Mumbai, India",
      contact: "+91 91234 56789",
      bio: "Software engineer, fitness enthusiast, and traveler. Looking for a loving and understanding partner.",
      interests: ["Fitness", "Traveling", "Technology", "Movies"],
    },
    {
      name: "Amit Singh",
      age: 30,
      location: "Delhi, India",
      contact: "+91 98765 12345",
      bio: "Entrepreneur passionate about innovation, startups, and helping people grow.",
      interests: ["Startups", "Cricket", "Music", "Adventure Sports"],
    },
    {
      name: "Karan Mehta",
      age: 27,
      location: "Bangalore, India",
      contact: "+91 99887 66554",
      bio: "Foodie, dog lover, and travel blogger. Searching for a partner who loves exploring life.",
      interests: ["Travel Blogging", "Food", "Photography", "Pets"],
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        <Heart className="text-blue-500" /> Groom Profiles
      </h2>

      {/* Grid of Groom Profiles */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {grooms.map((groom, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl border border-blue-200 p-6 flex flex-col items-center gap-4 hover:shadow-xl transition"
          >
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-bold text-blue-600">
              {groom.name.charAt(0)}
            </div>

            {/* Info Section */}
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
                <User size={18} className="text-blue-500" />
                {groom.name}
              </h3>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <Calendar size={16} /> Age: {groom.age}
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <MapPin size={16} /> {groom.location}
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <Phone size={16} /> {groom.contact}
              </p>
              <p className="text-gray-700 text-sm">{groom.bio}</p>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-2 justify-center">
              {groom.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroomPage;
