import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { BarChartFill, BorderWidth } from "react-bootstrap-icons";

export default function Nav() {
    return (
      <div className="nav-container">
        <button className="nav-btn">
          <BarChartFill className="nav-icon" />
        </button>

        <div className="nav-menu">
          <li className="nav-menu-item">
            <Link to={"/"} className="nav-menu-link active-nav">
              <BorderWidth className="nav-icon" />
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to={"/info"} className="nav-menu-link">
              <BarChartFill className="nav-icon" />
            </Link>
          </li>
        </div>
      </div>
    );
}