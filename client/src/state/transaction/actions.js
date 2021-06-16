import { SET_ISLOADING, FETCHED, CREATED, DELETED, ERROR } from './types';
import * as api from '../../api';

const actionCreator = (type, payload = null) => ({ type, payload }); //find better practice to do this part

export const getTransactions = () => {
  return async (dispatch, getState) => {
    dispatch(actionCreator(SET_ISLOADING));

    try {
      const {
        data: { data: transactions },
      } = await api.axGetTransactions();
      dispatch(actionCreator(FETCHED, transactions));
    } catch (err) {
      dispatch(actionCreator(ERROR, err.response.data.error));
    }
  };
};

export const createTransaction = (transaction) => {
  return async (dispatch, getState) => {
    dispatch(actionCreator(SET_ISLOADING));

    try {
      const {
        data: { data: savedTransaction },
      } = await api.axAddTransaction(transaction);

      dispatch(actionCreator(CREATED, savedTransaction)); //need saved DB doc as it will have _id, unlike original
    } catch (err) {
      dispatch(actionCreator(ERROR, err.response.data.error));
    }
  };
};

export const deleteTransaction = (_id) => {
  return async (dispatch, getState) => {
    dispatch(actionCreator(SET_ISLOADING));

    try {
      let res = await api.axDelTransaction(_id);
      res.status === 200 && dispatch(actionCreator(DELETED, _id)); //200 is used for R || D
    } catch (err) {
      dispatch(actionCreator(ERROR, err.response.data.error));
    }
  };
};
