"use client";

import React, { useEffect, useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nisi",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vitae habitant nisi quam ullamcorper arcu. Aenean ornare habitant ut aliquet tortor commodo ullamcorper sed feugiat. Rutrum in sapien",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nisi",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vitae habitant nisi quam ullamcorper arcu. Aenean ornare habitant ut aliquet tortor commodo ullamcorper sed feugiat. Rutrum in sapien",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nisi",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vitae habitant nisi quam ullamcorper arcu. Aenean ornare habitant ut aliquet tortor commodo ullamcorper sed feugiat. Rutrum in sapien",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nisi",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vitae habitant nisi quam ullamcorper arcu. Aenean ornare habitant ut aliquet tortor commodo ullamcorper sed feugiat. Rutrum in sapien",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nisi",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vitae habitant nisi quam ullamcorper arcu. Aenean ornare habitant ut aliquet tortor commodo ullamcorper sed feugiat. Rutrum in sapien",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    setOpenIndex(1); // Open the second FAQ by default
  }, []);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faqs"
      className="mx-auto  my-20 max-w-7xl px-4 sm:px-6 flex-col md:flex md:items-center md:gap-x-16 md:px-8"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: FAQ Title & Intro */}
        <div className="space-y-6">
          <h1 className="text-pretty text-xl text-center sm:text-start leading-10 font-semibold text-[#04091E] sm:text-4xl">
            (FAQ) Frequently Asked
          </h1>
          <h1 className="text-pretty text-xl text-center sm:text-start leading-10 font-semibold text-[#04091E] sm:text-4xl">
            Questions
          </h1>
          <p className="mt-8 text-pretty text-sm text-center sm:text-start  font-medium text-[#3C3C3C] sm:text-xl/8">
            Lorem ipsum dolor sit amet consectetur. Diam netus quisque urna eu.
            Sed habitasse vestibulum adipiscing sapien ultrices fermentum.
          </p>
          {/* Decorative Arrow */}
          <div className="hidden md:flex items-center justify-center pt-16">
            <img src="../img/curlyarrow.svg" alt="" />
          </div>
        </div>

        {/* Right Column: FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-[#202020] border-2 rounded-2xl md:rounded-lg cursor-pointer transition-all duration-300 ${
                openIndex === index ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-semibold text-[#202020] md:text-lg">
                  {faq.question}
                </h3>
                <span className="">
                  <img className="w-8" src="../img/chevronright.svg" alt="" />
                </span>
              </div>
              {openIndex === index && faq.answer && (
                <div className="p-4 text-[#1D1E25]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
