import { combineReducers } from 'redux'
import todos from './todos'
import WeatherReducer from './reducer_weather'
import PostsReducer from './reduce_blog'
import { reducer as formReducer } from 'redux-form'
import BookReducer from './book'
import ActivBook from './activ_book'

const rootReducer = combineReducers({
  todos,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer,
  books: BookReducer,
  activBook: ActivBook
})

export default rootReducer
