import React from "react";
import Navbar from "./navbar";

export default function HeroSection() {
  return (
    <div id="hero" className="hero-section relative">
      <div className="pt-4">
        <Navbar />
      </div>
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10">
        <img src="../img/hero-arrow.png" alt="" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6  md:flex md:items-center md:gap-x-10 md:px-8 relative">
        <div className="mx-auto max-w-2xl md:mx-0 md:flex-auto">
          <div className="block md:hidden absolute top-[-20px] left-[8px]">
            <img src="../img/plus.svg" alt="" />
          </div>
          <h1 className="mt-10 text-pretty text-2xl text-center md:text-start leading-8 font-semibold text-[#04091E] sm:text-4xl">
            Digital Business Cards for Modern Networking
          </h1>
          <p className="mt-8 text-pretty text-sm text-center sm:text-start  font-medium text-[#3C3C3C] sm:text-xl/8">
            In today's fast-paced world, first impressions are more important
            than ever. With our digital business card website
          </p>
          <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
            <button
              type="button"
              className="relative rounded-full bg-[#053E42] text-white px-6 py-3 text-basefont-medium"
            >
              Create a Card
            </button>
          </div>
        </div>
        <div className="md:hidden mt-16 flex justify-center sm:mt-24 md:mt-0 md:shrink-0 md:grow">
          <img className="md:w-[90%] h-auto" src="../img/hero-2.png" alt="" />
        </div>
        <div className="mt-16 hidden md:flex justify-center sm:mt-24 md:mt-0 md:shrink-0 md:grow">
          <img className="md:w-[90%] h-auto" src="../img/girl.png" alt="" />
        </div>
      </div>
    </div>
  );
}
