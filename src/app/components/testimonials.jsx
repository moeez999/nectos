import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Max Weber",
      role: "HR Manager",
      image: "../img/1.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Magnis lorem pharetra ut pellentesque dolor. A nec in suscipit luctus condimentum mi",
      rating: "★ ★ ★ ★ ★ ",
    },
    {
      name: "Abraham Maslo",
      role: "Founder @ Marketing Company",
      image: "../img/2.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Magnis lorem pharetra ut pellentesque dolor. A nec in suscipit luctus condimentum mi",
      rating: "★ ★ ★ ★ ★ ",
    },
    {
      name: "Douglas Smith",
      role: "Businessman",
      image: "../img/3.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Magnis lorem pharetra ut pellentesque dolor. A nec in suscipit luctus condimentum mi",
      rating: "★ ★ ★ ★ ★ ",
    },
  ];

  return (
    <div className="bg-[#f3faf7] pt-12 pb-12 lg:pb-32">
      <div className="mx-auto bg-[#F3FAF7] mt-4 max-w-7xl px-4 sm:px-6 flex-col lg:flex lg:items-center lg:gap-x-16 lg:px-8">
        <h1 className="mt-10 text-pretty text-2xl text-center  leading-8 font-semibold text-[#2C2C2C] sm:text-4xl">
          Our Happy Clients Says <br /> About Us
        </h1>
        <p className="text-[#353535] mb-12  text-center pt-4 pb-8">
          Lorem ipsum dolor sit amet consectetur. Sodales a leo nulla turpis
          luctus urna vitae <br /> non. Duis ultrices felis cras penatibus vel
          aliquam. Odio in
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#053E42] lg:w-[22rem] rounded-lg shadow-lg p-6 flex flex-col"
            >
              <div className="flex items-center gap-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col r">
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#EFEFEF]">{testimonial.role}</p>
                </div>
              </div>
              <p className=" my-4 text-sm text-white">{testimonial.feedback}</p>
              <div className="flex text-[#1DD588] text-lg">
                {testimonial.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
