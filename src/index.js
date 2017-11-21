import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './containers/Main'
import Title from './containers/Title'
import reducer from './reducers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/main' component={Main} />
          <Route path='/' component={Title} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
