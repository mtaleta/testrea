import { combineReducers } from 'redux'
import todos from './todos'
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  todos,
  weather: WeatherReducer
})

export default rootReducer
