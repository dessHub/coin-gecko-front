import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./index.scss";

export default function Loader() {
    
    return (
      <div className="loader-container">
        <Spinner animation="grow" />
      </div>
    );
}