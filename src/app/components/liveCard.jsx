import React from "react";
// import {
//   FaPhone,
//   FaWhatsapp,
//   FaEnvelope,
//   FaGlobe,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";

const LiveCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-t-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src="../img/live-bg.png"
          alt="Background"
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <img
              src="../img/profileimg-2.png" // Replace with an actual image
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
            {/* Status Icon */}
            <div className="absolute w- bottom-[25%] right-[-12px]  rounded-full flex items-center justify-center">
              <img src="../img/nectos.svg" alt="Nectos" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-t-2xl">
        <div className="text-center mt-12 ">
          <h1 className="text-lg font-bold">James Parker</h1>
          <p className="text-[#515151] mt-1 font-medium text-xs">
            Product Designer of XYZ
          </p>
          <p className="text-[#515151] mt-1 font-medium text-xs flex justify-center items-center gap-1">
            <img src="../img/location.svg" alt="Location" />
            North Zora
          </p>
          <div className="flex justify-center items-center gap-2">
            <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-full shadow hover:bg-green-800">
              Save Contact
            </button>
            <button className="bg-[#1DD588] text-white rounded-full px-2 py-2 mt-4 shadow hover:bg-white hover:text-[#1DD588]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.703"
                height="21.928"
              >
                <path d="M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8 px-4">
          <h2 className="text-gray-700 font-semibold">Contact Info</h2>
          <label htmlFor="" className="text-xs text-[#7D848D]">
            Phone Number
          </label>
          <div className=" flex items-center gap-2  border-b border-gray-200 pb-2">
            {/* <FaPhone className="text-green-700" /> */}
            <p className="text-sm text-[#1b1b1b]">(438) 439-3936 x7365</p>
          </div>
          <label htmlFor="" className="text-xs text-[#7D848D]">
            WhatApp Number
          </label>
          <div className="m flex items-center gap-2  border-b border-gray-200 pb-2">
            {/* <FaWhatsapp className="text-green-700" /> */}
            <p className="text-sm text-[#1b1b1b]">wa.me/message/S3P4JTD</p>
          </div>
          <label htmlFor="" className="text-xs text-[#7D848D]">
            Email Address
          </label>
          <div className="mt-2 flex items-center gap-2  border-b border-gray-200 pb-2">
            {/* <FaEnvelope className="text-green-700" /> */}
            <p className="text-sm text-[#1b1b1b]">Darrel78@hotmail.com</p>
          </div>
          <label htmlFor="" className="text-xs text-[#7D848D]">
            Website
          </label>
          <div className="mt-2 flex items-center gap-2">
            {/* <FaGlobe className="text-green-700" /> */}
            <p className="text-sm text-[#1b1b1b]"> https://www.nectos.co</p>
          </div>
        </div>
        <div className="mt-8 px-4">
          <h2 className="text-gray-700 font-semibold">Social Media</h2>
          <div className="flex justify-around mt-4 text-green-700">
            {/* <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube /> */}
          </div>
        </div>
        <div className="mt-8  text-center py-4">
          <p className="text-xs text-[#7D848D]">
            Create a free online business <br /> card from
            <a href="https://nectos.co" className="text-[#1DD588] underline">
              Nectos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
