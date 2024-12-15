import React from "react";

const Features = () => {
  const features = [
    {
      icon: "../img/elements.svg",
      title: "Interactive Elements",
      description:
        "Embed clickable links to your website, social media profiles, or email address for easy access.",
    },
    {
      icon: "../img/contactless.svg",
      title: "Contactless Sharing",
      description:
        "Embed clickable links to your website, social media profiles, or email address for easy access.",
    },
    {
      icon: "../img/analytics.svg",
      title: "Analytics Dashboard",
      description:
        "Embed clickable links to your website, social media profiles, or email address for easy access.",
    },
    {
      icon: "../img/updates.svg",
      title: "Updates and Edits",
      description:
        "Embed clickable links to your website, social media profiles, or email address for easy access.",
    },
  ];

  return (
    <div className="bg-[#f3faf7] pt-12 pb-32">
      <div className="mx-auto bg-[#F3FAF7] mt-16 max-w-7xl px-4 sm:px-6 flex-col lg:flex lg:items-center lg:gap-x-16 lg:px-8">
        <h1 className="mt-10 text-pretty text-2xl text-center leading-8 font-semibold text-[#2C2C2C] sm:text-4xl">
          Some of our Features
        </h1>
        <p className="my-8 text-pretty text-sm text-center sm:text-start  font-medium text-[#3C3C3C] sm:text-xl/8">
          Lorem ipsum dolor sit amet consectetur. Sodales a leo nulla turpis
          luctus urna vitae <br /> non. Duis ultrices felis cras penatibus vel
          aliquam. Odio in
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="md:w-[15rem] bg-white rounded-lg shadow-md p-3 md:p-6  hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#1DD588] bg-opacity-5 text-4xl mb-4 w-fit p-3 rounded-md">
                <img src={feature.icon} alt="" />
              </div>
              <h3 className="text-sm md:text-lg font-semibold text-[#333C46] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#353535] text-xs lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
