import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todo';


export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case TOGGLE_TODO:
      return state.map((todo) => {
        if(todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
        
      }) 
    default:
      return state;
  }

}
