import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const transactions = useSelector(
    ({ transaction }) => transaction.transactions,
    shallowEqual
  );

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
