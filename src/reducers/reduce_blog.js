import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/blog_action'

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      // omit返回忽略屬性之外的自身和繼承的可枚舉屬性
      return _.omit(state, action.payload.data)
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
