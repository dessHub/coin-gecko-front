import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { GraphDownArrow, GraphUpArrow } from "react-bootstrap-icons";
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
import { RootState } from "../../app/store";
import Loader from "../Loader";
import { formatCash, getTimeFromDate } from "../../utils";

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
  const {
    coin,
    chartData: data,
    isLoading,
  } = useSelector((state: RootState) => state.info);
  const { market_data } = coin;

  const [isPositiveChange, setChange] = useState(true)
  useEffect(() => {
    setChange(market_data && market_data.price_change_percentage_24h >= 0);
  }, [market_data]);

  const chartData = {
    labels: [...(data.map(item => item[0]))],
    datasets: [
      {
        backgroundColor: "#2C64BC",
        borderColor: "#2C64BC",
        data: [...(data.map(item => item[1]))],
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
          drawBorder: false,
          color: "#F2F2F2",
        },
        ticks: {
          display: true,
          callback: function (value) {
            return getTimeFromDate(value);
          },
        },
      },
      y: {
        grid: {
          drawOnChartArea: true,
          drawBorder: false,
          drawTicks: false,
          color: "#F2F2F2",
          borderDash: [5, 5],
          borderDashOffset: 1,
        },
        ticks: {
          color: "#F2F2F2",
          padding: 5,
          font: {
            size: 14,
          },
          display: true,

          callback: function (value) {
            return formatCash(value);
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#2C64BC",
        titleColor: "#F2F2F2",
        bodyAlign: "center" as "center",
        padding: 10,
        displayColors: false,
      },
    },
    interaction: {},
  };
    
    return (
      <div className="coin-chart-container">
        {(market_data && !isLoading) && (
          <div className="top">
            <div className="amount">${market_data.current_price.usd}</div>
            <div className={`change ${!isPositiveChange && "negative-change"}`}>
              {isPositiveChange
                ? `+${market_data.price_change_percentage_24h}%`
                : `-${market_data.price_change_percentage_24h}%`}
              {isPositiveChange ? (
                <GraphUpArrow className="up-icon" />
              ) : (
                <GraphDownArrow className="down-icon" />
              )}
            </div>
          </div>
        )}
        {isLoading && (
          <div className="top">
            <Loader />
          </div>
        )}

        <div className="chart-container">
          <Line options={options} data={chartData} />
        </div>
      </div>
    );
}