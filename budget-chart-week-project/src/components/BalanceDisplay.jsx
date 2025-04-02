import React from "react";

const calc = function(){
    const currentBalance = currentBalance - spendings;
    const spendings = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


}


function BalanceDisplay() {
  return (
    <div className="balance-cont">
      <div className="balance-title">
        <p>My Balance</p>
        <h2 id="add-current-balance">$900.2</h2>
      </div>

      <div className="logo-cont">
        <img src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
}

export default BalanceDisplay;
