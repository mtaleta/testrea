import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {dropdownSelect,
        inputchange,
        inputundanger,
        inputdanger,
        moodToggle,
        trueMoodToggle} from '../../actions/Post-action.js'
import {postForm,
        postItem,
        main} from '../../reducers/Post-reduces.js'

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.inputEl = null
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  render () {
    const {inputValue} = this.props
    const inputDanger = this.props.inputDanger ? 'has-danger' : ''

    return (
      <div>
        <div className={`{$inputDanger}`}>
          <input
            type='textarea'
            // getRef={el => { this.inputEl = el }}
            value={this.props.inputValue || ''}
            onChange={this.handleInputChange}
            placeholder='what?' />
          <button onClick={this.handlePost}>Post</button>
        </div>
      </div>
    )
  }

  handleInputChange (e) {
    const text = e.target.value
    this.props.dispatch(inputchange(text))
    if (text) {
      this.props.dispatch(inputundanger()) // 沒有文字時顯示提醒
    }
  }

  handlePost () {
    if (!this.props.inputValue) {
      this.props.dispatch(inputdanger())
      return
    }
    this.props.onPost(this.props.inputValue)
    this.props.dispatch(inputchange(''))
  }
}

PostForm.propTypes = {
  onPost: PropTypes.func,
  inputValue: PropTypes.string,
  inputDanger: PropTypes.bool
}

export default connect(state => ({
  ...state.postForm
}))(PostForm)
