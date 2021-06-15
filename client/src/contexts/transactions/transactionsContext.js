import { createContext } from 'react';

const defaultState = {
  isLoading: true,
  transactions: [],
  errMsg: '',
};

const transactionsContext = createContext(defaultState);

export { transactionsContext };
