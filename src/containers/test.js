import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import Title from 'components/Title/index'
import addTodo from '../reducers/todos'
import { connect } from 'react-redux'
const { Text } = Title

class Header extends Component {
  constructor (props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
  }
  // 存入text
  handleSave (text) {
    if (text.length !== 0) {
      this.props.dispatch(addTodo(text))
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleSave: (text) => {
      dispatch(ADD_TODO(text))
    }
  }
}

export default connect(mapDispatchToProps)(Header)
