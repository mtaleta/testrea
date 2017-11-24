import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from moment
import {connect} from 'react-redux'

class PostItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  
  render () {
    const { id, open, text, ts} = this.props
    return (
      <div onClick={this.handleClick} >
        <div>
          <div className='ts'>{moment(ts * 1000).calender()}</div>
          <div className='text'>{text}</div>
        </div>
      </div>
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
