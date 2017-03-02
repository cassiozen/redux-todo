import { createStore } from 'redux';
import { todoReducer } from '../reducers/todo';

export default createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
