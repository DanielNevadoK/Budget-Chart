import React from "react";

function DataDisplay() {
  return (
    <div className="data-display-cont">
      <div className="dd-title">
        <h2>Spendig last - 7 days</h2>
      </div>
      <div className="dd-chart"></div>
      <div className="dd-summary">
        <div className="dd-sum-text">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DataDisplay;
