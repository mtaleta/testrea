import { combineReducers } from 'redux'
import todos from './todos'
import { PostsReducer, WeatherReducer } from './reduce_blog'
import { reducer as formReducer } from 'redux-form'
import { ActivBook, BookReducer } from './activ_book'
import { postForm, postItem, main } from './Post-reduces'
import { counter, countdown } from '../components/Saga/reducers/counter'

const rootReducer = combineReducers({
  todos,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer,
  books: BookReducer,
  activBook: ActivBook,
  postForm,
  postItem,
  main,
  countdown,
  counter
})

export default rootReducer
