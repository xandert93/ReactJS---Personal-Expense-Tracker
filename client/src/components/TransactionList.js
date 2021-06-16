import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTransactions } from '../state/transaction/actions';
import Transaction from './Transaction';

const TransactionList = () => {
  const transactions = useSelector(
    ({ transaction }) => transaction.transactions,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
