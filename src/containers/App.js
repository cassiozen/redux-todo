import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
