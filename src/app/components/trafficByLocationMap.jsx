import React from "react";

export default function TrafficByLocation() {
  return (
    <div className=" bg-[#FAFAFA] rounded-[16px] p-4 w-full h-[250px]">
      {/* Heading Above Chart */}
      <h1 className="text-xl font-bold text-[#1C1C1C] mb-4">
        Traffic by Location
      </h1>
      <div className="flex items-center gap-4">
        <div>
          <img src="../img/map.svg" alt="" />
        </div>
        <div>
          <ul className="list-disc space-y-2 ml-4 text-sm">
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>United States</span>
              <span>38%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span> United Kingdom</span>
              <span>20%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span> Canada</span>
              <span>15%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>Italy</span>
              <span>10%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>Australia</span>
              <span>5%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>Other</span>
              <span>5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
