import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { BarChartFill, BorderWidth } from "react-bootstrap-icons";

export default function Nav() {
    return (
      <div className="nav-container">
        <button className="nav-btn">
          <BarChartFill className="nav-icon" />
        </button>

        <div className="nav-menu">
          <li className="nav-menu-item">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-menu-link active-nav" : "nav-menu-link"
              }
            >
              <BorderWidth className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to={"/info"}
              className={({ isActive }) =>
                isActive ? "nav-menu-link active-nav" : "nav-menu-link"
              }
            >
              <BarChartFill className="nav-icon" />
            </NavLink>
          </li>
        </div>
      </div>
    );
}