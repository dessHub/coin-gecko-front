import React from "react";
import "./index.scss";
import { GraphUpArrow } from "react-bootstrap-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinChart() {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.4,
        borderColor: "#2C64BC",
      },
    ],
  };
  
  const footer = (tooltipItems) => {
    console.log(tooltipItems);
    return "Sum: ";
  };

  const options = {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: true,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          color: "#fff",
          padding: 20,
          font: {
            size: 14,
          },
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          footer: footer,
        },
      },
    },
  };
    
    return (
      <div className="coin-chart-container">
        <div className="top">
          <div className="amount">$29,0000</div>
          <div className="change">
            +2.43% <GraphUpArrow className="icon" />
          </div>
        </div>

        <div className="chart-container">
          <Line options={options} data={chartData} />
        </div>
      </div>
    );
}