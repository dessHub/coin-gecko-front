import React from "react";
import "./index.scss";
import Form from "react-bootstrap/Form";
import { ArrowRight } from "react-bootstrap-icons";

export default function ExchangeCardInfo() {
    
    return (
      <div className="exchange-card-cont">
        <div className="title">Exchange</div>
        <div className="input-row">
          <div className="input-cont">
            <label>Sell</label>
            <input placeholder="100" />
          </div>
          <Form.Select aria-label="Select menu">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="KES">KES</option>
          </Form.Select>
        </div>
        <div className="input-row">
          <div className="input-cont">
            <label>Buy</label>
            <input placeholder="100" />
          </div>
          <Form.Select aria-label="Select menu">
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </Form.Select>
        </div>
        <div className="bottom">
          <label>1 BTC = 83834.34 USD</label>
          <button>
            Exchange <ArrowRight className="icon" />
          </button>
        </div>
      </div>
    );
}