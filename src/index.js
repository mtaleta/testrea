import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducer from './reducers'
import Main from './containers/Todos/Main'
import Title from './containers/Title'
import App from './components/app'
import Video from './components/Youtube/video_index'
import Blog from './components/Blog/posts_index'
import PostNew from './components/Blog/posts_new'
import PostsShow from './components/Blog/post_show'
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
          <Route exact path='/' component={Title} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/new' component={PostNew} />
          <Route exact path='/blog/:id' component={PostsShow} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/app' component={App} />
          <Route exact path='/video' component={Video} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
