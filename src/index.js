import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './containers/Main'
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
