import { createStore, applyMiddleware } from 'redux';
import indexReducer from '../reducers';
import thunk from 'redux-thunk';

export default createStore(
  indexReducer,
  applyMiddleware(thunk)
);
