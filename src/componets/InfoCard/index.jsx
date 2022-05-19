import React from "react";
import "./index.scss";
import { Globe, Github, Reddit } from "react-bootstrap-icons";

export default function InfoCard() {
    
    return (
      <div className="info-card-cont">
        <div className="coin-icon-cont"></div>
        <div className="title">Info Card</div>
        <div className="description-cont">
          <div>Description</div>
          <p>lkfldkfld lkdfldkfld lkfldkfld lkfldkfd lkdfldkfdl lkfdlkfd</p>
        </div>

        <div className="sites">
          <div className="site-card">
            <label>Website</label>
            <Globe className="icon globe" />
          </div>
          <div className="site-card">
            <Reddit className="icon reddit" />
          </div>
          <div className="site-card github">
            <Github className="icon" />
          </div>
        </div>

        <div className="facts-container">
          <div className="title">Facts</div>
          <div className="divider"></div>
          <div className="fact-row">
            <span>Hashing Algorithm</span>
            <span>SHA-256</span>
          </div>
          <div className="fact-row">
            <span>County Origin</span>
            <span>Unknown</span>
          </div>
          <div className="fact-row">
            <span>Gategory</span>
            <span>Cyptocurreny</span>
          </div>
        </div>

        <div className="metrics-container">
          <div className="metric-row">
            <span>Total Supply</span>
            <span>21000000.0</span>
          </div>
          <div className="metric-row">
            <span>Max Supply</span>
            <span>21000000.0</span>
          </div>
          <div className="metric-row">
            <span>Circulating</span>
            <span>21000000.0</span>
          </div>
        </div>
      </div>
    );
}