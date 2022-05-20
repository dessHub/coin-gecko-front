import React from "react";
import "./index.scss";

export default function RankCard({rank}) {
    
    return (
      <div className="rank-container">
        <div className="rank-card">
          <span>Alex Rank</span>
          <div className="amount">{rank}</div>
        </div>
      </div>
    );
}