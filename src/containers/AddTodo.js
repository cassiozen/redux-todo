import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/todo';

let AddTodo = ({ onAddTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAddTodo(input.value)
        input.value = ''
      }}>
        <input className="input" ref={node => input = node} />
        <button className="submit" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: title => dispatch(add(title))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
