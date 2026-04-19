import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
          <span className="text-violet-600">■</span> CB's News Alert App
        </h1>

        
        <h2 className="text-5xl font-bold mb-3">
          Create Account
        </h2>

        <p className="text-gray-500 text-lg mb-10">
          We will give news alert to the users
        </p>

     
        <form onSubmit={handleSubmit} className="space-y-5">

       
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg outline-none"
              required
            />
          </div>

          
          <div>
            <label className="block mb-2 font-medium">
              Email Address
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

       
          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg outline-none"
              required
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-violet-700"
          >
            Create Account
          </button>

        </form>

        
        <p className="text-center mt-8 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-700 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

      
      <div className="bg-[#b497e7] flex items-center justify-center">

        <div className="w-[500px] h-[500px] bg-white/10 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">
          Login to get News Alerts from us
        </div>

      </div>
    </div>
  );
}

export default Register;