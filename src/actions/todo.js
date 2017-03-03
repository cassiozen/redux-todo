export const FETCH_TODOS = 'fetch';
export const TODOS_FETCHING = 'fetching';
export const TODOS_FETCHED = 'fetched';
export const ADD_TODO = "add";
export const REMOVE_TODO = "remove";
export const TOGGLE_TODO = "toggle";

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch({type: TODOS_FETCHING})
    fetch('https://todo-hapi-postgres.herokuapp.com')
    .then(response => response.json())
    .then(todos => dispatch({type: TODOS_FETCHED, todos}))
  }
}

export const add = (title) => {
  return {
    type: ADD_TODO,
    todo: {
      id: (new Date()).getTime(),
      completed: false,
      title
    }
  }
};

export const remove = (id) => {
  return { type: REMOVE_TODO, id }
};

export const toggle = (id) => {
  return { type: TOGGLE_TODO, id }
}
