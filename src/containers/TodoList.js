import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggle, remove } from '../actions/todo';
import Todo from '../components/Todo'

const TodoList = ({ todos, onTodoToggle, onTodoRemove }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onToggle={() => onTodoToggle(todo.id)}
        onRemove={() => onTodoRemove(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
}

const mapStatetoProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoToggle: id => dispatch(toggle(id)),
    onTodoRemove: id => dispatch(remove(id))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
