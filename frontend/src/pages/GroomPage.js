import React from "react";
import { Heart, User, Calendar, MapPin, Phone } from "lucide-react";

const GroomPage = () => {
  const groom = {
    name: "Rahul Verma",
    age: 28,
    location: "Mumbai, India",
    contact: "+91 91234 56789",
    bio: "Software engineer, fitness enthusiast, and traveler. Looking for a loving and understanding partner.",
    interests: ["Fitness", "Traveling", "Technology", "Movies"],
  };

  return (
    <div className="space-y-6 p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        <Heart className="text-blue-500" /> Groom Profile
      </h2>

      {/* Custom Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-blue-200 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600">
          {groom.name.charAt(0)}
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <User size={20} className="text-blue-500" />
            {groom.name}
          </h3>
          <p className="text-gray-600 flex items-center gap-2">
            <Calendar size={18} /> Age: {groom.age}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <MapPin size={18} /> {groom.location}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <Phone size={18} /> {groom.contact}
          </p>
          <p className="text-gray-700">{groom.bio}</p>

          {/* Interests */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Interests:</h4>
            <div className="flex flex-wrap gap-2">
              {groom.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
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

export default GroomPage;
