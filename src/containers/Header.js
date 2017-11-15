import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import styled from 'styled-components'
import Title from '../components/Title/index'

const { Text } = Title

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
