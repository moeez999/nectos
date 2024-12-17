"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AudienceChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Raw data and calculated percentages
    const rawData = [67, 33, 17];
    const total = rawData.reduce((a, b) => a + b, 0);
    const dataWithPercentages = rawData.map((value) =>
      ((value / total) * 100).toFixed(0)
    ); // Rounded percentages

    const data = {
      labels: ["Men", "Women", "Other"],
      datasets: [
        {
          label: "Audience Distribution",
          data: rawData,
          backgroundColor: ["#FF976E", "#FFE8D2", "#FFECE6"],
          hoverOffset: 4,
        },
      ],
    };

    new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.raw;
                const percentage = dataWithPercentages[context.dataIndex];
                return `${context.label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
    });

    return () => {
      // Clean up the chart instance on component unmount
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
  }, []);

  return (
    <div className=" bg-[#FAFAFA] rounded-[16px] p-4 w-full">
      {/* Heading Above Chart */}
      <h1 className="text-xl font-bold text-[#1C1C1C]">Audience</h1>

      {/* Chart */}
      <div className="flex justify-center">
        <canvas ref={chartRef} className="w-[278px] h-[278px]"></canvas>
      </div>

      {/* Percentages Below Chart */}
      <div className="mt-4 text-lg flex justify-center items-center gap-4">
        <p className="flex flex-col items-center text-sm font-semibold">
          <span className="flex items-center gap-2">
            <span className="bg-[#FF976E] rounded-full w-2 h-2 flex items-center justify-center"></span>
            <span className=" text-[#7D848D]">Men</span>
          </span>
          67%
        </p>
        <p className="flex flex-col items-center text-sm font-semibold">
          <span className="flex items-center gap-2">
            <span className="bg-[#FFE8D2] rounded-full w-2 h-2 flex items-center justify-center"></span>
            <span className=" text-[#7D848D]">Women</span>
          </span>
          33%
        </p>
        <p className="flex flex-col items-center text-sm font-semibold">
          <span className="flex items-center gap-2">
            <span className="bg-[#FFE8D2] rounded-full w-2 h-2 flex items-center justify-center"></span>
            <span className=" text-[#7D848D]">Other</span>
          </span>
          17%
        </p>
      </div>
    </div>
  );
};

export default AudienceChart;
