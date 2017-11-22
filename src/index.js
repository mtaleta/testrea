import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducer from './reducers'
import Main from './containers/Main'
import Title from './containers/Title'
import App from './components/app'
import Video from './components/video_index'

// import 'bootstrap/dist/css/bootstrap.css'

// 加入middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
 composeEnhancers(applyMiddleware(ReduxPromise)))

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/main' component={Main} />
          <Route path='/app' component={App} />
          <Route path='/video' component={Video} />
          <Route path='/' component={Title} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
