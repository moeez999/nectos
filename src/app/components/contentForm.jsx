const ContentForm = () => {
  const socialProfiles = [
    {
      username: "@Username",
      iconSrc: "../icons/facebook.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/LinkedIN.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/twitter.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/instagram.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/pinterest.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/behance.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/dribbble.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/discord.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/Figma.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/line.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/skype.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/snapchat.svg",
    },
    {
      username: "@Username",
      iconSrc: "/icons/spotify.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/viber.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/wechat.svg",
    },
    {
      username: "@Username",
      iconSrc: "../icons/youtube.svg",
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
            className=" sm:w-[75%]  bg-[#C4F4E0] p-3 rounded-[3rem] text-[#727272] outline-none px-4"
          />
        </div>
      ))}
    </div>
  );
};

export default ContentForm;
