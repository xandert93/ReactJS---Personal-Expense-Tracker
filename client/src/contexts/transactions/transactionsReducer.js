const transactionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ISLOADING':
      return { ...state, isLoading: true };

    case 'GET_TRANSACTIONS':
      return { ...state, isLoading: false, transactions: action.payload };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

    case 'TRANSACTIONS_ERR':
      return { ...state, isLoading: false, errMsg: action.payload };

    default:
      return state;
  }
};

export default transactionsReducer;
