import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
// import Promise from 'redux-promise'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducer from './reducers'
import Main from './containers/Todos/Main'
import Title from './containers/Menu'
import App from './containers/Weather/app'
import Video from 'components/Youtube/video_index'
import Blog from 'components/Blog/posts_index'
import PostNew from 'components/Blog/posts_new'
import PostsShow from 'components/Blog/post_show'
import CanvasIndex from 'components/Canvas/index'
import Book from 'components/Book/index'
import WeatherMood from 'components/WeatherMood/Main'
// import 'bootstrap/dist/css/bootstrap.css'

// 加入middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
 composeEnhancers(applyMiddleware(thunkMiddleware)))

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
          <Route exact path='/canvas' component={CanvasIndex} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/new' component={PostNew} />
          <Route exact path='/blog/:id' component={PostsShow} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/app' component={App} />
          <Route exact path='/video' component={Video} />
          <Route exact path='/book' component={Book} />
          <Route exact path='/weathermood' component={WeatherMood} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
