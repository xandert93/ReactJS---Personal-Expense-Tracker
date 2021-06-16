import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk';

export default createStore(rootReducer, compose(applyMiddleware(ReduxThunk)));
