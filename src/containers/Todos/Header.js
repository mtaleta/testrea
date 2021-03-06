import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import Title from 'components/Title'

const { Text } = Title

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
  }
  // 存入text
  handleSave (text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render () {
    return (
      <header className='header'>
        <Text>todos</Text>
        <TodoTextInput newTodo
          onSave={this.handleSave}
          placeholder='What needs to be done?' />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
