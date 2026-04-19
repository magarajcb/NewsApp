import React, { useState } from "react";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: "Maha Raj",
    email: "maha@email.com",
    category: "Technology",
    frequency: "Instant",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Update
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(profileData);

    // Backend API integration later
  };

  return (
    <div className="min-h-screen bg-[#f8f6fb] flex justify-center items-center p-6">

      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-lg p-10">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-center">
          User Profile
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none"
            />
          </div>

          {/* Preferred Category */}
          <div>
            <label className="block font-semibold mb-2">
              Preferred Category
            </label>

            <input
              type="text"
              name="category"
              value={profileData.category}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none"
            />
          </div>

          {/* Frequency */}
          <div>
            <label className="block font-semibold mb-2">
              Notification Frequency
            </label>

            <input
              type="text"
              name="frequency"
              value={profileData.frequency}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white p-4 rounded-xl font-semibold hover:bg-violet-700"
          >
            Update Profile
          </button>

        </form>

      </div>
    </div>
  );
}

export default Profile;