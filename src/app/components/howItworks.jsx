import React from "react";

export default function HowItworks() {
  return (
    <div>
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6  lg:flex lg:items-center lg:gap-x-16 lg:px-8 mb-12">
        <div>
          <img src="../img/howitworks.png" alt="" />
        </div>
        <div className="p-2  lg:p-6 rounded-lg max-w-xl mx-auto">
          <h2 className="text-[#4A4A4A] text-2xl font-bold mb-2">
            How It Works?
          </h2>
          <p className="text-[#545454] mb-6  hidden lg:block">
            Lorem ipsum dolor sit amet consectetur. Curabitur nibh ut vel nunc.
            Quam id est fermentum ultrices ultricies faucibus volutpat id.
          </p>
          <div className="space-y-6 mt-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full border border-[#053E42]">
                  <img src="../img/account.svg" alt="" />
                </div>
                <div className="w-0.5  mx-auto mt-3 hidden lg:block">
                  <img src="../img/lines.svg" alt="" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-[#303030] text-lg font-semibold">
                  Create Your Account
                </h3>
                <p className="text-xs lg:text-base text-[#545454]">
                  Lorem ipsum dolor sit amet consectetur. Molestie pellentesque
                  a augue tellus id massa arcu.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full border border-[#053E42]">
                  <img src="../img/profile.svg" alt="" />
                </div>
                <div className="w-0.5  mx-auto mt-3 hidden lg:block">
                  <img src="../img/lines.svg" alt="" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-[#303030] text-lg font-semibold">
                  Build Your Profile
                </h3>
                <p className="text-xs lg:text-base text-[#545454]">
                  Lorem ipsum dolor sit amet consectetur. Molestie pellentesque
                  a augue tellus id massa arcu.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full border border-[#053E42]">
                  <img src="../img/card.svg" alt="" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-[#303030] text-lg font-semibold">
                  Share Your Card
                </h3>
                <p className="text-xs lg:text-base text-[#545454]">
                  Lorem ipsum dolor sit amet consectetur. Molestie pellentesque
                  a augue tellus id massa arcu.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 text-xs lg:text-base px-6 py-4 bg-[#053E42] text-white font-medium rounded-full hover:bg-green-700">
            Create your Profile
          </button>
        </div>
      </div>
    </div>
  );
}
