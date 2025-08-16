import React, { useState, useEffect } from "react";
import { User, Mail, MapPin, Phone, Save, Upload, Camera } from "lucide-react";

const ProfilePage = () => {
  // Mock current user (replace with API call in real app)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    location: "Pune, India",
    bio: "I love coding, traveling, and exploring new ideas!",
    profilePic: "", // profile picture
    portfolio: [], // portfolio images
  });

  const [formData, setFormData] = useState(user);
  const [preview, setPreview] = useState("");
  const [portfolioPreview, setPortfolioPreview] = useState([]);

  useEffect(() => {
    setFormData(user);
    setPreview(user.profilePic);
    setPortfolioPreview(user.portfolio);
  }, [user]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Profile picture upload
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFormData((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  // Portfolio image upload
  const handlePortfolioUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setPortfolioPreview((prev) => [...prev, ...newImages]);
    setFormData((prev) => ({
      ...prev,
      portfolio: [...prev.portfolio, ...newImages],
    }));
  };

  // Save updated profile
  const handleSave = () => {
    console.log("Updated Profile:", formData);
    setUser(formData);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <User className="text-blue-500" /> Update Profile
      </h2>

      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <img
              src={preview || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-blue-200 object-cover"
            />
            <label
              htmlFor="profilePic"
              className="absolute bottom-1 right-1 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow hover:bg-blue-700"
            >
              <Camera size={16} />
            </label>
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicUpload}
            />
          </div>
          <p className="text-sm text-gray-500">Upload Profile Picture</p>
        </div>

        {/* Profile Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 flex items-center gap-1">
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1 flex items-center gap-1">
              <Phone size={16} /> Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 mb-1 flex items-center gap-1">
              <MapPin size={16} /> Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
        </div>

        {/* Portfolio Upload */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Portfolio Images
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            id="portfolioUpload"
            onChange={handlePortfolioUpload}
          />
          <label
            htmlFor="portfolioUpload"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition gap-2"
          >
            <Upload size={16} /> Upload Images
          </label>

          {/* Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
            {portfolioPreview.length > 0 ? (
              portfolioPreview.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Portfolio-${index}`}
                  className="w-full h-32 object-cover rounded-lg shadow"
                />
              ))
            ) : (
              <p className="text-sm text-gray-500">
                No portfolio uploaded yet.
              </p>
            )}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
        >
          <Save size={18} /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
