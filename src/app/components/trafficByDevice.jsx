"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TrafficByDevice = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Data for the chart
    const data = {
      labels: ["Linux", "Mac", "IOS", "Windows", "Android", "Other"],
      datasets: [
        {
          label: "Usage",
          data: [20000, 300000, 600000, 10000, 150000, 200000],
          backgroundColor: [
            "#BAEDBD", // iPhone
            "#FFECE6", // Android
            "#1C1C1C", // Linux
            "#B1E3FF", // Mac
            "#95A4FC",
            "#A1E3CB", // Other
          ],
        },
      ],
    };

    // Create the chart
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        indexAxis: "x", // Standard vertical bar chart
        plugins: {
          legend: {
            display: false, // Hide legend
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw.toLocaleString()} users`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            grid: {
              drawBorder: false, // Disable grid border on X-axis
              display: false, // Disable vertical grid lines
            },
          },
          y: {
            title: {
              display: true,
              text: "",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              callback: (value) => `${value / 1000}k`, // Format y-axis ticks
            },
            grid: {
              drawBorder: false, // Disable grid border on Y-axis
              color: "#E5E5E5", // Set horizontal grid line color
              lineWidth: 1, // Thickness of grid lines
            },
            beginAtZero: true,
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
      <div className="">
        {/* Heading Above Chart */}
        <h1 className="text-xl font-bold mb-4 text-[#1C1C1C]">
          Traffic by Device
        </h1>

        {/* Chart */}
        <div className="flex justify-center">
          <canvas
            ref={chartRef}
            className="w-[500px] h-[400px] canvas-width"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default TrafficByDevice;
