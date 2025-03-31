import React from "react";

function BalanceDisplay() {
  return (
    <div className="balance-cont">
      <div className="balance-title">
        <p>My Balance</p>
        <h2>$900.2</h2>
      </div>

      <div className="logo-cont">
        <img src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
}

export default BalanceDisplay;
