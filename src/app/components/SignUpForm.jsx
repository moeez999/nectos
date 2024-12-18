"use client";

import { toast } from "react-toastify";

export default function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sign-up success
    const isSuccess = true; // Replace with actual logic
    if (isSuccess) {
      toast.success("Sign-up successful!");
    } else {
      toast.error("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-end w-full lg:w-1/2">
      <div className="px-4 md:px-8 w-full lg:w-[75%]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="../img/Nectos-Logo.svg" alt="Nectos" />
        </div>
        <div className="mt-4  lg:mt-8 2xl:mt-16 flex flex-col xl:gap-2 2xl:gap-4">
          {/* Heading */}
          <h2 className="text-xl font-semibold text-[#1B1E28] md:text-center mb-2">
            Sign up now
          </h2>
          <p className="text-sm text-[#7D848D] md:text-center xl:mt-3 2xl:mb-6">
            Please fill the details and create account
          </p>

          {/* Sign-Up Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="www.smith@gmail.com"
                className="w-full p-3 border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400 text-sm bg-[#C4F4E0] text-[#1B1E28]"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full border border-[#053E42] bg-[#053E42] text-white p-3 rounded-[12px] hover:bg-white hover:text-[#053E42] transition"
            >
              Continue
            </button>
          </form>

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
          <p className="text-sm text-[#7D848D] mt-1 2xl:mt-4 text-center">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-[#053E42] font-semibold hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
