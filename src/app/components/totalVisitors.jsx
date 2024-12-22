"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const TotalVisitors = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: ["", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [5000, 10000, 15000, 20000, 12000, 8000, 17000],
        borderColor: "#1DD588",
        backgroundColor: "#1DD588",
        tension: 0.3,
        pointBackgroundColor: "#4CAF50",
        pointRadius: 5,
      },
    ],
  });

  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDropdownChange = (e) => {
    const value = e.target.value;

    if (value === "month") {
      setChartData({
        labels: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            data: [25000, 30000, 40000, 35000],
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
          "",
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
            ],
            borderColor: "#1DD588",
            backgroundColor: "#1DD588",
            tension: 0.3,
            pointBackgroundColor: "#4CAF50",
            pointRadius: 5,
          },
        ],
      });
    } else {
      setChartData({
        labels: [
          "",
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
            data: [5000, 10000, 15000, 20000, 12000, 8000, 17000],
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
    if (!isClient || !chartRef.current) return;

    // Get the context of the canvas element
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (window.chartInstance) {
      window.chartInstance.destroy();
    }

    // Create a new chart instance
    window.chartInstance = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
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
              callback: (value) => `${value / 1000}k`,
              stepSize: 5000,
              beginAtZero: true,
            },
            grid: {
              drawBorder: false,
              color: "#E5E5E5",
              lineWidth: 1,
              borderDash: [0],
            },
            min: 0,
          },
          x: {
            type: "category",
            labels: chartData.labels,
            grid: {
              drawOnChartArea: false,
              drawTicks: true,
              drawBorder: false,
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart when component is unmounted or chart data changes
    return () => {
      if (window.chartInstance) {
        window.chartInstance.destroy();
      }
    };
  }, [chartData, isClient]); // Dependencies: chartData, isClient

  return (
    isClient && (
      <div className="text-center bg-[#FAFAFA] rounded-[16px] p-4 w-full">
        <div className="text-center">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold mb-4 text-[#1C1C1C]">
              Total Visitors
            </h1>
            <select
              onChange={handleDropdownChange}
              className="border border-[#CDCDCD] rounded-md p-2 mb-4 text-[#1B1E28]"
            >
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>

          {isClient && (
            <div className="flex justify-center">
              <canvas
                ref={chartRef}
                className="w-[500px] h-[400px] canvas-width"
              ></canvas>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default TotalVisitors;
