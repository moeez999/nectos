const ProfileCard = () => {
  return (
    <div className="h-48 w-80 rounded-[28px]  bg-[#EFFAF5] p-5 flex flex-col items-center">
      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="../img/profileimg-2.png" // Replace with an actual image
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
          {/* Status Icon */}
          <div className="absolute w-10 bottom-[28%] right-[-12px]  rounded-full flex items-center justify-center">
            <img src="../img/nectos.svg" alt="Nectos" />
          </div>
        </div>
        {/* Name and Role */}
        <div className="mt-4 ">
          <h2 className="text-lg font-bold text-[#1B1E28]">James Parker</h2>
          <p className="text-sm text-[#515151] mt-1 font-medium">
            Product Designer of XYZ
          </p>
          <div className="flex items-center text-sm mt-1 text-[#515151] gap-1">
            <img src="../img/location.svg" alt="Location" />
            <span>North Zora</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 w-full flex justify-around border-t border-gray-200 pt-3">
        <button className="flex items-center text-gray-600 hover:text-[#1B1E28]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 20h16v-2H4v2zm2-4h12v-2H6v2zm-4-6h20v-2H2v2zm4-6v2h12V4H6z" />
          </svg>
          <span>Edit</span>
        </button>
        <button className="flex items-center text-gray-600 hover:text-[#1B1E28]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-14a6 6 0 100 12 6 6 0 000-12zm1-3h-2V3h2v2zm-1 16h2v-2h-2v2z" />
          </svg>
          <span>View</span>
        </button>
        <button className="flex items-center text-gray-600 hover:text-[#1B1E28]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 6h-5.586l-4-4H8a2 2 0 00-2 2v14a2 2 0 002 2h13a2 2 0 002-2V8a2 2 0 00-2-2zM10 4h1.586L14 6.414V8h-4V4zM6 20V6H4v14a2 2 0 002 2h14v-2H6z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
