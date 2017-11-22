import { FETCH_WEATHER } from '../actions/weather_action'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
  }
  return state
}
