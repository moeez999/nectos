"use client";

import { toast } from "react-toastify";
import { useState } from "react";

export default function DetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    company: "",
    location: "",
    email: "",
    phoneNumber: "",
    whatsapp: "",
    telegram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Details submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Basic Details */}
      <h3 className="text-lg font-semibold text-[#1B1E28]">Basic Details</h3>
      <p className="text-sm text-[#7D848D]">
        Lorem ipsum dolor sit amet consectetur. Molestie pellentesque a augue
        tellus id massa arcu.
      </p>
      <div className="space-y-3">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Job Title (Optional)
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            placeholder="Job Title (Optional)"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Company/Agency (Optional)
          </label>
          <input
            id="company"
            name="company"
            placeholder="Company/Agency (Optional)"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Location (Optional)
          </label>
          <input
            id="location"
            name="location"
            placeholder="Location (Optional)"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
          />
        </div>
      </div>

      {/* Contact Details */}
      <h3 className="text-lg font-semibold text-[#1B1E28]">Contact Details</h3>
      <p className="text-sm text-[#7D848D]">
        Lorem ipsum dolor sit amet consectetur. Molestie pellentesque a augue
        tellus id massa arcu.
      </p>
      <div className="space-y-3">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3">🇺🇸</span>
            <input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter Your Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 pl-12 border rounded-lg bg-[#C4F4E0] text-[#1B1E28]"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            WhatsApp Number (Optional)
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            placeholder="Your WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="telegram"
            className="block text-sm font-medium text-[#1B1E28]"
          >
            Telegram Account (Optional)
          </label>
          <input
            id="telegram"
            name="telegram"
            placeholder="Your Telegram Account"
            value={formData.telegram}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-[#C4F4E0] text-[#1B1E28] outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-[#053E42] text-white rounded-lg hover:bg-white hover:text-[#053E42] border border-[#053E42] transition"
      >
        Continue
      </button>
    </form>
  );
}
