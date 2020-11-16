import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const defaultState = {
  transactions: [],
};

const GlobalContext = createContext(defaultState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, defaultState);
  let { transactions } = state;

  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <GlobalContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
