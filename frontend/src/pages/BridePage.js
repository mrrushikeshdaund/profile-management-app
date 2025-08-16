import React from "react";
import { Heart, User, Calendar, MapPin, Phone } from "lucide-react";

const BridePage = () => {
  const bride = {
    name: "Priya Sharma",
    age: 25,
    location: "Pune, India",
    contact: "+91 98765 43210",
    bio: "Passionate about art, travel, and technology. Looking for a caring and supportive partner.",
    interests: ["Traveling", "Cooking", "Music", "Reading"],
  };

  return (
    <div className="space-y-6 p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-pink-600 flex items-center gap-2">
        <Heart className="text-pink-500" /> Bride Profile
      </h2>

      {/* Custom Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-pink-200 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full bg-pink-200 flex items-center justify-center text-4xl font-bold text-pink-600">
          {bride.name.charAt(0)}
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <User size={20} className="text-pink-500" />
            {bride.name}
          </h3>
          <p className="text-gray-600 flex items-center gap-2">
            <Calendar size={18} /> Age: {bride.age}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <MapPin size={18} /> {bride.location}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <Phone size={18} /> {bride.contact}
          </p>
          <p className="text-gray-700">{bride.bio}</p>

          {/* Interests */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Interests:</h4>
            <div className="flex flex-wrap gap-2">
              {bride.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridePage;
