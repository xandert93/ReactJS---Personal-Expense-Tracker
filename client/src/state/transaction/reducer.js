import { SET_ISLOADING, FETCHED, CREATED, DELETED, ERROR } from './types';

const defaultState = {
  isLoading: true,
  transactions: [],
  errMsg: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ISLOADING:
      return { ...state, isLoading: true };

    case FETCHED:
      return { ...state, isLoading: false, transactions: action.payload };

    case CREATED:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    // case UPDATE:
    //   return {
    //     ...state,
    //     transactions: state.transactions.map((t) =>
    //       t._id !== action.payload._id ? t : action.payload
    //     ),
    //   };

    case DELETED:
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

    case ERROR:
      return { ...state, isLoading: false, errMsg: action.payload };

    default:
      return state;
  }
};
