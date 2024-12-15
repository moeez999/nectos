import React from "react";
import Navbar from "./navbar";

export default function DigitalBusinessCard() {
  return (
    <div className="business-card-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:w-[50%]">
          <h1 className="mt-10 text-pretty text-2xl text-center sm:text-start leading-8 font-semibold text-[#04091E] sm:text-4xl">
            Growth Networking with Our Digital Business Card
          </h1>
          <p className="mt-8 text-pretty text-sm text-center sm:text-start  font-medium text-[#3C3C3C] sm:text-xl/8">
            We are dedicated to helping you make a memorable impact in your
            industry and facilitating seamless networking opportunities through
            the use of modern and cutting-edge digital business card solutions.
          </p>
          <p className="mt-8 text-pretty text-sm text-center sm:text-start  font-medium text-[#3C3C3C] sm:text-xl/8">
            Our focus is on providing customized solutions that meet the
            specific needs and preferences of each individual or organization.
          </p>
          <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
            <button
              type="button"
              className="relative rounded-full bg-[#053E42] text-white px-6 py-3 text-basefont-medium"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-16 pt-16 flex justify-center sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow lg:w-[50%]">
          <img
            className="lg:w-[90%] h-auto"
            src="../img/digitalbusinesscard.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
