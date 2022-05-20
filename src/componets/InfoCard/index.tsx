import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { Globe, Github, Reddit } from "react-bootstrap-icons";
import { RootState } from "../../app/store";

export default function InfoCard() {
  const {
    coin,
  } = useSelector((state: RootState) => state.info);
  const {
    description,
    image,
    market_data,
    country_origin,
    categories,
    hashing_algorithm,
  } = coin;
    
    return (
      <div className="info-card-cont">
        <div className="coin-icon-cont">
          {image && <img src={image.small} alt="" />}
        </div>
        <div className="title">Info Card</div>
        <div className="description-cont">
          <div>Description</div>
          <p>{description && description.en}</p>
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
            <span>{hashing_algorithm && hashing_algorithm}</span>
          </div>
          <div className="fact-row">
            <span>County Origin</span>
            <span>
              {country_origin || country_origin === ""
                ? "Unknown"
                : country_origin}
            </span>
          </div>
          <div className="fact-row">
            <span>Gategory</span>
            <span>{categories && categories[0]}</span>
          </div>
        </div>

        <div className="metrics-container">
          <div className="metric-row">
            <span>Total Supply</span>
            <span>{market_data && market_data.total_supply}</span>
          </div>
          <div className="metric-row">
            <span>Max Supply</span>
            <span>{market_data && market_data.max_supply}</span>
          </div>
          <div className="metric-row">
            <span>Circulating</span>
            <span>{market_data && market_data.circulating_supply}</span>
          </div>
        </div>
      </div>
    );
}