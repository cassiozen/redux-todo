import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import todoStore from './store/todoStore';
import App from './containers/App'
import './index.css';

render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
