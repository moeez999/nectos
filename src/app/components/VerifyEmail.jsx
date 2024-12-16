"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function VerifyEmail() {
  const [timer, setTimer] = useState(90); // Timer in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Timer countdown logic
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only digits
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to the next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleResend = () => {
    setTimer(90);
    setIsResendDisabled(true);
    setCode(["", "", "", ""]);
    toast.info("Verification code resent!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");
    if (enteredCode.length === 4) {
      // Simulate successful verification
      const isVerified = enteredCode === "1234"; // Replace with actual logic
      if (isVerified) {
        toast.success("Verification successful!");
      } else {
        toast.error("Invalid code. Please try again.");
      }
    } else {
      toast.error("Please enter a 4-digit code.");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="flex justify-end w-full lg:w-1/2">
      <div className="px-4 md:px-8 w-full lg:w-[75%]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="../img/Nectos-Logo.svg" alt="Nectos" />
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="md:p-6 text-start">
            {/* Header */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Verify your email
            </h2>
            <p className="text-sm text-[#7D848D] mb-6">
              We just sent a verification code to <span>smith@gmail.com</span>
            </p>

            {/* Code Input */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-4 mb-6">
                {code.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={value}
                    maxLength={1}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-12 h-12 text-center text-xl bg-[#F7F7F9] font-semibold border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                className="w-full border border-[#053E42] bg-[#053E42] text-white p-3 rounded-[12px] hover:bg-white hover:text-[#053E42] transition"
              >
                Verify
              </button>
            </form>

            {/* Footer */}
            <div className="flex justify-between text-[#7D848D] text-sm mt-6">
              <button
                className={`hover:underline ${
                  isResendDisabled ? "text-gray-400" : "text-teal-700"
                }`}
                onClick={handleResend}
                disabled={isResendDisabled}
              >
                Resend code
              </button>
              <span>{formatTime(timer)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
