"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const TotalVisitors = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ], // Default week data
    datasets: [
      {
        data: [5000, 10000, 15000, 20000, 12000, 8000, 17000], // Default week data
        borderColor: "#1DD588", // Line color
        backgroundColor: "#1DD588", // Line fill
        tension: 0.3, // Smooth curve
        pointBackgroundColor: "#4CAF50", // Point color
        pointRadius: 5, // Point size
      },
    ],
  });

  const handleDropdownChange = (e) => {
    const value = e.target.value;

    // Update chart data based on the selected value
    if (value === "month") {
      setChartData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            data: [25000, 30000, 40000, 35000], // Month data
            borderColor: "#1DD588",
            backgroundColor: "#1DD588",
            tension: 0.3,
            pointBackgroundColor: "#4CAF50",
            pointRadius: 5,
          },
        ],
      });
    } else if (value === "year") {
      setChartData({
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              100000, 120000, 150000, 180000, 160000, 190000, 170000, 200000,
              220000, 240000, 250000, 230000,
            ], // Year data
            borderColor: "#1DD588",
            backgroundColor: "#1DD588",
            tension: 0.3,
            pointBackgroundColor: "#4CAF50",
            pointRadius: 5,
          },
        ],
      });
    } else {
      // Reset to weekly data
      setChartData({
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            data: [5000, 10000, 15000, 20000, 12000, 8000, 17000], // Default week data
            borderColor: "#1DD588",
            backgroundColor: "#1DD588",
            tension: 0.3,
            pointBackgroundColor: "#4CAF50",
            pointRadius: 5,
          },
        ],
      });
    }
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create the chart
    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        scales: {
          y: {
            title: {
              display: true,

              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              callback: (value) => `${value / 1000}k`, // Format ticks (e.g., 5k, 10k)
              stepSize: 5000, // Steps between ticks
              beginAtZero: true,
            },
            grid: {
              drawBorder: false, // Disable grid border on Y-axis
              color: "#E5E5E5", // Keep horizontal lines
              lineWidth: 1, // Thickness of horizontal grid lines
              borderDash: [0], // Solid horizontal lines
            },
            min: 0,
          },
          x: {
            type: "category", // Category type for custom labels
            labels: ["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"], // Days as categories
            grid: {
              drawOnChartArea: false, // Hide vertical grid lines
              drawTicks: true, // Keep ticks on the X-axis
              drawBorder: false, // Disable grid border on X-axis
            },
          },
        },
      },
    });

    return () => {
      // Clean up the chart instance on component unmount
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
  }, [chartData]); // Re-render when chart data changes

  return (
    <div className="text-center bg-[#FAFAFA] rounded-[16px] p-4 w-full">
      <div className="text-center">
        {/* Heading Above Chart */}
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-4 text-[#1C1C1C]">
            Total Visitors
          </h1>
          {/* Dropdown */}
          <select
            onChange={handleDropdownChange}
            className="border border-[#CDCDCD] rounded-md p-2 mb-4 text-[#1B1E28]"
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>

        {/* Chart */}
        <div className="flex justify-center">
          <canvas ref={chartRef} className="w-[500px] h-[400px]"></canvas>
        </div>
      </div>
    </div>
  );
};

export default TotalVisitors;
