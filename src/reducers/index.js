import { combineReducers } from 'redux'
import todos from './todos'
import { PostsReducer, WeatherReducer } from './reduce_blog'
import { reducer as formReducer } from 'redux-form'
import { ActivBook, BookReducer } from './activ_book'

const rootReducer = combineReducers({
  todos,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer,
  books: BookReducer,
  activBook: ActivBook
})

export default rootReducer
