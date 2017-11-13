import get from 'lodash/get'

export default (key, defaultValue) => props => get(props, key, defaultValue)
