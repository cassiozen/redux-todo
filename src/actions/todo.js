export const ADD_TODO = "add";
export const REMOVE_TODO = "remove";
export const TOGGLE_TODO = "toggle";

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
