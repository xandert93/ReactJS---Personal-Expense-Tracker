import React, { useContext } from 'react';
import { transactionsContext } from '../contexts/transactionsContext';
import { numberWithCommas } from '../utils/format';

const IncomeExpenses = () => {
  const { transactions } = useContext(transactionsContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acca, incomeAmount) => acca + incomeAmount, 0)
    .toFixed(2);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acca, expenseAmount) => acca + expenseAmount, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+£{numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-£{numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
