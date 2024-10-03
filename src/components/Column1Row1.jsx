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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Column1Row1 = () => {
  const data = {
    labels: [
      "Candidates assigned",
      "Candidates appeared",
      "Exam Completed",
      "Candidates Shortlisted",
    ],
    datasets: [
      {
        label: "Hiring Funnel",
        data: [100, 80, 80, 66],
        backgroundColor: ["#3a63e0", "#689df1", "#f7d99e", "#f2b84c"],
        borderRadius: 5,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: "red",
        anchor: "end",
        align: "start",
        font: {
          weight: "bold",
          size: 15,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          callback: function (value, index) {
            if (index === 0) {
              return ["Candidates", "assigned"];
            }
            if (index === 1) {
              return ["Candidates", "appeared"];
            }
            if (index === 2) {
              return ["Exam", "Completed"];
            }
            if (index === 3) {
              return ["Candidates", "Shortlisted"];
            }
            return value;
          },
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 14,
            lineHeight: 1.2,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        max: 100,
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="col1row">
      <h2 className="col1head">Hiring Funnel</h2>
      <Bar
        data={data}
        options={options}
        style={{ marginTop: "60px", marginBottom: "20px" }}
      />
      <p style={{ color: "grey" }}>
        Your conversion rates are{" "}
        <strong style={{ color: "black" }}>10%</strong> and your exam completion
        rates are <strong style={{ color: "black" }}>20%</strong>.
      </p>
    </div>
  );
};

export default Column1Row1;
