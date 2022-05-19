import React from "react";
import "./index.scss";
import { Search } from "react-bootstrap-icons";
import MarketLeaders from "../MarketLeaders";
import CoinsCard from "../CoinsCard";
import EventsCard from "../EventsCard";


export default function Dashboard () {

    return (
      <div className="dashboard">
        <div className="search-container">
          <Search className="search-icon" />
          <input className="search-input" placeholder="search" />
        </div>

        <div className="content-section">
          <div className="left-col">
            <MarketLeaders />

            <CoinsCard />
          </div>
          <div className="right-col">
            <EventsCard />
          </div>
        </div>
      </div>
    );
}