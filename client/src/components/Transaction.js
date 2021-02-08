import React, { useContext } from 'react';
import { transactionsContext } from '../contexts/transactionsContext';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(transactionsContext);
  let { _id, description, amount } = transaction;
  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {description}
      <span>
        {sign}£{numberWithCommas(Math.abs(amount))}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
