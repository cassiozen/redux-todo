import { createStore } from 'redux';
import indexReducer from '../reducers';

export default createStore(
  indexReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
