"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ClaimLink() {
  const [link, setLink] = useState(""); // State to track the input value
  const [loading, setLoading] = useState(false); // State for loading feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty input
    if (!link.trim()) {
      toast.error("Please enter a valid link.");
      return;
    }

    setLoading(true);

    try {
      // Simulate an API call or link submission
      const isSuccess = await new Promise((resolve) =>
        setTimeout(() => resolve(true), 1500)
      );

      if (isSuccess) {
        toast.success("Link claimed successfully!");
      } else {
        toast.error("Failed to claim the link. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end w-full lg:w-1/2">
      <div className="px-4 md:px-8 w-full lg:w-[75%]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="../img/Nectos-Logo.svg" alt="Nectos" />
        </div>
        <div className="mt-4 md:mt-16 flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-xl font-semibold text-[#1B1E28]  mb-2">
            First, Claim your link
          </h2>
          <p className="text-sm text-[#7D848D]  mb-6">
            Please fill the details and create an account
          </p>

          {/* Sign-Up Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nectos.com/smith012"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full p-3 border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400 text-sm bg-[#C4F4E0] text-[#1B1E28]"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full border border-[#053E42] p-3 rounded-[12px] transition ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#053E42] text-white hover:bg-white hover:text-[#053E42]"
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
