import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import moment from moment
import {connect} from 'react-redux'
import {tooltipTrue} from '../../actions/Post-action.js'
import List2 from '../List2'

const { Li, Item, Text } = List2

class PostItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const {id, open, text} = this.props
    return (
      <Li onClick={this.handleClick} >
        <Item>
          { /* <div className='ts'>{moment(ts * 1000).calender()}</div> */}
          <Text className='text'>{text}</Text>
        </Item>
      </Li>
    )
  }

  handleClick () {
    console.log('handleClick 按爽的' + this.props.open)
    this.props.dispatch(tooltipTrue())
    this.props.onVote(this.props.id, 'True')
  }
}

export default connect(state => ({
  ...state.postItem
}))(PostItem)
