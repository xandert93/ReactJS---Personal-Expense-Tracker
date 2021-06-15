import React, { useReducer } from 'react';
import transactionsReducer from './transactionsReducer';
import { transactionsContext } from './transactionsContext';
import * as api from '../../api';

const defaultState = {
  isLoading: true,
  transactions: [],
  errMsg: '',
};

const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, defaultState);

  const getTransactions = async () => {
    dispatch({ type: 'SET_ISLOADING' });
    try {
      const res = await api.axGetTransactions();
      let { data: transactions } = res.data;
      dispatch({ type: 'GET_TRANSACTIONS', payload: transactions });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    dispatch({ type: 'SET_ISLOADING' });

    try {
      let res = await api.axAddTransaction(transaction);
      let { data: savedTransaction } = res.data;
      dispatch({ type: 'ADD_TRANSACTION', payload: savedTransaction });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (_id) => {
    dispatch({ type: 'SET_ISLOADING' });
    try {
      let res = await api.axDelTransaction(_id);
      res.status === 200 &&
        dispatch({ type: 'DELETE_TRANSACTION', payload: _id });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  return (
    <transactionsContext.Provider
      value={{ ...state, getTransactions, deleteTransaction, addTransaction }}>
      {children}
    </transactionsContext.Provider>
  );
};

export { TransactionsProvider };
