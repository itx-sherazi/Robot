import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen p-4 bg-black text-cyan-400 border-cyan-400">
      {/* Left Side Image - Hidden on Small Screens */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-5">
        <img
          src="https://image.pollinations.ai/prompt/Futuristic,cyborg,face,with,glowing,eyes?width=512&height=512&nologo=true"  // Apni image ka path yahan lagao
          alt="Cyberpunk AI"
          className="max-w-full rounded-lg shadow-lg border border-cyan-400"
        />
      </div>

      {/* Right Side Login Form */}
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center px-6">
        <h1 className="text-4xl font-bold text-cyan-300">Mentor</h1>
        <p className="text-sm italic text-cyan-500 mb-4">Admin Dashboard</p>

        <h2 className="text-2xl mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full max-w-sm p-3 mb-4 border border-cyan-400 bg-black text-white rounded-md"
        />
        <input
          type="password"
          placeholder="********"
          className="w-full max-w-sm p-3 mb-4 border border-cyan-400 bg-black text-white rounded-md"
        />

        <button className="w-full max-w-sm p-3 bg-cyan-400 text-black font-bold rounded-md hover:bg-cyan-300">
          Login
        </button>

        <p className="mt-3 text-sm text-cyan-500 cursor-pointer hover:underline">
          Forgot password?
        </p>
        <p className="text-sm mt-2 text-cyan-500">
          Only admins with an account! <span className="text-cyan-300 cursor-pointer hover:underline"><Link to='/register'>Sign Up</Link></span>
        </p>

        <p className="text-xs text-cyan-500 mt-6">
          Terms of use. <span className="underline cursor-pointer">Privacy policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
