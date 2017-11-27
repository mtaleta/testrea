import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import From from 'components/From'
import {inputchange,
        inputundanger,
        inputdanger} from '../../actions/Post-action.js'
// import {postForm,
//         postItem,
//         main} from '../../reducers/Post-reduces.js'

const { Wrapper, Texts, Button } = From

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.inputEl = null
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  render () {
    const {inputValue} = this.props
    // const inputDanger = this.props.inputDanger ? 'has-danger' : ''

    return (
      <div>
        <Wrapper className={`{$inputDanger}`}>
          <Texts
            type='textarea'
            getRef={el => { this.inputEl = el }}
            value={this.props.inputValue || ''}
            onChange={this.handleInputChange}
            placeholder='what?' />
          <Button onClick={this.handlePost}>Post</Button>
        </Wrapper>
      </div>
    )
  }
  // 保存輸入文字
  handleInputChange (e) {
    const text = e.target.value
    this.props.dispatch(inputchange(text))
    if (text) {
      this.props.dispatch(inputundanger()) // 沒有文字時顯示提醒
    }
  }
  // // react官方提供
  // handleChange (event) {
  //   this.setState({value: event.target.value});
  // }

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
