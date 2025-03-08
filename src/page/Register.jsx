import React from "react";
import "tailwindcss/tailwind.css";

const Register = () => {
  return (
    <div className="flex min-h-screen bg-black text-cyan-400">
      {/* Left Side Image (Hidden on Small Screens) */}
      <div className="hidden md:block w-1/2 relative overflow-hidden">
        <img
          src="https://s1.1zoom.me/big0/911/326824-aliya06.jpg"
          alt="Anime Character"
          className="w-full h-full object-cover border-r-4 border-cyan-400 shadow-lg"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md border border-cyan-400">
          <h1 className="text-3xl font-bold text-center text-cyan-400 mb-2">
            Trade Circuit EA
          </h1>
          <p className="text-center italic text-cyan-200">_New Admin_</p>

          <h2 className="text-2xl font-semibold text-center mt-4">Sign Up</h2>
          
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 bg-black border border-cyan-400 rounded-md text-cyan-200 focus:ring focus:ring-cyan-500"
            />
            <input
              type="text"
              placeholder="Display name, e.g. Today Forex Trader"
              className="w-full p-3 bg-black border border-cyan-400 rounded-md text-cyan-200 focus:ring focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-black border border-cyan-400 rounded-md text-cyan-200 focus:ring focus:ring-cyan-500"
            />
            <input
              type="tel"
              placeholder="Contact number"
              className="w-full p-3 bg-black border border-cyan-400 rounded-md text-cyan-200 focus:ring focus:ring-cyan-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-black border border-cyan-400 rounded-md text-cyan-200 focus:ring focus:ring-cyan-500"
            />
            <button className="w-full py-3 bg-cyan-400 text-black font-bold rounded-md hover:bg-cyan-500 transition">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
