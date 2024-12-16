import { useState } from "react";

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState("../img/profileimg-2.png");
  const [username, setUsername] = useState("Smith012");
  const [email, setEmail] = useState("smith012@gmail.com");
  const [password, setPassword] = useState("********");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Update the profile picture preview
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white py-8 px-4  w-full max-w-3xl">
        {/* Profile Picture and User Name */}
        <div className="flex justify-center flex-col items-center mb-6">
          <div className="relative mb-4 flex flex-col items-center">
            <img
              src={profileImage}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full h-32 w-32 object-cover"
            />

            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden" // Hidden input
              onChange={handleImageChange}
            />
            <label htmlFor="imageUpload">
              <img
                className="absolute bottom-[24px] right-[-18px]"
                src="../img/camera.svg"
                alt=""
              />
            </label>

            <div className=" text-[#1A2530] rounded-full p-2">
              <span className="text-base">@Smith012</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-x-2">
          {/* User Name */}
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-[#1A2530] mb-2">
                User Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[#D2FAE9] flex items-center w-full justify-between rounded-[12px] px-4  py-3 outline-none"
              />
            </div>
            {/* Email Address */}
            <div className="w-full">
              <label className="block text-sm font-medium text-[#1A2530] mb-2">
                Email Address
              </label>
              <div className="bg-[#D2FAE9] flex items-center justify-between rounded-[12px] px-4  py-3 outline-none">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block bg-transparent outline-none"
                />
                <button className="text-[#1A2530] text-[10px] md:text-xs border border-[#C0C0C0] rounded-[4px] p-1">
                  Change Email
                </button>
              </div>
            </div>
            {/* Password */}
            <div className="w-full">
              <label className="block text-sm font-medium text-[#1A2530] mb-2">
                Password
              </label>
              <div className="bg-[#D2FAE9] flex items-center justify-between rounded-[12px] px-4  py-3 outline-none">
                <input
                  type="password"
                  value={email}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block bg-transparent outline-none"
                />
                <button className="text-[#1A2530] text-[10px] md:text-xs border border-[#C0C0C0] rounded-[4px] p-1">
                  Change Password
                </button>
              </div>

              <div className="flex justify-center">
                <button className="mt-4 w-full bg-[#053E42] text-white py-2 px-4 rounded-[12px] hover:bg-white border border-[#053E42] hover:text-[#053E42] hover:border-[#053E42] transition">
                  Save
                </button>
              </div>
            </div>
            <div className="w-full md:mt-6">
              <div className=" flex items-center justify-between px-4  py-3 outline-none">
                <button className="text-[#1A2530] font-medium py-1">
                  Delete
                </button>
                <button className="text-[#E60019] text-[10px] md:text-xs border border-[#E60019] rounded-[4px] p-1">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
