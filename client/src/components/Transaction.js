import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../state/transaction/actions';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  let { _id, description, amount } = transaction;
  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {description}
      <span>
        {sign}£{numberWithCommas(Math.abs(amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTransaction(_id))}>
        x
      </button>
    </li>
  );
};

export default Transaction;
