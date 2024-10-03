// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Average Time Taken", "Average Score", "Pass Rates"],
    datasets: [
      {
        label: "Category 1",
        data: [80, 100, 90], 
        backgroundColor: "#F5A623",
        borderRadius: 5, 
        barPercentage: 0.5, 
        barThickness: 40, 
      },
      {
        label: "Category 2",
        data: [50, 80, 85], 
        backgroundColor: "#FDDC92",
        borderRadius: 5, 
        barPercentage: 0.5,
        barThickness: 40, 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        border: {
          display: false, 
        },
        grid: {
          display: false, 
        },
        ticks: {
          callback: function (value, index) {
            if (index === 0) {
              return ["Average Time", "Taken"];
            }
            if (index === 1) {
              return ["Average Score"];
            }
            if (index === 2) {
              return ["Pass Rates"];
            }
            return value;
          },
          font: {
            size: 14,
            lineHeight: 1.2,
            weight: "bold",
          },
          maxRotation: 0,
          minRotation: 0,
          color: "black",
        },
      },
      y: {
        border: {
          display: false, 
        },
        grid: {
          display: false, 
        },
        ticks: {
          display: false, 
        },
        beginAtZero: true,
        min: 0,
      },
    },
  };

  return <Bar data={data} options={options} height={250} />;
};

export default BarChart;
