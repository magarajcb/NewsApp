import React, { useState } from "react";

function Preferences() {
  const [preferences, setPreferences] = useState({
    category: "",
    frequency: "",
    emailAlerts: false,
    language: "English",
    breakingNews: false,
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPreferences({
      ...preferences,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(preferences);

    // Backend API will be connected later
  };

  return (
    <div className="min-h-screen bg-[#f8f6fb] flex justify-center items-center p-6">

      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-lg p-10">

       
        <h1 className="text-3xl font-bold mb-8">
          News Preferences
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          
          <div>
            <label className="block font-semibold mb-3">
              Favorite Category
            </label>

            <select
              name="category"
              value={preferences.category}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none"
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Politics">Politics</option>
              <option value="Business">Business</option>
              <option value="Health">Health</option>
            </select>
          </div>

       
          <div>
            <label className="block font-semibold mb-3">
              Notification Frequency
            </label>

            <div className="flex gap-6">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="frequency"
                  value="Instant"
                  onChange={handleChange}
                />
                Instant
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="frequency"
                  value="Daily"
                  onChange={handleChange}
                />
                Daily
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="frequency"
                  value="Weekly"
                  onChange={handleChange}
                />
                Weekly
              </label>

            </div>
          </div>

      
          <div className="flex items-center justify-between">
            <label className="font-semibold">
              Email Alerts
            </label>

            <input
              type="checkbox"
              name="emailAlerts"
              checked={preferences.emailAlerts}
              onChange={handleChange}
            />
          </div>

   
          <div>
            <label className="block font-semibold mb-3">
              Preferred Language
            </label>

            <select
              name="language"
              value={preferences.language}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none"
            >
              <option value="English">English</option>
              {/* <option value="Tamil">Tamil</option>
              <option value="Hindi">Hindi</option> */}
            </select>
          </div>

       
          <div className="flex items-center justify-between">
            <label className="font-semibold">
              Breaking News Alerts
            </label>

            <input
              type="checkbox"
              name="breakingNews"
              checked={preferences.breakingNews}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white p-4 rounded-xl font-semibold hover:bg-violet-700"
          >
            Save Preferences
          </button>

        </form>

      </div>
    </div>
  );
}

export default Preferences;