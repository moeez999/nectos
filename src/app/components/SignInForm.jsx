"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    const isSuccess = true; // Replace with actual logic
    if (isSuccess) {
      toast.success("Sign in successful!");
    } else {
      toast.error("Invalid email or password.");
    }
  };
  return (
    <div className="flex justify-end w-full lg:w-1/2">
      <div className="px-4 md:px-8 w-full lg:w-[75%]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="../img/Nectos-Logo.svg" alt="Nectos" />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-[#1B1E28] md:text-center mb-2">
          Sign in now
        </h2>
        <p className="text-sm text-[#7D848D]  md:text-center mb-6">
          Please sign in to continue our app
        </p>

        {/* Sign In Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="www.smith@gmail.com"
              className="w-full p-3 border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400 text-sm bg-[#C4F4E0] text-[#1B1E28]"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              className="w-full p-3 border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400 text-sm bg-[#C4F4E0] text-[#1B1E28]"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src="../img/eye.svg" alt="eye" />
              ) : (
                <img src="../img/eye.svg" alt="eye" />
              )}
            </button>
          </div>

          {/* Forget Password */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-[#053E42] hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full border border-[#053E42] bg-[#053E42] text-white p-3 rounded-[12px] hover:bg-white hover:text-[#053E42] transition"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-[#7D848D] mt-4 text-center">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-[#053E42] font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>

        {/* Or Connect */}
        <div className="text-center my-4 text-[#7D848D] text-sm">
          Or connect
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="flex items-center justify-center w-full p-3 border rounded-[12px] hover:bg-gray-100 transition bg-[#F7F7F9] gap-2">
            <img src="../img/google.svg" alt="google" />
            <span className="text-sm font-semibold text-[#7D848D]">
              Continue with Google
            </span>
          </button>
          <button className="flex items-center justify-center w-full p-3 border rounded-[12px] hover:bg-gray-100 transition bg-[#F7F7F9] gap-2">
            <img src="../img/apple.svg" alt="apple" />
            <span className="text-sm font-semibold text-[#7D848D]">
              Continue with Apple
            </span>
          </button>
          <button className="flex items-center justify-center w-full p-3 border rounded-[12px] hover:bg-gray-100 transition bg-[#F7F7F9] gap-2">
            <img src="../img/fb-2.svg" alt="facebook" />
            <span className="text-sm font-semibold text-[#7D848D]">
              Continue with Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
