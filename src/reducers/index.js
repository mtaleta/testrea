import { combineReducers } from 'redux'
import todos from './todos'
import WeatherReducer from './reducer_weather'
import PostsReducer from './reduce_blog'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  todos,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer
})

export default rootReducer
