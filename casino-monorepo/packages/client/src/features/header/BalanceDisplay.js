import React from 'react';
import currencyIcon from '../../assets/currency.png';

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="balance">
      <img src={currencyIcon} alt="Currency" className="currency-icon" />
      <span>{balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
  );
};

export default BalanceDisplay;