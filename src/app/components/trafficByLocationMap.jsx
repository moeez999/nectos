import React from "react";

export default function TrafficByLocation() {
  return (
    <div className=" bg-[#FAFAFA] rounded-[16px] p-4 w-full sm:h-[280px]">
      {/* Heading Above Chart */}
      <h1 className="text-xl font-bold text-[#1C1C1C] mb-4">
        Traffic by Location
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="sm:w-[60%]">
          <img src="../img/map.svg" alt="" />
        </div>
        <div className="w-full sm:w-auto">
          <ul className="list-disc space-y-2 ml-4 text-sm">
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>
                <span className="text-[#FF7832] mr-1 text-base">•</span> United
                States
              </span>
              <span>38%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>
                <span className="text-[#FEAA00] mr-1 text-base">•</span> United
                Kingdom
              </span>
              <span>20%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>
                <span className="text-[#00B578] mr-1 text-base">•</span> Canada
              </span>
              <span>15%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>
                <span className="text-[#315AFE] mr-1 text-base">•</span>Italy
              </span>
              <span>10%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>
                <span className="text-[#315AFE] mr-1 text-base">•</span>
                Australia
              </span>
              <span>5%</span>
            </li>
            <li className="flex items-center justify-between gap-2 text-[#1C1C1C] text-xs">
              <span>
                <span className="text-[#13BDB6] mr-1 text-base">•</span>Other
              </span>
              <span>5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
