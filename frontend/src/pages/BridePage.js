import React from "react";
import { Heart, User, Calendar, MapPin, Phone } from "lucide-react";

const BridePage = () => {
  const brides = [
    {
      name: "Priya Sharma",
      age: 25,
      location: "Pune, India",
      contact: "+91 98765 43210",
      bio: "Passionate about art, travel, and technology. Looking for a caring and supportive partner.",
      interests: ["Traveling", "Cooking", "Music", "Reading"],
    },
    {
      name: "Ananya Verma",
      age: 27,
      location: "Mumbai, India",
      contact: "+91 91234 56789",
      bio: "Loves fitness, fashion, and exploring new cuisines.",
      interests: ["Fitness", "Dancing", "Cooking"],
    },
    {
      name: "Sneha Patel",
      age: 24,
      location: "Delhi, India",
      contact: "+91 99887 66554",
      bio: "Creative soul who enjoys photography and designing.",
      interests: ["Photography", "Traveling", "Design"],
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-pink-600 flex items-center gap-2">
        <Heart className="text-pink-500" /> Bride Profiles
      </h2>

      {/* Profiles Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brides.map((bride, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl border border-pink-200 p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
          >
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 rounded-full bg-pink-200 flex items-center justify-center text-3xl font-bold text-pink-600">
              {bride.name.charAt(0)}
            </div>

            {/* Info Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
                <User size={18} className="text-pink-500" />
                {bride.name}
              </h3>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <Calendar size={16} /> Age: {bride.age}
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <MapPin size={16} /> {bride.location}
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <Phone size={16} /> {bride.contact}
              </p>
              <p className="text-gray-700 text-sm">{bride.bio}</p>
            </div>

            {/* Interests */}
            <div className="mt-3">
              <h4 className="font-medium text-gray-800 mb-2">Interests:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {bride.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridePage;
