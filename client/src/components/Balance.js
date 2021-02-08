import React, { useContext } from 'react';
import { transactionsContext } from '../contexts/transactionsContext';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(transactionsContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acca, amount) => acca + amount, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>£{numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
