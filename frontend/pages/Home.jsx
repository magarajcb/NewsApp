import React from "react";
import {
  FaHome,
  FaCompass,
  FaBookmark,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaSearch,
} from "react-icons/fa";

function Home() {
  const channels = [
    "FOX NEWS",
    "BBC NEWS",
    "CNN NEWS",
    "AL JAZEERA",
    "NDTV",
    "ABC NEWS",
  ];

  const headlines = [
    "Breaking Political News Update",
    "Technology Market Trends Today",
    "Sports Championship Highlights",
    "Finance and Business Report",
    "Health and Science Discoveries",
    "International Affairs Update",
  ];

  return (
    <div className="min-h-screen bg-[#f8f6fb] p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-6 grid grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="col-span-3 border-r border-gray-200 pr-4">

          <h1 className="text-2xl font-bold mb-8">
            DAILY <span className="text-violet-600">NEWS</span>
          </h1>

          <div className="space-y-3">

            {/* Home */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-violet-100 text-violet-700 font-semibold cursor-pointer">
              <FaHome />
              Home
            </div>

            {/* Explore */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              <FaCompass />
              Explore
            </div>

            {/* Saved */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              <FaBookmark />
              Saved
            </div>

            {/* Messages */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              <FaEnvelope />
              Messages
            </div>

            {/* Settings */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              <FaCog />
              Settings
            </div>

            {/* Logout */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              <FaSignOutAlt />
              Logout
            </div>

          </div>

          {/* Premium Card */}
          <div className="mt-10 bg-violet-50 p-5 rounded-2xl">
            <h2 className="font-semibold text-lg">
              Subscribe Premium
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Get breaking news alerts and exclusive updates.
            </p>

            <button className="w-full mt-4 bg-violet-600 text-white p-3 rounded-xl font-medium hover:bg-violet-700">
              Subscribe
            </button>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-9">

          {/* Top Navbar */}
          <div className="flex justify-between items-center mb-8">

            {/* Search */}
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl w-[350px]">
              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search news..."
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">

              <button className="bg-violet-600 text-white p-3 rounded-xl hover:bg-violet-700">
                <FaBell />
              </button>

              <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"></div>

            </div>
          </div>

          {/* Explore Channels */}
          <div className="mb-8">

            <h2 className="text-xl font-bold mb-4">
              Explore Channels
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center font-medium hover:shadow-sm cursor-pointer"
                >
                  {channel}
                </div>
              ))}
            </div>

          </div>

          {/* Today's Headlines */}
          <div>

            <h2 className="text-xl font-bold mb-4">
              Today's Headlines
            </h2>

            <div className="grid grid-cols-3 gap-5">
              {headlines.map((news, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                >
                  {/* Image Placeholder */}
                  <div className="h-32 bg-gray-200 rounded-xl mb-4"></div>

                  <h3 className="font-semibold text-gray-800">
                    {news}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Updated • 2:00 PM
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;