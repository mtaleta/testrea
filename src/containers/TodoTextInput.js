import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styled from 'styled-components'

//外框消失border: none;
const Wrapper = styled.div`
padding: 16px 16px 16px 60px;
border: none;
`

const Edit = styled.input`
margin: 0;
font-size: 24px;
border: none;
outline: none;
`

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    //去掉空白
    const text = e.target.value.trim()
    //鍵盤按鍵enter = 13
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  //變更輸入
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  //存入變更
  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <Wrapper>
        <Edit className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}  
        />
      </Wrapper>
    )
  }
}
