import React from "react";
import Navbar from "./navbar";

export default function CreateDigitalCard() {
  return (
    <div className="create-business-card-section py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto md:w-[50%]">
          <h1 className="mt-10 text-pretty text-xl text-center sm:text-start leading-8 font-semibold text-[#04091E] sm:text-4xl">
            Create your digital business card today.
          </h1>
          <p className="mt-8 text-pretty text-sm text-center sm:text-start  font-medium text-[#3C3C3C] sm:text-xl/8">
            Lorem ipsum dolor sit amet consectetur. Hac nullam gravida consequat
            purus rhoncus pharetra odio imperdiet. Tincidunt ornare mauris
            turpis laoreet lorem interdum porta id mauris.
          </p>

          <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
            <button
              type="button"
              className="relative rounded-full bg-[#053E42] text-white px-6 py-3 text-basefont-medium"
            >
              Create your Profile
            </button>
          </div>
          <div className="flex justify-end w-[70%]">
            <img src="../img/arrow-2.svg" alt="" />
          </div>
        </div>
        <div className="mt-16 pt-16 flex justify-center sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow md:w-[50%] absolute right-0 top-[-111px]">
          <img
            className="lg:w-full h-auto"
            src="../img/createdigitalcard.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
