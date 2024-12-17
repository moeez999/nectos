import React from "react";

export default function TrafficByLocation() {
  return (
    <div className=" bg-[#FAFAFA] rounded-[16px] p-4 w-full">
      {/* Heading Above Chart */}
      <h1 className="text-xl font-bold text-[#1C1C1C]">Traffic by Location</h1>
      <div className="flex items-center gap-4">
        <div>
          <img src="../img/map.svg" alt="" />
        </div>
        <div>
          <ul className="list-disc space-y-2 ml-4 text-sm">
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C]">
              <span>United States</span>
              <span>38%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C]">
              <span> United Kingdom</span>
              <span>20%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C]">
              <span> Canada</span>
              <span>15%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C]">
              <span>Italy</span>
              <span>10%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C]">
              <span>Australia</span>
              <span>5%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C]">
              <span>Other</span>
              <span>5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
