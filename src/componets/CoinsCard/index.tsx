import React from "react";
import "./index.scss";
import Loader from "../Loader";

interface CoinsCardProps {
  coins: any[];
  isLoading: boolean;
}

export default function CoinsCard({coins, isLoading}: CoinsCardProps) {
  return (
    <div className="coins-card">
      <div className="container-title">All Coins</div>

      <div className="coins-list">
        {coins.map((coin) => (
          <div className="coin-card" key={coin.id}>
            {coin.name} ({coin.symbol})
          </div>
        ))}
        {isLoading && (<Loader />)}
      </div>
    </div>
  );
}