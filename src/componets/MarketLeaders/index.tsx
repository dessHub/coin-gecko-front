import React from "react";
import "./index.scss";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Loader from "../Loader";

interface MarketLeadersProps {
  coins: any[];
  isLoading: boolean;
}

export default function MarketLeaders({ coins, isLoading }: MarketLeadersProps) {
  return (
    <div className="leaders-container">
      <div className="container-title">Market Leaders</div>

      <div className="leaders-list">
        {coins.map((coin) => {
          return (
            <div className="leaders-card" key={coin.id}>
              <div className="name">
                {coin.name} ({coin.symbol})
              </div>
              <div className="chart">
                <Sparklines
                  data={[...coin.sparkline_in_7d.price]}
                  height={20}
                  margin={1}
                >
                  <SparklinesLine color="#8B67C1" style={{ fill: "none" }} />
                </Sparklines>
              </div>
              <div
                className={`amount-change ${
                  coin.price_change_24h < 0 && "negative-change"
                }`}
              >
                {coin.price_change_24h >= 0
                  ? `+$${coin.price_change_24h}`
                  : `-$${coin.price_change_24h}`}
              </div>
              <div className="amount">${coin.current_price}</div>
            </div>
          );
        })}
        {isLoading && (
          <Loader />
        )}
      </div>
    </div>
  );
}