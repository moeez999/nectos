const ContentForm = () => {
  const socialProfiles = [
    {
      username: "@Username",
      iconSrc: "../icons/Facebook.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/LinkedIN.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Twitter.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Instagram.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Pinterest.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Behance.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Dribbble.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Discord.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Figma.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Line.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Skype.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Snapchat.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Spotify.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/Viber.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/Wechat.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/Youtube.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/TikTok.svg",
    },
  ];

  return (
    <div className="sm:w-[600px] flex flex-col items-center justify-center space-y-4">
      {socialProfiles.map((profile, index) => (
        <div key={index} className="flex items-center space-x-2 w-full">
          <div className="flex items-center justify-center rounded-full">
            <img
              src={profile.iconSrc}
              alt={`${profile.username} icon`}
              className="rounded-full"
            />
          </div>
          <input
            type="text"
            placeholder={profile.username}
            className="w-full sm:w-[75%]  bg-[#C4F4E0] p-3 rounded-[3rem] text-[#727272] outline-none px-4"
          />
        </div>
      ))}
      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full p-3 bg-[#053E42] text-white rounded-lg hover:bg-white hover:text-[#053E42] border border-[#053E42] transition"
      >
        Continue
      </button>
    </div>
  );
};

export default ContentForm;
