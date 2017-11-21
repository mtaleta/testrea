import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Input from '../components/Input'

const { Wrapper, Edit } = Input

export default class TodoTextInput extends Component {
  state = {
    text: this.props.text || ''
  }

  // 保存輸出
  handleSubmit = e => {
    // 去掉空白
    const text = e.target.value.trim()
    // 鍵盤按鍵enter = 13
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  // 變更輸入
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  // 存入變更
  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render () {
    return (
      <div>
        <Wrapper>
          <Edit className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
            type='text'
            placeholder={this.props.placeholder}
            autoFocus='true'
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
        />
        </Wrapper>
      </div>
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}
