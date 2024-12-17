const ProfileCard = ({ handleShareCard }) => {
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
          <img src="../img/pen.svg" alt="Edit" className="w-4 h-4 mr-1" />
          <span>Edit</span>
        </button>
        <button className="flex items-center text-gray-600 hover:text-[#1B1E28]">
          <img src="../img/view.svg" alt="View" className="w-4 h-4 mr-1" />
          <span>View</span>
        </button>
        <button
          onClick={handleShareCard}
          className="flex items-center text-gray-600 hover:text-[#1B1E28]"
        >
          <img src="../img/share.svg" alt="Share" className="w-4 h-4 mr-1" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
