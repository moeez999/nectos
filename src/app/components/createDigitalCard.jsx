import React from "react";
import Navbar from "./navbar";

export default function CreateDigitalCard() {
  return (
    <div className="create-business-card-section pt-4 md:py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6  md:flex md:items-center md:gap-x-10 md:px-8">
        <div className="mx-auto max-w-2xl md:mx-0 md:flex-auto md:w-[50%] relative">
          <h1 className="mt-10 text-pretty text-2xl text-center sm:text-start leading-8 font-semibold text-[#04091E] sm:text-4xl">
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
              className="relative rounded-full text-[#053E42] bg-[#1DD588] font-medim px-6 py-3 text-basefont-medium"
            >
              Create your Profile
            </button>
          </div>
          <div className="absolute right-40 hidden md:block">
            <img src="../img/arrow-2.svg" alt="" />
          </div>
        </div>
        <div className="md:hidden mt-8 flex justify-center sm:mt-24 md:mt-0 md:shrink-0 md:grow ">
          <img
            className="md:w-full h-auto"
            src="../img/create-card-mobile.png"
            alt=""
          />
        </div>
        <div className="md:flex hidden mt-16 pt-16  justify-center sm:mt-24 md:mt-0 md:shrink-0 md:grow md:w-[50%] xl:w-[63.5%] 2xl:w-[50%] absolute right-0 top-[-111px] bottom-0">
          <img
            className="md:w-full h-auto"
            src="../img/createdigitalcard.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
