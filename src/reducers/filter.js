import { SHOW_ALL, SHOW_ACTIVE, CHANGE_FILTER } from '../actions/filter';

export const filterReducer = (state = SHOW_ALL, action) => {
  if(action.type === CHANGE_FILTER){
    return action.filter;
  }
  return state;
}
