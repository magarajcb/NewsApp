import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login=()=> {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

  };

  return (
    <div className="min-h-screen grid grid-cols-2">

     
      <div className="bg-white flex flex-col justify-center px-24">

        <h1 className="text-4xl font-bold mb-16">
          <span className="text-violet-600">■</span> TheCubeFactory
        </h1>

        
        <h2 className="text-5xl font-bold mb-3">
          Welcome
        </h2>

        <p className="text-gray-500 text-lg mb-10">
          Please enter your details
        </p>

        
        <form onSubmit={handleSubmit} className="space-y-6">

         
          <div>
            <label className="block mb-2 font-medium">
              Email address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg outline-none"
              required
            />
          </div>

          
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg outline-none"
              required
            />
          </div>

          
          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember for 30 days
            </label>

            <a
              href="#"
              className="text-violet-700 font-medium"
            >
              Forgot password
            </a>
          </div>

         
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-violet-700"
          >
            Sign in
          </button>

          {/* Google Button */}
          <button
            type="button"
            className="w-full border py-4 rounded-lg flex items-center justify-center gap-3 text-lg font-medium"
          >
            <FaGoogle />
            Sign in with Google
          </button>

        </form>

        
        <p className="text-center mt-8 text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-violet-700 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>

      
      <div className="bg-[#b497e7] flex items-center justify-center">

        <div className="text-center">
          <div className="w-[500px] h-[500px] bg-white/10 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">
           Welcome back to my News App
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;