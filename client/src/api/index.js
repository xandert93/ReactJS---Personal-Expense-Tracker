import axios from 'axios';

const baseURL = '/api/v1/transactions';

export const axGetTransactions = () => axios.get(baseURL);

export const axAddTransaction = (transaction) =>
  axios.post(baseURL, transaction);

export const axDelTransaction = (_id) => axios.delete(baseURL + '/' + _id);
