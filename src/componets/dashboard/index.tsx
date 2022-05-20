import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Search } from "react-bootstrap-icons";
import MarketLeaders from "../MarketLeaders";
import CoinsCard from "../CoinsCard";
import EventsCard from "../EventsCard";
import { fetchCoins } from "../../features/coinsSlice";
import { AppDispatch, RootState } from "../../app/store";


export default function Dashboard() {
  // initialize the redux hook
  const dispatch = useDispatch<AppDispatch>();
  const { coins, isLoading } = useSelector(
    (state: RootState) => state.coins
  );

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="search-container">
        <Search className="search-icon" />
        <input className="search-input" placeholder="search" />
      </div>

      <div className="content-section">
        <div className="left-col">
          <MarketLeaders coins={coins} isLoading={isLoading} />

          <CoinsCard coins={coins} isLoading={isLoading} />
        </div>
        <div className="right-col">
          <EventsCard />
        </div>
      </div>
    </div>
  );
}