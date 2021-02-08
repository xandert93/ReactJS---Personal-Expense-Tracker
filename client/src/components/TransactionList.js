import React, { useContext, useEffect } from 'react';
import { transactionsContext } from '../contexts/transactionsContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(transactionsContext);

  useEffect(() => {
    getTransactions();
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
