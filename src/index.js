import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
// import Promise from 'redux-promise'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../node_modules/ress/dist/ress.min.css' // 重構css,避免不同瀏覽器跑版
import '../node_modules/font-awesome/css/font-awesome.min.css' // icon
import reducer from './reducers'
import NotFound from './containers/NotFound/NotFound'
import Main from './containers/Todos/Main'
import Title from './components/Section/Section'
import Menu from './containers/Menu'
import App from './containers/Weather/app'
import Video from 'components/Youtube/video_index'
import Blog from 'components/Blog/posts_index'
import PostNew from 'components/Blog/posts_new'
import PostsShow from 'components/Blog/post_show'
import CanvasIndex from 'components/Canvas/index'
import Book from 'components/Book/index'
import WeatherMood from 'components/WeatherMood/Main'
import Count from './components/Saga/components/Count'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './components/Saga/sagas'
// import 'bootstrap/dist/css/bootstrap.css'

// 加入saga// create saga middleware
const sagaMiddleware = createSagaMiddleware()
// middleware改為sagas //blog用promise,,要使用時再改回
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
  )
sagaMiddleware.run(rootSaga)

// 加入middleware,thunk及promise
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(
//   reducer,
//  composeEnhancers(applyMiddleware(thunkMiddleware, Promise)))

// 只有createStore
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Title} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/canvas' component={CanvasIndex} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/new' component={PostNew} />
          <Route exact path='/blog/:id' component={PostsShow} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/app' component={App} />
          <Route exact path='/video' component={Video} />
          <Route exact path='/book' component={Book} />
          <Route exact path='/weathermood' component={WeatherMood} />
          <Route exact path='/saga' component={Count} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
