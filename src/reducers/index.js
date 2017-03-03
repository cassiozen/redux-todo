import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { filterReducer } from './filter';

export default combineReducers({ todos: todoReducer, activeFilter: filterReducer });
