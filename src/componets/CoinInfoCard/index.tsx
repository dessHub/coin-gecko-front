import React from "react";
import "./index.scss";
import { Search } from "react-bootstrap-icons";
import CoinChart from "../CoinChart";
import ExchangeCardInfo from "../ExchangeCardInfo";
import RankCard from "../RankCard";
import InfoCard from "../InfoCard";

export default function CoinInfoCard() {
    
    return (
      <div className="coin-container">
        <div className="conten-section">
          <div className="filter-container">
            <div className="search-container">
              <Search className="search-icon" />
              <input className="search-input" placeholder="search" />
            </div>
            <div className="date-picker-cont">Date Range</div>
          </div>
          <CoinChart />
          <div className="flex-container">
              <ExchangeCardInfo />
              <RankCard />
          </div>
        </div>
        <div className="info-section">
          <InfoCard />
        </div>
      </div>
    );
}