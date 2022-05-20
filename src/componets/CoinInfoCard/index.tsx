import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Search } from "react-bootstrap-icons";
import CoinChart from "../CoinChart";
import ExchangeCardInfo from "../ExchangeCardInfo";
import RankCard from "../RankCard";
import InfoCard from "../InfoCard";
import { AppDispatch, RootState } from "../../app/store";
import { fetchCoin, fetchMarketData } from "../../features/infoSlice";

export default function CoinInfoCard() {
  const dispatch = useDispatch<AppDispatch>();
  const { coin } = useSelector((state: RootState) => state.info);

  useEffect(() => {
    dispatch(fetchCoin({ id: 'bitcoin' }));
    dispatch(fetchMarketData({ id: "bitcoin", days: 5 }));
  }, [dispatch]);
    
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
            <RankCard rank={coin ? coin.coingecko_rank : 1} />
          </div>
        </div>
        <div className="info-section">
          <InfoCard />
        </div>
      </div>
    );
}