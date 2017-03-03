import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todo';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div>
        <div className="content">
          <AddTodo />
          <TodoList />
        </div>
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  fetchTodos: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  }
}

export default connect(null, mapDispatchToProps)(App);
