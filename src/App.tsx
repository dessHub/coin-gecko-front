import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import CoinInfoCard from './componets/CoinInfoCard';
import Dashboard from './componets/dashboard';

import Nav from "./componets/nav";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/info" element={<CoinInfoCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
