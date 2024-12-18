import React from "react";
import Navbar from "./navbar";

export default function BusinessCard() {
  return (
    <div id="businesscard" className="business-card-section my-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6  md:flex md:items-center md:gap-x-10 md:px-8">
        <div className="mt-16 flex justify-center sm:mt-24 md:mt-0 md:shrink-0 md:grow md:w-[50%]">
          <img
            className="md:w-[90%] h-auto"
            src="../img/businesscard.png"
            alt=""
          />
        </div>
        <div className="mx-auto max-w-2xl md:mx-0 md:flex-auto md:w-[50%]">
          <h1 className="mt-10 text-pretty text-2xl text-center sm:text-start leading-8 font-semibold text-[#04091E] sm:text-4xl">
            Business cards that are as dynamic as you are
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
      </div>
    </div>
  );
}
