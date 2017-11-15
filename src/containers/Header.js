import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import styled from 'styled-components'

const Text = styled.h1`
  position: inherit;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.35);
  line-height: 19px;
  text-shadow: 3px 4px 7px #cccccc;
`

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  //存入text
  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <Text>todos</Text>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder='What needs to be done?' />
      </header>
    )
  }
}
