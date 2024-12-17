import React, { useRef } from "react";
import { toast } from "react-toastify";
const ShareCard = () => {
  const inputRef = useRef();

  const handleCopy = () => {
    const textToCopy = inputRef.current.value;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        toast.success("Link copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };
  return (
    <div className="relative">
      <div className="fixed inset-0 top-[10rem] md:top-[20rem] flex  flex-col justify-center  h-fit z-[999999] max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        {/* Share QR Code */}
        <div className="flex items-center flex-col-reverse md:flex-row m-4">
          <div>
            <h3 className="text-base text-center md:text-start font-semibold text-[#1B1E28] mt-4 md:mt-0">
              Share QR Code
            </h3>
            <p className="text-[#555555] text-sm mt-1 text-center md:text-start">
              This is your QR code. You can share with your friends to connect
              with you.
            </p>
          </div>
          <div className="">
            <img src="../img/QR.svg" alt="QR Code" className="w-24 h-24" />
          </div>
        </div>
        {/* Copy Code Link */}
        <div className="mt-6 w-full">
          <h4 className="text-[#1B1E28] font-medium mb-2 text-center md:text-start">
            Copy Code Link
          </h4>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value="https://Nectos/smith012"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-[#D2FAE9] px-4 py-3 text-sm text-[#4B4B4B] outline-none"
            />
            <button
              onClick={handleCopy}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1DD588] hover:bg-green-600 text-white p-2 rounded-[8px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 11.1666V13.6666C14.1667 16.9999 12.8334 18.3333 9.50002 18.3333H6.33335C3.00002 18.3333 1.66669 16.9999 1.66669 13.6666V10.4999C1.66669 7.16659 3.00002 5.83325 6.33335 5.83325H8.83335"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1666 11.1666H11.5C9.49998 11.1666 8.83331 10.4999 8.83331 8.49992V5.83325L14.1666 11.1666Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.66669 1.66675H13"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83331 4.16675C5.83331 2.78341 6.94998 1.66675 8.33331 1.66675H10.5166"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 6.66675V11.8251C18.3333 13.1167 17.2833 14.1667 15.9916 14.1667"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 6.66675H15.8333C13.9583 6.66675 13.3333 6.04175 13.3333 4.16675V1.66675L18.3333 6.66675Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="mt-6 flex flex-col items-center md:items-start">
          <h4 className="text-[#1B1E28] font-medium mb-3 text-center md:text-start">
            Share Card
          </h4>
          <div className="flex space-x-4">
            <a href="#">
              <img src="../img/facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="../img/LinkedIN.svg" alt="" />
            </a>
            <a href="#">
              <img src="../img/Twitter-2.svg" alt="" />
            </a>
            <a href="#">
              <img src="../img/Instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="../img/Pinterest.svg" alt="" />
            </a>
            <a href="#">
              <img src="../img/Behance.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
