const appReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        transactions: state.transactions.filter(
          ({ id }) => id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return { transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};

export default appReducer;
