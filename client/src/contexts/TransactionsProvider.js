import React, { useReducer } from 'react';
import axios from 'axios';
import transactionsReducer from './transactionsReducer';
import { transactionsContext } from './transactionsContext';

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
      const res = await axios.get('/api/v1/transactions');
      let { data: transactions } = res.data;
      dispatch({ type: 'GET_TRANSACTIONS', payload: transactions });
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
      let res = await axios.delete(`/api/v1/transactions/${_id}`);
      res.status === 200 &&
        dispatch({ type: 'DELETE_TRANSACTION', payload: _id });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    dispatch({ type: 'SET_ISLOADING' });
    let config = {
      'Content-Type': 'application/json',
    };
    try {
      let res = await axios.post('/api/v1/transactions', transaction, config);
      let { data: savedTransaction } = res.data;
      dispatch({ type: 'ADD_TRANSACTION', payload: savedTransaction });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  return (
    <transactionsContext.Provider
      value={{ ...state, getTransactions, deleteTransaction, addTransaction }}
    >
      {children}
    </transactionsContext.Provider>
  );
};

export { TransactionsProvider };
