"use client";

import { useState } from "react";

export default function PhotoLogoForm() {
  const [photoPicture, setPhotoPicture] = useState(null);
  const [brandLogo, setBrandLogo] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-6 ">
      <div className="w-full max-w-[600px]  sm:px-6 py-2 rounded-xl ">
        {/* Photo Upload Sections */}
        <div className="space-y-6">
          {/* Photo Picture */}
          <div className="flex gap-4 flex-col sm:flex-row items-start justify-between">
            <div className="flex justify-between flex-col sm:items-end gap-4 w-full">
              <div>
                <h3 className="text-md font-semibold text-[#1B1E28]">
                  Photo Picture
                </h3>
                <p className="text-sm text-gray-500">Size : 480 px X 480 px</p>
              </div>
              <label className="relative cursor-pointer flex justify-end sm:block">
                {photoPicture ? (
                  <img
                    src={photoPicture}
                    alt="Photo Picture"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span>+</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setPhotoPicture)}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </label>
            </div>
            {/* Brand Logo */}
            <div className="flex justify-between flex-col sm:items-end gap-4 w-full">
              <div>
                <h3 className="text-md font-semibold text-[#1B1E28]">
                  Brand Logo
                </h3>
                <p className="text-sm text-gray-500">Size : 240 px X 240 px</p>
              </div>
              <label className="relative cursor-pointer flex justify-end sm:block">
                {brandLogo ? (
                  <img
                    src={brandLogo}
                    alt="Brand Logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span>+</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setBrandLogo)}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Cover Picture */}
          <div>
            <h3 className="text-md font-semibold text-[#1B1E28]">
              Cover Picture
            </h3>
            <p className="text-sm text-gray-500 mb-2">Size : 555 px X 312 px</p>
            <label className="relative block cursor-pointer">
              {coverPicture ? (
                <img
                  src={coverPicture}
                  alt="Cover Picture"
                  className="w-full h-[180px] rounded-lg object-cover"
                />
              ) : (
                <div className="w-full h-[180px] rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-lg">+</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setCoverPicture)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full p-3 bg-[#053E42] text-white rounded-lg hover:bg-white hover:text-[#053E42] border border-[#053E42] transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
